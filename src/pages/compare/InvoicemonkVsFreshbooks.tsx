import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, AlertTriangle, Globe, ShieldCheck } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ComparisonReviewSchema } from '@/components/seo/ComparisonReviewSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { InlineSignupCTA } from '@/components/compare/InlineSignupCTA';

interface FAQItem { question: string; answer: string; }
interface FeatureRow { name: string; invoicemonk: boolean | string; competitor: boolean | string; }
interface PlanItem { name: string; price: string; }
interface StepItem { title: string; desc: string; }
interface LinkItem { label: string; to: string; }
interface SourceItem { label: string; url: string; note: string; }
interface SummaryRow { label: string; invoicemonk: string; competitor: string; }
interface CostItem { label: string; value: string; }

export default function InvoicemonkVsFreshbooks() {
  const { t } = useTranslation('compareFreshbooks');
  const features = t('features', { returnObjects: true }) as FeatureRow[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const migrationSteps = t('migration.steps', { returnObjects: true }) as StepItem[];
  const relatedLinks = t('related.links', { returnObjects: true }) as LinkItem[];
  const invoicemonkPlans = t('pricing.invoicemonk.plans', { returnObjects: true }) as PlanItem[];
  const competitorPlans = t('pricing.competitor.plans', { returnObjects: true }) as PlanItem[];
  const chooseInvoicemonk = t('choose.invoicemonk.items', { returnObjects: true }) as string[];
  const chooseCompetitor = t('choose.competitor.items', { returnObjects: true }) as string[];
  const geoPoints = t('paymentGeography.points', { returnObjects: true }) as string[];
  const compliancePoints = t('compliance.points', { returnObjects: true }) as string[];
  const costItems = t('trueCost.items', { returnObjects: true }) as CostItem[];
  const scenarioCompetitor = t('scenario.competitor.items', { returnObjects: true }) as string[];
  const scenarioInvoicemonk = t('scenario.invoicemonk.items', { returnObjects: true }) as string[];
  const summaryRows = t('summary.rows', { returnObjects: true }) as SummaryRow[];
  const sources = t('sources.items', { returnObjects: true }) as SourceItem[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Compare', url: '/compare/best-invoicing-software' }, { name: 'vs FreshBooks', url: '/compare/invoicemonk-vs-freshbooks' }]} />
      <ComparisonReviewSchema
        itemName="Invoicemonk"
        competitorName="FreshBooks"
        positiveNotes={chooseInvoicemonk}
        negativeNotes={chooseCompetitor}
        url="/compare/invoicemonk-vs-freshbooks"
      />

      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-sm text-muted-foreground text-center mb-3">{t('lastUpdated')}</p>
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-6">{t('hero.title')}</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Audience */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-md font-bold text-foreground mb-3">{t('audience.title')}</h2>
          <p className="text-muted-foreground">{t('audience.body')}</p>
        </div>
      </section>

      {/* Company overview */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-md font-bold text-foreground mb-6">{t('companyOverview.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-3">{t('companyOverview.freshbooks.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('companyOverview.freshbooks.body')}</p>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-3">{t('companyOverview.invoicemonk.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('companyOverview.invoicemonk.body')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment geography callout */}
      <section className="py-12 bg-accent/10 border-y border-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-start gap-3 mb-4">
            <Globe className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <h2 className="text-heading-md font-bold text-foreground">{t('paymentGeography.title')}</h2>
          </div>
          <p className="text-muted-foreground mb-4">{t('paymentGeography.body')}</p>
          <ul className="space-y-3 mb-4">
            {geoPoints.map((p, i) => (
              <li key={i} className="flex gap-3 text-foreground">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground font-medium">{t('paymentGeography.footer')}</p>
        </div>
      </section>

      {/* Multi-currency */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-md font-bold text-foreground mb-4">{t('multiCurrency.title')}</h2>
          <p className="text-muted-foreground mb-4">{t('multiCurrency.body')}</p>
          <p className="text-foreground">{t('multiCurrency.footer')}</p>
        </div>
      </section>

      <InlineSignupCTA variant="banner" />

      {/* Compliance */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-start gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-heading-md font-bold text-foreground">{t('compliance.title')}</h2>
          </div>
          <p className="text-muted-foreground mb-4">{t('compliance.body')}</p>
          <ul className="space-y-2 mb-4">
            {compliancePoints.map((p, i) => (
              <li key={i} className="flex gap-2 text-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">{t('compliance.footer')}</p>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-md font-bold text-foreground mb-6 text-center">Feature-by-feature comparison</h2>
          <ComparisonTable competitorName="FreshBooks" features={features} />
        </div>
      </section>

      {/* Pricing */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-md font-bold text-foreground text-center mb-8">{t('pricing.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('pricing.invoicemonk.title')}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {invoicemonkPlans.map((p) => (
                    <div key={p.name} className="flex justify-between"><span>{p.name}</span><span className="font-semibold text-foreground">{p.price}</span></div>
                  ))}
                  <p className="text-xs pt-2">{t('pricing.invoicemonk.note')}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('pricing.competitor.title')}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {competitorPlans.map((p) => (
                    <div key={p.name} className="flex justify-between"><span>{p.name}</span><span className="font-semibold text-foreground">{p.price}</span></div>
                  ))}
                  <p className="text-xs pt-2">{t('pricing.competitor.note')}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* True cost */}
          <Card className="mt-6 bg-muted/40">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground text-lg mb-3">{t('trueCost.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('trueCost.body')}</p>
              <div className="space-y-2 text-sm">
                {costItems.map((c, i) => (
                  <div key={i} className="flex justify-between border-b border-border pb-2">
                    <span className="text-foreground">{c.label}</span>
                    <span className="font-semibold text-foreground">{c.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">{t('trueCost.footer')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scenario */}
      <InlineSignupCTA variant="banner" />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-md font-bold text-foreground text-center mb-4">{t('scenario.title')}</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">{t('scenario.intro')}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('scenario.competitor.title')}</h3>
                <ol className="space-y-3 text-sm text-muted-foreground list-decimal pl-5">
                  {scenarioCompetitor.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('scenario.invoicemonk.title')}</h3>
                <ol className="space-y-3 text-sm text-muted-foreground list-decimal pl-5">
                  {scenarioInvoicemonk.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Choose blocks */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('choose.invoicemonk.title')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {chooseInvoicemonk.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('choose.competitor.title')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {chooseCompetitor.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Side-by-side summary */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-md font-bold text-foreground text-center mb-8">{t('summary.title')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-background rounded-lg">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-sm font-semibold text-foreground"></th>
                  <th className="py-3 px-4 text-sm font-semibold text-primary text-center">Invoicemonk</th>
                  <th className="py-3 px-4 text-sm font-semibold text-foreground text-center">FreshBooks</th>
                </tr>
              </thead>
              <tbody>
                {summaryRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="py-3 px-4 text-sm text-foreground font-medium">{r.label}</td>
                    <td className="py-3 px-4 text-sm text-foreground text-center">{r.invoicemonk}</td>
                    <td className="py-3 px-4 text-sm text-foreground text-center">{r.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Migration */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-md font-bold text-foreground text-center mb-8">{t('migration.title')}</h2>
          <div className="space-y-4">
            {migrationSteps.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-md font-bold text-foreground text-center mb-8">{t('faq.title')}</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16">
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

      {/* Sources */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">{t('sources.title')}</h2>
          <ul className="space-y-3 text-xs text-muted-foreground">
            {sources.map((s, i) => (
              <li key={i}>
                <span className="font-medium text-foreground">{s.label}</span>
                <span> — {s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
