import { useLocation, Navigate } from 'react-router-dom';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { PaymentFeeCalculator } from '@/components/tools/PaymentFeeCalculator';
import { getCorridorData, keyCorridor } from '@/config/paymentFeeModels';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RelatedTools } from '@/components/tools/RelatedTools';

export default function ReceiveCurrencyInCountry() {
  const { pathname } = useLocation();
  const match = pathname.match(/receive-([a-z]+)-in-([a-z]+)-cost$/i);
  const currency = match?.[1];
  const destination = match?.[2];
  const { t } = useTranslation('corridors');
  const corridor = currency && destination ? getCorridorData(currency, destination) : undefined;

  if (!corridor) {
    return <Navigate to="/international-payment-fee-calculator" replace />;
  }

  const countryName = t(`countries.${corridor.countryName}`, { defaultValue: corridor.countryName });
  const vars = {
    sendCurrency: corridor.sendCurrency,
    receiveCurrency: corridor.receiveCurrency,
    countryName,
  };

  const title = t('title', vars);
  const description = t('description', vars);

  const faqs = [
    { question: t('faq1Question', vars), answer: t('faq1Answer', vars) },
    { question: t('faq2Question', vars), answer: t('faq2Answer', vars) },
    { question: t('faq3Question', vars), answer: t('faq3Answer', vars) },
  ];

  const otherCorridors = keyCorridor.filter(
    (c) => !(c.currency === corridor.currency && c.country === corridor.country),
  );

  return (
    <Layout>
      <SEOHead
        title={`${title} | Invoicemonk`}
        description={description}
        ogType="website"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Payment Fee Calculator', url: '/international-payment-fee-calculator' }, { name: title, url: `/receive/${currency}/${destination}` }]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('heroSubtitle', vars)}
            </p>
          </div>

          <PaymentFeeCalculator
            defaultSendCurrency={corridor.sendCurrency}
            defaultReceiveCurrency={corridor.receiveCurrency}
            defaultAmount={1000}
          />

          <article className="prose max-w-3xl mx-auto mt-16">
            <h2>{t('receivingTitle', vars)}</h2>
            <p>{t('receivingP1', vars)}</p>
            <p>{t('receivingP2', vars)}</p>

            <h2>{t('bestMethodsTitle', vars)}</h2>
            <h3>{t('wiseTitle')}</h3>
            <p>{t('wiseDesc', vars)}</p>
            <h3>{t('paypalTitle')}</h3>
            <p>{t('paypalDesc', vars)}</p>
            <h3>{t('bankTitle')}</h3>
            <p>{t('bankDesc', vars)}</p>

            <h2>{t('tipsTitle', vars)}</h2>
            <ul>
              <li>{t('tip1', vars)}</li>
              <li>{t('tip2', vars)}</li>
              <li>{t('tip3', vars)}</li>
              <li>{t('tip4', vars)} — <Link to="/invoicing" className="text-primary">Invoicemonk</Link></li>
            </ul>
          </article>

          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t('faqSectionTitle')}</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Other corridors */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">{t('otherCorridorsTitle')}</h2>
            <ul className="space-y-2">
              {otherCorridors.slice(0, 6).map((c) => {
                const cName = t(`countries.${c.countryName}`, { defaultValue: c.countryName });
                return (
                  <li key={`${c.currency}-${c.country}`}>
                    <Link to={`/receive-${c.currency}-in-${c.country}-cost`} className="text-primary hover:underline">
                      {t('otherCorridorLink', { sendCurrency: c.sendCurrency, countryName: cName })}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="mt-8 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">{t('relatedTitle')}</h2>
            <ul className="space-y-2">
              <li><Link to="/international-payment-fee-calculator" className="text-primary hover:underline">{t('feeCalculatorLink')}</Link></li>
              <li><Link to="/cheapest-way-to-receive-international-payments" className="text-primary hover:underline">{t('cheapestWayLink')}</Link></li>
              <li><Link to="/paypal-vs-wise-fees" className="text-primary hover:underline">{t('paypalVsWiseLink')}</Link></li>
            </ul>
          </section>

          <RelatedTools currentHref={pathname} />

          <div className="mt-16 text-center">
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg">{t('ctaButton')} <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
