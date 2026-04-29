import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ItemListSchema } from '@/components/seo/ItemListSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { LayoutTemplate, Calculator, DollarSign, ArrowRightLeft, ArrowRight, Globe } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const BASE = 'https://invoicemonk.com';

const tools = [
  { key: 'invoiceTemplates', href: '/invoice-templates', icon: LayoutTemplate },
  { key: 'feeCalculator', href: '/international-payment-fee-calculator', icon: Calculator },
  { key: 'rateCalculator', href: '/freelancer-rate-calculator', icon: DollarSign },
  { key: 'paypalVsWise', href: '/paypal-vs-wise-fees', icon: ArrowRightLeft },
  { key: 'cheapestPayments', href: '/cheapest-way-to-receive-international-payments', icon: Globe },
];

export default function ToolsIndex() {
  const { t } = useTranslation('home');
  const itemsRaw = t('freeTools.items', { returnObjects: true });
  const items = Array.isArray(itemsRaw) ? itemsRaw as { name: string; description: string }[] : [];

  const hubTitle = t('toolsHub.title', { defaultValue: 'Free Tools to Run Your Business' });
  const hubSubtitle = t('toolsHub.subtitle', { defaultValue: 'Free tools for freelancers and small businesses: invoice templates, fee calculators, and rate calculators.' });
  const hubContextual = t('toolsHub.contextual', { defaultValue: 'Whether you need a professional invoice template, want to compare international payment fees, or need to calculate your freelance rate — Invoicemonk\'s free tools have you covered.' });
  const hubFaqTitle = t('toolsHub.faqTitle', { defaultValue: 'Frequently Asked Questions' });
  const hubSeoTitle = t('toolsHub.seoTitle', { defaultValue: 'Free Business Tools — Invoice Templates, Fee Calculator & More | Invoicemonk' });
  const hubSeoDesc = t('toolsHub.seoDescription', { defaultValue: 'Free tools for freelancers and small businesses: invoice templates, international payment fee calculator, freelancer rate calculator, and payment comparisons.' });

  const faqsRaw = t('toolsHub.faqs', { returnObjects: true });
  const faqs = Array.isArray(faqsRaw)
    ? (faqsRaw as { question: string; answer: string }[])
    : [
        { question: 'Are Invoicemonk tools really free?', answer: 'Yes. The tools listed here are 100% free to use.' },
        { question: 'Do I need an account to use these tools?', answer: 'No account is needed for the calculators and reference tools on this page. To actually issue and send invoices, sign up for the Invoicemonk free plan (5 invoices per month).' },
        { question: 'Which tool should I use first?', answer: 'Start with the Invoice Templates if you need ideas for billing a new client, or the Payment Fee Calculator if you receive international payments.' },
        { question: 'Can I use these tools for my business?', answer: 'Absolutely. These tools are designed for freelancers, contractors, consultants, and small businesses.' },
      ];

  // Build ItemList schema items
  const schemaItems = tools.map((tool, i) => ({
    name: items[i]?.name || tool.key,
    url: `${BASE}/en${tool.href}`,
    description: items[i]?.description || '',
  }));

  return (
    <Layout>
      <SEOHead title={hubSeoTitle} description={hubSeoDesc} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Tools', url: '/tools' },
      ]} />
      <ItemListSchema
        name="Invoicemonk Free Business Tools"
        description={hubSubtitle}
        items={schemaItems}
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {hubTitle.includes('Run Your Business') ? (
                <>Free Tools to{' '}<span className="font-serif italic text-primary">Run Your Business</span></>
              ) : hubTitle}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {hubSubtitle}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const item = items[index];
              if (!item) return null;
              return (
                <StaggerItem key={tool.key}>
                  <Link
                    to={tool.href}
                    className="group flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-body-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {item.name}
                      </h2>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="mt-auto text-body-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      Try it free <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Contextual paragraph for semantic cluster */}
          <AnimatedSection className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-body text-muted-foreground">
              {hubContextual}
            </p>
          </AnimatedSection>

          {/* FAQ Section */}
          <section className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{hubFaqTitle}</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-border rounded-xl p-6 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-body-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
