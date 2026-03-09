import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ComparisonReviewSchema } from '@/components/seo/ComparisonReviewSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';

interface FAQItem { question: string; answer: string; }
interface FeatureRow { name: string; invoicemonk: boolean | string; competitor: boolean | string; }
interface PlanItem { name: string; price: string; }
interface StepItem { title: string; desc: string; }
interface LinkItem { label: string; to: string; }

export default function InvoicemonkVsFreshbooks() {
  const { t } = useTranslation('compareFreshbooks');
  const features = t('features', { returnObjects: true }) as FeatureRow[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const migrationSteps = t('migration.steps', { returnObjects: true }) as StepItem[];
  const relatedLinks = t('related.links', { returnObjects: true }) as LinkItem[];
  const invoicemonkPlans = t('pricing.invoicemonk.plans', { returnObjects: true }) as PlanItem[];
  const competitorPlans = t('pricing.competitor.plans', { returnObjects: true }) as PlanItem[];
  const overview = t('overview', { returnObjects: true }) as string[];
  const chooseInvoicemonk = t('choose.invoicemonk.items', { returnObjects: true }) as string[];
  const chooseCompetitor = t('choose.competitor.items', { returnObjects: true }) as string[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <ComparisonReviewSchema
        itemName="Invoicemonk"
        competitorName="FreshBooks"
        positiveNotes={chooseInvoicemonk}
        negativeNotes={chooseCompetitor}
        url="/compare/invoicemonk-vs-freshbooks"
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">{t('hero.title')}</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('hero.subtitle')}</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            {overview.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <ComparisonTable competitorName="FreshBooks" features={features} />

          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('pricing.title')}</h2>
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
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('choose.invoicemonk.title')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {chooseInvoicemonk.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('choose.competitor.title')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {chooseCompetitor.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('migration.title')}</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
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
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('faq.title')}</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">{t('related.title')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-primary hover:underline">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">{t('cta.description')}</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">{t('cta.button')}<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
