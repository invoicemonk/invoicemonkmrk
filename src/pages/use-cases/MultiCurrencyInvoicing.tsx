import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Globe, DollarSign, Shield, BarChart3, RefreshCw, Settings, Users, TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from '@/components/LocalizedLink';

const faqs = [
  { question: 'How many currencies does Invoicemonk support?', answer: 'Invoicemonk supports all major world currencies including USD, EUR, GBP, NGN, CAD, AUD, and many more. You can set up currency accounts and invoice each client in their preferred currency, regardless of where your business is based.' },
  { question: 'Does Invoicemonk handle exchange rates?', answer: 'You can set custom exchange rates for each invoice or let Invoicemonk use current market rates. All conversions are clearly displayed on invoices so both you and your client can see the exact rate applied. This transparency helps avoid disputes over currency conversions.' },
  { question: 'Can I have multiple currency accounts?', answer: 'Yes. Free plans include 1 currency account, Starter includes 3, and Professional/Business plans support unlimited currency accounts. Each account tracks revenue, expenses, and outstanding invoices in that currency independently.' },
  { question: 'Is multi-currency invoicing free?', answer: 'Multi-currency invoicing is available on all plans. The free tier supports 1 currency account, with more available on paid plans. Even on the free tier, you can create invoices in any currency — the limit applies to the number of separate currency accounts for tracking.' },
  { question: 'How do I handle tax on multi-currency invoices?', answer: 'Invoicemonk calculates tax based on the invoice currency and your configured tax rates. If you invoice a UK client in GBP, VAT is calculated in GBP. If you invoice a Nigerian client in NGN, VAT is calculated in NGN. Tax compliance is maintained regardless of the currency used.' },
  { question: 'Can I see all my revenue in one currency for reporting?', answer: 'Yes. Invoicemonk\'s reporting dashboard can consolidate revenue across all currencies into your base currency for unified financial reporting. This gives you a clear picture of total revenue without manually converting amounts.' },
  { question: 'What about receiving payments in different currencies?', answer: 'Invoicemonk handles invoicing and tracking. For receiving payments, we integrate with payment providers that support multi-currency collection. Check our international payment fee calculator to find the cheapest way to receive payments from abroad.' },
  { question: 'Do clients see the invoice in their local currency?', answer: 'Yes. When you create an invoice in a client\'s local currency, they see all amounts — line items, taxes, totals — in that currency. This makes the invoice immediately understandable and reduces payment friction.' },
];

export default function MultiCurrencyInvoicing() {
  return (
    <Layout>
      <SEOHead
        title="Multi-Currency Invoicing Software | Invoice in Any Currency | Invoicemonk"
        description="Send invoices in any currency. Multi-currency support for freelancers and businesses with international clients. Automatic exchange rates and tax compliance. Free tier available."
        canonical="https://invoicemonk.com/use-cases/multi-currency-invoicing"
      />
      <FAQSchema items={faqs} />

      <PageHero
        badge={{ icon: Globe, text: 'Multi-Currency' }}
        title="Invoice clients in any currency"
        accentWord="currency"
        description="Bill international clients in their local currency. Invoicemonk handles conversions and keeps your books organized across currencies."
        primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
        secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
        backgroundVariant="gradient"
      />

      {/* Editorial overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Why multi-currency invoicing is essential for global businesses</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              If you work with international clients, invoicing in their local currency isn't just a convenience — it's a competitive advantage. Research consistently shows that invoices sent in the recipient's currency are paid faster, with fewer disputes over amounts. When a client in London receives an invoice in GBP instead of NGN or USD, there's no confusion about the amount due, no mental conversion, and no excuse to delay payment while "figuring out the exchange rate."
            </p>
            <p>
              For businesses in Nigeria, the UK, Canada, Australia, and the US, multi-currency invoicing is increasingly the norm rather than the exception. Freelancers on platforms like Upwork and Fiverr routinely serve clients across multiple countries. Agencies win international contracts. E-commerce businesses sell globally. Yet many invoicing tools either don't support multiple currencies or charge premium prices for the feature — forcing small businesses to use workarounds like manual spreadsheet conversions that introduce errors and look unprofessional.
            </p>
            <p>
              Invoicemonk includes multi-currency support on every plan, including the free tier. Create invoices in any currency, set custom or market exchange rates, and track revenue per currency or consolidated into your base currency. Every invoice is tax-compliant in the relevant jurisdiction, professionally formatted, and delivered with the same payment reminders and client portal access as single-currency invoices.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Why multi-currency matters</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Billing in your client's currency improves payment speed, professionalism, and trust</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, title: 'Global Reach', desc: 'Invoice clients anywhere in the world in their local currency. No geographical limitations — if they have a currency, you can invoice in it.' },
              { icon: DollarSign, title: 'Flexible Exchange Rates', desc: 'Set custom rates for specific invoices or use market exchange rates. Invoicemonk clearly displays the rate used on each invoice for full transparency.' },
              { icon: Shield, title: 'Tax Compliance Per Currency', desc: 'Tax calculations adjust automatically based on the invoice currency and your configured rates. VAT, GST, sales tax — all handled correctly regardless of the currency.' },
              { icon: BarChart3, title: 'Unified Revenue Reports', desc: 'See revenue across all currencies consolidated into your base currency. Track which currencies generate the most revenue and identify your most profitable markets.' },
              { icon: RefreshCw, title: 'Recurring Multi-Currency', desc: 'Combine multi-currency with recurring billing for international retainer clients. Bill a UK client in GBP monthly and an Australian client in AUD quarterly — all automated.' },
              { icon: Users, title: 'Client-Friendly Invoices', desc: 'Clients see amounts in their own currency with no conversion confusion. This removes a common barrier to timely payment and projects professionalism.' },
            ].map((b, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-world example */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Multi-currency invoicing in action</h2>
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-semibold text-foreground text-lg mb-4">Scenario: A freelance developer serving clients in 4 countries</h3>
              <p className="text-muted-foreground mb-4">
                Tunde is a freelance software developer based in Lagos who works with clients in Nigeria, the UK, the US, and Canada. Before Invoicemonk, he invoiced everyone in USD and let clients figure out the conversion — leading to payment delays averaging 12 days as clients questioned amounts or waited for "good" exchange rates.
              </p>
              <p className="text-muted-foreground mb-4">
                With Invoicemonk, Tunde now invoices each client in their local currency: NGN for Nigerian clients, GBP for UK clients, USD for US clients, and CAD for Canadian clients. Each invoice shows the exact amount due with no conversion ambiguity. He set up 4 currency accounts to track revenue per market.
              </p>
              <p className="text-muted-foreground mb-6">
                The result: average payment time dropped from 23 days to 11 days, currency-related disputes disappeared entirely, and Tunde can now see which market generates the highest revenue — information he uses to focus his business development efforts.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">52%</p>
                  <p className="text-xs text-muted-foreground">Faster payments</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">0</p>
                  <p className="text-xs text-muted-foreground">Currency disputes</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-xs text-muted-foreground">Currency accounts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What global businesses say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Invoicing my UK clients in GBP instead of NGN cut my average payment time from 3 weeks to 10 days. It's that simple — when they see their own currency, they pay faster.", name: 'Kemi A.', role: 'UX Designer, Lagos' },
              { quote: "I work with clients in 6 countries. Having all my revenue consolidated into one dashboard while billing each client locally is exactly what I needed.", name: 'Marcus T.', role: 'Marketing Consultant, Toronto' },
              { quote: "The multi-currency feature is why I chose Invoicemonk over Wave. Wave only works in the US and Canada — I needed something truly global.", name: 'Amara N.', role: 'Content Strategist, Accra' },
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
            <Link to="/blog/international-payment-fees-explained" className="text-primary hover:underline">International Payment Fees Explained</Link>
            <Link to="/international-payment-fee-calculator" className="text-primary hover:underline">Payment Fee Calculator</Link>
            <Link to="/ecommerce" className="text-primary hover:underline">For E-commerce</Link>
            <Link to="/cheapest-way-to-receive-international-payments" className="text-primary hover:underline">Cheapest International Payments</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Go global with your invoicing</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Start invoicing in multiple currencies — free. No credit card required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
