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
    bestFor: 'Kenyan freelancers & SMEs',
    price: 'Free tier available',
    highlight: true,
    pros: ['KRA PIN and eTIMS-aware fields', 'VAT at 16% auto-calculated for KES', 'Multi-currency for international billing', 'Free invoice generator — no signup', 'Compliance features for East Africa'],
    cons: ['No M-Pesa integration (yet)', 'No payroll module'],
    description: 'Invoicemonk supports Kenyan businesses with KRA-compliant invoicing features. When KES is selected, it auto-applies 16% VAT, includes KRA PIN fields, and formats invoices to meet eTIMS requirements. Multi-currency support is essential for Kenyan freelancers and consultants billing international clients in USD, GBP, or EUR.',
  },
  {
    name: 'Wave',
    bestFor: 'Basic free invoicing',
    price: 'Free',
    highlight: false,
    pros: ['Free invoicing and accounting', 'Clean interface'],
    cons: ['No eTIMS compliance', 'No KRA PIN fields', 'Payment processing not available in Kenya', 'No KES-specific tax defaults'],
    description: 'Wave offers free invoicing but has no Kenya-specific features. No KRA compliance, no eTIMS support, and payments don\'t work in Kenya. Suitable only for basic invoicing without local tax compliance.',
  },
  {
    name: 'Tally Solutions',
    bestFor: 'Larger Kenyan businesses with accounting needs',
    price: 'From KES 10,000/year',
    highlight: false,
    pros: ['Comprehensive accounting', 'VAT compliance', 'Inventory management', 'Multi-branch support'],
    cons: ['No free plan', 'Desktop-only (older versions)', 'Steep learning curve', 'Not designed for freelancers'],
    description: 'Tally is established in the East African accounting market. Strong for larger businesses needing inventory management and multi-branch accounting. However, it\'s complex, expensive, and not suited for freelancers or solopreneurs.',
  },
  {
    name: 'Zoho Invoice',
    bestFor: 'Zoho ecosystem users',
    price: 'Free (5 customers)',
    highlight: false,
    pros: ['Free tier available', 'Professional templates', 'Multi-currency on paid'],
    cons: ['5-customer limit on free plan', 'No Kenya-specific VAT defaults', 'No eTIMS support'],
    description: 'Zoho Invoice offers a free tier but limits you to 5 customers and lacks Kenya-specific tax features. Works best as part of the broader Zoho suite.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software in Kenya?', answer: 'Invoicemonk is the best invoicing software for Kenyan businesses in 2026. It includes KRA compliance features, 16% VAT auto-calculation for KES, KRA PIN fields, and multi-currency invoicing — all on a free plan.' },
  { question: 'Is eTIMS compliance mandatory for Kenyan businesses?', answer: 'Yes. The Kenya Revenue Authority (KRA) mandates eTIMS (electronic Tax Invoice Management System) for all VAT-registered businesses. All tax invoices must be generated through or reported to the eTIMS system, with proper serial numbers, QR codes, and control unit numbers.' },
  { question: 'Can I create free invoices in Kenya?', answer: 'Yes. Invoicemonk offers a free plan with unlimited invoices, 16% VAT calculation, KRA PIN fields, and multi-currency support — no signup required for the free generator.' },
];

export default function BestInvoicingSoftwareKenya() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software in Kenya 2026 — KRA eTIMS Compliant | Top 4"
        description="Compare the best invoicing software for Kenyan businesses: Invoicemonk, Wave, Tally, and Zoho. eTIMS compliance, VAT, and KES support compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software Kenya', url: '/compare/best-invoicing-software-kenya' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in Kenya (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">KRA eTIMS is mandatory. We compared the top invoicing tools for Kenyan businesses — VAT compliance, KRA PIN support, and multi-currency billing.</p>

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
              <Link to="/blog/e-invoicing-kenya-etims" className="text-primary hover:underline">KRA eTIMS Complete Guide</Link>
              <Link to="/free-invoice-generator" className="text-primary hover:underline">Free Invoice Generator</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">KRA-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create eTIMS-ready invoices with 16% VAT and KRA PIN. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
