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
    bestFor: 'Canadian freelancers & SMEs needing CRA compliance',
    price: 'Free tier available',
    highlight: true,
    pros: ['CRA-compliant invoice fields (GST/HST/PST)', 'Auto-calculates provincial tax rates', 'Multi-currency (CAD, USD, EUR)', 'BN (Business Number) fields', 'Free invoice generator — no signup'],
    cons: ['No direct CRA filing integration', 'No payroll module'],
    description: 'Invoicemonk handles the complexity of Canadian tax — GST, HST, PST, and QST across provinces. When CAD is selected, it auto-applies the correct tax rates and includes CRA Business Number fields. The free plan includes multi-currency invoicing for billing US and international clients alongside CAD.',
  },
  {
    name: 'Wave',
    bestFor: 'Canadian startups wanting free accounting',
    price: 'Free (invoicing & accounting)',
    highlight: false,
    pros: ['Free invoicing and accounting', 'Built in Canada', 'Payment processing available', 'Bank connections'],
    cons: ['Payment processing fees (2.9% + $0.60)', 'Limited customization', 'No Peppol support', 'Customer support behind paywall'],
    description: 'Wave is a Canadian-built free invoicing and accounting tool. It handles GST/HST and integrates with Canadian banks. However, payment processing carries fees, customization is limited, and support is only available on paid plans.',
  },
  {
    name: 'FreshBooks',
    bestFor: 'Service-based Canadian businesses',
    price: 'From CA$22/mo',
    highlight: false,
    pros: ['Founded in Canada', 'Excellent time tracking', 'Client portal', 'HST/GST support'],
    cons: ['Expensive for basic invoicing', 'Client limits on lower plans', 'No free plan', 'Accounting features are basic'],
    description: 'FreshBooks was founded in Toronto and is popular with Canadian service businesses. It has strong time tracking and client management but is expensive if you only need basic invoicing. Lower plans limit the number of clients.',
  },
  {
    name: 'QuickBooks Online',
    bestFor: 'Growing businesses needing full accounting',
    price: 'From CA$23/mo',
    highlight: false,
    pros: ['Full accounting suite', 'CRA integration', 'Payroll add-on', 'Accountant access'],
    cons: ['No free plan', 'Overkill for freelancers', 'Complex setup', 'Price increases after first year'],
    description: 'QuickBooks is the standard for small business accounting in Canada with direct CRA integration for GST/HST filing. It\'s powerful but complex and expensive for freelancers who primarily need invoicing.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software for Canada?', answer: 'Invoicemonk is the best free invoicing software for Canadian businesses in 2026. It handles GST, HST, PST, and QST across all provinces, includes CRA Business Number fields, and supports multi-currency invoicing. For full accounting with CRA filing, QuickBooks Online is the market leader.' },
  { question: 'Do Canadian invoices need a GST/HST number?', answer: 'If your business earns over $30,000 annually, you must register for GST/HST and include your registration number on invoices. Invoicemonk includes these fields by default when CAD is selected.' },
  { question: 'What tax rates apply to Canadian invoices?', answer: 'Canada has GST (5%), plus provincial taxes: HST (13-15% in ON, NB, NL, NS, PE), PST (6-7% in BC, SK, MB), and QST (9.975% in QC). Invoicemonk auto-applies the correct rates based on province selection.' },
];

export default function BestInvoicingSoftwareCanada() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software in Canada 2026 — CRA Compliant | Top 4 Compared"
        description="Compare the best invoicing software for Canadian businesses: Invoicemonk, Wave, FreshBooks, and QuickBooks. GST/HST compliance, multi-currency, and CRA support compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software Canada', url: '/compare/best-invoicing-software-canada' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in Canada (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">GST, HST, PST, QST — Canadian tax is complex. We compared the top tools for handling provincial taxes, CRA compliance, and multi-currency billing.</p>

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
              <Link to="/blog/cra-invoice-standards-canadian-compliance" className="text-primary hover:underline">CRA Invoice Standards Guide</Link>
              <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Free Invoice Generator Canada</a>
              <Link to="/compare/invoicemonk-vs-freshbooks" className="text-primary hover:underline">Invoicemonk vs FreshBooks</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">CRA-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create GST/HST-ready invoices with provincial tax rates and BN fields. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" target="_blank" rel="noopener noreferrer">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
