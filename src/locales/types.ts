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

export interface LocaleContent {
  hero: LocaleHeroContent;
  compliance: LocaleComplianceContent;
  socialProof: string;
  paymentGateway: string;
}

export interface LocalePricing {
  starter: number;
  pro: number;
  business: number;
}

export interface LocaleConfig {
  code: string;           // "en-NG", "en-US", etc.
  country: string;        // "Nigeria", "United States"
  countryCode: string;    // "NG", "US", "CA", "GB", "AU"
  flag: string;           // Emoji flag
  currency: LocaleCurrency;
  content: LocaleContent;
  pricing: LocalePricing;
}

export type SupportedCountry = "NG" | "US" | "CA" | "GB" | "AU";
