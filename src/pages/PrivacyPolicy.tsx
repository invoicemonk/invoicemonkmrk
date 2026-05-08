import { LegalPage } from '@/components/legal/LegalPage';
import { privacyEN } from '@/data/legal/privacy.en';

export default function PrivacyPolicy() {
  return <LegalPage content={privacyEN} langPrefix="en" />;
}
