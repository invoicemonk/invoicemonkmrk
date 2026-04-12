/**
 * Multi-language Sitemap Generator with hreflang
 *
 * Generates sitemap.xml with all language-prefixed URLs and
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

// Language prefixes and their hreflang codes
const languages = [
  { prefix: 'en', hreflang: 'en' },
  { prefix: 'de', hreflang: 'de' },
  { prefix: 'fr', hreflang: 'fr' },
  { prefix: 'pt', hreflang: 'pt-BR' },
  { prefix: 'es', hreflang: 'es' },
];

// ── English-only paths ──
// Country-specific pages that have NO translations and should only appear under /en/
const ENGLISH_ONLY_PATHS: string[] = [
  // Country-specific invoice generators
  '/free-invoice-generator-australia',
  '/free-invoice-generator-india',
  '/free-invoice-generator-nigeria',
  '/free-invoice-generator-kenya',
  '/free-invoice-generator-uk',
  '/free-invoice-generator-saudi-arabia',
  '/free-invoice-generator-malaysia',
  '/free-invoice-generator-canada',
  '/free-invoice-generator-ghana',
  '/free-invoice-generator-south-africa',
  // Country-specific comparison pages
  '/compare/best-invoicing-software-nigeria',
  '/compare/best-invoicing-software-india',
  '/compare/best-invoicing-software-kenya',
  '/compare/best-invoicing-software-uk',
  '/compare/best-invoicing-software-saudi-arabia',
  '/compare/best-invoicing-software-malaysia',
  '/compare/best-invoicing-software-australia',
  '/compare/best-invoicing-software-canada',
  '/compare/best-invoicing-software-ghana',
  '/compare/best-invoicing-software-south-africa',
  '/compare/wave-alternative-nigeria',
  '/compare/wave-alternative-uk',
  '/compare/wave-alternative-australia',
  '/compare/wave-alternative-south-africa',
  // Payment tools (English-only)
  '/international-payment-fee-calculator',
  '/paypal-vs-wise-fees',
  '/cheapest-way-to-receive-international-payments',
  '/freelancer-rate-calculator',
  // API docs
  '/docs/api',
  '/legal/sla',
];

// Country identifiers used to detect country-specific blog posts
const COUNTRY_KEYWORDS = [
  'nigeria', 'india', 'kenya', 'uk', 'saudi', 'malaysia',
  'germany', 'italy', 'ghana', 'south-africa', 'australia', 'canada',
];
const countryBlogPattern = new RegExp(
  `^/blog/.*(?:${COUNTRY_KEYWORDS.join('|')}).*$`
);

/** Check if a path is English-only (exact match, corridor, or country-specific blog) */
function isEnglishOnly(pagePath: string): boolean {
  if (ENGLISH_ONLY_PATHS.includes(pagePath)) return true;
  // All corridor pages (receive-XXX-in-YYY-cost) are English-only
  if (/^\/receive-.+-cost$/.test(pagePath)) return true;
  // Country-specific blog posts are English-only
  if (countryBlogPattern.test(pagePath)) return true;
  return false;
}

interface PageEntry {
  path: string; // relative path without language prefix, e.g. "/pricing"
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
  { path: '/free-invoice-generator-australia', priority: 0.8, changefreq: 'monthly' },
  { path: '/free-invoice-generator-india', priority: 0.8, changefreq: 'monthly' },
  { path: '/free-invoice-generator-nigeria', priority: 0.8, changefreq: 'monthly' },
  { path: '/free-invoice-generator-kenya', priority: 0.8, changefreq: 'monthly' },
  { path: '/free-invoice-generator-uk', priority: 0.8, changefreq: 'monthly' },
  { path: '/free-invoice-generator-saudi-arabia', priority: 0.8, changefreq: 'monthly' },
  { path: '/free-invoice-generator-malaysia', priority: 0.8, changefreq: 'monthly' },
  { path: '/free-invoice-generator-canada', priority: 0.8, changefreq: 'monthly' },
  { path: '/free-invoice-generator-ghana', priority: 0.8, changefreq: 'monthly' },
  { path: '/free-invoice-generator-south-africa', priority: 0.8, changefreq: 'monthly' },
  { path: '/best-invoicing-software', priority: 0.8, changefreq: 'monthly' },
  { path: '/compare/best-free-invoicing-software', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-freelancers', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/wave-alternatives', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-nigeria', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-india', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-kenya', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/wave-alternative-nigeria', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-uk', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/wave-alternative-uk', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-saudi-arabia', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-malaysia', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-australia', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-canada', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-ghana', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/best-invoicing-software-south-africa', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/wave-alternative-australia', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/wave-alternative-south-africa', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-freshbooks', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-wave', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-zoho-invoice', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-quickbooks', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-dext', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-atoinvoice', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-vs-stripe', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/invoicemonk-estimates-vs-quickbooks', priority: 0.7, changefreq: 'monthly' },
  { path: '/use-cases/recurring-billing', priority: 0.7, changefreq: 'monthly' },
  { path: '/use-cases/multi-currency-invoicing', priority: 0.7, changefreq: 'monthly' },
  { path: '/use-cases/milestone-billing', priority: 0.7, changefreq: 'monthly' },
  { path: '/use-cases/retainer-billing', priority: 0.7, changefreq: 'monthly' },
  { path: '/international-payment-fee-calculator', priority: 0.8, changefreq: 'weekly' },
  { path: '/paypal-vs-wise-fees', priority: 0.8, changefreq: 'weekly' },
  { path: '/cheapest-way-to-receive-international-payments', priority: 0.8, changefreq: 'weekly' },
  { path: '/invoice-templates', priority: 0.8, changefreq: 'monthly' },
  { path: '/freelancer-rate-calculator', priority: 0.7, changefreq: 'monthly' },
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

const guideSlugs = ['invoicing', 'getting-paid', 'business-finances', 'tax-compliance', 'freelancing', 'estimates', 'expenses', 'client-management', 'e-invoicing', 'e-invoicing-mandates'];

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
  const links = languages.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${SITE_URL}/${l.prefix}${relPath}"/>`
  );
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en${relPath}"/>`);
  return links.join('\n');
}

function generateXML(pages: PageEntry[]): string {
  const urlEntries: string[] = [];

  for (const page of pages) {
    if (isEnglishOnly(page.path)) {
      // English-only: single /en/ URL, no hreflang alternates
      urlEntries.push(`  <url>
    <loc>${SITE_URL}/en${page.path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${(page.priority ?? 0.5).toFixed(1)}</priority>
  </url>`);
    } else {
      // Multi-language: all 5 prefixes with hreflang
      for (const l of languages) {
        urlEntries.push(`  <url>
    <loc>${SITE_URL}/${l.prefix}${page.path}</loc>
${hreflangLinks(page.path)}
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${(page.priority ?? 0.5).toFixed(1)}</priority>
  </url>`);
      }
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;
}

function main() {
  console.log('🗺️  Generating multi-language sitemap...');
  const allPages: PageEntry[] = [...staticPages];

  guideSlugs.forEach(s => allPages.push({ path: `/guides/${s}`, priority: 0.8, changefreq: 'weekly' }));

  const blogSlugs = extractSlugs(path.join(__dirname, '../src/data/blogPosts.ts'), /slug:\s*['"][^'"]+['"]/g);
  // Also scan cluster files for additional blog posts
  for (let i = 9; i <= 16; i++) {
    const clusterPath = path.join(__dirname, `../src/data/blogPostsCluster${i}.ts`);
    const clusterSlugs = extractSlugs(clusterPath, /slug:\s*['"][^'"]+['"]/g);
    clusterSlugs.forEach(s => { if (!blogSlugs.includes(s)) blogSlugs.push(s); });
  }
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

  const complianceSlugs = extractSlugs(path.join(__dirname, '../src/data/countryCompliancePosts.ts'), /slug:\s*['"][^'"]+['"]/g);
  console.log(`🏛️ ${complianceSlugs.length} compliance posts`);
  complianceSlugs.forEach(s => allPages.push({ path: `/blog/${s}`, priority: 0.7, changefreq: 'monthly' }));

  // NOTE: Glossary fragment URLs (#slug) removed — they resolve to the same /glossary page
  // The single /glossary entry in staticPages is sufficient

  const corridors = getCorridors();
  console.log(`💱 ${corridors.length} corridors`);
  corridors.forEach(({ currency, country }) => allPages.push({ path: `/receive-${currency}-in-${country}-cost`, priority: 0.7, changefreq: 'monthly' }));

  const xml = generateXML(allPages);
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');

  const enOnlyCount = allPages.filter(p => isEnglishOnly(p.path)).length;
  const multiLangCount = allPages.length - enOnlyCount;
  const totalUrls = enOnlyCount + (multiLangCount * languages.length);
  console.log(`✅ Sitemap: ${allPages.length} pages (${enOnlyCount} EN-only, ${multiLangCount} multi-lang) = ${totalUrls} URLs`);
}

main();
