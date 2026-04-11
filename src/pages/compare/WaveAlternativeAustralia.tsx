import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';

const faqs = [
  { question: 'Why is Wave not ideal for Australian businesses?', answer: 'Wave\'s payment processing doesn\'t work in Australia, there are no ATO compliance features, no ABN fields, and no 10% GST defaults for AUD. Australian businesses need invoicing software with local tax compliance built in.' },
  { question: 'What is the best Wave alternative for Australia?', answer: 'Invoicemonk is the best free Wave alternative for Australian businesses. It matches Wave\'s free pricing while adding ATO-compliant fields (ABN, GST at 10%), Peppol e-invoicing support, and multi-currency for international clients.' },
  { question: 'Is Invoicemonk free for Australian businesses?', answer: 'Yes. Invoicemonk\'s free plan includes unlimited invoices, 10% GST calculation, ABN fields, multi-currency support, and expense tracking. No credit card or signup required for the free invoice generator.' },
];

export default function WaveAlternativeAustralia() {
  return (
    <Layout>
      <SEOHead
        title="Best Wave Alternative for Australia 2026 — ATO Compliant Free Invoicing"
        description="Wave doesn't support Australian payments or ATO compliance. Compare the best Wave alternatives for Australian businesses — free invoicing with GST, ABN, and Peppol."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Wave Alternative Australia', url: '/compare/wave-alternative-australia' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Wave Alternative for Australian Businesses</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Wave is free — but its payment processing doesn't work in Australia, and it lacks ATO compliance. Here's what to use instead.</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
            <h2 className="text-heading-md font-bold text-foreground">Why Wave Falls Short in Australia</h2>
            <p>Wave is excellent free invoicing software for US and Canadian businesses. But for Australian businesses, it has critical gaps:</p>
            <ul>
              <li><strong>No payment processing</strong> — Wave's payments are US/Canada only. Australian clients can't pay via Wave.</li>
              <li><strong>No ATO compliance</strong> — no ABN fields, no automatic GST at 10%, no BAS support.</li>
              <li><strong>No Peppol e-invoicing</strong> — required for government suppliers in Australia.</li>
              <li><strong>No multi-currency defaults</strong> — AUD alongside USD/GBP/EUR requires manual setup.</li>
            </ul>

            <h2 className="text-heading-md font-bold text-foreground">What Australian Businesses Actually Need</h2>
            <p>Australian invoicing software must handle:</p>
            <ul>
              <li><strong>ABN display</strong> — mandatory on all tax invoices to avoid 47% withholding</li>
              <li><strong>GST at 10%</strong> — auto-calculated and displayed as a separate line</li>
              <li><strong>Peppol e-invoicing</strong> — for government contracts and increasingly B2B</li>
              <li><strong>Multi-currency</strong> — AUD, USD, GBP, EUR for international billing</li>
            </ul>
          </div>

          <Card className="border-primary ring-1 ring-primary/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-lg font-bold text-foreground">Our Recommendation: Invoicemonk</h2>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Best Wave Alternative for Australia</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Invoicemonk matches Wave's free pricing while adding everything Australian businesses need: ABN fields, 10% GST auto-calculation, Peppol e-invoicing readiness, and multi-currency support including AUD.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-medium text-green-700 mb-2">Why Switch from Wave</p>
                  <ul className="space-y-1">
                    {['ATO-compliant ABN & GST fields', '10% GST auto-calculated for AUD', 'Peppol e-invoicing support', 'Multi-currency (AUD + international)', 'Free — no credit card required'].map((p, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Wave vs Invoicemonk</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✗ Wave: No AU payments → ✓ Invoicemonk: Multi-currency invoicing</li>
                    <li>✗ Wave: No ABN fields → ✓ Invoicemonk: ABN built in</li>
                    <li>✗ Wave: No GST default → ✓ Invoicemonk: 10% auto-applied</li>
                    <li>✗ Wave: No Peppol → ✓ Invoicemonk: Peppol-ready</li>
                  </ul>
                </div>
              </div>
              <Button className="w-full sm:w-auto" asChild>
                <Link to="/free-invoice-generator-australia">Try Free Invoice Generator Australia<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Related Content</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/compare/best-invoicing-software-australia" className="text-primary hover:underline">Best Invoicing Software Australia</Link>
              <Link to="/blog/ato-invoice-requirements-australian-compliance" className="text-primary hover:underline">ATO Invoice Requirements</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">ATO-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Switch from Wave to Invoicemonk. Same free price, but with GST, ABN, and Peppol support.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator-australia">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
