import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Globe, DollarSign, Shield, BarChart3 } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'How many currencies does Invoicemonk support?', answer: 'Invoicemonk supports all major world currencies. Set up currency accounts and invoice each client in their preferred currency.' },
  { question: 'Does Invoicemonk handle exchange rates?', answer: 'You can set custom exchange rates or let Invoicemonk use market rates. All conversions are clearly displayed on invoices.' },
  { question: 'Can I have multiple currency accounts?', answer: 'Yes. Free plans include 1 currency account, Starter includes 3, and Professional/Business plans support unlimited currency accounts.' },
  { question: 'Is multi-currency invoicing free?', answer: 'Multi-currency is available on all plans. Free tier supports 1 currency account, with more on paid plans.' },
];

export default function MultiCurrencyInvoicing() {
  return (
    <Layout>
      <SEOHead
        title="Multi-Currency Invoicing Software | Invoice in Any Currency | Invoicemonk"
        description="Send invoices in any currency. Multi-currency support for freelancers and businesses with international clients. Free tier available."
        canonical="https://invoicemonk.com/use-cases/multi-currency-invoicing"
      />
      <FAQSchema items={faqs} />

      <PageHero
        badge={{ icon: Globe, text: 'Multi-Currency' }}
        title="Invoice clients in any currency"
        accentWord="currency"
        description="Bill international clients in their local currency. Invoicemonk handles conversions and keeps your books organized across currencies."
        primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
        secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
        backgroundVariant="gradient"
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Why multi-currency matters</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Billing in your client's currency improves payment speed and professionalism</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, title: 'Global Reach', desc: 'Invoice clients anywhere in their local currency.' },
              { icon: DollarSign, title: 'Flexible Rates', desc: 'Set custom rates or use market exchange rates.' },
              { icon: Shield, title: 'Compliance', desc: 'Tax-compliant invoices in every currency.' },
              { icon: BarChart3, title: 'Unified Reports', desc: 'See revenue across all currencies in one dashboard.' },
            ].map((b, i) => (
              <Card key={i} className="border-border/50"><CardContent className="p-6"><div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.desc}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Related</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/international-payment-fee-calculator" className="text-primary hover:underline">Payment Fee Calculator</Link>
            <Link to="/ecommerce" className="text-primary hover:underline">For E-commerce</Link>
            <Link to="/cheapest-way-to-receive-international-payments" className="text-primary hover:underline">Cheapest International Payments</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Go global with your invoicing</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Start invoicing in multiple currencies — free.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
