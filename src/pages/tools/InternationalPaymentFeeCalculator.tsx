import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { PaymentFeeCalculator } from '@/components/tools/PaymentFeeCalculator';
import { Link } from '@/components/LocalizedLink';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RelatedTools } from '@/components/tools/RelatedTools';

export default function InternationalPaymentFeeCalculator() {
  const { t } = useTranslation('tools');
  const faqs = t('feeCalculator.faqs', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <Layout>
      <SEOHead
        title={t('feeCalculator.seo.title')}
        description={t('feeCalculator.seo.description')}
        ogType="website"
      />
      <FAQSchema items={faqs} />
      <SoftwareApplicationSchema
        name="Invoicemonk International Payment Fee Calculator"
        description="Free interactive calculator for comparing estimated international payment fees, FX spreads, transfer speed, and net received amounts across providers."
        schemaId="https://invoicemonk.com/international-payment-fee-calculator#software"
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Payment Fee Calculator', url: '/international-payment-fee-calculator' }]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('feeCalculator.hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t('feeCalculator.hero.subtitle') }} />
          </div>

          <PaymentFeeCalculator />

          <article className="prose max-w-3xl mx-auto mt-16">
            <h2>{t('feeCalculator.article.understandingTitle')}</h2>
            <p>{t('feeCalculator.article.understandingP1')}</p>
            <p>{t('feeCalculator.article.understandingP2')}</p>

            <h2>{t('feeCalculator.article.howFeesWorkTitle')}</h2>
            <p>{t('feeCalculator.article.howFeesWorkIntro')}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t('feeCalculator.article.transactionFees') }} />
              <li dangerouslySetInnerHTML={{ __html: t('feeCalculator.article.fxSpreadFees') }} />
              <li dangerouslySetInnerHTML={{ __html: t('feeCalculator.article.intermediaryFees') }} />
            </ul>

            <h2>{t('feeCalculator.article.comparingTitle')}</h2>
            <h3>{t('feeCalculator.article.wiseTitle')}</h3>
            <p>{t('feeCalculator.article.wiseP')}</p>
            <h3>{t('feeCalculator.article.paypalTitle')}</h3>
            <p>{t('feeCalculator.article.paypalP')}</p>
            <h3>{t('feeCalculator.article.bankTitle')}</h3>
            <p>{t('feeCalculator.article.bankP')}</p>
            <h3>{t('feeCalculator.article.cardTitle')}</h3>
            <p>{t('feeCalculator.article.cardP')}</p>

            <h2>{t('feeCalculator.article.tipsTitle')}</h2>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t('feeCalculator.article.tip1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('feeCalculator.article.tip2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('feeCalculator.article.tip3') }} />
              <li dangerouslySetInnerHTML={{ __html: t('feeCalculator.article.tip4') }} />
            </ul>

            <h2>{t('feeCalculator.article.smarterTitle')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('feeCalculator.article.smarterP') }} />
          </article>

          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t('feeCalculator.faqTitle')}</h2>
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
            <h2 className="text-xl font-semibold text-foreground mb-4">{t('feeCalculator.relatedResources')}</h2>
            <ul className="space-y-2">
              <li><Link to="/paypal-vs-wise-fees" className="text-primary hover:underline">{t('feeCalculator.relatedLinks.paypalVsWise')}</Link></li>
              <li><Link to="/cheapest-way-to-receive-international-payments" className="text-primary hover:underline">{t('feeCalculator.relatedLinks.cheapest')}</Link></li>
              <li><Link to="/blog/international-payment-fees-explained" className="text-primary hover:underline">{t('feeCalculator.relatedLinks.feesExplained')}</Link></li>
              <li><Link to="/payments" className="text-primary hover:underline">{t('feeCalculator.relatedLinks.payments')}</Link></li>
            </ul>
          </section>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t('feeCalculator.cta.title')}</h2>
            <p className="text-muted-foreground mb-6">{t('feeCalculator.cta.subtitle')}</p>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                {t('feeCalculator.cta.button')} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
          <RelatedTools currentHref="/international-payment-fee-calculator" />
        </div>
      </section>
    </Layout>
  );
}