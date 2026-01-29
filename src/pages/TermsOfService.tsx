import { Layout } from '@/components/layout/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-body-lg mb-6">
              <strong>Last updated:</strong> January 2025
            </p>
            
            <p className="mb-6">
              Welcome to Invoicemonk. By accessing or using our platform, you agree to be bound by 
              these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-6">
              By creating an account or using Invoicemonk, you agree to these Terms of Service and 
              our Privacy Policy. If you do not agree, you may not use our services.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              2. Description of Service
            </h2>
            <p className="mb-6">
              Invoicemonk is a compliance-first financial platform that provides invoicing, expense 
              tracking, payments, and related financial management tools for businesses and freelancers.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              3. User Accounts
            </h2>
            <p className="mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring all information you provide is accurate and current</li>
            </ul>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              4. Acceptable Use
            </h2>
            <p className="mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use the service for any unlawful purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the service</li>
            </ul>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              5. Payment Terms
            </h2>
            <p className="mb-6">
              Paid subscriptions are billed in advance on a monthly or annual basis. All fees are 
              non-refundable except as expressly stated in these Terms or required by law.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              6. Data Ownership
            </h2>
            <p className="mb-6">
              You retain all rights to your data. We do not claim ownership of any content you 
              create or upload to Invoicemonk. You grant us a license to use your data solely to 
              provide and improve our services.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="mb-6">
              To the maximum extent permitted by law, Invoicemonk shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages resulting from 
              your use of the service.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              8. Changes to Terms
            </h2>
            <p className="mb-6">
              We may modify these Terms at any time. We will notify you of material changes via 
              email or through the platform. Continued use after changes constitutes acceptance.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              9. Contact
            </h2>
            <p className="mb-6">
              For questions about these Terms, contact us at{' '}
              <a href="mailto:legal@invoicemonk.com" className="text-primary hover:underline">
                legal@invoicemonk.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
