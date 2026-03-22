import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { GlobalComplianceSection } from '@/components/home/GlobalComplianceSection';
import { CompliancePositioningSection } from '@/components/home/CompliancePositioningSection';
import { WaveProductTabs } from '@/components/home/WaveProductTabs';
import { WaveFeatureBenefits } from '@/components/home/WaveFeatureBenefits';
import { ComplianceTrustSection } from '@/components/home/ComplianceTrustSection';
import { WaveTestimonials } from '@/components/home/WaveTestimonials';
import { WavePersonaSection } from '@/components/home/WavePersonaSection';
import { HomeFreeToolsSection } from '@/components/home/HomeFreeToolsSection';
import { HomeBlogSection } from '@/components/home/HomeBlogSection';
import { FAQSection } from '@/components/home/FAQSection';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { SEOHead } from '@/components/seo/SEOHead';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ItemListSchema } from '@/components/seo/ItemListSchema';
import { useLocale } from '@/hooks/useLocale';
import { pageSEO } from '@/components/seo/seoConfig';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { locale } = useLocale();
  const { t } = useTranslation('home');
  const seo = pageSEO['/'];

  const allFaqs = useMemo(() => {
    const rawItems = t('faq.items', { returnObjects: true });
    const genericFaqs = Array.isArray(rawItems) ? rawItems as { question: string; answer: string }[] : [];
    return [...genericFaqs, ...locale.content.faqs];
  }, [t, locale.content.faqs]);

  return (
    <>
      <SEOHead
        title={seo.getTitle(locale)}
        description={seo.getDescription(locale)}
      />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <FAQSchema items={allFaqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      <ItemListSchema
        name="Invoicemonk Free Business Tools"
        description="Free tools for freelancers and small businesses to create invoices, compare payment fees, and calculate rates."
        items={[
          { name: 'Free Invoice Generator', url: 'https://invoicemonk.com/en/free-invoice-generator', description: 'Create professional invoices with tax fields and instant PDF download.', sameAs: 'https://en.wikipedia.org/wiki/Invoice_generator' },
          { name: 'Invoice Templates', url: 'https://invoicemonk.com/en/invoice-templates', description: '6 industry-specific invoice templates ready to customize.', sameAs: 'https://en.wikipedia.org/wiki/Invoice' },
          { name: 'Payment Fee Calculator', url: 'https://invoicemonk.com/en/international-payment-fee-calculator', description: 'Compare fees across PayPal, Wise, Payoneer, and bank transfers.', sameAs: 'https://en.wikipedia.org/wiki/Wire_transfer' },
          { name: 'Freelancer Rate Calculator', url: 'https://invoicemonk.com/en/freelancer-rate-calculator', description: 'Calculate your ideal hourly or project rate.', sameAs: 'https://en.wikipedia.org/wiki/Freelancer' },
          { name: 'PayPal vs Wise Fees', url: 'https://invoicemonk.com/en/paypal-vs-wise-fees', description: 'Side-by-side fee comparison for international payments.', sameAs: 'https://en.wikipedia.org/wiki/Foreign_exchange_market' },
          { name: 'Invoice Generator Australia', url: 'https://invoicemonk.com/en/free-invoice-generator-australia', description: 'ATO-compliant invoices with ABN and GST fields.', sameAs: 'https://en.wikipedia.org/wiki/Australian_Taxation_Office' },
        ]}
      />
      <Layout>
        <HeroSection />
        <GlobalComplianceSection />
        <CompliancePositioningSection />
        <WaveProductTabs />
        <WaveFeatureBenefits />
        <ComplianceTrustSection />
        <WaveTestimonials />
        <WavePersonaSection />
        <HomeFreeToolsSection />
        <HomeBlogSection />
        <FAQSection />
        <WaveCTASection />
      </Layout>
    </>
  );
};

export default Index;
