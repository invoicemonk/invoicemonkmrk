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

interface FAQItem { question: string; answer: string; }
interface FeatureRow { name: string; invoicemonk: boolean | string; competitor: boolean | string; }
interface PlanItem { name: string; price: string; }
interface StepItem { title: string; desc: string; }
interface LinkItem { label: string; to: string; }
interface SectionWithParas { title: string; paragraphs: string[]; }
interface Scenario { title: string; intro: string; withCompetitor: SectionWithParas; withInvoicemonk: SectionWithParas; }
interface SourceItem { label: string; url: string; }
interface SourcesBlock { title: string; items: SourceItem[]; }
interface FeatureGroup { title: string; rows: FeatureRow[]; }
interface SideBySide { title: string; rows: FeatureRow[]; }

export default function InvoicemonkVsAtoinvoice() {
  const { t } = useTranslation('compareAtoinvoice');
  const features = t('features', { returnObjects: true }) as FeatureRow[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const migrationSteps = t('migration.steps', { returnObjects: true }) as StepItem[];
  const relatedLinks = t('related.links', { returnObjects: true }) as LinkItem[];
  const invoicemonkPlans = t('pricing.invoicemonk.plans', { returnObjects: true }) as PlanItem[];
  const competitorPlans = t('pricing.competitor.plans', { returnObjects: true }) as PlanItem[];
  const overview = t('overview', { returnObjects: true }) as string[];
  const chooseInvoicemonk = t('choose.invoicemonk.items', { returnObjects: true }) as string[];
  const chooseCompetitor = t('choose.competitor.items', { returnObjects: true }) as string[];

  const whatCompetitorIs = t('whatCompetitorIs', { returnObjects: true, defaultValue: null }) as SectionWithParas | null;
  const whatInvoicemonkIs = t('whatInvoicemonkIs', { returnObjects: true, defaultValue: null }) as SectionWithParas | null;
  const workflow = t('workflow', { returnObjects: true, defaultValue: null }) as Scenario | null;
  const scenario = t('scenario', { returnObjects: true, defaultValue: null }) as Scenario | null;
  const thirdPartyNote = t('thirdPartyNote', { returnObjects: true, defaultValue: null }) as SectionWithParas | null;
  const bottomLine = t('bottomLine', { returnObjects: true, defaultValue: null }) as SectionWithParas | null;
  const sources = t('sources', { returnObjects: true, defaultValue: null }) as SourcesBlock | null;
  const lastUpdated = t('lastUpdated', { defaultValue: '' }) as string;
  const featureGroups = t('featureGroups', { returnObjects: true, defaultValue: null }) as FeatureGroup[] | null;
  const sideBySide = t('sideBySide', { returnObjects: true, defaultValue: null }) as SideBySide | null;

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Compare', url: '/compare/best-invoicing-software' }, { name: 'vs AtoInvoice', url: '/compare/invoicemonk-vs-atoinvoice' }]} />
      <ComparisonReviewSchema
        itemName="Invoicemonk"
        competitorName="AtoInvoice"
        positiveNotes={chooseInvoicemonk}
        negativeNotes={chooseCompetitor}
        url="/compare/invoicemonk-vs-atoinvoice"
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">{t('hero.title')}</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4">{t('hero.subtitle')}</p>
          {lastUpdated && <p className="text-xs text-muted-foreground text-center mb-12">{lastUpdated}</p>}

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-8">
            {overview.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <InlineSignupCTA variant="compact" />

          <InlineSignupCTA variant="compact" />


          {whatCompetitorIs && (
            <div className="mb-16">
              <h2 className="text-heading-lg font-bold text-foreground mb-6">{whatCompetitorIs.title}</h2>
              <div className="space-y-4 text-muted-foreground">
                {whatCompetitorIs.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          )}

          {whatInvoicemonkIs && (
            <div className="mb-16">
              <h2 className="text-heading-lg font-bold text-foreground mb-6">{whatInvoicemonkIs.title}</h2>
              <div className="space-y-4 text-muted-foreground">
                {whatInvoicemonkIs.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          )}

          {workflow && (
            <div className="mb-16">
              <h2 className="text-heading-lg font-bold text-foreground mb-4">{workflow.title}</h2>
              <p className="text-muted-foreground mb-6">{workflow.intro}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card><CardContent className="p-6"><h3 className="font-semibold text-foreground mb-3">{workflow.withCompetitor.title}</h3><div className="space-y-3 text-sm text-muted-foreground">{workflow.withCompetitor.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div></CardContent></Card>
                <Card className="border-primary/30"><CardContent className="p-6"><h3 className="font-semibold text-foreground mb-3">{workflow.withInvoicemonk.title}</h3><div className="space-y-3 text-sm text-muted-foreground">{workflow.withInvoicemonk.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div></CardContent></Card>
              </div>
            </div>
          )}

          {featureGroups && featureGroups.length > 0 ? (
            <div className="space-y-10">
              <h2 className="text-heading-lg font-bold text-foreground text-center">Feature Comparison</h2>
              {featureGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{group.title}</h3>
                  <ComparisonTable competitorName="AtoInvoice" features={group.rows} />
                </div>
              ))}
            </div>
          ) : (
            <ComparisonTable competitorName="AtoInvoice" features={features} />
          )}

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

          {scenario && (
            <div className="mt-16">
              <h2 className="text-heading-lg font-bold text-foreground mb-4">{scenario.title}</h2>
              <p className="text-muted-foreground mb-6">{scenario.intro}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card><CardContent className="p-6"><h3 className="font-semibold text-foreground mb-3">{scenario.withCompetitor.title}</h3><div className="space-y-3 text-sm text-muted-foreground">{scenario.withCompetitor.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div></CardContent></Card>
                <Card className="border-primary/30"><CardContent className="p-6"><h3 className="font-semibold text-foreground mb-3">{scenario.withInvoicemonk.title}</h3><div className="space-y-3 text-sm text-muted-foreground">{scenario.withInvoicemonk.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div></CardContent></Card>
              </div>
            </div>
          )}

          {thirdPartyNote && (
            <div className="mt-16">
              <h2 className="text-heading-lg font-bold text-foreground mb-6">{thirdPartyNote.title}</h2>
              <div className="space-y-4 text-muted-foreground">
                {thirdPartyNote.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          )}

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

      {sideBySide && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{sideBySide.title}</h2>
            <ComparisonTable competitorName="AtoInvoice" features={sideBySide.rows} />
          </div>
        </section>
      )}

      {bottomLine && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-heading-lg font-bold text-foreground mb-6">{bottomLine.title}</h2>
            <div className="space-y-4 text-muted-foreground">
              {bottomLine.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>
      )}

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

      {sources && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-base font-semibold text-foreground mb-4">{sources.title}</h2>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              {sources.items.map((s) => (
                <li key={s.url}>{s.label}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <InlineSignupCTA variant="banner" />

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
