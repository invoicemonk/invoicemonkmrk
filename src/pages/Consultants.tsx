import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Briefcase, Globe, BarChart3, Shield, Users, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingInvoiceCard,
  FloatingChartCard,
  FloatingIcon
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from '@/components/LocalizedLink';

const faqs = [
  { question: 'Is Invoicemonk suitable for management consulting firms?', answer: 'Yes. Invoicemonk is used by solo consultants and small consulting firms alike. You can manage multiple clients, track retainer billing, and generate professional invoices that meet corporate procurement standards — all from one dashboard.' },
  { question: 'Can I bill clients on retainer?', answer: 'Absolutely. Set up recurring invoices that automatically generate and send on your chosen schedule. This is ideal for consulting retainers where you bill a fixed monthly fee. You can also create milestone-based invoices for project engagements.' },
  { question: 'Does Invoicemonk support multi-currency invoicing?', answer: 'Yes. Invoice international clients in their preferred currency. Invoicemonk supports dozens of currencies, and each invoice clearly displays the currency and amount. This is essential for consultants who work across borders.' },
  { question: 'Can I generate financial reports for client presentations?', answer: 'Yes. Invoicemonk provides income reports, expense summaries, and payment history that you can export and use in client presentations or financial reviews. The reports are clean and professional enough to share with enterprise clients.' },
  { question: 'How does Invoicemonk help with tax compliance?', answer: 'All invoices and expenses are automatically categorised and stored. At tax time, export your records for your accountant or use the built-in reports to calculate your tax obligations. Invoicemonk supports tax configurations for multiple countries.' },
  { question: 'Is it free to get started?', answer: 'Yes. The free tier includes 5 invoices and 5 receipts per month with no credit card required. Upgrade as your consulting practice grows and you need unlimited invoicing, recurring billing, or advanced reporting features.' },
  { question: 'Can my clients see their invoice history?', answer: 'Yes. Invoicemonk provides a client portal where your clients can view their invoice history, payment status, and download invoices. This is particularly valuable for enterprise clients who need records for their own accounting.' },
];

const Consultants = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Enterprise-Ready Invoices',
      description: 'Create professional invoices that meet corporate procurement standards and purchase order requirements. Include detailed scope descriptions, project references, and payment terms that enterprise clients expect.',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Billing',
      description: 'Invoice international clients in their preferred currency without manual conversion. Invoicemonk handles dozens of currencies, making cross-border consulting engagements seamless and professional.',
    },
    {
      icon: BarChart3,
      title: 'Detailed Reporting',
      description: 'Generate income reports, expense summaries, and payment analytics for client presentations and your own financial reviews. Export clean, professional reports that support strategic decision-making.',
    },
    {
      icon: Shield,
      title: 'Compliance Built-In',
      description: 'Stay compliant with tax requirements across multiple jurisdictions. Invoicemonk automatically structures invoices to meet regulatory standards, giving your enterprise clients confidence in your operations.',
    },
  ];

  const testimonials = [
    {
      quote: "My corporate clients are impressed with the professional invoices. I used to spend hours formatting invoices in Word to meet procurement requirements. Now it takes two minutes, and the compliance features give clients confidence in working with me.",
      author: "Tunde A.",
      role: "Management Consultant",
    },
    {
      quote: "Managing retainer clients and project-based billing is seamless. I have clients on monthly retainers and others on milestone billing, and Invoicemonk handles both without any confusion. I can focus on delivering value instead of chasing payments.",
      author: "Amaka E.",
      role: "Strategy Consultant",
    },
    {
      quote: "The financial reporting has been a game-changer. I can pull up revenue by client, track my utilisation rate, and prepare for tax season without hiring a bookkeeper. For a solo consultant, that's invaluable.",
      author: "David R.",
      role: "IT Consultant",
    },
  ];

  const painPoints = [
    {
      problem: 'Enterprise clients reject invoices that don\'t meet their procurement format',
      solution: 'Create invoices with PO numbers, detailed scope descriptions, and payment terms that satisfy corporate accounting departments.',
    },
    {
      problem: 'Juggling retainer billing and project-based invoices across multiple clients',
      solution: 'Manage both billing models from one dashboard. Set up recurring invoices for retainers and milestone invoices for projects — each client gets the right billing structure.',
    },
    {
      problem: 'Losing billable hours to admin work like invoicing and financial tracking',
      solution: 'Automate invoice generation, payment reminders, and expense categorisation. Spend your time on client work, not spreadsheets.',
    },
    {
      problem: 'Difficulty tracking revenue and expenses across international engagements',
      solution: 'Multi-currency support with unified reporting. See your total revenue in your base currency while billing each client in theirs.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Set up your consulting profile',
      description: 'Add your business details, logo, and default payment terms. If you work with enterprise clients, configure your invoice template to include fields for PO numbers, project references, and detailed scope descriptions. This setup takes five minutes and ensures every invoice meets corporate standards.',
    },
    {
      step: '2',
      title: 'Create client profiles',
      description: 'Add each client with their billing address, contact person, preferred currency, and payment terms. For retainer clients, set up a recurring invoice schedule. For project clients, create a billing milestone plan. All details are saved for future engagements.',
    },
    {
      step: '3',
      title: 'Invoice and track',
      description: 'Generate invoices with detailed line items — hourly rates, fixed fees, or milestone deliverables. Send them instantly via email. Invoicemonk tracks the status of every invoice: sent, viewed, paid, or overdue. Automatic reminders handle follow-ups for you.',
    },
    {
      step: '4',
      title: 'Report and review',
      description: 'At the end of each month or quarter, pull financial reports showing revenue by client, outstanding invoices, and expense summaries. Use these reports for your own financial planning, tax preparation, or client presentations where you need to demonstrate project billing history.',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing Software for Consultants | Invoicemonk"
        description="Professional invoicing for management consultants and strategy firms. Multi-currency billing, detailed reporting, and enterprise-ready compliance."
        canonical="https://invoicemonk.com/consultants"
      />
      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Users, text: 'For Consultants' }}
          title="Professional invoicing for consultants"
          accentWord="consultants"
          description="Impress enterprise clients with professional, compliant invoices. Manage retainers, project billing, and international payments with ease."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by management consultants and strategy firms"
          backgroundVariant="gradient"
        />
        <FloatingChartCard 
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingInvoiceCard 
          className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
          variant="pending"
        />
        <FloatingIcon 
          icon={Globe}
          className="absolute top-48 left-12 lg:left-32 hidden lg:block" 
          delay={0.8}
          size="md"
        />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
            Built for consulting professionals
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Everything you need to manage client billing at the enterprise level — from retainer invoicing to multi-currency reporting
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

      {/* How Consultants Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              How consultants use Invoicemonk
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              From solo advisors to boutique firms — here's how Invoicemonk fits consulting workflows
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Retainer Engagements</h3>
                  <p className="text-sm text-muted-foreground">
                    Set up a recurring monthly invoice for each retainer client. Invoicemonk generates and sends the invoice automatically on the first of every month. Your client knows when to expect it, and you never forget to bill. Track retainer revenue separately from project work for clear financial reporting.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Project Milestones</h3>
                  <p className="text-sm text-muted-foreground">
                    For strategy engagements or transformation projects, create milestone-based invoices tied to deliverables. Invoice 30% at project kickoff, 40% at midpoint review, and 30% on final delivery. Each invoice references the specific milestone and scope of work completed.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Cross-Border Advisory</h3>
                  <p className="text-sm text-muted-foreground">
                    Advise clients in different countries without invoicing headaches. Bill a Nigerian client in Naira, a UK client in Pounds, and a US client in Dollars — all from one account. Each invoice is formatted with the correct currency, tax structure, and compliance details for that jurisdiction.
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
              Common consulting challenges — solved
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We built Invoicemonk around the real billing problems consultants face
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
              From setup to financial reporting — streamlined for consultants
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

      {/* Why Consultants Choose Invoicemonk */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
              Why consultants choose Invoicemonk over alternatives
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Enterprise accounting software like QuickBooks or Xero is designed for businesses with payroll, inventory, and multi-department budgets. As a consultant, you don't need any of that. What you need is a clean, professional way to bill clients, track payments, and report on your revenue — without spending hours learning complex software.
              </p>
              <p>
                Invoicemonk is purpose-built for service professionals. The interface is simple enough to use between client calls, but powerful enough to handle enterprise procurement requirements, multi-currency billing, and recurring retainer invoices. You get the professionalism of enterprise tools without the complexity.
              </p>
              <p>
                Most importantly, Invoicemonk understands the consulting billing model. Whether you bill hourly, by project milestone, or on a fixed retainer, the invoicing workflow adapts to your engagement structure — not the other way around.
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
              What consultants get with Invoicemonk
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Professional branded invoices',
                'Retainer invoice management',
                'Project-based billing',
                'Multi-currency support',
                'Automatic payment reminders',
                'Detailed financial reports',
                'Time tracking integration',
                'Client portal access',
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
            Trusted by consultants
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
            <Link to="/use-cases/retainer-billing" className="text-primary hover:underline">Retainer Billing</Link>
            <Link to="/guides/getting-paid" className="text-primary hover:underline">Getting Paid Faster</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">
            Ready to elevate your consulting practice?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join consultants who trust Invoicemonk for professional invoicing.
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

export default Consultants;
