import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Calculator, Users, Shield, BarChart3, RefreshCw, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingChartCard, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can I manage invoicing for multiple clients as a bookkeeper?', answer: 'Yes. Invoicemonk lets you manage multiple client accounts from a single dashboard, each with their own branding, payment terms, and reporting. Switch between clients instantly without logging in and out of separate accounts, and keep every client\'s financial data completely isolated.' },
  { question: 'Does Invoicemonk integrate with accounting software?', answer: 'Invoicemonk includes built-in accounting features and generates reports in standard formats. You can export invoice data, expense summaries, and income reports for use with QuickBooks, Xero, or any other accounting platform your clients prefer.' },
  { question: 'Can I set up recurring invoices for monthly retainer clients?', answer: 'Absolutely. Automate monthly billing for retainer clients with recurring invoice schedules. Set the amount, frequency, and start date — Invoicemonk generates and sends the invoice automatically each cycle, so you never miss a billing period.' },
  { question: 'How does Invoicemonk handle tax calculations?', answer: 'Set up tax rates per jurisdiction and Invoicemonk automatically calculates and displays taxes on every invoice. Support for VAT, GST, sales tax, and withholding tax means you can handle clients across different regions from one platform.' },
  { question: 'Is there a free plan for solo accountants?', answer: 'Yes! Start free with unlimited invoices. The free tier is perfect for solo practitioners just getting started. Upgrade when you need team features, advanced reporting, or white-label client portals.' },
  { question: 'Can I white-label invoices for my clients?', answer: 'Yes. Each client profile can have its own logo, business name, and branding on invoices. When you send invoices on behalf of a client, the invoice looks like it came from their business — not yours. This is essential for bookkeepers managing billing for multiple businesses.' },
  { question: 'How does Invoicemonk help with audit preparation?', answer: 'Every invoice, payment, and expense is timestamped and stored with a complete audit trail. Generate comprehensive reports showing all financial activity for any period. When audit season arrives, pull the records your clients need in minutes rather than days of manual compilation.' },
  { question: 'Can I track expenses across multiple client accounts?', answer: 'Yes. Categorise expenses per client, per project, or per cost category. This gives you accurate financial pictures for each client you manage and makes reconciliation straightforward at month-end or quarter-end.' },
];

const Accountants = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Multi-Client Management',
      description: 'Manage invoicing for dozens of clients from a single dashboard with separate branding, payment terms, and financial views per client. Switch between client accounts instantly and keep every business\'s data completely isolated and organised.',
    },
    {
      icon: RefreshCw,
      title: 'Recurring Billing',
      description: 'Set up automated monthly or quarterly invoices for retainer and advisory clients. Invoicemonk generates and sends invoices on schedule, so you never miss a billing cycle — even when you\'re deep in month-end closing for another client.',
    },
    {
      icon: BarChart3,
      title: 'Financial Reporting',
      description: 'Generate detailed income, expense, and receivable reports for each client. Export clean, professional reports for audits, client reviews, and tax preparation. Reports are formatted to meet the standards accountants and their clients expect.',
    },
    {
      icon: Shield,
      title: 'Tax Compliance',
      description: 'Automatic tax calculations across multiple jurisdictions, compliant invoice formats, and audit-ready record keeping. Handle VAT, GST, sales tax, and withholding tax configurations for clients in different regions — all from one platform.',
    },
  ];

  const testimonials = [
    {
      quote: "Managing invoicing for 20+ small business clients is effortless with Invoicemonk. The multi-client setup saves me hours every week. I used to juggle separate spreadsheets for each client — now everything is in one place with proper separation.",
      author: "Grace T.",
      role: "Freelance Bookkeeper",
    },
    {
      quote: "The tax compliance features give me confidence that every invoice meets regulatory requirements. My clients in different states have different tax configurations, and Invoicemonk handles all of them without me having to remember the rates.",
      author: "Samuel A.",
      role: "Chartered Accountant",
    },
    {
      quote: "Audit preparation used to take me a full week per client. Now I pull comprehensive reports in minutes. The audit trail is complete — every invoice, payment, and adjustment is timestamped and traceable.",
      author: "Funke D.",
      role: "Tax Consultant",
    },
  ];

  const painPoints = [
    {
      problem: 'Juggling separate invoicing systems or spreadsheets for each client',
      solution: 'One dashboard for all clients with isolated accounts, separate branding, and individual financial views. Switch between clients in one click.',
    },
    {
      problem: 'Manually creating the same recurring invoices every month for retainer clients',
      solution: 'Automated recurring invoices generate and send on schedule. Set it once and Invoicemonk handles every billing cycle without intervention.',
    },
    {
      problem: 'Spending days compiling financial records for audits and tax filings',
      solution: 'Every transaction is automatically logged with a complete audit trail. Pull comprehensive reports for any period in minutes, not days.',
    },
    {
      problem: 'Managing different tax rates and compliance rules across jurisdictions',
      solution: 'Configure tax rates per client and region. Invoicemonk calculates VAT, GST, sales tax, and withholding tax automatically on every invoice.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Set up client accounts',
      description: 'Create a profile for each client with their business name, logo, address, tax configuration, and default payment terms. This takes a few minutes per client and ensures every invoice you send on their behalf is properly branded and compliant. You can manage unlimited clients from your single Invoicemonk account.',
    },
    {
      step: '2',
      title: 'Configure billing schedules',
      description: 'For retainer and advisory clients, set up recurring invoices with the amount, frequency, and send date. For project-based clients, create invoice templates with their standard line items. Invoicemonk remembers everything so future invoicing is a one-click operation.',
    },
    {
      step: '3',
      title: 'Invoice and track payments',
      description: 'Generate invoices — either automatically via recurring schedules or manually for one-off work. Invoicemonk tracks the status of every invoice across all your clients: sent, viewed, paid, or overdue. Automatic reminders follow up on outstanding invoices so you don\'t have to chase payments on behalf of your clients.',
    },
    {
      step: '4',
      title: 'Report and reconcile',
      description: 'At month-end or quarter-end, pull financial reports for each client showing income, expenses, outstanding receivables, and payment history. Export data in standard formats for use with accounting software. When audit or tax season arrives, your clients\' records are already organised and ready.',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing for Accountants & Bookkeepers | Invoicemonk"
        description="Multi-client invoicing and billing for accountants, bookkeepers, and accounting firms. Recurring billing, tax compliance, and detailed financial reporting."
        canonical="https://invoicemonk.com/accountants"
      />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: Calculator, text: 'For Accountants' }}
          title="Invoicing built for accounting professionals"
          accentWord="accounting"
          description="Manage multi-client billing, automate recurring invoices, and maintain tax-compliant records — all from one platform."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by accountants and bookkeepers"
          backgroundVariant="gradient"
        />
        <FloatingChartCard className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingInvoiceCard className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" delay={0.6} variant="paid" />
        <FloatingIcon icon={Calculator} className="absolute top-48 left-12 lg:left-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for accounting workflows</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Tools designed for the way accountants and bookkeepers actually work — from multi-client management to audit-ready reporting</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Accountants Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              How accountants use Invoicemonk
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Whether you're a solo bookkeeper or run an accounting firm — here's how Invoicemonk fits your practice
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Bookkeeping Clients</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage invoicing for multiple small businesses from one account. Set up each client with their own branding, tax configuration, and payment terms. Generate monthly invoices on their behalf, track payments, and provide clean financial summaries at month-end — all without switching between separate accounts or spreadsheets.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Advisory & Tax Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Bill advisory clients on retainer with automated recurring invoices. For tax preparation engagements, create project-based invoices with detailed line items for each service rendered. Track time spent per client and generate reports that justify your fees during client reviews.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Audit Preparation</h3>
                  <p className="text-sm text-muted-foreground">
                    When audit season arrives, pull comprehensive financial records for any client and any period in minutes. Every invoice, payment, and expense is timestamped and stored with a complete audit trail. Export reports in standard formats that satisfy auditors and regulatory bodies.
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
              Common accounting challenges — solved
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We built Invoicemonk around the real billing problems accountants and bookkeepers face
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
              From client setup to audit-ready reporting — streamlined for accounting professionals
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

      {/* Why Accountants Choose Invoicemonk */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
              Why accountants choose Invoicemonk over alternatives
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Most invoicing tools are built for a single business sending its own invoices. Accountants and bookkeepers need something fundamentally different — a platform that manages billing across many businesses simultaneously, each with their own branding, tax rules, and compliance requirements. Invoicemonk is designed for exactly this multi-client workflow.
              </p>
              <p>
                Unlike generic accounting software that requires complex multi-entity setups, Invoicemonk makes it simple to add a new client, configure their billing preferences, and start invoicing on their behalf within minutes. The interface is purpose-built for professionals who manage other people's finances, not just their own.
              </p>
              <p>
                And unlike basic invoicing apps that lack the compliance rigour accountants demand, Invoicemonk provides audit-ready records, multi-jurisdiction tax support, and financial reporting that meets professional standards. Your clients get professional invoices; you get the backend organisation you need to run an efficient practice.
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
              What accountants get with Invoicemonk
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Multi-client management',
                'Recurring monthly billing',
                'Automatic tax calculations',
                'Detailed financial reports',
                'Custom branding per client',
                'Payment tracking dashboard',
                'Expense categorization',
                'Audit-ready records',
                'Multi-currency support',
                'Export to accounting formats',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
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
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by accounting professionals</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-8">
                  <p className="text-foreground mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
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

      {/* Related Reading */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Related reading</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blog/small-business-accounting-basics" className="text-primary hover:underline">Accounting Basics</Link>
            <Link to="/blog/financial-reports-every-business-needs" className="text-primary hover:underline">Financial Reports Guide</Link>
            <Link to="/guides/tax-compliance" className="text-primary hover:underline">Tax Compliance Guide</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to streamline your accounting practice?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join accountants and bookkeepers who trust Invoicemonk for multi-client billing and compliance.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Accountants;
