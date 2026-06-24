import React, { createContext, useMemo } from 'react';
import {
  LocaleConfig,
  SupportedCountry,
  defaultCountry,
  getLocale,
  formatCurrency as formatCurrencyUtil,
  formatPrice as formatPriceUtil,
  supportedCountries,
} from '@/locales';

interface LocaleContextType {
  locale: LocaleConfig;
  countryCode: SupportedCountry;
  setCountry: (country: SupportedCountry) => void;
  formatCurrency: (amount: number) => string;
  formatPrice: (amount: number, period?: string) => string;
  isLoading: boolean;
  supportedCountries: readonly SupportedCountry[];
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

/**
 * Single-locale provider. The project ships English only.
 * `setCountry` is a no-op kept for API compatibility with older call sites.
 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo<LocaleContextType>(() => {
    const locale = getLocale();
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
  }, []);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
