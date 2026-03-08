import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enCommon from './en/common.json';
import deCommon from './de/common.json';
import frCommon from './fr/common.json';
import ptBRCommon from './pt-BR/common.json';
import esCommon from './es/common.json';

// Compliance namespace
import enCompliance from './en/compliance.json';
import deCompliance from './de/compliance.json';
import frCompliance from './fr/compliance.json';
import ptBRCompliance from './pt-BR/compliance.json';
import esCompliance from './es/compliance.json';

// About namespace
import enAbout from './en/about.json';
import deAbout from './de/about.json';
import frAbout from './fr/about.json';
import ptBRAbout from './pt-BR/about.json';
import esAbout from './es/about.json';

// Pricing namespace
import enPricing from './en/pricing.json';
import dePricing from './de/pricing.json';
import frPricing from './fr/pricing.json';
import ptBRPricing from './pt-BR/pricing.json';
import esPricing from './es/pricing.json';

// WhyInvoicemonk namespace
import enWhyInvoicemonk from './en/whyInvoicemonk.json';
import deWhyInvoicemonk from './de/whyInvoicemonk.json';
import frWhyInvoicemonk from './fr/whyInvoicemonk.json';
import ptBRWhyInvoicemonk from './pt-BR/whyInvoicemonk.json';
import esWhyInvoicemonk from './es/whyInvoicemonk.json';

// FreeInvoiceGenerator namespace
import enFreeInvoiceGenerator from './en/freeInvoiceGenerator.json';
import deFreeInvoiceGenerator from './de/freeInvoiceGenerator.json';
import frFreeInvoiceGenerator from './fr/freeInvoiceGenerator.json';
import ptBRFreeInvoiceGenerator from './pt-BR/freeInvoiceGenerator.json';
import esFreeInvoiceGenerator from './es/freeInvoiceGenerator.json';

/** Map URL language prefix → i18next language code */
export const langPrefixToI18nCode: Record<string, string> = {
  en: 'en',
  de: 'de',
  fr: 'fr',
  pt: 'pt-BR',
  es: 'es',
};

// Keep legacy export for backward compat
export const countryPrefixToLanguage = langPrefixToI18nCode;

/** Get i18n language code from URL language prefix */
export function getLanguageFromPrefix(prefix: string): string {
  return langPrefixToI18nCode[prefix] || 'en';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        compliance: enCompliance,
        about: enAbout,
        pricing: enPricing,
        whyInvoicemonk: enWhyInvoicemonk,
        freeInvoiceGenerator: enFreeInvoiceGenerator,
      },
      de: {
        common: deCommon,
        compliance: deCompliance,
        about: deAbout,
        pricing: dePricing,
        whyInvoicemonk: deWhyInvoicemonk,
        freeInvoiceGenerator: deFreeInvoiceGenerator,
      },
      fr: {
        common: frCommon,
        compliance: frCompliance,
        about: frAbout,
        pricing: frPricing,
        whyInvoicemonk: frWhyInvoicemonk,
        freeInvoiceGenerator: frFreeInvoiceGenerator,
      },
      'pt-BR': {
        common: ptBRCommon,
        compliance: ptBRCompliance,
        about: ptBRAbout,
        pricing: ptBRPricing,
        whyInvoicemonk: ptBRWhyInvoicemonk,
        freeInvoiceGenerator: ptBRFreeInvoiceGenerator,
      },
      es: {
        common: esCommon,
        compliance: esCompliance,
        about: esAbout,
        pricing: esPricing,
        whyInvoicemonk: esWhyInvoicemonk,
        freeInvoiceGenerator: esFreeInvoiceGenerator,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'compliance', 'about', 'pricing', 'whyInvoicemonk', 'freeInvoiceGenerator'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
