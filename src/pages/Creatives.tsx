import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Palette, Clock, FileText, Shield, Sparkles, Layers, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingPaymentBadge, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can I invoice for different creative services on one invoice?', answer: 'Yes. Add multiple line items for design, illustration, copywriting, video editing, or any creative service on a single invoice. Each line item can have its own rate, quantity, and description — so clients see exactly what they\'re paying for.' },
  { question: 'Does Invoicemonk support project-based and hourly billing?', answer: 'Absolutely. Bill per project with flat rates, or track hours and bill based on time spent. You can mix both on a single invoice — for example, a flat fee for branding strategy plus hourly rates for execution.' },
  { question: 'Can I add my creative branding to invoices?', answer: 'Yes. Upload your logo, choose brand colors, and create invoices that reflect your creative identity. Your invoices become an extension of your portfolio — consistent, professional, and memorable.' },
  { question: 'How do deposit invoices work for creative projects?', answer: 'Create a deposit invoice for upfront payment (typically 30–50% of the project), then a final invoice for the balance upon project completion. Invoicemonk tracks both against the same client, so you always know what\'s outstanding.' },
  { question: 'Is there a free plan for creative freelancers?', answer: 'Yes! The free tier includes 5 invoices and 5 receipts per month with no credit card required. Perfect for creatives who are just getting started or taking on occasional projects.' },
  { question: 'Can I set up recurring invoices for retainer clients?', answer: 'Yes. Set up automatic monthly invoices for retainer agreements — common for ongoing design, content creation, or social media management contracts. Invoicemonk generates and sends them on schedule.' },
  { question: 'Does Invoicemonk handle international clients?', answer: 'Yes. Multi-currency support lets you invoice international clients in their local currency. Each invoice shows the correct currency symbol and amount, and your payment details for that currency.' },
];

const Creatives = () => {
  const benefits = [
    { icon: Sparkles, title: 'Project-Based Billing', description: 'Invoice per project with deposits, milestones, and final payments. Perfect for design sprints, brand identity projects, and creative campaigns where billing happens in stages.' },
    { icon: Clock, title: 'Hourly & Flat Rate', description: 'Bill by the hour or per project. Mix both billing types on a single invoice — flat rate for creative direction, hourly for execution. Clients appreciate the transparency.' },
    { icon: Palette, title: 'On-Brand Invoices', description: 'Create invoices that look as good as your creative work. Custom branding and professional templates ensure every client touchpoint reinforces your identity and attention to detail.' },
    { icon: Shield, title: 'Financial Clarity', description: "Track income across clients and projects. Know exactly what you're earning, what's outstanding, and which clients are your most valuable. Make informed decisions about pricing and capacity." },
  ];

  const testimonials = [
    { quote: "As a graphic designer, my invoices need to look professional. Invoicemonk lets me create branded invoices in seconds — they match my portfolio aesthetic and clients always comment on how polished everything looks.", author: "Yemi D.", role: "Graphic Designer" },
    { quote: "I juggle multiple creative projects simultaneously. The project-based invoicing and payment tracking keep everything organized. I can see at a glance which clients owe me and which projects are profitable.", author: "Tola F.", role: "Freelance Illustrator" },
    { quote: "The deposit invoice feature changed my business. I used to start projects without payment, and sometimes clients would ghost. Now I always collect 50% upfront before starting any creative work.", author: "Kemi R.", role: "Brand Designer" },
  ];

  const painPoints = [
    {
      problem: 'Starting creative projects without securing payment, then chasing clients who vanish',
      solution: 'Send deposit invoices before starting work. Clients pay upfront, confirming their commitment and protecting your time and creative energy.',
    },
    {
      problem: 'Invoices that look generic and unprofessional next to your stunning portfolio work',
      solution: 'Branded templates with your logo and colours ensure every invoice is an extension of your creative identity — polished and memorable.',
    },
    {
      problem: 'Losing track of which projects are paid, which have outstanding balances, and what you actually earned last month',
      solution: 'A unified dashboard shows every invoice status, total income by client, and outstanding balances — updated in real time.',
    },
    {
      problem: 'Spending evenings on admin instead of creating — writing invoices, chasing payments, filing receipts',
      solution: 'Automated reminders, recurring invoices, and automatic receipt generation handle the admin so you can focus on creative work.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Scope the project and quote',
      description: 'After the client brief, add their details to Invoicemonk and send a deposit invoice outlining the project scope, deliverables, and payment terms. The client receives a professional email with your branding and a clear payment link.',
    },
    {
      step: '2',
      title: 'Create and deliver',
      description: 'Focus on the creative work. When you deliver final assets, create the balance invoice in under two minutes. Add line items for each deliverable — logo files, brand guidelines, social media templates — so the client sees the full value of what they received.',
    },
    {
      step: '3',
      title: 'Get paid on time',
      description: 'Invoicemonk sends automatic reminders before and after the due date. You can see when the client opens the invoice. Most clients pay within a week when reminders are active — no awkward follow-up conversations needed.',
    },
    {
      step: '4',
      title: 'Track and grow',
      description: 'Review income reports to see which services and clients are most profitable. Use expense tracking to understand your true margins. At tax time, export everything your accountant needs in one click.',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing for Creatives & Designers | Invoicemonk"
        description="Professional invoicing for graphic designers, illustrators, videographers, and creative freelancers. Project billing, branded invoices, and payment tracking."
        canonical="https://invoicemonk.com/creatives"
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <div className="relative">
        <PageHero
          badge={{ icon: Palette, text: 'For Creatives' }}
          title="Invoicing as creative as your work"
          accentWord="creative"
          description="Beautiful, branded invoices for designers, illustrators, and creative professionals. Bill per project, track payments, and focus on your craft."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by designers and creative professionals"
          backgroundVariant="gradient"
        />
        <FloatingInvoiceCard className="absolute top-32 right-8 lg:right-24 hidden lg:block" delay={0.4} variant="paid" />
        <FloatingPaymentBadge className="absolute top-48 left-8 lg:left-20 hidden lg:block" delay={0.6} />
        <FloatingIcon icon={Palette} className="absolute bottom-32 right-12 lg:right-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for creative professionals</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Spend less time on paperwork, more time creating — with tools designed for how creatives actually work</p>
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

      {/* How Creatives Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">How creatives use Invoicemonk</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Whether you're a designer, illustrator, videographer, or copywriter — here's how Invoicemonk fits your creative workflow</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Brand & Identity Projects</h3>
                  <p className="text-sm text-muted-foreground">
                    Send a deposit invoice after the discovery session. Deliver logo concepts, collect feedback, and send the final balance invoice with the complete brand package. Each line item shows deliverables clearly — logo files, brand guidelines, social templates — so clients see the full scope.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Retainer Agreements</h3>
                  <p className="text-sm text-muted-foreground">
                    Set up recurring monthly invoices for ongoing design, content, or social media management retainers. Invoicemonk generates and sends each invoice automatically, so you never miss a billing cycle. Perfect for creatives with steady client relationships.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">One-Off Commissions</h3>
                  <p className="text-sm text-muted-foreground">
                    For illustration commissions, video edits, or copywriting gigs, create a quick invoice with the project description and rate. Send it immediately after delivery while the value is fresh in the client's mind. Track payment status and let reminders handle the follow-up.
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
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Common creative business challenges — solved</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">We built Invoicemonk around the real problems creatives face every day</p>
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
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">From project brief to getting paid — in four simple steps</p>
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
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Why creatives choose Invoicemonk over alternatives</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Most invoicing tools are built for accountants, not artists. They're cluttered with features you don't need and missing the ones you do — like deposit workflows, branded templates, and project-based billing. Creatives need something that's fast, beautiful, and fits the way they actually work.
              </p>
              <p>
                Invoicemonk takes under two minutes to create and send an invoice. Your branding carries through every document, so the professionalism clients see in your portfolio extends to your business communications. Deposit invoices protect you from scope creep and no-shows. Automatic reminders handle the uncomfortable payment conversations.
              </p>
              <p>
                And because every invoice includes a verification QR code and immutable audit trail, your corporate clients get the compliance documentation their finance teams require — without you lifting a finger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What creatives get with Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Unlimited professional invoices', 'Project-based billing', 'Deposit & milestone invoicing', 'Custom branding & logo', 'Hourly and flat-rate billing', 'Automatic payment reminders', 'Expense tracking', 'Client management', 'Income reports', 'Tax-compliant records', 'Recurring invoice automation', 'Multi-currency support'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div></div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by creatives</h2>
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
            <Link to="/blog/how-to-become-a-good-graphic-designer" className="text-primary hover:underline">Graphic Designer Career Guide</Link>
            <Link to="/blog/pricing-your-freelance-services" className="text-primary hover:underline">Pricing Your Services</Link>
            <Link to="/blog/freelance-portfolio-best-practices" className="text-primary hover:underline">Portfolio Guide</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to level up your creative business?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join creative professionals who trust Invoicemonk for their invoicing.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Creatives;
