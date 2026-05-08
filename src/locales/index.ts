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
import { enSA } from './en-SA';
import { enMY } from './en-MY';
import { enNZ } from './en-NZ';
import { LocaleConfig, SupportedCountry, SupportedLanguage } from './types';

export * from './types';

// Only English is active. DE/BR/FR/ES countries fall back to en-US content.
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
  DE: enUS,
  BR: enUS,
  NZ: enNZ,
  FR: enUS,
  ES: enUS,
  SA: enSA,
  MY: enMY,
};

export const supportedCountries: SupportedCountry[] = [
  "NG", "US", "CA", "GB", "AU", "GH", "KE", "ZA",
  "PH", "ZW", "IN", "SC", "DE", "BR", "NZ", "FR", "ES", "SA", "MY",
];

export const supportedLanguages: SupportedLanguage[] = ["en"];

export const defaultCountry: SupportedCountry = "US";
export const defaultLanguage: SupportedLanguage = "en";

/** All countries map to English. */
export const countryToLanguage: Record<SupportedCountry, SupportedLanguage> = {
  NG: "en", US: "en", CA: "en", GB: "en", AU: "en", GH: "en",
  KE: "en", ZA: "en", PH: "en", ZW: "en", IN: "en", SC: "en",
  DE: "en", BR: "en", NZ: "en", FR: "en", ES: "en", SA: "en", MY: "en",
};

/** Language prefix → i18next language code */
export const languageToI18nCode: Record<SupportedLanguage, string> = {
  en: "en",
};

// Legacy exports (still imported in a few places).
export const urlPrefixToCountry: Record<string, SupportedCountry> = {
  ng: "NG", us: "US", ca: "CA", uk: "GB", au: "AU", gh: "GH",
  ke: "KE", za: "ZA", ph: "PH", zw: "ZW", in: "IN", sc: "SC",
  de: "DE", br: "BR", nz: "NZ", fr: "FR", es: "ES", sa: "SA", my: "MY",
};

export const countryToUrlPrefix: Record<SupportedCountry, string> = {
  NG: "ng", US: "us", CA: "ca", GB: "uk", AU: "au", GH: "gh",
  KE: "ke", ZA: "za", PH: "ph", ZW: "zw", IN: "in", SC: "sc",
  DE: "de", BR: "br", NZ: "nz", FR: "fr", ES: "es", SA: "sa", MY: "my",
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
