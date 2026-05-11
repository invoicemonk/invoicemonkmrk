import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
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
interface StepItem { title: string; desc: string; }
interface LinkItem { label: string; to: string; }
interface DeepDiveSection { title: string; body: string[]; }
interface PricingTier { name: string; items?: string[]; price?: string; desc?: string; }
interface MatrixRow { name: string; values: string[]; }
interface MatrixGroup { name: string; rows: MatrixRow[]; }
interface SourceItem { label: string; url: string; }

export default function InvoicemonkVsWave() {
  const { t } = useTranslation('compareWave');
  const features = t('features', { returnObjects: true }) as FeatureRow[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const migrationSteps = t('migration.steps', { returnObjects: true }) as StepItem[];
  const relatedLinks = t('related.links', { returnObjects: true }) as LinkItem[];
  const overview = t('overview', { returnObjects: true }) as string[];
  const keyFactExamples = t('keyFact.examples', { returnObjects: true }) as string[];
  const deepDiveSections = t('deepDive.sections', { returnObjects: true }) as DeepDiveSection[];
  const waveTiers = t('pricing.wave.tiers', { returnObjects: true }) as PricingTier[];
  const waveAddOns = t('pricing.wave.addOns', { returnObjects: true }) as string[];
  const imTiers = t('pricing.invoicemonk.tiers', { returnObjects: true }) as PricingTier[];
  const matrixColumns = t('fullMatrix.columns', { returnObjects: true }) as string[];
  const matrixGroups = t('fullMatrix.groups', { returnObjects: true }) as MatrixGroup[];
  const useWave = t('whoShouldUse.wave.items', { returnObjects: true }) as string[];
  const useInvoicemonk = t('whoShouldUse.invoicemonk.items', { returnObjects: true }) as string[];
  const scenarioWave = t('scenario.wave.steps', { returnObjects: true }) as string[];
  const scenarioInvoicemonk = t('scenario.invoicemonk.steps', { returnObjects: true }) as string[];
  const bottomLineBody = t('bottomLine.body', { returnObjects: true }) as string[];
  const sources = t('sources.items', { returnObjects: true }) as SourceItem[];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('hero.title'),
    description: t('seo.description'),
    datePublished: '2026-05-01',
    dateModified: '2026-05-01',
    author: { '@type': 'Organization', name: 'Invoicemonk' },
    publisher: {
      '@type': 'Organization',
      name: 'Invoicemonk',
      logo: { '@type': 'ImageObject', url: 'https://invoicemonk.com/logo.png' },
    },
    mainEntityOfPage: 'https://invoicemonk.com/en/compare/invoicemonk-vs-wave',
  };

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Compare', url: '/compare/best-invoicing-software' }, { name: 'Invoicemonk vs Wave', url: '/compare/invoicemonk-vs-wave' }]} />
      <ComparisonReviewSchema
        itemName="Invoicemonk"
        competitorName="Wave"
        positiveNotes={useInvoicemonk}
        negativeNotes={useWave}
        url="/compare/invoicemonk-vs-wave"
      />

      {/* HERO */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-sm text-muted-foreground text-center mb-3">{t('lastUpdated')}</p>
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-6">{t('hero.title')}</h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* WHO FOR */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-4">{t('whoFor.title')}</h2>
          <p className="text-muted-foreground">{t('whoFor.body')}</p>
        </div>
      </section>

      {/* KEY FACT CALLOUT */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="text-heading-lg font-bold text-foreground">{t('keyFact.title')}</h2>
              </div>
              <p className="text-muted-foreground mb-4">{t('keyFact.intro')}</p>
              <p className="text-muted-foreground mb-6">{t('keyFact.body')}</p>
              <p className="font-semibold text-foreground mb-3">{t('keyFact.examplesTitle')}</p>
              <ul className="space-y-2 mb-6">
                {keyFactExamples.map((ex, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span><span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">{t('keyFact.closing')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* OVERVIEW + FEATURES TABLE */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
            {overview.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <InlineSignupCTA variant="compact" />
          <h2 className="text-heading-lg font-bold text-foreground mb-6">Invoicing for international freelancers</h2>
          <ComparisonTable competitorName="Wave" features={features} />
        </div>
      </section>

      {/* DEEP DIVE */}
      <InlineSignupCTA variant="banner" />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('deepDive.title')}</h2>
          <div className="space-y-10">
            {deepDiveSections.map((s, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                <div className="space-y-3">
                  {s.body.map((p, j) => <p key={j} className="text-muted-foreground">{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('pricing.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wave */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t('pricing.wave.title')}</h3>
                <div className="space-y-5 mb-5">
                  {waveTiers.map((tier, i) => (
                    <div key={i}>
                      <p className="font-semibold text-foreground mb-2">{tier.name}</p>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {tier.items?.map((item, j) => (
                          <li key={j} className="flex gap-2"><span>•</span><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="font-semibold text-foreground text-sm mb-2">{t('pricing.wave.addOnsTitle')}</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground mb-5">
                  {waveAddOns.map((a, i) => (
                    <li key={i} className="flex gap-2"><span>•</span><span>{a}</span></li>
                  ))}
                </ul>
                <div className="bg-muted/60 rounded-md p-4 text-sm text-muted-foreground border-l-2 border-primary">
                  {t('pricing.wave.trueCost')}
                </div>
              </CardContent>
            </Card>

            {/* Invoicemonk */}
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t('pricing.invoicemonk.title')}</h3>
                <p className="text-sm text-muted-foreground mb-5">{t('pricing.invoicemonk.intro')}</p>
                <div className="space-y-4">
                  {imTiers.map((tier, i) => (
                    <div key={i} className="border-b border-border last:border-0 pb-3 last:pb-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-foreground">{tier.name}</span>
                        <span className="text-primary font-semibold text-sm">{tier.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{tier.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FULL MATRIX */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('fullMatrix.title')}</h2>
          <div className="overflow-x-auto rounded-md border border-border bg-background">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="py-3 px-4 font-semibold text-foreground">Feature</th>
                  {matrixColumns.map((col, i) => (
                    <th key={i} className={`py-3 px-4 font-semibold text-center ${i === 0 ? 'text-primary' : 'text-foreground'}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixGroups.map((group) => (
                  <Fragment key={group.name}>
                    <tr className="bg-muted/20">
                      <td colSpan={matrixColumns.length + 1} className="py-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {group.name}
                      </td>
                    </tr>
                    {group.rows.map((row, i) => (
                      <tr key={`${group.name}-${i}`} className="border-b border-border last:border-0">
                        <td className="py-2 px-4 text-foreground">{row.name}</td>
                        {row.values.map((v, j) => (
                          <td key={j} className="py-2 px-4 text-center text-muted-foreground">{v}</td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHO SHOULD USE */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('whoShouldUse.wave.title')}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t('whoShouldUse.wave.intro')}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {useWave.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('whoShouldUse.invoicemonk.title')}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t('whoShouldUse.invoicemonk.intro')}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {useInvoicemonk.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SCENARIO */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('scenario.title')}</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">{t('scenario.intro')}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{t('scenario.wave.title')}</h3>
                <ol className="space-y-3">
                  {scenarioWave.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-foreground">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{t('scenario.invoicemonk.title')}</h3>
                <ol className="space-y-3">
                  {scenarioInvoicemonk.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-4">{t('socialProof.title')}</h2>
          <p className="text-muted-foreground">{t('socialProof.body')}</p>
        </div>
      </section>

      {/* MIGRATION */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('migration.title')}</h2>
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

      {/* BOTTOM LINE */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('bottomLine.title')}</h2>
          <div className="space-y-4">
            {bottomLineBody.map((p, i) => <p key={i} className="text-muted-foreground">{p}</p>)}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t('sources.title')}</h2>
          <ul className="space-y-2 text-sm">
            {sources.map((s) => (
              <li key={s.url}>{s.label}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* RELATED */}
      <section className="pb-16">
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
