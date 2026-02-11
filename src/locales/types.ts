export type SupportedCountry = 'NG' | 'US' | 'GB' | 'CA' | 'AU';

export interface CurrencyConfig {
  code: string;
  symbol: string;
  position: 'before' | 'after';
  decimals: number;
  separator: string;
}

export interface PricingConfig {
  starter?: number;
  professional: number;
  business: number;
  annualMultiplier: number; // Nigeria: 10 (pay for 10 months), International: 0.8 (20% off)
}

export interface SEOContent {
  siteTitle: string;
  siteDescription: string;
  complianceKeyword: string;
  targetAudience: string;
  region: string;
}

export interface ComplianceContent {
  authority: string;
  message: string;
}

export interface PricingContent {
  starterAvailable: boolean;
}

export interface LocaleContent {
  paymentGateway: string;
  seo: SEOContent;
  compliance: ComplianceContent;
}

export interface LocaleConfig {
  country: string;
  countryCode: SupportedCountry;
  flag: string;
  currency: CurrencyConfig;
  pricing: PricingConfig;
  content: LocaleContent;
  pricingContent: PricingContent;
}
