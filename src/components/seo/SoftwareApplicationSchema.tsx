import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/hooks/useLocale';
import { calculatePrice, getPricingPlans } from '@/config/pricingPlans';

interface SoftwareApplicationSchemaProps {
  name?: string;
  description?: string;
  /** Override the default @id for this schema instance */
  schemaId?: string;
  /** Set to true when you have verified real reviews */
  hasVerifiedReviews?: boolean;
}

export function SoftwareApplicationSchema({ 
  name = 'Invoicemonk',
  description,
  schemaId,
  hasVerifiedReviews = false
}: SoftwareApplicationSchemaProps) {
  const { locale } = useLocale();
  const plans = getPricingPlans();
  const pricedPlans = plans.map((plan) => ({ plan, price: calculatePrice(plan.id, false).monthly }));

  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": schemaId || "https://invoicemonk.com/#software",
    "name": name,
    "description": description || locale.content.seo.siteDescription,
    "applicationCategory": "FinanceApplication",
    "applicationSubCategory": "Invoicing Software",
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "1.0",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "129",
      "priceCurrency": "USD",
      "offerCount": pricedPlans.length,
      "offers": pricedPlans.map(({ plan, price }) => ({
        "@type": "Offer",
        "name": `${plan.name} Plan`,
        "price": plan.customPricing ? "0" : String(price),
        "priceCurrency": "USD",
        "description": plan.customPricing ? `${plan.description}; custom pricing` : plan.description,
      })),
    },
    "featureList": [
      "Professional Invoice Creation",
      "Expense Tracking with Receipt Scanning",
      "Payment Processing",
      "Tax Compliance & Reports",
      "Client Management",
      "Financial Reports & Analytics",
      "Recurring Invoices",
      "Multi-Currency Support",
      "Estimates & Proposals"
    ],
    "screenshot": "https://invoicemonk.com/og-image.png",
    "author": {
      "@id": "https://invoicemonk.com/#organization"
    }
  };

  // Only add aggregateRating when we have verified real reviews
  if (hasVerifiedReviews) {
    baseSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
}
