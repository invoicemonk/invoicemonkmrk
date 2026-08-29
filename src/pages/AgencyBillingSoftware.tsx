import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  CheckCircle,
  Repeat,
  Users,
  Clock,
  BarChart3,
  FileStack,
  Globe,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { Link } from '@/components/LocalizedLink';

const SIGNUP_URL =
  'https://app.invoicemonk.com/signup?plan=professional&utm_source=site&utm_medium=cta&utm_campaign=agency_billing';

const capabilities = [
  {
    icon: Repeat,
    title: 'Retainer billing on autopilot',
    description:
      'Set a monthly retainer per client once. Invoices generate, send, and chase themselves on the same date every month, so recurring revenue stops depending on someone remembering.',
  },
  {
    icon: Clock,
    title: 'Billable hours and overage',
    description:
      'Bill the retainer, then add the hours that went beyond scope as separate line items on the same invoice — with the description the client can actually approve.',
  },
  {
    icon: FileStack,
    title: 'Project and campaign line items',
    description:
      'One invoice, itemised by campaign, channel, or deliverable: SEO retainer, paid media management fee, content production, ad spend pass-through.',
  },
  {
    icon: Users,
    title: 'Many clients, one dashboard',
    description:
      'No per-client limits and no plan upgrade when you land account eleven. Every client, invoice, estimate, and payment status in one place.',
  },
  {
    icon: BarChart3
    ,
    title: 'Receivables you can forecast',
    description:
      'See what is billed, what is overdue, and by how many days — per client and in total — so you know payroll is covered before the month starts.',
  },
  {
    icon: Globe,
    title: 'Cross-border clients',
    description:
      'Multi-currency invoicing and country-correct tax fields for agencies with clients in the US, UK, EU, and beyond, including e-invoicing mandate formats.',
  },
];

const workflows = [
  {
    title: 'SEO agencies',
    description:
      'Monthly retainers per client, plus one-off technical audits and migration projects. Invoice the retainer automatically, add audit work as a line item, and keep ad-hoc consulting hours separate from scope.',
  },
  {
    title: 'Paid media and performance agencies',
    description:
      'Management fee, percentage-of-spend, and ad spend pass-through on one invoice — clearly separated so the client sees exactly what is your fee and what is media.',
  },
  {
    title: 'Creative and content studios',
    description:
      'Deposit up front, milestone invoices during production, balance on delivery — with deliverables remaining your property until the final invoice clears.',
  },
];

const problems = [
  {
    problem: 'Retainer invoices go out late because they are built manually each month.',
    solution: 'Recurring invoices send on a fixed schedule, so the first of the month is not a task.',
  },
  {
    problem: 'Scope creep is delivered but never billed.',
    solution: 'Overage hours attach to the retainer invoice as separate, defensible line items.',
  },
  {
    problem: 'Chasing payment eats account-manager time.',
    solution: 'Automatic reminders escalate on their own schedule before, on, and after the due date.',
  },
  {
    problem: 'Client count is capped by the invoicing plan.',
    solution: 'Unlimited clients on one plan — growth does not trigger a pricing tier.',
  },
  {
    problem: 'Ad spend pass-through inflates apparent revenue.',
    solution: 'Pass-through lines are itemised separately from fees for clean reporting.',
  },
];

const comparison = [
  { feature: 'Recurring retainer invoicing', invoicemonk: 'Included', others: 'Higher tiers only' },
  { feature: 'Client limit', invoicemonk: 'Unlimited', others: '5–50 by plan' },
  { feature: 'Automatic payment reminders', invoicemonk: 'Included', others: 'Often paid add-on' },
  { feature: 'Multi-currency invoicing', invoicemonk: 'Included', others: 'Higher tiers only' },
  { feature: 'Entry price', invoicemonk: '$15/month', others: '$19–$35/month' },
];

const faqs = [
  {
    question: 'What is the best billing software for an SEO agency?',
    answer:
      'An SEO agency needs recurring retainer invoicing, billable-hour overage on the same invoice, unlimited clients, and automatic payment reminders. Invoicemonk includes all four from $15/month with no per-client cap, which is why it suits agencies billing 10–100 retainer clients.',
  },
  {
    question: 'How do agencies bill monthly retainers?',
    answer:
      'Set the retainer amount and billing date per client, invoice on the same day each month in advance of the work, and add any out-of-scope hours as separate line items. Recurring invoicing sends and chases these automatically so retainer revenue arrives on a predictable date.',
  },
  {
    question: 'How should an agency invoice ad spend pass-through?',
    answer:
      'Keep the management fee and the media spend as separate line items, label the pass-through explicitly, and show the fee basis (flat or percentage of spend). This keeps client reporting clean and stops pass-through from inflating your revenue figures.',
  },
  {
    question: 'Can Invoicemonk handle both retainers and project work for the same client?',
    answer:
      'Yes. A client can carry a recurring retainer and separate project or milestone invoices at the same time, and both appear in one receivables view per client.',
  },
  {
    question: 'What payment terms should an agency use for retainers?',
    answer:
      'Most agencies invoice retainers in advance on Net 15 or due-on-receipt terms so the month is funded before the work happens. Project work is more commonly Net 30 with a deposit up front.',
  },
];

export default function AgencyBillingSoftware() {
  return (
    <Layout>
      <SEOHead
        title="Billing Software for SEO & Marketing Agencies (2026)"
        description="Agency billing software for retainers, billable hours, and ad spend pass-through. Automated recurring invoices, unlimited clients, and payment reminders from $15/month."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Agencies', url: '/agencies' },
          { name: 'Agency Billing Software', url: '/agency-billing-software' },
        ]}
      />
      <WebPageSchema
        name="Billing Software for SEO & Marketing Agencies"
        description="Retainer billing, billable hours, ad spend pass-through, and automated reminders for SEO, paid media, and creative agencies."
        url="/agency-billing-software"
        isPartOf={{ name: 'Agencies', url: '/agencies' }}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <Repeat className="w-3.5 h-3.5" /> Built for retainer-based agencies
          </span>
          <h1 className="text-heading-xl font-bold text-foreground mb-5">
            Billing software for SEO and marketing agencies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Retainers that invoice themselves, out-of-scope hours billed on the same invoice, ad spend
            kept separate from your fee, and reminders that chase payment without an account manager
            doing it. Unlimited clients from $15/month.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                Start billing clients <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
            What agency billing actually requires
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Agency billing is not one invoice to one customer. It is recurring revenue, variable
            overage, and pass-through costs across a portfolio of clients — every month.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((c, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agency types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            How different agencies bill
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {workflows.map((w, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems / solutions */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            The five things that cost agencies money
          </h2>
          <div className="space-y-6">
            {problems.map((p, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-4 items-start">
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                  <p className="text-sm text-foreground">{p.problem}</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm text-foreground">{p.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
            Invoicemonk vs typical agency invoicing plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-3 font-semibold text-foreground">Invoicemonk Pro</th>
                  <th className="text-left p-3 font-semibold text-foreground">Typical alternative</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 text-foreground">{row.feature}</td>
                    <td className="p-3 text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                        {row.invoicemonk}
                      </span>
                    </td>
                    <td className="p-3 text-muted-foreground">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Alternative pricing reflects publicly listed entry plans and can change; check the
            vendor's current pricing page before deciding.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
            Frequently asked questions
          </h2>
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

      {/* Related */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Related reading</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/agencies" className="text-primary hover:underline">Invoicemonk for agencies</Link>
            <Link to="/blog/how-to-write-invoice-payment-terms" className="text-primary hover:underline">Invoice payment terms</Link>
            <Link to="/blog/setting-up-automatic-payment-reminders" className="text-primary hover:underline">Automatic payment reminders</Link>
            <Link to="/compare/best-invoicing-software-usa" className="text-primary hover:underline">Best invoicing software USA</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Bill every retainer on time</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Recurring invoices, overage line items, unlimited clients, and automatic reminders — from
            $15/month.
          </p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
              Get started with Invoicemonk <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
