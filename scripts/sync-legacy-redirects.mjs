import fs from 'node:fs';

const source = fs.readFileSync(new URL('../src/seo/legacy-url-rules.ts', import.meta.url), 'utf8');
const rules = [...source.matchAll(/\{ source: '([^']+)'(?:, destination: '([^']+)')?, status: (301|410) \}/g)]
  .map(([, source, destination, status]) => ({ source, destination, status: Number(status) }));
const redirects = rules
  .filter((rule) => rule.status === 301)
  .map(({ source, destination }) => ({ source, destination, statusCode: 301 }));

const configPath = new URL('../vercel.json', import.meta.url);
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const managedSources = new Set(redirects.map((rule) => rule.source));
config.redirects = [...redirects, ...config.redirects.filter((rule) => !managedSources.has(rule.source))];
fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
console.log(`[redirects] synchronized ${redirects.length} canonical legacy redirects`);