import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Scale, Clock, FileText, Shield, Briefcase, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingChartCard, FloatingInvoiceCard, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can Invoicemonk handle hourly billing for lawyers?', answer: 'Yes. Track billable hours per client and matter, then generate detailed invoices showing time entries, rates, and descriptions. Each line item can reflect a different rate — useful for partners, associates, and paralegals billing at different levels.' },
  { question: 'Does Invoicemonk support trust account billing?', answer: 'You can create invoices that reference trust account balances and track retainer drawdowns for compliance. Each invoice clearly shows the retainer balance before and after billing, maintaining the transparency regulators and clients expect.' },
  { question: 'Can I generate LEDES-format invoices?', answer: 'Invoicemonk produces detailed, itemized invoices suitable for corporate clients. The line-item detail level supports matter numbers, activity codes, and task descriptions. Contact us for specific LEDES-format export needs.' },
  { question: 'How does Invoicemonk help with compliance?', answer: 'All invoices include required tax information, are stored securely with immutable audit trails, and can be exported for audit purposes. Each invoice receives a cryptographic verification code and QR code that anyone — including auditors — can use to verify authenticity.' },
  { question: 'Is there a free plan for solo practitioners?', answer: 'Yes! Solo lawyers can start free with 5 invoices and 5 receipts per month. Upgrade as your practice grows for unlimited invoicing, team management, and detailed financial reports.' },
  { question: 'Can I track expenses per case or matter?', answer: 'Yes. Record expenses against specific clients and categorise them — filing fees, court costs, expert witnesses, travel. See your true profitability per matter by comparing fees billed against expenses incurred.' },
  { question: 'Does Invoicemonk generate receipts when clients pay?', answer: 'Every payment recorded automatically generates a professional receipt with a unique verification code and QR code. This is especially valuable for legal practices where proof of payment needs to be independently verifiable.' },
];

const Lawyers = () => {
  const benefits = [
    { icon: Clock, title: 'Time-Based Billing', description: 'Track billable hours per client and matter. Generate itemized invoices showing time entries, rates, and descriptions. Support for multiple billing rates on a single invoice for different team members.' },
    { icon: Briefcase, title: 'Retainer Management', description: 'Bill against retainers, track balances, and send automatic replenishment invoices. Clients see clear retainer statements showing drawdowns and remaining balances on every invoice.' },
    { icon: FileText, title: 'Detailed Invoices', description: 'Itemized billing statements that meet corporate and institutional client requirements. Each line item includes matter references, task descriptions, and time entries — the detail level procurement teams expect.' },
    { icon: Shield, title: 'Compliance & Security', description: 'Secure record-keeping with immutable audit trails. Tax-compliant invoicing with cryptographic verification. Every document is verifiable via QR code — trusted by auditors and regulators.' },
  ];

  const testimonials = [
    { quote: "The time-based billing and retainer tracking have saved my practice countless hours. My corporate clients appreciate the detailed statements — and the QR verification code adds a layer of trust they hadn't seen from other lawyers.", author: "Aisha M.", role: "Corporate Lawyer" },
    { quote: "As a solo practitioner, I needed something simple yet professional. Invoicemonk delivers on both. I create invoices in two minutes and my clients pay faster because the automatic reminders handle the follow-up.", author: "Emeka O.", role: "Family Law Attorney" },
    { quote: "Managing billing for a small firm used to mean late nights with spreadsheets. Now each associate can log their hours, and I generate client invoices with all time entries in one click. The audit trail gives me peace of mind.", author: "Chioma A.", role: "Managing Partner, Litigation Firm" },
  ];

  const painPoints = [
    {
      problem: 'Losing billable hours because time entries are tracked in notebooks or forgotten entirely',
      solution: 'Record time entries per client and matter as you work. When it\'s time to invoice, all entries are ready — no more lost revenue from forgotten billable time.',
    },
    {
      problem: 'Clients disputing invoices because billing statements lack detail or transparency',
      solution: 'Itemized invoices show every time entry with dates, descriptions, rates, and durations. Clients see exactly what they\'re paying for, reducing disputes.',
    },
    {
      problem: 'Manually tracking retainer balances across multiple clients in spreadsheets',
      solution: 'Retainer drawdown tracking shows remaining balances on each invoice. Automatic replenishment invoices go out when balances run low.',
    },
    {
      problem: 'Spending hours preparing financial records for compliance reviews or tax audits',
      solution: 'Every invoice, receipt, and payment is automatically logged with immutable audit trails. Export compliance-ready reports in one click.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Onboard the client',
      description: 'Add the client\'s details to Invoicemonk — name, company, billing address, and tax ID. For retainer-based engagements, set up the retainer amount and billing schedule. The client is now ready for invoicing with all details saved.',
    },
    {
      step: '2',
      title: 'Log time and expenses',
      description: 'As you work on the client\'s matters, log billable hours with descriptions. Record case expenses — filing fees, travel, expert consultations. Everything is stored per client and per matter, ready for invoicing.',
    },
    {
      step: '3',
      title: 'Generate and send invoices',
      description: 'Create an itemized invoice pulling in all logged time entries and expenses. Review the statement, apply retainer drawdowns if applicable, and send. The client receives a professional email with your firm\'s branding and a verification QR code.',
    },
    {
      step: '4',
      title: 'Track payments and report',
      description: 'Monitor payment status in real time. Automated reminders handle overdue invoices professionally. At quarter or year-end, generate compliance reports and income summaries for your accountant or regulatory filings.',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Legal Billing Software for Lawyers | Invoicemonk"
        description="Professional legal billing with time tracking, retainer management, and detailed invoicing. Built for law firms, solo practitioners, and legal consultants."
        canonical="https://invoicemonk.com/lawyers"
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <div className="relative">
        <PageHero
          badge={{ icon: Scale, text: 'For Lawyers' }}
          title="Professional billing for legal practices"
          accentWord="legal"
          description="Track billable hours, manage retainers, and send detailed invoices that meet your clients' procurement standards."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by law firms and solo practitioners"
          backgroundVariant="gradient"
        />
        <FloatingChartCard className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingInvoiceCard className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" delay={0.6} variant="pending" />
        <FloatingIcon icon={Scale} className="absolute top-48 left-12 lg:left-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for legal professionals</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Billing features designed for the unique needs of legal practices — from solo practitioners to small firms</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Lawyers Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How lawyers use Invoicemonk</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Whether you're a solo practitioner or managing a small firm — here's how Invoicemonk fits your legal billing workflow</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Litigation & Disputes</h3>
                  <p className="text-sm text-muted-foreground">
                    Log billable hours as you work on a case — research, drafting, court appearances, client consultations. At the end of the billing cycle, generate an itemized invoice showing every time entry with dates and descriptions. Corporate clients get the transparency they require.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Retainer-Based Advisory</h3>
                  <p className="text-sm text-muted-foreground">
                    Set up retainer agreements with monthly billing. Invoicemonk tracks the retainer balance, deducts each invoice from the pool, and automatically sends replenishment invoices when the balance runs low. Clients always know where their retainer stands.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Transaction & Conveyancing</h3>
                  <p className="text-sm text-muted-foreground">
                    Bill for property transactions, company formations, or contract drafting with milestone-based invoicing. Collect an initial deposit, bill at key milestones, and send a final invoice on completion. Each document is cryptographically verified for regulatory confidence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Common legal billing challenges — solved</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">We built Invoicemonk around the real problems legal professionals face</p>
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
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How it works</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">From client onboarding to compliance reporting — in four steps</p>
            <div className="space-y-8">
              {workflowSteps.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">{item.step}</div>
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

      {/* Why Choose */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Why lawyers choose Invoicemonk over alternatives</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Legal billing has unique requirements that generic invoicing software doesn't address. Lawyers need time-based billing with detailed descriptions, retainer management with balance tracking, and compliance-grade audit trails. Most invoicing tools treat these as afterthoughts — Invoicemonk builds them in from the start.
              </p>
              <p>
                Every invoice Invoicemonk generates includes a cryptographic verification code and QR code. This means any client, auditor, or regulator can independently verify the authenticity of your billing documents — a level of transparency that builds trust and satisfies compliance requirements without extra work on your part.
              </p>
              <p>
                For small firms, the team management features let associates and paralegals log time entries while partners retain control over invoicing and client relationships. Role-based access ensures everyone has the right level of visibility without compromising sensitive client information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What lawyers get with Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Time-based hourly billing', 'Retainer management', 'Matter-based tracking', 'Detailed billing statements', 'Automatic payment reminders', 'Expense tracking per case', 'Professional branding', 'Multi-currency support', 'Secure document storage', 'Tax-compliant records', 'Team member access controls', 'Cryptographic verification'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div></div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by legal professionals</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50"><CardContent className="p-8"><p className="text-foreground mb-6 italic">"{t.quote}"</p><div><p className="font-semibold text-foreground">{t.author}</p><p className="text-sm text-muted-foreground">{t.role}</p></div></CardContent></Card>
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

      {/* Related reading */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Related reading</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blog/freelance-time-tracking-guide" className="text-primary hover:underline">Time Tracking & Invoicing</Link>
            <Link to="/blog/how-to-write-invoice-payment-terms" className="text-primary hover:underline">Payment Terms Guide</Link>
            <Link to="/guides/getting-paid" className="text-primary hover:underline">Getting Paid Faster</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to modernize your legal billing?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join legal professionals who trust Invoicemonk for compliant, professional invoicing.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Lawyers;
