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
    bestFor: 'Ghanaian freelancers & SMEs needing GRA compliance',
    price: 'Free tier available',
    highlight: true,
    pros: ['GRA-compliant invoice fields (TIN)', 'VAT at 15% + levies auto-calculated for GHS', 'Multi-currency (GHS, USD, GBP, EUR)', 'Free invoice generator — no signup', 'Expense tracking included'],
    cons: ['No direct GRA filing integration', 'No mobile money payment processing'],
    description: 'Invoicemonk handles Ghanaian tax complexity — standard VAT at 15%, plus NHIL (2.5%), GETFund (2.5%), and COVID levy (1%). When GHS is selected, it includes TIN fields and auto-applies the correct rates. The free plan covers multi-currency invoicing for billing international clients.',
  },
  {
    name: 'Wave',
    bestFor: 'Basic free invoicing (limited Ghana support)',
    price: 'Free',
    highlight: false,
    pros: ['Free invoicing and accounting', 'Clean interface', 'Receipt scanning'],
    cons: ['Payment processing unavailable in Ghana', 'No GRA compliance features', 'No TIN fields for Ghana', 'No GHS-specific tax defaults'],
    description: 'Wave is free but has zero Ghana-specific features. No GRA compliance, no TIN fields, no VAT/NHIL/GETFund defaults, and payment processing doesn\'t work in Ghana. You\'d manually configure all Ghanaian tax requirements.',
  },
  {
    name: 'Zoho Invoice',
    bestFor: 'Zoho ecosystem users',
    price: 'Free (5 customers)',
    highlight: false,
    pros: ['Free tier available', 'Professional templates', 'Multi-currency on paid plans'],
    cons: ['5-customer limit on free plan', 'No Ghana-specific tax defaults', 'Complex for simple needs', 'Full features need Zoho Books'],
    description: 'Zoho Invoice offers a free tier but caps at 5 customers. It doesn\'t have Ghana-specific VAT or TIN features built in. Works best if you\'re already in the Zoho ecosystem.',
  },
  {
    name: 'Sage Business Cloud',
    bestFor: 'Established Ghanaian businesses',
    price: 'From $10/mo',
    highlight: false,
    pros: ['Africa presence', 'Multi-currency', 'Accounting features', 'Inventory management'],
    cons: ['No free plan', 'Complex setup', 'Expensive for micro-businesses', 'Support response times'],
    description: 'Sage has a presence in Africa and offers multi-currency invoicing with accounting features. However, it\'s expensive for small businesses and requires significant setup to configure Ghanaian tax rates.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software for Ghana?', answer: 'Invoicemonk is the best invoicing software for Ghanaian businesses in 2026. It includes GRA-compliant TIN fields, auto-calculates VAT at 15% plus NHIL and GETFund levies, and supports multi-currency invoicing — all with a free plan.' },
  { question: 'What tax rates apply to Ghanaian invoices?', answer: 'Ghana applies standard VAT at 15%, plus NHIL at 2.5%, GETFund levy at 2.5%, and COVID-19 Health Recovery Levy at 1%. The effective tax rate is 21% on taxable goods and services.' },
  { question: 'Do I need a TIN for invoicing in Ghana?', answer: 'Yes. The Ghana Revenue Authority (GRA) requires all businesses to have a Tax Identification Number (TIN) displayed on invoices. Invoicemonk includes TIN fields by default when GHS is selected.' },
];

export default function BestInvoicingSoftwareGhana() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software in Ghana 2026 — GRA Compliant | Top 4 Compared"
        description="Compare the best invoicing software for Ghanaian businesses: Invoicemonk, Wave, Zoho, and Sage. GRA compliance, VAT, TIN, and GHS support compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software Ghana', url: '/compare/best-invoicing-software-ghana' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in Ghana (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">We compared the top invoicing tools for Ghanaian businesses — GRA compliance, VAT + levies, TIN support, and multi-currency billing.</p>

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
              <Link to="/blog/gra-invoice-requirements-ghana-compliance" className="text-primary hover:underline">GRA Invoice Requirements Guide</Link>
              <Link to="/free-invoice-generator-ghana" className="text-primary hover:underline">Free Invoice Generator Ghana</Link>
              <Link to="/compare/wave-alternatives" className="text-primary hover:underline">Wave Alternatives</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">GRA-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create GRA-ready invoices with VAT, NHIL, GETFund levies, and TIN. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator-ghana">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
