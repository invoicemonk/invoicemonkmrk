/**
 * Language-aware data fetching utility.
 * 
 * Each content type (blog posts, help guides, glossary terms, etc.) has a registry
 * where translated data files register themselves. If no translation exists for the
 * requested language, English content is returned as fallback.
 * 
 * Usage in components:
 *   const { i18n } = useTranslation();
 *   const lang = getLangPrefix(i18n.language);
 *   const posts = getTranslatedBlogPosts(lang);
 */

import type { BlogPost } from '@/data/blogPosts';
import type { HelpGuide } from '@/data/helpGuides';
import type { GlossaryTerm } from '@/data/glossaryTerms';
import type { Author } from '@/data/authors';
import type { Pillar } from '@/data/topicalMap';

// English defaults (static imports for ES module compatibility)
import { blogPosts as enBlogPosts } from '@/data/blogPosts';
import { helpGuides as enHelpGuides } from '@/data/helpGuides';
import { glossaryTerms as enGlossaryTerms } from '@/data/glossaryTerms';
import { authors as enAuthors } from '@/data/authors';
import { pillars as enPillars } from '@/data/topicalMap';

// ── Normalize i18n language code to URL prefix ──────────────────────────
export function getLangPrefix(i18nLang: string): string {
  if (i18nLang === 'pt-BR' || i18nLang === 'pt') return 'pt';
  return i18nLang.split('-')[0];
}

// ── Translation registries ──────────────────────────────────────────────
// Language-specific data files call register*() at import time.
// Keys are lang prefixes: 'de', 'fr', 'pt', 'es'

const blogPostRegistry: Record<string, BlogPost[]> = {};
const helpGuideRegistry: Record<string, HelpGuide[]> = {};
const glossaryTermRegistry: Record<string, GlossaryTerm[]> = {};
const authorRegistry: Record<string, Record<string, Author>> = {};
const pillarRegistry: Record<string, Pillar[]> = {};

// ── Registration functions (called by translated data files) ────────────

export function registerBlogPosts(lang: string, posts: BlogPost[]) {
  if (blogPostRegistry[lang]) {
    blogPostRegistry[lang] = [...blogPostRegistry[lang], ...posts];
  } else {
    blogPostRegistry[lang] = posts;
  }
}

export function registerHelpGuides(lang: string, guides: HelpGuide[]) {
  helpGuideRegistry[lang] = guides;
}

export function registerGlossaryTerms(lang: string, terms: GlossaryTerm[]) {
  glossaryTermRegistry[lang] = terms;
}

export function registerAuthors(lang: string, data: Record<string, Author>) {
  authorRegistry[lang] = data;
}

export function registerPillars(lang: string, data: Pillar[]) {
  pillarRegistry[lang] = data;
}

// ── Data access functions (used by page components) ─────────────────────

/** Get all blog posts for a language, merging partial translations with English fallback */
export function getTranslatedBlogPosts(lang: string): BlogPost[] {
  if (lang === 'en') return enBlogPosts;
  const translated = blogPostRegistry[lang];
  if (!translated) return enBlogPosts;
  // If the translated set is smaller than English, it's a partial translation — merge
  if (translated.length < enBlogPosts.length) {
    const translatedSlugs = new Set(translated.map(p => p.slug));
    const merged = enBlogPosts.map(enPost =>
      translatedSlugs.has(enPost.slug)
        ? translated.find(p => p.slug === enPost.slug)!
        : enPost
    );
    return merged;
  }
  return translated;
}

/** Get a single blog post by slug for a language */
export function getBlogPostBySlugTranslated(slug: string, lang: string): BlogPost | undefined {
  if (lang !== 'en') {
    const translated = blogPostRegistry[lang];
    const found = translated?.find(p => p.slug === slug);
    if (found) return found;
  }
  return enBlogPosts.find(p => p.slug === slug);
}

/** Get all help guides for a language, falling back to English */
export function getTranslatedHelpGuides(lang: string): HelpGuide[] {
  if (lang === 'en') return enHelpGuides;
  return helpGuideRegistry[lang] ?? enHelpGuides;
}

/** Get a single help guide by slug for a language */
export function getGuideBySlugTranslated(slug: string, lang: string): HelpGuide | undefined {
  const guides = getTranslatedHelpGuides(lang);
  return guides.find(g => g.slug === slug);
}

/** Get all glossary terms for a language, falling back to English */
export function getTranslatedGlossaryTerms(lang: string): GlossaryTerm[] {
  if (lang === 'en') return enGlossaryTerms;
  return glossaryTermRegistry[lang] ?? enGlossaryTerms;
}

/** Get authors for a language, falling back to English */
export function getTranslatedAuthors(lang: string): Record<string, Author> {
  if (lang === 'en') return enAuthors;
  return authorRegistry[lang] ?? enAuthors;
}

/** Get an author by slug for a language */
export function getAuthorBySlugTranslated(slug: string, lang: string): Author | undefined {
  const data = getTranslatedAuthors(lang);
  return data[slug];
}

/** Get pillars for a language, falling back to English */
export function getTranslatedPillars(lang: string): Pillar[] {
  if (lang === 'en') return enPillars;
  return pillarRegistry[lang] ?? enPillars;
}

/** Check if translated content exists for a language and content type */
export function hasTranslation(lang: string, type: 'blog' | 'help' | 'glossary' | 'authors' | 'pillars'): boolean {
  switch (type) {
    case 'blog': return !!blogPostRegistry[lang];
    case 'help': return !!helpGuideRegistry[lang];
    case 'glossary': return !!glossaryTermRegistry[lang];
    case 'authors': return !!authorRegistry[lang];
    case 'pillars': return !!pillarRegistry[lang];
    default: return false;
  }
}
