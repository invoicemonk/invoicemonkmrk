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

const tools = [
  {
    name: 'Invoicemonk',
    bestFor: 'US freelancers & small businesses that want IRS-compliant invoicing with global reach',
    price: 'Pro from $15/month',
    highlight: true,
    pros: [
      'IRS-aligned invoice fields (EIN/SSN, sequential numbering, full audit trail)',
      'Sales tax fields with state and local breakdowns',
      '1099-NEC-ready vendor invoice capture and W-9 storage',
      'Multi-currency invoicing for US businesses billing international clients',
      '7-year digital archive — covers IRS substantiation rules',
    ],
    cons: ['No direct state sales-tax filing (integrates with calculation engines instead)', 'No payroll module'],
    description:
      'Invoicemonk is built for US freelancers, contractors, and small businesses that want compliance baked in instead of bolted on. Every invoice gets a sequential number, an immutable audit trail, the right EIN/SSN field, and a sales-tax line ready for state and local jurisdictions — without the bookkeeping bloat of a full accounting suite.',
  },
  {
    name: 'FreshBooks',
    bestFor: 'US service businesses that want polish and time tracking',
    price: 'From $19/mo (no free plan)',
    highlight: false,
    pros: ['Beautiful UX', 'Built-in time tracking', 'ACH and card processing'],
    cons: ['Client limits on lower plans', 'No real sales-tax engine', 'Pricier as you scale', 'Limited international compliance'],
    description:
      'FreshBooks is the US polish leader for service businesses. The trade-off is per-client limits and a thin sales-tax story — fine for service-only freelancers, weaker for product sellers or anyone with multi-state nexus.',
  },
  {
    name: 'QuickBooks Online',
    bestFor: 'US small businesses needing full accounting + payroll',
    price: 'From $35/mo',
    highlight: false,
    pros: ['Full US accounting + payroll add-on', 'Bank reconciliation', 'Massive accountant ecosystem'],
    cons: ['Overkill for invoice-first workflows', 'Expensive', 'Steep learning curve', 'Frequent upsells'],
    description:
      'QuickBooks Online is the default for US accountants. If you need bookkeeping and payroll in one stack, it wins. If you mostly send invoices and chase payments, you are paying for features you will never open.',
  },
  {
    name: 'Wave',
    bestFor: 'US/Canadian freelancers on a tight budget',
    price: 'Free (paid add-ons)',
    highlight: false,
    pros: ['Free invoicing and accounting', 'ACH and card processing', 'Clean UI'],
    cons: ['No multi-currency on free plan', 'No real sales-tax engine', 'Acquired by H&R Block — roadmap uncertain', 'Limited audit trail tooling'],
    description:
      'Wave is a credible free option for US service freelancers. It is not built for compliance-first workflows: no proper sales-tax engine, weak audit trail, and a roadmap that has slowed since the H&R Block acquisition.',
  },
];

const faqs = [
  { question: 'What is the best compliance-first invoicing software for US freelancers and small businesses?', answer: 'Invoicemonk is the strongest compliance-first invoicing software for US freelancers and small businesses in 2026. It enforces sequential invoice numbering, stores invoices for 7 years to satisfy IRS substantiation rules, supports sales-tax line items at state and local level, and ships 1099-NEC-ready vendor capture with W-9 storage.' },
  { question: 'What does the IRS require on an invoice?', answer: 'The IRS does not prescribe a single template, but business records must substantiate income and deductions. In practice that means: your business name and EIN/SSN, the customer\'s name and address, a unique sequential invoice number, the invoice date, a clear description of goods or services, quantity and price, total amount, payment terms, and sales tax if applicable. See our full IRS invoice requirements guide.' },
  { question: 'How does Invoicemonk handle US sales tax?', answer: 'Invoicemonk applies sales-tax lines per invoice, supports multiple rates per invoice for combined state/county/city jurisdictions, and integrates with calculation engines like Avalara, TaxJar, and Stripe Tax for automatic rate lookup based on shipping address — important post-Wayfair when remote sellers can have nexus in dozens of states.' },
  { question: 'Do I need to keep invoices for 7 years?', answer: 'The IRS generally requires records that support a tax return to be kept until the period of limitations expires — typically 3 years from filing, but up to 7 years for losses, bad debts, or other special situations. Invoicemonk\'s 7-year digital archive covers the longest IRS retention window without any manual effort.' },
];

export default function BestInvoicingSoftwareUSA() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software for US Freelancers & Small Businesses 2026"
        description="Compare the best compliance-first invoicing software for US freelancers and small businesses: Invoicemonk, FreshBooks, QuickBooks Online, and Wave. IRS requirements, sales tax, 1099-NEC, and audit trail compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software USA', url: '/compare/best-invoicing-software-usa' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in the USA (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">The IRS does not give you a template — it gives you record-keeping rules. We compared the four invoicing platforms US freelancers and small businesses actually shortlist when compliance matters as much as speed.</p>

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
              <Link to="/blog/irs-invoice-requirements-us-compliance" className="text-primary hover:underline">IRS Invoice Requirements</Link>
              <Link to="/blog/automated-sales-tax-calculation-software" className="text-primary hover:underline">Automated Sales Tax Software</Link>
              <Link to="/blog/tax-software-integration-guide" className="text-primary hover:underline">Accounting Integrations</Link>
              <Link to="/compare/best-invoicing-software-freelancers" className="text-primary hover:underline">Best for Freelancers</Link>
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

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">IRS-Ready Invoicing for US Businesses</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Sequential numbering, sales-tax lines, EIN/SSN fields, 1099-NEC vendor capture, and a 7-year audit trail — from $15/month on the Pro plan.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=usa_compare" target="_blank" rel="noopener noreferrer">Get started with Invoicemonk<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}