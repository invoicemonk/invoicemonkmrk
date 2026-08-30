/**
 * Compare-page freshness check.
 *
 * Lists every /compare/* page whose `lastReviewed` date in
 * `src/data/compareFreshness.ts` is older than MAX_AGE_DAYS, plus any
 * routed compare page missing from the registry entirely.
 *
 * Run: bunx tsx scripts/check-compare-freshness.ts
 * Exits 1 when anything is stale or unregistered (CI-friendly).
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { COMPARE_REVIEWED, daysSinceReview } from '../src/data/compareFreshness';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAX_AGE_DAYS = 60;

function routedCompareSlugs(): string[] {
  const app = fs.readFileSync(path.join(__dirname, '../src/App.tsx'), 'utf-8');
  const slugs = new Set<string>();
  for (const m of app.matchAll(/<Route path="compare\/([a-z0-9-]+)"/g)) slugs.add(m[1]);
  if (/<Route path="best-invoicing-software"/.test(app)) slugs.add('best-invoicing-software');
  return [...slugs];
}

function main() {
  const routed = routedCompareSlugs();
  const unregistered = routed.filter((s) => !COMPARE_REVIEWED[s]);
  const stale = Object.keys(COMPARE_REVIEWED)
    .map((slug) => ({ slug, days: daysSinceReview(slug) ?? 0 }))
    .filter((r) => r.days > MAX_AGE_DAYS)
    .sort((a, b) => b.days - a.days);

  console.log(`Compare pages routed: ${routed.length} | in registry: ${Object.keys(COMPARE_REVIEWED).length}`);

  if (stale.length > 0) {
    console.log(`\n⏳ Stale (> ${MAX_AGE_DAYS} days since review):`);
    for (const r of stale) console.log(`  - ${r.slug} — ${r.days} days (${COMPARE_REVIEWED[r.slug]})`);
  } else {
    console.log(`\n✅ Every registered compare page reviewed within ${MAX_AGE_DAYS} days.`);
  }

  if (unregistered.length > 0) {
    console.log('\n❌ Routed but missing from compareFreshness.ts:');
    for (const s of unregistered) console.log(`  - ${s}`);
  }

  if (stale.length > 0 || unregistered.length > 0) process.exit(1);
}

main();
