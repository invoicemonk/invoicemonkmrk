import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

import { DefinedTermSetSchema } from '@/components/seo/DefinedTermSetSchema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { 
  getGlossaryCategories,
  searchGlossaryTerms,
  getRelatedTerms,
  type GlossaryTerm 
} from '@/data/glossaryTerms';
import { getTranslatedGlossaryTerms, getTranslatedBlogPosts, getLangPrefix } from '@/utils/i18nData';

// Side-effect imports to register translated glossary terms
import '@/data/glossaryTerms.de';
import '@/data/glossaryTerms.fr';
import '@/data/glossaryTerms.pt';
import '@/data/glossaryTerms.es';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Wallet, 
  Calculator, 
  Shield, 
  User, 
  Briefcase,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const categoryIcons: Record<GlossaryTerm['category'], typeof FileText> = {
  invoicing: FileText,
  payments: Wallet,
  accounting: Calculator,
  tax: Shield,
  freelancing: User,
  business: Briefcase,
};

const categoryColors: Record<GlossaryTerm['category'], string> = {
  invoicing: 'bg-primary/10 text-primary',
  payments: 'bg-green-500/10 text-green-600',
  accounting: 'bg-blue-500/10 text-blue-600',
  tax: 'bg-purple-500/10 text-purple-600',
  freelancing: 'bg-orange-500/10 text-orange-600',
  business: 'bg-rose-500/10 text-rose-600',
};

const Glossary = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const { t, i18n } = useTranslation('glossary');
  const lang = getLangPrefix(i18n.language);
  const glossaryTerms = getTranslatedGlossaryTerms(lang);
  const blogPosts = getTranslatedBlogPosts(lang);
  const selectedCategory = searchParams.get('category') as GlossaryTerm['category'] | null;
  const selectedTerm = searchParams.get('term');

  const categories = getGlossaryCategories();

  // Build category config with translated labels
  const categoryConfig: Record<GlossaryTerm['category'], { icon: typeof FileText; label: string; color: string }> = {
    invoicing: { icon: categoryIcons.invoicing, label: t('categories.invoicing'), color: categoryColors.invoicing },
    payments: { icon: categoryIcons.payments, label: t('categories.payments'), color: categoryColors.payments },
    accounting: { icon: categoryIcons.accounting, label: t('categories.accounting'), color: categoryColors.accounting },
    tax: { icon: categoryIcons.tax, label: t('categories.tax'), color: categoryColors.tax },
    freelancing: { icon: categoryIcons.freelancing, label: t('categories.freelancing'), color: categoryColors.freelancing },
    business: { icon: categoryIcons.business, label: t('categories.business'), color: categoryColors.business },
  };

  // Filter terms based on search and category
  const filteredTerms = useMemo(() => {
    let terms = glossaryTerms;
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      terms = terms.filter(t => 
        t.term.toLowerCase().includes(q) || 
        t.definition.toLowerCase().includes(q)
      );
    }
    
    if (selectedCategory) {
      terms = terms.filter(t => t.category === selectedCategory);
    }
    
    return terms.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory, glossaryTerms]);

  // Group terms alphabetically
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach(term => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  // Get the selected term details
  const termDetails = selectedTerm 
    ? glossaryTerms.find(t => t.slug === selectedTerm)
    : null;

  const relatedTermsList = termDetails ? getRelatedTerms(termDetails.slug) : [];
  
  // Get related articles for the selected term
  const relatedArticles = termDetails?.relatedArticles
    ? blogPosts.filter(post => termDetails.relatedArticles?.includes(post.slug))
    : [];

  const handleCategoryFilter = (category: GlossaryTerm['category'] | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handleTermSelect = (slug: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('term', slug);
    setSearchParams(newParams);
  };

  const handleCloseTerm = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('term');
    setSearchParams(newParams);
  };

  return (
    <Layout>
      <FAQSchema items={t('faqs', { returnObjects: true }) as Array<{ question: string; answer: string }>} />
      <SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
      />
      <DefinedTermSetSchema terms={glossaryTerms} />

      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              <span>{t('badge')}</span>
            </div>
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
              {t('title')}
            </h1>
            <p className="text-body-lg text-muted-foreground">
              {t('subtitle')}
            </p>
          </AnimatedSection>

          {/* Search */}
          <AnimatedSection className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={!selectedCategory ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryFilter(null)}
            >
              {t('allTerms')}
            </Button>
            {categories.map((category) => {
              const config = categoryConfig[category];
              const Icon = config.icon;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter(category)}
                  className="gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {config.label}
                </Button>
              );
            })}
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Term List */}
            <div className="lg:col-span-2">
              {Object.keys(groupedTerms).length === 0 ? (
                <AnimatedSection className="text-center py-12">
                  <p className="text-muted-foreground">{t('noResults')}</p>
                </AnimatedSection>
              ) : (
                <div className="space-y-8">
                  {Object.entries(groupedTerms).map(([letter, terms]) => (
                    <AnimatedSection key={letter}>
                      <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                        {letter}
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {terms.map((term) => {
                          const config = categoryConfig[term.category];
                          return (
                            <button
                              key={term.slug}
                              onClick={() => handleTermSelect(term.slug)}
                              className={`text-left p-4 rounded-lg border transition-all hover:border-primary hover:shadow-sm ${
                                selectedTerm === term.slug ? 'border-primary bg-primary/5' : 'border-border'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h3 className="font-semibold text-foreground">{term.term}</h3>
                                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                    {term.definition}
                                  </p>
                                </div>
                                <Badge variant="secondary" className={`shrink-0 ${config.color}`}>
                                  {config.label}
                                </Badge>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>

            {/* Term Detail Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {termDetails ? (
                  <AnimatedSection>
                    <Card>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Badge 
                              variant="secondary" 
                              className={`mb-2 ${categoryConfig[termDetails.category].color}`}
                            >
                              {categoryConfig[termDetails.category].label}
                            </Badge>
                            <CardTitle className="text-xl" id={termDetails.slug}>
                              {termDetails.term}
                            </CardTitle>
                          </div>
                          <Button variant="ghost" size="sm" onClick={handleCloseTerm}>
                            ×
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground mb-1">{t('definition')}</h4>
                          <p className="text-foreground">{termDetails.definition}</p>
                        </div>
                        
                        {termDetails.extendedDescription && (
                          <div>
                            <h4 className="font-medium text-sm text-muted-foreground mb-1">{t('moreDetails')}</h4>
                            <p className="text-foreground text-sm">{termDetails.extendedDescription}</p>
                          </div>
                        )}

                        {relatedTermsList.length > 0 && (
                          <div>
                            <h4 className="font-medium text-sm text-muted-foreground mb-2">{t('relatedTerms')}</h4>
                            <div className="flex flex-wrap gap-2">
                              {relatedTermsList.map(related => (
                                <Button
                                  key={related.slug}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleTermSelect(related.slug)}
                                >
                                  {related.term}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}

                        {relatedArticles.length > 0 && (
                          <div>
                            <h4 className="font-medium text-sm text-muted-foreground mb-2">{t('learnMore')}</h4>
                            <div className="space-y-2">
                              {relatedArticles.map(article => (
                                <Link
                                  key={article.slug}
                                  to={`/blog/${article.slug}`}
                                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                  {article.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ) : (
                  <Card className="border-dashed">
                    <CardContent className="py-8 text-center">
                      <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">
                        {t('selectPrompt')}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <AnimatedSection className="mt-16 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="py-8">
                <h2 className="text-2xl font-bold mb-2">{t('ctaTitle')}</h2>
                <p className="text-muted-foreground mb-4">
                  {t('ctaSubtitle')}
                </p>
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

export default Glossary;
