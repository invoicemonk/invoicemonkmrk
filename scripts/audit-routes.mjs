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

// The canonical legacy mappings live in TypeScript so middleware and tooling
// can share them. Ensure every 301 mapping was synchronized into the hosting
// configuration; otherwise the app's 404 rewrite wins before React can help.
const legacyRulesSource = fs.readFileSync(path.join(root, 'src/seo/legacy-url-rules.ts'), 'utf8');
const legacyRedirects = [...legacyRulesSource.matchAll(/\{ source: '([^']+)', destination: '([^']+)', status: 301 \}/g)]
  .map(([, source, destination]) => ({ source, destination }));
const configuredRedirects = new Map(vercel.redirects.map((redirect) => [redirect.source, redirect]));
for (const expected of legacyRedirects) {
  const configured = configuredRedirects.get(expected.source);
  if (!configured) {
    failures.push(`missing canonical legacy redirect: ${expected.source}`);
    continue;
  }
  if (configured.destination !== expected.destination) {
    failures.push(`wrong destination for ${expected.source}: expected ${expected.destination}, found ${configured.destination}`);
  }
  if (configured.statusCode !== 301 && configured.permanent !== true) {
    failures.push(`legacy redirect is not permanent: ${expected.source}`);
  }
}

if (failures.length) {
  console.error(`[route-audit] ${failures.length} failure(s):\n${failures.map((item) => `- ${item}`).join('\n')}`);
  process.exit(1);
}
console.log(`[route-audit] passed: ${sitemapPaths.length} sitemap routes are prerendered and malformed URL patterns are absent`);