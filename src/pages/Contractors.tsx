import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, HardHat, Smartphone, Receipt, FolderOpen, Shield, AlertTriangle, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingMobileDevice,
  FloatingInvoiceCard,
  FloatingIcon
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';

interface Benefit { title: string; description: string; }
interface Testimonial { quote: string; author: string; role: string; }
interface PainPoint { problem: string; solution: string; }
interface WorkflowStep { title: string; description: string; }
interface FAQ { question: string; answer: string; }

const benefitIcons = [FolderOpen, Smartphone, Receipt, Shield];

const Contractors = () => {
  const { t } = useTranslation('contractors');

  const benefits = (t('benefits.items', { returnObjects: true }) as Benefit[]).map((b, i) => ({ ...b, icon: benefitIcons[i] }));
  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[];
  const painPoints = t('challenges.items', { returnObjects: true }) as PainPoint[];
  const workflowSteps = (t('workflow.steps', { returnObjects: true }) as WorkflowStep[]).map((s, i) => ({ ...s, step: String(i + 1) }));
  const faqs = t('faqs', { returnObjects: true }) as FAQ[];
  const useCases = t('useCases.items', { returnObjects: true }) as { title: string; description: string; }[];
  const checklistItems = t('checklist.items', { returnObjects: true }) as string[];
  const whyParagraphs = t('whyChoose.paragraphs', { returnObjects: true }) as string[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: HardHat, text: t('hero.badge') }}
          title={t('hero.title')}
          accentWord={t('hero.accentWord')}
          description={t('hero.description')}
          primaryCta={{ text: t('hero.primaryCta'), href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: t('hero.secondaryCta'), href: '/pricing', external: false }}
          trustBadge={t('hero.trustBadge')}
          backgroundVariant="gradient"
        />
        <FloatingMobileDevice className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingInvoiceCard className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" delay={0.6} variant="pending" />
        <FloatingIcon icon={Receipt} className="absolute top-52 left-12 lg:left-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('benefits.heading')}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('benefits.subheading')}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><benefit.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('useCases.heading')}</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('useCases.subheading')}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((uc, i) => (
                <Card key={i} className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground">{uc.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('challenges.heading')}</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('challenges.subheading')}</p>
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

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('workflow.heading')}</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('workflow.subheading')}</p>
            <div className="space-y-8">
              {workflowSteps.map((item, index) => (
                <div key={index} className="flex gap-6">
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

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('whyChoose.heading')}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              {whyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('checklist.heading')}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('testimonials.heading')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-8">
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">{t('relatedReading')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/use-cases/milestone-billing" className="text-primary hover:underline">{t('relatedLinks.milestone')}</Link>
            <Link to="/blog/invoice-payment-terms" className="text-primary hover:underline">{t('relatedLinks.paymentTerms')}</Link>
            <Link to="/guides/getting-paid" className="text-primary hover:underline">{t('relatedLinks.gettingPaid')}</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">{t('cta.heading')}</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">{t('cta.description')}</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              {t('cta.button')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contractors;
