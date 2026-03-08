import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  supportedCountries,
  SupportedCountry,
  SupportedLanguage,
  defaultLanguage,
  countryToLanguage,
} from '@/locales';

const LOCALE_STORAGE_KEY = 'invoicemonk-country';

/**
 * Maps any ISO country code to a language prefix.
 * Covers 80+ countries from GSC data. Countries not listed default to English.
 */
const countryCodeToLanguage: Record<string, SupportedLanguage> = {
  // Spanish-speaking countries
  ES: "es", MX: "es", CO: "es", AR: "es", CL: "es", PE: "es",
  EC: "es", VE: "es", DO: "es", CR: "es", PA: "es", UY: "es",
  PY: "es", HN: "es", SV: "es", GT: "es", NI: "es", BO: "es",
  CU: "es", PR: "es", GQ: "es",

  // Portuguese-speaking countries
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt", CV: "pt",

  // German-speaking countries
  DE: "de", AT: "de", CH: "de", LI: "de",

  // French-speaking countries
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", SN: "fr", CI: "fr",
  CM: "fr", ML: "fr", BF: "fr", NE: "fr", TD: "fr", GN: "fr",
  RW: "fr", BI: "fr", BJ: "fr", TG: "fr", MG: "fr", CG: "fr",
  CD: "fr", GA: "fr", DJ: "fr", CF: "fr", HT: "fr",

  // English-speaking countries (explicit)
  US: "en", GB: "en", CA: "en", AU: "en", NZ: "en", IE: "en",
  NG: "en", GH: "en", KE: "en", ZA: "en", ZW: "en", TZ: "en",
  UG: "en", RW: "en", PH: "en", IN: "en", PK: "en", BD: "en",
  LK: "en", SG: "en", MY: "en", HK: "en", JM: "en", TT: "en",
  BW: "en", NA: "en", SC: "en", MW: "en", ZM: "en", SL: "en",
  LR: "en", GM: "en", FJ: "en",
};

// Timezone → country mapping (comprehensive)
const timezoneToCountry: Record<string, SupportedCountry | string> = {
  // Africa
  'Africa/Lagos': 'NG',
  'Africa/Accra': 'GH',
  'Africa/Nairobi': 'KE',
  'Africa/Johannesburg': 'ZA',
  'Africa/Harare': 'ZW',
  'Africa/Dar_es_Salaam': 'TZ',
  'Africa/Kampala': 'UG',
  'Africa/Lusaka': 'ZM',
  'Africa/Luanda': 'AO',
  'Africa/Maputo': 'MZ',
  'Africa/Dakar': 'SN',
  'Africa/Abidjan': 'CI',
  'Africa/Douala': 'CM',
  'Africa/Casablanca': 'MA',
  'Africa/Cairo': 'EG',

  // Americas - English
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
  'America/Jamaica': 'JM',

  // Americas - Spanish
  'America/Mexico_City': 'MX',
  'America/Cancun': 'MX',
  'America/Monterrey': 'MX',
  'America/Tijuana': 'MX',
  'America/Bogota': 'CO',
  'America/Lima': 'PE',
  'America/Santiago': 'CL',
  'America/Buenos_Aires': 'AR',
  'America/Argentina/Buenos_Aires': 'AR',
  'America/Argentina/Cordoba': 'AR',
  'America/Guayaquil': 'EC',
  'America/Caracas': 'VE',
  'America/Santo_Domingo': 'DO',
  'America/Costa_Rica': 'CR',
  'America/Panama': 'PA',
  'America/Montevideo': 'UY',
  'America/Asuncion': 'PY',
  'America/Tegucigalpa': 'HN',
  'America/El_Salvador': 'SV',
  'America/Guatemala': 'GT',
  'America/Managua': 'NI',
  'America/La_Paz': 'BO',
  'America/Havana': 'CU',
  'America/Puerto_Rico': 'PR',

  // Americas - Portuguese
  'America/Sao_Paulo': 'BR',
  'America/Fortaleza': 'BR',
  'America/Recife': 'BR',
  'America/Bahia': 'BR',
  'America/Manaus': 'BR',
  'America/Belem': 'BR',

  // Europe
  'Europe/London': 'GB',
  'Europe/Berlin': 'DE',
  'Europe/Paris': 'FR',
  'Europe/Madrid': 'ES',
  'Europe/Lisbon': 'PT',
  'Europe/Vienna': 'AT',
  'Europe/Zurich': 'CH',
  'Europe/Monaco': 'MC',
  'Europe/Brussels': 'BE',
  'Europe/Luxembourg': 'LU',
  'Europe/Dublin': 'IE',
  'Europe/Amsterdam': 'NL',
  'Europe/Rome': 'IT',
  'Europe/Stockholm': 'SE',
  'Europe/Oslo': 'NO',
  'Europe/Copenhagen': 'DK',
  'Europe/Helsinki': 'FI',
  'Europe/Warsaw': 'PL',
  'Europe/Prague': 'CZ',
  'Europe/Bucharest': 'RO',
  'Europe/Athens': 'GR',
  'Europe/Istanbul': 'TR',
  'Europe/Moscow': 'RU',
  'Europe/Kiev': 'UA',
  'Europe/Belgrade': 'RS',
  'Europe/Zagreb': 'HR',
  'Europe/Budapest': 'HU',

  // Asia
  'Asia/Manila': 'PH',
  'Asia/Kolkata': 'IN',
  'Asia/Calcutta': 'IN',
  'Asia/Karachi': 'PK',
  'Asia/Dhaka': 'BD',
  'Asia/Colombo': 'LK',
  'Asia/Singapore': 'SG',
  'Asia/Kuala_Lumpur': 'MY',
  'Asia/Hong_Kong': 'HK',
  'Asia/Tokyo': 'JP',
  'Asia/Seoul': 'KR',
  'Asia/Shanghai': 'CN',
  'Asia/Dubai': 'AE',
  'Asia/Riyadh': 'SA',
  'Asia/Jakarta': 'ID',
  'Asia/Bangkok': 'TH',
  'Asia/Ho_Chi_Minh': 'VN',
  'Asia/Taipei': 'TW',

  // Oceania
  'Australia/Sydney': 'AU',
  'Australia/Melbourne': 'AU',
  'Australia/Brisbane': 'AU',
  'Australia/Perth': 'AU',
  'Australia/Adelaide': 'AU',
  'Pacific/Auckland': 'NZ',
  'Pacific/Fiji': 'FJ',

  // Other
  'Indian/Mahe': 'SC',
  'Atlantic/Canary': 'ES',
};

/**
 * Get the language prefix for any country code (ISO 3166-1 alpha-2).
 * Falls back to English for unmapped countries.
 */
function getLanguageForAnyCountry(countryCode: string): SupportedLanguage {
  // First check our explicit mapping
  if (countryCodeToLanguage[countryCode]) {
    return countryCodeToLanguage[countryCode];
  }
  // For supported InvoicemonkCountry codes, use the locale mapping
  if (supportedCountries.includes(countryCode as SupportedCountry)) {
    return countryToLanguage[countryCode as SupportedCountry];
  }
  return defaultLanguage;
}

/**
 * Detect country from timezone and return the appropriate language.
 */
function detectLanguageFromTimezone(): { lang: SupportedLanguage; country: string } | null {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Direct timezone match
    if (timezoneToCountry[timezone]) {
      const country = timezoneToCountry[timezone];
      const lang = getLanguageForAnyCountry(country);
      return { lang, country };
    }

    // Fallback by timezone region
    if (timezone.startsWith('America/')) {
      // Check if it's a known Canadian timezone
      const canadianTzs = ['America/Toronto', 'America/Vancouver', 'America/Montreal',
        'America/Edmonton', 'America/Winnipeg', 'America/Halifax',
        'America/St_Johns', 'America/Regina', 'America/Whitehorse', 'America/Yellowknife'];
      if (canadianTzs.includes(timezone)) return { lang: 'en', country: 'CA' };

      // Check Brazilian
      const brazilTzs = ['America/Sao_Paulo', 'America/Fortaleza', 'America/Recife',
        'America/Bahia', 'America/Manaus', 'America/Belem'];
      if (brazilTzs.includes(timezone)) return { lang: 'pt', country: 'BR' };

      // Most remaining Americas timezones are Spanish-speaking
      // (US timezones are already mapped above)
      return { lang: 'es', country: 'MX' };
    }
    if (timezone.startsWith('Europe/')) {
      if (timezone === 'Europe/London' || timezone === 'Europe/Belfast') return { lang: 'en', country: 'GB' };
      if (timezone === 'Europe/Dublin') return { lang: 'en', country: 'IE' };
      if (timezone === 'Europe/Berlin' || timezone === 'Europe/Vienna' || timezone === 'Europe/Zurich') return { lang: 'de', country: 'DE' };
      if (timezone === 'Europe/Paris' || timezone === 'Europe/Monaco' || timezone === 'Europe/Brussels' || timezone === 'Europe/Luxembourg') return { lang: 'fr', country: 'FR' };
      if (timezone === 'Europe/Madrid') return { lang: 'es', country: 'ES' };
      if (timezone === 'Europe/Lisbon') return { lang: 'pt', country: 'PT' };
      // Default other European timezones to English
      return { lang: 'en', country: 'US' };
    }
    if (timezone.startsWith('Australia/')) return { lang: 'en', country: 'AU' };
    if (timezone.startsWith('Africa/')) {
      // French-speaking African countries
      const frenchAfricanTzs = ['Africa/Dakar', 'Africa/Abidjan', 'Africa/Douala',
        'Africa/Kinshasa', 'Africa/Brazzaville', 'Africa/Libreville',
        'Africa/Bangui', 'Africa/Niamey', 'Africa/Ouagadougou',
        'Africa/Bamako', 'Africa/Conakry', 'Africa/Lome', 'Africa/Porto-Novo',
        'Africa/Ndjamena', 'Africa/Bujumbura', 'Africa/Kigali'];
      if (frenchAfricanTzs.includes(timezone)) return { lang: 'fr', country: 'FR' };

      // Portuguese-speaking African
      if (timezone === 'Africa/Luanda') return { lang: 'pt', country: 'AO' };
      if (timezone === 'Africa/Maputo') return { lang: 'pt', country: 'MZ' };

      // Default African to English (NG being the biggest market)
      if (timezone.includes('Nairobi')) return { lang: 'en', country: 'KE' };
      if (timezone.includes('Johannesburg') || timezone.includes('Cape_Town')) return { lang: 'en', country: 'ZA' };
      if (timezone.includes('Accra')) return { lang: 'en', country: 'GH' };
      if (timezone.includes('Harare')) return { lang: 'en', country: 'ZW' };
      return { lang: 'en', country: 'NG' };
    }
    if (timezone.startsWith('Asia/')) {
      if (timezone.includes('Manila')) return { lang: 'en', country: 'PH' };
      if (timezone.includes('Kolkata') || timezone.includes('Calcutta') || timezone.includes('Chennai') || timezone.includes('Mumbai')) return { lang: 'en', country: 'IN' };
      return { lang: 'en', country: 'US' };
    }
    if (timezone.startsWith('Pacific/')) {
      if (timezone.includes('Auckland') || timezone.includes('Chatham')) return { lang: 'en', country: 'NZ' };
      return { lang: 'en', country: 'US' };
    }
    if (timezone.startsWith('Indian/')) {
      if (timezone.includes('Mahe')) return { lang: 'en', country: 'SC' };
    }

    return null;
  } catch {
    return null;
  }
}

async function detectCountryFromIP(): Promise<{ lang: SupportedLanguage; country: string } | null> {
  try {
    const response = await fetch('http://ip-api.com/json/?fields=countryCode', {
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) return null;
    const data = await response.json();
    const code = data.countryCode as string;
    const lang = getLanguageForAnyCountry(code);
    return { lang, country: code };
  } catch {
    return null;
  }
}

/**
 * Store the detected country in localStorage if it's a supported InvoicemonkCountry.
 * For unsupported countries, store the closest supported match.
 */
function saveCountry(countryCode: string) {
  if (supportedCountries.includes(countryCode as SupportedCountry)) {
    localStorage.setItem(LOCALE_STORAGE_KEY, countryCode);
  } else {
    // Map to closest supported country based on language
    const lang = getLanguageForAnyCountry(countryCode);
    const fallbackMap: Record<SupportedLanguage, SupportedCountry> = {
      en: 'US', de: 'DE', fr: 'FR', pt: 'BR', es: 'ES',
    };
    localStorage.setItem(LOCALE_STORAGE_KEY, fallbackMap[lang]);
  }
}

/**
 * Rendered at `/` only. Detects the user's country, saves it,
 * and redirects to the appropriate language prefix (e.g. `/en/`, `/de/`, `/es/`).
 */
export function LanguageRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = async () => {
      // 1. Check localStorage for returning users
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved && supportedCountries.includes(saved as SupportedCountry)) {
        const lang = countryToLanguage[saved as SupportedCountry] || defaultLanguage;
        navigate(`/${lang}/`, { replace: true });
        return;
      }

      // 2. Try timezone detection
      const tzResult = detectLanguageFromTimezone();
      if (tzResult) {
        saveCountry(tzResult.country);
        navigate(`/${tzResult.lang}/`, { replace: true });
        return;
      }

      // 3. Try IP-based detection
      const ipResult = await detectCountryFromIP();
      if (ipResult) {
        saveCountry(ipResult.country);
        navigate(`/${ipResult.lang}/`, { replace: true });
        return;
      }

      // 4. Default to English
      navigate(`/${defaultLanguage}/`, { replace: true });
    };

    redirect();
  }, [navigate]);

  return null;
}
