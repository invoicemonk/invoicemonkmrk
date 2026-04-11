import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';

const faqs = [
  { question: 'Why is Wave not ideal for South African businesses?', answer: 'Wave\'s payment processing doesn\'t work in South Africa, there are no SARS compliance features, no tax reference number fields, and no 15% VAT defaults for ZAR. South African businesses need invoicing software with local tax compliance built in.' },
  { question: 'What is the best Wave alternative for South Africa?', answer: 'Invoicemonk is the best free Wave alternative for South African businesses. It matches Wave\'s free pricing while adding SARS-compliant fields, 15% VAT auto-calculation, tax reference numbers, and multi-currency support for international clients.' },
  { question: 'Is Invoicemonk free for South African businesses?', answer: 'Yes. Invoicemonk\'s free plan includes unlimited invoices, 15% VAT calculation, tax reference number fields, multi-currency support, and expense tracking. No credit card or signup required for the free invoice generator.' },
];

export default function WaveAlternativeSouthAfrica() {
  return (
    <Layout>
      <SEOHead
        title="Best Wave Alternative for South Africa 2026 — SARS Compliant Free Invoicing"
        description="Wave doesn't support South African payments or SARS compliance. Compare the best Wave alternatives for SA businesses — free invoicing with VAT 15% and tax reference numbers."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Wave Alternative South Africa', url: '/compare/wave-alternative-south-africa' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Wave Alternative for South African Businesses</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Wave is free — but its payment processing doesn't work in South Africa, and it lacks SARS compliance. Here's what to use instead.</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
            <h2 className="text-heading-md font-bold text-foreground">Why Wave Falls Short in South Africa</h2>
            <p>Wave is excellent free invoicing software for US and Canadian businesses. But for South African businesses, it has critical gaps:</p>
            <ul>
              <li><strong>No payment processing</strong> — Wave's payments are US/Canada only. SA clients can't pay via Wave.</li>
              <li><strong>No SARS compliance</strong> — no tax reference number fields, no automatic VAT at 15%.</li>
              <li><strong>No ZAR defaults</strong> — you'd manually configure currency and tax rates every time.</li>
              <li><strong>No multi-currency</strong> — ZAR alongside USD/GBP/EUR requires manual setup.</li>
            </ul>

            <h2 className="text-heading-md font-bold text-foreground">What SA Businesses Actually Need</h2>
            <p>South African invoicing software must handle:</p>
            <ul>
              <li><strong>Tax invoice labeling</strong> — SARS requires the words "Tax Invoice" on all VAT invoices</li>
              <li><strong>VAT at 15%</strong> — auto-calculated and displayed as a separate line</li>
              <li><strong>VAT vendor number</strong> — mandatory for VAT-registered businesses</li>
              <li><strong>Multi-currency</strong> — ZAR, USD, GBP, EUR for international billing</li>
            </ul>
          </div>

          <Card className="border-primary ring-1 ring-primary/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-lg font-bold text-foreground">Our Recommendation: Invoicemonk</h2>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Best Wave Alternative for SA</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Invoicemonk matches Wave's free pricing while adding everything South African businesses need: SARS-compliant fields, 15% VAT auto-calculation, tax reference numbers, and multi-currency support including ZAR.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-medium text-green-700 mb-2">Why Switch from Wave</p>
                  <ul className="space-y-1">
                    {['SARS-compliant tax invoice fields', '15% VAT auto-calculated for ZAR', 'Tax reference number fields', 'Multi-currency (ZAR + international)', 'Free — no credit card required'].map((p, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Wave vs Invoicemonk</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✗ Wave: No SA payments → ✓ Invoicemonk: Multi-currency invoicing</li>
                    <li>✗ Wave: No SARS fields → ✓ Invoicemonk: Full compliance</li>
                    <li>✗ Wave: No VAT default → ✓ Invoicemonk: 15% auto-applied</li>
                    <li>✗ Wave: No ZAR support → ✓ Invoicemonk: ZAR + multi-currency</li>
                  </ul>
                </div>
              </div>
              <Button className="w-full sm:w-auto" asChild>
                <Link to="/free-invoice-generator-south-africa">Try Free Invoice Generator South Africa<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Related Content</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/compare/best-invoicing-software-south-africa" className="text-primary hover:underline">Best Invoicing Software South Africa</Link>
              <Link to="/blog/sars-invoice-requirements-south-africa" className="text-primary hover:underline">SARS Invoice Requirements</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">SARS-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Switch from Wave to Invoicemonk. Same free price, but with VAT 15%, SARS fields, and ZAR support.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator-south-africa">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
