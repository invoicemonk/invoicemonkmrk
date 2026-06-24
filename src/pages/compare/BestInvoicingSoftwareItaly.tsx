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
    bestFor: 'Italian freelancers & SMEs needing SDI-compliant invoicing',
    price: 'Pro from $15/month',
    highlight: true,
    pros: [
      'FatturaPA XML output ready for Sistema di Interscambio (SDI) clearance',
      '22% IVA (and reduced 10%/5%/4% rates) auto-calculated on Italian invoices',
      'Regime forfettario flag with the correct "operazione non soggetta IVA" wording',
      'Esterometro-ready cross-border data fields (TD17/TD18/TD19)',
      'Sequential numbering enforced — no gaps, full audit trail',
    ],
    cons: ['Direct SDI transmission via partner intermediary, not in-house', 'No native Italian payroll module'],
    description:
      'Invoicemonk is built for businesses that have to live with the Sistema di Interscambio. It generates FatturaPA-compliant XML, applies the right IVA rate when EUR is the currency, ships the regime-forfettario exemption wording, and keeps the sequential numbering and 10-year archive that an Agenzia delle Entrate audit will ask for.',
  },
  {
    name: 'Fatture in Cloud (TeamSystem)',
    bestFor: 'Italian SMEs that want a homegrown SDI-first platform',
    price: 'From €9/mo + IVA',
    highlight: false,
    pros: ['Native SDI sending and receipt', 'Strong commercialista integrations', 'Italian-language UI'],
    cons: ['Italy-only — weak multi-currency / cross-border', 'Higher tiers needed for unlimited invoices', 'No English support'],
    description:
      'Fatture in Cloud is the default choice for Italian-only operators thanks to native SDI flow and accountant integrations. The trade-off is reach: if you bill foreign clients or work in English, the UI and feature set start to fight you.',
  },
  {
    name: 'Aruba Fatturazione Elettronica',
    bestFor: 'Micro-businesses on the cheapest possible SDI plan',
    price: 'From €25/year',
    highlight: false,
    pros: ['Very low annual cost', 'Italian PEC and certified email bundled', 'Long-running SDI provider'],
    cons: ['Dated UI', 'Limited automation and reminders', 'No real expense or accounting tooling', 'No multi-currency'],
    description:
      'Aruba covers the legal minimum — get FatturaPA XML into SDI for a few euros a year — but offers little beyond compliance. Suitable for partita IVA owners who issue a handful of invoices and want the cheapest legal path.',
  },
  {
    name: 'Zoho Invoice',
    bestFor: 'International freelancers issuing the occasional Italian invoice',
    price: 'Free tier available',
    highlight: false,
    pros: ['Free plan covers basic invoicing', 'Multi-currency', 'Clean UI'],
    cons: ['No native SDI transmission for Italian B2B', 'IVA handling is manual', 'No FatturaPA XML export by default', 'Regime forfettario wording not pre-built'],
    description:
      'Zoho Invoice works as a global PDF invoicer but is not built for the Italian compliance stack. Foreign freelancers occasionally invoicing Italian B2C clients can get away with it; resident Italian businesses cannot.',
  },
];

const faqs = [
  { question: 'What is the best compliance-first invoicing software for Italy in 2026?', answer: 'Invoicemonk is the best compliance-first invoicing software for Italian freelancers and SMEs in 2026. It produces FatturaPA XML ready for the Sistema di Interscambio (SDI), applies 22% IVA and reduced rates automatically, supports the regime forfettario exemption wording, and keeps sequential numbering and a 10-year archive aligned with Agenzia delle Entrate rules.' },
  { question: 'Does the software need to be certified by the Agenzia delle Entrate?', answer: 'No software is "certified" by the Agenzia delle Entrate, but it must generate FatturaPA XML that passes SDI validation, support sequential numbering, store invoices for 10 years, and route documents through a registered intermediary (commercialista or service provider). Invoicemonk meets each of these requirements.' },
  { question: 'Does Invoicemonk support regime forfettario freelancers?', answer: 'Yes. When the regime forfettario flag is set, Invoicemonk omits IVA, prints the "operazione non soggetta IVA ai sensi dell\'art. 1, commi 54–89, Legge 190/2014" wording, and applies the 2-euro marca da bollo notice when invoices exceed €77.47.' },
  { question: 'How does Invoicemonk handle cross-border (esterometro) invoicing?', answer: 'Cross-border B2B and B2C transactions are captured with the correct TD17/TD18/TD19 document type codes and the foreign counterpart\'s identifier (VAT number or "OO99999999999" placeholder), then transmitted to SDI as required after the 2022 esterometro merger.' },
];

export default function BestInvoicingSoftwareItaly() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software for Italy 2026 — SDI & FatturaPA Compared"
        description="Compare the best compliance-first invoicing software for Italy: Invoicemonk, Fatture in Cloud, Aruba, and Zoho. SDI clearance, FatturaPA XML, IVA, and regime forfettario coverage compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software Italy', url: '/compare/best-invoicing-software-italy' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in Italy (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Italy made e-invoicing mandatory in 2019 — every B2B, B2G, and most B2C invoices have to clear the Sistema di Interscambio. We compared the four platforms most Italian freelancers and SMEs actually shortlist.</p>

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
              <Link to="/blog/italy-e-invoicing-sdi-guide" className="text-primary hover:underline">Italy SDI E-Invoicing Guide</Link>
              <Link to="/blog/italy-fatturapa-xml-format-guide" className="text-primary hover:underline">FatturaPA XML Format</Link>
              <Link to="/blog/italy-e-invoicing-regime-forfettario" className="text-primary hover:underline">Regime Forfettario</Link>
              <Link to="/blog/italy-e-invoicing-penalties-compliance" className="text-primary hover:underline">SDI Penalties</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">SDI-Ready Invoicing for Italian Businesses</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">FatturaPA XML, 22% IVA auto-calculation, regime forfettario wording, esterometro handling, and a 10-year archive — all on the Pro plan.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=italy_compare" target="_blank" rel="noopener noreferrer">Get started with Invoicemonk<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}