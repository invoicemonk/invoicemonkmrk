/**
 * RSS Feed Generator — /rss.xml
 *
 * Emits the 50 most recently updated blog posts (English only) as an
 * RSS 2.0 feed. Mirrors what the sitemap covers minus the legacy
 * 301-redirected slugs.
 *
 * Run: bunx tsx scripts/generate-rss.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://invoicemonk.com';
const FEED_TITLE = 'Invoicemonk Blog — E-Invoicing, Compliance & Small Business Finance';
const FEED_DESC =
  'Mandate-compliant e-invoicing guides, compliance playbooks, and small-business invoicing how-tos from Invoicemonk.';
const FEED_LANG = 'en';
const MAX_ITEMS = 50;

const LEGACY_REDIRECTED = new Set([
  'e-invoicing-india-gst-guide',
  'e-invoicing-malaysia-myinvois-guide',
  'e-invoicing-saudi-zatca-guide',
  'e-invoicing-nigeria-firs-guide',
  'e-invoicing-kenya-etims',
]);

interface Item {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function pickValue(block: string, key: string): string | undefined {
  const m = block.match(new RegExp(`${key}:\\s*['\"]([^'\"]+)['\"]`));
  return m ? m[1] : undefined;
}

function scanFile(file: string, items: Item[]) {
  if (!fs.existsSync(file)) return;
  const src = fs.readFileSync(file, 'utf-8');
  const postBlocks = src.split(/(?=\n\s*\{\s*\n\s*slug:\s*['"])/);
  for (const block of postBlocks) {
    const slug = pickValue(block, 'slug');
    if (!slug) continue;
    if (LEGACY_REDIRECTED.has(slug)) continue;
    const title = pickValue(block, 'title');
    if (!title) continue;
    const lastAudited = pickValue(block, 'lastAudited');
    const dateModified = pickValue(block, 'dateModified');
    const date = pickValue(block, 'date');
    const best = lastAudited || dateModified || date;
    if (!best) continue;
    const excerpt = pickValue(block, 'excerpt') || '';
    const category = pickValue(block, 'category');
    items.push({ slug, title, excerpt, date: best, category });
  }
}

function main() {
  const files = [
    'blogPosts.ts',
    'countryCompliancePosts.ts',
    ...Array.from({ length: 12 }, (_, i) => `blogPostsCluster${i + 9}.ts`),
    'blogPostsClusterEInvoicing.ts',
    'blogPostsClusterEInvoicing2.ts',
    'blogPostsClusterEInvoicing3.ts',
    'blogPostsClusterEInvoicing4.ts',
    'blogPostsClusterEInvoicing5.ts',
    'blogPostsClusterEInvoicing6.ts',
  ];

  const all: Item[] = [];
  const seen = new Set<string>();
  for (const f of files) {
    const tmp: Item[] = [];
    scanFile(path.join(__dirname, '../src/data', f), tmp);
    for (const it of tmp) {
      if (seen.has(it.slug)) continue;
      seen.add(it.slug);
      all.push(it);
    }
  }

  all.sort((a, b) => (a.date < b.date ? 1 : -1));
  const items = all.slice(0, MAX_ITEMS);
  const buildDate = new Date().toUTCString();
  const latestPubDate = items[0] ? new Date(items[0].date).toUTCString() : buildDate;

  const xmlItems = items
    .map((it) => {
      const link = `${SITE_URL}/en/blog/${it.slug}`;
      const pubDate = new Date(it.date).toUTCString();
      const category = it.category ? `\n      <category>${escapeXml(it.category)}</category>` : '';
      return `    <item>
      <title>${escapeXml(it.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>${category}
      <description>${escapeXml(it.excerpt)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/en/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(FEED_DESC)}</description>
    <language>${FEED_LANG}</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <pubDate>${latestPubDate}</pubDate>
${xmlItems}
  </channel>
</rss>`;

  const outPath = path.join(__dirname, '../public/rss.xml');
  fs.writeFileSync(outPath, xml, 'utf-8');
  console.log(`✅ RSS: ${items.length}/${all.length} items → public/rss.xml`);
}

main();
