/**
 * Dynamic Sitemap Generator
 * 
 * Generates sitemap.xml from:
 * - Static routes (from route configuration)
 * - Blog posts (from blogPosts.ts)
 * - Guide pages (from pillars)
 * - Author pages
 * - Blog topic pages (from topicalMap.ts)
 * - Help center articles (from helpGuides.ts)
 * - Receive-currency corridor pages (from paymentFeeModels.ts)
 * 
 * Run: npx tsx scripts/generate-sitemap.ts
 * Or as part of build: npm run generate-sitemap && vite build
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://invoicemonk.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Static pages with their priorities
const staticPages: SitemapEntry[] = [
  // Main pages - highest priority
  { loc: '/', priority: 1.0, changefreq: 'weekly' },
  { loc: '/invoicing', priority: 0.9, changefreq: 'weekly' },
  { loc: '/expenses', priority: 0.9, changefreq: 'weekly' },
  { loc: '/payments', priority: 0.9, changefreq: 'weekly' },
  { loc: '/accounting', priority: 0.9, changefreq: 'weekly' },
  { loc: '/estimates', priority: 0.9, changefreq: 'weekly' },
  { loc: '/receipts', priority: 0.9, changefreq: 'weekly' },
  
  // Product & company pages
  { loc: '/pricing', priority: 0.8, changefreq: 'weekly' },
  { loc: '/why-invoicemonk', priority: 0.8, changefreq: 'monthly' },
  { loc: '/compliance', priority: 0.8, changefreq: 'monthly' },
  { loc: '/about', priority: 0.7, changefreq: 'monthly' },
  { loc: '/contact', priority: 0.6, changefreq: 'monthly' },
  
  // Audience pages
  { loc: '/freelancers', priority: 0.8, changefreq: 'monthly' },
  { loc: '/consultants', priority: 0.8, changefreq: 'monthly' },
  { loc: '/contractors', priority: 0.8, changefreq: 'monthly' },
  { loc: '/small-businesses', priority: 0.8, changefreq: 'monthly' },
  { loc: '/agencies', priority: 0.8, changefreq: 'monthly' },
  { loc: '/photographers', priority: 0.8, changefreq: 'monthly' },
  { loc: '/lawyers', priority: 0.8, changefreq: 'monthly' },
  { loc: '/accountants', priority: 0.8, changefreq: 'monthly' },
  { loc: '/ecommerce', priority: 0.8, changefreq: 'monthly' },
  { loc: '/creatives', priority: 0.8, changefreq: 'monthly' },
  
  // Feature pages
  { loc: '/client-management', priority: 0.7, changefreq: 'monthly' },
  { loc: '/free-invoice-generator', priority: 0.8, changefreq: 'monthly' },

  // Comparison pages
  { loc: '/best-invoicing-software', priority: 0.8, changefreq: 'monthly' },
  { loc: '/compare/invoicemonk-vs-freshbooks', priority: 0.7, changefreq: 'monthly' },
  { loc: '/compare/invoicemonk-vs-wave', priority: 0.7, changefreq: 'monthly' },
  { loc: '/compare/invoicemonk-vs-zoho-invoice', priority: 0.7, changefreq: 'monthly' },
  { loc: '/compare/invoicemonk-vs-quickbooks', priority: 0.7, changefreq: 'monthly' },

  // Use-case pages
  { loc: '/use-cases/recurring-billing', priority: 0.7, changefreq: 'monthly' },
  { loc: '/use-cases/multi-currency-invoicing', priority: 0.7, changefreq: 'monthly' },
  { loc: '/use-cases/milestone-billing', priority: 0.7, changefreq: 'monthly' },
  { loc: '/use-cases/retainer-billing', priority: 0.7, changefreq: 'monthly' },

  // Payment tools
  { loc: '/international-payment-fee-calculator', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paypal-vs-wise-fees', priority: 0.8, changefreq: 'weekly' },
  { loc: '/cheapest-way-to-receive-international-payments', priority: 0.8, changefreq: 'weekly' },

  // Blog hub
  { loc: '/blog', priority: 0.8, changefreq: 'daily' },
  
  // Guide index
  { loc: '/guides', priority: 0.8, changefreq: 'weekly' },

  // Content pages
  { loc: '/glossary', priority: 0.6, changefreq: 'monthly' },
  { loc: '/explore', priority: 0.6, changefreq: 'monthly' },
  { loc: '/help', priority: 0.6, changefreq: 'monthly' },

  // Developer page
  { loc: '/developer', priority: 0.5, changefreq: 'monthly' },
  
  // Legal pages - lower priority
  { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { loc: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { loc: '/cookie-policy', priority: 0.3, changefreq: 'yearly' },
];

// Guide pages (pillars)
const guideSlugs = [
  'invoicing',
  'getting-paid',
  'business-finances',
  'tax-compliance',
  'freelancing',
  'estimates',
  'expenses',
  'client-management',
];

// Read blog posts from the data file
function getBlogPosts(): string[] {
  try {
    const filePath = path.join(__dirname, '../src/data/blogPosts.ts');
    const content = fs.readFileSync(filePath, 'utf-8');
    const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (!slugMatches) return [];
    return slugMatches.map(match => {
      const slug = match.match(/['"]([^'"]+)['"]/);
      return slug ? slug[1] : '';
    }).filter(Boolean);
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Read authors from the data file
function getAuthors(): string[] {
  try {
    const filePath = path.join(__dirname, '../src/data/authors.ts');
    const content = fs.readFileSync(filePath, 'utf-8');
    const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (!slugMatches) return [];
    return slugMatches.map(match => {
      const slug = match.match(/['"]([^'"]+)['"]/);
      return slug ? slug[1] : '';
    }).filter(Boolean);
  } catch (error) {
    console.error('Error reading authors:', error);
    return [];
  }
}

// Read blog topic pillar IDs from topicalMap.ts
function getBlogTopics(): string[] {
  try {
    const filePath = path.join(__dirname, '../src/data/topicalMap.ts');
    const content = fs.readFileSync(filePath, 'utf-8');
    const idMatches = content.match(/^\s*id:\s*['"]([^'"]+)['"]/gm);
    if (!idMatches) return [];
    return idMatches.map(match => {
      const id = match.match(/['"]([^'"]+)['"]/);
      return id ? id[1] : '';
    }).filter(Boolean);
  } catch (error) {
    console.error('Error reading blog topics:', error);
    return [];
  }
}

// Read help article slugs from helpGuides.ts
function getHelpSlugs(): string[] {
  try {
    const filePath = path.join(__dirname, '../src/data/helpGuides.ts');
    const content = fs.readFileSync(filePath, 'utf-8');
    const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (!slugMatches) return [];
    return slugMatches.map(match => {
      const slug = match.match(/['"]([^'"]+)['"]/);
      return slug ? slug[1] : '';
    }).filter(Boolean);
  } catch (error) {
    console.error('Error reading help guides:', error);
    return [];
  }
}

// Read currency corridors from paymentFeeModels.ts
function getCorridors(): Array<{ currency: string; country: string }> {
  try {
    const filePath = path.join(__dirname, '../src/config/paymentFeeModels.ts');
    const content = fs.readFileSync(filePath, 'utf-8');
    // Match { currency: '...', country: '...' } patterns in keyCorridor array
    const corridorRegex = /currency:\s*['"]([^'"]+)['"],\s*country:\s*['"]([^'"]+)['"]/g;
    const results: Array<{ currency: string; country: string }> = [];
    let match;
    while ((match = corridorRegex.exec(content)) !== null) {
      results.push({ currency: match[1], country: match[2] });
    }
    return results;
  } catch (error) {
    console.error('Error reading corridors:', error);
    return [];
  }
}

function generateXML(entries: SitemapEntry[]): string {
  const urlEntries = entries.map(entry => {
    const lastmod = entry.lastmod || CURRENT_DATE;
    const changefreq = entry.changefreq || 'monthly';
    const priority = entry.priority !== undefined ? entry.priority : 0.5;
    
    return `  <url>
    <loc>${SITE_URL}${entry.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function main() {
  console.log('🗺️  Generating sitemap...');
  
  const allEntries: SitemapEntry[] = [...staticPages];
  
  // Add guide pages
  guideSlugs.forEach(slug => {
    allEntries.push({ loc: `/guides/${slug}`, priority: 0.8, changefreq: 'weekly' });
  });
  
  // Add blog posts
  const blogSlugs = getBlogPosts();
  console.log(`📝 Found ${blogSlugs.length} blog posts`);
  blogSlugs.forEach(slug => {
    allEntries.push({ loc: `/blog/${slug}`, priority: 0.7, changefreq: 'monthly' });
  });
  
  // Add author pages
  const authorSlugs = getAuthors();
  console.log(`👤 Found ${authorSlugs.length} authors`);
  authorSlugs.forEach(slug => {
    allEntries.push({ loc: `/blog/author/${slug}`, priority: 0.5, changefreq: 'monthly' });
  });

  // Add blog topic pages
  const topicIds = getBlogTopics();
  console.log(`📚 Found ${topicIds.length} blog topics`);
  topicIds.forEach(id => {
    allEntries.push({ loc: `/blog/topic/${id}`, priority: 0.7, changefreq: 'weekly' });
  });

  // Add help center articles
  const helpSlugs = getHelpSlugs();
  console.log(`❓ Found ${helpSlugs.length} help articles`);
  helpSlugs.forEach(slug => {
    allEntries.push({ loc: `/help/${slug}`, priority: 0.5, changefreq: 'monthly' });
  });

  // Add receive-currency corridor pages
  const corridors = getCorridors();
  console.log(`💱 Found ${corridors.length} currency corridors`);
  corridors.forEach(({ currency, country }) => {
    allEntries.push({ loc: `/receive-${currency}-in-${country}-cost`, priority: 0.7, changefreq: 'monthly' });
  });
  
  // Generate XML
  const xml = generateXML(allEntries);
  
  // Write to public folder
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');
  
  console.log(`✅ Sitemap generated with ${allEntries.length} URLs`);
  console.log(`📄 Output: ${outputPath}`);
}

main();
