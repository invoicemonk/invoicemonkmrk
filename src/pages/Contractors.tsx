import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, HardHat, Smartphone, Receipt, FolderOpen, Shield, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingMobileDevice,
  FloatingInvoiceCard,
  FloatingIcon
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can I create progress billing invoices?', answer: 'Yes. Invoicemonk supports progress billing, milestone invoicing, and deposit requests. Bill clients at project stages — for example, 30% upfront, 40% at rough-in, and 30% at completion. Each invoice references the specific phase of work completed.' },
  { question: 'Can I track expenses per job site?', answer: 'Absolutely. Categorise expenses by project, client, or job site. Track material costs, subcontractor fees, tool rentals, and fuel separately for each job. This gives you accurate cost-per-job data for better pricing on future projects.' },
  { question: 'Does Invoicemonk work on mobile?', answer: 'Yes. Create and send invoices from your phone right at the job site. The mobile interface is designed for field use — no need to wait until you get back to the office to send an invoice or log an expense.' },
  { question: 'Can I invoice for materials and labour separately?', answer: 'Yes. Add separate line items for materials, labour hours, equipment rental, and any other cost categories. Your client sees a clear breakdown of what they are paying for, which reduces disputes and builds trust.' },
  { question: 'How do automatic payment reminders help contractors?', answer: 'Contractors often have multiple clients across different job sites. Automatic reminders ensure every outstanding invoice gets followed up, even when you are busy on-site. Set reminder schedules and Invoicemonk handles the rest — no manual chasing needed.' },
  { question: 'Is Invoicemonk free for contractors?', answer: 'Yes! The free tier includes 5 invoices and 5 receipts per month. As your contracting business grows and you take on more projects, upgrade for unlimited invoicing, detailed job costing reports, and recurring billing features.' },
  { question: 'Can I create deposit invoices?', answer: 'Yes. Request deposits or retainers upfront before starting work. Invoicemonk tracks the deposit against the total project cost and automatically calculates the remaining balance for your final invoice.' },
];

const Contractors = () => {
  const benefits = [
    {
      icon: FolderOpen,
      title: 'Multi-Project Management',
      description: 'Track invoices, expenses, and payments across multiple clients and job sites simultaneously. Each project gets its own financial view, so you always know which jobs are profitable and which clients have outstanding balances.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Invoicing',
      description: 'Create and send invoices from the job site using your phone. Finished a phase of work? Invoice immediately while the details are fresh. No more stacking invoices until the weekend or losing track of billable work.',
    },
    {
      icon: Receipt,
      title: 'Material Cost Tracking',
      description: 'Track materials, labour, subcontractor fees, and equipment costs for accurate job costing. Know your true margins on every project and use historical data to price future jobs more accurately.',
    },
    {
      icon: Shield,
      title: 'Tax-Ready Records',
      description: 'Every invoice and expense is automatically categorised and stored for tax compliance. When tax season arrives, your records are already organised — no more shoebox of receipts to sort through.',
    },
  ];

  const testimonials = [
    {
      quote: "I can invoice clients right from the job site. No more waiting until I get back to the office, and no more forgetting to bill for extras. My weekly revenue has gone up simply because I'm invoicing faster and not leaving money on the table.",
      author: "Emeka O.",
      role: "Electrical Contractor",
    },
    {
      quote: "Tracking expenses per project has helped me understand my true costs. I used to think certain jobs were profitable until I added up all the material runs and subcontractor fees. Now I'm pricing jobs more accurately and my margins have improved.",
      author: "Kola B.",
      role: "Building Contractor",
    },
    {
      quote: "The deposit invoice feature is essential for my business. I require 40% upfront before starting any job, and Invoicemonk makes that process professional. Clients take me more seriously when the deposit request comes as a proper invoice.",
      author: "Femi T.",
      role: "Plumbing Contractor",
    },
  ];

  const painPoints = [
    {
      problem: 'Forgetting to invoice for extras, change orders, or additional materials',
      solution: 'Invoice from the job site on your phone immediately after completing work. Add line items for extras in real time before they slip through the cracks.',
    },
    {
      problem: 'Not knowing the true cost and profitability of each job',
      solution: 'Track all expenses — materials, labour, subcontractors, fuel — per project. See your actual margin on every job and use that data to price future projects accurately.',
    },
    {
      problem: 'Clients disputing invoices because of unclear billing',
      solution: 'Detailed line items showing materials, labour hours, and rates. Clients see exactly what they are paying for, which reduces disputes and speeds up payment.',
    },
    {
      problem: 'Chasing payments across multiple job sites and clients',
      solution: 'Automatic payment reminders follow up with every client on schedule. Your dashboard shows all outstanding invoices across every project in one view.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Set up your projects',
      description: 'Create a project for each job site or client engagement. Add the client\'s details, project scope, and billing structure — whether it\'s progress billing, fixed-price, or time-and-materials. This takes minutes and organises all your billing from day one.',
    },
    {
      step: '2',
      title: 'Request deposits upfront',
      description: 'Before starting work, send a professional deposit invoice — typically 30–50% of the estimated project cost. Invoicemonk tracks the deposit against the total and automatically calculates the remaining balance. This protects your cash flow and sets clear financial expectations with the client.',
    },
    {
      step: '3',
      title: 'Invoice at milestones',
      description: 'As you complete phases of work — rough-in, inspection, finishing — create progress invoices directly from your phone. Add line items for materials used, labour hours, and any extras. Send the invoice while you are still on-site so the client receives it immediately.',
    },
    {
      step: '4',
      title: 'Track costs and close out',
      description: 'Log expenses as they happen: material purchases, subcontractor payments, equipment rentals. When the project wraps up, send the final invoice with the remaining balance. Your project records show total revenue, total costs, and actual profit margin.',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing Software for Contractors | Invoicemonk"
        description="Professional invoicing built for electrical, building, and trade contractors. Mobile invoicing, multi-project tracking, and job expense management."
        canonical="https://invoicemonk.com/contractors"
      />
      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: HardHat, text: 'For Contractors' }}
          title="Invoicing built for contractors"
          accentWord="contractors"
          description="Manage multiple projects, track job expenses, and invoice clients from anywhere. Built for contractors who work on-site and on-the-go."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by electrical, building, and trade contractors"
          backgroundVariant="gradient"
        />
        <FloatingMobileDevice 
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingInvoiceCard 
          className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
          variant="pending"
        />
        <FloatingIcon 
          icon={Receipt}
          className="absolute top-52 left-12 lg:left-32 hidden lg:block" 
          delay={0.8}
          size="md"
        />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
            Built for trades and construction
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Everything you need to manage finances across multiple job sites — from deposit invoices to final payment
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

      {/* How Contractors Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              How contractors use Invoicemonk
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Whether you're an electrician, plumber, builder, or general contractor — here's how Invoicemonk fits your workflow
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Residential Projects</h3>
                  <p className="text-sm text-muted-foreground">
                    Quote the job, send a deposit invoice, then bill at agreed milestones — rough-in, inspection, and completion. Track material purchases against each project and know your actual profit margin before the paint dries. Homeowners appreciate the transparency of itemised invoices.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Commercial Contracts</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage larger commercial projects with progress billing. Create detailed invoices referencing PO numbers, contract terms, and completion percentages. Bill for materials, labour, and equipment separately. Keep records that satisfy commercial clients' accounting departments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Maintenance & Service Calls</h3>
                  <p className="text-sm text-muted-foreground">
                    For quick service calls and maintenance jobs, create an invoice on your phone before you leave the site. Add the call-out fee, parts used, and labour time. Send it instantly so the client receives it while the work is still fresh in their mind — resulting in faster payment.
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
              Common contractor challenges — solved
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We built Invoicemonk around the real problems contractors face on the job
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
              From project setup to final payment — a workflow built for the job site
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

      {/* Why Contractors Choose Invoicemonk */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
              Why contractors choose Invoicemonk over alternatives
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Most invoicing software is built for office workers sitting at a desk. Contractors need something different — a tool that works on a phone at a dusty job site, that understands progress billing and deposit invoices, and that tracks costs per project rather than per department. That's what Invoicemonk delivers.
              </p>
              <p>
                Unlike generic accounting software, Invoicemonk doesn't force you through complex setup wizards or require accounting knowledge. Add a project, create an invoice, send it. The interface is designed for speed because contractors don't have time to learn software — they have jobs to finish.
              </p>
              <p>
                And unlike simple invoicing apps that only handle basic billing, Invoicemonk gives you the project-level financial tracking that contractors actually need: cost-per-job analysis, deposit tracking against total project costs, and expense categorisation that makes tax season straightforward.
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
              What contractors get with Invoicemonk
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Progress billing & milestones',
                'Job-based expense tracking',
                'Material cost management',
                'Multi-client organization',
                'Mobile invoicing',
                'Automatic payment reminders',
                'Photo attachments for jobs',
                'Deposit & retainer invoices',
                'Labour hour tracking',
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
            Trusted by contractors
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
            <Link to="/use-cases/milestone-billing" className="text-primary hover:underline">Milestone Billing</Link>
            <Link to="/blog/invoice-payment-terms" className="text-primary hover:underline">Payment Terms Guide</Link>
            <Link to="/guides/getting-paid" className="text-primary hover:underline">Getting Paid Faster</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">
            Ready to simplify your contracting business?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join contractors who trust Invoicemonk to manage their invoicing and expenses.
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

export default Contractors;
