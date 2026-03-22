import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, DollarSign, Clock, BarChart3, Globe, Banknote, Zap, Users } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { useTranslation } from 'react-i18next';

const benefitIcons = [DollarSign, Clock, BarChart3, Globe];

const payoutIcons: Record<string, typeof Banknote> = {
  'Bank Transfer': Banknote,
  'Wise': Globe,
  'PayPal': DollarSign,
};

const PartnerProgram = () => {
  const { t } = useTranslation('partnerProgram');

  const benefits = (t('benefits.items', { returnObjects: true }) as { title: string; description: string }[]).map((b, i) => ({ ...b, icon: benefitIcons[i] }));
  const steps = t('howItWorks.steps', { returnObjects: true }) as { step: string; title: string; description: string }[];
  const stages = t('commissions.lifecycle.stages', { returnObjects: true }) as { stage: string; description: string }[];
  const payoutMethods = t('payouts.methods', { returnObjects: true }) as { name: string; description: string }[];
  const dashboardFeatures = t('dashboard.features', { returnObjects: true }) as string[];
  const rules = t('terms.rules', { returnObjects: true }) as string[];
  const faqs = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Partner Program', url: '/partner-program' }]} />
      <WebPageSchema name={t('seo.title')} description={t('seo.description')} url="/partner-program" />

      {/* Hero */}
      <PageHero
        badge={{ icon: Users, text: t('hero.badge') }}
        title={t('hero.title')}
        accentWord={t('hero.accentWord')}
        description={t('hero.description')}
        primaryCta={{ text: t('hero.ctaPrimary'), href: 'https://app.invoicemonk.com/partner/apply' }}
        secondaryCta={{ text: t('hero.ctaSecondary'), href: '/pricing', external: false }}
        trustBadge={t('hero.trustBadge')}
        backgroundVariant="gradient"
      />

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('benefits.title')}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('benefits.subtitle')}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('howItWorks.title')}</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('howItWorks.subtitle')}</p>
            <div className="space-y-8">
              {steps.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">{item.step}</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('commissions.title')}</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('commissions.subtitle')}</p>
            
            <div className="text-center mb-12">
              <span className="text-6xl font-bold text-primary">{t('commissions.rate')}</span>
              <p className="text-lg text-muted-foreground mt-2">{t('commissions.rateLabel')}</p>
            </div>

            <h3 className="font-semibold text-foreground text-center mb-6">{t('commissions.lifecycle.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {stages.map((s, i) => (
                <Card key={i} className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-3">{i + 1}</div>
                    <h4 className="font-semibold text-foreground mb-2">{s.stage}</h4>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payout Methods */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('payouts.title')}</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('payouts.subtitle')}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {payoutMethods.map((method, i) => {
                const Icon = payoutIcons[method.name] || DollarSign;
                return (
                  <Card key={i} className="border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                      <h3 className="font-semibold text-foreground mb-2">{method.name}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">{t('payouts.note')}</p>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('dashboard.title')}</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('dashboard.subtitle')}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {dashboardFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Rules */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('terms.title')}</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">{t('terms.subtitle')}</p>
            <div className="space-y-3">
              {rules.map((rule, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('faq.title')}</h2>
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

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-primary-foreground mb-4">{t('cta.title')}</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">{t('cta.subtitle')}</p>
          <Button size="lg" className="bg-background hover:bg-background/90 text-foreground" asChild>
            <a href="https://app.invoicemonk.com/partner/apply" target="_blank" rel="noopener noreferrer">
              {t('cta.button')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerProgram;
