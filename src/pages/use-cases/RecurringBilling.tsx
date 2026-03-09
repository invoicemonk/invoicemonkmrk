import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, RefreshCw, Clock, Shield, BarChart3, Bell, Settings, Users, Zap } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';

const stepIcons = [Clock, RefreshCw, BarChart3];
const featureIcons = [RefreshCw, Bell, Shield, Settings, Users, Zap];

export default function RecurringBilling() {
  const { t } = useTranslation('recurringBilling');
  const faqs = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];
  const steps = (t('howItWorks.steps', { returnObjects: true }) as { title: string; desc: string }[]).map((s, i) => ({ ...s, icon: stepIcons[i] }));
  const features = (t('features.items', { returnObjects: true }) as { title: string; desc: string }[]).map((f, i) => ({ ...f, icon: featureIcons[i] }));
  const whoItems = t('whoUsesIt.items', { returnObjects: true }) as string[];
  const testimonials = t('testimonials.items', { returnObjects: true }) as { quote: string; name: string; role: string }[];
  const stats = t('example.stats', { returnObjects: true }) as { value: string; label: string }[];
  const paragraphs = t('example.paragraphs', { returnObjects: true }) as string[];
  const overviewParagraphs = t('overview.paragraphs', { returnObjects: true }) as string[];
  const relatedLinks = t('related.links', { returnObjects: true }) as { label: string; to: string }[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Use Cases', url: '/recurring-billing' }, { name: 'Recurring Billing', url: '/recurring-billing' }]} />
      <PageHero
        badge={{ icon: RefreshCw, text: t('hero.badge') }}
        title={t('hero.title')}
        accentWord={t('hero.accentWord')}
        description={t('hero.description')}
        primaryCta={{ text: t('hero.primaryCta'), href: 'https://app.invoicemonk.com/signup' }}
        secondaryCta={{ text: t('hero.secondaryCta'), href: '/pricing', external: false }}
        backgroundVariant="gradient"
      />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('overview.title')}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            {overviewParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('howItWorks.title')}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('howItWorks.subtitle')}</p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <Card key={i} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><s.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('features.title')}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('features.subtitle')}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><f.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('example.title')}</h2>
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-semibold text-foreground text-lg mb-4">{t('example.scenario')}</h3>
              {paragraphs.map((p, i) => <p key={i} className={`text-muted-foreground ${i < paragraphs.length - 1 ? 'mb-4' : 'mb-6'}`}>{p}</p>)}
              <div className="grid sm:grid-cols-3 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="text-center p-4 bg-primary/5 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('whoUsesIt.title')}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">{t('whoUsesIt.subtitle')}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {whoItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('testimonials.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((tt, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm italic mb-4">"{tt.quote}"</p>
                  <p className="font-semibold text-foreground text-sm">{tt.name}</p>
                  <p className="text-xs text-muted-foreground">{tt.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('faq.title')}</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">{t('related.title')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedLinks.map((l, i) => <Link key={i} to={l.to} className="text-primary hover:underline">{l.label}</Link>)}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">{t('cta.description')}</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">{t('cta.button')}<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}