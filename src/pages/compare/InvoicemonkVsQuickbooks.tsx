import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';

const features = [
  { name: 'Free tier', invoicemonk: true, competitor: false },
  { name: 'Invoicing', invoicemonk: true, competitor: true },
  { name: 'Multi-currency', invoicemonk: true, competitor: true },
  { name: 'Expense tracking', invoicemonk: true, competitor: true },
  { name: 'Built-in accounting', invoicemonk: true, competitor: true },
  { name: 'Payroll', invoicemonk: false, competitor: true },
  { name: 'Invoice verification portal', invoicemonk: true, competitor: false },
  { name: 'Credit notes', invoicemonk: true, competitor: true },
  { name: 'Inventory management', invoicemonk: false, competitor: true },
  { name: 'Ease of setup', invoicemonk: 'Minutes', competitor: 'Hours' },
  { name: 'Starting price', invoicemonk: 'Free', competitor: '$30/mo' },
];

const faqs = [
  { question: 'Is Invoicemonk a good QuickBooks alternative?', answer: 'For invoicing, expenses, and basic accounting — yes. QuickBooks is better if you need payroll or inventory management.' },
  { question: 'Why is Invoicemonk cheaper than QuickBooks?', answer: 'Invoicemonk focuses on core invoicing and financial management without the overhead of payroll, inventory, and enterprise features that drive up QuickBooks pricing.' },
  { question: 'Can I move from QuickBooks to Invoicemonk?', answer: 'Yes. Export your QuickBooks data and import clients and invoices into Invoicemonk.' },
];

export default function InvoicemonkVsQuickbooks() {
  return (
    <Layout>
      <SEOHead
        title="Invoicemonk vs QuickBooks: Affordable Alternative | 2026 Comparison"
        description="Compare Invoicemonk and QuickBooks for small business invoicing. See features, pricing, and which is the best fit for your needs."
        canonical="https://invoicemonk.com/compare/invoicemonk-vs-quickbooks"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Invoicemonk vs QuickBooks</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">QuickBooks is an industry giant — but is it the right fit for your small business? Here's how they compare.</p>

          <ComparisonTable competitorName="QuickBooks" features={features} />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Invoicemonk if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Primarily need invoicing and expense tracking</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want a free starting point</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Prefer simplicity over enterprise features</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose QuickBooks if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need payroll and inventory</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want deep bank feed integrations</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need a US-focused CPA ecosystem</li>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">The affordable QuickBooks alternative</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">All the invoicing features you need, at a fraction of the cost.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
