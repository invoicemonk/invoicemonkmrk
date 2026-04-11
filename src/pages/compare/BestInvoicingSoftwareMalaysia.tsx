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
    bestFor: 'Malaysian freelancers & SMEs preparing for MyInvois',
    price: 'Free tier available',
    highlight: true,
    pros: ['MyInvois-ready invoice fields', 'MYR + multi-currency invoicing', 'SST support', 'Professional templates with TIN fields', 'Free invoice generator — no signup'],
    cons: ['No direct LHDN MyInvois API integration (yet)', 'No Bahasa Malaysia UI'],
    description: 'Invoicemonk helps Malaysian businesses prepare for the MyInvois e-invoicing mandate. It includes TIN fields for seller and buyer, SST calculation support, MYR currency with proper formatting, and multi-currency invoicing for businesses billing internationally. The free plan covers unlimited invoicing with 6 professional templates.',
  },
  {
    name: 'SQL Account',
    bestFor: 'Malaysian SMEs needing full accounting + MyInvois',
    price: 'From RM 600/year',
    highlight: false,
    pros: ['LHDN MyInvois certified', 'Full accounting suite', 'SST compliance', 'Popular in Malaysia'],
    cons: ['Desktop-based (not cloud)', 'No free plan', 'Limited multi-currency', 'Outdated interface'],
    description: 'SQL Account is Malaysia\'s most widely used accounting software with MyInvois certification. However, it\'s desktop-based, requires installation, and has a dated interface. Good for traditional businesses, less ideal for freelancers or cloud-first companies.',
  },
  {
    name: 'Biztory',
    bestFor: 'Malaysian cloud accounting with MyInvois',
    price: 'From RM 50/mo',
    highlight: false,
    pros: ['Cloud-based', 'MyInvois integration', 'SST compliance', 'Mobile app'],
    cons: ['No free plan', 'Limited invoice templates', 'Malaysia-only', 'Basic reporting'],
    description: 'Biztory is a Malaysian cloud accounting platform with MyInvois integration and SST support. It\'s affordable and cloud-native, but it\'s focused exclusively on the Malaysian market with limited global features.',
  },
  {
    name: 'Wave',
    bestFor: 'Basic free invoicing (no Malaysia compliance)',
    price: 'Free',
    highlight: false,
    pros: ['Free invoicing', 'Clean interface', 'Basic accounting'],
    cons: ['No MyInvois support', 'No SST features', 'No MYR tax defaults', 'Payment processing unavailable in Malaysia'],
    description: 'Wave is free but has zero Malaysian compliance features. No MyInvois support, no SST, no TIN fields, and payment processing doesn\'t work in Malaysia. Not recommended for Malaysian businesses preparing for the e-invoicing mandate.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software for Malaysia?', answer: 'Invoicemonk is among the best invoicing tools for Malaysian businesses in 2026. It includes MyInvois-ready fields, SST support, TIN fields, MYR formatting, and multi-currency invoicing — all on a free plan.' },
  { question: 'Is MyInvois e-invoicing mandatory in Malaysia?', answer: 'Yes. LHDN\'s MyInvois e-invoicing is being rolled out in phases. Businesses with RM100M+ annual turnover were mandated from August 2024. All remaining businesses must comply by July 2025. The system requires electronic submission of invoices to LHDN for validation.' },
  { question: 'What is SST and how does it affect invoicing?', answer: 'SST (Sales and Service Tax) replaced GST in Malaysia in 2018. Sales Tax is 5-10% on manufactured goods, and Service Tax is 8% on prescribed services. Your invoicing software should correctly apply SST rates and include your SST registration number on invoices.' },
];

export default function BestInvoicingSoftwareMalaysia() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software Malaysia 2026 — MyInvois Ready | Top 4 Compared"
        description="Compare the best invoicing software for Malaysian businesses: Invoicemonk, SQL Account, Biztory, and Wave. MyInvois compliance, SST, and MYR invoicing compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software Malaysia', url: '/compare/best-invoicing-software-malaysia' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in Malaysia (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">MyInvois e-invoicing is rolling out. We compared the top tools for Malaysian businesses — LHDN compliance, SST support, and MYR invoicing.</p>

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
              <Link to="/blog/e-invoicing-malaysia-myinvois-guide" className="text-primary hover:underline">MyInvois Complete Guide</Link>
              <Link to="/free-invoice-generator" className="text-primary hover:underline">Free Invoice Generator</Link>
              <Link to="/guides/e-invoicing-mandates" className="text-primary hover:underline">E-Invoicing Mandates by Country</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">MyInvois-Ready Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create LHDN-compliant invoices with SST, TIN fields, and multi-currency. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
