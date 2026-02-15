import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Briefcase, RefreshCw, Shield, BarChart3 } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'What is retainer billing?', answer: 'Retainer billing is a recurring payment model where clients pay a fixed amount (monthly, quarterly) for ongoing services or access to your expertise.' },
  { question: 'How do I set up retainer invoices?', answer: 'Create a recurring invoice in Invoicemonk with the retainer amount and schedule. Invoicemonk auto-generates and sends it each period.' },
  { question: 'Can I track hours against a retainer?', answer: 'Yes. Track hours and expenses per client, then compare against the retainer amount in your reports.' },
  { question: 'What happens if a retainer needs adjusting?', answer: 'Update the recurring invoice amount at any time. Changes apply to the next billing cycle.' },
];

export default function RetainerBilling() {
  return (
    <Layout>
      <SEOHead
        title="Retainer Billing & Client Retainer Invoicing | Invoicemonk"
        description="Automate retainer invoicing for ongoing client relationships. Recurring billing, drawdown tracking, and professional retainer management."
        canonical="https://invoicemonk.com/use-cases/retainer-billing"
      />
      <FAQSchema items={faqs} />

      <PageHero
        badge={{ icon: Briefcase, text: 'Retainer Billing' }}
        title="Effortless retainer invoicing"
        accentWord="retainer"
        description="Automate monthly retainer billing for your clients. Set fixed amounts, recurring schedules, and let Invoicemonk handle the rest."
        primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
        secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
        backgroundVariant="gradient"
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Why retainer billing?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Predictable revenue, happier clients</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: RefreshCw, title: 'Automated Billing', desc: 'Set a schedule and forget about manual invoicing.' },
              { icon: BarChart3, title: 'Revenue Forecasting', desc: 'Know your recurring revenue month over month.' },
              { icon: Shield, title: 'Professional Approach', desc: 'Branded retainer invoices with clear terms.' },
              { icon: Briefcase, title: 'Client Retention', desc: 'Retainers build lasting client relationships.' },
            ].map((b, i) => (
              <Card key={i} className="border-border/50"><CardContent className="p-6"><div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.desc}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Who uses retainer billing?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Marketing agencies', 'Law firms', 'IT consultants', 'PR firms', 'Accountants & bookkeepers', 'Business coaches'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
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
            <Link to="/agencies" className="text-primary hover:underline">For Agencies</Link>
            <Link to="/lawyers" className="text-primary hover:underline">For Lawyers</Link>
            <Link to="/use-cases/recurring-billing" className="text-primary hover:underline">Recurring Billing</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Lock in recurring revenue</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Set up retainer billing in minutes. Start free.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
