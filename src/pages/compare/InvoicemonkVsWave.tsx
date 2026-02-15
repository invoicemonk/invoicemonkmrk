import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';

const features = [
  { name: 'Free invoicing', invoicemonk: true, competitor: true },
  { name: 'Multi-currency invoicing', invoicemonk: true, competitor: false },
  { name: 'Expense tracking', invoicemonk: true, competitor: true },
  { name: 'Recurring invoices', invoicemonk: true, competitor: true },
  { name: 'Client management', invoicemonk: true, competitor: true },
  { name: 'Invoice verification portal', invoicemonk: true, competitor: false },
  { name: 'Built-in accounting', invoicemonk: true, competitor: true },
  { name: 'Receipt scanning', invoicemonk: true, competitor: true },
  { name: 'Credit notes', invoicemonk: true, competitor: false },
  { name: 'Custom branding (free)', invoicemonk: false, competitor: false },
  { name: 'Team access', invoicemonk: 'Professional+', competitor: false },
  { name: 'Availability', invoicemonk: 'Global', competitor: 'US & Canada only' },
];

const faqs = [
  { question: 'Is Invoicemonk better than Wave?', answer: 'For businesses outside the US and Canada, yes — Wave is only available in those markets. Invoicemonk also offers multi-currency, credit notes, and an invoice verification portal.' },
  { question: 'Is Wave really free?', answer: 'Wave offers free invoicing and accounting but charges for payment processing and payroll. Invoicemonk also has a free tier with more global reach.' },
  { question: 'Can I switch from Wave to Invoicemonk?', answer: 'Yes. Export your data from Wave and import it into Invoicemonk. Our support team can assist with migration.' },
];

export default function InvoicemonkVsWave() {
  return (
    <Layout>
      <SEOHead
        title="Invoicemonk vs Wave: Which Free Invoicing Software Is Better? | 2026"
        description="Compare Invoicemonk and Wave side by side. Both offer free invoicing, but differ in currency support, global availability, and features."
        canonical="https://invoicemonk.com/compare/invoicemonk-vs-wave"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Invoicemonk vs Wave</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Both offer free invoicing — here's how they compare on features, availability, and flexibility.</p>

          <ComparisonTable competitorName="Wave" features={features} />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Invoicemonk if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Are outside the US or Canada</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need multi-currency invoicing</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want credit notes and invoice verification</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Wave if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Are US or Canada-based only</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need built-in payroll</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want direct bank connections</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Try the global alternative to Wave</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Free invoicing that works everywhere, not just the US.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
