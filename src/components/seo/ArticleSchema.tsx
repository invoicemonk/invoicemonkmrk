import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Author } from '@/data/authors';
import type { Pillar, ClusterType } from '@/data/topicalMap';
import { pillars } from '@/data/topicalMap';

interface EntityMention {
  name: string;
  type?: string;
  url?: string;
  sameAs?: string;
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  author: Author;
  section: string;
  // Enhanced semantic SEO fields
  pillar?: Pillar;
  clusterType?: ClusterType;
  isPillarContent?: boolean;
  semanticKeywords?: string[];
  relatedArticles?: Array<{ title: string; url: string }>;
  // New: Entity mentions for semantic relationships
  entityMentions?: EntityMention[];
  // Tool entities the article is about
  relatedTools?: Array<{ label: string; url: string; description: string }>;
}

/**
 * Enhanced ArticleSchema following Koray Tuğberk Gübür's Semantic SEO principles
 * 
 * Includes:
 * - mentions: Entities referenced in the article (topics, concepts, products)
 * - about: Primary entities the article discusses
 * - isPartOf: Pillar/cluster relationships for topical authority
 * - author with knowsAbout: E-E-A-T expertise signals
 */
export function ArticleSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  author,
  section,
  pillar,
  clusterType,
  isPillarContent,
  semanticKeywords,
  relatedArticles,
  entityMentions,
  relatedTools,
}: ArticleSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';
  const BASE = 'https://invoicemonk.com';

  const langMap: Record<string, string> = {
    en: 'en',
    de: 'de',
    fr: 'fr',
    pt: 'pt-BR',
    es: 'es'
  };
  const inLanguage = langMap[prefix] || 'en';

  // Determine article type based on pillar content
  const articleType = isPillarContent ? 'Article' : 'BlogPosting';
  
  // Build entity mentions from pillar topics and provided mentions
  const mentions = buildEntityMentions(pillar, explicitMentions => explicitMentions, prefix, BASE, entityMentions);
  
  // Build about entities from pillar and content, including related tools
  const aboutEntities = buildAboutEntities(pillar, isPillarContent, section, prefix, BASE, relatedTools);
  
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": articleType,
    "@id": `${url}#article`,
    "headline": title,
    "description": description,
    "url": url,
    "image": imageUrl ? {
      "@type": "ImageObject",
      "url": imageUrl,
      "caption": title,
      "representativeOfPage": true
    } : `${BASE}/og-image.png`,
    "datePublished": datePublished,
    "dateModified": (dateModified && dateModified >= datePublished) ? dateModified : datePublished,
    "inLanguage": inLanguage,
    
    // Enhanced author with E-E-A-T signals
    "author": {
      "@type": "Person",
      "@id": `${BASE}/${prefix}/blog/author/${author.slug}#person`,
      "name": author.name,
      "url": `${BASE}/${prefix}/blog/author/${author.slug}`,
      "jobTitle": author.role,
      "description": author.bio,
      // E-E-A-T: Expertise signals
      "knowsAbout": author.expertise.map(topic => ({
        "@type": "Thing",
        "name": topic
      })),
      "sameAs": Object.values(author.socialLinks).filter(Boolean)
    },
    
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      "name": "Invoicemonk",
      "url": BASE,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE}/logo.png`
      }
    },
    
    "articleSection": pillar?.title || section,
    
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  // Add semantic keywords if provided
  if (semanticKeywords && semanticKeywords.length > 0) {
    schema.keywords = semanticKeywords.join(', ');
  }

  // Add entity mentions for semantic relationships
  if (mentions.length > 0) {
    schema.mentions = mentions;
  }

  // Add about entities for primary topic signals
  if (aboutEntities.length > 0) {
    schema.about = aboutEntities;
  }

  // Add pillar/cluster relationship for semantic SEO
  if (pillar) {
    schema.isPartOf = {
      "@type": "WebPage",
      "@id": `${BASE}/${prefix}${pillar.hubPage}`,
      "name": pillar.title,
      "description": pillar.description,
      "url": `${BASE}/${prefix}${pillar.hubPage}`
    };
  }

  // Add related articles for internal linking signal
  if (relatedArticles && relatedArticles.length > 0) {
    schema.relatedLink = relatedArticles.map(article => ({
      "@type": "WebPage",
      "url": article.url,
      "name": article.title
    }));
  }

  // Add cluster type as additional context
  if (clusterType) {
    const speakableType = {
      pillar: 'Complete Guide',
      cluster: 'In-depth Article',
      supporting: 'Supporting Content',
      outer: 'Related Content'
    };
    schema.speakable = {
      "@type": "SpeakableSpecification",
      "cssSelector": ["article h1", "article h2", "article p:first-of-type"]
    };
    schema.learningResourceType = speakableType[clusterType];
  }

  // Add citation/reference to product page
  if (pillar?.targetProduct) {
    schema.citation = {
      "@type": "WebPage",
      "url": `${BASE}/${prefix}${pillar.targetProduct}`,
      "name": `Invoicemonk ${pillar.title} Product`
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * Build entity mentions from pillar topics and explicit mentions
 * These create semantic relationships between content and concepts
 */
function buildEntityMentions(
  pillar: Pillar | undefined, 
  noop: any,
  prefix: string,
  BASE: string,
  explicitMentions?: EntityMention[]
): Array<Record<string, unknown>> {
  const mentions: Array<Record<string, unknown>> = [];

  // Add pillar key topics as entity mentions
  if (pillar) {
    pillar.keyTopics.forEach(topic => {
      mentions.push({
        "@type": "Thing",
        "name": topic.title,
        "description": topic.description,
        ...(topic.link && { "url": `${BASE}/${prefix}${topic.link.startsWith('/') ? topic.link : '/' + topic.link}` })
      });
    });

    // Add cross-pillar mentions for related topics
    const relatedPillars = getRelatedPillars(pillar.id);
    relatedPillars.forEach(relatedPillar => {
      mentions.push({
        "@type": "Thing",
        "name": relatedPillar.title,
        "description": relatedPillar.description,
        "url": `${BASE}/${prefix}${relatedPillar.hubPage}`
      });
    });
  }

  // Add explicit entity mentions with proper typing
  if (explicitMentions) {
    explicitMentions.forEach(mention => {
      mentions.push({
        "@type": mention.type || "Thing",
        "name": mention.name,
        ...(mention.url && { "url": mention.url }),
        ...(mention.sameAs && { "sameAs": mention.sameAs })
      });
    });
  }

  return mentions;
}

/**
 * Build about entities for primary topic signals
 * Helps search engines understand the main subject of the article
 */
function buildAboutEntities(
  pillar: Pillar | undefined,
  isPillarContent: boolean | undefined,
  section: string | undefined,
  prefix: string,
  BASE: string,
  relatedTools?: Array<{ label: string; url: string; description: string }>
): Array<Record<string, unknown>> {
  const aboutEntities: Array<Record<string, unknown>> = [];

  if (pillar) {
    // Primary about entity is the pillar topic
    aboutEntities.push({
      "@type": "Thing",
      "name": pillar.title,
      "description": pillar.longDescription || pillar.description,
      "url": `${BASE}/${prefix}${pillar.hubPage}`
    });

    // For pillar content, add the central entity
    if (isPillarContent) {
      aboutEntities.push({
        "@type": "SoftwareApplication",
        "name": "Invoicemonk",
        "applicationCategory": "BusinessApplication",
        "description": "All-in-one business finance platform for invoicing, expenses, payments, and accounting",
        "url": `${BASE}/${prefix}${pillar.targetProduct}`
      });
    }
  } else if (section) {
    // Fallback: generate about entity from section/category for standalone posts
    aboutEntities.push({
      "@type": "Thing",
      "name": section,
      "description": `Articles and guides about ${section.toLowerCase()} for small businesses and freelancers`,
      "url": `${BASE}/${prefix}/blog?category=${encodeURIComponent(section)}`
    });

    // Add Invoicemonk as secondary about entity for all posts
    aboutEntities.push({
      "@type": "SoftwareApplication",
      "name": "Invoicemonk",
      "applicationCategory": "BusinessApplication",
      "description": "All-in-one business finance platform for invoicing, expenses, payments, and accounting",
      "url": BASE
    });
  }

  // Add tool entities as about items when posts reference specific tools
  if (relatedTools && relatedTools.length > 0) {
    relatedTools.forEach(tool => {
      aboutEntities.push({
        "@type": "WebApplication",
        "name": tool.label,
        "description": tool.description,
        "url": `${BASE}/${prefix}${tool.url}`,
        "applicationCategory": "BusinessApplication"
      });
    });
  }

  return aboutEntities;
}

/**
 * Get related pillars for cross-topic entity mentions
 * Creates semantic web between related business topics
 */
function getRelatedPillars(currentPillarId: string): Pillar[] {
  const relationships: Record<string, string[]> = {
    'invoicing-mastery': ['getting-paid', 'tax-compliance'],
    'getting-paid': ['invoicing-mastery', 'business-finances'],
    'business-finances': ['tax-compliance', 'getting-paid', 'expense-management'],
    'tax-compliance': ['invoicing-mastery', 'business-finances', 'expense-management'],
    'freelancer-success': ['invoicing-mastery', 'getting-paid', 'estimates-proposals', 'client-management'],
    'estimates-proposals': ['invoicing-mastery', 'freelancer-success', 'client-management'],
    'expense-management': ['business-finances', 'tax-compliance', 'freelancer-success'],
    'client-management': ['freelancer-success', 'invoicing-mastery', 'estimates-proposals']
  };

  const relatedIds = relationships[currentPillarId] || [];
  return pillars.filter(p => relatedIds.includes(p.id));
}
