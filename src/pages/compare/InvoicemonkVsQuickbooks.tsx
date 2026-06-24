import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ComparisonReviewSchema } from '@/components/seo/ComparisonReviewSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { InlineSignupCTA } from '@/components/compare/InlineSignupCTA';
import { MandateMatrixSection } from '@/components/e-invoicing/MandateMatrixSection';

interface FAQItem { question: string; answer: string; }
interface FeatureRow { name: string; invoicemonk: boolean | string; competitor: boolean | string; }
interface PlanItem { name: string; price: string; users?: string; note?: string; }
interface StepItem { title: string; desc: string; }
interface LinkItem { label: string; to: string; }
interface SourceItem { label: string; url: string; }
interface ScenarioItem { title: string; body: string; }
interface SideRow { feature: string; invoicemonk: string; qb: string; }

export default function InvoicemonkVsQuickbooks() {
  const { t } = useTranslation('compareQuickbooks');

  const quickAnswerParas = t('quickAnswer.paragraphs', { returnObjects: true }) as string[];
  const whoForParas = t('whoFor.paragraphs', { returnObjects: true }) as string[];
  const whatItIsParas = t('whatItIs.paragraphs', { returnObjects: true }) as string[];
  const pricingPlans = t('pricingReality.plans', { returnObjects: true }) as PlanItem[];
  const pricingAddOns = t('pricingReality.addOns', { returnObjects: true }) as string[];
  const intlParas = t('intlPayments.paragraphs', { returnObjects: true }) as string[];
  const mcParas = t('multiCurrency.paragraphs', { returnObjects: true }) as string[];
  const complianceParas = t('compliance.paragraphs', { returnObjects: true }) as string[];
  const featuresInvoicing = t('featuresInvoicing', { returnObjects: true }) as FeatureRow[];
  const featuresAccounting = t('featuresAccounting', { returnObjects: true }) as FeatureRow[];
  const invoicemonkPlans = t('pricing.invoicemonk.plans', { returnObjects: true }) as PlanItem[];
  const competitorPlans = t('pricing.competitor.plans', { returnObjects: true }) as PlanItem[];
  const scenarios = t('scenarios.items', { returnObjects: true }) as ScenarioItem[];
  const whereQB = t('whereQB.items', { returnObjects: true }) as string[];
  const whereIM = t('whereIM.items', { returnObjects: true }) as string[];
  const sideRows = t('sideBySide.rows', { returnObjects: true }) as SideRow[];
  const chooseInvoicemonk = t('choose.invoicemonk.items', { returnObjects: true }) as string[];
  const chooseCompetitor = t('choose.competitor.items', { returnObjects: true }) as string[];
  const migrationSteps = t('migration.steps', { returnObjects: true }) as StepItem[];
  const bottomLineParas = t('bottomLine.paragraphs', { returnObjects: true }) as string[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const sources = t('sources.items', { returnObjects: true }) as SourceItem[];
  const relatedLinks = t('related.links', { returnObjects: true }) as LinkItem[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Compare', url: '/compare/best-invoicing-software' }, { name: 'vs QuickBooks', url: '/compare/invoicemonk-vs-quickbooks' }]} />
      <ComparisonReviewSchema
        itemName="Invoicemonk"
        competitorName="QuickBooks Online"
        positiveNotes={chooseInvoicemonk}
        negativeNotes={chooseCompetitor}
        url="/compare/invoicemonk-vs-quickbooks"
      />

      <article>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-sm text-muted-foreground mb-3">{t('lastUpdated')} · {t('readingTime')}</p>
            <h1 className="text-heading-xl font-bold text-foreground mb-4">{t('hero.title')}</h1>
            <p className="text-lg text-muted-foreground mb-10">{t('hero.subtitle')}</p>

            <Card className="border-primary/40 bg-primary/5 mb-12" data-answer="true">
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">{t('quickAnswer.label')}</p>
                <div className="space-y-4 text-foreground">
                  {quickAnswerParas.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </CardContent>
            </Card>

            <InlineSignupCTA variant="compact" />

            <h2 className="text-heading-lg font-bold text-foreground mt-12 mb-4">{t('whoFor.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              {whoForParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <h2 className="text-heading-lg font-bold text-foreground mt-12 mb-4">{t('whatItIs.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              {whatItIsParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <h2 className="text-heading-lg font-bold text-foreground mt-12 mb-4">{t('pricingReality.title')}</h2>
            <p className="text-muted-foreground mb-6">{t('pricingReality.intro')}</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 font-semibold text-foreground">Plan</th>
                    <th className="py-3 px-4 font-semibold text-foreground">Price</th>
                    <th className="py-3 px-4 font-semibold text-foreground">Users</th>
                    <th className="py-3 px-4 font-semibold text-foreground">What it includes</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans.map((p, i) => (
                    <tr key={p.name} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                      <td className="py-3 px-4 font-semibold text-foreground">{p.name}</td>
                      <td className="py-3 px-4 text-foreground">{p.price}</td>
                      <td className="py-3 px-4 text-foreground">{p.users}</td>
                      <td className="py-3 px-4 text-muted-foreground">{p.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mb-4">{t('pricingReality.increases')}</p>
            <p className="text-foreground font-semibold mb-2">Additional QuickBooks costs:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
              {pricingAddOns.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <p className="text-muted-foreground">{t('pricingReality.median')}</p>

            <h2 className="text-heading-lg font-bold text-foreground mt-12 mb-4">{t('intlPayments.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              {intlParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <h2 className="text-heading-lg font-bold text-foreground mt-12 mb-4">{t('multiCurrency.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              {mcParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <h2 className="text-heading-lg font-bold text-foreground mt-12 mb-4">{t('compliance.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              {complianceParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <h2 className="text-heading-lg font-bold text-foreground mt-16 mb-6">Feature comparison</h2>
            <h3 className="text-lg font-semibold text-foreground mb-3">{t('featuresInvoicingTitle')}</h3>
            <ComparisonTable competitorName="QuickBooks" features={featuresInvoicing} />
            <h3 className="text-lg font-semibold text-foreground mt-10 mb-3">{t('featuresAccountingTitle')}</h3>
            <ComparisonTable competitorName="QuickBooks" features={featuresAccounting} />

            <h2 className="text-heading-lg font-bold text-foreground mt-16 mb-6 text-center">{t('pricing.title')}</h2>
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
            <p className="text-center text-sm text-muted-foreground mt-4">{t('pricing.summary')}</p>

            <h2 className="text-heading-lg font-bold text-foreground mt-16 mb-6">{t('scenarios.title')}</h2>
            <div className="space-y-6">
              {scenarios.map((s, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground">{s.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">{t('whereQB.title')}</h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {whereQB.map((item) => (
                      <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary/30">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">{t('whereIM.title')}</h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {whereIM.map((item) => (
                      <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-heading-lg font-bold text-foreground mt-16 mb-6">{t('sideBySide.title')}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 font-semibold text-foreground">Feature</th>
                    <th className="py-3 px-4 font-semibold text-primary">Invoicemonk</th>
                    <th className="py-3 px-4 font-semibold text-foreground">QuickBooks Online</th>
                  </tr>
                </thead>
                <tbody>
                  {sideRows.map((r, i) => (
                    <tr key={r.feature} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                      <td className="py-3 px-4 text-foreground">{r.feature}</td>
                      <td className="py-3 px-4 text-foreground">{r.invoicemonk}</td>
                      <td className="py-3 px-4 text-foreground">{r.qb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-16">
              <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('migration.title')}</h2>
              <div className="space-y-4 max-w-2xl">
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

            <h2 className="text-heading-lg font-bold text-foreground mt-16 mb-4">{t('bottomLine.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              {bottomLineParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        <InlineSignupCTA variant="banner" />

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('faq.title')}</h2>
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

        <InlineSignupCTA variant="banner" />

        <MandateMatrixSection />


        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
            <h2 className="text-heading-lg font-bold text-white mb-4">{t('cta.title')}</h2>
            <p className="text-white/90 mb-6">{t('cta.description')}</p>
            <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
              <a href="https://app.invoicemonk.com/signup?plan=professional" target="_blank" rel="noopener noreferrer">
                {t('cta.button')}<ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <p className="text-white/70 text-xs mt-4">{t('cta.subtext')}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-xl font-bold text-foreground mb-4">{t('sources.title')}</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              {sources.map((s) => (
                <li key={s.url}>{s.label}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground mb-4">{t('related.title')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-primary hover:underline">{link.label}</Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
