/**
 * Block-Answer Renderer for AI-Search Optimization
 *
 * Walks blog HTML and, for every <h2>/<h3> question heading, ensures the
 * first thing after the heading is a self-contained "block answer" paragraph
 * (≤ ~320 chars). This is the format Google AI Overviews / Perplexity /
 * ChatGPT extract verbatim.
 *
 * Output marker: <p class="block-answer" data-answer="true">…</p>
 *
 * Strategy:
 *  1. If the next paragraph is already a clean direct answer → wrap it.
 *  2. If the next element is a list/table/transition paragraph →
 *     synthesize a 1–2 sentence summary from the first list items
 *     or the first sentence of the next prose paragraph.
 *  3. If we can't produce a clean answer → leave the heading untouched
 *     (no fabrication).
 *
 * Pure string transformation. Idempotent (won't re-wrap an existing
 * .block-answer paragraph).
 */

const QUESTION_STARTERS =
  /^(what|how|why|when|who|which|where|is|are|does|do|can|should|will|did|has|have)\b/i;

/**
 * Headings we never summarize — purely navigational / closing sections.
 * English-only; translated posts will simply get summaries (acceptable).
 */
const NAVIGATIONAL_HEADINGS = [
  'related resources',
  'related articles',
  'related guides',
  'related posts',
  'further reading',
  'references',
  'sources',
  'conclusion',
  'summary',
  'final thoughts',
  'next steps',
  'your action plan',
  'action plan',
  'frequently asked questions',
  'faq',
  'faqs',
  'about the author',
  'table of contents',
];

function isNavigationalHeading(text: string): boolean {
  const lower = text.trim().toLowerCase().replace(/[:.!?]+$/, '');
  return NAVIGATIONAL_HEADINGS.some((h) => lower === h || lower.endsWith(' ' + h) || lower.startsWith(h + ' '));
}

const TRANSITION_PHRASES = [
  "let's explore",
  'let us explore',
  'in this section',
  'in this article',
  'in this guide',
  'we will look',
  "we'll look",
  "we'll cover",
  'we will cover',
  'this section',
  'this guide',
  'this article',
  'below,',
  'below we',
  'the following',
  'as we',
  'first,',
];

const MAX_ANSWER_CHARS = 320;
const MAX_ANSWER_WORDS = 60;

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim();
}

function isQuestion(text: string): boolean {
  const trimmed = text.trim();
  if (!trimmed) return false;
  if (trimmed.endsWith('?')) return true;
  return QUESTION_STARTERS.test(trimmed);
}

function isTransitional(text: string): boolean {
  const lower = text.toLowerCase();
  return TRANSITION_PHRASES.some((p) => lower.startsWith(p));
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function clampSentence(text: string): string {
  // Take up to 2 sentences and clamp to MAX_ANSWER_CHARS / MAX_ANSWER_WORDS.
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  let out = '';
  for (const s of sentences) {
    const candidate = (out + ' ' + s).trim();
    if (candidate.length > MAX_ANSWER_CHARS) break;
    if (wordCount(candidate) > MAX_ANSWER_WORDS) break;
    out = candidate;
    if (sentences.indexOf(s) >= 1) break;
  }
  if (!out) {
    // Fallback: hard-clip first sentence
    out = sentences[0]?.trim() || text.trim();
    if (out.length > MAX_ANSWER_CHARS) {
      out = out.slice(0, MAX_ANSWER_CHARS - 1).replace(/\s+\S*$/, '') + '…';
    }
  }
  return out;
}

function isCleanAnswer(text: string): boolean {
  if (!text) return false;
  if (isTransitional(text)) return false;
  if (text.length < 40) return false; // too short to be a real answer
  if (text.length > MAX_ANSWER_CHARS + 80) return false;
  if (wordCount(text) > MAX_ANSWER_WORDS + 15) return false;
  return true;
}

interface Block {
  raw: string; // original HTML chunk
  tag: string | null; // 'h1'|'h2'|'h3'|'p'|'ul'|...
  inner: string; // inner HTML for tagged blocks
}

function tokenize(html: string): Block[] {
  // Split on top-level block tags. Anything else is treated as a passthrough block.
  const blockRegex =
    /<(h1|h2|h3|h4|h5|h6|p|ul|ol|table|blockquote|figure|aside|pre|div)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
  const blocks: Block[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = blockRegex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      const between = html.slice(lastIndex, match.index);
      if (between.trim()) blocks.push({ raw: between, tag: null, inner: '' });
    }
    blocks.push({ raw: match[0], tag: match[1].toLowerCase(), inner: match[3] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < html.length) {
    const tail = html.slice(lastIndex);
    if (tail.trim()) blocks.push({ raw: tail, tag: null, inner: '' });
  }
  return blocks;
}

function alreadyHasBlockAnswer(block: Block): boolean {
  return /class\s*=\s*["'][^"']*\bblock-answer\b/.test(block.raw);
}

function makeBlockAnswer(text: string): string {
  return `<p class="block-answer" data-answer="true">${text}</p>`;
}

function synthesizeFromList(listInner: string): string | null {
  // Extract the first 1–2 <li> items and stitch them.
  const items: string[] = [];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let m: RegExpExecArray | null;
  while ((m = liRegex.exec(listInner)) !== null && items.length < 2) {
    const txt = stripTags(m[1]);
    if (txt) items.push(txt);
  }
  if (items.length === 0) return null;
  // Build a short summary line.
  const joined = items.length === 1 ? items[0] : `${items[0]} ${items[1]}`;
  return clampSentence(joined);
}

function synthesizeFromHeading(headingText: string, nextProse: string | null): string | null {
  if (!nextProse) return null;
  const cleaned = stripTags(nextProse);
  if (!cleaned) return null;
  const firstSentence = (cleaned.match(/[^.!?]+[.!?]+/) || [cleaned])[0].trim();
  // Pull a "X is …" pattern when heading is "What is X?"
  const whatMatch = headingText.match(/^what\s+(?:is|are)\s+(.+?)\??$/i);
  if (whatMatch) {
    const subject = whatMatch[1].trim().replace(/[?.]$/, '');
    if (firstSentence && firstSentence.length < MAX_ANSWER_CHARS) {
      // If first sentence already starts with the subject, just use it.
      if (firstSentence.toLowerCase().startsWith(subject.toLowerCase().split(/\s+/)[0])) {
        return clampSentence(firstSentence);
      }
      return clampSentence(`${subject} is ${firstSentence.charAt(0).toLowerCase()}${firstSentence.slice(1)}`);
    }
  }
  return clampSentence(firstSentence);
}

/** Containers that may wrap prose (fact boxes, callouts, figures). */
const CONTAINER_TAGS = new Set(['div', 'aside', 'blockquote', 'figure']);

/** Pull the first paragraph-ish prose out of a container block. */
function prosePlaceInContainer(inner: string): string | null {
  const p = inner.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (p) return p[1];
  const li = inner.match(/<li[^>]*>([\s\S]*?)<\/li>/i);
  if (li) return li[1];
  const text = stripTags(inner);
  return text ? text : null;
}

/** Extract the first two data cells of a table row as a fallback summary. */
function synthesizeFromTable(inner: string): string | null {
  const rows = inner.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
  for (const row of rows) {
    const cells = (row.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi) || [])
      .map((c) => stripTags(c))
      .filter(Boolean);
    // Skip header rows (all-th) — we want a real data row.
    if (/<th[\s>]/i.test(row)) continue;
    if (cells.length >= 2) return clampSentence(`${cells[0]}: ${cells.slice(1, 3).join(' — ')}.`);
  }
  return null;
}

interface Candidate {
  kind: 'prose' | 'list' | 'table';
  inner: string;
}

/**
 * Scan forward from a heading for the first block we can safely summarize.
 * Stops at the next heading so we never borrow content from another section.
 */
function findAnswerSource(blocks: Block[], from: number): Candidate | null {
  let fallback: Candidate | null = null;
  for (let j = from; j < blocks.length; j++) {
    const b = blocks[j];
    if (!b.tag) continue;
    if (/^h[1-6]$/.test(b.tag)) break;
    if (b.tag === 'p') {
      const text = stripTags(b.inner);
      if (!text) continue;
      if (isTransitional(text) && !fallback) {
        fallback = { kind: 'prose', inner: b.inner };
        continue;
      }
      return { kind: 'prose', inner: b.inner };
    }
    if (b.tag === 'ul' || b.tag === 'ol') {
      if (!fallback) fallback = { kind: 'list', inner: b.inner };
      continue;
    }
    if (b.tag === 'table') {
      if (!fallback) fallback = { kind: 'table', inner: b.inner };
      continue;
    }
    if (CONTAINER_TAGS.has(b.tag)) {
      const prose = prosePlaceInContainer(b.inner);
      if (prose && !fallback) fallback = { kind: 'prose', inner: prose };
      continue;
    }
  }
  return fallback;
}

export function addBlockAnswers(html: string): string {
  if (!html) return html;
  const blocks = tokenize(html);
  const out: string[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    out.push(block.raw);

    if (!block.tag || !/^h[23]$/.test(block.tag)) continue;
    const headingText = stripTags(block.inner);
    if (!headingText) continue;

    const question = isQuestion(headingText);
    // Mode B (declarative summaries) only fires on <h2> to avoid clutter.
    const declarativeH2 = !question && block.tag === 'h2' && !isNavigationalHeading(headingText);
    if (!question && !declarativeH2) continue;

    // Already wrapped right after the heading — skip (idempotent).
    let n = i + 1;
    while (n < blocks.length && !blocks[n].raw.trim()) n++;
    if (blocks[n] && alreadyHasBlockAnswer(blocks[n])) continue;

    const source = findAnswerSource(blocks, i + 1);
    if (!source) continue;

    if (source.kind === 'prose') {
      const text = stripTags(source.inner);
      if (!text) continue;

      // Short, clean lead paragraph → insert a wrapped clamped copy after the heading.
      if (isCleanAnswer(text) && !isTransitional(text)) {
        out.push(makeBlockAnswer(clampSentence(text)));
        continue;
      }

      if (question) {
        const synth = synthesizeFromHeading(headingText, source.inner);
        if (synth) {
          out.push(makeBlockAnswer(synth));
          continue;
        }
      }

      // Declarative (or question fallback): clamp the opening sentence.
      const firstSentence = (text.match(/[^.!?]+[.!?]+/) || [text])[0]?.trim();
      const summary = firstSentence && firstSentence.length >= 30 ? firstSentence : text;
      if (summary && summary.length >= 30) {
        out.push(makeBlockAnswer(clampSentence(summary)));
      }
      continue;
    }

    if (source.kind === 'list') {
      const synth = synthesizeFromList(source.inner);
      if (synth) {
        const whatMatch = headingText.match(/^what\s+(?:is|are)\s+(.+?)\??$/i);
        const final = whatMatch
          ? clampSentence(`${whatMatch[1].trim()} includes: ${synth}`)
          : declarativeH2
          ? clampSentence(`${headingText.replace(/[:.!?]+$/, '')} includes: ${synth}`)
          : synth;
        out.push(makeBlockAnswer(final));
      }
      continue;
    }

    if (source.kind === 'table') {
      const synth = synthesizeFromTable(source.inner);
      if (synth) {
        out.push(
          makeBlockAnswer(
            clampSentence(`${headingText.replace(/[:.!?]+$/, '')} — ${synth}`)
          )
        );
      }
      continue;
    }
  }

  return out.join('');
}


export default addBlockAnswers;

