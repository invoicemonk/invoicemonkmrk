import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, RefreshCw, Clock, Shield, BarChart3, Bell, Settings, Users, Zap } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from '@/components/LocalizedLink';

const faqs = [
  { question: 'How does recurring billing work in Invoicemonk?', answer: 'Set a schedule (weekly, monthly, quarterly, or custom) and Invoicemonk automatically generates, numbers, and sends invoices to your clients on time. Each invoice is created with the correct line items, tax rates, and payment terms you defined when setting up the schedule — no manual intervention required.' },
  { question: 'Can I customize each recurring invoice?', answer: 'Yes. Every recurring schedule can have its own line items, amounts, currency, tax rates, and payment terms. You can also add notes or adjust individual invoices after they are generated without affecting the rest of the schedule.' },
  { question: 'Will clients receive automatic reminders for recurring invoices?', answer: 'Absolutely. Payment reminders work the same way for recurring invoices — clients receive notifications before and after due dates. You can configure reminder intervals per client or use global defaults for consistency across all your accounts.' },
  { question: 'Can I pause or stop a recurring schedule?', answer: 'Yes. Pause, modify, or cancel any recurring invoice at any time. When you pause a schedule, no new invoices are generated until you reactivate it. All previously generated invoices remain in your records for accounting purposes.' },
  { question: 'Does recurring billing support multiple currencies?', answer: 'Yes. Each recurring schedule can be set in any currency Invoicemonk supports. This is especially useful for agencies and consultants with international retainer clients who need invoices in their local currency.' },
  { question: 'Can I set different billing frequencies for different clients?', answer: 'Each client can have their own unique recurring schedule. Bill one client weekly and another quarterly — Invoicemonk manages all schedules independently so you have full flexibility.' },
  { question: 'What happens if a recurring invoice goes unpaid?', answer: 'Invoicemonk tracks the payment status of every invoice. Unpaid recurring invoices appear in your outstanding receivables and trigger automatic payment reminders. You can also set escalation rules for overdue amounts.' },
  { question: 'Is there a limit to how many recurring schedules I can create?', answer: 'Free plans support up to 3 active recurring schedules. Paid plans support unlimited schedules, making them ideal for agencies and service businesses managing many clients simultaneously.' },
];

export default function RecurringBilling() {
  return (
    <Layout>
      <SEOHead
        title="Recurring Billing & Subscription Invoicing | Invoicemonk"
        description="Automate recurring invoices for retainer clients, subscriptions, and repeat services. Set it up once and get paid on schedule. Free tier available."
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

      {/* Editorial overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Why recurring billing matters for your business</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Recurring billing is the backbone of predictable revenue. Whether you run a marketing agency billing retainer clients monthly, a SaaS company collecting subscription fees, or a consultancy with ongoing engagements, the ability to automate your invoicing cycle eliminates manual work and ensures you get paid consistently. Without automation, businesses lose an average of 5–10 hours per month on repetitive invoicing tasks — time better spent serving clients and growing revenue.
            </p>
            <p>
              The challenge with manual recurring billing isn't just the time cost — it's the errors. Missed invoices, incorrect amounts, forgotten tax adjustments, and inconsistent payment terms erode client trust and create accounting headaches. A single missed billing cycle can delay cash flow by 30–60 days, especially when clients use the oversight as an excuse to defer payment.
            </p>
            <p>
              Invoicemonk's recurring billing solves these problems by letting you define a schedule once and automating everything from invoice generation to delivery and payment reminders. Every invoice is numbered sequentially, tax-compliant, and branded with your business identity — exactly as if you had created it manually, but without lifting a finger.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How recurring billing works</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Three steps to automated invoicing</p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: '1. Set a schedule', desc: 'Choose weekly, monthly, quarterly, or custom intervals. Define start and optional end dates for each billing cycle.' },
              { icon: RefreshCw, title: '2. Invoices auto-generate', desc: 'Invoicemonk creates and sends each invoice on schedule with the correct line items, taxes, and payment terms.' },
              { icon: BarChart3, title: '3. Track payments', desc: 'Monitor payment status, outstanding balances, and recurring revenue trends in real time from your dashboard.' },
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

      {/* Feature walkthrough */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How Invoicemonk makes recurring billing effortless</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Every feature designed to save you time and protect your revenue</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: RefreshCw, title: 'Flexible Schedules', desc: 'Weekly, biweekly, monthly, quarterly, or yearly — set any billing frequency that matches your client agreements. Define start dates, end dates, and even skip specific periods.' },
              { icon: Bell, title: 'Automatic Reminders', desc: 'Clients receive professional payment reminders before and after due dates. Configure reminder intervals or use smart defaults that optimize payment collection.' },
              { icon: Shield, title: 'Tax Compliance', desc: 'Every recurring invoice includes the correct tax rates for your jurisdiction. As tax rules change, update your rates once and all future invoices reflect the new amounts.' },
              { icon: Settings, title: 'Per-Client Customization', desc: 'Each client can have unique line items, amounts, currencies, and payment terms. No two recurring schedules need to be the same — full flexibility for diverse client relationships.' },
              { icon: Users, title: 'Client Portal Access', desc: 'Clients can view their recurring invoice history, download past invoices, and verify payment status through their dedicated portal — reducing support inquiries.' },
              { icon: Zap, title: 'Instant Adjustments', desc: 'Need to change a retainer amount mid-contract? Update the schedule and changes apply from the next cycle. Previous invoices remain unchanged for accurate records.' },
            ].map((f, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><f.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-world example */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Recurring billing in action</h2>
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-semibold text-foreground text-lg mb-4">Scenario: A marketing agency with 12 retainer clients</h3>
              <p className="text-muted-foreground mb-4">
                Sarah runs a digital marketing agency with 12 monthly retainer clients ranging from ₦150,000 to ₦1,200,000 per month. Before Invoicemonk, she spent the first two days of every month manually creating invoices, copying line items, and adjusting payment terms for each client.
              </p>
              <p className="text-muted-foreground mb-4">
                With Invoicemonk's recurring billing, Sarah set up 12 schedules in under an hour. Each schedule has the client's specific retainer amount, preferred currency, and payment terms (Net 15 for most, Net 30 for two enterprise clients). On the 1st of every month, all 12 invoices generate and deliver automatically.
              </p>
              <p className="text-muted-foreground mb-6">
                The result: Sarah recovered 16+ hours per month in administrative time, reduced late payments by 40% thanks to automatic reminders, and her monthly recurring revenue is now tracked in real-time on her dashboard.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">16+ hrs</p>
                  <p className="text-xs text-muted-foreground">Saved monthly</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">40%</p>
                  <p className="text-xs text-muted-foreground">Fewer late payments</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-xs text-muted-foreground">Auto-billed clients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who uses it */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Who uses recurring billing?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Any business with repeat clients or subscription services benefits from automated billing</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Agencies with retainer clients',
              'SaaS and subscription businesses',
              'Consultants on monthly engagements',
              'Accountants with recurring services',
              'Property managers collecting rent',
              'Maintenance and service providers',
              'IT support companies',
              'Coaches and trainers',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What businesses say about recurring billing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Setting up recurring invoices for our 8 retainer clients took 30 minutes. Now I don't think about invoicing at all — it just happens.", name: 'Adebayo K.', role: 'Agency Owner, Lagos' },
              { quote: "We reduced our accounts receivable cycle from 45 days to 18 days after switching to automated recurring billing. The payment reminders are a game changer.", name: 'Rachel M.', role: 'IT Consultant, London' },
              { quote: "As a property manager, I bill 30+ tenants monthly. Recurring invoices saved my sanity and my weekends.", name: 'David O.', role: 'Property Manager, Abuja' },
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Related reading</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blog/recurring-invoices-automating-billing" className="text-primary hover:underline">Recurring Invoices Guide</Link>
            <Link to="/blog/automatic-payment-reminders-getting-paid" className="text-primary hover:underline">Payment Reminders Best Practices</Link>
            <Link to="/agencies" className="text-primary hover:underline">For Agencies</Link>
            <Link to="/use-cases/retainer-billing" className="text-primary hover:underline">Retainer Billing</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Automate your billing today</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Set up recurring invoices in minutes. Start free — no credit card required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
