/**
 * Sitemap Audit Script
 * 
 * Compares blog posts, help articles, and corridor pages against sitemap.xml
 * to find missing entries.
 * 
 * Run: npx tsx scripts/audit-sitemap.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://invoicemonk.com';

function readSitemap(): string {
  return fs.readFileSync(path.join(__dirname, '../public/sitemap.xml'), 'utf-8');
}

function extractSlugsFromFile(filePath: string): string[] {
  const content = fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
  const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g);
  if (!slugMatches) return [];
  return slugMatches.map(match => {
    const slug = match.match(/['"]([^'"]+)['"]/);
    return slug ? slug[1] : '';
  }).filter(Boolean);
}

function extractSitemapUrls(sitemap: string, pattern: RegExp): string[] {
  const matches = sitemap.match(pattern);
  if (!matches) return [];
  return matches.map(match => {
    const m = match.match(/<loc>[^<]*\/([^<\/]+)<\/loc>/);
    return m ? m[1] : '';
  }).filter(Boolean);
}

function auditCategory(
  label: string,
  sourceItems: string[],
  sitemapItems: string[],
) {
  const missing = sourceItems.filter(s => !sitemapItems.includes(s));
  const orphaned = sitemapItems.filter(s => !sourceItems.includes(s));

  console.log(`\n── ${label} ──`);
  console.log(`  Source: ${sourceItems.length} | Sitemap: ${sitemapItems.length}`);

  if (missing.length > 0) {
    console.log(`  ❌ Missing from sitemap (${missing.length}):`);
    missing.forEach(s => console.log(`     - ${s}`));
  } else {
    console.log('  ✅ All present in sitemap');
  }

  if (orphaned.length > 0) {
    console.log(`  ⚠️  Orphaned in sitemap (${orphaned.length}):`);
    orphaned.forEach(s => console.log(`     - ${s}`));
  }

  return { missing: missing.length, orphaned: orphaned.length };
}

function main() {
  console.log('🔍 Auditing sitemap...');
  const sitemap = readSitemap();

  // 1. Blog posts
  const blogSlugs = extractSlugsFromFile('../src/data/blogPosts.ts');
  const sitemapBlogSlugs = (sitemap.match(/<loc>https:\/\/invoicemonk\.com\/blog\/([^<]+)<\/loc>/g) || [])
    .map(m => { const s = m.match(/\/blog\/([^<]+)/); return s ? s[1] : ''; })
    .filter(s => s && !s.startsWith('author/') && !s.startsWith('topic/'));
  const blogResult = auditCategory('Blog Posts', blogSlugs, sitemapBlogSlugs);

  // 2. Help articles
  const helpSlugs = extractSlugsFromFile('../src/data/helpGuides.ts');
  const sitemapHelpSlugs = (sitemap.match(/<loc>https:\/\/invoicemonk\.com\/help\/([^<]+)<\/loc>/g) || [])
    .map(m => { const s = m.match(/\/help\/([^<]+)/); return s ? s[1] : ''; })
    .filter(Boolean);
  const helpResult = auditCategory('Help Articles', helpSlugs, sitemapHelpSlugs);

  // 3. Corridor pages
  const feeContent = fs.readFileSync(path.join(__dirname, '../src/config/paymentFeeModels.ts'), 'utf-8');
  const corridorRegex = /currency:\s*['"]([^'"]+)['"],\s*country:\s*['"]([^'"]+)['"]/g;
  const corridorSlugs: string[] = [];
  let match;
  while ((match = corridorRegex.exec(feeContent)) !== null) {
    corridorSlugs.push(`receive-${match[1]}-in-${match[2]}-cost`);
  }
  const sitemapCorridorSlugs = (sitemap.match(/<loc>https:\/\/invoicemonk\.com\/receive-[^<]+-cost<\/loc>/g) || [])
    .map(m => { const s = m.match(/\.com\/([^<]+)/); return s ? s[1] : ''; })
    .filter(Boolean);
  const corridorResult = auditCategory('Currency Corridors', corridorSlugs, sitemapCorridorSlugs);

  // Summary
  const totalMissing = blogResult.missing + helpResult.missing + corridorResult.missing;
  const totalOrphaned = blogResult.orphaned + helpResult.orphaned + corridorResult.orphaned;
  console.log('\n📊 Summary:');
  console.log(`   Total missing: ${totalMissing}`);
  console.log(`   Total orphaned: ${totalOrphaned}`);

  if (totalMissing > 0) {
    console.log('\n💡 Run "npx tsx scripts/generate-sitemap.ts" to regenerate the sitemap');
  }
}

main();
