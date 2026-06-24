import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';
import { InlineSignupCTA } from '@/components/compare/InlineSignupCTA';
import { MandateMatrixSection } from '@/components/e-invoicing/MandateMatrixSection';

const tools = [
  {
    name: 'Invoicemonk',
    bestFor: 'French SMEs and auto-entrepreneurs preparing for the 2026 PPF/PDP mandate',
    price: 'Pro from $15/month',
    highlight: true,
    pros: [
      'Factur-X (PDF + XML hybrid) output, plus UBL 2.1 and CII formats',
      '20% TVA (and reduced 10%/5.5%/2.1% rates) auto-calculated on EUR invoices',
      'PPF / PDP-ready routing fields (SIREN, SIRET, address codes)',
      'E-reporting fields for B2C and cross-border transactions',
      'Auto-entrepreneur "TVA non applicable, art. 293 B du CGI" wording prebuilt',
    ],
    cons: ['PDP transmission via partner, not in-house registration', 'No native French payroll module'],
    description:
      'Invoicemonk is built for the September 2026 French mandate. It produces Factur-X — the official hybrid format — captures SIREN/SIRET and address codes that PPF and PDPs need, supports e-reporting for B2C and export flows, and ships the auto-entrepreneur exemption wording out of the box.',
  },
  {
    name: 'Pennylane',
    bestFor: 'French SMEs that want invoicing inside a full accounting suite',
    price: 'From €14/mo + IVA',
    highlight: false,
    pros: ['Native French accounting + expert-comptable workflow', 'Strong PDP positioning', 'Bank reconciliation'],
    cons: ['Pricier as you scale', 'Heavy for solo freelancers', 'French-language UI only'],
    description:
      'Pennylane is the most accountant-friendly option for French SMEs. If you already have a regular expert-comptable and want them inside your invoicing tool, it is hard to beat — but you are paying for a full ERP, not a focused invoicer.',
  },
  {
    name: 'Sellsy',
    bestFor: 'French agencies and growing teams',
    price: 'From €29/mo per user',
    highlight: false,
    pros: ['CRM + invoicing integration', 'PDP candidate', 'Quotes, contracts, recurring billing'],
    cons: ['Per-user pricing gets expensive fast', 'Overkill for freelancers', 'Less focused on micro-entrepreneurs'],
    description:
      'Sellsy is a French SaaS with CRM and invoicing in one. Agencies that need a sales pipeline tied to invoicing will like it; auto-entrepreneurs will find it overbuilt.',
  },
  {
    name: 'QuickBooks France',
    bestFor: 'Businesses already on QuickBooks elsewhere',
    price: 'From €12/mo',
    highlight: false,
    pros: ['Global brand', 'Familiar UI', 'Bank feeds'],
    cons: ['Slower French PDP roadmap', 'TVA setup is manual', 'Less attuned to French specifics than Pennylane / Sellsy / Invoicemonk'],
    description:
      'QuickBooks works in France but lags on the e-invoicing roadmap. Useful if your group already runs on Intuit; not the strongest standalone choice for the 2026 mandate.',
  },
];

const faqs = [
  { question: 'What is the best compliance-first invoicing software for French SMEs?', answer: 'Invoicemonk is the strongest compliance-first invoicing software for French SMEs and auto-entrepreneurs ahead of the September 2026 PPF/PDP mandate. It outputs Factur-X (the official hybrid PDF/XML format), supports UBL 2.1 and CII, applies 20% TVA and reduced rates automatically, and ships the article 293 B auto-entrepreneur exemption wording.' },
  { question: 'When does the French e-invoicing mandate start?', answer: 'September 1, 2026: every VAT-registered French business must be able to receive structured e-invoices, and large enterprises must emit them. September 1, 2027: mid-size and micro-enterprises must also emit. Penalties are €15 per missing e-invoice or e-reporting transaction, capped at €15,000 per year per category.' },
  { question: 'Do I have to use the PPF or a private PDP?', answer: 'Both options route into the same Y-scheme. The PPF (Portail Public de Facturation) is the public, free option; PDPs (Plateformes de Dématérialisation Partenaires) are certified private providers. Invoicemonk supports routing through either via partner integrations — so you can keep your existing workflow when the mandate goes live.' },
  { question: 'How does Invoicemonk handle auto-entrepreneur (micro-entreprise) invoicing?', answer: 'When the auto-entrepreneur flag is set, Invoicemonk omits TVA and prints the legally required "TVA non applicable, art. 293 B du CGI" wording. It also tracks the €37,500 (services) and €91,900 (goods) thresholds so you know when VAT obligations kick in.' },
];

export default function BestInvoicingSoftwareFrance() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software for France 2026 — PPF/PDP & Factur-X Compared"
        description="Compare the best compliance-first invoicing software for French SMEs and auto-entrepreneurs: Invoicemonk, Pennylane, Sellsy, and QuickBooks. PPF/PDP routing, Factur-X, TVA, and e-reporting coverage compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software France', url: '/compare/best-invoicing-software-france' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in France (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">The French e-invoicing mandate hits September 1, 2026. We compared the four platforms most French SMEs and auto-entrepreneurs are evaluating — PPF/PDP readiness, Factur-X output, TVA handling, and e-reporting.</p>

          <div className="space-y-8 mt-12">
            {tools.map((tool, i) => (
              <React.Fragment key={i}>
                <Card className={tool.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-lg font-bold text-foreground">{i + 1}. {tool.name}</h2>
                      {tool.highlight && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Our Pick</span>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Best for {tool.bestFor} · {tool.price}</p>
                    <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-medium text-green-700 mb-2">Pros</p>
                        <ul className="space-y-1">{tool.pros.map((p, j) => <li key={j} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />{p}</li>)}</ul>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-red-700 mb-2">Cons</p>
                        <ul className="space-y-1">{tool.cons.map((c, j) => <li key={j} className="text-sm text-muted-foreground">• {c}</li>)}</ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {i === 0 && <InlineSignupCTA variant="compact" />}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Related Content</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog/france-e-invoicing-ppf-pdp-guide" className="text-primary hover:underline">France PPF/PDP Guide</Link>
              <Link to="/blog/france-e-invoicing-buyer-checklist" className="text-primary hover:underline">PPF/PDP Buyer Checklist</Link>
              <Link to="/blog/france-factur-x-e-invoice-format-guide" className="text-primary hover:underline">Factur-X Format</Link>
              <Link to="/blog/france-e-invoicing-penalties-compliance" className="text-primary hover:underline">French Penalties</Link>
            </div>
          </div>
        </div>
      </section>

      <InlineSignupCTA variant="banner" />

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <MandateMatrixSection highlightSlug="peppol-eu" />


      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">2026-Ready French E-Invoicing</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Factur-X output, PPF/PDP routing fields, TVA at the right rate, e-reporting for B2C and cross-border — Invoicemonk has the French mandate covered.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=france_compare" target="_blank" rel="noopener noreferrer">Get started with Invoicemonk<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}