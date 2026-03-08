import { useTranslation } from 'react-i18next';
import { LegalPage } from '@/components/legal/LegalPage';
import { getLangPrefix } from '@/utils/i18nData';
import { termsEN } from '@/data/legal/terms.en';
import { termsDE } from '@/data/legal/terms.de';
import type { LegalPageContent } from '@/data/legal/types';

const contentMap: Record<string, LegalPageContent> = {
  en: termsEN,
  de: termsDE,
};

export default function TermsOfService() {
  const { i18n } = useTranslation();
  const lang = getLangPrefix(i18n.language);
  return <LegalPage content={contentMap[lang] ?? termsEN} langPrefix={lang} />;
}
