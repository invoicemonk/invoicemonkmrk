import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, RefreshCw, Clock, Shield, BarChart3 } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'How does recurring billing work in Invoicemonk?', answer: 'Set a schedule (weekly, monthly, quarterly, etc.) and Invoicemonk automatically generates and sends invoices to your clients on time.' },
  { question: 'Can I customize each recurring invoice?', answer: 'Yes. Set different amounts, line items, payment terms, and currencies for each recurring schedule.' },
  { question: 'Will clients receive automatic reminders for recurring invoices?', answer: 'Yes. Payment reminders work the same for recurring invoices — clients get notified before and after due dates.' },
  { question: 'Can I pause or stop a recurring schedule?', answer: 'Absolutely. Pause, modify, or cancel any recurring invoice at any time.' },
];

export default function RecurringBilling() {
  return (
    <Layout>
      <SEOHead
        title="Recurring Billing & Subscription Invoicing | Invoicemonk"
        description="Automate recurring invoices for retainer clients, subscriptions, and repeat services. Set it up once and get paid on schedule."
        canonical="https://invoicemonk.com/use-cases/recurring-billing"
      />
      <FAQSchema items={faqs} />

      <PageHero
        badge={{ icon: RefreshCw, text: 'Recurring Billing' }}
        title="Automate your recurring invoices"
        accentWord="recurring"
        description="Set up billing schedules for retainer clients, subscriptions, and monthly services. Invoicemonk sends invoices automatically so you never miss a billing cycle."
        primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
        secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
        backgroundVariant="gradient"
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How recurring billing works</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Three steps to automated invoicing</p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: '1. Set a schedule', desc: 'Choose weekly, monthly, quarterly, or custom intervals.' },
              { icon: RefreshCw, title: '2. Invoices auto-generate', desc: 'Invoicemonk creates and sends each invoice on schedule.' },
              { icon: BarChart3, title: '3. Track payments', desc: 'Monitor payment status and outstanding balances in real time.' },
            ].map((s, i) => (
              <Card key={i} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><s.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Who uses recurring billing?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Agencies with retainer clients', 'SaaS and subscription businesses', 'Consultants on monthly engagements', 'Accountants with recurring services', 'Property managers', 'Maintenance and service providers'].map((item, i) => (
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
            <Link to="/blog/recurring-invoices-complete-guide" className="text-primary hover:underline">Recurring Invoices Guide</Link>
            <Link to="/agencies" className="text-primary hover:underline">For Agencies</Link>
            <Link to="/use-cases/retainer-billing" className="text-primary hover:underline">Retainer Billing</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Automate your billing today</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Set up recurring invoices in minutes. Start free.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
