import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Target, FileText, Shield, TrendingUp, Clock, DollarSign, Eye, Settings } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'What is milestone billing?', answer: 'Milestone billing splits a project into distinct phases, with payment due at the completion of each phase. For example, a web developer might bill 30% as a deposit, 40% at design approval, and the remaining 30% at launch. This model protects both the service provider and the client by tying payments to tangible deliverables.' },
  { question: 'How do I create milestone invoices in Invoicemonk?', answer: 'Create separate invoices for each milestone with clear descriptions of the deliverables completed. Link them to the same client for easy tracking. You can also create all milestone invoices upfront as drafts and send them as each phase is completed.' },
  { question: 'Can I combine milestone billing with deposits?', answer: 'Absolutely. The most common approach is to send a deposit invoice before work begins (typically 25–50% of the total), then progress invoices at each milestone, and a final balance invoice at completion. Invoicemonk tracks all linked invoices so you can see the total project value and amount collected at a glance.' },
  { question: 'What industries use milestone billing?', answer: 'Milestone billing is standard in photography (booking → proofs → finals), web development (deposit → design → development → launch), construction (foundation → framing → completion), architecture, consulting engagements, video production, and any project-based service with distinct phases.' },
  { question: 'How does milestone billing protect my cash flow?', answer: 'By collecting payment at each project phase, you avoid the risk of completing an entire project before receiving any payment. If a client becomes unresponsive or disputes the work, your exposure is limited to the current phase rather than the full project value.' },
  { question: 'Can clients see all their milestone invoices in one place?', answer: 'Yes. Clients can access their invoice history through Invoicemonk\'s verification portal, where they can view all invoices related to their project, check payment status, and download receipts for their records.' },
  { question: 'What percentage should I charge as a deposit?', answer: 'Industry standards vary, but most service providers charge 25–50% as an initial deposit. For high-value projects, a 30% deposit is common. The deposit covers your initial investment of time and materials and signals the client\'s commitment to the project.' },
  { question: 'Can I adjust milestone amounts after the project starts?', answer: 'Yes. If the project scope changes, you can create additional milestone invoices or adjust upcoming ones. Invoicemonk keeps a complete history of all invoices, so scope changes are fully documented for both parties.' },
];

export default function MilestoneBilling() {
  return (
    <Layout>
      <SEOHead
        title="Milestone Billing & Progress Invoicing | Invoicemonk"
        description="Bill clients at project milestones with deposit, progress, and final invoices. Perfect for photographers, developers, and project-based businesses. Free tier available."
        canonical="https://invoicemonk.com/use-cases/milestone-billing"
      />
      <FAQSchema items={faqs} />

      <PageHero
        badge={{ icon: Target, text: 'Milestone Billing' }}
        title="Bill at every project milestone"
        accentWord="milestone"
        description="Collect deposits, send progress invoices, and bill final balances — all tied to clear project milestones."
        primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
        secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
        backgroundVariant="gradient"
      />

      {/* Editorial overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Why milestone billing is the smartest way to invoice projects</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Waiting until a project is complete to send an invoice is one of the biggest cash flow mistakes service businesses make. Milestone billing solves this by breaking payment into phases that align with project deliverables — ensuring you're compensated as you deliver value, not weeks or months after the work is done. For the client, it provides built-in checkpoints where they can review progress before the next payment is due, building trust on both sides.
            </p>
            <p>
              The psychology behind milestone billing is powerful. Clients who pay in stages feel more invested in the project's success and are more engaged with feedback and approvals. From your perspective, regular payments maintain healthy cash flow and reduce the financial risk of large projects. If a project is cancelled mid-way, you've already been compensated for the work completed — unlike the all-or-nothing approach where cancellation means chasing payment for work already delivered.
            </p>
            <p>
              Invoicemonk makes milestone billing straightforward. Create invoices for each phase with clear descriptions of the deliverables, link them to the same client and project, and track the overall project value against payments received. Your client can verify each invoice through their portal, creating a transparent record that eliminates disputes and builds long-term trust.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How milestone billing works</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Break projects into billable phases for better cash flow and client trust</p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: FileText, title: '1. Deposit invoice', desc: 'Collect an upfront payment (typically 25–50%) before work begins. This secures the client\'s commitment and covers your initial investment.' },
              { icon: Target, title: '2. Progress invoices', desc: 'Bill at each milestone as work is delivered and approved. Each invoice references the specific deliverables completed in that phase.' },
              { icon: TrendingUp, title: '3. Final invoice', desc: 'Send the remaining balance upon project completion. With most of the project already paid, collection is smooth and straightforward.' },
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
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How Invoicemonk supports milestone billing</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Tools designed for project-based professionals</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: FileText, title: 'Draft All Milestones Upfront', desc: 'Create all milestone invoices as drafts when the project begins. Send each one as the corresponding phase is completed — your client knows exactly what to expect and when.' },
              { icon: Eye, title: 'Client Verification Portal', desc: 'Clients can view all invoices for their project in one place, verify amounts, and download receipts. Transparency eliminates disputes before they start.' },
              { icon: DollarSign, title: 'Flexible Payment Splits', desc: 'Split projects any way you need — 50/50, 30/40/30, or custom percentages per milestone. Each invoice clearly shows the phase, deliverables, and amount due.' },
              { icon: Shield, title: 'Tax-Compliant Invoices', desc: 'Every milestone invoice includes the correct tax calculations for your jurisdiction. VAT, GST, and withholding tax are handled automatically so your invoices are always compliant.' },
              { icon: Clock, title: 'Payment Tracking Per Project', desc: 'See total project value, amount invoiced, amount paid, and outstanding balance at a glance. Know exactly where each project stands financially.' },
              { icon: Settings, title: 'Scope Change Documentation', desc: 'When project scope changes, create additional milestone invoices to document the new work. Your complete invoice history serves as a transparent record of all project changes.' },
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
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Milestone billing in action</h2>
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-semibold text-foreground text-lg mb-4">Scenario: A wedding photographer's 3-phase billing</h3>
              <p className="text-muted-foreground mb-4">
                Ngozi is a wedding photographer in Lagos who books 15–20 weddings per year at an average of ₦500,000 per event. She uses a three-milestone billing structure: 40% booking deposit when the client signs the contract, 30% on the day of the wedding, and 30% upon delivery of the final edited photos.
              </p>
              <p className="text-muted-foreground mb-4">
                Before Invoicemonk, Ngozi tracked payments in a spreadsheet and occasionally forgot to send the final invoice — losing thousands of naira in uncollected balances. With milestone billing in Invoicemonk, she creates all three invoices as drafts when booking a client. The deposit invoice sends immediately, and she marks the remaining two for manual send when each milestone is reached.
              </p>
              <p className="text-muted-foreground mb-6">
                The result: zero missed invoices, faster final payments (clients expect the invoice because they can see it in their portal), and a complete financial record for each wedding project.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">40%</p>
                  <p className="text-xs text-muted-foreground">Booking deposit</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">30%</p>
                  <p className="text-xs text-muted-foreground">Event day payment</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">30%</p>
                  <p className="text-xs text-muted-foreground">Final delivery</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Ideal for project-based professionals</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Any service with distinct project phases benefits from milestone billing</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Wedding & event photographers',
              'Web designers & developers',
              'Architects & builders',
              'Marketing & creative agencies',
              'Interior designers',
              'Video production teams',
              'Custom software developers',
              'Event planners and coordinators',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">How professionals use milestone billing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "I used to lose money on every project because I'd forget to send the final invoice. Now all milestones are set up from day one and nothing slips through.", name: 'Emeka O.', role: 'Web Developer, Enugu' },
              { quote: "My clients appreciate seeing all the milestone invoices upfront. It sets clear expectations about payment timing and they're always prepared.", name: 'Aisha B.', role: 'Interior Designer, Abuja' },
              { quote: "Milestone billing cut our payment collection time in half. Clients who can see the next invoice coming are far more likely to pay on time.", name: 'Tom R.', role: 'Video Producer, London' },
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
            <Link to="/blog/pricing-your-freelance-services" className="text-primary hover:underline">Pricing Your Services</Link>
            <Link to="/blog/invoice-essential-elements-guide" className="text-primary hover:underline">Invoice Essential Elements</Link>
            <Link to="/photographers" className="text-primary hover:underline">For Photographers</Link>
            <Link to="/creatives" className="text-primary hover:underline">For Creatives</Link>
            <Link to="/use-cases/retainer-billing" className="text-primary hover:underline">Retainer Billing</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Start billing by milestone</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Protect your cash flow with milestone invoicing. Start free — no credit card required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
