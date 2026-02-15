import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';

const features = [
  { name: 'Free tier', invoicemonk: true, competitor: true },
  { name: 'Unlimited invoices (paid)', invoicemonk: true, competitor: true },
  { name: 'Multi-currency invoicing', invoicemonk: true, competitor: true },
  { name: 'Expense tracking', invoicemonk: true, competitor: true },
  { name: 'Recurring invoices', invoicemonk: true, competitor: true },
  { name: 'Invoice verification portal', invoicemonk: true, competitor: false },
  { name: 'Credit notes', invoicemonk: true, competitor: true },
  { name: 'Built-in accounting', invoicemonk: true, competitor: 'Separate product' },
  { name: 'Team access', invoicemonk: 'Professional+', competitor: 'Standard+' },
  { name: 'Simplicity of setup', invoicemonk: 'Minutes', competitor: 'Complex ecosystem' },
];

const faqs = [
  { question: 'How does Invoicemonk compare to Zoho Invoice?', answer: 'Both offer strong invoicing. Invoicemonk is simpler to set up with built-in accounting, while Zoho offers a larger but more complex product ecosystem.' },
  { question: 'Is Invoicemonk simpler than Zoho?', answer: 'Yes. Invoicemonk focuses on doing invoicing, expenses, and accounting well without requiring you to navigate a sprawling product suite.' },
  { question: 'Can I migrate from Zoho Invoice?', answer: 'Yes. Export your Zoho data and import it into Invoicemonk. Contact support for help with the transition.' },
];

export default function InvoicemonkVsZoho() {
  return (
    <Layout>
      <SEOHead
        title="Invoicemonk vs Zoho Invoice: Simpler Alternative | 2026 Comparison"
        description="Compare Invoicemonk and Zoho Invoice. See how features, pricing, and ease of use stack up for small businesses."
        canonical="https://invoicemonk.com/compare/invoicemonk-vs-zoho-invoice"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Invoicemonk vs Zoho Invoice</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">A focused invoicing platform vs a complex product ecosystem — which suits your business?</p>

          <ComparisonTable competitorName="Zoho Invoice" features={features} />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Invoicemonk if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want a simple, all-in-one solution</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need built-in accounting without separate products</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Prefer quick setup over extensive configuration</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Zoho Invoice if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Already use the Zoho ecosystem</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need CRM + invoicing integration</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want deep customization options</li>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">Try the simpler Zoho alternative</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">All the invoicing power, none of the complexity.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
