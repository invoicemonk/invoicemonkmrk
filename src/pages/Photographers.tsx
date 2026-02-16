import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Camera, FileText, Clock, TrendingUp, Shield, Image, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingPaymentBadge, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can I create milestone-based invoices for photography projects?', answer: 'Yes. Create deposit invoices, progress payments, and final balance invoices for wedding, commercial, or event photography projects. This is especially useful for weddings where you collect a booking deposit months in advance, a second payment before the shoot, and a final balance on delivery of edited images.' },
  { question: 'Does Invoicemonk support package-based pricing?', answer: 'Absolutely. Add line items for different packages (e.g., Basic, Premium, Deluxe) with clear descriptions and pricing. You can also add individual add-ons like extra hours, albums, prints, or travel fees as separate line items on the same invoice.' },
  { question: 'Can I add my photography branding to invoices?', answer: 'Yes. Upload your logo, set brand colors, and create a professional look that matches your photography style. Consistent branding across your portfolio, website, and invoices helps clients remember you and builds trust with new referrals.' },
  { question: 'How do automatic payment reminders work?', answer: 'Set reminder schedules and Invoicemonk automatically emails clients before and after payment due dates. You choose the timing — 3 days before, on the due date, and 7 days after, for example. The emails are professional and polite, so you never have to write an awkward follow-up message.' },
  { question: 'Is Invoicemonk free for photographers?', answer: 'Yes! The free tier includes 5 invoices and 5 receipts per month with no credit card required. As your photography business grows, upgrade for unlimited invoicing, recurring billing, and detailed financial reports.' },
  { question: 'Can I track expenses for each photography project?', answer: 'Yes. Record expenses like equipment rental, travel costs, props, and assistant fees. Categorise them for tax purposes, and see your true profit per project by comparing income against expenses.' },
  { question: 'Does Invoicemonk generate receipts when clients pay?', answer: 'Every payment you record automatically generates a professional receipt with a unique verification code and QR code. Clients can verify the receipt independently, and you have an audit-ready record of every transaction.' },
];

const Photographers = () => {
  const benefits = [
    { icon: Image, title: 'Package & Session Billing', description: 'Invoice for photo packages, sessions, prints, and add-ons with detailed line items. Create different pricing tiers and let clients see exactly what they\'re paying for in each package.' },
    { icon: Clock, title: 'Milestone Payments', description: 'Collect deposits upfront and balance on delivery. Perfect for weddings and events where you need to secure bookings months in advance and protect yourself against last-minute cancellations.' },
    { icon: FileText, title: 'Branded Invoices', description: 'Professional invoices that match your photography brand and impress clients. Your logo, colours, and style carried through every financial touchpoint reinforces the premium experience you deliver.' },
    { icon: Shield, title: 'Tax-Ready Records', description: 'Track income and expenses for tax season. Export reports for your accountant. Every invoice and receipt is automatically categorised and stored, so year-end filing takes minutes instead of days.' },
  ];

  const testimonials = [
    { quote: "I used to dread invoicing after shoots. Now it takes 2 minutes. The deposit invoice feature is perfect for weddings — I send the booking invoice right after the consultation and the client pays within days.", author: "Funke A.", role: "Wedding Photographer" },
    { quote: "My clients love the professional invoices. It makes my small business look established and trustworthy. The QR verification code on each invoice is a nice touch that adds credibility.", author: "James K.", role: "Commercial Photographer" },
    { quote: "Juggling event bookings used to mean juggling spreadsheets. Now I have one dashboard showing every booking, every deposit, every balance due. I can see my cash flow months ahead.", author: "Ngozi P.", role: "Event Photographer" },
  ];

  const painPoints = [
    {
      problem: 'Chasing wedding clients for final payments weeks after delivering photos',
      solution: 'Automated reminders send polite follow-ups before and after the due date, so you get paid without the awkward conversation.',
    },
    {
      problem: 'Creating invoices in Word or Excel that look unprofessional next to your stunning portfolio',
      solution: 'Branded invoice templates with your logo and colours that match the premium quality of your photography work.',
    },
    {
      problem: 'Losing track of which clients have paid deposits and which still owe balances',
      solution: 'A unified dashboard shows every invoice status — deposit paid, balance due, overdue — across all your bookings at a glance.',
    },
    {
      problem: 'Spending hours at tax time trying to calculate income and find expense receipts',
      solution: 'All invoices and expenses are automatically categorised and exportable. Tax filing takes minutes, not days.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Book the client',
      description: 'After a consultation or enquiry, add the client\'s details to Invoicemonk and send a deposit invoice immediately. The client receives a professional email with a link to view the invoice and your payment details. Securing payment early confirms the booking and protects your schedule.',
    },
    {
      step: '2',
      title: 'Shoot and deliver',
      description: 'Focus entirely on the creative work. When you\'re ready to deliver edited images, create the final balance invoice in under two minutes. Add line items for the package, any add-ons (extra hours, prints, albums), and send it alongside the gallery delivery.',
    },
    {
      step: '3',
      title: 'Get paid automatically',
      description: 'Invoicemonk tracks when clients open the invoice and sends automatic reminders if payment is late. You never have to write a follow-up email. When payment arrives, record it and an official receipt is generated automatically with a verification code.',
    },
    {
      step: '4',
      title: 'Track and report',
      description: 'At any point, see your total income, outstanding balances, and expenses per project. At tax time, export everything your accountant needs in one click. Your financial records are always organised and audit-ready.',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoice Software for Photographers | Invoicemonk"
        description="Create professional photography invoices with milestone payments, package billing, and branded templates. Perfect for wedding, event, and commercial photographers."
        canonical="https://invoicemonk.com/photographers"
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <div className="relative">
        <PageHero
          badge={{ icon: Camera, text: 'For Photographers' }}
          title="Invoicing made simple for photographers"
          accentWord="photographers"
          description="Create deposit invoices, bill for photo packages, and get paid faster. Focus on capturing moments, not chasing payments."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by professional photographers"
          backgroundVariant="gradient"
        />
        <FloatingInvoiceCard className="absolute top-32 right-8 lg:right-24 hidden lg:block" delay={0.4} variant="paid" />
        <FloatingPaymentBadge className="absolute top-48 left-8 lg:left-20 hidden lg:block" delay={0.6} />
        <FloatingIcon icon={Camera} className="absolute bottom-32 right-12 lg:right-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for photography professionals</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Everything you need to handle the business side of photography — so you can spend more time behind the camera</p>
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

      {/* How Photographers Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How photographers use Invoicemonk</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Whether you shoot weddings, events, portraits, or commercial work — here's how Invoicemonk fits your workflow</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Wedding Photography</h3>
                  <p className="text-sm text-muted-foreground">
                    Send a deposit invoice after the consultation to lock in the date. Create a second invoice before the wedding day, and a final balance invoice when you deliver the edited gallery. Track all three payments in one place and never lose track of a wedding booking again.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Commercial & Product Shoots</h3>
                  <p className="text-sm text-muted-foreground">
                    Bill corporate clients with detailed, itemized invoices showing shoot fees, post-production, licensing, and usage rights as separate line items. Professional invoices with your branding and verification codes meet procurement standards for larger companies.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Mini Sessions & Events</h3>
                  <p className="text-sm text-muted-foreground">
                    Run mini session events with multiple clients in one day. Create invoices for each client quickly using saved package templates. Track which clients have paid and which need a reminder — all from your phone between sessions.
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
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Common photography business challenges — solved</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">We built Invoicemonk around the real problems photographers face every day</p>
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
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">From booking to tax time — in four simple steps</p>
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
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Why photographers choose Invoicemonk over alternatives</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Most invoicing tools are designed for consultants and agencies — not for creative professionals who need deposit workflows, package-based pricing, and branded documents that match their portfolio aesthetic. Photographers need something faster, simpler, and more visual.
              </p>
              <p>
                Invoicemonk lets you create an invoice in under two minutes, right after a shoot or consultation. Your branding carries through every invoice, so the professionalism clients see in your photos extends to your business communications. Deposit invoices, milestone payments, and package billing are built in — not bolted on.
              </p>
              <p>
                And because every invoice comes with a verification QR code and audit trail, your corporate and agency clients get the documentation their procurement teams require. No extra work on your part — compliance happens automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What photographers get with Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Unlimited professional invoices', 'Deposit & milestone billing', 'Package-based pricing', 'Custom branding & logo', 'Automatic payment reminders', 'Expense tracking per project', 'Income reports', 'Multi-currency support', 'Client management', 'Tax-compliant records', 'Verified receipts with QR codes', 'PDF downloads with your branding'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div></div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by photographers</h2>
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
            <Link to="/blog/invoice-design-professional-branding-tips" className="text-primary hover:underline">Invoice Design & Branding</Link>
            <Link to="/blog/pricing-your-freelance-services" className="text-primary hover:underline">Pricing Your Services</Link>
            <Link to="/guides/getting-paid" className="text-primary hover:underline">Getting Paid Faster</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to simplify your photography billing?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join photographers who trust Invoicemonk for professional invoicing.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Photographers;
