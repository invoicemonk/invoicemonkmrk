import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TeamMemberCard } from '@/components/about/TeamMemberCard';
import { MissionVision } from '@/components/about/MissionVision';
import { PressSection } from '@/components/about/PressSection';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/LocalizedLink';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const faqKeys = ['whoFounded', 'mission', 'availability'] as const;

const teamMembersData = [
  {
    name: 'Olayinka Olayokun',
    roleKey: 'team.roles.ceo',
    image: '/team/olayinka-olayokun.jpg',
    socialLinks: [
      { platform: 'linkedin' as const, url: 'https://linkedin.com/in/olayokunyinka' },
      { platform: 'instagram' as const, url: 'https://instagram.com/olayokunyinka' },
      { platform: 'facebook' as const, url: 'https://facebook.com/olayokunyinka' },
      { platform: 'x' as const, url: 'https://www.x.com/olayokunyinka' },
      { platform: 'youtube' as const, url: 'https://youtube.com/@olayokunyinka' },
      { platform: 'producthunt' as const, url: 'https://www.producthunt.com/@olayokunyinka' },
    ],
  },
  {
    name: 'Joan Omionawele',
    roleKey: 'team.roles.comms',
    image: '/team/joan-omionawele.jpg',
    socialLinks: [
      { platform: 'linkedin' as const, url: 'https://www.linkedin.com/in/joan-omionawele/' },
      { platform: 'instagram' as const, url: 'https://instagram.com/thejoan01' },
    ],
  },
];

const About = () => {
  const seo = pageSEO['/about'];
  const { t } = useTranslation('about');

  const aboutFAQs = faqKeys.map(key => ({
    question: t(`faqs.${key}.question`),
    answer: t(`faqs.${key}.answer`),
  }));

  return (
    <Layout>
      <FAQSchema items={aboutFAQs} />
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
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                {t('story.paragraph1')}
              </p>
              <p className="text-body-lg text-muted-foreground leading-relaxed mt-6">
                {t('story.paragraph2prefix')}{' '}
                <Link to="/invoicing" className="text-primary hover:underline">
                  {t('story.invoiceLink')}
                </Link>{' '}
                {t('story.and')}{' '}
                <Link to="/estimates" className="text-primary hover:underline">
                  {t('story.estimateLink')}
                </Link>
                ,{' '}
                <Link to="/client-management" className="text-primary hover:underline">
                  {t('story.clientLink')}
                </Link>
                ,{' '}
                <Link to="/payments" className="text-primary hover:underline">
                  {t('story.paymentLink')}
                </Link>{' '}
                {t('story.paragraph2suffix')}{' '}
                <Link to="/blog" className="text-primary hover:underline">
                  {t('story.blogLink')}
                </Link>{' '}
                {t('story.blogSuffix')}
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

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-medium mb-2">{t('team.label')}</p>
            <h2 className="text-heading-lg font-bold text-foreground mb-4">
              {t('team.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('team.description')}
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
              {teamMembersData.map((member) => (
                <TeamMemberCard key={member.name} name={member.name} role={t(member.roleKey)} image={member.image} socialLinks={member.socialLinks} />
              ))}
            </div>
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