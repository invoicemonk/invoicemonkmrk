import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';
import { Link } from 'react-router-dom';

const features = [
  { name: 'Free tier', invoicemonk: true, competitor: false },
  { name: 'Unlimited invoices (paid)', invoicemonk: true, competitor: true },
  { name: 'Multi-currency invoicing', invoicemonk: true, competitor: true },
  { name: 'Expense tracking', invoicemonk: true, competitor: true },
  { name: 'Recurring invoices', invoicemonk: true, competitor: true },
  { name: 'Client management', invoicemonk: true, competitor: true },
  { name: 'Invoice verification portal', invoicemonk: true, competitor: false },
  { name: 'Built-in accounting', invoicemonk: true, competitor: true },
  { name: 'Receipt scanning', invoicemonk: true, competitor: true },
  { name: 'API access', invoicemonk: 'Business plan', competitor: 'Premium plan' },
  { name: 'Starting price', invoicemonk: 'Free', competitor: '$19/mo' },
];

const faqs = [
  { question: 'Is Invoicemonk cheaper than FreshBooks?', answer: 'Yes. Invoicemonk offers a free tier and paid plans starting much lower than FreshBooks\' $19/month entry point.' },
  { question: 'Can I migrate from FreshBooks to Invoicemonk?', answer: 'Yes. Export your client and invoice data from FreshBooks and import it into Invoicemonk. Our support team can help with migration.' },
  { question: 'Does Invoicemonk have the same features as FreshBooks?', answer: 'Invoicemonk covers core invoicing, expenses, accounting, and client management. FreshBooks has time tracking built in, while Invoicemonk focuses on compliance and multi-currency.' },
];

export default function InvoicemonkVsFreshbooks() {
  return (
    <Layout>
      <SEOHead
        title="Invoicemonk vs FreshBooks: Which Is Better? | 2026 Comparison"
        description="Compare Invoicemonk and FreshBooks side by side. Features, pricing, and which invoicing software is best for your business."
        canonical="https://invoicemonk.com/compare/invoicemonk-vs-freshbooks"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Invoicemonk vs FreshBooks</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">A detailed comparison to help you choose the right invoicing software for your business.</p>

          <ComparisonTable competitorName="FreshBooks" features={features} />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Invoicemonk if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want a generous free tier</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need multi-currency and compliance focus</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Prefer lower pricing as you scale</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose FreshBooks if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need built-in time tracking</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want a large third-party integration ecosystem</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Prefer phone support</li>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to switch from FreshBooks?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Start free and see the difference for yourself.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
