import { useContext } from 'react';
import { LocaleContext } from '@/contexts/LocaleContext';
import {
  defaultCountry,
  getLocale,
  formatCurrency as formatCurrencyUtil,
  formatPrice as formatPriceUtil,
  supportedCountries,
} from '@/locales';

export function useLocale() {
  const context = useContext(LocaleContext);

  if (context) return context;

  // Fallback when used outside a LocaleProvider (e.g. during SSG prerender
  // or isolated component trees). Returns the default locale read-only.
  const locale = getLocale(defaultCountry);
  return {
    locale,
    countryCode: defaultCountry,
    setCountry: () => {},
    formatCurrency: (amount: number) => formatCurrencyUtil(amount, locale),
    formatPrice: (amount: number, period?: string) =>
      formatPriceUtil(amount, locale, period),
    isLoading: false,
    supportedCountries,
  };
}
