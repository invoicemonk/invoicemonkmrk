import { useParams } from 'react-router-dom';
import { SupportedLanguage } from '@/locales';

/**
 * @deprecated Use useParams<{ lang }> directly. Kept for backward compatibility.
 * Returns the current language prefix from the URL.
 */
export function useCountryPrefix() {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';

  return { prefix, countryCode: null, lang: prefix as SupportedLanguage };
}
