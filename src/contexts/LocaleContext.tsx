'use client'

import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { 
  LocaleConfig, 
  SupportedCountry, 
  locales, 
  defaultCountry, 
  getLocale, 
  formatCurrency as formatCurrencyUtil,
  formatPrice as formatPriceUtil,
  supportedCountries 
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

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [countryCode, setCountryCode] = useState<SupportedCountry>(defaultCountry);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Only run client-side detection after mount
  useEffect(() => {
    setMounted(true);
    
    // Check localStorage
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
        if (saved && supportedCountries.includes(saved as SupportedCountry)) {
          setCountryCode(saved as SupportedCountry);
        }
      } catch (e) {
        // Ignore localStorage errors
      }
    }
    
    setIsLoading(false);
  }, []);

  const setCountry = useCallback((country: SupportedCountry) => {
    setCountryCode(country);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, country);
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }, []);

  const locale = useMemo(() => getLocale(countryCode), [countryCode]);

  const formatCurrency = useCallback(
    (amount: number) => {
      if (!mounted) return `$${amount}`;
      return formatCurrencyUtil(amount, locale);
    },
    [locale, mounted]
  );

  const formatPrice = useCallback(
    (amount: number, period?: string) => {
      if (!mounted) return `$${amount}`;
      return formatPriceUtil(amount, locale, period);
    },
    [locale, mounted]
  );

  const value = useMemo(
    () => ({
      locale,
      countryCode,
      setCountry,
      formatCurrency,
      formatPrice,
      isLoading,
      supportedCountries,
    }),
    [locale, countryCode, setCountry, formatCurrency, formatPrice, isLoading]
  );

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}
