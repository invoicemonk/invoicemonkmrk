/**
 * IndexNow Submission Script
 *
 * Parses public/sitemap.xml and submits all URLs to the IndexNow API.
 * Run with: npx tsx scripts/submit-indexnow.ts
 *
 * Options:
 *   --dry-run    Print URLs without submitting
 *   --limit=N    Submit only the first N URLs
 */

import { readFileSync } from "fs";
import { resolve } from "path";

const INDEXNOW_KEY = "b8f4e2a1c3d5e6f7a8b9c0d1e2f3a4b5";
const HOST = "invoicemonk.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH_SIZE = 10_000;

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const limitArg = args.find((a) => a.startsWith("--limit="));
  const limit = limitArg ? parseInt(limitArg.split("=")[1], 10) : Infinity;

  // Parse sitemap
  const sitemapPath = resolve(__dirname, "../public/sitemap.xml");
  const xml = readFileSync(sitemapPath, "utf-8");
  const locMatches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  let urls = locMatches.map((m) => m[1]);

  if (limit < urls.length) {
    urls = urls.slice(0, limit);
  }

  console.log(`Found ${urls.length} URLs in sitemap.xml`);

  if (dryRun) {
    console.log("\n--- DRY RUN (not submitting) ---");
    urls.forEach((u) => console.log(u));
    return;
  }

  // Submit in batches
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    };

    console.log(`\nSubmitting batch ${batchNum} (${batch.length} URLs)...`);

    try {
      const res = await fetch(INDEXNOW_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      console.log(`  Status: ${res.status} ${res.statusText}`);
      if (res.status === 200 || res.status === 202) {
        console.log(`  ✅ Batch ${batchNum} accepted`);
      } else {
        const text = await res.text();
        console.log(`  ⚠️  Response: ${text}`);
      }
    } catch (err) {
      console.error(`  ❌ Error: ${(err as Error).message}`);
    }
  }

  console.log("\nDone!");
}

main();
