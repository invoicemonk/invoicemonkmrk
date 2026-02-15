import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Target, FileText, Shield, TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'What is milestone billing?', answer: 'Milestone billing splits a project into phases. You invoice the client at each milestone — e.g., deposit, midpoint delivery, and final completion.' },
  { question: 'How do I create milestone invoices in Invoicemonk?', answer: 'Create separate invoices for each milestone with clear descriptions. Link them to the same client and project for easy tracking.' },
  { question: 'Can I combine milestone billing with deposits?', answer: 'Yes. Create a deposit invoice first, then send milestone invoices as work progresses, and a final balance invoice at completion.' },
  { question: 'What industries use milestone billing?', answer: 'Photography, web development, construction, architecture, consulting, and any project-based service.' },
];

export default function MilestoneBilling() {
  return (
    <Layout>
      <SEOHead
        title="Milestone Billing & Progress Invoicing | Invoicemonk"
        description="Bill clients at project milestones with deposit, progress, and final invoices. Perfect for photographers, developers, and project-based businesses."
        canonical="https://invoicemonk.com/use-cases/milestone-billing"
      />
      <FAQSchema items={faqs} />

      <PageHero
        badge={{ icon: Target, text: 'Milestone Billing' }}
        title="Bill at every project milestone"
        accentWord="milestone"
        description="Collect deposits, send progress invoices, and bill final balances — all tied to clear project milestones."
        primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
        secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
        backgroundVariant="gradient"
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How milestone billing works</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Break projects into billable phases</p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: FileText, title: '1. Deposit invoice', desc: 'Collect upfront payment before work begins.' },
              { icon: Target, title: '2. Progress invoices', desc: 'Bill at each milestone as work is delivered.' },
              { icon: TrendingUp, title: '3. Final invoice', desc: 'Send the remaining balance on project completion.' },
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
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Ideal for</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Wedding & event photographers', 'Web designers & developers', 'Architects & builders', 'Marketing & creative agencies', 'Interior designers', 'Video production teams'].map((item, i) => (
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
            <Link to="/photographers" className="text-primary hover:underline">For Photographers</Link>
            <Link to="/creatives" className="text-primary hover:underline">For Creatives</Link>
            <Link to="/use-cases/retainer-billing" className="text-primary hover:underline">Retainer Billing</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Start billing by milestone</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Protect your cash flow with milestone invoicing. Start free.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
