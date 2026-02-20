import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Building2, Users, BarChart3, Shield, FileText, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingChartCard,
  FloatingInvoiceCard,
  FloatingIcon
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { pageSEO } from '@/components/seo/seoConfig';
import { useLocale } from '@/hooks/useLocale';
import { Link } from '@/components/LocalizedLink';

const faqs = [
  { question: 'Is Invoicemonk suitable for a business with multiple team members?', answer: 'Yes. On Professional and Business plans, invite team members with role-based access. Owners and admins manage invoicing and settings, while members can create invoices and manage clients. Everyone works from the same dashboard.' },
  { question: 'Can I track expenses alongside invoices?', answer: 'Absolutely. Record business expenses, categorise them (office supplies, travel, marketing, etc.), and see your true profitability. Export expense reports for your accountant at any time.' },
  { question: 'Does Invoicemonk support recurring invoices?', answer: 'Yes. Set up automatic monthly, quarterly, or custom-schedule invoices for retainer clients or ongoing services. Invoicemonk generates and sends them on time, every time.' },
  { question: 'How does multi-currency support work?', answer: 'Create separate currency accounts for each currency you operate in (e.g., NGN, USD, GBP). Each currency account keeps invoices, expenses, and reports cleanly separated — no confusing exchange rate calculations.' },
  { question: 'Is there a free plan for small businesses?', answer: 'Yes! Start free with 5 invoices and 5 receipts per month. Upgrade as your business grows for unlimited invoicing, team management, financial reports, and more.' },
  { question: 'Can I generate financial reports?', answer: 'Yes. Professional and Business plans include revenue reports, expense summaries, profit & loss statements, and compliance reports. All reports are single-currency for accuracy and exportable as CSV or JSON.' },
  { question: 'How does Invoicemonk help with compliance?', answer: 'Every invoice includes your tax identification number, is cryptographically verified with a QR code, and stored with an immutable audit trail. Export compliance-ready reports for regulators or auditors at any time.' },
];

const SmallBusinesses = () => {
  const benefits = [
    {
      icon: FileText,
      title: 'Streamlined Invoicing',
      description: 'Create, send, and track invoices for multiple clients effortlessly. Save client details and item templates so repeat invoices take under two minutes. Track every invoice from draft to paid.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Add team members with role-based access to manage finances together. Owners control billing and settings, while team members create invoices and manage clients from a shared dashboard.',
    },
    {
      icon: BarChart3,
      title: 'Business Insights',
      description: 'Get clear reports on revenue, outstanding payments, and cash flow. See which clients bring the most revenue, track payment aging, and make informed decisions about pricing and capacity.',
    },
    {
      icon: Shield,
      title: 'Compliance Built-In',
      description: 'Stay audit-ready with automatic compliance and record-keeping. Every document is cryptographically verified and stored with an immutable audit trail — no manual filing required.',
    },
  ];

  const useCases = [
    {
      title: 'Retail & E-commerce',
      description: 'Manage inventory invoicing and track customer payments seamlessly. Create invoices for wholesale orders, track outstanding balances, and maintain clean records for tax season.',
    },
    {
      title: 'Professional Services',
      description: 'Bill clients by the hour or project with detailed time tracking. From accountants to consultants, send professional invoices that reflect the quality of your expertise.',
    },
    {
      title: 'Agencies',
      description: 'Handle multiple clients and recurring retainer invoices easily. Track revenue per client, manage team billing, and generate reports that show agency profitability at a glance.',
    },
    {
      title: 'Consulting',
      description: 'Create proposals and convert them to invoices seamlessly. Track project milestones, bill against retainers, and maintain detailed records for enterprise clients.',
    },
  ];

  const painPoints = [
    {
      problem: 'Spending hours each week creating invoices, chasing payments, and reconciling records manually',
      solution: 'Automated invoicing, payment reminders, and receipt generation handle the repetitive work — freeing up 10+ hours per month for running your business.',
    },
    {
      problem: 'No clear picture of cash flow — unsure which invoices are outstanding and when money will arrive',
      solution: 'A real-time dashboard shows every invoice status, outstanding balances, and payment aging. See your complete financial picture at a glance.',
    },
    {
      problem: 'Scrambling at tax time to find invoices, receipts, and expense records across spreadsheets and email',
      solution: 'All financial records are automatically organised, categorised, and exportable. Generate compliance-ready reports in one click.',
    },
    {
      problem: 'Outgrowing basic tools but not ready for expensive enterprise accounting software',
      solution: 'Invoicemonk scales from solo to team — start free, add team members and features as you grow. Professional tools without the enterprise price tag.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Set up your business',
      description: 'Create your business profile with your company details, tax ID, logo, and payment methods. Complete your profile to 100% so every invoice is automatically compliant with local regulations. Add currency accounts for each currency you operate in.',
    },
    {
      step: '2',
      title: 'Add clients and start invoicing',
      description: 'Add your clients once — name, email, tax ID, billing address. From then on, creating an invoice is a few clicks: select the client, add line items, set payment terms, and send. The client receives a professional email with your branding.',
    },
    {
      step: '3',
      title: 'Track payments and expenses',
      description: 'When clients pay, record the payment and an official receipt is generated automatically. Track business expenses by category — office, travel, software, marketing. Your financial picture stays up to date without manual reconciliation.',
    },
    {
      step: '4',
      title: 'Report and grow',
      description: 'Generate revenue reports, expense summaries, and profit & loss statements. Understand which clients and services are most profitable. At tax time, export everything your accountant needs. As you grow, invite team members and delegate invoicing.',
    },
  ];

  const { locale } = useLocale();
  const seo = pageSEO['/small-businesses'];

  return (
    <Layout>
      <SEOHead
        title={seo?.getTitle(locale) || 'Invoicing for Small Businesses | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Complete invoicing and accounting solution for small businesses.'}
        canonical="https://invoicemonk.com/small-businesses"
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <div className="relative">
        <PageHero
          badge={{ icon: Building2, text: 'For Small Businesses' }}
          title="Financial tools that grow with your business"
          accentWord="grow"
          description="From invoicing to expense tracking, Invoicemonk gives small businesses the financial infrastructure they need to operate professionally and scale."
          primaryCta={{ text: 'Start Free Trial', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Business Plans', href: '/pricing', external: false }}
          stats={[
            { value: '50%', label: 'Faster payments' },
            { value: '10hrs', label: 'Saved monthly' },
            { value: '100%', label: 'Audit-ready' }
          ]}
          backgroundVariant="gradient"
        />
        <FloatingChartCard className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingInvoiceCard className="absolute bottom-48 left-8 lg:left-16 hidden lg:block" delay={0.6} />
        <FloatingIcon icon={Users} className="absolute top-52 left-12 lg:left-28 hidden lg:block" delay={0.8} size="sm" />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for growing businesses</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Everything you need to manage business finances professionally — from your first invoice to year-end reporting</p>
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

      {/* How Small Businesses Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How small businesses use Invoicemonk</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Whether you're in retail, services, or consulting — here's how Invoicemonk fits your operations</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Common small business challenges — solved</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">We built Invoicemonk around the real problems small business owners face every day</p>
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
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">From setup to scaling — in four simple steps</p>
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
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Why small businesses choose Invoicemonk over alternatives</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Most small businesses start with spreadsheets or basic templates for invoicing. As they grow, they realise they need something better — but enterprise accounting software is expensive, complex, and built for companies with dedicated finance teams. There's a gap in the middle, and that's exactly where Invoicemonk fits.
              </p>
              <p>
                Invoicemonk gives you professional invoicing, expense tracking, team management, and financial reporting without the learning curve or the enterprise price tag. Start free, upgrade as you grow, and always have tools that match your current stage — not tools you'll grow into years from now.
              </p>
              <p>
                Every document Invoicemonk generates is cryptographically verified with a QR code and stored with an immutable audit trail. This means your business is always audit-ready — not just at year-end, but every single day. Compliance happens automatically, not as an afterthought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Everything your business needs</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Unlimited invoices and clients',
                'Custom branding and templates',
                'Team member access controls',
                'Automated payment reminders',
                'Expense tracking and categorization',
                'Revenue and cash flow reports',
                'Multi-currency support',
                'Recurring invoice automation',
                'Client portal access',
                'Tax-compliant audit trails',
                'Cryptographic verification',
                'Priority customer support',
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

      {/* Stats */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-muted-foreground">Faster payment collection</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10hrs</div>
              <p className="text-muted-foreground">Saved per month on admin</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Audit-ready compliance</p>
            </div>
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
            <Link to="/blog/small-business-accounting-basics" className="text-primary hover:underline">Accounting Basics</Link>
            <Link to="/blog/how-to-create-a-budget-for-your-small-business" className="text-primary hover:underline">Business Budget Guide</Link>
            <Link to="/guides/business-finances" className="text-primary hover:underline">Business Finances Guide</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to streamline your business finances?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join growing businesses that trust Invoicemonk for their financial operations.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SmallBusinesses;
