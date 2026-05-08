import { LegalPage } from '@/components/legal/LegalPage';
import { termsEN } from '@/data/legal/terms.en';

export default function TermsOfService() {
  return <LegalPage content={termsEN} langPrefix="en" />;
}
