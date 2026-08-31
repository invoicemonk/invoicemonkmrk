import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const failures = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

for (const file of walk(path.join(root, 'src'))) {
  if (!/\.(?:ts|tsx|json)$/.test(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  if (file.endsWith('legacy-url-rules.ts') || file.endsWith('enhanceLinks.ts')) continue;
  for (const pattern of ['__LANG__', '/en/en', '/enhttps']) {
    if (text.includes(pattern)) failures.push(`${path.relative(root, file)} contains ${pattern}`);
  }
  if (/href=["'][^"']*<a\s+href=/i.test(text)) failures.push(`${path.relative(root, file)} contains nested anchor markup in an href`);
}

const sitemap = fs.readFileSync(path.join(root, 'dist/sitemap.xml'), 'utf8');
const sitemapPaths = [...sitemap.matchAll(/<loc>https:\/\/invoicemonk\.com([^<]+)<\/loc>/g)].map((match) => match[1]);
for (const route of sitemapPaths) {
  const html = path.join(root, 'dist', route.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(html)) failures.push(`sitemap route is not prerendered: ${route}`);
}

const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const seen = new Set();
for (const redirect of vercel.redirects) {
  if (seen.has(redirect.source)) failures.push(`duplicate redirect source: ${redirect.source}`);
  seen.add(redirect.source);
  if (redirect.source === redirect.destination) failures.push(`redirect loop: ${redirect.source}`);
}

if (failures.length) {
  console.error(`[route-audit] ${failures.length} failure(s):\n${failures.map((item) => `- ${item}`).join('\n')}`);
  process.exit(1);
}
console.log(`[route-audit] passed: ${sitemapPaths.length} sitemap routes are prerendered and malformed URL patterns are absent`);