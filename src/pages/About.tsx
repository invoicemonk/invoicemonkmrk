import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const About = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">About Us</p>
            <h1 className="text-h1 text-heading mb-6">Simplifying invoicing for everyone</h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              Invoicemonk was born from a simple idea: invoicing shouldn't be complicated. We believe freelancers and small business owners deserve tools that are powerful yet simple, professional yet approachable.
            </p>
            <p className="text-body text-muted-foreground">
              Our mission is to help businesses of all sizes get paid faster while staying compliant with regulatory requirements. We're committed to building software that respects your time and makes financial management less stressful.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
