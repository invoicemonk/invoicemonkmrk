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
import { homepageFAQs } from '@/data/homepageFAQs';

const Index = () => {
  const { locale } = useLocale();
  const seo = pageSEO['/'];

  return (
    <>
      <SEOHead
        title={seo.getTitle(locale)}
        description={seo.getDescription(locale)}
        canonical="https://invoicemonk.com/"
      />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <FAQSchema items={homepageFAQs} />
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
