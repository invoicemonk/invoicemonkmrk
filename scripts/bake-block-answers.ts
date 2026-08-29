/**
 * Bakes block-answer paragraphs into source for the 36 e-invoicing cluster posts.
 *
 * Re-uses the runtime addBlockAnswers transform so source matches what the
 * renderer would output anyway — but bakes it into the file so the wrappers
 * are part of the data and won't be silently skipped when fact-boxes or
 * other non-<p> elements sit between a question heading and its answer.
 *
 * Run: bunx tsx scripts/bake-block-answers.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { addBlockAnswers } from '../src/utils/blockAnswers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Every article data file. Files whose content blocks use ${} interpolation
// or escaped backticks are skipped (the regex below can't safely rewrite them).
const FILES = fs
  .readdirSync(path.join(__dirname, '../src/data'))
  .filter((f) => /^blogPosts.*\.ts$/.test(f))
  .sort();

// Match `content: `…`` template-literal blocks. We confirmed these files
// contain no ${} interpolations or escaped backticks, so this is safe.
const CONTENT_BLOCK = /(content:\s*`)([\s\S]*?)(`,?\s*\n)/g;

let totalPosts = 0;
let totalNewAnswers = 0;

for (const file of FILES) {
  const filePath = path.join(__dirname, '../src/data', file);
  const src = fs.readFileSync(filePath, 'utf-8');

  let postsInFile = 0;
  let answersInFile = 0;
  let skippedInFile = 0;

  const out = src.replace(CONTENT_BLOCK, (full, head, body, tail) => {
    postsInFile++;
    // Safety, per content block: a body that interpolates or escapes backticks
    // can't be rewritten safely by a regex — leave it for the runtime transform.
    if (/\$\{/.test(body) || /\\`/.test(body)) {
      skippedInFile++;
      return full;
    }
    const before = (body.match(/class="block-answer"/g) || []).length;
    const transformed = addBlockAnswers(body);
    const after = (transformed.match(/class="block-answer"/g) || []).length;
    answersInFile += Math.max(0, after - before);
    return head + transformed + tail;
  });

  if (out !== src) {
    fs.writeFileSync(filePath, out, 'utf-8');
  }
  totalPosts += postsInFile;
  totalNewAnswers += answersInFile;
  const note = skippedInFile ? ` (${skippedInFile} skipped: interpolated)` : '';
  console.log(`📝 ${file}: ${postsInFile} posts, +${answersInFile} block-answers${note}`);
}


console.log(`\n✅ Baked ${totalNewAnswers} block-answers across ${totalPosts} posts.`);
