import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { LearningResourceSchema } from '@/components/seo/LearningResourceSchema';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { GuideHero, ConceptGrid, ArticleList, GuideCTA, GuideFAQ, GuideCrossLink } from '@/components/guides';
import { getClusterPostsForPillar } from '@/data/topicalMap';
import { getTranslatedPillars, getTranslatedBlogPosts, getLangPrefix } from '@/utils/i18nData';
import { authors } from '@/data/authors';
import NotFound from '@/pages/NotFound';

// Side-effect imports: ensure cluster posts are registered in the blogPosts array
import '@/data/blogPostsCluster10';
import '@/data/blogPostsCluster11';
import '@/data/blogPostsCluster12';
import '@/data/blogPostsCluster13';
import '@/data/blogPostsCluster14';
import '@/data/blogPostsCluster15';
import '@/data/blogPostsCluster16';
import '@/data/blogPostsCluster17';
import '@/data/blogPostsCluster18';
import '@/data/blogPostsCluster19';

interface GuidePageWrapperProps {
  pillarSlug: string;
}

export default function GuidePageWrapper({ pillarSlug }: GuidePageWrapperProps) {
  const { i18n } = useTranslation();
  const lang = getLangPrefix(i18n.language);
  const pillars = getTranslatedPillars(lang);
  const pillar = pillars.find(p => p.slug === pillarSlug);

  const articles = useMemo(() => {
    if (!pillar) return [];
    const slugs = getClusterPostsForPillar(pillar.id);
    const blogPosts = getTranslatedBlogPosts(lang);
    return blogPosts.filter(post => slugs.includes(post.slug));
  }, [pillar, lang]);

  if (!pillar) return <NotFound />;

  const BASE = 'https://invoicemonk.com';
  const guidePath = `/guides/${pillar.slug}`;
  const guideUrl = `${BASE}/${lang}${guidePath}`;

  const breadcrumbs = [
    { name: 'Home', url: `/${lang}` },
    { name: 'Guides', url: `/${lang}/guides` },
    { name: pillar.title, url: `/${lang}${guidePath}` },
  ];

  const hasPartItems = articles.map(a => ({
    name: a.title,
    url: `/blog/${a.slug}`,
  }));

  const teaches = pillar.keyTopics?.map(kt => kt.title) || [pillar.title];

  // Derive datePublished/dateModified from the cluster's articles so the
  // pillar guide reflects the freshness of its supporting content.
  const dateModified = articles
    .map(a => a.dateModified || a.date)
    .filter(Boolean)
    .sort()
    .pop() || new Date().toISOString().split('T')[0];
  const datePublished = articles
    .map(a => a.date)
    .filter(Boolean)
    .sort()[0] || dateModified;

  const relatedArticles = articles.slice(0, 8).map(a => ({
    title: a.title,
    url: `${BASE}/${lang}/blog/${a.slug}`,
  }));

  const defaultAuthor = authors['olayinka-olayokun'];

  return (
    <Layout>
      <SEOHead
        title={`${pillar.title} Guide | Invoicemonk`}
        description={pillar.longDescription}
        canonical={guideUrl}
        ogType="article"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <WebPageSchema
        name={`${pillar.title} Guide`}
        description={pillar.longDescription}
        url={guidePath}
        hasPart={hasPartItems}
      />
      <LearningResourceSchema
        name={`${pillar.title} Guide`}
        description={pillar.longDescription}
        url={guidePath}
        teaches={teaches}
        educationalLevel="Beginner"
        timeRequired="PT15M"
      />
      <ArticleSchema
        title={`${pillar.title} Guide`}
        description={pillar.longDescription}
        url={guideUrl}
        datePublished={datePublished}
        dateModified={dateModified}
        author={defaultAuthor}
        section={pillar.title}
        pillar={pillar}
        clusterType="pillar"
        isPillarContent
        semanticKeywords={pillar.keyTopics?.map(kt => kt.title)}
        relatedArticles={relatedArticles}
      />
      <GuideHero pillar={pillar} />
      <ConceptGrid pillar={pillar} />
      <GuideCrossLink pillar={pillar} />
      <ArticleList pillar={pillar} articles={articles} />
      <GuideCTA pillar={pillar} />
      <GuideFAQ pillar={pillar} />
    </Layout>
  );
}
