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

import enAgencies from './en/agencies.json';
import deAgencies from './de/agencies.json';
import frAgencies from './fr/agencies.json';
import ptBRAgencies from './pt-BR/agencies.json';
import esAgencies from './es/agencies.json';

import enLawyers from './en/lawyers.json';
import deLawyers from './de/lawyers.json';
import frLawyers from './fr/lawyers.json';
import ptBRLawyers from './pt-BR/lawyers.json';
import esLawyers from './es/lawyers.json';

import enSmallBusinesses from './en/smallBusinesses.json';
import deSmallBusinesses from './de/smallBusinesses.json';
import frSmallBusinesses from './fr/smallBusinesses.json';
import ptBRSmallBusinesses from './pt-BR/smallBusinesses.json';
import esSmallBusinesses from './es/smallBusinesses.json';

import enAccountants from './en/accountants.json';
import deAccountants from './de/accountants.json';
import frAccountants from './fr/accountants.json';
import ptBRAccountants from './pt-BR/accountants.json';
import esAccountants from './es/accountants.json';

import enEcommerce from './en/ecommerce.json';
import deEcommerce from './de/ecommerce.json';
import frEcommerce from './fr/ecommerce.json';
import ptBREcommerce from './pt-BR/ecommerce.json';
import esEcommerce from './es/ecommerce.json';

import enCompareFreshbooks from './en/compareFreshbooks.json';
import deCompareFreshbooks from './de/compareFreshbooks.json';
import frCompareFreshbooks from './fr/compareFreshbooks.json';
import ptBRCompareFreshbooks from './pt-BR/compareFreshbooks.json';
import esCompareFreshbooks from './es/compareFreshbooks.json';

import enCompareQuickbooks from './en/compareQuickbooks.json';
import deCompareQuickbooks from './de/compareQuickbooks.json';
import frCompareQuickbooks from './fr/compareQuickbooks.json';
import ptBRCompareQuickbooks from './pt-BR/compareQuickbooks.json';
import esCompareQuickbooks from './es/compareQuickbooks.json';

import enCompareWave from './en/compareWave.json';
import deCompareWave from './de/compareWave.json';
import frCompareWave from './fr/compareWave.json';
import ptBRCompareWave from './pt-BR/compareWave.json';
import esCompareWave from './es/compareWave.json';

import enCompareZoho from './en/compareZoho.json';
import deCompareZoho from './de/compareZoho.json';
import frCompareZoho from './fr/compareZoho.json';
import ptBRCompareZoho from './pt-BR/compareZoho.json';
import esCompareZoho from './es/compareZoho.json';

import enBestInvoicingSoftware from './en/bestInvoicingSoftware.json';
import deBestInvoicingSoftware from './de/bestInvoicingSoftware.json';
import frBestInvoicingSoftware from './fr/bestInvoicingSoftware.json';
import ptBRBestInvoicingSoftware from './pt-BR/bestInvoicingSoftware.json';
import esBestInvoicingSoftware from './es/bestInvoicingSoftware.json';

import enCompareDext from './en/compareDext.json';
import enCompareStripe from './en/compareStripe.json';
import enCompareEstimatesQuickbooks from './en/compareEstimatesQuickbooks.json';
import enCompareAtoinvoice from './en/compareAtoinvoice.json';

import enMilestoneBilling from './en/milestoneBilling.json';
import deMilestoneBilling from './de/milestoneBilling.json';
import frMilestoneBilling from './fr/milestoneBilling.json';
import ptBRMilestoneBilling from './pt-BR/milestoneBilling.json';
import esMilestoneBilling from './es/milestoneBilling.json';

import enMultiCurrencyInvoicing from './en/multiCurrencyInvoicing.json';
import deMultiCurrencyInvoicing from './de/multiCurrencyInvoicing.json';
import frMultiCurrencyInvoicing from './fr/multiCurrencyInvoicing.json';
import ptBRMultiCurrencyInvoicing from './pt-BR/multiCurrencyInvoicing.json';
import esMultiCurrencyInvoicing from './es/multiCurrencyInvoicing.json';

import enRecurringBilling from './en/recurringBilling.json';
import deRecurringBilling from './de/recurringBilling.json';
import frRecurringBilling from './fr/recurringBilling.json';
import ptBRRecurringBilling from './pt-BR/recurringBilling.json';
import esRecurringBilling from './es/recurringBilling.json';

import enRetainerBilling from './en/retainerBilling.json';
import deRetainerBilling from './de/retainerBilling.json';
import frRetainerBilling from './fr/retainerBilling.json';
import ptBRRetainerBilling from './pt-BR/retainerBilling.json';
import esRetainerBilling from './es/retainerBilling.json';

// Blog UI strings
import enBlog from './en/blog.json';
import deBlog from './de/blog.json';
import frBlog from './fr/blog.json';
import ptBRBlog from './pt-BR/blog.json';
import esBlog from './es/blog.json';

// Help UI strings
import enHelp from './en/help.json';
import deHelp from './de/help.json';
import frHelp from './fr/help.json';
import ptBRHelp from './pt-BR/help.json';
import esHelp from './es/help.json';

// Glossary UI strings
import enGlossary from './en/glossary.json';
import deGlossary from './de/glossary.json';
import frGlossary from './fr/glossary.json';
import ptBRGlossary from './pt-BR/glossary.json';
import esGlossary from './es/glossary.json';

// Corridor pages
import enCorridors from './en/corridors.json';
import deCorridors from './de/corridors.json';
import frCorridors from './fr/corridors.json';
import ptBRCorridors from './pt-BR/corridors.json';
import esCorridors from './es/corridors.json';

// Homepage
import enHome from './en/home.json';
import deHome from './de/home.json';
import frHome from './fr/home.json';
import ptBRHome from './pt-BR/home.json';
import esHome from './es/home.json';

// Tools (payment calculators)
import enTools from './en/tools.json';
import deTools from './de/tools.json';
import frTools from './fr/tools.json';
import ptBRTools from './pt-BR/tools.json';
import esTools from './es/tools.json';

// Explore page
import enExplore from './en/explore.json';
import deExplore from './de/explore.json';
import frExplore from './fr/explore.json';
import ptBRExplore from './pt-BR/explore.json';
import esExplore from './es/explore.json';

export const langPrefixToI18nCode: Record<string, string> = {
  en: 'en', de: 'de', fr: 'fr', pt: 'pt-BR', es: 'es',
};
export const countryPrefixToLanguage = langPrefixToI18nCode;
export function getLanguageFromPrefix(prefix: string): string {
  return langPrefixToI18nCode[prefix] || 'en';
}

const ns = ['common', 'compliance', 'about', 'pricing', 'whyInvoicemonk', 'freeInvoiceGenerator', 'invoicing', 'expenses', 'contact', 'payments', 'accounting', 'estimates', 'receipts', 'clientManagement', 'freelancers', 'photographers', 'consultants', 'creatives', 'contractors', 'developer', 'agencies', 'lawyers', 'smallBusinesses', 'accountants', 'ecommerce', 'compareFreshbooks', 'compareQuickbooks', 'compareWave', 'compareZoho', 'bestInvoicingSoftware', 'milestoneBilling', 'multiCurrencyInvoicing', 'recurringBilling', 'retainerBilling', 'blog', 'help', 'glossary', 'corridors', 'home', 'tools', 'explore', 'compareDext', 'compareStripe', 'compareEstimatesQuickbooks', 'compareAtoinvoice'];

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon, compliance: enCompliance, about: enAbout, pricing: enPricing, whyInvoicemonk: enWhyInvoicemonk, freeInvoiceGenerator: enFreeInvoiceGenerator, invoicing: enInvoicing, expenses: enExpenses, contact: enContact, payments: enPayments, accounting: enAccounting, estimates: enEstimates, receipts: enReceipts, clientManagement: enClientManagement, freelancers: enFreelancers, photographers: enPhotographers, consultants: enConsultants, creatives: enCreatives, contractors: enContractors, developer: enDeveloper, agencies: enAgencies, lawyers: enLawyers, smallBusinesses: enSmallBusinesses, accountants: enAccountants, ecommerce: enEcommerce, compareFreshbooks: enCompareFreshbooks, compareQuickbooks: enCompareQuickbooks, compareWave: enCompareWave, compareZoho: enCompareZoho, bestInvoicingSoftware: enBestInvoicingSoftware, milestoneBilling: enMilestoneBilling, multiCurrencyInvoicing: enMultiCurrencyInvoicing, recurringBilling: enRecurringBilling, retainerBilling: enRetainerBilling, blog: enBlog, help: enHelp, glossary: enGlossary, corridors: enCorridors, home: enHome, tools: enTools, explore: enExplore, compareDext: enCompareDext, compareStripe: enCompareStripe, compareEstimatesQuickbooks: enCompareEstimatesQuickbooks, compareAtoinvoice: enCompareAtoinvoice },
    de: { common: deCommon, compliance: deCompliance, about: deAbout, pricing: dePricing, whyInvoicemonk: deWhyInvoicemonk, freeInvoiceGenerator: deFreeInvoiceGenerator, invoicing: deInvoicing, expenses: deExpenses, contact: deContact, payments: dePayments, accounting: deAccounting, estimates: deEstimates, receipts: deReceipts, clientManagement: deClientManagement, freelancers: deFreelancers, photographers: dePhotographers, consultants: deConsultants, creatives: deCreatives, contractors: deContractors, developer: deDeveloper, agencies: deAgencies, lawyers: deLawyers, smallBusinesses: deSmallBusinesses, accountants: deAccountants, ecommerce: deEcommerce, compareFreshbooks: deCompareFreshbooks, compareQuickbooks: deCompareQuickbooks, compareWave: deCompareWave, compareZoho: deCompareZoho, bestInvoicingSoftware: deBestInvoicingSoftware, milestoneBilling: deMilestoneBilling, multiCurrencyInvoicing: deMultiCurrencyInvoicing, recurringBilling: deRecurringBilling, retainerBilling: deRetainerBilling, blog: deBlog, help: deHelp, glossary: deGlossary, corridors: deCorridors, home: deHome, tools: deTools, explore: deExplore, compareDext: enCompareDext, compareStripe: enCompareStripe, compareEstimatesQuickbooks: enCompareEstimatesQuickbooks, compareAtoinvoice: enCompareAtoinvoice },
    fr: { common: frCommon, compliance: frCompliance, about: frAbout, pricing: frPricing, whyInvoicemonk: frWhyInvoicemonk, freeInvoiceGenerator: frFreeInvoiceGenerator, invoicing: frInvoicing, expenses: frExpenses, contact: frContact, payments: frPayments, accounting: frAccounting, estimates: frEstimates, receipts: frReceipts, clientManagement: frClientManagement, freelancers: frFreelancers, photographers: frPhotographers, consultants: frConsultants, creatives: frCreatives, contractors: frContractors, developer: frDeveloper, agencies: frAgencies, lawyers: frLawyers, smallBusinesses: frSmallBusinesses, accountants: frAccountants, ecommerce: frEcommerce, compareFreshbooks: frCompareFreshbooks, compareQuickbooks: frCompareQuickbooks, compareWave: frCompareWave, compareZoho: frCompareZoho, bestInvoicingSoftware: frBestInvoicingSoftware, milestoneBilling: frMilestoneBilling, multiCurrencyInvoicing: frMultiCurrencyInvoicing, recurringBilling: frRecurringBilling, retainerBilling: frRetainerBilling, blog: frBlog, help: frHelp, glossary: frGlossary, corridors: frCorridors, home: frHome, tools: frTools, explore: frExplore, compareDext: enCompareDext, compareStripe: enCompareStripe, compareEstimatesQuickbooks: enCompareEstimatesQuickbooks, compareAtoinvoice: enCompareAtoinvoice },
    'pt-BR': { common: ptBRCommon, compliance: ptBRCompliance, about: ptBRAbout, pricing: ptBRPricing, whyInvoicemonk: ptBRWhyInvoicemonk, freeInvoiceGenerator: ptBRFreeInvoiceGenerator, invoicing: ptBRInvoicing, expenses: ptBRExpenses, contact: ptBRContact, payments: ptBRPayments, accounting: ptBRAccounting, estimates: ptBREstimates, receipts: ptBRReceipts, clientManagement: ptBRClientManagement, freelancers: ptBRFreelancers, photographers: ptBRPhotographers, consultants: ptBRConsultants, creatives: ptBRCreatives, contractors: ptBRContractors, developer: ptBRDeveloper, agencies: ptBRAgencies, lawyers: ptBRLawyers, smallBusinesses: ptBRSmallBusinesses, accountants: ptBRAccountants, ecommerce: ptBREcommerce, compareFreshbooks: ptBRCompareFreshbooks, compareQuickbooks: ptBRCompareQuickbooks, compareWave: ptBRCompareWave, compareZoho: ptBRCompareZoho, bestInvoicingSoftware: ptBRBestInvoicingSoftware, milestoneBilling: ptBRMilestoneBilling, multiCurrencyInvoicing: ptBRMultiCurrencyInvoicing, recurringBilling: ptBRRecurringBilling, retainerBilling: ptBRRetainerBilling, blog: ptBRBlog, help: ptBRHelp, glossary: ptBRGlossary, corridors: ptBRCorridors, home: ptBRHome, tools: ptBRTools, explore: ptBRExplore, compareDext: enCompareDext, compareStripe: enCompareStripe, compareEstimatesQuickbooks: enCompareEstimatesQuickbooks, compareAtoinvoice: enCompareAtoinvoice },
    es: { common: esCommon, compliance: esCompliance, about: esAbout, pricing: esPricing, whyInvoicemonk: esWhyInvoicemonk, freeInvoiceGenerator: esFreeInvoiceGenerator, invoicing: esInvoicing, expenses: esExpenses, contact: esContact, payments: esPayments, accounting: esAccounting, estimates: esEstimates, receipts: esReceipts, clientManagement: esClientManagement, freelancers: esFreelancers, photographers: esPhotographers, consultants: esConsultants, creatives: esCreatives, contractors: esContractors, developer: esDeveloper, agencies: esAgencies, lawyers: esLawyers, smallBusinesses: esSmallBusinesses, accountants: esAccountants, ecommerce: esEcommerce, compareFreshbooks: esCompareFreshbooks, compareQuickbooks: esCompareQuickbooks, compareWave: esCompareWave, compareZoho: esCompareZoho, bestInvoicingSoftware: esBestInvoicingSoftware, milestoneBilling: esMilestoneBilling, multiCurrencyInvoicing: esMultiCurrencyInvoicing, recurringBilling: esRecurringBilling, retainerBilling: esRetainerBilling, blog: esBlog, help: esHelp, glossary: esGlossary, corridors: esCorridors, home: esHome, tools: esTools, explore: esExplore, compareDext: enCompareDext, compareStripe: enCompareStripe, compareEstimatesQuickbooks: enCompareEstimatesQuickbooks, compareAtoinvoice: enCompareAtoinvoice },
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  ns,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
