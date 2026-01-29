import { Layout } from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-body-lg mb-6">
              <strong>Last updated:</strong> January 2025
            </p>
            
            <p className="mb-6">
              At Invoicemonk, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our platform.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Account information (name, email address, password)</li>
              <li>Business information (company name, address, tax identification numbers)</li>
              <li>Financial data (invoices, expenses, payment records)</li>
              <li>Communications you send to us</li>
            </ul>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              Data Security
            </h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. All data 
              is encrypted in transit and at rest.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              Data Retention
            </h2>
            <p className="mb-6">
              We retain your information for as long as your account is active or as needed to provide 
              you services. We also retain and use your information as necessary to comply with legal 
              obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              Your Rights
            </h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
              Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@invoicemonk.com" className="text-primary hover:underline">
                privacy@invoicemonk.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
