import { useParams } from 'react-router-dom';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SingleTermSchema } from '@/components/seo/DefinedTermSetSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getRelatedTerms } from '@/data/glossaryTerms';
import { getTranslatedGlossaryTerms, getTranslatedBlogPosts, getLangPrefix } from '@/utils/i18nData';
import { BookOpen, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';

const categoryColors: Record<string, string> = {
  invoicing: 'bg-primary/10 text-primary',
  payments: 'bg-green-500/10 text-green-600',
  accounting: 'bg-blue-500/10 text-blue-600',
  tax: 'bg-purple-500/10 text-purple-600',
  freelancing: 'bg-orange-500/10 text-orange-600',
  business: 'bg-rose-500/10 text-rose-600',
  'e-invoicing': 'bg-cyan-500/10 text-cyan-600',
};

const GlossaryTermPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation('glossary');
  const lang = getLangPrefix(i18n.language);
  const glossaryTerms = getTranslatedGlossaryTerms(lang);
  const blogPosts = getTranslatedBlogPosts(lang);

  const term = glossaryTerms.find((gt) => gt.slug === slug);

  if (!term) {
    return (
      <Layout>
        <SEOHead
          title={t('seoTitle')}
          description={t('seoDescription')}
          noindex
        />
        <div className="py-24 text-center">
          <div className="container mx-auto px-4 max-w-xl">
            <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">{t('noResults')}</h1>
            <Button asChild className="mt-4">
              <Link to="/glossary" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> {t('badge')}
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedTermsList = getRelatedTerms(term.slug);
  const relatedArticles = term.relatedArticles
    ? blogPosts.filter((post) => term.relatedArticles?.includes(post.slug))
    : [];

  const categoryLabel = t(`categories.${term.category === 'e-invoicing' ? 'eInvoicing' : term.category}`, term.category);

  return (
    <Layout>
      <SEOHead
        title={`${term.term}: Definition & Meaning | Invoicemonk Glossary`}
        description={term.definition.length > 155 ? `${term.definition.slice(0, 152)}...` : term.definition}
      />
      <SingleTermSchema term={term} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Glossary', url: '/glossary' },
          { name: term.term, url: `/glossary/${term.slug}` },
        ]}
      />

      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <Link
              to="/glossary"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> {t('badge')}
            </Link>

            <Badge variant="secondary" className={`mb-4 ${categoryColors[term.category] || ''}`}>
              {categoryLabel}
            </Badge>

            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-6">
              {term.term}
            </h1>

            {/* Direct answer first — targets glossary-intent queries */}
            <p className="text-body-lg text-foreground font-medium border-l-4 border-primary pl-4 mb-8">
              {term.definition}
            </p>

            {term.extendedDescription && (
              <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-3">{t('moreDetails')}</h2>
                <p className="text-muted-foreground">{term.extendedDescription}</p>
              </div>
            )}

            {relatedTermsList.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">{t('relatedTerms')}</h2>
                <div className="flex flex-wrap gap-2">
                  {relatedTermsList.map((related) => (
                    <Button key={related.slug} variant="outline" size="sm" asChild>
                      <Link to={`/glossary/${related.slug}`}>{related.term}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {relatedArticles.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">{t('learnMore')}</h2>
                <div className="space-y-2">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      to={`/blog/${article.slug}`}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <ChevronRight className="h-4 w-4" />
                      {article.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="py-8 text-center">
                <h2 className="text-2xl font-bold mb-2">{t('ctaTitle')}</h2>
                <p className="text-muted-foreground mb-4">{t('ctaSubtitle')}</p>
                <Button asChild>
                  <Link to="/pricing" className="gap-2">
                    {t('getStartedFree')} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default GlossaryTermPage;
