import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './en/common.json';
import deCommon from './de/common.json';
import frCommon from './fr/common.json';
import ptBRCommon from './pt-BR/common.json';
import esCommon from './es/common.json';

import enCompliance from './en/compliance.json';
import deCompliance from './de/compliance.json';
import frCompliance from './fr/compliance.json';
import ptBRCompliance from './pt-BR/compliance.json';
import esCompliance from './es/compliance.json';

import enAbout from './en/about.json';
import deAbout from './de/about.json';
import frAbout from './fr/about.json';
import ptBRAbout from './pt-BR/about.json';
import esAbout from './es/about.json';

import enPricing from './en/pricing.json';
import dePricing from './de/pricing.json';
import frPricing from './fr/pricing.json';
import ptBRPricing from './pt-BR/pricing.json';
import esPricing from './es/pricing.json';

import enWhyInvoicemonk from './en/whyInvoicemonk.json';
import deWhyInvoicemonk from './de/whyInvoicemonk.json';
import frWhyInvoicemonk from './fr/whyInvoicemonk.json';
import ptBRWhyInvoicemonk from './pt-BR/whyInvoicemonk.json';
import esWhyInvoicemonk from './es/whyInvoicemonk.json';

import enFreeInvoiceGenerator from './en/freeInvoiceGenerator.json';
import deFreeInvoiceGenerator from './de/freeInvoiceGenerator.json';
import frFreeInvoiceGenerator from './fr/freeInvoiceGenerator.json';
import ptBRFreeInvoiceGenerator from './pt-BR/freeInvoiceGenerator.json';
import esFreeInvoiceGenerator from './es/freeInvoiceGenerator.json';

import enInvoicing from './en/invoicing.json';
import deInvoicing from './de/invoicing.json';
import frInvoicing from './fr/invoicing.json';
import ptBRInvoicing from './pt-BR/invoicing.json';
import esInvoicing from './es/invoicing.json';

import enExpenses from './en/expenses.json';
import deExpenses from './de/expenses.json';
import frExpenses from './fr/expenses.json';
import ptBRExpenses from './pt-BR/expenses.json';
import esExpenses from './es/expenses.json';

import enContact from './en/contact.json';
import deContact from './de/contact.json';
import frContact from './fr/contact.json';
import ptBRContact from './pt-BR/contact.json';
import esContact from './es/contact.json';

import enPayments from './en/payments.json';
import dePayments from './de/payments.json';
import frPayments from './fr/payments.json';
import ptBRPayments from './pt-BR/payments.json';
import esPayments from './es/payments.json';

import enAccounting from './en/accounting.json';
import deAccounting from './de/accounting.json';
import frAccounting from './fr/accounting.json';
import ptBRAccounting from './pt-BR/accounting.json';
import esAccounting from './es/accounting.json';

import enEstimates from './en/estimates.json';
import deEstimates from './de/estimates.json';
import frEstimates from './fr/estimates.json';
import ptBREstimates from './pt-BR/estimates.json';
import esEstimates from './es/estimates.json';

import enReceipts from './en/receipts.json';
import deReceipts from './de/receipts.json';
import frReceipts from './fr/receipts.json';
import ptBRReceipts from './pt-BR/receipts.json';
import esReceipts from './es/receipts.json';

import enClientManagement from './en/clientManagement.json';
import deClientManagement from './de/clientManagement.json';
import frClientManagement from './fr/clientManagement.json';
import ptBRClientManagement from './pt-BR/clientManagement.json';
import esClientManagement from './es/clientManagement.json';

import enFreelancers from './en/freelancers.json';
import deFreelancers from './de/freelancers.json';
import frFreelancers from './fr/freelancers.json';
import ptBRFreelancers from './pt-BR/freelancers.json';
import esFreelancers from './es/freelancers.json';

import enPhotographers from './en/photographers.json';
import dePhotographers from './de/photographers.json';
import frPhotographers from './fr/photographers.json';
import ptBRPhotographers from './pt-BR/photographers.json';
import esPhotographers from './es/photographers.json';

import enConsultants from './en/consultants.json';
import deConsultants from './de/consultants.json';
import frConsultants from './fr/consultants.json';
import ptBRConsultants from './pt-BR/consultants.json';
import esConsultants from './es/consultants.json';

import enCreatives from './en/creatives.json';
import deCreatives from './de/creatives.json';
import frCreatives from './fr/creatives.json';
import ptBRCreatives from './pt-BR/creatives.json';
import esCreatives from './es/creatives.json';

import enContractors from './en/contractors.json';
import deContractors from './de/contractors.json';
import frContractors from './fr/contractors.json';
import ptBRContractors from './pt-BR/contractors.json';
import esContractors from './es/contractors.json';

import enDeveloper from './en/developer.json';
import deDeveloper from './de/developer.json';
import frDeveloper from './fr/developer.json';
import ptBRDeveloper from './pt-BR/developer.json';
import esDeveloper from './es/developer.json';

export const langPrefixToI18nCode: Record<string, string> = {
  en: 'en', de: 'de', fr: 'fr', pt: 'pt-BR', es: 'es',
};
export const countryPrefixToLanguage = langPrefixToI18nCode;
export function getLanguageFromPrefix(prefix: string): string {
  return langPrefixToI18nCode[prefix] || 'en';
}

const ns = ['common', 'compliance', 'about', 'pricing', 'whyInvoicemonk', 'freeInvoiceGenerator', 'invoicing', 'expenses', 'contact', 'payments', 'accounting', 'estimates', 'receipts', 'clientManagement', 'freelancers', 'photographers', 'consultants', 'creatives'];

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon, compliance: enCompliance, about: enAbout, pricing: enPricing, whyInvoicemonk: enWhyInvoicemonk, freeInvoiceGenerator: enFreeInvoiceGenerator, invoicing: enInvoicing, expenses: enExpenses, contact: enContact, payments: enPayments, accounting: enAccounting, estimates: enEstimates, receipts: enReceipts, clientManagement: enClientManagement, freelancers: enFreelancers, photographers: enPhotographers, consultants: enConsultants, creatives: enCreatives },
    de: { common: deCommon, compliance: deCompliance, about: deAbout, pricing: dePricing, whyInvoicemonk: deWhyInvoicemonk, freeInvoiceGenerator: deFreeInvoiceGenerator, invoicing: deInvoicing, expenses: deExpenses, contact: deContact, payments: dePayments, accounting: deAccounting, estimates: deEstimates, receipts: deReceipts, clientManagement: deClientManagement, freelancers: deFreelancers, photographers: dePhotographers, consultants: deConsultants, creatives: deCreatives },
    fr: { common: frCommon, compliance: frCompliance, about: frAbout, pricing: frPricing, whyInvoicemonk: frWhyInvoicemonk, freeInvoiceGenerator: frFreeInvoiceGenerator, invoicing: frInvoicing, expenses: frExpenses, contact: frContact, payments: frPayments, accounting: frAccounting, estimates: frEstimates, receipts: frReceipts, clientManagement: frClientManagement, freelancers: frFreelancers, photographers: frPhotographers, consultants: frConsultants, creatives: frCreatives },
    'pt-BR': { common: ptBRCommon, compliance: ptBRCompliance, about: ptBRAbout, pricing: ptBRPricing, whyInvoicemonk: ptBRWhyInvoicemonk, freeInvoiceGenerator: ptBRFreeInvoiceGenerator, invoicing: ptBRInvoicing, expenses: ptBRExpenses, contact: ptBRContact, payments: ptBRPayments, accounting: ptBRAccounting, estimates: ptBREstimates, receipts: ptBRReceipts, clientManagement: ptBRClientManagement, freelancers: ptBRFreelancers, photographers: ptBRPhotographers, consultants: ptBRConsultants, creatives: ptBRCreatives },
    es: { common: esCommon, compliance: esCompliance, about: esAbout, pricing: esPricing, whyInvoicemonk: esWhyInvoicemonk, freeInvoiceGenerator: esFreeInvoiceGenerator, invoicing: esInvoicing, expenses: esExpenses, contact: esContact, payments: esPayments, accounting: esAccounting, estimates: esEstimates, receipts: esReceipts, clientManagement: esClientManagement, freelancers: esFreelancers, photographers: esPhotographers, consultants: esConsultants, creatives: esCreatives },
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  ns,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;