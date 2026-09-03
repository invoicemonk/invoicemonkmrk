export type LegacyUrlRule = {
  source: string;
  destination?: string;
  status: 301 | 410;
};

/**
 * Canonical dispositions for legacy URLs confirmed in the GSC soft-404 export.
 * Keep specific rules above generic rules so every redirect is single-hop.
 */
export const LEGACY_URL_RULES: LegacyUrlRule[] = [
  { source: '/en/receive-currency-in-country', destination: '/en/international-payment-fee-calculator', status: 301 },
  { source: '/en/blog/e-invoicing-mandates-by-country', destination: '/en/guides/e-invoicing-mandates', status: 301 },
  { source: '/en/recurring-billing', destination: '/en/use-cases/recurring-billing', status: 301 },
  { source: '/en/blog/best-invoice-software-kenya', destination: '/en/compare/best-invoicing-software-kenya', status: 301 },
  { source: '/en/blog/essential-elements-of-an-invoice', destination: '/en/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners', status: 301 },
  { source: '/en/blog/how-to-invoice-french-clients-freelancer', destination: '/en/blog/french-invoice-requirements-freelancers', status: 301 },
  { source: '/en/glossary/uuid', destination: '/en/glossary/myinvois-uuid', status: 301 },
  { source: '/en/tools/international-payment-fee-calculator', destination: '/en/international-payment-fee-calculator', status: 301 },
  { source: '/en/blog/nigeria-invoice-tin-number', destination: '/en/blog/nigeria-vat-invoice-requirements', status: 301 },
  { source: '/en/blog/sequential-invoice-numbering-eu', destination: '/en/blog/sequential-invoice-numbering-guide', status: 301 },
  { source: '/en/blog/netherlands-vat-invoicing-freelancers', destination: '/en/blog/dutch-invoice-requirements-freelancers', status: 301 },
  { source: '/en/blog/freelance-finance-guide', destination: '/en/blog/freelancer-business-guide', status: 301 },
  { source: '/en/blog/common-invoicing-mistakes-avoid', destination: '/en/blog/freelance-payment-mistakes', status: 301 },
  { source: '/en/blog/branded-invoice-design-best-practices', destination: '/en/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners', status: 301 },
  { source: '/en/blog/invoice-payment-terms-net-30-60-90', destination: '/en/blog/how-to-write-invoice-payment-terms', status: 301 },
  { source: '/en/guides/e-invoicing-mandates-guide', destination: '/en/guides/e-invoicing-mandates', status: 301 },
  { source: '/en/blog/german-invoice-requirements-freelancers', destination: '/en/blog/how-to-invoice-german-clients-freelancer', status: 301 },
  { source: '/en/platform', destination: '/en/invoicing', status: 301 },
  { source: '/es/platform', destination: '/en/invoicing', status: 301 },
  { source: '/en/multi-currency-invoicing', destination: '/en/use-cases/multi-currency-invoicing', status: 301 },
  { source: '/en/blog/use-cases-multi-currency-invoicing', destination: '/en/use-cases/multi-currency-invoicing', status: 301 },
  { source: '/en/blog/multi-currency-accounting-guide', destination: '/en/blog/multi-currency-accounting-small-business', status: 301 },
  { source: '/en/en', destination: '/en', status: 301 },
  { source: '/en/en/:path*', destination: '/en/:path*', status: 301 },
  { source: '/en/receive/:currency/:country', destination: '/en/receive-:currency-in-:country-cost', status: 301 },
  { source: '/enhttps:/app.invoicemonk.com/signup', status: 410 },
  { source: '/enhttps://app.invoicemonk.com/signup', status: 410 },
];

export const isMalformedCrawlerArtifact = (pathname: string): boolean =>
  /(?:<a(?:%20|\s)+href=|%3ca(?:%20|\s)+href=|\/enhttps?:)/i.test(pathname);