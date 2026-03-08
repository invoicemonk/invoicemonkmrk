import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { GuideHero, ConceptGrid, ArticleList, GuideCTA, GuideFAQ, GuideCrossLink } from '@/components/guides';
import { getClusterPostsForPillar } from '@/data/topicalMap';
import { getTranslatedPillars, getTranslatedBlogPosts, getLangPrefix } from '@/utils/i18nData';
import '@/data/pillars.de';
import '@/data/pillars.fr';
import '@/data/pillars.pt';
import '@/data/pillars.es';
import NotFound from '@/pages/NotFound';

export default function BusinessFinancesGuide() {
  const { i18n } = useTranslation();
  const lang = getLangPrefix(i18n.language);
  const pillars = getTranslatedPillars(lang);
  const pillar = pillars.find(p => p.slug === 'business-finances');
  
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

  return (
    <Layout>
      <SEOHead title={`${pillar.title} Guide | Invoicemonk`} description={pillar.longDescription} />
      <BreadcrumbSchema items={breadcrumbs} />
      <GuideHero pillar={pillar} />
      <ConceptGrid pillar={pillar} />
      <GuideCrossLink pillar={pillar} />
      <ArticleList pillar={pillar} articles={articles} />
      <GuideCTA pillar={pillar} />
      <GuideFAQ pillar={pillar} />
    </Layout>
  );
}
