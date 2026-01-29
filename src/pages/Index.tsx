import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { WaveProductTabs } from '@/components/home/WaveProductTabs';
import { WaveFeatureBenefits } from '@/components/home/WaveFeatureBenefits';
import { WaveTestimonials } from '@/components/home/WaveTestimonials';
import { WavePersonaSection } from '@/components/home/WavePersonaSection';
import { HomeBlogSection } from '@/components/home/HomeBlogSection';
import { FAQSection } from '@/components/home/FAQSection';
import { WaveCTASection } from '@/components/home/WaveCTASection';

const Index = () => {
  return (
    <Layout>
      {/* Flow: Hero -> Products -> Benefits -> Testimonials -> Personas -> Blog -> FAQ -> CTA */}
      <HeroSection />
      <WaveProductTabs />
      <WaveFeatureBenefits />
      <WaveTestimonials />
      <WavePersonaSection />
      <HomeBlogSection />
      <FAQSection />
      <WaveCTASection />
    </Layout>
  );
};

export default Index;
