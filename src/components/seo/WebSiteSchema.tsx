import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/hooks/useLocale';

export function WebSiteSchema() {
  const { locale } = useLocale();
  const BASE = 'https://invoicemonk.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://invoicemonk.com/#website",
    "name": "Invoicemonk",
    "alternateName": "Invoice Monk",
    "url": "https://invoicemonk.com",
    "description": locale.content.seo.siteDescription,
    "inLanguage": ["en", "es", "fr", "de", "pt-BR"],
    "publisher": {
      "@id": "https://invoicemonk.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
