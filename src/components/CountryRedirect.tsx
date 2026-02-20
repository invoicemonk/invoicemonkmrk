import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supportedCountries, countryToUrlPrefix, defaultCountry, SupportedCountry } from '@/locales';

const LOCALE_STORAGE_KEY = 'invoicemonk-country';

// Timezone → country mapping
const timezoneToCountry: Record<string, SupportedCountry> = {
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
  'Europe/London': 'GB',
  'Europe/Berlin': 'DE',
  'Europe/Paris': 'FR',
  'Australia/Sydney': 'AU',
  'Australia/Melbourne': 'AU',
  'Australia/Brisbane': 'AU',
  'Australia/Perth': 'AU',
  'Australia/Adelaide': 'AU',
  'Asia/Manila': 'PH',
  'Asia/Kolkata': 'IN',
  'Asia/Calcutta': 'IN',
  'Indian/Mahe': 'SC',
  'Pacific/Auckland': 'NZ',
};

const canadianTimezones = [
  'America/Toronto', 'America/Vancouver', 'America/Montreal',
  'America/Edmonton', 'America/Winnipeg', 'America/Halifax',
  'America/St_Johns', 'America/Regina', 'America/Whitehorse',
  'America/Yellowknife',
];

const brazilianTimezones = [
  'America/Sao_Paulo', 'America/Fortaleza', 'America/Recife',
  'America/Bahia', 'America/Manaus', 'America/Belem',
];

function detectCountryFromTimezone(): SupportedCountry | null {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Exact match
    if (timezoneToCountry[timezone]) return timezoneToCountry[timezone];

    // Region-based fallback
    if (timezone.startsWith('America/')) {
      if (canadianTimezones.includes(timezone)) return 'CA';
      if (brazilianTimezones.includes(timezone)) return 'BR';
      return 'US';
    }
    if (timezone.startsWith('Australia/')) return 'AU';
    if (timezone.startsWith('Pacific/')) {
      if (timezone.includes('Auckland') || timezone.includes('Chatham')) return 'NZ';
    }
    if (timezone.startsWith('Asia/')) {
      if (timezone.includes('Manila')) return 'PH';
      if (timezone.includes('Kolkata') || timezone.includes('Calcutta') || timezone.includes('Chennai') || timezone.includes('Mumbai')) return 'IN';
    }
    if (timezone.startsWith('Indian/')) {
      if (timezone.includes('Mahe')) return 'SC';
    }
    if (timezone.startsWith('Africa/')) {
      if (timezone.includes('Nairobi')) return 'KE';
      if (timezone.includes('Johannesburg') || timezone.includes('Cape_Town')) return 'ZA';
      if (timezone.includes('Accra')) return 'GH';
      if (timezone.includes('Harare')) return 'ZW';
      return 'NG'; // Default African → Nigeria
    }
    if (timezone.startsWith('Europe/')) {
      if (timezone === 'Europe/London' || timezone === 'Europe/Belfast') return 'GB';
      if (timezone === 'Europe/Berlin' || timezone === 'Europe/Vienna' || timezone === 'Europe/Zurich') return 'DE';
      if (timezone === 'Europe/Paris' || timezone === 'Europe/Monaco') return 'FR';
    }

    return null;
  } catch {
    return null;
  }
}

async function detectCountryFromIP(): Promise<SupportedCountry | null> {
  try {
    const response = await fetch('http://ip-api.com/json/?fields=countryCode', {
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) return null;
    const data = await response.json();
    const code = data.countryCode as string;
    if (supportedCountries.includes(code as SupportedCountry)) {
      return code as SupportedCountry;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Rendered at `/` only. Detects the user's country and redirects
 * to the appropriate country-prefixed path (e.g. `/us/`, `/ng/`).
 */
export function CountryRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = async () => {
      // 1. Check localStorage for returning users
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved && supportedCountries.includes(saved as SupportedCountry)) {
        navigate(`/${countryToUrlPrefix[saved as SupportedCountry]}/`, { replace: true });
        return;
      }

      // 2. Try timezone detection (instant, no network)
      const tzCountry = detectCountryFromTimezone();
      if (tzCountry) {
        localStorage.setItem(LOCALE_STORAGE_KEY, tzCountry);
        navigate(`/${countryToUrlPrefix[tzCountry]}/`, { replace: true });
        return;
      }

      // 3. Try IP-based detection
      const ipCountry = await detectCountryFromIP();
      if (ipCountry) {
        localStorage.setItem(LOCALE_STORAGE_KEY, ipCountry);
        navigate(`/${countryToUrlPrefix[ipCountry]}/`, { replace: true });
        return;
      }

      // 4. Default to US
      navigate(`/${countryToUrlPrefix[defaultCountry]}/`, { replace: true });
    };

    redirect();
  }, [navigate]);

  return null;
}
