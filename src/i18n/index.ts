import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './en/common.json';
import enCompliance from './en/compliance.json';
import enAbout from './en/about.json';
import enPricing from './en/pricing.json';
import enWhyInvoicemonk from './en/whyInvoicemonk.json';
import enInvoicing from './en/invoicing.json';
import enExpenses from './en/expenses.json';
import enContact from './en/contact.json';
import enPayments from './en/payments.json';
import enAccounting from './en/accounting.json';
import enEstimates from './en/estimates.json';
import enReceipts from './en/receipts.json';
import enClientManagement from './en/clientManagement.json';
import enFreelancers from './en/freelancers.json';
import enPhotographers from './en/photographers.json';
import enConsultants from './en/consultants.json';
import enCreatives from './en/creatives.json';
import enContractors from './en/contractors.json';
import enDeveloper from './en/developer.json';
import enAgencies from './en/agencies.json';
import enLawyers from './en/lawyers.json';
import enSmallBusinesses from './en/smallBusinesses.json';
import enAccountants from './en/accountants.json';
import enEcommerce from './en/ecommerce.json';
import enCompareFreshbooks from './en/compareFreshbooks.json';
import enCompareQuickbooks from './en/compareQuickbooks.json';
import enCompareWave from './en/compareWave.json';
import enCompareZoho from './en/compareZoho.json';
import enBestInvoicingSoftware from './en/bestInvoicingSoftware.json';
import enCompareDext from './en/compareDext.json';
import enCompareStripe from './en/compareStripe.json';
import enCompareStripeInvoicing from './en/compareStripeInvoicing.json';
import enCompareEstimatesQuickbooks from './en/compareEstimatesQuickbooks.json';
import enCompareAtoinvoice from './en/compareAtoinvoice.json';
import enMilestoneBilling from './en/milestoneBilling.json';
import enMultiCurrencyInvoicing from './en/multiCurrencyInvoicing.json';
import enRecurringBilling from './en/recurringBilling.json';
import enRetainerBilling from './en/retainerBilling.json';
import enBlog from './en/blog.json';
import enHelp from './en/help.json';
import enGlossary from './en/glossary.json';
import enCorridors from './en/corridors.json';
import enHome from './en/home.json';
import enTools from './en/tools.json';
import enPartnerProgram from './en/partnerProgram.json';
import enExplore from './en/explore.json';

export const langPrefixToI18nCode: Record<string, string> = { en: 'en' };
export const countryPrefixToLanguage = langPrefixToI18nCode;
export function getLanguageFromPrefix(_prefix: string): string {
  return 'en';
}

const ns = ['common', 'compliance', 'about', 'pricing', 'whyInvoicemonk', 'invoicing', 'expenses', 'contact', 'payments', 'accounting', 'estimates', 'receipts', 'clientManagement', 'freelancers', 'photographers', 'consultants', 'creatives', 'contractors', 'developer', 'agencies', 'lawyers', 'smallBusinesses', 'accountants', 'ecommerce', 'compareFreshbooks', 'compareQuickbooks', 'compareWave', 'compareZoho', 'bestInvoicingSoftware', 'milestoneBilling', 'multiCurrencyInvoicing', 'recurringBilling', 'retainerBilling', 'blog', 'help', 'glossary', 'corridors', 'home', 'tools', 'explore', 'compareDext', 'compareStripe', 'compareStripeInvoicing', 'compareEstimatesQuickbooks', 'compareAtoinvoice', 'partnerProgram'];

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon, compliance: enCompliance, about: enAbout, pricing: enPricing, whyInvoicemonk: enWhyInvoicemonk,
      invoicing: enInvoicing, expenses: enExpenses, contact: enContact, payments: enPayments, accounting: enAccounting,
      estimates: enEstimates, receipts: enReceipts, clientManagement: enClientManagement, freelancers: enFreelancers,
      photographers: enPhotographers, consultants: enConsultants, creatives: enCreatives, contractors: enContractors,
      developer: enDeveloper, agencies: enAgencies, lawyers: enLawyers, smallBusinesses: enSmallBusinesses,
      accountants: enAccountants, ecommerce: enEcommerce, compareFreshbooks: enCompareFreshbooks,
      compareQuickbooks: enCompareQuickbooks, compareWave: enCompareWave, compareZoho: enCompareZoho,
      bestInvoicingSoftware: enBestInvoicingSoftware, milestoneBilling: enMilestoneBilling,
      multiCurrencyInvoicing: enMultiCurrencyInvoicing, recurringBilling: enRecurringBilling,
      retainerBilling: enRetainerBilling, blog: enBlog, help: enHelp, glossary: enGlossary, corridors: enCorridors,
      home: enHome, tools: enTools, explore: enExplore, compareDext: enCompareDext, compareStripe: enCompareStripe,
      compareStripeInvoicing: enCompareStripeInvoicing, compareEstimatesQuickbooks: enCompareEstimatesQuickbooks,
      compareAtoinvoice: enCompareAtoinvoice, partnerProgram: enPartnerProgram,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  ns,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
