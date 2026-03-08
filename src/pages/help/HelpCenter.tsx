import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { HelpSearch } from '@/components/help/HelpSearch';
import { HelpCategoryCard } from '@/components/help/HelpCategoryCard';
import { categoryOrder } from '@/data/helpGuides';
import { getTranslatedHelpGuides, getLangPrefix } from '@/utils/i18nData';
import { BookOpen } from 'lucide-react';

// Side-effect imports to register translated help guides
import '@/data/helpGuides.de';
import '@/data/helpGuides.fr';
import '@/data/helpGuides.pt';
import '@/data/helpGuides.es';

export default function HelpCenter() {
  const [query, setQuery] = useState('');
  const { t, i18n } = useTranslation('help');
  const lang = getLangPrefix(i18n.language);
  const helpGuides = getTranslatedHelpGuides(lang);

  // Translated category labels
  const categoryLabels: Record<string, string> = {
    'getting-started': t('categories.getting-started'),
    'core-features': t('categories.core-features'),
    'financial-tools': t('categories.financial-tools'),
    'administration': t('categories.administration'),
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return helpGuides;
    const q = query.toLowerCase();
    return helpGuides.filter(
      g =>
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.steps.some(s => s.name.toLowerCase().includes(q) || s.text.toLowerCase().includes(q))
    );
  }, [query, helpGuides]);

  const grouped = categoryOrder
    .map(cat => ({
      category: cat,
      label: categoryLabels[cat],
      guides: filtered.filter(g => g.category === cat),
    }))
    .filter(g => g.guides.length > 0);

  return (
    <Layout>
      <SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
      />
      <BreadcrumbSchema
        items={[
          { name: t('breadcrumbHome'), url: 'https://invoicemonk.com/' },
          { name: t('title'), url: 'https://invoicemonk.com/help' },
        ]}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-body-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            {t('badge')}
          </div>
          <h1 className="text-display-sm sm:text-display font-bold text-heading mb-4">
            {t('title')}
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            {t('subtitle')}
          </p>
          <HelpSearch onSearch={setQuery} />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {grouped.length === 0 ? (
            <p className="text-center text-muted-foreground text-body-lg py-12">
              {t('noResults', { query })}
            </p>
          ) : (
            grouped.map(group => (
              <div key={group.category} className="mb-12 last:mb-0">
                <h2 className="text-heading-sm font-bold text-heading mb-6">{group.label}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.guides.map(guide => (
                    <HelpCategoryCard key={guide.slug} guide={guide} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}
