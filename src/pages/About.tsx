import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { MissionVision } from '@/components/about/MissionVision';
import { PressSection } from '@/components/about/PressSection';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/LocalizedLink';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const faqKeys = ['whoFounded', 'mission', 'availability'] as const;

const About = () => {
  const seo = pageSEO['/about'];
  const { t } = useTranslation('about');

  const aboutFAQs = faqKeys.map(key => ({
    question: t(`faqs.${key}.question`),
    answer: t(`faqs.${key}.answer`),
  }));

  const bullets = ['bullet1', 'bullet2', 'bullet3', 'bullet4'] as const;

  return (
    <Layout>
      <FAQSchema items={aboutFAQs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]} />
      <SEOHead
        title={seo?.getTitle({} as any) || 'About Invoicemonk | Our Story & Mission'}
        description={seo?.getDescription({} as any) || 'Learn about Invoicemonk - the invoicing and accounting platform built for businesses worldwide.'}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">{t('hero.label')}</p>
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-body-lg text-muted-foreground mb-6">
              {t('hero.description')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              {/* Paragraph 1 — with internal links */}
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                {t('story.p1prefix')}{' '}
                <Link to="/invoicing" className="text-primary hover:underline">
                  {t('story.invoicingLink')}
                </Link>{' '}
                {t('story.and')}{' '}
                <Link to="/payments" className="text-primary hover:underline">
                  {t('story.paymentsLink')}
                </Link>{' '}
                {t('story.to')}{' '}
                <Link to="/client-management" className="text-primary hover:underline">
                  {t('story.clientLink')}
                </Link>{' '}
                {t('story.p1suffix')}
              </p>

              {/* Paragraph 2 */}
              <p className="text-body-lg text-muted-foreground leading-relaxed mt-6">
                {t('story.p2')}
              </p>

              {/* Paragraph 3 — bullet list */}
              <p className="text-body-lg text-muted-foreground leading-relaxed mt-6">
                {t('story.p3intro')}
              </p>
              <ul className="mt-4 space-y-3 text-left max-w-md mx-auto list-none pl-0">
                {bullets.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-body text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{t(`story.${key}`)}</span>
                  </li>
                ))}
              </ul>

              {/* Paragraph 4 — with blog & estimates links */}
              <p className="text-body-lg text-muted-foreground leading-relaxed mt-6">
                {t('story.p4prefix')}{' '}
                <Link to="/blog" className="text-primary hover:underline">
                  {t('story.blogLink')}
                </Link>{' '}
                {t('story.p4mid')}{' '}
                <Link to="/estimates" className="text-primary hover:underline">
                  {t('story.estimatesLink')}
                </Link>{' '}
                {t('story.p4suffix')}
              </p>

              {/* Closing statement */}
              <p className="text-body-lg text-foreground font-semibold leading-relaxed mt-8">
                {t('story.closing')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <MissionVision />
          </AnimatedSection>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <PressSection />
          </AnimatedSection>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-heading-lg font-bold text-foreground mb-4">
              {t('openRoles.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8">
              {t('openRoles.description')}
            </p>
            <Button asChild>
              <Link to="/contact">
                {t('openRoles.cta')} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
