import { useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import { urlPrefixToCountry, countryToUrlPrefix, defaultCountry, SupportedCountry } from '@/locales';
import { getLanguageFromPrefix } from '@/i18n';

const LOCALE_STORAGE_KEY = 'invoicemonk-country';

/**
 * Wrapper component rendered at `/:country`.
 *
 * 1. Validates the `:country` URL prefix.
 * 2. If invalid, redirects the full original path under the user's
 *    saved (or default) country prefix.
 * 3. If valid, syncs the LocaleContext and i18n language, then renders child routes via <Outlet />.
 */
export function CountryLayout() {
  const { country } = useParams<{ country: string }>();
  const { setCountry, countryCode } = useLocale();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const prefix = country?.toLowerCase() || '';
  const validCountry: SupportedCountry | undefined = urlPrefixToCountry[prefix];

  useEffect(() => {
    if (!validCountry) {
      // Invalid prefix – redirect entire original path under the saved/default prefix
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as SupportedCountry | null;
      const targetPrefix =
        countryToUrlPrefix[saved && urlPrefixToCountry[countryToUrlPrefix[saved]] ? saved : defaultCountry];
      navigate(`/${targetPrefix}${location.pathname}${location.search}${location.hash}`, {
        replace: true,
      });
      return;
    }

    // Valid prefix – sync locale context
    if (validCountry !== countryCode) {
      setCountry(validCountry);
    }

    // Sync i18n language based on country prefix
    const targetLang = getLanguageFromPrefix(prefix);
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }

    // Set html lang attribute for SEO
    document.documentElement.lang = targetLang === 'pt-BR' ? 'pt-BR' : targetLang;
  }, [validCountry, prefix, location.pathname]);

  if (!validCountry) return null; // will redirect

  return <Outlet />;
}
