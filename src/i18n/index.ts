import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enCommon from './en/common.json';
import deCommon from './de/common.json';
import frCommon from './fr/common.json';
import ptBRCommon from './pt-BR/common.json';
import esCommon from './es/common.json';

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
      en: { common: enCommon },
      de: { common: deCommon },
      fr: { common: frCommon },
      'pt-BR': { common: ptBRCommon },
      es: { common: esCommon },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
