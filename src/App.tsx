import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TrailingSlashRedirect } from "@/components/TrailingSlashRedirect";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { LanguageRedirect } from "@/components/LanguageRedirect";
import { LanguageLayout } from "@/components/LanguageLayout";

// Pages
import Index from "./pages/Index";
import Invoicing from "./pages/Invoicing";
import Expenses from "./pages/Expenses";
import Payments from "./pages/Payments";
import Accounting from "./pages/Accounting";
import Estimates from "./pages/Estimates";
import Receipts from "./pages/Receipts";
import Pricing from "./pages/Pricing";
import WhyInvoicemonk from "./pages/WhyInvoicemonk";
import Compliance from "./pages/Compliance";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PartnerProgram from "./pages/PartnerProgram";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Contact from "./pages/Contact";
import ApiDocs from "./pages/ApiDocs";
import SLA from "./pages/legal/SLA";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogTopic from "./pages/BlogTopic";
import AuthorPage from "./pages/AuthorPage";
import { ExternalRedirect } from "@/components/ExternalRedirect";
import Freelancers from "./pages/Freelancers";
import Consultants from "./pages/Consultants";
import Contractors from "./pages/Contractors";
import SmallBusinesses from "./pages/SmallBusinesses";
import Developer from "./pages/Developer";
import Agencies from "./pages/Agencies";
import Photographers from "./pages/Photographers";
import Lawyers from "./pages/Lawyers";
import Accountants from "./pages/Accountants";
import Ecommerce from "./pages/Ecommerce";
import Creatives from "./pages/Creatives";
import ClientManagement from "./pages/features/ClientManagement";

// Comparison pages
import InvoicemonkVsFreshbooks from "./pages/compare/InvoicemonkVsFreshbooks";
import InvoicemonkVsWave from "./pages/compare/InvoicemonkVsWave";
import InvoicemonkVsZoho from "./pages/compare/InvoicemonkVsZoho";
import InvoicemonkVsQuickbooks from "./pages/compare/InvoicemonkVsQuickbooks";
import InvoicemonkVsDext from "./pages/compare/InvoicemonkVsDext";
import InvoicemonkVsStripe from "./pages/compare/InvoicemonkVsStripe";
import InvoicemonkVsStripeInvoicing from "./pages/compare/InvoicemonkVsStripeInvoicing";
import InvoicemonkEstimatesVsQuickbooks from "./pages/compare/InvoicemonkEstimatesVsQuickbooks";
import InvoicemonkVsAtoinvoice from "./pages/compare/InvoicemonkVsAtoinvoice";
import BestInvoicingSoftware from "./pages/compare/BestInvoicingSoftware";
import BestFreeInvoicingSoftware from "./pages/compare/BestFreeInvoicingSoftware";
import BestForFreelancers from "./pages/compare/BestForFreelancers";
import WaveAlternatives from "./pages/compare/WaveAlternatives";
import BestInvoicingSoftwareNigeria from "./pages/compare/BestInvoicingSoftwareNigeria";
import BestInvoicingSoftwareIndia from "./pages/compare/BestInvoicingSoftwareIndia";
import BestInvoicingSoftwareKenya from "./pages/compare/BestInvoicingSoftwareKenya";
import WaveAlternativeNigeria from "./pages/compare/WaveAlternativeNigeria";
import BestInvoicingSoftwareUK from "./pages/compare/BestInvoicingSoftwareUK";
import WaveAlternativeUK from "./pages/compare/WaveAlternativeUK";
import BestInvoicingSoftwareSaudiArabia from "./pages/compare/BestInvoicingSoftwareSaudiArabia";
import BestInvoicingSoftwareMalaysia from "./pages/compare/BestInvoicingSoftwareMalaysia";
import BestInvoicingSoftwareAustralia from "./pages/compare/BestInvoicingSoftwareAustralia";
import BestInvoicingSoftwareCanada from "./pages/compare/BestInvoicingSoftwareCanada";
import BestInvoicingSoftwareGhana from "./pages/compare/BestInvoicingSoftwareGhana";
import BestInvoicingSoftwareSouthAfrica from "./pages/compare/BestInvoicingSoftwareSouthAfrica";
import WaveAlternativeAustralia from "./pages/compare/WaveAlternativeAustralia";
import WaveAlternativeSouthAfrica from "./pages/compare/WaveAlternativeSouthAfrica";

// Use-case pages
import RecurringBilling from "./pages/use-cases/RecurringBilling";
import MultiCurrencyInvoicing from "./pages/use-cases/MultiCurrencyInvoicing";
import MilestoneBilling from "./pages/use-cases/MilestoneBilling";
import RetainerBilling from "./pages/use-cases/RetainerBilling";

// Guide pages
import GuidesIndex from "./pages/guides/GuidesIndex";
import InvoicingGuide from "./pages/guides/InvoicingGuide";
import GettingPaidGuide from "./pages/guides/GettingPaidGuide";
import BusinessFinancesGuide from "./pages/guides/BusinessFinancesGuide";
import TaxComplianceGuide from "./pages/guides/TaxComplianceGuide";
import FreelancingGuide from "./pages/guides/FreelancingGuide";
import EstimatesGuide from "./pages/guides/EstimatesGuide";
import ExpensesGuide from "./pages/guides/ExpensesGuide";
import ClientManagementGuide from "./pages/guides/ClientManagementGuide";
import EInvoicingGuide from "./pages/guides/EInvoicingGuide";
import EInvoicingMandatesGuide from "./pages/guides/EInvoicingMandatesGuide";
import Glossary from "./pages/Glossary";
import Explore from "./pages/Explore";

// Help Center
import HelpCenter from "./pages/help/HelpCenter";
import HelpArticle from "./pages/help/HelpArticle";

// Tool pages
import InternationalPaymentFeeCalculator from "./pages/tools/InternationalPaymentFeeCalculator";
import PaypalVsWiseFees from "./pages/tools/PaypalVsWiseFees";
import CheapestInternationalPayments from "./pages/tools/CheapestInternationalPayments";
import ReceiveCurrencyInCountry from "./pages/tools/ReceiveCurrencyInCountry";
import InvoiceTemplates from "./pages/tools/InvoiceTemplates";
import FreelancerRateCalculatorPage from "./pages/tools/FreelancerRateCalculatorPage";
import ToolsIndex from "./pages/tools/ToolsIndex";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LocaleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <TrailingSlashRedirect />
          <Routes>
            {/* Root → detect country & redirect to language prefix */}
            <Route path="/" element={<LanguageRedirect />} />

            {/* ───── Language-prefixed routes ───── */}
            <Route path="/:lang" element={<LanguageLayout />}>
              <Route index element={<Index />} />

              {/* Product pages */}
              <Route path="invoicing" element={<Invoicing />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="payments" element={<Payments />} />
              <Route path="accounting" element={<Accounting />} />
              <Route path="estimates" element={<Estimates />} />
              <Route path="receipts" element={<Receipts />} />

              {/* Company pages */}
              <Route path="pricing" element={<Pricing />} />
              <Route path="why-invoicemonk" element={<WhyInvoicemonk />} />
              <Route path="compliance" element={<Compliance />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="partner-program" element={<PartnerProgram />} />

              {/* Legal */}
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
              <Route path="cookie-policy" element={<CookiePolicy />} />
              <Route path="legal/sla" element={<SLA />} />

              {/* Docs */}
              <Route path="docs/api" element={<ApiDocs />} />

              {/* Blog */}
              <Route path="blog" element={<Blog />} />
              <Route path="blog/topic/:topicId" element={<BlogTopic />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="blog/author/:authorSlug" element={<AuthorPage />} />

              {/* Tools */}
              <Route path="tools" element={<ToolsIndex />} />
              {/* Retired: free invoice generator pages now redirect to signup.
                  The app's free tier (5 invoices/month) is the marketing entry point. */}
              {[
                "free-invoice-generator",
                "free-invoice-generator-australia",
                "free-invoice-generator-india",
                "free-invoice-generator-nigeria",
                "free-invoice-generator-kenya",
                "free-invoice-generator-uk",
                "free-invoice-generator-saudi-arabia",
                "free-invoice-generator-malaysia",
                "free-invoice-generator-canada",
                "free-invoice-generator-ghana",
                "free-invoice-generator-south-africa",
              ].map((p) => (
                <Route
                  key={p}
                  path={p}
                  element={<ExternalRedirect to="https://app.invoicemonk.com/signup?utm_source=retired_generator&utm_medium=redirect&utm_campaign=fig_removed" />}
                />
              ))}
              <Route path="international-payment-fee-calculator" element={<InternationalPaymentFeeCalculator />} />
              <Route path="paypal-vs-wise-fees" element={<PaypalVsWiseFees />} />
              <Route path="cheapest-way-to-receive-international-payments" element={<CheapestInternationalPayments />} />
              <Route path="receive-usd-in-nigeria-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-gbp-in-nigeria-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-eur-in-nigeria-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-usd-in-uk-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-eur-in-uk-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-usd-in-canada-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-usd-in-australia-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-gbp-in-us-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-eur-in-us-cost" element={<ReceiveCurrencyInCountry />} />
              {/* Africa cluster expansion */}
              <Route path="receive-usd-in-kenya-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-gbp-in-kenya-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-usd-in-ghana-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-gbp-in-ghana-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-usd-in-south-africa-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-gbp-in-south-africa-cost" element={<ReceiveCurrencyInCountry />} />
              {/* India (high-intent freelancer corridor) */}
              <Route path="receive-usd-in-india-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-gbp-in-india-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="receive-eur-in-india-cost" element={<ReceiveCurrencyInCountry />} />
              <Route path="invoice-templates" element={<InvoiceTemplates />} />
              <Route path="freelancer-rate-calculator" element={<FreelancerRateCalculatorPage />} />

              {/* Audience pages */}
              <Route path="freelancers" element={<Freelancers />} />
              <Route path="consultants" element={<Consultants />} />
              <Route path="contractors" element={<Contractors />} />
              <Route path="small-businesses" element={<SmallBusinesses />} />
              <Route path="developer" element={<Developer />} />
              <Route path="agencies" element={<Agencies />} />
              <Route path="photographers" element={<Photographers />} />
              <Route path="lawyers" element={<Lawyers />} />
              <Route path="accountants" element={<Accountants />} />
              <Route path="ecommerce" element={<Ecommerce />} />
              <Route path="creatives" element={<Creatives />} />

              {/* Feature pages */}
              <Route path="client-management" element={<ClientManagement />} />

              {/* Comparison pages */}
              <Route path="compare/invoicemonk-vs-freshbooks" element={<InvoicemonkVsFreshbooks />} />
              <Route path="compare/invoicemonk-vs-wave" element={<InvoicemonkVsWave />} />
              <Route path="compare/invoicemonk-vs-zoho-invoice" element={<InvoicemonkVsZoho />} />
              <Route path="compare/invoicemonk-vs-quickbooks" element={<InvoicemonkVsQuickbooks />} />
              <Route path="compare/invoicemonk-vs-dext" element={<InvoicemonkVsDext />} />
              <Route path="compare/invoicemonk-vs-atoinvoice" element={<InvoicemonkVsAtoinvoice />} />
              <Route path="compare/invoicemonk-vs-stripe" element={<InvoicemonkVsStripe />} />
              <Route path="compare/invoicemonk-vs-stripe-invoicing" element={<InvoicemonkVsStripeInvoicing />} />
              <Route path="compare/invoicemonk-estimates-vs-quickbooks" element={<InvoicemonkEstimatesVsQuickbooks />} />
              <Route path="best-invoicing-software" element={<BestInvoicingSoftware />} />
              <Route path="compare/best-free-invoicing-software" element={<BestFreeInvoicingSoftware />} />
              <Route path="compare/best-invoicing-software-freelancers" element={<BestForFreelancers />} />
              <Route path="compare/wave-alternatives" element={<WaveAlternatives />} />
              <Route path="compare/best-invoicing-software-nigeria" element={<BestInvoicingSoftwareNigeria />} />
              <Route path="compare/best-invoicing-software-india" element={<BestInvoicingSoftwareIndia />} />
              <Route path="compare/best-invoicing-software-kenya" element={<BestInvoicingSoftwareKenya />} />
              <Route path="compare/wave-alternative-nigeria" element={<WaveAlternativeNigeria />} />
              <Route path="compare/best-invoicing-software-uk" element={<BestInvoicingSoftwareUK />} />
              <Route path="compare/wave-alternative-uk" element={<WaveAlternativeUK />} />
              <Route path="compare/best-invoicing-software-saudi-arabia" element={<BestInvoicingSoftwareSaudiArabia />} />
              <Route path="compare/best-invoicing-software-malaysia" element={<BestInvoicingSoftwareMalaysia />} />
              <Route path="compare/best-invoicing-software-australia" element={<BestInvoicingSoftwareAustralia />} />
              <Route path="compare/best-invoicing-software-canada" element={<BestInvoicingSoftwareCanada />} />
              <Route path="compare/best-invoicing-software-ghana" element={<BestInvoicingSoftwareGhana />} />
              <Route path="compare/best-invoicing-software-south-africa" element={<BestInvoicingSoftwareSouthAfrica />} />
              <Route path="compare/wave-alternative-australia" element={<WaveAlternativeAustralia />} />
              <Route path="compare/wave-alternative-south-africa" element={<WaveAlternativeSouthAfrica />} />

              {/* Use-case pages */}
              <Route path="use-cases/recurring-billing" element={<RecurringBilling />} />
              <Route path="use-cases/multi-currency-invoicing" element={<MultiCurrencyInvoicing />} />
              <Route path="use-cases/milestone-billing" element={<MilestoneBilling />} />
              <Route path="use-cases/retainer-billing" element={<RetainerBilling />} />

              {/* Guide pages */}
              <Route path="guides" element={<GuidesIndex />} />
              <Route path="guides/invoicing" element={<InvoicingGuide />} />
              <Route path="guides/getting-paid" element={<GettingPaidGuide />} />
              <Route path="guides/business-finances" element={<BusinessFinancesGuide />} />
              <Route path="guides/tax-compliance" element={<TaxComplianceGuide />} />
              <Route path="guides/freelancing" element={<FreelancingGuide />} />
              <Route path="guides/estimates" element={<EstimatesGuide />} />
              <Route path="guides/expenses" element={<ExpensesGuide />} />
              <Route path="guides/client-management" element={<ClientManagementGuide />} />
              <Route path="guides/e-invoicing" element={<EInvoicingGuide />} />
              <Route path="guides/e-invoicing-mandates" element={<EInvoicingMandatesGuide />} />

              {/* Resources */}
              <Route path="glossary" element={<Glossary />} />
              <Route path="explore" element={<Explore />} />

              {/* Help Center */}
              <Route path="help" element={<HelpCenter />} />
              <Route path="help/:slug" element={<HelpArticle />} />

              {/* Legacy redirects (within /:lang scope) */}
              <Route path="features" element={<Navigate to="../why-invoicemonk" replace />} />
              <Route path="features/accept-payments" element={<Navigate to="../payments" replace />} />
              <Route path="features/estimates" element={<Navigate to="../estimates" replace />} />
              <Route path="features/send-invoices" element={<Navigate to="../invoicing" replace />} />
              <Route path="features/business-expense-tracking-app" element={<Navigate to="../expenses" replace />} />
              <Route path="features/client-management" element={<Navigate to="../client-management" replace />} />
              <Route path="privacy" element={<Navigate to="../privacy-policy" replace />} />
              <Route path="terms" element={<Navigate to="../terms-of-service" replace />} />
              <Route path="blog/what-is-an-invoice-definition-guide" element={<Navigate to="../blog/what-is-an-invoice-definition" replace />} />
              <Route path="milestone-billing" element={<Navigate to="../use-cases/milestone-billing" replace />} />
              <Route path="cheapest-international-payments" element={<Navigate to="../cheapest-way-to-receive-international-payments" replace />} />
              <Route path="blog/the-10-best-personal-finance-blogs-in-the-us-uk-and-canada-that-will-transform-your-money-management" element={<Navigate to="../blog/the-10-best-personal-finance-blogs" replace />} />

              {/* 404 within valid language prefix */}
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LocaleProvider>
  </QueryClientProvider>
);

export default App;
