/**
 * Multi-country Sitemap Generator with hreflang
 *
 * Generates sitemap.xml with all country-prefixed URLs and
 * xhtml:link hreflang annotations for each variant.
 *
 * Run: npx tsx scripts/generate-sitemap.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://invoicemonk.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// Country prefixes and their hreflang codes
const countries = [
  { prefix: 'ng', hreflang: 'en-NG' },
  { prefix: 'us', hreflang: 'en-US' },
  { prefix: 'ca', hreflang: 'en-CA' },
  { prefix: 'uk', hreflang: 'en-GB' },
  { prefix: 'au', hreflang: 'en-AU' },
  { prefix: 'gh', hreflang: 'en-GH' },
  { prefix: 'ke', hreflang: 'en-KE' },
  { prefix: 'za', hreflang: 'en-ZA' },
  { prefix: 'ph', hreflang: 'en-PH' },
  { prefix: 'zw', hreflang: 'en-ZW' },
  { prefix: 'in', hreflang: 'en-IN' },
  { prefix: 'sc', hreflang: 'en-SC' },
  { prefix: 'de', hreflang: 'de-DE' },
  { prefix: 'br', hreflang: 'pt-BR' },
  { prefix: 'nz', hreflang: 'en-NZ' },
  { prefix: 'fr', hreflang: 'fr-FR' },
];

interface PageEntry {
  path: string; // relative path without country prefix, e.g. "/pricing"
  changefreq?: string;
  priority?: number;
}

// ── Static pages ──
const staticPages: PageEntry[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/invoicing', priority: 0.9, changefreq: 'weekly' },
  { path: '/expenses', priority: 0.9, changefreq: 'weekly' },
  { path: '/payments', priority: 0.9, changefreq: 'weekly' },
  { path: '/accounting', priority: 0.9, changefreq: 'weekly' },
  { path: '/estimates', priority: 0.9, changefreq: 'weekly' },
  { path: '/receipts', priority: 0.9, changefreq: 'weekly' },
  { path: '/pricing', priority: 0.8, changefreq: 'weekly' },
  { path: '/why-invoicemonk', priority: 0.8, changefreq: 'monthly' },
  { path: '/compliance', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/freelancers', priority: 0.8, changefreq: 'monthly' },
  { path: '/consultants', priority: 0.8, changefreq: 'monthly' },
  { path: '/contractors', priority: 0.8, changefreq: 'monthly' },
  { path: '/small-businesses', priority: 0.8, changefreq: 'monthly' },
  { path: '/agencies', priority: 0.8, changefreq: 'monthly' },
  { path: '/photographers', priority: 0.8, changefreq: 'monthly' },
  { path: '/lawyers', priority: 0.8, changefreq: 'monthly' },
  { path: '/accountants', priority: 0.8, changefreq: 'monthly' },
  { path: '/ecommerce', priority: 0.8, changefreq: 'monthly' },
  { path: '/creatives', priority: 0.8, changefreq: 'monthly' },
  { path: '/client-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/free-invoice-generator', priority: 0.8, changefreq: 'monthly' },
  { path: '/best-invoicing-software', priority: 0.8, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-freshbooks', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-wave', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-zoho-invoice', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-quickbooks', priority: 0.7, changefreq: 'monthly' },
  { path: '/use-cases/recurring-billing', priority: 0.7, changefreq: 'monthly' },
  { path: '/use-cases/multi-currency-invoicing', priority: 0.7, changefreq: 'monthly' },
  { path: '/use-cases/milestone-billing', priority: 0.7, changefreq: 'monthly' },
  { path: '/use-cases/retainer-billing', priority: 0.7, changefreq: 'monthly' },
  { path: '/international-payment-fee-calculator', priority: 0.8, changefreq: 'weekly' },
  { path: '/paypal-vs-wise-fees', priority: 0.8, changefreq: 'weekly' },
  { path: '/cheapest-way-to-receive-international-payments', priority: 0.8, changefreq: 'weekly' },
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  { path: '/guides', priority: 0.8, changefreq: 'weekly' },
  { path: '/glossary', priority: 0.6, changefreq: 'monthly' },
  { path: '/explore', priority: 0.6, changefreq: 'monthly' },
  { path: '/help', priority: 0.6, changefreq: 'monthly' },
  { path: '/developer', priority: 0.5, changefreq: 'monthly' },
  { path: '/docs/api', priority: 0.6, changefreq: 'monthly' },
  { path: '/legal/sla', priority: 0.3, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/cookie-policy', priority: 0.3, changefreq: 'yearly' },
];

const guideSlugs = ['invoicing', 'getting-paid', 'business-finances', 'tax-compliance', 'freelancing', 'estimates', 'expenses', 'client-management'];

function extractSlugs(filePath: string, pattern: RegExp): string[] {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(pattern);
    if (!matches) return [];
    return matches.map(m => { const s = m.match(/['"]([^'"]+)['"]/); return s ? s[1] : ''; }).filter(Boolean);
  } catch { return []; }
}

function getCorridors(): Array<{ currency: string; country: string }> {
  try {
    const content = fs.readFileSync(path.join(__dirname, '../src/config/paymentFeeModels.ts'), 'utf-8');
    const re = /currency:\s*['"]([^'"]+)['"],\s*country:\s*['"]([^'"]+)['"]/g;
    const results: Array<{ currency: string; country: string }> = [];
    let m; while ((m = re.exec(content)) !== null) results.push({ currency: m[1], country: m[2] });
    return results;
  } catch { return []; }
}

/** Build hreflang links for a given relative path */
function hreflangLinks(relPath: string): string {
  const links = countries.map(c =>
    `    <xhtml:link rel="alternate" hreflang="${c.hreflang}" href="${SITE_URL}/${c.prefix}${relPath}"/>`
  );
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/us${relPath}"/>`);
  return links.join('\n');
}

function generateXML(pages: PageEntry[]): string {
  const urlEntries: string[] = [];

  for (const page of pages) {
    for (const c of countries) {
      urlEntries.push(`  <url>
    <loc>${SITE_URL}/${c.prefix}${page.path}</loc>
${hreflangLinks(page.path)}
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${(page.priority ?? 0.5).toFixed(1)}</priority>
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;
}

function main() {
  console.log('🗺️  Generating multi-country sitemap...');
  const allPages: PageEntry[] = [...staticPages];

  guideSlugs.forEach(s => allPages.push({ path: `/guides/${s}`, priority: 0.8, changefreq: 'weekly' }));

  const blogSlugs = extractSlugs(path.join(__dirname, '../src/data/blogPosts.ts'), /slug:\s*['"][^'"]+['"]/g);
  console.log(`📝 ${blogSlugs.length} blog posts`);
  blogSlugs.forEach(s => allPages.push({ path: `/blog/${s}`, priority: 0.7, changefreq: 'monthly' }));

  const authorSlugs = extractSlugs(path.join(__dirname, '../src/data/authors.ts'), /slug:\s*['"][^'"]+['"]/g);
  console.log(`👤 ${authorSlugs.length} authors`);
  authorSlugs.forEach(s => allPages.push({ path: `/blog/author/${s}`, priority: 0.5, changefreq: 'monthly' }));

  const topicIds = extractSlugs(path.join(__dirname, '../src/data/topicalMap.ts'), /^\s*id:\s*['"][^'"]+['"]/gm);
  console.log(`📚 ${topicIds.length} topics`);
  topicIds.forEach(s => allPages.push({ path: `/blog/topic/${s}`, priority: 0.7, changefreq: 'weekly' }));

  const helpSlugs = extractSlugs(path.join(__dirname, '../src/data/helpGuides.ts'), /slug:\s*['"][^'"]+['"]/g);
  console.log(`❓ ${helpSlugs.length} help articles`);
  helpSlugs.forEach(s => allPages.push({ path: `/help/${s}`, priority: 0.5, changefreq: 'monthly' }));

  const corridors = getCorridors();
  console.log(`💱 ${corridors.length} corridors`);
  corridors.forEach(({ currency, country }) => allPages.push({ path: `/receive-${currency}-in-${country}-cost`, priority: 0.7, changefreq: 'monthly' }));

  const xml = generateXML(allPages);
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');
  console.log(`✅ Sitemap: ${allPages.length} pages × ${countries.length} countries = ${allPages.length * countries.length} URLs`);
}

main();
