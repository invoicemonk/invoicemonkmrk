export interface LocaleCurrency {
  code: string;
  symbol: string;
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
  authority: string;
  message: string;
}

export interface LocaleSEO {
  siteTitle: string;
  siteDescription: string;
  complianceKeyword: string;
  targetAudience: string;
  region: string;
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
  free?: number;
  professional: number;
  sme: number;
  business: number;
  annualMultiplier: number;
}

export interface LocalePricingContent {
  annualSavingsText: string;
  starterAvailable?: boolean;
  currencyNote?: string;
}

export interface LocaleConfig {
  code: string;
  country: string;
  countryCode: string;
  flag: string;
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

export type SupportedLanguage = "en";
