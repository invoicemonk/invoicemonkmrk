/**
 * Bakes a closing <aside class="tldr"> block into every e-invoicing cluster post.
 *
 * The TL;DR body re-uses the post's hero direct-answer paragraph
 * (the first <p><strong>…</strong></p> at the top of the content),
 * which is the 40–60 word answer the AI-Overviews layer already optimises for.
 *
 * Idempotent: skips any content block that already contains class="tldr".
 *
 * Run: bunx tsx scripts/bake-tldr.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES = [
  'blogPostsClusterEInvoicing.ts',
  'blogPostsClusterEInvoicing2.ts',
  'blogPostsClusterEInvoicing3.ts',
  'blogPostsClusterEInvoicing4.ts',
  'blogPostsClusterEInvoicing5.ts',
  'blogPostsClusterEInvoicing6.ts',
];

const CONTENT_BLOCK = /(content:\s*`)([\s\S]*?)(`,?\s*\n)/g;

let totalPosts = 0;
let totalAdded = 0;
let totalSkipped = 0;

for (const file of FILES) {
  const filePath = path.join(__dirname, '../src/data', file);
  const src = fs.readFileSync(filePath, 'utf-8');

  let postsInFile = 0;
  let addedInFile = 0;
  let skippedInFile = 0;

  const out = src.replace(CONTENT_BLOCK, (_full, head, body, tail) => {
    postsInFile++;
    if (/class="tldr"/.test(body)) {
      skippedInFile++;
      return head + body + tail;
    }

    // Pull the first <p><strong>…</strong></p> as the TL;DR body.
    const heroMatch = body.match(/<p>\s*<strong>([\s\S]*?)<\/strong>\s*<\/p>/);
    const tldrInner = heroMatch
      ? heroMatch[1].replace(/\s+/g, ' ').trim()
      : 'See the at-a-glance fact box, compliance checklist, and authority sources above for the operational summary.';

    const tldrBlock = `<aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> ${tldrInner}</p></aside>`;

    addedInFile++;
    return head + body + tldrBlock + tail;
  });

  if (out !== src) {
    fs.writeFileSync(filePath, out, 'utf-8');
  }
  totalPosts += postsInFile;
  totalAdded += addedInFile;
  totalSkipped += skippedInFile;
  console.log(`📝 ${file}: ${postsInFile} posts, +${addedInFile} TL;DRs (${skippedInFile} skipped)`);
}

console.log(`\n✅ Added ${totalAdded} TL;DR blocks across ${totalPosts} posts (${totalSkipped} already had one).`);
