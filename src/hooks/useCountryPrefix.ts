import { useParams } from 'react-router-dom';
import { urlPrefixToCountry, SupportedCountry } from '@/locales';

export function useCountryPrefix() {
  const { country } = useParams<{ country: string }>();
  const prefix = country?.toLowerCase() || 'us';
  const countryCode: SupportedCountry | null = urlPrefixToCountry[prefix] || null;

  return { prefix, countryCode };
}
