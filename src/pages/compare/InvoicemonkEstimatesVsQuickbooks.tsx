import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ComparisonReviewSchema } from '@/components/seo/ComparisonReviewSchema';
import { MatrixTable } from '@/components/compare/MatrixTable';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { InlineSignupCTA } from '@/components/compare/InlineSignupCTA';

interface FAQItem { question: string; answer: string; }
interface MatrixRow { label: string; values: (boolean | string | number)[]; }
interface MatrixData { title: string; headers: string[]; rows: MatrixRow[]; footnote?: string; }
interface PlanItem { name: string; desc: string; }
interface ProblemItem { title: string; body: string; }
interface LinkItem { label: string; to: string; }
interface SourceItem { label: string; citation: string; }

export default function InvoicemonkEstimatesVsQuickbooks() {
  const { t } = useTranslation('compareEstimatesQuickbooks');

  const whyParas = t('whyEstimatesMatter.paragraphs', { returnObjects: true }) as string[];
  const qbParas = t('quickbooksWorkflow.paragraphs', { returnObjects: true }) as string[];
  const problems = t('threeProblems.items', { returnObjects: true }) as ProblemItem[];
  const imParas = t('invoicemonkWorkflow.paragraphs', { returnObjects: true }) as string[];
  const featuresMatrix = t('featuresMatrix', { returnObjects: true }) as MatrixData;
  const platformMatrix = t('platformMatrix', { returnObjects: true }) as MatrixData;
  const workflowMatrix = t('workflowMatrix', { returnObjects: true }) as MatrixData;
  const summaryMatrix = t('summaryMatrix', { returnObjects: true }) as MatrixData;
  const qbPlans = t('pricingDetail.quickbooks.plans', { returnObjects: true }) as PlanItem[];
  const qbHidden = t('pricingDetail.quickbooks.hidden', { returnObjects: true }) as string[];
  const imPlans = t('pricingDetail.invoicemonk.plans', { returnObjects: true }) as PlanItem[];
  const qbSteps = t('scenario.quickbooks.steps', { returnObjects: true }) as string[];
  const imSteps = t('scenario.invoicemonk.steps', { returnObjects: true }) as string[];
  const whereQbWins = t('whereQbWins.items', { returnObjects: true }) as string[];
  const whereImWins = t('whereImWins.items', { returnObjects: true }) as string[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const bottomParas = t('bottomLine.paragraphs', { returnObjects: true }) as string[];
  const sources = t('sources.items', { returnObjects: true }) as SourceItem[];
  const relatedLinks = t('related.links', { returnObjects: true }) as LinkItem[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Compare', url: '/compare/best-invoicing-software' },
          { name: 'Invoicemonk Estimates vs QuickBooks', url: '/compare/invoicemonk-estimates-vs-quickbooks' },
        ]}
      />
      <ComparisonReviewSchema
        itemName="Invoicemonk"
        competitorName="QuickBooks"
        positiveNotes={whereImWins}
        negativeNotes={whereQbWins}
        url="/compare/invoicemonk-estimates-vs-quickbooks"
      />

      {/* Hero + Quick Answer */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-xs uppercase tracking-wider text-muted-foreground text-center mb-3">{t('hero.meta')}</p>
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">{t('hero.title')}</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">{t('hero.subtitle')}</p>

          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 lg:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">{t('quickAnswer.label')}</p>
              <p className="text-foreground leading-relaxed">{t('quickAnswer.body')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why estimates matter */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('whyEstimatesMatter.title')}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
            {whyParas.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* QuickBooks workflow */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('quickbooksWorkflow.title')}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-5 mb-8">
            {qbParas.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('quickbooksWorkflow.statusTitle')}</h3>
              <p className="text-muted-foreground">{t('quickbooksWorkflow.statusBody')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('quickbooksWorkflow.frictionTitle')}</h3>
              <p className="text-muted-foreground">{t('quickbooksWorkflow.frictionBody')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <InlineSignupCTA
          heading="Skip the QuickBooks lock-in"
          body="Invoicing is live on Invoicemonk today. Estimates is launching soon — get on the waitlist."
          buttonLabel="Get started with Invoicemonk"
          variant="compact"
        />
      </div>

      {/* Three problems */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">{t('threeProblems.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Invoicemonk workflow */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-3">{t('invoicemonkWorkflow.title')}</h2>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            {t('invoicemonkWorkflow.comingSoonNote')}
          </p>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
            {imParas.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Features matrix */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{featuresMatrix.title}</h2>
          <MatrixTable
            headers={featuresMatrix.headers}
            rows={featuresMatrix.rows}
            highlightColumnIndex={1}
            footnote={featuresMatrix.footnote}
          />
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <InlineSignupCTA
          heading="Ready to ditch the $115/mo plan?"
          body="Multi-currency, international payments, no geographic restrictions — from $0 on Starter."
          buttonLabel="Get started with Invoicemonk"
          variant="compact"
        />
      </div>

      {/* Platform matrix */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{platformMatrix.title}</h2>
          <MatrixTable headers={platformMatrix.headers} rows={platformMatrix.rows} highlightColumnIndex={1} />
        </div>
      </section>

      {/* Pricing detail */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">{t('pricingDetail.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-2">{t('pricingDetail.quickbooks.title')}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t('pricingDetail.quickbooks.intro')}</p>
                <div className="space-y-3">
                  {qbPlans.map((p) => (
                    <div key={p.name}>
                      <p className="font-semibold text-foreground text-sm">{p.name}</p>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="font-semibold text-foreground text-sm mb-2">{t('pricingDetail.quickbooks.hiddenTitle')}</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                    {qbHidden.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-2">{t('pricingDetail.invoicemonk.title')}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t('pricingDetail.invoicemonk.intro')}</p>
                <div className="space-y-3">
                  {imPlans.map((p) => (
                    <div key={p.name}>
                      <p className="font-semibold text-foreground text-sm">{p.name}</p>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-5 pt-5 border-t border-border">{t('pricingDetail.invoicemonk.annualNote')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scenario */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-4">{t('scenario.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('scenario.intro')}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">{t('scenario.quickbooks.title')}</h3>
                <ol className="space-y-3">
                  {qbSteps.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-foreground/70 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                      <p className="text-sm text-muted-foreground">{s}</p>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-foreground mt-5 pt-4 border-t border-border italic">{t('scenario.quickbooks.summary')}</p>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">{t('scenario.invoicemonk.title')}</h3>
                <ol className="space-y-3">
                  {imSteps.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                      <p className="text-sm text-muted-foreground">{s}</p>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-foreground mt-5 pt-4 border-t border-border italic">{t('scenario.invoicemonk.summary')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <InlineSignupCTA
        heading="Run this scenario yourself"
        body="Send your first international invoice on Invoicemonk free — and get on the Estimates waitlist."
        buttonLabel="Get started with Invoicemonk"
        variant="banner"
      />

      {/* Where each wins */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('whereQbWins.title')}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {whereQbWins.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-foreground/50 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('whereImWins.title')}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {whereImWins.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow matrix */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{workflowMatrix.title}</h2>
          <MatrixTable headers={workflowMatrix.headers} rows={workflowMatrix.rows} highlightColumnIndex={1} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
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

      {/* Summary matrix */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{summaryMatrix.title}</h2>
          <MatrixTable headers={summaryMatrix.headers} rows={summaryMatrix.rows} highlightColumnIndex={1} />
        </div>
      </section>

      {/* Bottom line */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('bottomLine.title')}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
            {bottomParas.map((p, i) => <p key={i}>{p}</p>)}
          </div>
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

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">{t('cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
              <Link to={t('cta.primaryHref')}>{t('cta.primaryButton')}<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href={t('cta.secondaryHref')} target="_blank" rel="noopener noreferrer">{t('cta.secondaryButton')}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sources — plain text, no outbound links */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-md font-bold text-foreground mb-2">{t('sources.title')}</h2>
          <p className="text-xs text-muted-foreground mb-6 italic">{t('sources.note')}</p>
          <ul className="space-y-3 text-sm">
            {sources.map((s, i) => (
              <li key={i}>
                <span className="font-semibold text-foreground">{s.label}</span>
                <span className="text-muted-foreground"> — {s.citation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
