import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, XCircle, Globe, ShieldCheck } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';
import { InlineSignupCTA } from '@/components/compare/InlineSignupCTA';

interface ToolCard {
  name: string;
  freePlanLine: string;
  highlight?: boolean;
  bestForShort: string;
  intro: string;
  doesWell: string;
  cannotDo: string;
  freeLimits: string;
  bestFor: string;
}

const tools: ToolCard[] = [
  {
    name: 'Zoho Invoice',
    freePlanLine: 'Genuinely free forever. No subscription, no trial.',
    bestForShort: 'Best Overall Free Option',
    intro: `Zoho Invoice is the strongest free invoicing tool available in 2026 for most freelancers. According to Zoho's official pricing page, the free plan includes unlimited invoicing to up to 1,000 clients, automatic payment reminders, recurring invoices, time tracking, expense tracking, a client portal, and integrations with payment gateways including Stripe, PayPal, and Razorpay. The platform carries a 4.7 out of 5 rating on both G2 and Capterra based on thousands of verified reviews.`,
    doesWell: `Zoho Invoice is available globally and supports multi-currency invoicing, allowing you to invoice different clients in their local currencies. The mobile app is rated approximately 4.8 out of 5 on both iOS and Android app stores and is described by independent reviewers as nearly as capable as the web version. Customer support is available 24 hours a day, 5 days a week via email and phone, even on the free plan, which is unusual and genuinely valuable.`,
    cannotDo: `The free plan is capped at 500 invoices per year and 3 active projects. A freelancer with 10 active clients who bills milestone invoices, deposit invoices, and monthly retainers can exhaust this allowance by September. The plan also carries "Powered by Zoho Invoice" branding on all outgoing documents, which some freelancers find unprofessional when sending to enterprise clients. Payment gateway availability varies by country, with Capterra reviewers specifically documenting "regional limitations and extra fees for certain payment methods." Zoho Invoice does not integrate natively with Wise or Payoneer, the two most commonly used platforms for international freelance payments. Crucially, it does not generate compliance-first invoices for cross-border transactions: it provides a well-formatted template, but applying the specific legal requirements for a Nigeria-to-Germany or Philippines-to-US transaction is the freelancer's responsibility.`,
    freeLimits: `500 invoices per year, 3 projects, 2 users, 1,000 clients, "Powered by Zoho Invoice" branding on all documents.`,
    bestFor: `Solo freelancers primarily invoicing domestic clients who want professional invoicing, time tracking, expense management, and a client portal at zero cost. An excellent starting point before moving to a purpose-built international invoicing tool.`,
  },
  {
    name: 'Invoice Ninja',
    freePlanLine: 'Free cloud plan: 5 clients, unlimited invoices (Jan 2026 update). Self-hosted version: fully free, unlimited everything.',
    bestForShort: 'Best Free Option for Tech-Savvy Freelancers',
    intro: `Invoice Ninja is an open-source invoicing platform launched in 2014. As of January 1, 2026, Invoice Ninja updated its pricing structure. The free cloud plan now includes 5 clients, unlimited invoices, recurring billing, automated reminders, basic invoice customisation with 4 templates, and time tracking. The free plan carries "Powered by Invoice Ninja" branding on invoices and the client portal. For technically inclined freelancers, the self-hosted version is fully free with no client limits, no branding, and access to all features.`,
    doesWell: `The multi-currency support and broad payment gateway availability are genuine strengths. The platform supports over 40 payment gateways internationally, giving it broader payment infrastructure coverage than most free tools. Research.com's 2026 review confirms multi-currency support for more than 100 currencies. The self-hosted version is particularly attractive for freelancers in countries where cloud-based tools have geographic payment restrictions: you run the software yourself and integrate directly with whichever payment gateway works in your market.`,
    cannotDo: `The free cloud plan is now limited to 5 clients, a meaningful constraint for any freelancer with a growing client base. Ninja Pro costs $140 per year. Like Zoho Invoice, Invoice Ninja does not generate compliance-first invoices: it produces professional multi-currency documents but does not automatically apply the specific regulatory requirements for cross-border transactions between particular countries. Some Capterra reviewers note that customer service quality has been inconsistent.`,
    freeLimits: `5 clients (cloud), unlimited invoices, Invoice Ninja branding on documents, 1 user, 4 invoice templates.`,
    bestFor: `Tech-savvy freelancers comfortable with self-hosting who want a fully-featured free invoicing platform with broad payment gateway coverage and no subscription cost. Also suitable for freelancers with fewer than 5 active clients wanting a capable free cloud option.`,
  },
  {
    name: 'Wave',
    freePlanLine: 'Genuinely free forever with unlimited invoices and accounting features — US & Canada only.',
    bestForShort: 'Best Free Option for US and Canada-Based Freelancers',
    intro: `Wave is one of the most feature-complete free invoicing tools available, with unlimited invoices, unlimited clients, automatic payment reminders, recurring billing, expense tracking, bank reconciliation, profit and loss reports, and a mobile app, all at no subscription cost. Multiple independent reviews describe Wave's free Starter plan as the strongest free option for most freelancers — covering everything most independent professionals need without a monthly fee.`,
    doesWell: `For freelancers based in the US or Canada billing domestic clients, Wave is an excellent free choice. The accounting layer paired with free invoicing is rare at this price point.`,
    cannotDo: `Wave officially discontinued support for users outside the United States and Canada in November 2020. According to Wave's own Help Center documentation, users outside these two countries can no longer send invoices or payment reminders through Wave's platform. Wave directed affected international users to switch to Zoho Books. A freelancer in Lagos, Nairobi, Manila, or Berlin cannot use Wave to send invoices or receive payments. This is a fundamental limitation that disqualifies Wave for the majority of international freelancers.`,
    freeLimits: `Unlimited invoices and clients, full accounting suite — but restricted to US and Canada-based businesses for invoicing and payment functionality.`,
    bestFor: `Freelancers based in the United States or Canada who want free invoicing paired with basic accounting. Not suitable for freelancers based elsewhere — see our dedicated guide to Wave alternatives.`,
  },
  {
    name: 'PayPal Invoicing',
    freePlanLine: 'Genuinely free to send invoices. Transaction fees apply on payments received.',
    bestForShort: 'Best Free Option for Quick International Payments',
    intro: `PayPal Invoicing is available as part of any free PayPal Business account. It allows you to send invoices in over 25 currencies, accept PayPal payments and credit cards, set up recurring invoices, and track invoice status. PayPal is available in over 200 countries and territories, making it one of the most geographically accessible payment tools for international freelancers. Clients can pay by card without a PayPal account.`,
    doesWell: `Geographic reach is unmatched: 200+ countries, 25 currencies, and clients can pay by card without creating a PayPal account. Setup is the simplest of any tool in this comparison — if you already have a PayPal Business account, you can send your first invoice in under 5 minutes.`,
    cannotDo: `PayPal's transaction fees are among the highest in this comparison: 3.49 percent plus $0.49 per transaction in the US at standard online rates. Cross-border transactions incur additional currency conversion fees, typically 3 to 4 percent above the mid-market exchange rate. PayPal invoicing has minimal customisation, very limited branding capability, basic reporting, and no compliance-first invoice generation for cross-border transactions. Many enterprise and mid-market clients do not use PayPal and prefer bank transfer via Wise or SWIFT, which PayPal invoicing does not facilitate directly.`,
    freeLimits: `Unlimited invoices and clients. 3.49% + $0.49 per transaction (US online rate). 3–4% cross-border conversion spread on top.`,
    bestFor: `Freelancers whose clients already use or prefer PayPal, particularly in digital services and creative markets where PayPal is widely accepted for smaller transaction values.`,
  },
  {
    name: 'Stripe Invoicing',
    freePlanLine: 'No monthly subscription. 0.4% per paid invoice, plus standard payment processing fees.',
    bestForShort: 'Best Free Option for Developer Freelancers With Stripe Access',
    intro: `Stripe Invoicing has no monthly subscription fee. You pay 0.4 percent per paid invoice on the Starter tier, plus Stripe's standard transaction fees: 2.9 percent plus $0.30 per card transaction, 1.5 percent for international cards, and 1.0 percent for currency conversion on cross-border transactions. For international freelancers, the combined effective rate on a cross-border payment frequently exceeds 5 percent per transaction.`,
    doesWell: `If you already use Stripe for other payment processing, invoicing is a natural extension with deep API access, programmable workflows, and clean reconciliation against your existing Stripe ledger. Hosted invoice pages are well-designed and convert well.`,
    cannotDo: `The critical limitation is that Stripe merchant accounts are only available in 46 fully supported countries as of 2026. A freelancer whose business is registered outside these 46 countries cannot create a standard Stripe account. Effective all-in fees on cross-border transactions frequently exceed 5 percent. No compliance-first invoice generation for international transactions.`,
    freeLimits: `Unlimited invoices and clients. 0.4% per paid invoice (capped at $2.00) + 2.9% + $0.30 per card + 1.5% international + 1.0% FX conversion. $15 per chargeback.`,
    bestFor: `Freelance developers and technical professionals already using Stripe for other payment processing who want invoicing that integrates with their existing Stripe account. Not suitable for freelancers based outside Stripe's 46 supported countries.`,
  },
];

const faqs = [
  { question: 'Is there truly free invoicing software for international freelancers?', answer: 'Yes. Zoho Invoice is free for most countries and includes multi-currency invoicing, automatic reminders, and a client portal. Invoice Ninja\'s self-hosted version is free with no limits. Both are genuinely free options for international freelancers. Neither generates compliance-first invoices for cross-border transactions, which matters increasingly as income and client sophistication grow.' },
  { question: 'What is the best free invoicing software that works worldwide?', answer: 'Zoho Invoice has the broadest free coverage internationally, available in most countries with multiple currency support. Invoice Ninja\'s self-hosted version is available anywhere you can host a server. Both have limitations on payment gateway availability in some regions.' },
  { question: 'Does Wave work for international freelancers?', answer: 'No. Wave officially discontinued invoicing and payment support for users outside the United States and Canada in November 2020, per Wave\'s own Help Center documentation.' },
  { question: 'What free invoicing software supports the most currencies?', answer: 'Invoice Ninja supports over 100 currencies on its free plan. Zoho Invoice also supports multiple currencies. PayPal Invoicing supports 25 currencies.' },
  { question: 'Is Stripe Invoicing free?', answer: 'Stripe has no monthly subscription for invoicing, but every paid invoice incurs a 0.4 to 0.5 percent fee, and every payment incurs standard Stripe transaction fees plus international and currency conversion surcharges. For international freelancers the effective all-in cost per transaction frequently exceeds 5 percent.' },
  { question: 'When should I stop using free invoicing software?', answer: 'The key indicators: recurring payment delays caused by non-compliant invoices, spending more than 2 to 3 hours per month on manual follow-up, hitting invoice or client caps on your free plan, having clients in multiple countries with different compliance requirements, and billing in more than one currency regularly. At any of these points, the cost of continued friction exceeds the cost of a purpose-built tool.' },
];

const tableRows = [
  { tool: 'Zoho Invoice', cost: 'Free', invoices: '500/year', clients: '1,000', intl: 'Most countries', currency: 'Yes', xborder: 'Partial (regional limits)', compliance: 'No', branding: '"Powered by Zoho Invoice"' },
  { tool: 'Invoice Ninja (cloud)', cost: 'Free', invoices: 'Unlimited', clients: '5', intl: 'Yes', currency: 'Yes (100+)', xborder: 'Yes (40+ gateways)', compliance: 'No', branding: '"Powered by Invoice Ninja"' },
  { tool: 'Invoice Ninja (self-hosted)', cost: 'Free', invoices: 'Unlimited', clients: 'Unlimited', intl: 'Yes', currency: 'Yes', xborder: 'Yes', compliance: 'No', branding: 'None' },
  { tool: 'Wave', cost: 'Free', invoices: 'Unlimited', clients: 'Unlimited', intl: 'US & Canada only', currency: 'Limited', xborder: 'US & Canada only', compliance: 'No', branding: 'None' },
  { tool: 'PayPal Invoicing', cost: 'Free*', invoices: 'Unlimited', clients: 'Unlimited', intl: '200+ countries', currency: 'Yes (25)', xborder: 'PayPal only', compliance: 'No', branding: 'Minimal' },
  { tool: 'Stripe Invoicing', cost: 'Free + 0.4%/invoice', invoices: 'Unlimited', clients: 'Unlimited', intl: '46 countries only', currency: 'Yes', xborder: 'Yes', compliance: 'No', branding: 'None' },
  { tool: 'Invoicemonk', cost: 'Free plan; Pro from $15/mo', invoices: 'Unlimited (Pro)', clients: 'Unlimited (Pro)', intl: 'All countries', currency: 'Yes', xborder: 'Yes', compliance: 'Yes', branding: 'None' },
];

const sources = [
  { label: 'Zoho Invoice Pricing Page (verified May 2026)', url: 'https://www.zoho.com/invoice/pricing.html' },
  { label: 'Zoho Books Pricing Page (verified May 2026)', url: 'https://www.zoho.com/books/pricing/' },
  { label: 'Invoice Ninja — January 2026 Pricing Update', url: 'https://www.invoiceninja.com/' },
  { label: 'Wave Help Center: Changes for users outside US & Canada', url: 'https://support.waveapps.com/' },
  { label: 'Stripe Pricing Page (verified May 2026)', url: 'https://stripe.com/pricing' },
  { label: 'Red Stag Fulfillment: Stripe-supported countries 2026', url: 'https://redstagfulfillment.com/' },
  { label: 'Capterra — Zoho Invoice 2026 reviews', url: 'https://www.capterra.com/p/142450/Zoho-Invoice/' },
  { label: 'GetApp — Invoice Ninja 2026 pricing & alternatives', url: 'https://www.getapp.com/finance-accounting-software/a/invoice-ninja/' },
  { label: 'Research.com — Invoice Ninja Review 2026', url: 'https://research.com/' },
  { label: 'Plutio — Best Invoicing Software for Freelancers 2026', url: 'https://www.plutio.com/' },
];

export default function BestFreeInvoicingSoftware() {
  return (
    <Layout>
      <SEOHead
        title="Best Free Invoicing Software for International Freelancers (2026) | Invoicemonk"
        description="Compare the best genuinely free invoicing software for international freelancers in 2026 — Zoho Invoice, Invoice Ninja, Wave, PayPal, Stripe — with cross-border compliance gaps explained."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Free Invoicing Software', url: '/compare/best-free-invoicing-software' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-3">Best Free Invoicing Software for International Freelancers (2026)</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">Last updated: May 2026 · 14 min read</p>

          {/* Quick answer */}
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 lg:p-8 mb-12">
            <div className="flex items-start gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <h2 className="text-lg font-bold text-foreground">Quick answer</h2>
            </div>
            <p className="text-muted-foreground">
              The best genuinely free invoicing tools for freelancers in 2026 are <strong>Zoho Invoice</strong> (best overall free option), <strong>Invoice Ninja</strong> (best for tech-savvy freelancers or self-hosting), and <strong>Wave</strong> (best for US- and Canada-based freelancers wanting accounting alongside invoicing). None of them were purpose-built for cross-border compliance. If you are a freelancer billing international clients who needs invoices that automatically meet the legal requirements of both your country and your client's country, <Link to="/" className="text-primary hover:underline">Invoicemonk</Link> is the only tool in this comparison built specifically for that use case.
            </p>
          </div>

          {/* What "free" actually means */}
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-5 mb-12">
            <h2 className="text-heading-md font-bold text-foreground">What "Free" Actually Means in Invoicing Software</h2>
            <p>Before reviewing any tool, this guide does something most comparison pages do not: it defines what free actually means, because the word is used very loosely in this category.</p>
            <p><strong>Genuinely free</strong> means you can create invoices, send them to clients, and use the platform's core features indefinitely without paying a subscription. Payment processing fees are separate and always apply when clients pay by card, regardless of which platform you use. These are fees charged by payment processors, not by the invoicing platform itself, and range from approximately 1 percent to 3.5 percent per transaction.</p>
            <p><strong>Not genuinely free</strong> includes: free trials that expire after 14 or 30 days, free plans limited to three invoices per month, and free plans where the invoice you send carries a prominent watermark advertising the platform. This guide only includes tools with plans that are genuinely free at the invoicing tier described.</p>
            <p>The international-freelancer caveat applies to every tool in this list: free domestic invoicing and free international invoicing are not the same thing. A tool can be free to use, have zero subscription cost, and still impose significant friction and hidden costs for freelancers billing clients in other countries — through payment-gateway restrictions, currency conversion fees, compliance gaps, or geographic availability limits.</p>

            <h2 className="text-heading-md font-bold text-foreground">How We Evaluated These Tools</h2>
            <p>Each tool was evaluated against five criteria that matter specifically to international freelancers:</p>
            <ul>
              <li><strong>Global availability.</strong> Can freelancers in any country create an account and send invoices?</li>
              <li><strong>Cross-border payment processing.</strong> Can the tool receive payments from international clients without complex third-party setup?</li>
              <li><strong>Multi-currency invoicing.</strong> Can you invoice different clients in different currencies from a single account?</li>
              <li><strong>Compliance for cross-border transactions.</strong> Does the tool generate invoices that meet the legal requirements of the countries involved?</li>
              <li><strong>Free-plan limitations</strong> that disproportionately affect freelancers working across borders.</li>
            </ul>
          </div>

          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">The Best Free Invoicing Software for International Freelancers in 2026</h2>

          <div className="space-y-8">
            {tools.map((tool, i) => (
              <React.Fragment key={tool.name}>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-foreground">{i + 1}. {tool.name}</h3>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium">{tool.bestForShort}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1"><strong>Free plan:</strong> {tool.freePlanLine}</p>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{tool.intro}</p>

                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-xs font-medium text-green-700 mb-2 flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> What it does well</p>
                        <p className="text-sm text-muted-foreground">{tool.doesWell}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-red-700 mb-2 flex items-center gap-1.5"><XCircle className="w-3.5 h-3.5" /> What it cannot do for international freelancers</p>
                        <p className="text-sm text-muted-foreground">{tool.cannotDo}</p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-lg bg-muted/40 p-4">
                      <p className="text-xs font-medium text-foreground mb-1">Free plan limits at a glance</p>
                      <p className="text-sm text-muted-foreground">{tool.freeLimits}</p>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4"><strong>Best for:</strong> {tool.bestFor}</p>
                  </CardContent>
                </Card>
                {i === 0 && (
                  <InlineSignupCTA
                    variant="compact"
                    heading="Billing international clients?"
                    body="Invoicemonk generates compliance-ready invoices for your country and your client's country — automatically. Free to start."
                    buttonLabel="Try Invoicemonk"
                  />
                )}
                {i === 2 && (
                  <Card className="border-primary ring-1 ring-primary/20 bg-primary/5">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Globe className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">Wave alternatives outside the US and Canada</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">If you landed on Wave only to find your country isn't supported, see our dedicated guides for <Link to="/compare/wave-alternatives" className="text-primary hover:underline">Wave alternatives</Link>, <Link to="/compare/wave-alternative-nigeria" className="text-primary hover:underline">Nigeria</Link>, <Link to="/compare/wave-alternative-south-africa" className="text-primary hover:underline">South Africa</Link>, <Link to="/compare/wave-alternative-uk" className="text-primary hover:underline">UK</Link>, and <Link to="/compare/wave-alternative-australia" className="text-primary hover:underline">Australia</Link>.</p>
                    </CardContent>
                  </Card>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Compliance Gap */}
          <div className="mt-16 prose prose-lg max-w-none text-muted-foreground space-y-5">
            <h2 className="text-heading-lg font-bold text-foreground">The International Compliance Gap: What Every Free Tool Is Missing</h2>
            <p>Every tool reviewed above can create a professional-looking invoice and send it to a client in another country. None of them automatically generates an invoice that meets the specific legal compliance requirements for a cross-border transaction between two particular countries.</p>
            <p>This gap matters more than most freelancers realise until they encounter it directly.</p>
            <p>A compliant invoice for a freelancer in Nigeria billing a client in Germany may need to include the freelancer's tax identification number under Nigerian law, the German client's VAT registration number, the correct notation for reverse-charge VAT treatment under EU rules for services received from non-EU suppliers, invoice date formatting that meets German accounts payable standards, and payment terms that satisfy both jurisdictions. An invoice missing any of these elements may be returned by the client's accounts payable team, delaying payment by weeks, or creating tax exposure in the freelancer's home jurisdiction.</p>
            <p>The same compliance requirements, in different combinations, apply to a designer in the Philippines billing a US startup, a consultant in Kenya billing a UK company, or a developer in India billing a French agency.</p>
            <p>Free invoicing tools are built to serve the broadest possible market with the simplest possible invoice format. Applying jurisdiction-specific compliance rules for dozens of country combinations requires significant compliance infrastructure that free tools, by definition, do not have the revenue to build and maintain.</p>
            <p>This is the gap <Link to="/use-cases/multi-currency-invoicing" className="text-primary hover:underline">Invoicemonk</Link> fills. It exists specifically for cross-border freelance invoicing and generates invoices that meet the compliance requirements of the specific country combination involved in each transaction — automatically, without the freelancer needing to research the rules or verify each invoice manually.</p>
          </div>

          {/* Comparison Table */}
          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-6">Full Comparison Table</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Tool</th>
                    <th className="text-left p-3 font-semibold text-foreground">Monthly cost</th>
                    <th className="text-left p-3 font-semibold text-foreground">Invoices</th>
                    <th className="text-left p-3 font-semibold text-foreground">Clients</th>
                    <th className="text-left p-3 font-semibold text-foreground">Intl users</th>
                    <th className="text-left p-3 font-semibold text-foreground">Multi-currency</th>
                    <th className="text-left p-3 font-semibold text-foreground">Cross-border payments</th>
                    <th className="text-left p-3 font-semibold text-foreground">Compliance-first</th>
                    <th className="text-left p-3 font-semibold text-foreground">Branding</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => {
                    const isMonk = row.tool === 'Invoicemonk';
                    return (
                      <tr key={row.tool} className={`border-t border-border ${isMonk ? 'bg-primary/5' : ''}`}>
                        <td className={`p-3 ${isMonk ? 'font-bold text-foreground' : 'text-foreground font-medium'}`}>{row.tool}</td>
                        <td className="p-3 text-muted-foreground">{row.cost}</td>
                        <td className="p-3 text-muted-foreground">{row.invoices}</td>
                        <td className="p-3 text-muted-foreground">{row.clients}</td>
                        <td className="p-3 text-muted-foreground">{row.intl}</td>
                        <td className="p-3 text-muted-foreground">{row.currency}</td>
                        <td className="p-3 text-muted-foreground">{row.xborder}</td>
                        <td className={`p-3 ${row.compliance === 'Yes' ? 'text-green-700 font-medium' : 'text-muted-foreground'}`}>{row.compliance}</td>
                        <td className="p-3 text-muted-foreground">{row.branding}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">*PayPal: free to send invoices; transaction fees apply on payments received.</p>
          </div>

          {/* Pricing Breakdown */}
          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Pricing Breakdown: True Cost for International Freelancers</h2>
            <div className="space-y-5">
              <Card><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">Zoho Invoice</h3><p className="text-sm text-muted-foreground">Completely free, permanently. Upgrade path is Zoho Books at $15/mo (monthly) or $10/mo (annual) when free plan limits are exceeded.</p></CardContent></Card>
              <Card><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">Invoice Ninja</h3><p className="text-sm text-muted-foreground">Free cloud plan permanently at 5 clients, unlimited invoices (Jan 1 2026 update). Ninja Pro: $140/year (annual only). Self-hosted version is permanently free. Enterprise plans start at $180/year.</p></CardContent></Card>
              <Card><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">Wave</h3><p className="text-sm text-muted-foreground">Free permanently for US- and Canada-based users. Credit card processing: 2.9% + $0.30 per transaction. ACH: 1% (US only). Pro plan: $16/mo adds bank-import automation and priority support.</p></CardContent></Card>
              <Card><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">PayPal Invoicing</h3><p className="text-sm text-muted-foreground">Free to create and send invoices. Transaction fees: 3.49% + $0.49 per transaction (US online). Cross-border: PayPal's currency conversion spread (typically 3–4% above mid-market) on top of transaction fees. Total cross-border cost can reach 6–7% per transaction.</p></CardContent></Card>
              <Card><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">Stripe Invoicing</h3><p className="text-sm text-muted-foreground">No monthly subscription. Invoicing Starter: 0.4% per paid invoice (capped at $2.00). Standard card: 2.9% + $0.30. International card surcharge: 1.5%. Currency conversion: 1.0%. Dispute fee: $15 non-refundable per chargeback. Effective all-in rate for international transactions frequently exceeds 5%.</p></CardContent></Card>
              <Card className="border-primary/40 bg-primary/5">
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground mb-2">Invoicemonk</h3>
                  <p className="text-sm text-muted-foreground mb-3">Purpose-built for cross-border freelance invoicing — compliance-first invoice generation, multi-currency, automatic payment reminders, and payment tracking included.</p>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li><strong className="text-foreground">Starter — Free forever:</strong> 5 invoices/month, 5 clients, 1 currency account, watermark-free PDFs, accounting & expense tracking.</li>
                    <li><strong className="text-foreground">Pro — $15/mo:</strong> Unlimited invoices, unlimited clients, unlimited currency accounts, up to 5 team members, custom branding, full audit trail, data exports.</li>
                    <li><strong className="text-foreground">SME — $49/mo:</strong> Everything in Pro + online payments, advanced reports, premium templates, unlimited team.</li>
                    <li><strong className="text-foreground">Biz — Custom:</strong> E-invoicing & government submission, dedicated account manager, SLA guarantee.</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3"> The Free plan is permanent — there is no expiring trial. <Link to="/pricing" className="text-primary hover:underline">See full pricing</Link>.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Who should use each tool */}
          <div className="mt-16 prose prose-lg max-w-none text-muted-foreground space-y-4">
            <h2 className="text-heading-lg font-bold text-foreground">Who Should Use Each Tool</h2>
            <p><strong>Use Zoho Invoice</strong> if you are starting out, have fewer than 500 invoices per year, primarily invoice domestic clients, and want the most feature-complete free invoicing experience available without a subscription.</p>
            <p><strong>Use Invoice Ninja (self-hosted)</strong> if you are technically comfortable running your own server and want an unlimited free invoicing platform with no branding, no client cap, and complete control over your data and payment-gateway configuration.</p>
            <p><strong>Use Invoice Ninja (cloud)</strong> if you have 5 or fewer active clients, want a capable free cloud invoicing tool with broad payment-gateway coverage, and are comfortable with Invoice Ninja branding on your documents.</p>
            <p><strong>Use Wave</strong> if you are based in the United States or Canada, want free invoicing paired with a basic accounting layer, and bill domestic clients primarily.</p>
            <p><strong>Use PayPal Invoicing</strong> if most of your clients already pay via PayPal, you need the simplest possible setup with the widest geographic reach, and your invoice values are modest enough that the higher transaction fees are acceptable.</p>
            <p><strong>Use Stripe Invoicing</strong> if you are a developer or technical freelancer already integrated with Stripe's payment infrastructure, your business is registered in one of Stripe's 46 supported countries, and you want invoicing that connects directly to your existing Stripe account.</p>
            <p><strong>Use <Link to="/" className="text-primary hover:underline">Invoicemonk</Link></strong> if you are a freelancer billing clients in other countries, need invoices that automatically meet cross-border compliance requirements, want <Link to="/blog/setting-up-automatic-payment-reminders" className="text-primary hover:underline">payment reminders</Link> to fire without manual follow-up, and need payment tracking across a portfolio of international clients in multiple currencies.</p>

            <h2 className="text-heading-lg font-bold text-foreground">The Honest Recommendation for International Freelancers</h2>
            <p>Most roundups of free invoicing software are written for North American or European freelancers billing domestic clients. The free tools described above are genuinely excellent for that audience.</p>
            <p>For the international freelancer, here is the honest framework:</p>
            <p>If you are just starting out with one or two clients and need to send your first professional invoice today, start with <strong>Zoho Invoice</strong>. It is free, available in most countries, and covers everything you need as a starting freelancer.</p>
            <p>If you are based in a country where Zoho Invoice's payment gateways work reliably for your clients, Zoho Invoice may serve you well beyond the starting phase — up to the point where you hit the 500-invoice annual cap or need more than 3 projects simultaneously.</p>
            <p>If you are at the stage where cross-border compliance is causing payment delays, where a client's finance team has asked you to resubmit an invoice with additional fields, or where your invoice workflow is costing you significant time every week in manual follow-up and payment tracking, free tools are no longer the right optimisation. The cost of late payments, compliance errors, and manual follow-up time almost always exceeds the cost of a purpose-built tool.</p>
            <p>According to multiple industry sources, the average small business waits 23 days for invoice payment. A tool that sends automatic reminders, generates compliant cross-border invoices, and tracks payment status across your entire client portfolio consistently reduces that average. At a meaningful improvement in payment speed on $3,000 to $5,000 of monthly invoicing, the financial benefit of faster payment easily justifies the cost of a purpose-built invoicing platform.</p>
          </div>

          <div className="mt-12">
            <InlineSignupCTA
              variant="compact"
              heading="Ready to send compliant cross-border invoices?"
              body="Set up your first compliant international invoice in under 5 minutes. "
              buttonLabel="Try Invoicemonk"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Related Comparisons</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/best-invoicing-software" className="text-primary hover:underline">Best Invoicing Software Overall</Link>
              <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">Invoicemonk vs Wave</Link>
              <Link to="/compare/invoicemonk-vs-stripe-invoicing" className="text-primary hover:underline">Invoicemonk vs Stripe Invoicing</Link>
              <Link to="/compare/invoicemonk-vs-zoho" className="text-primary hover:underline">Invoicemonk vs Zoho</Link>
              <Link to="/compare/invoicemonk-vs-freshbooks" className="text-primary hover:underline">Invoicemonk vs FreshBooks</Link>
              <Link to="/compare/wave-alternatives" className="text-primary hover:underline">Wave Alternatives</Link>
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

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-md font-bold text-foreground mb-4">Sources and Further Reading</h2>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            {sources.map((s) => (
              <li key={s.url}>
                <span className="font-medium text-foreground">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Send compliant cross-border invoices — free to start</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Multi-currency, country-specific compliance, automatic reminders. The Free plan is permanent — </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
              <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=best_free_invoicing" target="_blank" rel="noopener noreferrer">Try Invoicemonk<ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/pricing">See full pricing<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
