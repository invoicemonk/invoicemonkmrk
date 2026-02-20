export interface LocaleCurrency {
  code: string;         // "NGN", "USD", "GBP", "CAD", "AUD"
  symbol: string;       // "₦", "$", "£", "A$"
  position: "before" | "after";
}

export interface LocaleHeroContent {
  badge: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  cta: string;
  secondaryCta: string;
  trustBadge: string;
}

export interface LocaleComplianceContent {
  authority: string;    // "FIRS", "IRS", "HMRC", "CRA", "ATO"
  message: string;
}

export interface LocaleSEO {
  siteTitle: string;
  siteDescription: string;
  complianceKeyword: string;  // "NRS-compliant", "HMRC-compliant", etc.
  targetAudience: string;     // "Nigerian", "British", "American", etc.
  region: string;             // "Nigeria", "United Kingdom", etc.
  hreflangCode: string;       // "en-NG", "en-GB", "en-US", etc.
}

export interface LocaleTestimonial {
  quote: string;
  highlight: string;
  name: string;
  title: string;
  company: string;
  location: string;
}

export interface LocaleFAQ {
  question: string;
  answer: string;
}

export interface LocaleBlogContent {
  ctaHeadline: string;
  ctaSubtext: string;
  ctaButtonText: string;
}

export interface LocaleContent {
  hero: LocaleHeroContent;
  compliance: LocaleComplianceContent;
  socialProof: string;
  paymentGateway: string;
  seo: LocaleSEO;
  testimonials: LocaleTestimonial[];
  faqs: LocaleFAQ[];
  blog: LocaleBlogContent;
  socialProofHeadline: string;
}

export interface LocalePricing {
  free: number;              // Always 0
  starter?: number;          // Nigeria only
  professional: number;      // Main paid tier
  business: number;          // Enterprise tier
  annualMultiplier: number;  // 10 for NG (10 months), 0.8 for intl (20% off)
}

export interface LocalePricingContent {
  annualSavingsText: string;  // "2 months free" or "Save 20%"
  starterAvailable: boolean;  // true for NG only
  currencyNote?: string;      // Optional note about currency
}

export interface LocaleConfig {
  code: string;           // "en-NG", "en-US", etc.
  country: string;        // "Nigeria", "United States"
  countryCode: string;    // "NG", "US", "CA", "GB", "AU"
  flag: string;           // Emoji flag
  currency: LocaleCurrency;
  content: LocaleContent;
  pricing: LocalePricing;
  pricingContent: LocalePricingContent;
  urlPrefix: string;
  dateFormat: string;
  taxLabels: { primary: string; rate?: string };
}

export type SupportedCountry = "NG" | "US" | "CA" | "GB" | "AU" | "GH" | "KE" | "ZA";
