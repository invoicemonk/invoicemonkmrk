import { Fragment, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

/**
 * Slim, LLM-friendly comparison page shell used by receipt-scanner-app comparisons.
 * Content is passed in as props (inline TS) — no i18n round-trip.
 * Structure: hero → direct-answer lead → key fact → verdict → matrix → deep-dive
 * (question-based H2s) → pricing → who-for → scenario → FAQ → sources.
 */

export interface MatrixRow {
  feature: string;
  values: (string | boolean)[];
}
export interface MatrixGroup {
  name: string;
  rows: MatrixRow[];
}
export interface PricingTier {
  name: string;
  price: string;
  desc: string;
}
export interface FAQ {
  question: string;
  answer: string;
}
export interface DeepDive {
  question: string;
  leadAnswer: string;
  body?: string[];
}
export interface Source {
  label: string;
  url: string;
}
export interface WhoFor {
  title: string;
  intro: string;
  items: string[];
  emphasized?: boolean;
}
export interface Scenario {
  title: string;
  steps: string[];
  emphasized?: boolean;
}

export interface LLMComparisonPageProps {
  slug: string; // e.g. "invoicemonk-vs-expensify" or "best-receipt-scanner-app"
  seo: { title: string; description: string };
  breadcrumbLabel: string;
  lastUpdated: string;
  h1: string;
  directAnswer: string; // 40-60 word LLM-ready lead
  keyFact?: {
    title: string;
    body: string;
    examples?: string[];
  };
  verdict?: {
    winner: string;
    body: string;
  };
  matrix: {
    columns: string[]; // e.g. ["Invoicemonk", "Expensify"]
    groups: MatrixGroup[];
  };
  deepDive: DeepDive[];
  pricing?: {
    title: string;
    columns: { name: string; intro?: string; tiers: PricingTier[]; note?: string }[];
  };
  whoFor?: WhoFor[];
  scenario?: { title: string; intro: string; columns: Scenario[] };
  faqs: FAQ[];
  sources: Source[];
  relatedLinks?: { label: string; to: string }[];
  ctaHeadline?: string;
  extraSchema?: object;
  children?: ReactNode; // optional injected sections (e.g. leaderboard for hub)
}

export function LLMComparisonPage(props: LLMComparisonPageProps) {
  const {
    slug,
    seo,
    breadcrumbLabel,
    lastUpdated,
    h1,
    directAnswer,
    keyFact,
    verdict,
    matrix,
    deepDive,
    pricing,
    whoFor,
    scenario,
    faqs,
    sources,
    relatedLinks,
    ctaHeadline,
    extraSchema,
    children,
  } = props;

  const url = `/compare/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    description: seo.description,
    datePublished: '2026-07-24',
    dateModified: '2026-07-24',
    author: { '@type': 'Organization', name: 'Invoicemonk' },
    publisher: {
      '@type': 'Organization',
      name: 'Invoicemonk',
      logo: { '@type': 'ImageObject', url: 'https://invoicemonk.com/logo.png' },
    },
    mainEntityOfPage: `https://invoicemonk.com/en${url}`,
  };

  const renderCell = (v: string | boolean) => {
    if (v === true) return <CheckCircle className="w-4 h-4 text-green-600 inline" aria-label="Yes" />;
    if (v === false) return <span className="text-muted-foreground">—</span>;
    return v;
  };

  return (
    <Layout>
      <SEOHead title={seo.title} description={seo.description} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {extraSchema && (
          <script type="application/ld+json">{JSON.stringify(extraSchema)}</script>
        )}
      </Helmet>
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Compare', url: '/compare/best-receipt-scanner-app' },
          { name: breadcrumbLabel, url },
        ]}
      />

      {/* HERO */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-sm text-muted-foreground text-center mb-3">{lastUpdated}</p>
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-6">{h1}</h1>
          <p
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto"
            data-answer="true"
          >
            {directAnswer}
          </p>
        </div>
      </section>

      {/* KEY FACT */}
      {keyFact && (
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-primary/40 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h2 className="text-heading-lg font-bold text-foreground">{keyFact.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{keyFact.body}</p>
                {keyFact.examples && (
                  <ul className="space-y-2">
                    {keyFact.examples.map((ex, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* VERDICT */}
      {verdict && (
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-heading-lg font-bold text-foreground mb-3">Verdict</h2>
            <p className="text-lg font-semibold text-primary mb-2">{verdict.winner}</p>
            <p className="text-muted-foreground" data-answer="true">
              {verdict.body}
            </p>
          </div>
        </section>
      )}

      {/* OPTIONAL INJECTED (e.g. hub leaderboard) */}
      {children}

      {/* FEATURE MATRIX */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
            Feature-by-feature comparison
          </h2>
          <div className="overflow-x-auto rounded-md border border-border bg-background">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="py-3 px-4 font-semibold text-foreground">Feature</th>
                  {matrix.columns.map((col, i) => (
                    <th
                      key={col}
                      className={`py-3 px-4 font-semibold text-center ${
                        i === 0 ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.groups.map((group) => (
                  <Fragment key={group.name}>
                    <tr className="bg-muted/20">
                      <td
                        colSpan={matrix.columns.length + 1}
                        className="py-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        {group.name}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={`${group.name}-${row.feature}`} className="border-b border-border last:border-0">
                        <td className="py-2 px-4 text-foreground">{row.feature}</td>
                        {row.values.map((v, j) => (
                          <td key={j} className="py-2 px-4 text-center text-muted-foreground">
                            {renderCell(v)}
                          </td>
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

      {/* DEEP DIVE — question-based H2s with block answers */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-10">
            {deepDive.map((d, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-foreground mb-3">{d.question}</h2>
                <p className="text-muted-foreground mb-3" data-answer="true">
                  {d.leadAnswer}
                </p>
                {d.body?.map((p, j) => (
                  <p key={j} className="text-muted-foreground mb-3">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      {pricing && (
        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">
              {pricing.title}
            </h2>
            <div className={`grid gap-6 ${pricing.columns.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
              {pricing.columns.map((col, i) => (
                <Card key={col.name} className={i === 0 ? 'border-primary/30' : ''}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{col.name}</h3>
                    {col.intro && (
                      <p className="text-sm text-muted-foreground mb-4">{col.intro}</p>
                    )}
                    <div className="space-y-3">
                      {col.tiers.map((tier) => (
                        <div key={tier.name} className="border-b border-border last:border-0 pb-3 last:pb-0">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="font-semibold text-foreground">{tier.name}</span>
                            <span className="text-primary font-semibold text-sm">{tier.price}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{tier.desc}</p>
                        </div>
                      ))}
                    </div>
                    {col.note && (
                      <div className="bg-muted/60 rounded-md p-4 text-sm text-muted-foreground border-l-2 border-primary mt-4">
                        {col.note}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHO FOR */}
      {whoFor && whoFor.length > 0 && (
        <section className="py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className={`grid gap-6 md:grid-cols-${whoFor.length}`}>
              {whoFor.map((w) => (
                <Card key={w.title} className={w.emphasized ? 'border-primary/30' : ''}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{w.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{w.intro}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {w.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SCENARIO */}
      {scenario && (
        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              {scenario.title}
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              {scenario.intro}
            </p>
            <div className={`grid gap-6 md:grid-cols-${scenario.columns.length}`}>
              {scenario.columns.map((c) => (
                <Card key={c.title} className={c.emphasized ? 'border-primary/30' : ''}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{c.title}</h3>
                    <ol className="space-y-3">
                      {c.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                              c.emphasized
                                ? 'bg-primary/10 text-primary'
                                : 'bg-muted text-foreground'
                            }`}
                          >
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">{f.question}</h3>
                <p className="text-muted-foreground" data-answer="true">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground mb-4">Sources</h2>
          <p className="text-sm text-muted-foreground mb-4">
            All competitor pricing and features verified July 2026. Invoicemonk pricing pulled from
            our{' '}
            <Link to="/pricing" className="text-primary underline">
              live pricing page
            </Link>
            .
          </p>
          <ul className="space-y-2 text-sm">
            {sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-heading-lg font-bold text-foreground mb-4">
            {ctaHeadline || 'Ready to switch?'}
          </h2>
          <p className="text-muted-foreground mb-6">
            Start scanning receipts, invoicing clients, and running compliant books from one
            account.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href="https://app.invoicemonk.com/signup?utm_source=organic&utm_medium=compare&utm_campaign=receipt_scanner">
              Start with Invoicemonk
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* RELATED */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-heading-lg font-bold text-foreground mb-6">
              Keep comparing
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {relatedLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block p-4 rounded-md border border-border bg-background hover:border-primary/40 transition-colors text-sm text-foreground"
                  >
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </Layout>
  );
}
