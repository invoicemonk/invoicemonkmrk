import { useTranslation } from 'react-i18next';
import { LegalPage } from '@/components/legal/LegalPage';
import { getLangPrefix } from '@/utils/i18nData';
import { termsEN } from '@/data/legal/terms.en';
import { termsDE } from '@/data/legal/terms.de';
import { termsFR } from '@/data/legal/terms.fr';
import { termsPT } from '@/data/legal/terms.pt';
import { termsES } from '@/data/legal/terms.es';
import type { LegalPageContent } from '@/data/legal/types';

const contentMap: Record<string, LegalPageContent> = {
  en: termsEN,
  de: termsDE,
  fr: termsFR,
  pt: termsPT,
  es: termsES,
};

export default function TermsOfService() {
  const { i18n } = useTranslation();
  const lang = getLangPrefix(i18n.language);
  return <LegalPage content={contentMap[lang] ?? termsEN} langPrefix={lang} />;
}
