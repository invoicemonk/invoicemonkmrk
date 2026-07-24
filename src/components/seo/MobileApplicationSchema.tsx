import { Helmet } from 'react-helmet-async';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.invoicemonk.app';

interface Props {
  schemaId?: string;
}

/**
 * MobileApplication JSON-LD for the Invoicemonk Android app.
 * Aggregate rating is intentionally omitted until real Play Store
 * review numbers are available.
 */
export function MobileApplicationSchema({ schemaId }: Props = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': schemaId || 'https://invoicemonk.com/#mobile-app-android',
    name: 'Invoicemonk',
    description:
      'The Invoicemonk Android app: create mandate-compliant invoices, scan receipts, track payments, and manage clients on the go.',
    operatingSystem: 'Android',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'ElectronicInvoicingSoftware',
    installUrl: PLAY_URL,
    downloadUrl: PLAY_URL,
    url: PLAY_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free to install. Paid Invoicemonk subscription required (Pro from $15/month).',
    },
    publisher: { '@id': 'https://invoicemonk.com/#organization' },
    author: { '@id': 'https://invoicemonk.com/#organization' },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
