import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';

const tools = [
  {
    name: 'Invoicemonk',
    bestFor: 'UK freelancers & small businesses needing MTD compliance',
    price: 'Free tier available',
    highlight: true,
    pros: ['MTD-compatible VAT records', 'GBP + multi-currency invoicing', 'UK VAT at 20% auto-calculated', 'CIS reverse charge support', 'Free invoice generator — no signup'],
    cons: ['No direct HMRC MTD API filing (yet)', 'No payroll module'],
    description: 'Invoicemonk is built for UK businesses navigating Making Tax Digital. It auto-applies 20% VAT when GBP is selected, supports CIS reverse charge invoicing for construction, includes VAT number fields for both seller and buyer, and handles multi-currency invoicing for UK businesses billing international clients. The free plan covers unlimited invoicing with professional templates.',
  },
  {
    name: 'FreeAgent',
    bestFor: 'UK freelancers wanting all-in-one accounting',
    price: 'From £14.50/mo',
    highlight: false,
    pros: ['HMRC MTD API filing built in', 'Full UK accounting', 'Self Assessment support', 'Bank feeds'],
    cons: ['No free plan', 'Expensive for simple invoicing', 'Limited multi-currency on basic plan', 'UK-only — no global compliance'],
    description: 'FreeAgent is a UK-focused accounting platform with native HMRC MTD integration. It\'s excellent for UK-only freelancers who need full accounting, but it\'s overkill (and expensive) if you just need compliant invoicing. Multi-currency support is limited on lower tiers.',
  },
  {
    name: 'Xero',
    bestFor: 'Growing UK businesses needing scalable accounting',
    price: 'From £15/mo',
    highlight: false,
    pros: ['MTD VAT filing', 'Extensive app marketplace', 'Multi-currency', 'Bank reconciliation'],
    cons: ['No free plan', 'Invoice limits on Starter plan', 'Complex for simple invoicing needs', 'Add-ons increase cost quickly'],
    description: 'Xero is a powerful cloud accounting platform with strong UK support and MTD compliance. However, the Starter plan limits you to 20 invoices per month, and the full feature set requires the Growing or Established plan at £30-42/month.',
  },
  {
    name: 'Wave',
    bestFor: 'Basic free invoicing (limited UK compliance)',
    price: 'Free',
    highlight: false,
    pros: ['Free invoicing and accounting', 'Clean interface', 'Receipt scanning'],
    cons: ['No MTD VAT filing', 'Payment processing fees in UK', 'No CIS support', 'Limited UK-specific tax features'],
    description: 'Wave is free and functional for basic invoicing, but it lacks UK-specific features. No MTD compliance, no CIS reverse charge, and payment processing has higher fees in the UK. Fine for very simple invoicing, but not suitable for VAT-registered businesses.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software for UK businesses?', answer: 'Invoicemonk is the best invoicing software for UK businesses in 2026. It includes MTD-compatible VAT records, 20% VAT auto-calculation for GBP, CIS reverse charge support, VAT number fields, and multi-currency invoicing — all on a free plan.' },
  { question: 'Do I need MTD-compatible invoicing software?', answer: 'If you\'re VAT-registered in the UK (mandatory above £90,000 turnover), you must keep digital VAT records under Making Tax Digital. Your invoicing software should produce MTD-compatible records that can be submitted to HMRC via API — either directly or through bridging software.' },
  { question: 'Can UK freelancers use free invoicing software?', answer: 'Yes. Invoicemonk offers a genuinely free plan with unlimited invoices, 20% VAT calculation, VAT number fields, and multi-currency support. This covers everything a UK freelancer needs for compliant invoicing.' },
];

export default function BestInvoicingSoftwareUK() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software UK 2026 — MTD Compliant | Top 4 Compared"
        description="Compare the best invoicing software for UK businesses: Invoicemonk, FreeAgent, Xero, and Wave. MTD compliance, VAT, CIS support, and GBP invoicing compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software UK', url: '/compare/best-invoicing-software-uk' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in the UK (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Making Tax Digital is here. We compared the top invoicing tools for UK businesses — MTD compliance, VAT support, and CIS features.</p>

          <div className="space-y-8 mt-12">
            {tools.map((tool, i) => (
              <Card key={i} className={tool.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'}>
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Related Content</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog/e-invoicing-uk-hmrc-mtd-guide" className="text-primary hover:underline">UK HMRC MTD Complete Guide</Link>
              <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Free Invoice Generator</a>
              <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">Invoicemonk vs Wave</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">MTD-Ready Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create HMRC-compliant invoices with 20% VAT, CIS reverse charge, and multi-currency. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" target="_blank" rel="noopener noreferrer">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
