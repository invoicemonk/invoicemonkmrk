import { useTranslation } from 'react-i18next';
import { LegalPage } from '@/components/legal/LegalPage';
import { getLangPrefix } from '@/utils/i18nData';
import { cookieEN } from '@/data/legal/cookie.en';
import type { LegalPageContent } from '@/data/legal/types';

const contentMap: Record<string, LegalPageContent> = {
  en: cookieEN,
};

export default function CookiePolicy() {
  const { i18n } = useTranslation();
  const lang = getLangPrefix(i18n.language);
  return <LegalPage content={contentMap[lang] ?? cookieEN} langPrefix={lang} />;
}
