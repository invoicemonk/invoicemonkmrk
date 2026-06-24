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
    "description": "Invoicemonk is the global e-invoicing platform for small business — mandate-compliant in 16 jurisdictions (ZATCA Phase 1 & 2, MyInvois, GST IRN, Peppol EU, FIRS MBS, MTD UK, KRA eTIMS, GRA e-VAT, BIR CAS, SARS, ZIMRA, SRC, SEF Brazil, US B2G, CRA + Peppol Canada). Every invoice is issued with the local artefact — CSID, IRN, UUID, QR, or digital signature — and delivered to the authority through the prescribed transport.",
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
      "Electronic Invoicing",
      "E-Invoicing Software",
      "E-Invoicing Mandates",
      "ZATCA Phase 1 (Saudi Arabia)",
      "ZATCA Phase 2 Integration (Saudi Arabia)",
      "MyInvois (Malaysia, LHDN)",
      "GST IRN (India, NIC IRP)",
      "Peppol BIS Billing 3.0 (EU)",
      "FIRS Merchant Buyer System (Nigeria)",
      "Making Tax Digital for VAT (UK, HMRC)",
      "KRA eTIMS (Kenya)",
      "GRA e-VAT (Ghana)",
      "BIR CAS (Philippines)",
      "SARS e-invoicing (South Africa)",
      "ZIMRA Fiscalisation (Zimbabwe)",
      "SRC e-invoicing (Seychelles)",
      "SEF (Brazil)",
      "US Federal B2G e-invoicing",
      "CRA + Peppol (Canada)",
      "CSID (Cryptographic Stamp Identifier)",
      "Invoice Reference Number (IRN)",
      "Universally Unique Identifier (UUID) for invoices",
      "QR-coded tax invoices",
      "Digital signatures for structured invoices",
      "Peppol Access Point delivery",
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
