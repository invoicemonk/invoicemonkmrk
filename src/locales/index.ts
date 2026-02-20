import { enNG } from './en-NG';
import { enUS } from './en-US';
import { enCA } from './en-CA';
import { enGB } from './en-GB';
import { enAU } from './en-AU';
import { enGH } from './en-GH';
import { enKE } from './en-KE';
import { enZA } from './en-ZA';
import { LocaleConfig, SupportedCountry } from './types';

export * from './types';

export const locales: Record<SupportedCountry, LocaleConfig> = {
  NG: enNG,
  US: enUS,
  CA: enCA,
  GB: enGB,
  AU: enAU,
  GH: enGH,
  KE: enKE,
  ZA: enZA,
};

export const supportedCountries: SupportedCountry[] = ["NG", "US", "CA", "GB", "AU", "GH", "KE", "ZA"];

export const defaultCountry: SupportedCountry = "US";

/** URL prefix → country code (uk → GB is the key special case) */
export const urlPrefixToCountry: Record<string, SupportedCountry> = {
  ng: "NG",
  us: "US",
  ca: "CA",
  uk: "GB",
  au: "AU",
  gh: "GH",
  ke: "KE",
  za: "ZA",
};

/** Country code → URL prefix */
export const countryToUrlPrefix: Record<SupportedCountry, string> = {
  NG: "ng",
  US: "us",
  CA: "ca",
  GB: "uk",
  AU: "au",
  GH: "gh",
  KE: "ke",
  ZA: "za",
};

export function getLocale(countryCode: SupportedCountry): LocaleConfig {
  return locales[countryCode] || locales[defaultCountry];
}

export function formatCurrency(amount: number, locale: LocaleConfig): string {
  const { symbol, position } = locale.currency;
  const formattedAmount = amount.toLocaleString();
  
  return position === "before" 
    ? `${symbol}${formattedAmount}` 
    : `${formattedAmount}${symbol}`;
}

export function formatPrice(amount: number, locale: LocaleConfig, period: string = "/mo"): string {
  return `${formatCurrency(amount, locale)}${period}`;
}
