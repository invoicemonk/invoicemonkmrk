import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { LearningResourceSchema } from '@/components/seo/LearningResourceSchema';
import { GuideHero, ConceptGrid, ArticleList, GuideCTA, GuideFAQ, GuideCrossLink } from '@/components/guides';
import { getClusterPostsForPillar } from '@/data/topicalMap';
import { getTranslatedPillars, getTranslatedBlogPosts, getLangPrefix } from '@/utils/i18nData';
import '@/data/pillars.de';
import '@/data/pillars.fr';
import '@/data/pillars.pt';
import '@/data/pillars.es';
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

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: pillar.title, url: `/guides/${pillar.slug}` }
  ];

  const hasPartItems = articles.map(a => ({
    name: a.title,
    url: `/blog/${a.slug}`,
  }));

  const teaches = pillar.keyTopics?.map(kt => kt.title) || [pillar.title];

  return (
    <Layout>
      <SEOHead title={`${pillar.title} Guide | Invoicemonk`} description={pillar.longDescription} />
      <BreadcrumbSchema items={breadcrumbs} />
      <WebPageSchema
        name={`${pillar.title} Guide`}
        description={pillar.longDescription}
        url={`/guides/${pillar.slug}`}
        hasPart={hasPartItems}
      />
      <LearningResourceSchema
        name={`${pillar.title} Guide`}
        description={pillar.longDescription}
        url={`/guides/${pillar.slug}`}
        teaches={teaches}
        educationalLevel="Beginner"
        timeRequired="PT15M"
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
