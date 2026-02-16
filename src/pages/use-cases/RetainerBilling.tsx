import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Briefcase, RefreshCw, Shield, BarChart3, Clock, FileText, Users, TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'What is retainer billing?', answer: 'Retainer billing is a recurring payment model where clients pay a fixed amount — monthly, quarterly, or on a custom schedule — for ongoing services or guaranteed access to your expertise. Unlike project-based billing, retainers create predictable revenue for your business and ensure clients have priority access to your time.' },
  { question: 'How do I set up retainer invoices in Invoicemonk?', answer: 'Create a recurring invoice with the retainer amount, schedule (monthly, quarterly, etc.), and payment terms. Invoicemonk auto-generates and sends the invoice each period. You can customize line items, add descriptions, and set different tax rates for each retainer client.' },
  { question: 'Can I track hours against a retainer?', answer: 'Yes. Track hours and expenses per client through Invoicemonk\'s time and expense tracking features, then compare actual work against the retainer amount in your reports. This gives both you and your client transparency on value delivered.' },
  { question: 'What happens if a retainer needs adjusting mid-contract?', answer: 'Update the recurring invoice amount at any time. Changes apply from the next billing cycle onwards. Previous invoices remain unchanged in your records, maintaining a clear audit trail for accounting and tax purposes.' },
  { question: 'How do retainers differ from project-based billing?', answer: 'Retainers provide a fixed, predictable income regardless of the specific tasks completed in a period. Project-based billing ties payment to specific deliverables. Many businesses use retainers for ongoing relationships and project billing for one-off engagements.' },
  { question: 'Can I offer different retainer tiers to clients?', answer: 'Yes. Create unique recurring schedules for each client with different amounts, frequencies, and terms. This lets you offer bronze, silver, and gold retainer packages — each with its own billing configuration.' },
  { question: 'What if a client wants to pause their retainer?', answer: 'Pause the recurring schedule with one click. No invoices will be generated during the pause period. When the client is ready to resume, reactivate the schedule and billing continues from where it left off.' },
  { question: 'Do retainer invoices include tax calculations?', answer: 'Yes. Every retainer invoice automatically includes the tax rates you configured — VAT, GST, sales tax, or withholding tax. Tax amounts are clearly displayed on the invoice for your client\'s records.' },
];

export default function RetainerBilling() {
  return (
    <Layout>
      <SEOHead
        title="Retainer Billing & Client Retainer Invoicing | Invoicemonk"
        description="Automate retainer invoicing for ongoing client relationships. Recurring billing, drawdown tracking, and professional retainer management. Free tier available."
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

      {/* Editorial overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">The power of retainer-based revenue</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Retainer billing transforms the feast-or-famine cycle of project-based work into steady, predictable revenue. For agencies, consultants, and professional service firms, retainers represent the gold standard of client relationships — ongoing commitments that provide financial stability while ensuring clients receive consistent, high-quality service. The difference between a business that struggles with cash flow and one that grows confidently often comes down to how much of its revenue is recurring.
            </p>
            <p>
              Managing retainers manually, however, introduces unnecessary friction. Creating the same invoice every month, remembering different amounts for different clients, tracking which retainers have been paid and which are overdue — these tasks consume valuable hours that should be spent on billable work. Worse, manual processes lead to errors: a missed invoice means a missed payment, and an incorrect amount damages client trust.
            </p>
            <p>
              Invoicemonk automates the entire retainer billing workflow. Define each client's retainer amount, billing frequency, and payment terms once, and the system handles everything from invoice generation to delivery and follow-up reminders. You maintain full visibility over your recurring revenue while eliminating the administrative burden that comes with managing multiple retainer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Why retainer billing with Invoicemonk?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Predictable revenue, happier clients, less admin work</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: RefreshCw, title: 'Automated Billing Cycles', desc: 'Set a schedule — monthly, quarterly, or custom — and Invoicemonk generates and sends retainer invoices automatically. No more first-of-the-month invoice marathons.' },
              { icon: BarChart3, title: 'Revenue Forecasting', desc: 'See your total recurring revenue at a glance. Invoicemonk\'s dashboard shows you exactly how much retainer income to expect each month, making financial planning straightforward.' },
              { icon: Shield, title: 'Professional Branded Invoices', desc: 'Every retainer invoice carries your business branding, clear payment terms, and itemized descriptions. Clients receive a polished, professional document every billing cycle.' },
              { icon: Briefcase, title: 'Client Retention Insights', desc: 'Track retainer history per client — see how long they\'ve been on retainer, total billed, and payment patterns. Use this data to strengthen relationships and identify upsell opportunities.' },
              { icon: Clock, title: 'Time & Expense Tracking', desc: 'Log hours and expenses against each retainer client. Compare actual work delivered to the retainer amount to ensure profitability and demonstrate value to clients.' },
              { icon: TrendingUp, title: 'Flexible Adjustments', desc: 'Increase or decrease retainer amounts mid-contract with changes applying from the next cycle. Handle rate reviews and scope changes without disrupting your billing workflow.' },
            ].map((b, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-world example */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Retainer billing in action</h2>
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-semibold text-foreground text-lg mb-4">Scenario: A law firm managing 20 retainer clients</h3>
              <p className="text-muted-foreground mb-4">
                Adekunle & Partners is a mid-size law firm with 20 clients on monthly retainer agreements ranging from ₦200,000 to ₦2,500,000. Previously, a junior associate spent three days each month preparing and sending retainer invoices — time that could have been billed to clients.
              </p>
              <p className="text-muted-foreground mb-4">
                After switching to Invoicemonk's recurring billing, the firm set up all 20 retainer schedules in one afternoon. Each client's retainer has specific terms: some include VAT, others require withholding tax calculations, and three international clients are billed in USD. All of this is configured once and runs automatically.
              </p>
              <p className="text-muted-foreground mb-6">
                The result: the firm recovered over ₦600,000 in billable hours per month, reduced payment delays by 35%, and now has real-time visibility into their recurring revenue pipeline.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">₦600K+</p>
                  <p className="text-xs text-muted-foreground">Recovered monthly</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">35%</p>
                  <p className="text-xs text-muted-foreground">Fewer payment delays</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">20</p>
                  <p className="text-xs text-muted-foreground">Auto-managed retainers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who uses it */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Who uses retainer billing?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Retainer models work for any professional service with ongoing client relationships</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Marketing and PR agencies',
              'Law firms and legal practices',
              'IT consultants and managed service providers',
              'Business and executive coaches',
              'Accountants and bookkeepers',
              'HR consulting firms',
              'Design studios with ongoing clients',
              'Virtual assistants and support teams',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by retainer-based businesses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Managing 15 retainer clients used to take me a full day each month. Now it runs on autopilot and I focus entirely on delivering value to my clients.", name: 'Funmi A.', role: 'PR Agency Director, Lagos' },
              { quote: "The retainer tracking feature lets me show clients exactly how their retainer is being used. It's built trust and helped me retain clients longer.", name: 'James W.', role: 'IT Consultant, Manchester' },
              { quote: "We went from chasing retainer payments to having 95% collected within 7 days of invoicing. The automatic reminders make a huge difference.", name: 'Chinedu E.', role: 'Law Partner, Port Harcourt' },
            ].map((t, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm italic mb-4">"{t.quote}"</p>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Related reading</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blog/how-to-write-invoice-payment-terms" className="text-primary hover:underline">Invoice Payment Terms Guide</Link>
            <Link to="/blog/managing-multiple-clients-efficiently" className="text-primary hover:underline">Managing Multiple Clients</Link>
            <Link to="/agencies" className="text-primary hover:underline">For Agencies</Link>
            <Link to="/lawyers" className="text-primary hover:underline">For Lawyers</Link>
            <Link to="/use-cases/recurring-billing" className="text-primary hover:underline">Recurring Billing</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Lock in recurring revenue</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Set up retainer billing in minutes. Start free — no credit card required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
