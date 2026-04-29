import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileText, CheckCircle, Star, Users, Globe, Pencil } from 'lucide-react';
import { InvoiceTemplatePreview } from '@/components/invoice-templates/InvoiceTemplatePreview';
import { RelatedTools } from '@/components/tools/RelatedTools';

const SIGNUP_URL = 'https://app.invoicemonk.com/signup?utm_source=invoice_templates&utm_medium=cta&utm_campaign=template_to_signup';

interface InvoiceTemplateItem {
  id: string;
  name: string;
  description: string;
  image: string;
  bestFor: string[];
  features: string[];
  popular?: boolean;
}

const templates: InvoiceTemplateItem[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean, contemporary design with bold accent colors. Perfect for tech companies, agencies, and modern businesses that want a polished, professional look.',
    image: '/images/tools/invoice-template-modern.jpg',
    bestFor: ['Tech Companies', 'Agencies', 'Startups'],
    features: ['Color-coded sections', 'Logo placement', 'Tax breakdown', 'Payment terms'],
    popular: true,
  },
  {
    id: 'classic',
    name: 'Classic Elegant',
    description: 'Traditional, formal layout with serif typography. Ideal for law firms, accounting practices, and established businesses that value a timeless, authoritative aesthetic.',
    image: '/images/tools/invoice-template-classic.jpg',
    bestFor: ['Law Firms', 'Accountants', 'Consultants'],
    features: ['Formal header', 'Detailed line items', 'Professional footer', 'Reference numbers'],
  },
  {
    id: 'minimal',
    name: 'Minimal Clean',
    description: 'Ultra-simple design with generous white space. Great for freelancers, designers, and creatives who prefer a sleek, uncluttered invoice.',
    image: '/images/tools/invoice-template-minimal.jpg',
    bestFor: ['Freelancers', 'Designers', 'Photographers'],
    features: ['Minimal layout', 'Easy to read', 'Brand-friendly', 'Quick to fill'],
  },
  {
    id: 'contractor',
    name: 'Contractor & Trades',
    description: 'Detailed layout with project breakdowns, labor vs. materials sections, and job reference fields. Built for builders, electricians, and trade professionals.',
    image: '/images/tools/invoice-template-modern.jpg',
    bestFor: ['Contractors', 'Electricians', 'Plumbers'],
    features: ['Project breakdown', 'Labor & materials', 'Job references', 'Progress billing'],
  },
  {
    id: 'consulting',
    name: 'Consulting & Retainer',
    description: 'Structured for hourly billing and retainer tracking. Includes time entries, hourly rates, and retainer balance sections for professional services.',
    image: '/images/tools/invoice-template-classic.jpg',
    bestFor: ['Consultants', 'Coaches', 'Advisors'],
    features: ['Hourly tracking', 'Retainer balance', 'Project phases', 'Expense reimbursement'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Wholesale',
    description: 'Optimized for product-based billing with SKU fields, quantity discounts, and shipping breakdowns. Perfect for online sellers and wholesalers.',
    image: '/images/tools/invoice-template-minimal.jpg',
    bestFor: ['E-commerce', 'Wholesale', 'Retail'],
    features: ['SKU fields', 'Quantity discounts', 'Shipping breakdown', 'Order references'],
  },
];

const faqs = [
  { question: 'Are these invoice templates really free?', answer: 'Yes — every template is free to view and use as a reference. To create, customize, and send invoices with these designs, sign up for Invoicemonk — the free plan includes 5 invoices per month.' },
  { question: 'Can I add my logo to the invoice?', answer: 'Yes. With a free Invoicemonk account you can upload your logo, set brand colors, and apply it to any of these templates. Supports PNG, JPG, and SVG.' },
  { question: 'Are these templates tax-compliant?', answer: 'Yes. Every template includes fields for tax registration numbers (GST, VAT, ABN, GSTIN), tax breakdowns, and the compliance details required by tax authorities worldwide.' },
  { question: 'Can I customize colors and fonts?', answer: 'Yes. Sign up for Invoicemonk to fully brand your invoices with custom colors, fonts, and layouts on top of any template.' },
  { question: 'How do I send a finished invoice to my client?', answer: 'Create the invoice inside Invoicemonk, then send it from your dashboard with a built-in payment link, automatic reminders, and full payment tracking.' },
  { question: 'Do I need an account?', answer: 'You need a free Invoicemonk account to actually issue invoices. The free plan includes 5 invoices per month — more than enough to get started.' },
];

const stats = [
  { icon: Users, label: 'Used by 50,000+ businesses', value: '50K+' },
  { icon: Globe, label: 'Countries supported', value: '190+' },
  { icon: Star, label: 'Average rating', value: '4.9/5' },
];

export default function InvoiceTemplates() {
  return (
    <Layout>
      <SEOHead
        title="Free Invoice Templates 2026 — Download & Customize PDF Templates | Invoicemonk"
        description="Browse 6 professional invoice templates for freelancers, contractors, consultants, and small businesses. Customize with your logo, download as PDF — 100% free, no signup."
        ogImage="https://invoicemonk.com/images/tools/invoice-templates-gallery.jpg"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Tools', url: '/tools' },
        { name: 'Invoice Templates', url: '/invoice-templates' },
      ]} />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <Badge variant="secondary" className="mb-4">Free plan: 5 invoices / month</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Free Invoice Templates for Every Business
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose from 6 professionally designed invoice templates. Download a sample PDF instantly, or customize with your own details — all free.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <stat.icon className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">{stat.value}</span>
                <span>{stat.label.replace(/^\S+\s/, '')}</span>
              </div>
            ))}
          </div>
          <Button asChild size="lg">
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
              Create Your Invoice Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">Browse All Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((tmpl) => (
              <Card key={tmpl.id} className="overflow-hidden border border-border hover:shadow-lg transition-shadow group">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted group-hover:scale-[1.02] transition-transform duration-300">
                  <InvoiceTemplatePreview templateId={tmpl.id} />
                  {tmpl.popular && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">Most Popular</Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{tmpl.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tmpl.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tmpl.bestFor.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <ul className="space-y-1.5 mb-6">
                    {tmpl.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full gap-2">
                    <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                      <Pencil className="h-4 w-4" /> Use This Template in Invoicemonk
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">How to Use These Templates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Browse Templates', desc: 'Explore our collection of industry-specific invoice templates to find the right fit for your business.' },
              { step: '2', title: 'Create Your Account', desc: 'Sign up for Invoicemonk in under a minute — the free plan includes 5 invoices per month with full template, branding, and tax support.' },
              { step: '3', title: 'Send to Your Client', desc: 'Issue the invoice from your dashboard with a built-in payment link, automatic reminders, and full payment tracking.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                Start Creating — Free Plan Available <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry-specific section for internal linking */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-4">Templates for Every Industry</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Whether you're a freelancer, contractor, or agency — we have an invoice template designed for your business.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Freelancers', url: '/freelancers', desc: 'Simple, professional invoices' },
              { label: 'Contractors', url: '/contractors', desc: 'Project & trade billing' },
              { label: 'Consultants', url: '/consultants', desc: 'Hourly & retainer invoicing' },
              { label: 'Photographers', url: '/photographers', desc: 'Milestone & package billing' },
              { label: 'Agencies', url: '/agencies', desc: 'Multi-project invoicing' },
              { label: 'Lawyers', url: '/lawyers', desc: 'Legal billing & time tracking' },
              { label: 'Accountants', url: '/accountants', desc: 'Multi-client billing' },
              { label: 'E-commerce', url: '/ecommerce', desc: 'Product & wholesale invoicing' },
              { label: 'Creatives', url: '/creatives', desc: 'Design & project billing' },
            ].map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-colors"
              >
                <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground text-sm">{link.label}</span>
                  <p className="text-xs text-muted-foreground">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-border pb-6 last:border-0">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <RelatedTools currentHref="/invoice-templates" />
        </div>
      </section>
    </Layout>
  );
}
