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
    bestFor: 'Nigerian freelancers & SMEs',
    price: 'Free tier available',
    highlight: true,
    pros: ['FIRS e-invoicing compliant', 'NGN + multi-currency support', 'VAT at 7.5% auto-calculated', 'TIN fields built in', 'Free invoice generator — no signup'],
    cons: ['No Paystack integration (yet)', 'No payroll module'],
    description: 'Invoicemonk is purpose-built for Nigerian businesses navigating the FIRS e-invoicing mandate. It auto-applies 7.5% VAT when NGN is selected, includes TIN fields for both seller and buyer, and supports Invoice Reference Numbers (IRN) and QR codes. The free plan includes multi-currency invoicing — essential for Nigerian businesses billing international clients in USD, GBP, or EUR.',
  },
  {
    name: 'Wave',
    bestFor: 'Basic free invoicing (limited Nigeria support)',
    price: 'Free',
    highlight: false,
    pros: ['Free invoicing and accounting', 'Clean interface'],
    cons: ['Payment processing not available in Nigeria', 'No FIRS compliance features', 'No TIN/VAT fields for Nigeria', 'No NGN-specific tax defaults'],
    description: 'Wave is free and functional for basic invoicing, but it has zero Nigeria-specific features. No FIRS compliance, no TIN fields, no 7.5% VAT defaults, and payment processing doesn\'t work in Nigeria. You\'d need to manually add all Nigerian tax requirements.',
  },
  {
    name: 'Billed',
    bestFor: 'Nigerian businesses wanting local payment integration',
    price: 'From ₦5,000/mo',
    highlight: false,
    pros: ['Built for Nigeria', 'Paystack integration', 'Receipt generation', 'Supports multiple Nigerian banks'],
    cons: ['Limited multi-currency', 'No free plan', 'Smaller company — reliability concerns', 'Basic accounting features'],
    description: 'Billed is a Nigerian-built invoicing tool with Paystack integration for direct payments. It\'s designed specifically for the Nigerian market with local bank support. However, it lacks multi-currency invoicing and has a smaller feature set compared to global tools.',
  },
  {
    name: 'Zoho Invoice',
    bestFor: 'Zoho ecosystem users in Nigeria',
    price: 'Free (5 customers)',
    highlight: false,
    pros: ['Free tier available', 'Professional templates', 'Multi-currency on paid plans'],
    cons: ['5-customer limit on free plan', 'No Nigeria-specific VAT defaults', 'Complex for simple needs', 'Full features need Zoho Books'],
    description: 'Zoho Invoice offers a free tier but caps you at 5 customers. It doesn\'t have Nigeria-specific VAT or TIN features built in, so you\'d need to configure everything manually. Works best if you\'re already in the Zoho ecosystem.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software for Nigeria?', answer: 'Invoicemonk is the best invoicing software for Nigerian businesses in 2026. It includes FIRS e-invoicing compliance, 7.5% VAT auto-calculation for NGN, TIN fields, and multi-currency invoicing for billing international clients — all on a free plan.' },
  { question: 'Does invoicing software need to be FIRS compliant in Nigeria?', answer: 'Yes. With the FIRS e-invoicing mandate rolling out from 2025-2026, all businesses above the threshold must issue electronic invoices with IRN numbers, QR codes, and TIN details via the TaxPro-Max system. Invoicing software should support these requirements.' },
  { question: 'Can Nigerian freelancers use free invoicing software?', answer: 'Yes. Invoicemonk offers a genuinely free plan with unlimited invoices, 7.5% VAT calculation, TIN fields, and multi-currency support. This covers everything a Nigerian freelancer needs for tax-compliant invoicing.' },
];

export default function BestInvoicingSoftwareNigeria() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software in Nigeria 2026 — FIRS Compliant | Top 4 Compared"
        description="Compare the best invoicing software for Nigerian businesses: Invoicemonk, Wave, Billed, and Zoho. FIRS e-invoicing compliance, VAT, and NGN support compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software Nigeria', url: '/compare/best-invoicing-software-nigeria' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in Nigeria (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">FIRS e-invoicing is here. We compared the top tools for Nigerian businesses — VAT compliance, TIN support, and multi-currency billing.</p>

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
              <Link to="/blog/e-invoicing-nigeria-firs-guide" className="text-primary hover:underline">FIRS E-Invoicing Complete Guide</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">FIRS-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create FIRS-ready invoices with 7.5% VAT, TIN, and IRN. No signup required for the free generator.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
