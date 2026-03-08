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
  blogPostRegistry[lang] = posts;
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

/** Get all blog posts for a language, falling back to English */
export function getTranslatedBlogPosts(lang: string): BlogPost[] {
  if (lang === 'en') {
    // Lazy import to avoid circular dependency
    const { blogPosts } = require('@/data/blogPosts');
    return blogPosts;
  }
  if (blogPostRegistry[lang]) return blogPostRegistry[lang];
  const { blogPosts } = require('@/data/blogPosts');
  return blogPosts;
}

/** Get a single blog post by slug for a language */
export function getBlogPostBySlugTranslated(slug: string, lang: string): BlogPost | undefined {
  const posts = getTranslatedBlogPosts(lang);
  return posts.find(p => p.slug === slug);
}

/** Get all help guides for a language, falling back to English */
export function getTranslatedHelpGuides(lang: string): HelpGuide[] {
  if (lang === 'en') {
    const { helpGuides } = require('@/data/helpGuides');
    return helpGuides;
  }
  if (helpGuideRegistry[lang]) return helpGuideRegistry[lang];
  const { helpGuides } = require('@/data/helpGuides');
  return helpGuides;
}

/** Get a single help guide by slug for a language */
export function getGuideBySlugTranslated(slug: string, lang: string): HelpGuide | undefined {
  const guides = getTranslatedHelpGuides(lang);
  return guides.find(g => g.slug === slug);
}

/** Get all glossary terms for a language, falling back to English */
export function getTranslatedGlossaryTerms(lang: string): GlossaryTerm[] {
  if (lang === 'en') {
    const { glossaryTerms } = require('@/data/glossaryTerms');
    return glossaryTerms;
  }
  if (glossaryTermRegistry[lang]) return glossaryTermRegistry[lang];
  const { glossaryTerms } = require('@/data/glossaryTerms');
  return glossaryTerms;
}

/** Get authors for a language, falling back to English */
export function getTranslatedAuthors(lang: string): Record<string, Author> {
  if (lang === 'en') {
    const { authors } = require('@/data/authors');
    return authors;
  }
  if (authorRegistry[lang]) return authorRegistry[lang];
  const { authors } = require('@/data/authors');
  return authors;
}

/** Get an author by slug for a language */
export function getAuthorBySlugTranslated(slug: string, lang: string): Author | undefined {
  const data = getTranslatedAuthors(lang);
  return data[slug];
}

/** Get pillars for a language, falling back to English */
export function getTranslatedPillars(lang: string): Pillar[] {
  if (lang === 'en') {
    const { pillars } = require('@/data/topicalMap');
    return pillars;
  }
  if (pillarRegistry[lang]) return pillarRegistry[lang];
  const { pillars } = require('@/data/topicalMap');
  return pillars;
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
