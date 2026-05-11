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

interface FAQItem { question: string; answer: string; }
interface FeatureRow { name: string; invoicemonk: boolean | string; competitor: boolean | string; }
interface PlanItem { name: string; price: string; detail?: string; }
interface LinkItem { label: string; to: string; }
interface SectionItem { heading: string; paragraphs: string[]; }
interface FeatureTable { title: string; rows: FeatureRow[]; }
interface TitledItem { title: string; body: string; }
interface SourceItem { label: string; }

export default function InvoicemonkVsDext() {
  const { t } = useTranslation('compareDext');
  const sections = t('sections', { returnObjects: true }) as SectionItem[];
  const featureTables = t('featureTables', { returnObjects: true }) as FeatureTable[];
  const invoicemonkPlans = t('pricing.invoicemonk.plans', { returnObjects: true }) as PlanItem[];
  const competitorPlans = t('pricing.competitor.plans', { returnObjects: true }) as PlanItem[];
  const pricingIntro = t('pricing.intro', { returnObjects: true }) as string[];
  const pricingContext = t('pricing.context', { returnObjects: true }) as string[];
  const frameworkItems = t('framework.items', { returnObjects: true }) as TitledItem[];
  const strengthsItems = t('strengths.items', { returnObjects: true }) as TitledItem[];
  const scenarios = t('scenarios.items', { returnObjects: true }) as TitledItem[];
  const userReviews = t('userReviews.paragraphs', { returnObjects: true }) as string[];
  const summaryRows = t('summaryTable.rows', { returnObjects: true }) as FeatureRow[];
  const bottomLine = t('bottomLine.paragraphs', { returnObjects: true }) as string[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const sources = t('sources.items', { returnObjects: true }) as SourceItem[];
  const relatedLinks = t('related.links', { returnObjects: true }) as LinkItem[];
  const chooseInvoicemonk = frameworkItems.slice(0, 1).map((i) => i.title);
  const chooseCompetitor = frameworkItems.slice(1, 2).map((i) => i.title);

  const SignupBtn = ({ label, variant = 'default' }: { label: string; variant?: 'default' | 'outline' }) => (
    <Button size="lg" variant={variant} asChild>
      <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
        {label}<ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </Button>
  );

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Compare', url: '/compare/best-invoicing-software' }, { name: 'vs Dext', url: '/compare/invoicemonk-vs-dext' }]} />
      <ComparisonReviewSchema
        itemName="Invoicemonk"
        competitorName="Dext"
        positiveNotes={chooseInvoicemonk}
        negativeNotes={chooseCompetitor}
        url="/compare/invoicemonk-vs-dext"
      />

      {/* Hero */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-sm text-muted-foreground text-center mb-3">{t('hero.subtitle')}</p>
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-6 leading-tight">{t('hero.title')}</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">{t('hero.tagline')}</p>
        </div>
      </section>

      {/* Quick answer */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('quickAnswer.label')}</p>
              <p className="text-foreground leading-relaxed">{t('quickAnswer.body')}</p>
              <div className="mt-6"><SignupBtn label={t('cta.button')} /></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Long-form sections */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {sections.map((s) => (
            <div key={s.heading} className="mb-12">
              <h2 className="text-heading-lg font-bold text-foreground mb-5">{s.heading}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison tables */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">Feature comparison</h2>
          {featureTables.map((tbl) => (
            <div key={tbl.title} className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">{tbl.title}</h3>
              <ComparisonTable competitorName="Dext" features={tbl.rows} />
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-6">{t('pricing.title')}</h2>
          <div className="space-y-4 text-muted-foreground mb-10 leading-relaxed">
            {pricingIntro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('pricing.invoicemonk.title')}</h3>
                <div className="space-y-4 text-sm">
                  {invoicemonkPlans.map((p) => (
                    <div key={p.name}>
                      <div className="flex justify-between mb-1"><span className="font-medium text-foreground">{p.name}</span><span className="font-semibold text-primary">{p.price}</span></div>
                      {p.detail && <p className="text-xs text-muted-foreground">{p.detail}</p>}
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground pt-2 border-t border-border">{t('pricing.invoicemonk.note')}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('pricing.competitor.title')}</h3>
                <div className="space-y-4 text-sm">
                  {competitorPlans.map((p) => (
                    <div key={p.name}>
                      <div className="flex justify-between mb-1"><span className="font-medium text-foreground">{p.name}</span><span className="font-semibold text-foreground">{p.price}</span></div>
                      {p.detail && <p className="text-xs text-muted-foreground">{p.detail}</p>}
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground pt-2 border-t border-border">{t('pricing.competitor.note')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {pricingContext.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <p className="text-center text-sm font-medium text-foreground mt-8 max-w-2xl mx-auto">{t('pricing.summary')}</p>
        </div>
      </section>

      {/* Decision framework */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-3">{t('framework.title')}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">{t('framework.intro')}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {frameworkItems.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10"><SignupBtn label={t('cta.button')} /></div>
        </div>
      </section>

      {/* Strengths of Dext */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-3">{t('strengths.title')}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">{t('strengths.intro')}</p>
          <div className="space-y-5">
            {strengthsItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">{t('scenarios.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((s) => (
              <Card key={s.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{s.title}</h3>
                  <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.body}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">{t('scenarios.footer')}</p>
        </div>
      </section>

      {/* User reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('userReviews.title')}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {userReviews.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Side-by-side summary */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('summaryTable.title')}</h2>
          <ComparisonTable competitorName="Dext" features={summaryRows} />
        </div>
      </section>

      {/* Bottom line */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('bottomLine.title')}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            {bottomLine.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="text-center"><SignupBtn label={t('cta.button')} /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('faq.title')}</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-foreground mb-5">{t('sources.title')}</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {sources.map((s, i) => (<li key={i} className="leading-relaxed">{s.label}</li>))}
          </ul>
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
      <section className="py-16 lg:py-20 bg-primary">
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
