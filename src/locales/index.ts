import { enNG } from './en-NG';
import { enUS } from './en-US';
import { enCA } from './en-CA';
import { enGB } from './en-GB';
import { enAU } from './en-AU';
import { enGH } from './en-GH';
import { enKE } from './en-KE';
import { enZA } from './en-ZA';
import { enPH } from './en-PH';
import { enZW } from './en-ZW';
import { enIN } from './en-IN';
import { enSC } from './en-SC';
import { deDE } from './de-DE';
import { ptBR } from './pt-BR';
import { enNZ } from './en-NZ';
import { frFR } from './fr-FR';
import { esES } from './es-ES';
import { LocaleConfig, SupportedCountry, SupportedLanguage } from './types';

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
  PH: enPH,
  ZW: enZW,
  IN: enIN,
  SC: enSC,
  DE: deDE,
  BR: ptBR,
  NZ: enNZ,
  FR: frFR,
  ES: esES,
};

export const supportedCountries: SupportedCountry[] = [
  "NG", "US", "CA", "GB", "AU", "GH", "KE", "ZA",
  "PH", "ZW", "IN", "SC", "DE", "BR", "NZ", "FR", "ES",
];

export const supportedLanguages: SupportedLanguage[] = ["en", "de", "fr", "pt", "es"];

export const defaultCountry: SupportedCountry = "US";
export const defaultLanguage: SupportedLanguage = "en";

/** Map country code → language prefix for URL */
export const countryToLanguage: Record<SupportedCountry, SupportedLanguage> = {
  NG: "en",
  US: "en",
  CA: "en",
  GB: "en",
  AU: "en",
  GH: "en",
  KE: "en",
  ZA: "en",
  PH: "en",
  ZW: "en",
  IN: "en",
  SC: "en",
  DE: "de",
  BR: "pt",
  NZ: "en",
  FR: "fr",
  ES: "es",
};

/** Language prefix → i18next language code */
export const languageToI18nCode: Record<SupportedLanguage, string> = {
  en: "en",
  de: "de",
  fr: "fr",
  pt: "pt-BR",
  es: "es",
};

/** Language prefix → hreflang code for SEO */
export const languageToHreflang: Record<SupportedLanguage, string> = {
  en: "en",
  de: "de",
  fr: "fr",
  pt: "pt-BR",
  es: "es",
};

// Keep legacy exports for any remaining references during migration
export const urlPrefixToCountry: Record<string, SupportedCountry> = {
  ng: "NG", us: "US", ca: "CA", uk: "GB", au: "AU", gh: "GH",
  ke: "KE", za: "ZA", ph: "PH", zw: "ZW", in: "IN", sc: "SC",
  de: "DE", br: "BR", nz: "NZ", fr: "FR", es: "ES",
};

export const countryToUrlPrefix: Record<SupportedCountry, string> = {
  NG: "ng", US: "us", CA: "ca", GB: "uk", AU: "au", GH: "gh",
  KE: "ke", ZA: "za", PH: "ph", ZW: "zw", IN: "in", SC: "sc",
  DE: "de", BR: "br", NZ: "nz", FR: "fr", ES: "es",
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
