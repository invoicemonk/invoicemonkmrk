import { useTranslation } from 'react-i18next';
import { LegalPage } from '@/components/legal/LegalPage';
import { getLangPrefix } from '@/utils/i18nData';
import { privacyEN } from '@/data/legal/privacy.en';
import { privacyDE } from '@/data/legal/privacy.de';
import { privacyFR } from '@/data/legal/privacy.fr';
import { privacyPT } from '@/data/legal/privacy.pt';
import { privacyES } from '@/data/legal/privacy.es';
import type { LegalPageContent } from '@/data/legal/types';

const contentMap: Record<string, LegalPageContent> = {
  en: privacyEN,
  de: privacyDE,
  fr: privacyFR,
  pt: privacyPT,
  es: privacyES,
};

export default function PrivacyPolicy() {
  const { i18n } = useTranslation();
  const lang = getLangPrefix(i18n.language);
  return <LegalPage content={contentMap[lang] ?? privacyEN} langPrefix={lang} />;
}
