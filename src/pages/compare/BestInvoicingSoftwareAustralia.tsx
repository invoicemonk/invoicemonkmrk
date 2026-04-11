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
    bestFor: 'Australian freelancers & SMEs needing ATO compliance',
    price: 'Free tier available',
    highlight: true,
    pros: ['ATO-compliant invoice fields (ABN, GST)', '10% GST auto-calculated for AUD', 'Peppol e-invoicing support', 'Multi-currency for international clients', 'Free invoice generator — no signup'],
    cons: ['No direct ATO BAS lodgement', 'No payroll module'],
    description: 'Invoicemonk is purpose-built for Australian businesses navigating ATO requirements. It auto-applies 10% GST when AUD is selected, includes ABN fields for both seller and buyer, and generates Peppol-ready invoices for government suppliers. The free plan covers multi-currency invoicing — essential for Australian businesses billing in USD, GBP, or EUR alongside AUD.',
  },
  {
    name: 'Xero',
    bestFor: 'Established businesses wanting full accounting',
    price: 'From AU$29/mo',
    highlight: false,
    pros: ['Australia\'s leading accounting platform', 'Direct bank feeds', 'BAS lodgement integration', 'Extensive app marketplace'],
    cons: ['No free plan', 'Expensive for basic invoicing', 'Complex for freelancers', 'Invoice limits on Starter plan'],
    description: 'Xero is the dominant accounting platform in Australia with deep ATO integration including direct BAS lodgement. However, it\'s expensive for businesses that only need invoicing, and the Starter plan limits you to 20 invoices per month.',
  },
  {
    name: 'MYOB',
    bestFor: 'Traditional Australian businesses',
    price: 'From AU$25/mo',
    highlight: false,
    pros: ['Built for Australia', 'Payroll included', 'BAS and STP compliance', 'Bank feeds'],
    cons: ['No free plan', 'Dated interface', 'Steep learning curve', 'Expensive for solo operators'],
    description: 'MYOB is an Australian institution with decades of local market experience. It offers payroll, BAS, and Single Touch Payroll (STP) compliance. However, the interface feels dated and it\'s overpriced for freelancers or micro-businesses that primarily need invoicing.',
  },
  {
    name: 'Zoho Invoice',
    bestFor: 'Zoho ecosystem users in Australia',
    price: 'Free (5 customers)',
    highlight: false,
    pros: ['Free tier available', 'Professional templates', 'Time tracking included'],
    cons: ['5-customer limit on free plan', 'No Australia-specific GST defaults', 'Full features need Zoho Books', 'Limited BAS support'],
    description: 'Zoho Invoice offers a free tier but limits you to 5 customers. It doesn\'t have Australian GST defaults or ABN fields built in, so manual configuration is needed. Best if you\'re already in the Zoho ecosystem.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software for Australia?', answer: 'Invoicemonk is the best invoicing software for Australian businesses in 2026. It includes ATO-compliant fields (ABN, GST at 10%), Peppol e-invoicing for government contracts, and multi-currency support — all with a free plan. For full accounting with BAS lodgement, Xero is the market leader.' },
  { question: 'Do Australian invoices need an ABN?', answer: 'Yes. The ATO requires a valid ABN on all tax invoices. Without an ABN, the payer must withhold 47% of the payment amount. Invoicemonk includes ABN fields by default when AUD is selected.' },
  { question: 'Is Peppol e-invoicing mandatory in Australia?', answer: 'Peppol e-invoicing is mandatory for businesses supplying to Australian Government agencies. For B2B transactions, it\'s voluntary but encouraged. The government is incentivizing adoption through the Peppol network.' },
];

export default function BestInvoicingSoftwareAustralia() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software in Australia 2026 — ATO Compliant | Top 4 Compared"
        description="Compare the best invoicing software for Australian businesses: Invoicemonk, Xero, MYOB, and Zoho. ATO compliance, GST, ABN, and Peppol support compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software Australia', url: '/compare/best-invoicing-software-australia' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in Australia (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">We compared the top invoicing tools for Australian businesses — ATO compliance, GST handling, ABN support, and Peppol e-invoicing readiness.</p>

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
              <Link to="/blog/ato-invoice-requirements-australian-compliance" className="text-primary hover:underline">ATO Invoice Requirements Guide</Link>
              <Link to="/free-invoice-generator-australia" className="text-primary hover:underline">Free Invoice Generator Australia</Link>
              <Link to="/compare/invoicemonk-vs-atoinvoice" className="text-primary hover:underline">Invoicemonk vs ATO Invoice</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">ATO-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create ATO-ready invoices with 10% GST, ABN, and Peppol support. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator-australia">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
