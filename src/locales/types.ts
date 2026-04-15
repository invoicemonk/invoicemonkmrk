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
  professional: number;      // Pro tier ($29)
  sme: number;               // SME tier ($129)
  business: number;          // Biz tier (0 = custom)
  annualMultiplier: number;  // 10 (pay 10 months, get 12 = ~17% savings)
}

export interface LocalePricingContent {
  annualSavingsText: string;  // "Save ~17%"
  starterAvailable: boolean;  // legacy, always false
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

export type SupportedCountry = "NG" | "US" | "CA" | "GB" | "AU" | "GH" | "KE" | "ZA"
  | "PH" | "ZW" | "IN" | "SC" | "DE" | "BR" | "NZ" | "FR" | "ES" | "SA" | "MY";

export type SupportedLanguage = "en" | "de" | "fr" | "pt" | "es";
