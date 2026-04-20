import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, XCircle, Star } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ProductReviewSchema } from '@/components/seo/ProductReviewSchema';
import { MatrixTable } from '@/components/compare/MatrixTable';
import { PricingTiers } from '@/components/compare/PricingTiers';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';

interface FAQItem { question: string; answer: string; }
interface LinkItem { label: string; to: string; }
interface ChecklistItem { question: string; rationale: string; }
interface PricingTier { name: string; price: string; invoices: string; users: string; features: string; }
interface ToolItem {
  name: string;
  bestFor: string;
  price: string;
  highlight: boolean;
  score: string;
  lastTested: string;
  verdict: string;
  pros: string[];
  cons: string[];
  doNotUseIf: string[];
  pricing: { tiers: PricingTier[]; transactionFees: string };
  countries: string;
  integrations: string[];
  switching: string;
  description: string;
}
interface TldrItem { persona: string; pick: string; reason: string; }
interface RubricCriterion { name: string; weight: string; description: string; }
interface ScoreRow { tool: string; values: number[]; total: string; }
interface UseCase { persona: string; pick: string; why: string; }
interface MatrixRow { attribute?: string; capability?: string; region?: string; values: (boolean | string | number)[]; }

export default function BestInvoicingSoftware() {
  const { t } = useTranslation('bestInvoicingSoftware');
  const tools = t('tools', { returnObjects: true }) as ToolItem[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const comparisonLinks = t('comparisons.links', { returnObjects: true }) as LinkItem[];
  const relatedLinks = t('relatedReading.links', { returnObjects: true }) as LinkItem[];
  const methodologyParagraphs = t('methodology.paragraphs', { returnObjects: true }) as string[];
  const verdictParagraphs = t('verdict.paragraphs', { returnObjects: true }) as string[];
  const complianceParagraphs = t('compliance.paragraphs', { returnObjects: true }) as string[];
  const complianceBenefits = t('compliance.benefits', { returnObjects: true }) as string[];
  const checklistItems = t('checklist.items', { returnObjects: true }) as ChecklistItem[];
  const tldrItems = t('tldr.items', { returnObjects: true }) as TldrItem[];
  const definitionParagraphs = t('definition.paragraphs', { returnObjects: true }) as string[];
  const rubricCriteria = t('rubric.criteria', { returnObjects: true }) as RubricCriterion[];
  const scoreRows = t('scores.rows', { returnObjects: true }) as ScoreRow[];
  const scoreHeaders = t('scores.headers', { returnObjects: true }) as string[];
  const useCases = t('useCases.items', { returnObjects: true }) as UseCase[];
  const labels = t('labels', { returnObjects: true }) as Record<string, string>;

  const atGlanceHeaders = t('atAGlance.headers', { returnObjects: true }) as string[];
  const atGlanceRows = (t('atAGlance.rows', { returnObjects: true }) as MatrixRow[]).map(r => ({
    label: r.attribute || '',
    values: r.values,
  }));

  const pricingHeaders = t('pricingComparison.headers', { returnObjects: true }) as string[];
  const pricingRows = (t('pricingComparison.rows', { returnObjects: true }) as { tool: string; values: string[] }[]).map(r => ({
    label: r.tool,
    values: r.values,
  }));

  const countryHeaders = t('countryAvailability.headers', { returnObjects: true }) as string[];
  const countryRows = (t('countryAvailability.rows', { returnObjects: true }) as MatrixRow[]).map(r => ({
    label: r.region || '',
    values: r.values,
  }));

  const complianceMatrixHeaders = t('compliance.matrix.headers', { returnObjects: true }) as string[];
  const complianceMatrixRows = (t('compliance.matrix.rows', { returnObjects: true }) as MatrixRow[]).map(r => ({
    label: r.capability || '',
    values: r.values,
  }));

  const pricingTierLabels = {
    tier: labels.tier,
    price: labels.price,
    invoices: labels.invoices,
    users: labels.users,
    features: labels.features,
    transactionFees: labels.transactionFees,
  };

  const pageUrl = 'https://invoicemonk.com/compare/best-invoicing-software';
  const today = new Date().toISOString().split('T')[0];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/compare/best-invoicing-software' },
        { name: 'Best Invoicing Software', url: '/compare/best-invoicing-software' },
      ]} />
      <ProductReviewSchema
        pageUrl={pageUrl}
        pageName={t('seo.title')}
        datePublished="2026-01-15"
        dateModified={today}
        authorName="Invoicemonk"
        tools={tools.map(tool => ({
          name: tool.name,
          score: parseFloat(tool.score),
          description: tool.description,
          pros: tool.pros,
          cons: tool.cons,
        }))}
      />

      {/* Hero */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">{t('hero.title')}</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-3">{t('hero.subtitle')}</p>
          <p className="text-xs text-muted-foreground/70 text-center mb-2">{t('lastUpdated')} · {t('author')}</p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-heading-md font-bold text-foreground mb-4">{t('tldr.title')}</h2>
              <ul className="space-y-3">
                {tldrItems.map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-sm">
                    <span className="font-semibold text-foreground sm:min-w-[16rem]">{item.persona}</span>
                    <span className="text-primary font-bold">→ {item.pick}</span>
                    <span className="text-muted-foreground">— {item.reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What is invoicing software */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('definition.title')}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            {definitionParagraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
          </div>
        </div>
      </section>

      {/* At-a-glance comparison */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-2">{t('atAGlance.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('atAGlance.subtitle')}</p>
          <MatrixTable
            headers={atGlanceHeaders}
            rows={atGlanceRows}
            highlightColumnIndex={1}
            footnote={t('atAGlance.footnote')}
            caption={t('atAGlance.title')}
          />
        </div>
      </section>

      {/* Scoring rubric */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-3">{t('rubric.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('rubric.intro')}</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {rubricCriteria.map((c, i) => (
              <Card key={i} className="border-border/60">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{c.name}</h3>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{c.weight}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-heading-md font-bold text-foreground mb-4">{t('scores.title')}</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-muted/50">
                <tr className="border-b border-border">
                  {scoreHeaders.map((h, i) => (
                    <th key={i} className={`py-3 px-3 font-semibold text-foreground ${i === 0 ? 'text-left' : 'text-center'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scoreRows.map((row, i) => (
                  <tr key={i} className={row.tool === 'Invoicemonk' ? 'bg-primary/5' : i % 2 === 0 ? '' : 'bg-muted/20'}>
                    <td className="py-3 px-3 font-semibold text-foreground">{row.tool}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="py-3 px-3 text-center text-foreground">{v}</td>
                    ))}
                    <td className="py-3 px-3 text-center font-bold text-primary">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('methodology.title')}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            {methodologyParagraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
          </div>
        </div>
      </section>

      {/* Per-tool deep dives */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-10">
            {tools.map((tool, i) => (
              <Card key={i} className={tool.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'} id={tool.name.toLowerCase().replace(/\s+/g, '-')}>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-heading-md font-bold text-foreground">{i + 1}. {tool.name}</h2>
                        {tool.highlight && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{t('ourPick')}</span>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{t('bestForLabel')} {tool.bestFor} · {tool.price}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-primary font-bold text-lg">
                        <Star className="w-4 h-4 fill-current" />{tool.score}
                      </div>
                      <p className="text-xs text-muted-foreground">{labels.lastTested}: {tool.lastTested}</p>
                    </div>
                  </div>

                  <p className="text-foreground font-medium mb-3">{labels.verdict}: <span className="font-normal text-muted-foreground">{tool.verdict}</span></p>
                  <p className="text-muted-foreground text-sm mb-6">{tool.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-600" />{t('prosLabel')}</p>
                      <ul className="space-y-1.5">
                        {tool.pros.map((p, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-2"><span className="text-green-600 mt-0.5">+</span>{p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-muted-foreground" />{t('consLabel')}</p>
                      <ul className="space-y-1.5">
                        {tool.cons.map((c, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-2"><span className="text-muted-foreground/60 mt-0.5">−</span>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">{labels.doNotUseIf}</p>
                    <ul className="space-y-1">
                      {tool.doNotUseIf.map((d, j) => (
                        <li key={j} className="text-sm text-muted-foreground">• {d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">{labels.pricing}</p>
                    <PricingTiers tiers={tool.pricing.tiers} transactionFees={tool.pricing.transactionFees} labels={pricingTierLabels} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="font-semibold text-foreground mb-1">{labels.countries}</p>
                      <p className="text-muted-foreground">{tool.countries}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{labels.integrations}</p>
                      <p className="text-muted-foreground">{tool.integrations.join(', ')}</p>
                    </div>
                  </div>

                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-1">{labels.switching}</p>
                    <p className="text-muted-foreground">{tool.switching}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-3">{t('useCases.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('useCases.intro')}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((u, i) => (
              <Card key={i} className="border-border/60">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground mb-1">{u.persona}</p>
                  <p className="font-bold text-primary mb-2">→ {u.pick}</p>
                  <p className="text-sm text-muted-foreground">{u.why}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-3">{t('pricingComparison.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('pricingComparison.intro')}</p>
          <MatrixTable headers={pricingHeaders} rows={pricingRows} highlightColumnIndex={-1} caption={t('pricingComparison.title')} />
        </div>
      </section>

      {/* Country availability */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-3">{t('countryAvailability.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('countryAvailability.intro')}</p>
          <MatrixTable headers={countryHeaders} rows={countryRows} highlightColumnIndex={1} caption={t('countryAvailability.title')} />
        </div>
      </section>

      {/* Compliance */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('compliance.title')}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-6">
            {complianceParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <ul className="space-y-2 mb-8">
            {complianceBenefits.map((b, i) => (
              <li key={i} className="flex gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <MatrixTable headers={complianceMatrixHeaders} rows={complianceMatrixRows} highlightColumnIndex={1} caption={t('compliance.title')} />
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-6">{t('checklist.title')}</h2>
          <ol className="space-y-5">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.question}</p>
                  <p className="text-muted-foreground text-sm">{item.rationale}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('verdict.title')}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            {verdictParagraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">{t('comparisons.title')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {comparisonLinks.map((link) => (<Link key={link.to} to={link.to} className="text-primary hover:underline">{link.label}</Link>))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('faq.title')}</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">{t('relatedReading.title')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedLinks.map((link) => (<Link key={link.to} to={link.to} className="text-primary hover:underline">{link.label}</Link>))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">{t('cta.description')}</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">{t('cta.button')}<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
