/**
 * Bakes a `faq: [...]` field into articles that have question-style headings
 * but no FAQ data, so FAQPage schema fires on every article that can support it.
 *
 * Nothing is invented: each Q&A pair is lifted verbatim from the article's own
 * question heading and the direct-answer paragraph that follows it. Articles
 * with fewer than MIN_QA usable pairs are left alone.
 *
 * Run: bunx tsx scripts/bake-faqs.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../src/data');

const MIN_QA = 2;
const MAX_QA = 6;
const MIN_ANSWER_CHARS = 60;

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const decode = (text: string) =>
  text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .trim();

const QUESTION_STARTERS =
  /^(what|how|why|when|who|which|where|is|are|does|do|can|should|will|did|has|have)\b/i;

interface QA {
  question: string;
  answer: string;
}

/** Lift Q&A pairs from question headings + the paragraph that follows. */
function extractQA(body: string): QA[] {
  const out: QA[] = [];
  const headingRe = /<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m: RegExpExecArray | null;

  while ((m = headingRe.exec(body)) !== null) {
    const raw = decode(stripTags(m[2]));
    // Question headings, plus interrogative headings written without the mark
    // ("How to write payment terms") — normalised, never invented.
    let question = raw;
    if (!raw.endsWith('?')) {
      if (!QUESTION_STARTERS.test(raw)) continue;
      question = `${raw.replace(/[:.!]+$/, '')}?`;
    }
    if (question.length < 12 || question.length > 160) continue;

    const rest = body.slice(m.index + m[0].length);
    // Stop at the next heading so we never borrow another section's prose.
    const nextHeading = rest.search(/<h[1-6][\s>]/i);
    const scope = nextHeading === -1 ? rest : rest.slice(0, nextHeading);

    const paras = [...scope.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
    // Prefer the baked direct-answer paragraph; otherwise the first paragraph.
    const preferred =
      paras.find((p) => /block-answer/.test(p[0])) ?? paras[0];
    if (!preferred) continue;

    const answer = decode(stripTags(preferred[1]));
    if (answer.length < MIN_ANSWER_CHARS) continue;

    if (out.some((qa) => qa.question.toLowerCase() === question.toLowerCase())) continue;
    out.push({ question, answer });
    if (out.length >= MAX_QA) break;
  }

  return out;
}

function renderFaq(qas: QA[], indent: string): string {
  const items = qas
    .map(
      (qa) =>
        `${indent}  { question: ${JSON.stringify(qa.question)}, answer: ${JSON.stringify(qa.answer)} }`
    )
    .join(',\n');
  return `faq: [\n${items},\n${indent}],\n${indent}`;
}

const files = fs
  .readdirSync(DATA_DIR)
  .filter((f) => /^blogPosts.*\.ts$/.test(f))
  .sort();

let totalAdded = 0;
let totalSkipped = 0;

for (const file of files) {
  const filePath = path.join(DATA_DIR, file);
  const src = fs.readFileSync(filePath, 'utf-8');

  // Article boundaries: each `slug:` marker starts a post object.
  const slugRe = /slug:\s*['"`]([^'"`]+)['"`]/g;
  const marks: number[] = [];
  let m: RegExpExecArray | null;
  while ((m = slugRe.exec(src)) !== null) marks.push(m.index);

  // Collect insertions, then apply back-to-front so offsets stay valid.
  const inserts: Array<{ at: number; text: string }> = [];
  let addedInFile = 0;

  for (let i = 0; i < marks.length; i++) {
    const start = marks[i];
    const end = i + 1 < marks.length ? marks[i + 1] : src.length;
    const seg = src.slice(start, end);

    if (/\bfaq:\s*\[/.test(seg)) continue;

    const contentIdx = seg.search(/content:\s*`/);
    if (contentIdx === -1) continue;

    const bodyStart = seg.indexOf('`', contentIdx) + 1;
    const bodyEnd = seg.indexOf('`', bodyStart);
    if (bodyEnd === -1) continue;
    const body = seg.slice(bodyStart, bodyEnd);
    if (/\$\{/.test(body)) continue; // interpolated — leave to runtime

    const qas = extractQA(body);
    if (qas.length < MIN_QA) {
      totalSkipped++;
      continue;
    }

    const lineStart = src.lastIndexOf('\n', start + contentIdx) + 1;
    const indent = src.slice(lineStart, start + contentIdx).match(/^[ \t]*/)?.[0] ?? '    ';
    inserts.push({ at: start + contentIdx, text: renderFaq(qas, indent) });
    addedInFile++;
  }

  if (inserts.length > 0) {
    let out = src;
    for (const ins of inserts.reverse()) {
      out = out.slice(0, ins.at) + ins.text + out.slice(ins.at);
    }
    fs.writeFileSync(filePath, out, 'utf-8');
  }

  totalAdded += addedInFile;
  if (addedInFile) console.log(`📝 ${file}: +${addedInFile} faq blocks`);
}

console.log(
  `\n✅ Added FAQ data to ${totalAdded} articles. ${totalSkipped} left alone (too few question headings).`
);
