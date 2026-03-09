import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';

interface FAQItem { question: string; answer: string; }
interface LinkItem { label: string; to: string; }
interface ToolItem {
  name: string;
  bestFor: string;
  price: string;
  highlight: boolean;
  pros: string[];
  cons: string[];
  description: string;
}

export default function BestInvoicingSoftware() {
  const { t } = useTranslation('bestInvoicingSoftware');
  const tools = t('tools', { returnObjects: true }) as ToolItem[];
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];
  const comparisonLinks = t('comparisons.links', { returnObjects: true }) as LinkItem[];
  const relatedLinks = t('relatedReading.links', { returnObjects: true }) as LinkItem[];
  const methodologyParagraphs = t('methodology.paragraphs', { returnObjects: true }) as string[];
  const verdictParagraphs = t('verdict.paragraphs', { returnObjects: true }) as string[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">{t('hero.title')}</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">{t('hero.subtitle')}</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <h2 className="text-heading-md font-bold text-foreground">{t('methodology.title')}</h2>
            {methodologyParagraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
          </div>

          <div className="space-y-8">
            {tools.map((tool, i) => (
              <Card key={i} className={tool.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-foreground">{i + 1}. {tool.name}</h2>
                        {tool.highlight && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{t('ourPick')}</span>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{t('bestForLabel')} {tool.bestFor} · {tool.price}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-medium text-green-700 mb-2">{t('prosLabel')}</p>
                      <ul className="space-y-1">{tool.pros.map((p, j) => <li key={j} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />{p}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-red-700 mb-2">{t('consLabel')}</p>
                      <ul className="space-y-1">{tool.cons.map((c, j) => <li key={j} className="text-sm text-muted-foreground">• {c}</li>)}</ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('verdict.title')}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              {verdictParagraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">{t('comparisons.title')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {comparisonLinks.map((link) => (<Link key={link.to} to={link.to} className="text-primary hover:underline">{link.label}</Link>))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">{t('faq.title')}</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">{t('relatedReading.title')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedLinks.map((link) => (<Link key={link.to} to={link.to} className="text-primary hover:underline">{link.label}</Link>))}
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
