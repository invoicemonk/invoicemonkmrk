import { LegalPage } from '@/components/legal/LegalPage';
import { cookieEN } from '@/data/legal/cookie.en';

export default function CookiePolicy() {
  return <LegalPage content={cookieEN} langPrefix="en" />;
}
