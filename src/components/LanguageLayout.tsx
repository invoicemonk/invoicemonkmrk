import { useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import {
  supportedLanguages,
  SupportedLanguage,
  languageToI18nCode,
  defaultLanguage,
  countryToLanguage,
} from '@/locales';

const LOCALE_STORAGE_KEY = 'invoicemonk-country';

/**
 * Wrapper component rendered at `/:lang`.
 *
 * 1. Validates the `:lang` URL prefix against supported languages (en, de, fr, pt).
 * 2. If invalid, redirects under the user's detected language prefix.
 * 3. If valid, syncs i18n language and html lang, then renders child routes.
 *
 * Country-specific data (currency, pricing) comes from localStorage/context, not the URL.
 */
export function LanguageLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { countryCode } = useLocale();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const prefix = lang?.toLowerCase() || '';
  const isValidLang = supportedLanguages.includes(prefix as SupportedLanguage);

  useEffect(() => {
    if (!isValidLang) {
      // Invalid prefix – try to map old country prefixes or redirect to default
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      let targetLang: SupportedLanguage = defaultLanguage;

      if (saved) {
        // Map saved country to its language
        const langForCountry = countryToLanguage[saved as keyof typeof countryToLanguage];
        if (langForCountry) targetLang = langForCountry;
      }

      // Strip the invalid prefix from the path and redirect
      const restOfPath = location.pathname.replace(/^\/[^/]+/, '') || '/';
      navigate(`/${targetLang}${restOfPath}${location.search}${location.hash}`, {
        replace: true,
      });
      return;
    }

    // Sync i18n language
    const i18nCode = languageToI18nCode[prefix as SupportedLanguage];
    if (i18n.language !== i18nCode) {
      i18n.changeLanguage(i18nCode);
    }

    // Set html lang attribute for SEO
    document.documentElement.lang = i18nCode === 'pt-BR' ? 'pt-BR' : (i18nCode === 'es' ? 'es' : i18nCode);
  }, [isValidLang, prefix, location.pathname]);

  if (!isValidLang) return null; // will redirect

  return <Outlet />;
}
