import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { PaymentFeeCalculator } from '@/components/tools/PaymentFeeCalculator';
import { Link } from '@/components/LocalizedLink';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RelatedTools } from '@/components/tools/RelatedTools';

export default function CheapestInternationalPayments() {
  const { t } = useTranslation('tools');
  const faqs = t('cheapest.faqs', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <Layout>
      <SEOHead
        title={t('cheapest.seo.title')}
        description={t('cheapest.seo.description')}
        ogType="website"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Cheapest Payments', url: '/cheapest-way-to-receive-international-payments' }]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('cheapest.hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('cheapest.hero.subtitle')}
            </p>
          </div>

          <PaymentFeeCalculator />

          <article className="prose max-w-3xl mx-auto mt-16">
            <h2>{t('cheapest.article.rankedTitle')}</h2>

            <h3>{t('cheapest.article.wiseTitle')}</h3>
            <p>{t('cheapest.article.wiseP1')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('cheapest.article.wiseBestFor') }} />

            <h3>{t('cheapest.article.cardTitle')}</h3>
            <p>{t('cheapest.article.cardP1')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('cheapest.article.cardBestFor') }} />

            <h3>{t('cheapest.article.bankTitle')}</h3>
            <p>{t('cheapest.article.bankP1')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('cheapest.article.bankBestFor') }} />

            <h3>{t('cheapest.article.paypalTitle')}</h3>
            <p>{t('cheapest.article.paypalP1')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('cheapest.article.paypalBestFor') }} />

            <h2>{t('cheapest.article.tipsTitle')}</h2>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: t('cheapest.article.tip1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('cheapest.article.tip2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('cheapest.article.tip3') }} />
              <li dangerouslySetInnerHTML={{ __html: t('cheapest.article.tip4') }} />
              <li dangerouslySetInnerHTML={{ __html: t('cheapest.article.tip5') }} />
            </ol>

            <h2>{t('cheapest.article.corridorsTitle')}</h2>
            <p>{t('cheapest.article.corridorsIntro')}</p>
            <ul>
              <li><Link to="/receive-usd-in-nigeria-cost" className="text-primary">{t('cheapest.article.corridorLinks.usdNigeria')}</Link></li>
              <li><Link to="/receive-gbp-in-nigeria-cost" className="text-primary">{t('cheapest.article.corridorLinks.gbpNigeria')}</Link></li>
              <li><Link to="/receive-usd-in-uk-cost" className="text-primary">{t('cheapest.article.corridorLinks.usdUk')}</Link></li>
              <li><Link to="/receive-eur-in-uk-cost" className="text-primary">{t('cheapest.article.corridorLinks.eurUk')}</Link></li>
              <li><Link to="/receive-usd-in-canada-cost" className="text-primary">{t('cheapest.article.corridorLinks.usdCanada')}</Link></li>
              <li><Link to="/receive-usd-in-australia-cost" className="text-primary">{t('cheapest.article.corridorLinks.usdAustralia')}</Link></li>
            </ul>

            <h2>{t('cheapest.article.knowCostsTitle')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('cheapest.article.knowCostsP') }} />
          </article>

          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t('cheapest.faqTitle')}</h2>
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
            <h2 className="text-xl font-semibold text-foreground mb-4">{t('cheapest.relatedResources')}</h2>
            <ul className="space-y-2">
              <li><Link to="/international-payment-fee-calculator" className="text-primary hover:underline">{t('cheapest.relatedLinks.feeCalculator')}</Link></li>
              <li><Link to="/paypal-vs-wise-fees" className="text-primary hover:underline">{t('cheapest.relatedLinks.paypalVsWise')}</Link></li>
              <li><Link to="/blog/international-payment-fees-explained" className="text-primary hover:underline">{t('cheapest.relatedLinks.feesExplained')}</Link></li>
            </ul>
          </section>

          <div className="mt-16 text-center">
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg">{t('cheapest.cta')} <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </a>
          </div>
          <RelatedTools currentHref="/cheapest-way-to-receive-international-payments" />
        </div>
      </section>
    </Layout>
  );
}