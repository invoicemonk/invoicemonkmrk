import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enCommon from './en/common.json';
import deCommon from './de/common.json';
import frCommon from './fr/common.json';
import ptBRCommon from './pt-BR/common.json';

/** Map URL country prefix → i18next language code */
export const countryPrefixToLanguage: Record<string, string> = {
  de: 'de',
  fr: 'fr',
  br: 'pt-BR',
  // All others default to 'en'
};

/** Get language code from country URL prefix */
export function getLanguageFromPrefix(prefix: string): string {
  return countryPrefixToLanguage[prefix] || 'en';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      de: { common: deCommon },
      fr: { common: frCommon },
      'pt-BR': { common: ptBRCommon },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false, // React already escapes
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
