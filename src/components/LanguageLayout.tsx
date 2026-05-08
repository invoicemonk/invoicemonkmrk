import { useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languageToI18nCode } from '@/locales';

/**
 * Wrapper component rendered at `/:lang`.
 *
 * Only `en` is active. Any other prefix is redirected to its `/en/...` equivalent.
 */
export function LanguageLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const prefix = lang?.toLowerCase() || '';
  // Only English is active. Any other prefix → 301-equivalent client redirect to /en/...
  const isValidLang = prefix === 'en';

  useEffect(() => {
    if (!isValidLang) {
      const restOfPath = location.pathname.replace(/^\/[^/]+/, '') || '/';
      navigate(`/en${restOfPath}${location.search}${location.hash}`, {
        replace: true,
      });
      return;
    }

    // Sync i18n language
    const i18nCode = languageToI18nCode['en'];
    if (i18n.language !== i18nCode) {
      i18n.changeLanguage(i18nCode);
    }

    document.documentElement.lang = 'en';
  }, [isValidLang, prefix, location.pathname]);

  if (!isValidLang) return null; // will redirect

  return <Outlet />;
}
