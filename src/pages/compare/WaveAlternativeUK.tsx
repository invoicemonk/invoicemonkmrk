import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';

const comparisonPoints = [
  { feature: 'MTD VAT compliance', wave: false, invoicemonk: true },
  { feature: 'UK VAT at 20% auto-calculated', wave: false, invoicemonk: true },
  { feature: 'CIS reverse charge invoicing', wave: false, invoicemonk: true },
  { feature: 'Multi-currency invoicing', wave: true, invoicemonk: true },
  { feature: 'Free plan available', wave: true, invoicemonk: true },
  { feature: 'VAT number fields (seller + buyer)', wave: false, invoicemonk: true },
  { feature: 'Professional invoice templates', wave: true, invoicemonk: true },
  { feature: 'PDF download', wave: true, invoicemonk: true },
  { feature: 'Payment processing in UK', wave: true, invoicemonk: false },
  { feature: 'No signup required', wave: false, invoicemonk: true },
];

const faqs = [
  { question: 'Why switch from Wave to Invoicemonk in the UK?', answer: 'Wave lacks UK-specific compliance features: no MTD VAT support, no CIS reverse charge invoicing, no automatic 20% VAT for GBP, and no VAT number fields. Invoicemonk includes all of these on its free plan, plus multi-currency invoicing for UK businesses billing internationally.' },
  { question: 'Is Wave free in the UK?', answer: 'Wave\'s invoicing is free, but payment processing charges fees (2.9% + 20p for cards). Wave also lacks UK tax compliance features, meaning you\'d need additional software for MTD compliance — adding hidden costs.' },
  { question: 'Can I import my Wave data into Invoicemonk?', answer: 'Yes. Export your client list and invoice history from Wave as CSV, then import into Invoicemonk. Your invoice numbering can continue from where Wave left off.' },
];

export default function WaveAlternativeUK() {
  return (
    <Layout>
      <SEOHead
        title="Best Wave Alternative for UK Businesses 2026 — MTD Compliant"
        description="Looking for a Wave alternative in the UK? Compare Wave vs Invoicemonk for MTD compliance, VAT, CIS reverse charge, and free UK invoicing."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Wave Alternative UK', url: '/compare/wave-alternative-uk' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Wave Alternative for UK Businesses (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Wave is free but lacks UK compliance features. Here's how Invoicemonk compares — with MTD support, VAT auto-calculation, and CIS reverse charge.</p>

          <Card className="mt-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 text-center font-semibold text-sm border-b p-4">
                <div className="text-left">Feature</div>
                <div>Wave</div>
                <div className="text-primary">Invoicemonk</div>
              </div>
              {comparisonPoints.map((point, i) => (
                <div key={i} className={`grid grid-cols-3 text-center text-sm p-4 ${i % 2 === 0 ? 'bg-muted/30' : ''}`}>
                  <div className="text-left text-muted-foreground">{point.feature}</div>
                  <div>{point.wave ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> : <X className="w-4 h-4 text-red-400 mx-auto" />}</div>
                  <div>{point.invoicemonk ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> : <X className="w-4 h-4 text-red-400 mx-auto" />}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/free-invoice-generator">Try Invoicemonk Free<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Related Content</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/compare/best-invoicing-software-uk" className="text-primary hover:underline">Best Invoicing Software UK</Link>
              <Link to="/blog/e-invoicing-uk-hmrc-mtd-guide" className="text-primary hover:underline">UK HMRC MTD Guide</Link>
              <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">Invoicemonk vs Wave (Global)</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">Switch from Wave — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Get MTD-ready invoicing with UK VAT, CIS support, and multi-currency. No signup required for the free generator.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
