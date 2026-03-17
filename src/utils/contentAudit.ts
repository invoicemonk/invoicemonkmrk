import { blogPosts, type BlogPost } from '@/data/blogPosts';

const AUDIT_INTERVAL_DAYS = 180; // Koray's 6-month audit cycle

/**
 * Returns posts that are due for a content audit (last audited > 6 months ago or never audited).
 * Sorted by priority: P0 first, then P1, then by staleness.
 */
export function getPostsDueForAudit(): (BlogPost & { daysSinceAudit: number | null })[] {
  const now = Date.now();

  return blogPosts
    .map((post) => {
      const lastAudited = post.lastAudited ? new Date(post.lastAudited).getTime() : null;
      const daysSinceAudit = lastAudited ? Math.floor((now - lastAudited) / (1000 * 60 * 60 * 24)) : null;
      return { ...post, daysSinceAudit };
    })
    .filter((post) => post.daysSinceAudit === null || post.daysSinceAudit >= AUDIT_INTERVAL_DAYS)
    .sort((a, b) => {
      // P0 before P1 before others
      const priorityOrder: Record<string, number> = { P0: 0, P1: 1, P2: 2 };
      const pa = priorityOrder[a.priority || 'P2'] ?? 3;
      const pb = priorityOrder[b.priority || 'P2'] ?? 3;
      if (pa !== pb) return pa - pb;
      // Never audited first, then most stale
      if (a.daysSinceAudit === null && b.daysSinceAudit !== null) return -1;
      if (a.daysSinceAudit !== null && b.daysSinceAudit === null) return 1;
      return (b.daysSinceAudit ?? Infinity) - (a.daysSinceAudit ?? Infinity);
    });
}

/**
 * Returns posts missing a macroContext declaration.
 */
export function getPostsMissingMacroContext(): BlogPost[] {
  return blogPosts.filter((post) => !post.macroContext);
}

/**
 * Scans blog post HTML content for Question H2s that lack a concise extractive answer
 * (first <p> after the H2 should be ≤50 words for a tight extractive answer).
 */
export function getPostsWithWeakExtractiveAnswers(): { slug: string; title: string; h2: string; firstParaWords: number }[] {
  const results: { slug: string; title: string; h2: string; firstParaWords: number }[] = [];

  for (const post of blogPosts) {
    // Find question H2s (ending with ?)
    const h2Regex = /<h2[^>]*>(.*?\?)<\/h2>/gi;
    let match: RegExpExecArray | null;
    while ((match = h2Regex.exec(post.content)) !== null) {
      const questionH2 = match[1].replace(/<[^>]+>/g, '').trim();
      // Find the next <p> after this H2
      const afterH2 = post.content.slice(match.index + match[0].length);
      const pMatch = afterH2.match(/<p[^>]*>(.*?)<\/p>/s);
      if (pMatch) {
        const plainText = pMatch[1].replace(/<[^>]+>/g, '').trim();
        const wordCount = plainText.split(/\s+/).length;
        if (wordCount > 50) {
          results.push({ slug: post.slug, title: post.title, h2: questionH2, firstParaWords: wordCount });
        }
      }
    }
  }

  return results;
}
