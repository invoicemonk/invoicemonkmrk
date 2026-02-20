import { useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import { urlPrefixToCountry, countryToUrlPrefix, defaultCountry, SupportedCountry } from '@/locales';

const LOCALE_STORAGE_KEY = 'invoicemonk-country';

/**
 * Wrapper component rendered at `/:country`.
 *
 * 1. Validates the `:country` URL prefix.
 * 2. If invalid, redirects the full original path under the user's
 *    saved (or default) country prefix.
 * 3. If valid, syncs the LocaleContext and renders child routes via <Outlet />.
 */
export function CountryLayout() {
  const { country } = useParams<{ country: string }>();
  const { setCountry, countryCode } = useLocale();
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
  }, [validCountry, prefix, location.pathname]);

  if (!validCountry) return null; // will redirect

  return <Outlet />;
}
