import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Layers, BarChart3, Shield, RefreshCw, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingChartCard, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can Invoicemonk handle retainer billing for agencies?', answer: 'Yes. Set up recurring invoices for retainer clients with automatic scheduling and customisable amounts. Invoicemonk generates and sends the invoice on your chosen date each month, so you never miss a billing cycle — even during your busiest campaign launches.' },
  { question: 'Does Invoicemonk support multiple team members?', answer: 'Invoicemonk supports multi-user access so your project managers, account leads, and finance team can collaborate on invoicing. Each team member can create invoices, track payments, and manage their assigned clients without stepping on each other\'s work.' },
  { question: 'Can I invoice different clients in different currencies?', answer: 'Absolutely. Invoicemonk supports multi-currency invoicing, perfect for agencies with international clients. Bill a client in London in GBP, a client in New York in USD, and a client in Lagos in NGN — all from the same account with correct currency formatting.' },
  { question: 'How does Invoicemonk help agencies track project profitability?', answer: 'With expense tracking and detailed financial reports, you can see revenue vs. costs per client or per project. Understand which accounts are profitable, which are break-even, and which need renegotiation — all from your dashboard.' },
  { question: 'Is there a free plan for agencies?', answer: 'Yes! Invoicemonk offers a free tier that lets you send unlimited invoices. Start with the free plan and upgrade as your agency grows and needs features like advanced reporting, team access, and client portals.' },
  { question: 'Can I brand invoices with my agency\'s identity?', answer: 'Yes. Upload your agency logo, set brand colours, and create invoice templates that reflect your agency\'s professional identity. Consistent branding across all client communications reinforces your agency\'s positioning and builds trust.' },
  { question: 'How do automatic payment reminders work for agencies?', answer: 'Set reminder schedules per client — for example, 3 days before the due date, on the due date, and weekly after. Invoicemonk sends polite, professional follow-ups automatically. This is especially valuable for agencies managing 20+ client accounts where manual chasing is impractical.' },
  { question: 'Can I create milestone-based invoices for project work?', answer: 'Yes. For project engagements, create invoices tied to specific milestones or deliverables — such as 30% at project kickoff, 40% at first review, and 30% on delivery. Each invoice references the milestone and scope of work completed.' },
];

const Agencies = () => {
  const benefits = [
    {
      icon: Layers,
      title: 'Multi-Project Billing',
      description: 'Manage invoices across dozens of clients and projects from a single dashboard. Each client gets their own billing profile with separate payment terms, branding, and financial tracking — so nothing gets mixed up during busy periods.',
    },
    {
      icon: RefreshCw,
      title: 'Retainer Invoicing',
      description: 'Automate recurring invoices for retainer clients with customisable schedules and amounts. Set it once and Invoicemonk handles every billing cycle — freeing your team to focus on client work instead of monthly admin.',
    },
    {
      icon: BarChart3,
      title: 'Revenue Reporting',
      description: 'Track revenue per client, project profitability, and outstanding payments at a glance. Generate reports that help you make strategic decisions about client retention, pricing, and resource allocation.',
    },
    {
      icon: Shield,
      title: 'Professional Branding',
      description: 'White-label invoices with your agency logo, brand colours, and custom payment terms. Every invoice reinforces your agency\'s professional identity and builds client confidence in your operations.',
    },
  ];

  const testimonials = [
    {
      quote: "We manage 30+ retainer clients. Invoicemonk's recurring invoices save us hours every month. Before, our finance manager spent two full days sending monthly invoices. Now it's completely automated and clients pay faster because of the reminders.",
      author: "Kemi B.",
      role: "Operations Manager, Digital Agency",
    },
    {
      quote: "The multi-currency support is a game changer for our international client base. We have clients in five countries and each gets invoices in their local currency. It makes our agency look polished and removes friction from the payment process.",
      author: "David L.",
      role: "Creative Director",
    },
    {
      quote: "Project profitability tracking has changed how we run our agency. We discovered two accounts were actually unprofitable once we factored in all the costs. Now we use Invoicemonk data to negotiate better rates at renewal time.",
      author: "Chioma N.",
      role: "Managing Director, Marketing Agency",
    },
  ];

  const painPoints = [
    {
      problem: 'Finance team spends days manually creating and sending monthly retainer invoices',
      solution: 'Automated recurring invoices generate and send on schedule for every retainer client. Your finance team reviews them once, then Invoicemonk handles the rest each month.',
    },
    {
      problem: 'No visibility into which client accounts are actually profitable',
      solution: 'Revenue and expense tracking per client and project. See actual profitability at a glance and make data-driven decisions about pricing and client retention.',
    },
    {
      problem: 'Chasing payments across 20+ client accounts is a full-time job',
      solution: 'Automatic payment reminders follow up with every client on your customised schedule. Your dashboard shows all outstanding invoices across every account in one view.',
    },
    {
      problem: 'Inconsistent invoice formatting undermines professional agency image',
      solution: 'Branded invoice templates with your logo, colours, and terms. Every invoice looks polished and professional, reinforcing your agency\'s positioning with every client interaction.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Set up client accounts',
      description: 'Create a profile for each client with their billing address, contact person, preferred currency, and payment terms. For retainer clients, configure the recurring invoice schedule. For project clients, define the milestone billing structure. This setup takes minutes per client and ensures consistent, professional billing from day one.',
    },
    {
      step: '2',
      title: 'Automate retainer billing',
      description: 'For monthly retainer clients, set the invoice amount, send date, and any standard line items. Invoicemonk generates and sends the invoice automatically each cycle. Your team reviews the queue once a month and can adjust amounts for scope changes before they go out.',
    },
    {
      step: '3',
      title: 'Invoice project milestones',
      description: 'For project-based work, create invoices tied to specific deliverables — strategy presentation, creative concepts, campaign launch. Add line items for each component of work and reference the agreed scope. Send the invoice as soon as the milestone is delivered for faster payment.',
    },
    {
      step: '4',
      title: 'Track and report',
      description: 'Your dashboard shows revenue by client, outstanding invoices, and payment trends. Pull monthly or quarterly reports to share with partners and stakeholders. Use profitability data to identify accounts that need renegotiation and spots where your agency is leaving money on the table.',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing Software for Agencies | Invoicemonk"
        description="Streamline agency billing with retainer invoicing, multi-project tracking, and branded invoices. Built for digital, creative, and marketing agencies."
        canonical="https://invoicemonk.com/agencies"
      />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: Users, text: 'For Agencies' }}
          title="Invoicing built for growing agencies"
          accentWord="agencies"
          description="Manage retainer billing, project invoices, and multi-currency payments from one platform. Spend less time on admin, more time winning clients."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by digital and creative agencies"
          backgroundVariant="gradient"
        />
        <FloatingChartCard className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingInvoiceCard className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" delay={0.6} variant="pending" />
        <FloatingIcon icon={Layers} className="absolute top-48 left-12 lg:left-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for agency workflows</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Everything you need to bill clients professionally and track your agency's financial health</p>
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

      {/* How Agencies Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              How agencies use Invoicemonk
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              From boutique studios to full-service agencies — here's how Invoicemonk fits your billing model
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Monthly Retainers</h3>
                  <p className="text-sm text-muted-foreground">
                    Set up recurring invoices for every retainer client — SEO, social media management, PPC, or content creation. Invoicemonk sends each invoice automatically on the agreed date. Track retainer revenue separately from project work for clear financial visibility across your entire book of business.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Campaign Projects</h3>
                  <p className="text-sm text-muted-foreground">
                    For campaign or project work, create milestone-based invoices. Bill 30% at kickoff for strategy and planning, 40% after creative delivery, and 30% on campaign launch. Each invoice details the deliverables completed, making it easy for client procurement to approve payment quickly.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">International Accounts</h3>
                  <p className="text-sm text-muted-foreground">
                    Bill global clients in their local currency without manual conversion headaches. A London client gets an invoice in GBP, a New York client in USD, and a Lagos client in NGN — all from one dashboard. Each invoice is formatted with the correct currency symbol, tax structure, and compliance details.
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
              Common agency challenges — solved
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We built Invoicemonk around the real billing problems agencies face at scale
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
              From client onboarding to monthly reporting — streamlined for agency operations
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

      {/* Why Agencies Choose Invoicemonk */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
              Why agencies choose Invoicemonk over alternatives
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Enterprise accounting software like QuickBooks or Xero is powerful but overly complex for agencies that primarily need to send professional invoices, manage retainers, and track who has paid. The learning curve alone costs your finance team weeks. Invoicemonk delivers the billing functionality agencies actually use — without the overhead.
              </p>
              <p>
                Unlike simple invoicing apps, Invoicemonk understands the agency billing model. Retainer clients need automated recurring invoices. Project clients need milestone billing. International clients need multi-currency support. Invoicemonk handles all three from one dashboard, which means your team doesn't need to context-switch between different tools.
              </p>
              <p>
                Most importantly, Invoicemonk helps you understand your agency's financial health. Revenue-per-client reporting, outstanding invoice tracking, and expense management per project give you the data you need to make confident business decisions — like which accounts to grow, which to renegotiate, and when to hire.
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
              What agencies get with Invoicemonk
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Unlimited professional invoices',
                'Recurring retainer billing',
                'Multi-project dashboard',
                'Custom branding & logo',
                'Multi-currency support',
                'Automatic payment reminders',
                'Expense tracking per project',
                'Client management portal',
                'Detailed revenue reports',
                'Tax-compliant records',
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
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by agencies</h2>
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
            <Link to="/blog/recurring-invoices-automating-billing" className="text-primary hover:underline">Recurring Invoices Guide</Link>
            <Link to="/blog/managing-multiple-clients-efficiently" className="text-primary hover:underline">Client Management Tips</Link>
            <Link to="/guides/getting-paid" className="text-primary hover:underline">Getting Paid Faster</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to streamline your agency billing?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join agencies that trust Invoicemonk for professional, automated invoicing at scale.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Agencies;
