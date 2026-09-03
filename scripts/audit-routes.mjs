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

// ---------------------------------------------------------------------------
// Internal content links must resolve to a real page.
//
// `/en/blog/:slug` style routes match anything, so the router alone cannot tell
// a good link from a typo. Validate collection links against the slug
// registries and everything else against the static route table in App.tsx.
// ---------------------------------------------------------------------------
const dataDir = path.join(root, 'src/data');
const dataFiles = fs
  .readdirSync(dataDir)
  .filter((name) => name.endsWith('.ts'))
  .map((name) => path.join(dataDir, name));

const slugsFrom = (predicate) => {
  const set = new Set();
  for (const file of dataFiles.filter((f) => predicate(path.basename(f)))) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(/\bslug:\s*'([^']+)'/g)) set.add(match[1]);
  }
  return set;
};

const blogSlugs = slugsFrom((name) => /^blogPosts/.test(name) || name === 'countryCompliancePosts.ts');
const helpSlugs = slugsFrom((name) => name === 'helpGuides.ts');
const glossarySlugs = slugsFrom((name) => name === 'glossaryTerms.ts');
const mandateSlugs = slugsFrom((name) => name === 'mandates.ts');
const pillarSlugs = slugsFrom((name) => name === 'topicalMap.ts');

const topicalMapSource = fs.readFileSync(path.join(dataDir, 'topicalMap.ts'), 'utf8');
const topicIds = new Set([...topicalMapSource.matchAll(/\bid:\s*'([^']+)'/g)].map((match) => match[1]));
const authorsSource = fs.readFileSync(path.join(dataDir, 'authors.ts'), 'utf8');
const authorSlugs = new Set([...authorsSource.matchAll(/^\s{2}'?([a-z0-9-]+)'?:\s*\{/gm)].map((match) => match[1]));

const appSource = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
const declaredRoutes = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((route) => route !== '*' && route !== '/')
  .map((route) => route.replace(/^\//, ''));
// Param-free routes are exact pages; they also shadow collection wildcards.
const staticRoutes = new Set(declaredRoutes.filter((route) => !route.includes(':')));
const routeMatchers = declaredRoutes
  .filter((route) => route.includes(':'))
  .map(
    (route) =>
      new RegExp(
        `^${route
          .split('/')
          .map((segment) =>
            segment.startsWith(':') ? '[^/]+' : segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
          )
          .join('/')}$`,
      ),
  );


const legacyRedirectSources = new Set(
  [...fs.readFileSync(path.join(root, 'src/seo/legacy-url-rules.ts'), 'utf8').matchAll(/\{ source: '([^']+)'/g)]
    .map((match) => match[1]),
);

const COLLECTIONS = [
  { prefix: 'blog/topic/', slugs: topicIds },
  { prefix: 'blog/author/', slugs: authorSlugs },
  { prefix: 'blog/', slugs: blogSlugs },
  { prefix: 'help/', slugs: helpSlugs },
  { prefix: 'glossary/', slugs: glossarySlugs },
  { prefix: 'e-invoicing/', slugs: mandateSlugs },
  { prefix: 'guides/', slugs: pillarSlugs },
];

const brokenLinks = new Set();
for (const file of dataFiles) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/href=["'](\/en\/[^"'#?]*)/g)) {
    const target = match[1].replace(/\/$/, '');
    if (legacyRedirectSources.has(target)) continue;
    const rest = target.slice('/en/'.length);
    if (!rest) continue;

    const collection = COLLECTIONS.find((entry) => rest.startsWith(entry.prefix));
    if (collection) {
      const slug = rest.slice(collection.prefix.length);
      // Static routes (e.g. guides/invoicing) shadow the collection wildcard.
      if (collection.slugs.has(slug) || staticRoutes.has(rest)) continue;
      brokenLinks.add(`${path.relative(root, file)} links to a non-existent page: ${target}`);
      continue;
    }

    if (!staticRoutes.has(rest) && !routeMatchers.some((re) => re.test(rest))) {
      brokenLinks.add(`${path.relative(root, file)} links to a non-existent page: ${target}`);
    }
  }
}
failures.push(...brokenLinks);

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