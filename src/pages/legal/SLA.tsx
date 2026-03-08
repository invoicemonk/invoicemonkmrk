import { useTranslation } from 'react-i18next';
import { LegalPage } from '@/components/legal/LegalPage';
import { getLangPrefix } from '@/utils/i18nData';
import { slaEN } from '@/data/legal/sla.en';
import { slaDE } from '@/data/legal/sla.de';
import { slaFR } from '@/data/legal/sla.fr';
import { slaPT } from '@/data/legal/sla.pt';
import { slaES } from '@/data/legal/sla.es';
import type { LegalPageContent } from '@/data/legal/types';

const contentMap: Record<string, LegalPageContent> = {
  en: slaEN,
  de: slaDE,
  fr: slaFR,
  pt: slaPT,
  es: slaES,
};

const SLA = () => {
  const { i18n } = useTranslation();
  const lang = getLangPrefix(i18n.language);
  return <LegalPage content={contentMap[lang] ?? slaEN} langPrefix={lang} />;
};

export default SLA;
