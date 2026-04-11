import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';

const faqs = [
  { question: 'Why is Wave not ideal for Nigerian businesses?', answer: 'Wave\'s payment processing doesn\'t work in Nigeria, there are no FIRS compliance features, no TIN fields, and no 7.5% VAT defaults for NGN. Nigerian businesses need invoicing software with local tax compliance built in.' },
  { question: 'What is the best Wave alternative for Nigeria?', answer: 'Invoicemonk is the best Wave alternative for Nigerian businesses. It matches Wave\'s free pricing while adding FIRS e-invoicing compliance, 7.5% VAT auto-calculation, TIN fields, and multi-currency support for billing international clients.' },
  { question: 'Is Invoicemonk free for Nigerian businesses?', answer: 'Yes. Invoicemonk\'s free plan includes unlimited invoices, 7.5% VAT calculation, TIN fields, multi-currency support, and expense tracking. No credit card or signup required for the free invoice generator.' },
];

export default function WaveAlternativeNigeria() {
  return (
    <Layout>
      <SEOHead
        title="Best Wave Alternative for Nigeria 2026 — FIRS Compliant Free Invoicing"
        description="Wave doesn't support Nigerian payments or FIRS compliance. Compare the best Wave alternatives for Nigerian businesses — free invoicing with VAT, TIN, and multi-currency."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Wave Alternative Nigeria', url: '/compare/wave-alternative-nigeria' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Wave Alternative for Nigerian Businesses</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Wave is free — but its payment processing doesn't work in Nigeria, and it lacks FIRS compliance. Here's what to use instead.</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
            <h2 className="text-heading-md font-bold text-foreground">Why Wave Falls Short in Nigeria</h2>
            <p>Wave is excellent free invoicing software for US and Canadian businesses. But for Nigerian businesses, it has critical gaps:</p>
            <ul>
              <li><strong>No payment processing</strong> — Wave's payments are US/Canada only. Nigerian clients can't pay via Wave.</li>
              <li><strong>No FIRS compliance</strong> — no TIN fields, no IRN generation, no TaxPro-Max integration.</li>
              <li><strong>No 7.5% VAT default</strong> — you'd manually calculate and add Nigerian VAT every time.</li>
              <li><strong>No multi-currency</strong> — the free plan doesn't support NGN alongside USD/GBP/EUR.</li>
            </ul>
          </div>

          <Card className="border-primary ring-1 ring-primary/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-lg font-bold text-foreground">Our Recommendation: Invoicemonk</h2>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Best Wave Alternative for Nigeria</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Free tier available · FIRS compliant</p>
              <p className="text-muted-foreground text-sm mb-4">Invoicemonk matches Wave's free pricing while solving every Nigerian-specific gap. FIRS e-invoicing compliance, 7.5% VAT auto-calculation, TIN fields for seller and buyer, IRN and QR code support, and multi-currency invoicing for billing international clients — all on the free plan.</p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6">Wave vs Invoicemonk for Nigeria</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b"><th className="text-left py-2 pr-4">Feature</th><th className="text-center py-2 px-4">Wave</th><th className="text-center py-2 px-4">Invoicemonk</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border/50"><td className="py-2 pr-4">Free plan</td><td className="text-center py-2 px-4"><CheckCircle className="w-4 h-4 text-green-600 mx-auto" /></td><td className="text-center py-2 px-4"><CheckCircle className="w-4 h-4 text-green-600 mx-auto" /></td></tr>
                    <tr className="border-b border-border/50"><td className="py-2 pr-4">Payments in Nigeria</td><td className="text-center py-2 px-4 text-red-500">✗</td><td className="text-center py-2 px-4 text-muted-foreground">Coming soon</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2 pr-4">FIRS e-invoicing</td><td className="text-center py-2 px-4 text-red-500">✗</td><td className="text-center py-2 px-4"><CheckCircle className="w-4 h-4 text-green-600 mx-auto" /></td></tr>
                    <tr className="border-b border-border/50"><td className="py-2 pr-4">TIN fields</td><td className="text-center py-2 px-4 text-red-500">✗</td><td className="text-center py-2 px-4"><CheckCircle className="w-4 h-4 text-green-600 mx-auto" /></td></tr>
                    <tr className="border-b border-border/50"><td className="py-2 pr-4">7.5% VAT default (NGN)</td><td className="text-center py-2 px-4 text-red-500">✗</td><td className="text-center py-2 px-4"><CheckCircle className="w-4 h-4 text-green-600 mx-auto" /></td></tr>
                    <tr className="border-b border-border/50"><td className="py-2 pr-4">Multi-currency (free)</td><td className="text-center py-2 px-4 text-red-500">✗</td><td className="text-center py-2 px-4"><CheckCircle className="w-4 h-4 text-green-600 mx-auto" /></td></tr>
                    <tr><td className="py-2 pr-4">Expense tracking</td><td className="text-center py-2 px-4"><CheckCircle className="w-4 h-4 text-green-600 mx-auto" /></td><td className="text-center py-2 px-4"><CheckCircle className="w-4 h-4 text-green-600 mx-auto" /></td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Related Content</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">Invoicemonk vs Wave (Detailed)</Link>
              <Link to="/compare/best-invoicing-software-nigeria" className="text-primary hover:underline">Best Invoicing Software in Nigeria</Link>
              <Link to="/blog/e-invoicing-nigeria-firs-guide" className="text-primary hover:underline">FIRS E-Invoicing Guide</Link>
              <Link to="/compare/wave-alternatives" className="text-primary hover:underline">Wave Alternatives (Global)</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">Switch from Wave — Free, FIRS-Compliant</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create FIRS-ready invoices with 7.5% VAT, TIN, and multi-currency. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
