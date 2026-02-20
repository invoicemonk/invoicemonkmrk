import React, { createContext, useState, useCallback, useMemo } from 'react';
import {
  LocaleConfig,
  SupportedCountry,
  locales,
  defaultCountry,
  getLocale,
  formatCurrency as formatCurrencyUtil,
  formatPrice as formatPriceUtil,
  supportedCountries,
} from '@/locales';

const LOCALE_STORAGE_KEY = 'invoicemonk-country';

interface LocaleContextType {
  locale: LocaleConfig;
  countryCode: SupportedCountry;
  setCountry: (country: SupportedCountry) => void;
  formatCurrency: (amount: number) => string;
  formatPrice: (amount: number, period?: string) => string;
  isLoading: boolean;
  supportedCountries: SupportedCountry[];
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: React.ReactNode;
}

/**
 * Simplified locale provider.
 * The URL prefix is now the source of truth for locale selection.
 * CountryLayout calls setCountry() when the prefix changes.
 * CountryRedirect handles initial country detection and redirect.
 */
export function LocaleProvider({ children }: LocaleProviderProps) {
  const [countryCode, setCountryCode] = useState<SupportedCountry>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved && supportedCountries.includes(saved as SupportedCountry)) {
        return saved as SupportedCountry;
      }
    }
    return defaultCountry;
  });

  const setCountry = useCallback((country: SupportedCountry) => {
    setCountryCode(country);
    localStorage.setItem(LOCALE_STORAGE_KEY, country);
  }, []);

  const locale = useMemo(() => getLocale(countryCode), [countryCode]);

  const formatCurrency = useCallback(
    (amount: number) => formatCurrencyUtil(amount, locale),
    [locale],
  );

  const formatPrice = useCallback(
    (amount: number, period?: string) => formatPriceUtil(amount, locale, period),
    [locale],
  );

  const value = useMemo(
    () => ({
      locale,
      countryCode,
      setCountry,
      formatCurrency,
      formatPrice,
      isLoading: false,
      supportedCountries,
    }),
    [locale, countryCode, setCountry, formatCurrency, formatPrice],
  );

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}
