import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Shield, Hash, Globe, Sparkles, Zap, Quote } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';

const Freelancers = () => {
  const { t } = useTranslation('freelancers');

  const problemParagraphs = t('problem.paragraphs', { returnObjects: true }) as string[];
  const steps = t('howItWorks.steps', { returnObjects: true }) as { step: string; title: string; description: string }[];
  const audienceCards = t('audience.cards', { returnObjects: true }) as { title: string; description: string }[];
  const countries = t('countries.items', { returnObjects: true }) as { flag: string; name: string; bullets: string[] }[];
  const features = t('features.items', { returnObjects: true }) as { title: string; description: string }[];
  const faqs = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];
  const trustSignals = t('bottomCta.trustSignals', { returnObjects: true }) as string[];
  const relatedLinks = t('related.links', { returnObjects: true }) as { text: string; href: string }[];

  const trustIcons = [Shield, Hash, Globe, Sparkles];
  const featureIcons = [Hash, Globe, Shield];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Freelancers', url: '/freelancers' }]} />
      <WebPageSchema name={t('seo.title')} description={t('seo.description')} url="/freelancers" />

      <PageHero
        badge={{ icon: Zap, text: t('hero.badge') }}
        title={t('hero.title')}
        accentWord={t('hero.accentWord')}
        description={t('hero.description')}
        primaryCta={{ text: t('hero.ctaPrimary'), href: 'https://app.invoicemonk.com/signup?plan=professional' }}
        secondaryCta={{ text: t('hero.ctaSecondary'), href: '#how-it-works', external: false }}
        trustBadge={t('hero.trustBadge')}
        backgroundVariant="gradient"
      />

      {/* Problem */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('problem.title')}</h2>
          <div className="space-y-5 text-body-lg text-muted-foreground">
            {problemParagraphs.map((p, i) => (
              <p key={i} className={i === problemParagraphs.length - 1 ? 'text-foreground font-medium' : ''}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('howItWorks.title')}</h2>
          <div className="space-y-8">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">{item.step}</div>
                <div>
                  <h3 className="text-h4 font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('audience.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {audienceCards.map((c, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-heading-lg font-bold text-foreground mb-4">{t('countries.title')}</h2>
            <p className="text-muted-foreground">{t('countries.intro')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {countries.map((c, i) => (
              <Card key={i} className="border-border/50 bg-card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl" aria-hidden="true">{c.flag}</span>
                    <h3 className="font-semibold text-foreground">{c.name}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {c.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-10">{t('countries.outro')}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('features.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => {
              const Icon = featureIcons[i] || Shield;
              return (
                <Card key={i} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Card className="border-border/50">
            <CardContent className="p-8 lg:p-10">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-xl lg:text-2xl text-foreground italic leading-relaxed mb-6">"{t('testimonial.quote')}"</p>
              <div className="mb-4">
                <p className="font-semibold text-foreground">{t('testimonial.author')}</p>
                <p className="text-sm text-muted-foreground">{t('testimonial.role')}</p>
              </div>
              <p className="text-sm text-muted-foreground border-t border-border pt-4 leading-relaxed">{t('testimonial.context')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing anchor */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-heading-lg font-bold text-foreground mb-4">{t('pricing.title')}</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">{t('pricing.description')}</p>
          <p className="text-foreground font-medium mb-8">{t('pricing.highlight')}</p>
          <Button size="lg" asChild>
            <a href="https://app.invoicemonk.com/signup?plan=professional" target="_blank" rel="noopener noreferrer">
              {t('pricing.cta')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">{t('pricing.fineprint')}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">{t('faq.title')}</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-heading-lg font-bold mb-4">{t('bottomCta.title')}</h2>
          <p className="text-white/90 mb-8 leading-relaxed">{t('bottomCta.subtitle')}</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://app.invoicemonk.com/signup?plan=professional" target="_blank" rel="noopener noreferrer">
              {t('bottomCta.button')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <p className="text-xs text-white/80 mt-4">{t('bottomCta.fineprint')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-white/20">
            {trustSignals.map((s, i) => {
              const Icon = trustIcons[i] || CheckCircle;
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Icon className="w-6 h-6 text-white" />
                  <span className="text-sm text-white/90">{s}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">{t('related.label')}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {relatedLinks.map((link, i) => (
              <Link key={i} to={link.href} className="text-primary hover:underline text-sm">{link.text}</Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Freelancers;
