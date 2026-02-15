import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, FileText, TrendingUp, Shield, Zap } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingInvoiceCard, 
  FloatingPaymentBadge, 
  FloatingCalendarBadge 
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { pageSEO } from '@/components/seo/seoConfig';
import { useLocale } from '@/hooks/useLocale';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Is Invoicemonk free for freelancers?', answer: 'Yes! The free tier includes 5 invoices and 5 receipts per month with no credit card required. Upgrade anytime as your freelance business grows.' },
  { question: 'Can I send invoices in different currencies?', answer: 'Absolutely. Invoicemonk supports multi-currency invoicing, so you can bill international clients in their preferred currency.' },
  { question: 'How do automatic payment reminders work?', answer: 'Set a reminder schedule and Invoicemonk automatically emails your clients before and after the payment due date — no manual follow-up needed.' },
  { question: 'Can I add my logo and branding to invoices?', answer: 'Yes. Upload your logo, choose brand colors, and create professional invoices that reflect your personal brand.' },
  { question: 'Does Invoicemonk help with taxes?', answer: 'Invoicemonk keeps tax-compliant records, tracks expenses, and generates income reports that make tax filing straightforward.' },
];

const Freelancers = () => {
  const benefits = [
    {
      icon: FileText,
      title: 'Professional Invoices',
      description: 'Create branded invoices that impress clients and get you paid faster.',
    },
    {
      icon: Clock,
      title: 'Automatic Reminders',
      description: 'Never chase payments manually. Set up automated payment reminders.',
    },
    {
      icon: TrendingUp,
      title: 'Track Your Income',
      description: 'See all your earnings in one place with clear income reports.',
    },
    {
      icon: Shield,
      title: 'Tax-Ready Records',
      description: 'Keep compliant records that make tax season stress-free.',
    },
  ];

  const testimonials = [
    {
      quote: "Invoicemonk has transformed how I handle my freelance finances. I spend less time on admin and more time on actual work.",
      author: "Adaeze N.",
      role: "Freelance Designer",
    },
    {
      quote: "The automatic reminders alone have improved my cash flow significantly. Clients pay on time now.",
      author: "Chidi O.",
      role: "Web Developer",
    },
  ];

  const { locale } = useLocale();
  const seo = pageSEO['/freelancers'];

  return (
    <Layout>
      <SEOHead
        title={seo?.getTitle(locale) || 'Invoicing for Freelancers | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Professional invoicing for freelancers. Get paid faster and stay compliant.'}
        canonical="https://invoicemonk.com/freelancers"
      />
      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Zap, text: 'For Freelancers' }}
          title="Invoicing made simple for freelancers"
          accentWord="freelancers"
          description="Spend less time on paperwork and more time doing what you love. Invoicemonk handles your invoicing, so you can focus on your craft."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Join freelancers who trust Invoicemonk"
          backgroundVariant="gradient"
        />
        <FloatingInvoiceCard className="absolute top-32 right-8 lg:right-24 hidden lg:block" delay={0.4} variant="paid" />
        <FloatingPaymentBadge className="absolute top-48 left-8 lg:left-20 hidden lg:block" delay={0.6} />
        <FloatingCalendarBadge className="absolute bottom-32 right-12 lg:right-32 hidden lg:block" delay={0.8} />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
            Built for independent professionals
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Everything you need to manage your freelance finances professionally
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

      {/* Checklist */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
              What freelancers get with Invoicemonk
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Unlimited professional invoices',
                'Custom branding and logo',
                'Multiple payment options',
                'Automatic payment reminders',
                'Expense tracking',
                'Income reports',
                'Multi-currency support',
                'Client management',
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
            Trusted by freelancers
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            <Link to="/blog/pricing-freelance-services" className="text-primary hover:underline">Pricing Your Services</Link>
            <Link to="/blog/freelance-portfolio-guide" className="text-primary hover:underline">Portfolio Guide</Link>
            <Link to="/guides/freelancing" className="text-primary hover:underline">Freelancing Guide</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">
            Ready to simplify your freelance finances?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join thousands of freelancers who trust Invoicemonk for their invoicing needs.
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

export default Freelancers;
