import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/components/LocalizedLink';
import { ArrowRight, Code, Webhook, Shield, Zap, BookOpen, Terminal } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingTerminal, 
  FloatingEndpointBadge,
  FloatingIcon
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { useTranslation } from 'react-i18next';

interface Feature { title: string; description: string; }
interface Endpoint { method: string; path: string; description: string; }
interface Resource { title: string; description: string; cta: string; }
interface FAQ { question: string; answer: string; }

const featureIcons = [Code, Webhook, Shield, Zap];
const resourceIcons = [BookOpen, Code, Terminal];
const resourceLinks = ['/docs/api', 'https://github.com/invoicemonk', 'https://status.invoicemonk.com'];
const resourceExternal = [false, true, true];

const Developer = () => {
  const { t } = useTranslation('developer');

  const features = (t('features.items', { returnObjects: true }) as Feature[]).map((f, i) => ({ ...f, icon: featureIcons[i] }));
  const endpoints = t('endpoints', { returnObjects: true }) as Endpoint[];
  const resources = (t('resources.items', { returnObjects: true }) as Resource[]).map((r, i) => ({ ...r, icon: resourceIcons[i], link: resourceLinks[i], external: resourceExternal[i] }));
  const faqs = t('faqs', { returnObjects: true }) as FAQ[];

  return (
    <Layout>
      <FAQSchema items={faqs} />
      <SEOHead title={t('seo.title')} description={t('seo.description')} />

      <div className="relative">
        <PageHero
          badge={{ icon: Terminal, text: t('hero.badge') }}
          title={t('hero.title')}
          accentWord={t('hero.accentWord')}
          description={t('hero.description')}
          primaryCta={{ text: t('hero.primaryCta'), href: '/docs/api' }}
          secondaryCta={{ text: t('hero.secondaryCta'), href: 'https://app.invoicemonk.com/signup' }}
          trustBadge={t('hero.trustBadge')}
          backgroundVariant="mesh"
        />
        <FloatingTerminal className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingEndpointBadge method="POST" path="/v1/invoices" className="absolute bottom-40 left-8 lg:left-16 hidden lg:block" delay={0.6} />
        <FloatingIcon icon={Code} className="absolute top-44 left-12 lg:left-28 hidden lg:block" delay={0.8} size="sm" />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('features.heading')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><feature.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">{t('apiPreview.heading')}</h2>
            <p className="text-muted-foreground text-center mb-12">{t('apiPreview.subheading')}</p>
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-card border-b border-border px-6 py-3">
                  <span className="text-sm font-medium text-foreground">{t('apiPreview.sampleEndpoints')}</span>
                </div>
                <div className="divide-y divide-border">
                  {endpoints.map((endpoint, index) => (
                    <div key={index} className="flex items-center gap-4 px-6 py-3">
                      <span className={`px-2 py-1 text-xs font-mono font-medium rounded ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>{endpoint.method}</span>
                      <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                      <span className="text-sm text-muted-foreground ml-auto hidden sm:block">{endpoint.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('codeExample.heading')}</h2>
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-slate-900 text-slate-100 p-6 overflow-x-auto">
                  <pre className="text-sm font-mono">
{`// Create an invoice with the Invoicemonk API
const response = await fetch('https://api.invoicemonk.com/v1/invoices', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    client_id: 'cli_123',
    items: [
      { description: 'Web Development', quantity: 10, rate: 150 }
    ],
    due_date: '2025-02-28'
  })
});

const invoice = await response.json();
console.log('Invoice created:', invoice.id);`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">{t('resources.heading')}</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6 text-center">
                  <resource.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    {resource.external ? (
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.cta}</a>
                    ) : (
                      <Link to={resource.link}>{resource.cta}</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
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

export default Developer;
