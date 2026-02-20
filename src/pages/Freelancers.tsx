import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, FileText, TrendingUp, Shield, Zap, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingInvoiceCard, 
  FloatingPaymentBadge, 
  FloatingCalendarBadge 
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { pageSEO } from '@/components/seo/seoConfig';
import { useLocale } from '@/hooks/useLocale';
import { Link } from '@/components/LocalizedLink';

const faqs = [
  { question: 'Is Invoicemonk free for freelancers?', answer: 'Yes! The free tier includes 5 invoices and 5 receipts per month with no credit card required. As your freelance business grows and you take on more clients, you can upgrade to a paid plan for unlimited invoicing and advanced features like recurring billing and detailed reports.' },
  { question: 'Can I send invoices in different currencies?', answer: 'Absolutely. Invoicemonk supports multi-currency invoicing, so you can bill international clients in their preferred currency. Exchange rates are handled automatically, and each invoice clearly shows the currency and amount so there is no confusion for your clients.' },
  { question: 'How do automatic payment reminders work?', answer: 'Set a reminder schedule — for example, 3 days before the due date, on the due date, and 7 days after — and Invoicemonk automatically emails your clients with a polite nudge. You never have to write an awkward follow-up email again, and clients appreciate the professional, consistent communication.' },
  { question: 'Can I add my logo and branding to invoices?', answer: 'Yes. Upload your logo and create professional invoices that reflect your personal brand. Consistent branding across all client communications helps build trust and makes your freelance business look established.' },
  { question: 'Does Invoicemonk help with taxes?', answer: 'Invoicemonk keeps tax-compliant records, tracks expenses by category, and generates income reports that make tax filing straightforward. You can export your data at any time for your accountant, and the expense categorisation aligns with common tax deduction categories.' },
  { question: 'Can I create recurring invoices for retainer clients?', answer: 'Yes. Set up recurring invoices that automatically generate and send on your chosen schedule — weekly, monthly, or quarterly. This is perfect for retainer clients or ongoing service agreements where you bill the same amount regularly.' },
  { question: 'What payment methods can my clients use?', answer: 'Invoicemonk supports bank transfers, mobile payments, and links to popular payment platforms. You can include your payment details directly on the invoice so clients know exactly how to pay you, reducing back-and-forth communication.' },
];

const Freelancers = () => {
  const benefits = [
    {
      icon: FileText,
      title: 'Professional Invoices',
      description: 'Create branded invoices with your logo, colours, and business details that impress clients and reinforce your professional identity. Well-designed invoices signal reliability and encourage faster payments.',
    },
    {
      icon: Clock,
      title: 'Automatic Reminders',
      description: 'Set up automated payment reminders that go out before, on, and after the due date. No more uncomfortable follow-up emails — Invoicemonk handles the nudging so you can maintain great client relationships.',
    },
    {
      icon: TrendingUp,
      title: 'Track Your Income',
      description: 'See all your earnings in one dashboard with clear income reports broken down by client, month, and project. Understand your revenue trends at a glance and make informed decisions about pricing and capacity.',
    },
    {
      icon: Shield,
      title: 'Tax-Ready Records',
      description: 'Every invoice and expense is automatically categorised and stored for tax compliance. When tax season arrives, export your records in minutes instead of spending days sorting through receipts and bank statements.',
    },
  ];

  const testimonials = [
    {
      quote: "Invoicemonk has transformed how I handle my freelance finances. I used to spend Sunday evenings creating invoices in spreadsheets — now I send them in under two minutes, right after a project wraps up. My cash flow has improved dramatically.",
      author: "Adaeze N.",
      role: "Freelance Designer",
    },
    {
      quote: "The automatic reminders alone have improved my cash flow significantly. Before Invoicemonk, I had clients who would pay 30–60 days late because I felt awkward following up. Now the system handles it professionally and most clients pay within a week.",
      author: "Chidi O.",
      role: "Web Developer",
    },
    {
      quote: "I work with clients in three different countries, and the multi-currency invoicing is a lifesaver. Each client gets an invoice in their local currency, and I can track everything in one place. It makes my one-person business feel like a proper operation.",
      author: "Sade M.",
      role: "Content Strategist",
    },
  ];

  const painPoints = [
    {
      problem: 'Spending hours creating invoices in spreadsheets or Word documents',
      solution: 'Generate professional invoices in under 2 minutes with saved client details, item templates, and automatic calculations.',
    },
    {
      problem: 'Feeling awkward about chasing late payments from clients',
      solution: 'Automated reminders send polite, professional follow-ups on your behalf — preserving your client relationships.',
    },
    {
      problem: 'Losing track of income across multiple clients and projects',
      solution: 'A unified dashboard shows all your earnings, outstanding invoices, and payment history in one view.',
    },
    {
      problem: 'Scrambling to find records and receipts at tax time',
      solution: 'All invoices and expenses are automatically organised and exportable, so tax filing takes minutes, not days.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Add your client details',
      description: 'Enter your client\'s name, email, and billing address once. Invoicemonk saves these details so you never have to type them again. For recurring clients, creating a new invoice starts with a single click.',
    },
    {
      step: '2',
      title: 'Build your invoice',
      description: 'Add line items for your services — whether it\'s hourly work, project fees, or product deliverables. Set quantities, rates, and taxes. Save frequently-used items as templates to speed up future invoicing.',
    },
    {
      step: '3',
      title: 'Send and track',
      description: 'Send the invoice directly via email or share a payment link. Invoicemonk tracks when the client opens the invoice, and you can see the status (sent, viewed, paid, overdue) at a glance in your dashboard.',
    },
    {
      step: '4',
      title: 'Get paid and record',
      description: 'When payment arrives, mark the invoice as paid. Invoicemonk automatically updates your income reports and keeps a complete financial trail. At the end of the month or quarter, your records are already organised for tax filing.',
    },
  ];

  const { locale } = useLocale();
  const seo = pageSEO['/freelancers'];

  return (
    <Layout>
      <SEOHead
        title="Freelance Invoicing Software | Get Paid Faster | Free for Freelancers"
        description="The best freelance invoicing software in 2026. Create professional invoices, automate payment reminders, and track income — free to start, no credit card required."
        canonical="https://invoicemonk.com/freelancers"
      />
      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Zap, text: 'For Freelancers' }}
          title="Invoicing made simple for freelancers"
          accentWord="freelancers"
          description="Spend less time on paperwork and more time doing what you love. Invoicemonk handles your invoicing, so you can focus on your craft."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Join freelancers who trust Invoicemonk"
          backgroundVariant="gradient"
        />
        <FloatingInvoiceCard className="absolute top-32 right-8 lg:right-24 hidden lg:block" delay={0.4} variant="paid" />
        <FloatingPaymentBadge className="absolute top-48 left-8 lg:left-20 hidden lg:block" delay={0.6} />
        <FloatingCalendarBadge className="absolute bottom-32 right-12 lg:right-32 hidden lg:block" delay={0.8} />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
            Built for independent professionals
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Everything you need to manage your freelance finances professionally — from your first invoice to year-end tax reporting
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Freelancers Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              How freelancers use Invoicemonk
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Whether you're a designer, developer, writer, or consultant — here's how Invoicemonk fits into your workflow
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Project-Based Work</h3>
                  <p className="text-sm text-muted-foreground">
                    Finish a website redesign, logo project, or article series — then create an invoice in under two minutes with all the project details. Add line items for each deliverable, attach your payment terms, and send it while the work is still fresh in your client's mind. Invoicemonk tracks the payment status so you know exactly who owes you what.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Retainer Clients</h3>
                  <p className="text-sm text-muted-foreground">
                    Set up recurring invoices for clients on monthly retainers. Invoicemonk generates and sends the invoice automatically each month, so you never forget to bill and your client expects the invoice on a predictable schedule. Perfect for ongoing content creation, maintenance contracts, or advisory roles.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">International Clients</h3>
                  <p className="text-sm text-muted-foreground">
                    Bill clients across different countries in their local currency. Create an invoice in US dollars for an American client, then switch to British pounds for a UK client — all from the same dashboard. Each invoice shows the correct currency symbol, amount, and your international payment details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              Common freelancer challenges — solved
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We built Invoicemonk around the real problems freelancers face every day
            </p>
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-4 items-start">
                  <div className="flex gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{point.problem}</p>
                  </div>
                  <div className="flex gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{point.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              From signup to getting paid — in four simple steps
            </p>
            <div className="space-y-8">
              {workflowSteps.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Freelancers Choose Invoicemonk */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
              Why freelancers choose Invoicemonk over alternatives
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Most accounting software is built for companies with employees, departments, and complex reporting needs. Freelancers don't need all that. What they need is a fast way to send professional invoices, track who has paid, and keep records organised for tax time. That's exactly what Invoicemonk delivers — without the bloat or the steep learning curve.
              </p>
              <p>
                Unlike spreadsheet-based invoicing, Invoicemonk automates the repetitive parts: payment reminders go out on schedule, recurring invoices generate themselves, and your financial records stay organised without any manual filing. Unlike enterprise accounting tools, there's no training needed — you can send your first invoice within minutes of signing up.
              </p>
              <p>
                Invoicemonk is also built with global freelancers in mind. Multi-currency support, compliance with tax regulations across multiple countries, and flexible payment options mean you can work with clients anywhere in the world without worrying about invoicing logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
              What freelancers get with Invoicemonk
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Unlimited professional invoices',
                'Custom branding and logo',
                'Multiple payment options',
                'Automatic payment reminders',
                'Expense tracking',
                'Income reports',
                'Multi-currency support',
                'Client management',
                'Recurring invoices',
                'Tax-compliant records',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            Trusted by freelancers
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-8">
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Related reading</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blog/pricing-your-freelance-services" className="text-primary hover:underline">Pricing Your Services</Link>
            <Link to="/blog/freelance-portfolio-best-practices" className="text-primary hover:underline">Portfolio Guide</Link>
            <Link to="/guides/freelancing" className="text-primary hover:underline">Freelancing Guide</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">
            Ready to simplify your freelance finances?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join thousands of freelancers who trust Invoicemonk for their invoicing needs.
          </p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Freelancers;
