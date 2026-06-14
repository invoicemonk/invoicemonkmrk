import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, FileCheck, Send, Hash, RefreshCw, CheckSquare } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const stepIcons = [Globe, FileCheck, Send];
const proofIcons = [Hash, RefreshCw, CheckSquare];

export default function MultiCurrencyInvoicing() {
  const { t } = useTranslation('multiCurrencyInvoicing');
  const problemParagraphs = t('problem.paragraphs', { returnObjects: true }) as string[];
  const steps = t('howItWorks.steps', { returnObjects: true }) as { title: string; body: string }[];
  const markets = t('markets.items', { returnObjects: true }) as { country: string; fields: string }[];
  const proofItems = t('proof.items', { returnObjects: true }) as { title: string; body: string }[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Multi-Currency Invoicing', url: '/multi-currency-invoicing' },
        ]}
      />

      <PageHero
        badge={{ icon: Globe, text: t('hero.badge') }}
        title={t('hero.title')}
        accentWord={t('hero.accentWord')}
        description={t('hero.description')}
        primaryCta={{ text: t('hero.primaryCta'), href: 'https://app.invoicemonk.com/signup?plan=professional' }}
        secondaryCta={{ text: t('hero.secondaryCta'), href: '#how-it-works', external: false }}
        backgroundVariant="gradient"
      />

      {/* Section 2 — Problem */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary text-center mb-4">
            {t('problem.label')}
          </p>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{problemParagraphs[0]}</p>
            <p className="text-2xl lg:text-3xl font-bold text-foreground text-center py-4">
              {problemParagraphs[1]}
            </p>
            <p>{problemParagraphs[2]}</p>
            <p>{problemParagraphs[3]}</p>
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-primary text-center mt-8">
            {t('problem.punchline')}
          </p>
        </div>
      </section>

      {/* Section 3 — How it works */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            {t('howItWorks.label')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <Card key={i} className="border-border/50 relative">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                        {i + 1}
                      </div>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 — Testimonial */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="border-primary/30 shadow-soft-lg">
            <CardContent className="p-8 lg:p-10 text-center">
              <p className="text-xl lg:text-2xl text-foreground italic leading-relaxed mb-6">
                "{t('testimonial.quote')}"
              </p>
              <p className="font-semibold text-foreground">{t('testimonial.name')}</p>
              <p className="text-sm text-muted-foreground mb-3">{t('testimonial.role')}</p>
              <p className="text-xs text-muted-foreground/80 max-w-md mx-auto">
                {t('testimonial.context')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5 — Markets */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
            {t('markets.label')}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t('markets.intro')}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {markets.map((m, i) => (
              <Card key={i} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{m.country}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.fields}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mt-8 italic">
            {t('markets.closing')}
          </p>
        </div>
      </section>

      {/* Section 6 — Proof points */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            {t('proof.label')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {proofItems.map((p, i) => {
              const Icon = proofIcons[i];
              return (
                <Card key={i} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">{t('finalCta.title')}</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">{t('finalCta.description')}</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?plan=professional" target="_blank" rel="noopener noreferrer">
              {t('finalCta.button')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <p className="text-white/70 text-sm mt-4">{t('finalCta.note')}</p>
        </div>
      </section>
    </Layout>
  );
}
