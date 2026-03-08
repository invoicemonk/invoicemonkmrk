import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { PaymentFeeCalculator } from '@/components/tools/PaymentFeeCalculator';
import { Link } from '@/components/LocalizedLink';
import { ArrowRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PaypalVsWiseFees() {
  const { t } = useTranslation('tools');
  const faqs = t('paypalVsWise.faqs', { returnObjects: true }) as { question: string; answer: string }[];
  const features = t('paypalVsWise.features', { returnObjects: true }) as { feature: string; wise: boolean; paypal: boolean }[];

  return (
    <Layout>
      <SEOHead
        title={t('paypalVsWise.seo.title')}
        description={t('paypalVsWise.seo.description')}
        ogType="website"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('paypalVsWise.hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('paypalVsWise.hero.subtitle')}
            </p>
          </div>

          <PaymentFeeCalculator filterMethods={['wise', 'paypal']} />

          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">{t('paypalVsWise.comparisonTitle')}</h2>
            <Card className="border border-border overflow-hidden">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-foreground">{t('paypalVsWise.comparisonHeaders.feature')}</th>
                      <th className="py-3 px-4 text-center text-sm font-semibold text-foreground">{t('paypalVsWise.comparisonHeaders.wise')}</th>
                      <th className="py-3 px-4 text-center text-sm font-semibold text-foreground">{t('paypalVsWise.comparisonHeaders.paypal')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((row) => (
                      <tr key={row.feature} className="border-b border-border/50">
                        <td className="py-3 px-4 text-sm text-foreground">{row.feature}</td>
                        <td className="py-3 px-4 text-center">
                          {row.wise ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.paypal ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </section>

          <article className="prose max-w-3xl mx-auto mt-16">
            <h2>{t('paypalVsWise.article.whichTitle')}</h2>
            <p>{t('paypalVsWise.article.whichP')}</p>

            <h3>{t('paypalVsWise.article.whenWiseTitle')}</h3>
            <p>{t('paypalVsWise.article.whenWiseP1')}</p>
            <p>{t('paypalVsWise.article.whenWiseP2')}</p>

            <h3>{t('paypalVsWise.article.whenPaypalTitle')}</h3>
            <p>{t('paypalVsWise.article.whenPaypalP1')}</p>
            <p>{t('paypalVsWise.article.whenPaypalP2')}</p>

            <h3>{t('paypalVsWise.article.useCaseTitle')}</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t('paypalVsWise.article.useCase1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('paypalVsWise.article.useCase2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('paypalVsWise.article.useCase3') }} />
            </ul>

            <h2>{t('paypalVsWise.article.optimizeTitle')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('paypalVsWise.article.optimizeP') }} />
          </article>

          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t('paypalVsWise.faqTitle')}</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">{t('paypalVsWise.relatedResources')}</h2>
            <ul className="space-y-2">
              <li><Link to="/international-payment-fee-calculator" className="text-primary hover:underline">{t('paypalVsWise.relatedLinks.feeCalculator')}</Link></li>
              <li><Link to="/cheapest-way-to-receive-international-payments" className="text-primary hover:underline">{t('paypalVsWise.relatedLinks.cheapest')}</Link></li>
              <li><Link to="/blog/international-payment-fees-explained" className="text-primary hover:underline">{t('paypalVsWise.relatedLinks.feesExplained')}</Link></li>
            </ul>
          </section>

          <div className="mt-16 text-center">
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg">{t('paypalVsWise.cta')} <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}