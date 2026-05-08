import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supportedCountries, SupportedCountry } from '@/locales';

const LOCALE_STORAGE_KEY = 'invoicemonk-country';

// Timezone → country mapping (used only for currency/locale UX; language is always English).
const timezoneToCountry: Record<string, string> = {
  'Africa/Lagos': 'NG',
  'Africa/Accra': 'GH',
  'Africa/Nairobi': 'KE',
  'Africa/Johannesburg': 'ZA',
  'Africa/Harare': 'ZW',
  'America/New_York': 'US',
  'America/Chicago': 'US',
  'America/Denver': 'US',
  'America/Los_Angeles': 'US',
  'America/Phoenix': 'US',
  'America/Toronto': 'CA',
  'America/Vancouver': 'CA',
  'America/Montreal': 'CA',
  'America/Edmonton': 'CA',
  'America/Winnipeg': 'CA',
  'America/Sao_Paulo': 'BR',
  'America/Fortaleza': 'BR',
  'America/Recife': 'BR',
  'America/Bahia': 'BR',
  'America/Manaus': 'BR',
  'America/Belem': 'BR',
  'Europe/London': 'GB',
  'Europe/Berlin': 'DE',
  'Europe/Paris': 'FR',
  'Europe/Madrid': 'ES',
  'Asia/Manila': 'PH',
  'Asia/Kolkata': 'IN',
  'Asia/Calcutta': 'IN',
  'Asia/Kuala_Lumpur': 'MY',
  'Asia/Riyadh': 'SA',
  'Australia/Sydney': 'AU',
  'Australia/Melbourne': 'AU',
  'Australia/Brisbane': 'AU',
  'Australia/Perth': 'AU',
  'Australia/Adelaide': 'AU',
  'Pacific/Auckland': 'NZ',
  'Indian/Mahe': 'SC',
};

function detectCountryFromTimezone(): string | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timezoneToCountry[tz] ?? null;
  } catch {
    return null;
  }
}

function saveCountry(countryCode: string) {
  if (supportedCountries.includes(countryCode as SupportedCountry)) {
    localStorage.setItem(LOCALE_STORAGE_KEY, countryCode);
  }
}

/**
 * Rendered at `/`. Redirects to `/en/` (the only active locale).
 * Best-effort country detection from timezone is still recorded for currency/locale UX.
 */
export function LanguageRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (!saved) {
        const country = detectCountryFromTimezone();
        if (country) saveCountry(country);
      }
    } catch { /* noop */ }

    navigate('/en/', { replace: true });
  }, [navigate]);

  return null;
}
