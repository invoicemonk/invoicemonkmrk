import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Palette, Clock, FileText, Shield, Sparkles, Globe, AlertTriangle, Lightbulb, Repeat, Hash, Receipt, Bell } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingPaymentBadge, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';

interface UseCase { title: string; description: string; }
interface Country { flag: string; name: string; details: string; }
interface Feature { title: string; description: string; }
interface PainPoint { problem: string; solution: string; }
interface FAQ { question: string; answer: string; }

const SIGNUP_URL = 'https://app.invoicemonk.com/signup?plan=professional';
const featureIcons = [Sparkles, Hash, Repeat, FileText, Bell, Receipt];

const Creatives = () => {
  const { t } = useTranslation('creatives');

  const trustBar = t('trustBar', { returnObjects: true }) as string[];
  const problemParas = t('problem.paragraphs', { returnObjects: true }) as string[];
  const useCases = t('useCases.items', { returnObjects: true }) as UseCase[];
  const countries = t('countries.items', { returnObjects: true }) as Country[];
  const features = (t('features.items', { returnObjects: true }) as Feature[]).map((f, i) => ({ ...f, icon: featureIcons[i] || Sparkles }));
  const painPoints = t('challenges.items', { returnObjects: true }) as PainPoint[];
  const faqs = t('faqs', { returnObjects: true }) as FAQ[];
  const colA = t('checklist.columnA', { returnObjects: true }) as string[];
  const colB = t('checklist.columnB', { returnObjects: true }) as string[];
  const ctaTrust = t('bottomCta.trustSignals', { returnObjects: true }) as string[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Creatives', url: '/creatives' }]} />

      {/* Hero */}
      <div className="relative">
        <PageHero
          badge={{ icon: Palette, text: t('hero.badge') }}
          title={t('hero.title')}
          accentWord={t('hero.accentWord')}
          description={t('hero.description')}
          primaryCta={{ text: t('hero.primaryCta'), href: SIGNUP_URL }}
          secondaryCta={{ text: t('hero.secondaryCta'), href: '/pricing', external: false }}
          trustBadge={t('hero.trustBadge')}
          backgroundVariant="gradient"
        />
        <FloatingInvoiceCard className="absolute top-32 right-8 lg:right-24 hidden lg:block" delay={0.4} variant="paid" />
        <FloatingPaymentBadge className="absolute top-48 left-8 lg:left-20 hidden lg:block" delay={0.6} />
        <FloatingIcon icon={Globe} className="absolute bottom-32 right-12 lg:right-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      {/* Trust bar */}
      <section className="py-8 border-b border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustBar.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('problem.label')}</h2>
          <div className="space-y-5 text-foreground/90 text-lg leading-relaxed">
            {problemParas.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('useCases.heading')}</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((uc, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">{uc.title}</h3>
                  <p className="text-muted-foreground">{uc.description}</p>
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
            <h2 className="text-heading-lg font-bold text-foreground mb-4">{t('countries.heading')}</h2>
            <p className="text-muted-foreground">{t('countries.intro')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {countries.map((c, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl" aria-hidden>{c.flag}</span>
                    <h3 className="font-semibold text-foreground">{c.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto">{t('countries.closing')}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12 max-w-3xl mx-auto">{t('features.heading')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><f.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
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
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('challenges.heading')}</h2>
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

      {/* Testimonial */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Card className="border-border/50">
            <CardContent className="p-8 lg:p-10">
              <p className="text-xl text-foreground italic mb-6">"{t('testimonial.quote')}"</p>
              <p className="font-semibold text-foreground">{t('testimonial.author')}</p>
              <p className="text-sm text-muted-foreground mb-3">{t('testimonial.role')}</p>
              <p className="text-sm text-muted-foreground border-t border-border/50 pt-3">{t('testimonial.context')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('checklist.heading')}</h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {[...colA, ...colB].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('faqHeading')}</h2>
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

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4 max-w-3xl mx-auto">{t('bottomCta.heading')}</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">{t('bottomCta.description')}</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
              {t('bottomCta.button')}<ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <p className="text-white/80 text-sm mt-4">{t('bottomCta.fineprint')}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
            {ctaTrust.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">{t('relatedReading')}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/blog/germany-kleinunternehmer-invoicing" className="text-primary hover:underline">{t('relatedLinks.euVat')}</Link>
            <Link to="/blog/germany-e-invoice-obligation-2025" className="text-primary hover:underline">{t('relatedLinks.germanClients')}</Link>
            <Link to="/blog/germany-vat-reverse-charge-invoicing" className="text-primary hover:underline">{t('relatedLinks.reverseCharge')}</Link>
            <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">{t('relatedLinks.vsWave')}</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Creatives;
