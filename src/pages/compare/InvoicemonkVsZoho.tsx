import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ComparisonReviewSchema } from '@/components/seo/ComparisonReviewSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';
import { MatrixTable } from '@/components/compare/MatrixTable';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { InlineSignupCTA } from '@/components/compare/InlineSignupCTA';

interface FAQItem { question: string; answer: string; }
interface FeatureRow { name: string; invoicemonk: boolean | string; competitor: boolean | string; }
interface FeatureGroup { title: string; rows: FeatureRow[]; }
interface KeyFact { title: string; body: string; }
interface ScenarioBlock { title: string; paragraphs: string[]; }
interface SourceItem { label: string; url: string; note: string; }
interface LinkItem { label: string; to: string; }
interface MatrixRowData { label: string; values: (boolean | string | number)[]; }
interface PricingTier { title: string; headline: string; items: string[]; upgradeNote: string; }

export default function InvoicemonkVsZoho() {
  const { t } = useTranslation('compareZoho');

  const featureGroups = t('featureGroups', { returnObjects: true }) as FeatureGroup[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const relatedLinks = t('related.links', { returnObjects: true }) as LinkItem[];
  const keyFacts = t('keyFacts.items', { returnObjects: true }) as KeyFact[];
  const whereZoho = t('whereZohoWins.items', { returnObjects: true }) as string[];
  const whereInvoicemonk = t('whereInvoicemonkWins.items', { returnObjects: true }) as string[];
  const scenarioZoho = t('scenario.zoho', { returnObjects: true }) as ScenarioBlock;
  const scenarioInvoicemonk = t('scenario.invoicemonk', { returnObjects: true }) as ScenarioBlock;
  const summaryHeaders = t('summary.headers', { returnObjects: true }) as string[];
  const summaryRows = t('summary.rows', { returnObjects: true }) as MatrixRowData[];
  const sources = t('sources.items', { returnObjects: true }) as SourceItem[];
  const bottomLine = t('bottomLine.paragraphs', { returnObjects: true }) as string[];
  const pricingZoho = t('pricing.zoho', { returnObjects: true }) as PricingTier;
  const pricingInvoicemonk = t('pricing.invoicemonk', { returnObjects: true }) as PricingTier;

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/compare/best-invoicing-software' },
        { name: 'vs Zoho Invoice', url: '/compare/invoicemonk-vs-zoho-invoice' },
      ]} />
      <ComparisonReviewSchema
        itemName="Invoicemonk"
        competitorName="Zoho Invoice"
        positiveNotes={whereInvoicemonk}
        negativeNotes={whereZoho}
        url="/compare/invoicemonk-vs-zoho-invoice"
      />

      {/* Hero + Quick Answer */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-xs uppercase tracking-wider text-muted-foreground text-center mb-3">{t('lastUpdated')}</p>
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-8">{t('hero.title')}</h1>
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{t('hero.quickAnswerLabel')}</p>
              <p className="text-foreground">{t('hero.quickAnswer')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-3">{t('whoFor.title')}</h2>
          <p className="text-muted-foreground">{t('whoFor.body')}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-4">{t('overview.title')}</h2>
          <h3 className="font-semibold text-foreground mt-4 mb-2">Zoho Invoice</h3>
          <p className="text-muted-foreground mb-4">{t('overview.zoho')}</p>
          <h3 className="font-semibold text-foreground mt-4 mb-2">Invoicemonk</h3>
          <p className="text-muted-foreground">{t('overview.invoicemonk')}</p>
        </div>
      </section>

      {/* Key facts */}
      <InlineSignupCTA variant="banner" />

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-8">{t('keyFacts.title')}</h2>
          <div className="space-y-8">
            {keyFacts.map((f) => (
              <article key={f.title}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Feature tables */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">Feature comparison</h2>
          <div className="space-y-12">
            {featureGroups.map((g) => (
              <div key={g.title}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{g.title}</h3>
                <ComparisonTable competitorName="Zoho Invoice" features={g.rows} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">{t('pricing.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[pricingInvoicemonk, pricingZoho].map((tier, idx) => (
              <Card key={tier.title} className={idx === 0 ? 'border-primary/30' : ''}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-1">{tier.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{tier.headline}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    {tier.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground italic">{tier.upgradeNote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-2">{t('pricing.trueCost.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('pricing.trueCost.body')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Where each wins */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">{t('whereInvoicemonkWins.title')}</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {whereInvoicemonk.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">{t('whereZohoWins.title')}</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {whereZoho.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scenario */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-4">{t('scenario.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('scenario.intro')}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[scenarioZoho, scenarioInvoicemonk].map((s) => (
              <Card key={s.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{s.title}</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Summary matrix */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('summary.title')}</h2>
          <MatrixTable
            headers={summaryHeaders}
            rows={summaryRows}
            highlightColumnIndex={1}
            footnote={t('summary.footnote')}
            caption="Invoicemonk vs Zoho Invoice vs Zoho Books summary"
          />
        </div>
      </section>

      <InlineSignupCTA variant="banner" />

      {/* Bottom line */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('bottomLine.title')}</h2>
          <div className="space-y-4 text-muted-foreground">
            {bottomLine.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('faq.title')}</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <article key={i}>
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('sources.title')}</h2>
          <ol className="space-y-3 list-decimal list-inside text-sm">
            {sources.map((s) => (
              <li key={s.url} className="text-muted-foreground">
                <span className="font-medium text-foreground">{s.label}</span>
                <span> — {s.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">{t('related.title')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-primary hover:underline">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <InlineSignupCTA variant="banner" />

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">{t('cta.description')}</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              {t('cta.button')}<ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
