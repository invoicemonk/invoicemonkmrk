import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, ShoppingCart, Globe, Shield, Package, RefreshCw, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingPaymentBadge, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from '@/components/LocalizedLink';

const faqs = [
  { question: 'Can I create bulk invoices for wholesale orders?', answer: 'Yes. Create invoices with multiple line items, quantity pricing, and wholesale discounts for B2B orders. Add product codes, descriptions, quantities, and tiered pricing to give wholesale buyers the detailed documentation they need for their purchasing records.' },
  { question: 'Does Invoicemonk support multi-currency for international e-commerce?', answer: 'Absolutely. Invoice international buyers in their preferred currency with automatic formatting. Whether you ship products to Europe, North America, or Asia, each buyer receives an invoice in their local currency with the correct tax structure and compliance details.' },
  { question: 'Can I set up recurring invoices for subscription products?', answer: 'Yes. Automate recurring billing for subscription boxes, memberships, or regular supply orders. Set the amount, frequency, and start date — Invoicemonk generates and sends the invoice automatically each cycle, so your subscribers never miss a billing period.' },
  { question: 'How does Invoicemonk handle shipping and tax on invoices?', answer: 'Add shipping as a separate line item with its own cost. Configure tax rates per region or country, and Invoicemonk calculates taxes automatically on every invoice. This is essential for e-commerce sellers shipping to multiple jurisdictions with different tax rules.' },
  { question: 'Is there a free plan for small e-commerce sellers?', answer: 'Yes! Start free with 5 invoices and 5 receipts per month. The free tier is perfect for sellers just starting their B2B or wholesale operations. Upgrade as your business grows and you need features like unlimited invoicing, recurring billing, advanced reporting, and multi-currency support.' },
  { question: 'Can I add product images or descriptions to invoices?', answer: 'Yes. Add detailed product descriptions, SKU numbers, and specifications to each line item. This helps wholesale buyers and procurement departments match invoices to their purchase orders and receiving records.' },
  { question: 'How do I handle returns and credit notes?', answer: 'Create credit notes linked to original invoices for returns, damaged goods, or billing corrections. The credit note references the original invoice number and adjusts the customer\'s balance automatically. This keeps your records clean and professional.' },
  { question: 'Can I track expenses related to my e-commerce business?', answer: 'Yes. Track product costs, shipping expenses, packaging materials, platform fees, and marketing costs. Categorise expenses by product line or sales channel to understand your true margins and make better pricing decisions.' },
];

const Ecommerce = () => {
  const benefits = [
    {
      icon: Package,
      title: 'Order-Based Invoicing',
      description: 'Create detailed invoices for individual orders or bulk wholesale purchases with itemised line items, product codes, and quantity pricing. Perfect for B2B transactions where buyers need formal documentation for their procurement records.',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Billing',
      description: 'Sell globally and invoice buyers in their local currency without manual conversion. Each invoice is formatted with the correct currency symbol, tax structure, and compliance details for that market — making international sales seamless.',
    },
    {
      icon: RefreshCw,
      title: 'Subscription Billing',
      description: 'Automate recurring invoices for subscription boxes, membership products, or regular supply orders. Set the schedule once and Invoicemonk handles every billing cycle — so your subscribers receive consistent, professional invoices on time.',
    },
    {
      icon: Shield,
      title: 'Tax Compliance',
      description: 'Automatic tax calculations for different regions and countries. Configure VAT, GST, or sales tax per jurisdiction and Invoicemonk applies the correct rates on every invoice. Stay compliant as you sell across borders without manual tax lookups.',
    },
  ];

  const testimonials = [
    {
      quote: "I sell handmade products on multiple platforms. Invoicemonk helps me manage B2B wholesale invoicing professionally. My retail buyers get itemised invoices with product codes and quantities, which makes their accounting easier and gets me paid faster.",
      author: "Blessing I.",
      role: "E-commerce Seller",
    },
    {
      quote: "The multi-currency feature is essential for my dropshipping business. International clients get invoices in their currency, which removes a huge friction point. I've seen my payment speed improve significantly since switching to Invoicemonk.",
      author: "Ola P.",
      role: "Online Retailer",
    },
    {
      quote: "Managing subscription billing manually was a nightmare with 200+ subscribers. Invoicemonk's recurring invoices handle everything automatically. I just review the queue once a month and focus on growing the product instead of chasing payments.",
      author: "Adaeze K.",
      role: "Subscription Box Founder",
    },
  ];

  const painPoints = [
    {
      problem: 'Wholesale buyers need detailed, formal invoices that match their purchase orders',
      solution: 'Create itemised invoices with product codes, descriptions, quantities, and tiered pricing. Add PO references so buyers can match invoices to their procurement records instantly.',
    },
    {
      problem: 'Manually sending recurring invoices to subscription customers each month',
      solution: 'Automated recurring invoices generate and send on schedule for every subscriber. No manual work required — just set the amount, frequency, and let Invoicemonk handle each cycle.',
    },
    {
      problem: 'Tax compliance across multiple jurisdictions is complex and error-prone',
      solution: 'Configure tax rates per region once. Invoicemonk applies the correct VAT, GST, or sales tax automatically on every invoice, keeping you compliant as you sell across borders.',
    },
    {
      problem: 'No visibility into true margins after accounting for shipping, fees, and returns',
      solution: 'Track all costs — product, shipping, packaging, platform fees — per product line or sales channel. Understand your actual margins and price products for sustainable profitability.',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Set up your product catalogue',
      description: 'Add your products with descriptions, SKU numbers, and standard pricing. For wholesale customers, configure tiered pricing based on quantity. Save these as templates so creating future invoices is a one-click operation rather than re-entering product details every time.',
    },
    {
      step: '2',
      title: 'Create customer profiles',
      description: 'Add each buyer with their billing address, contact details, preferred currency, and payment terms. For subscription customers, set up recurring invoice schedules. For wholesale buyers, save their standard order templates and PO number format. All details are stored for repeat orders.',
    },
    {
      step: '3',
      title: 'Invoice and track',
      description: 'Generate invoices for individual orders, bulk purchases, or recurring subscriptions. Each invoice includes itemised line items with product codes, quantities, shipping, and tax — all calculated automatically. Send instantly and track payment status from your dashboard.',
    },
    {
      step: '4',
      title: 'Analyse and optimise',
      description: 'Review revenue reports by customer, product line, or sales channel. Track expenses against revenue to understand true margins. Use this data to make pricing decisions, identify your most profitable products, and focus your marketing on the channels that deliver the best return.',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing for E-commerce Sellers | Invoicemonk"
        description="Professional invoicing for e-commerce businesses. B2B wholesale billing, multi-currency invoicing, and subscription billing for online sellers."
        canonical="https://invoicemonk.com/ecommerce"
      />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: ShoppingCart, text: 'For E-commerce' }}
          title="Invoicing built for e-commerce sellers"
          accentWord="e-commerce"
          description="Create professional invoices for B2B orders, wholesale buyers, and subscription products. Manage multi-currency billing with ease."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by online sellers and e-commerce businesses"
          backgroundVariant="gradient"
        />
        <FloatingInvoiceCard className="absolute top-32 right-8 lg:right-24 hidden lg:block" delay={0.4} variant="paid" />
        <FloatingPaymentBadge className="absolute top-48 left-8 lg:left-20 hidden lg:block" delay={0.6} />
        <FloatingIcon icon={ShoppingCart} className="absolute bottom-32 right-12 lg:right-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for online sellers</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Everything you need to invoice customers, manage wholesale accounts, and track your e-commerce finances professionally</p>
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

      {/* How E-commerce Sellers Use Invoicemonk */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              How e-commerce sellers use Invoicemonk
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Whether you sell wholesale, run subscriptions, or ship internationally — here's how Invoicemonk fits your business
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Wholesale & B2B Orders</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive a wholesale order, create an itemised invoice with product codes, quantities, and tiered pricing, then send it with your payment terms. Include PO references so the buyer's procurement team can process payment quickly. Track all outstanding wholesale invoices from your dashboard.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Subscription Products</h3>
                  <p className="text-sm text-muted-foreground">
                    Set up recurring invoices for subscription boxes, membership products, or regular supply orders. Invoicemonk generates and sends invoices automatically each cycle. When customers upgrade, downgrade, or cancel, adjust the recurring schedule in seconds without disrupting other subscribers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Cross-Border Sales</h3>
                  <p className="text-sm text-muted-foreground">
                    Sell to buyers in different countries and invoice each one in their local currency. A European buyer gets an invoice in EUR with VAT, a US buyer in USD with sales tax, and a Nigerian buyer in NGN. Each invoice is formatted with the correct tax structure and compliance details for that market.
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
              Common e-commerce challenges — solved
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We built Invoicemonk around the real billing problems online sellers face
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
              From product setup to revenue analysis — streamlined for e-commerce operations
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

      {/* Why E-commerce Sellers Choose Invoicemonk */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
              Why e-commerce sellers choose Invoicemonk over alternatives
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Most invoicing tools are built for service businesses — consultants, freelancers, agencies. E-commerce sellers have fundamentally different needs: product-based line items with SKUs and quantities, tiered wholesale pricing, shipping cost tracking, and tax compliance across multiple jurisdictions. Invoicemonk handles all of these without forcing you into a service-business workflow.
              </p>
              <p>
                Unlike marketplace platforms that only handle transactions within their ecosystem, Invoicemonk gives you professional invoicing for B2B sales, wholesale orders, and subscription products across any channel. Whether your buyers find you on Shopify, Amazon, or through direct outreach, every order gets a proper invoice that meets procurement standards.
              </p>
              <p>
                And unlike complex ERP systems that require weeks of setup and training, Invoicemonk is designed for e-commerce operators who need to move fast. Add your products, create customer profiles, and start invoicing in minutes. As your business scales from dozens to hundreds of orders, the recurring billing and automated reminders keep your cash flow healthy without adding admin overhead.
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
              What e-commerce sellers get with Invoicemonk
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Unlimited professional invoices',
                'B2B wholesale invoicing',
                'Multi-currency support',
                'Subscription billing',
                'Automatic payment reminders',
                'Shipping & tax line items',
                'Customer management',
                'Expense tracking',
                'Revenue reports',
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
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by e-commerce sellers</h2>
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
            <Link to="/blog/international-payment-fees-explained" className="text-primary hover:underline">International Payment Fees</Link>
            <Link to="/guides/invoicing" className="text-primary hover:underline">Invoicing Guide</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to professionalize your e-commerce billing?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join e-commerce sellers who trust Invoicemonk for wholesale, subscription, and international invoicing.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Ecommerce;
