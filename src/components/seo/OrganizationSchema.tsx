import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/hooks/useLocale';

export function OrganizationSchema() {
  const { locale } = useLocale();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://invoicemonk.com/#organization",
    "name": "Invoicemonk",
    "legalName": "Invoicemonk Ltd",
    "alternateName": "Invoice Monk",
    "url": "https://invoicemonk.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://invoicemonk.com/logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://invoicemonk.com/og-image.png",
    "description": locale.content.seo.siteDescription,
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Olayinka Olayokun",
        "jobTitle": "Co-founder & CEO"
      },
      {
        "@type": "Person",
        "name": "Joan Omionawele",
        "jobTitle": "Co-founder & Communication President"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 2,
      "maxValue": 10
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "knowsAbout": [
      "Invoicing Software",
      "Small Business Accounting",
      "Tax Compliance",
      "Financial Management",
      "Expense Tracking",
      "Payment Processing",
      "Business Finance",
      "Freelancer Tools"
    ],
    "areaServed": [
      { "@type": "Country", "name": "Australia" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "Ghana" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "Kenya" },
      { "@type": "Country", "name": "New Zealand" },
      { "@type": "Country", "name": "Nigeria" },
      { "@type": "Country", "name": "Philippines" },
      { "@type": "Country", "name": "South Africa" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Zimbabwe" }
    ],
    "sameAs": [
      "https://x.com/invoicemonk",
      "https://instagram.com/invoicemonk",
      "https://facebook.com/invoicemonk",
      "https://linkedin.com/company/invoicemonk",
      "https://www.youtube.com/@invoicemonk"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@invoicemonk.com",
      "availableLanguage": ["English", "Spanish", "French", "German", "Portuguese"]
    },
    "naics": "511210",
    "isicV4": "6201"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
