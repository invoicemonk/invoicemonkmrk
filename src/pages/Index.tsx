import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { GlobalComplianceSection } from '@/components/home/GlobalComplianceSection';
import { CompliancePositioningSection } from '@/components/home/CompliancePositioningSection';
import { WaveProductTabs } from '@/components/home/WaveProductTabs';
import { WaveFeatureBenefits } from '@/components/home/WaveFeatureBenefits';
import { ComplianceTrustSection } from '@/components/home/ComplianceTrustSection';
import { WaveTestimonials } from '@/components/home/WaveTestimonials';
import { WavePersonaSection } from '@/components/home/WavePersonaSection';
import { HomeBlogSection } from '@/components/home/HomeBlogSection';
import { FAQSection } from '@/components/home/FAQSection';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { SEOHead } from '@/components/seo/SEOHead';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
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
      <Layout>
        <HeroSection />
        <GlobalComplianceSection />
        <CompliancePositioningSection />
        <WaveProductTabs />
        <WaveFeatureBenefits />
        <ComplianceTrustSection />
        <WaveTestimonials />
        <WavePersonaSection />
        <HomeBlogSection />
        <FAQSection />
        <WaveCTASection />
      </Layout>
    </>
  );
};

export default Index;
