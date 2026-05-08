import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  AlertTriangle,
  Lightbulb,
  Hash,
  Repeat,
  Percent,
  Layers,
  FileMinus,
  Archive,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import {
  FloatingInvoiceCard,
  FloatingChartCard,
  FloatingIcon,
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';

interface PainPoint { problem: string; solution: string; }
interface FAQ { question: string; answer: string; }
interface UseCase { title: string; description: string; }
interface Feature { title: string; description: string; }
interface CountryBlock { flag: string; country: string; fields: string; }

const featureIcons = [Hash, Repeat, Percent, Layers, FileMinus, Archive];

const SIGNUP_URL =
  'https://app.invoicemonk.com/signup?utm_source=invoicemonk&utm_medium=landing&utm_campaign=consultants';

const Consultants = () => {
  const { t } = useTranslation('consultants');

  const trustBarItems = t('trustBar.items', { returnObjects: true }) as string[];
  const problemParagraphs = t('problem.paragraphs', { returnObjects: true }) as string[];
  const useCases = t('useCases.items', { returnObjects: true }) as UseCase[];
  const countries = t('compliance.countries', { returnObjects: true }) as CountryBlock[];
  const features = (t('features.items', { returnObjects: true }) as Feature[]).map(
    (f, i) => ({ ...f, Icon: featureIcons[i] ?? Hash })
  );
  const painPoints = t('challenges.items', { returnObjects: true }) as PainPoint[];
  const checklistOne = t('checklist.columnOne', { returnObjects: true }) as string[];
  const checklistTwo = t('checklist.columnTwo', { returnObjects: true }) as string[];
  const faqs = t('faqs', { returnObjects: true }) as FAQ[];
  const bottomTrust = t('bottomCta.trustSignals', { returnObjects: true }) as string[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Consultants', url: '/consultants' },
        ]}
      />

      {/* Hero */}
      <div className="relative">
        <PageHero
          badge={{ icon: Users, text: t('hero.badge') }}
          title={t('hero.title')}
          accentWord={t('hero.accentWord')}
          description={t('hero.description')}
          primaryCta={{ text: t('hero.primaryCta'), href: SIGNUP_URL }}
          secondaryCta={{ text: t('hero.secondaryCta'), href: '/pricing', external: false }}
          trustBadge={t('hero.trustBadge')}
          backgroundVariant="gradient"
        />
        <FloatingChartCard className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingInvoiceCard className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" delay={0.6} variant="pending" />
        <FloatingIcon icon={Globe} className="absolute top-48 left-12 lg:left-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      {/* Trust bar */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {trustBarItems.map((item) => (
              <div key={item} className="flex items-center gap-2 justify-center text-center">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem narrative */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">
              {t('problem.heading')}
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              {problemParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
              <p className="text-xl lg:text-2xl font-semibold text-primary">
                {t('problem.pullQuote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            {t('useCases.heading')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((uc, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance by country */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-heading-lg font-bold text-foreground mb-4">
              {t('compliance.heading')}
            </h2>
            <p className="text-muted-foreground">{t('compliance.intro')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {countries.map((c) => (
              <Card key={c.country} className="border-border/50 h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">{c.flag}</span>
                    <h3 className="font-semibold text-foreground">{c.country}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.fields}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-10">
            {t('compliance.closing')}
          </p>
        </div>
      </section>

      {/* Compliance features */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            {t('features.heading')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <Card key={i} className="border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <f.Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
              {t('challenges.heading')}
            </h2>
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

      {/* Single testimonial */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto border-border/50">
            <CardContent className="p-8 lg:p-12 text-center">
              <p className="text-xl lg:text-2xl text-foreground italic mb-6 leading-relaxed">
                "{t('testimonial.quote')}"
              </p>
              <p className="font-semibold text-foreground">{t('testimonial.author')}</p>
              <p className="text-sm text-muted-foreground mb-4">{t('testimonial.role')}</p>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                {t('testimonial.context')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
              {t('checklist.heading')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[...checklistOne, ...checklistTwo].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">
            {t('faqHeading')}
          </h2>
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

      {/* Related reading */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">{t('relatedReading')}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link to="/blog/germany-vat-reverse-charge-invoicing" className="text-primary hover:underline">
              {t('relatedLinks.euVat')}
            </Link>
            <Link to="/blog/germany-vat-reverse-charge-invoicing" className="text-primary hover:underline">
              {t('relatedLinks.reverseCharge')}
            </Link>
            <Link to="/blog/germany-kleinunternehmer-invoicing" className="text-primary hover:underline">
              {t('relatedLinks.germanClients')}
            </Link>
            <Link to="/blog/france-e-invoicing-ppf-pdp-guide" className="text-primary hover:underline">
              {t('relatedLinks.frenchClients')}
            </Link>
            <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">
              {t('relatedLinks.vsWave')}
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-primary-foreground mb-4">
            {t('bottomCta.heading')}
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t('bottomCta.description')}
          </p>
          <Button size="lg" className="bg-background hover:bg-background/90 text-foreground" asChild>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
              {t('bottomCta.button')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <p className="text-sm text-primary-foreground/80 mt-4">
            {t('bottomCta.fineprint')}
          </p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {bottomTrust.map((item) => (
              <div key={item} className="flex items-center gap-2 justify-center text-center">
                <CheckCircle className="w-4 h-4 text-primary-foreground flex-shrink-0" />
                <span className="text-sm text-primary-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultants;
