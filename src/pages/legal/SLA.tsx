import { Layout } from '@/components/layout/Layout';
import { Link } from '@/components/LocalizedLink';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';

const SLA = () => {
  const seo = pageSEO['/legal/sla'];
  return (
    <Layout>
      <SEOHead
        title={seo?.getTitle({} as any) || 'Service Level Agreement (SLA) | Invoicemonk'}
        description={seo?.getDescription({} as any) || 'Service commitments and technical guarantees for Invoicemonk.'}
        canonical="https://invoicemonk.com/legal/sla"
      />
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
            Service Level Agreement
          </h1>

          <p className="text-body-lg text-muted-foreground mb-8">
            <strong>Last updated:</strong> February 2026
          </p>

          {/* Table of Contents */}
          <nav className="bg-muted/50 rounded-xl p-6 mb-12">
            <h2 className="text-heading-sm font-semibold text-foreground mb-4">Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-body text-muted-foreground columns-1 md:columns-2">
              <li><a href="#introduction" className="hover:text-primary transition-colors">Introduction</a></li>
              <li><a href="#scope" className="hover:text-primary transition-colors">Service Scope</a></li>
              <li><a href="#availability" className="hover:text-primary transition-colors">Service Availability</a></li>
              <li><a href="#data-integrity" className="hover:text-primary transition-colors">Data Integrity</a></li>
              <li><a href="#data-retention" className="hover:text-primary transition-colors">Data Retention</a></li>
              <li><a href="#security" className="hover:text-primary transition-colors">Security Controls</a></li>
              <li><a href="#compliance" className="hover:text-primary transition-colors">Compliance</a></li>
              <li><a href="#responsibilities" className="hover:text-primary transition-colors">Customer Responsibilities</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#liability" className="hover:text-primary transition-colors">Limitation of Liability</a></li>
              <li><a href="#updates" className="hover:text-primary transition-colors">SLA Updates</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none text-muted-foreground">

            {/* 1 */}
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">1. Introduction</h2>
              <p className="mb-4">
                This Service Level Agreement ("SLA") defines the service commitments, operational standards, and technical guarantees provided by Invoicemonk ("the Platform") for electronic invoicing and compliance record management services.
              </p>
              <p className="mb-6">
                This document is intended for review by regulatory bodies, auditors, and customers requiring documented service commitments for compliance purposes.
              </p>
            </section>

            {/* 2 */}
            <section id="scope" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">2. Service Scope</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">2.1 Services Covered</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Invoice creation, issuance, and lifecycle management</li>
                <li>Public invoice verification portal</li>
                <li>Audit logging and event tracking</li>
                <li>Data retention and compliance record management</li>
                <li>Secure data exports (subject to service tier)</li>
                <li>Credit note generation for voided invoices</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">2.2 Services Not Covered</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Payment Processing:</strong> Invoicemonk records payment events but does not process, hold, or transfer funds. All payment processing must be conducted through external payment providers.</li>
                <li><strong>Tax Calculation:</strong> Tax rate determination and calculation are the responsibility of the customer. The Platform provides fields for tax recording but does not perform automated tax computation.</li>
                <li><strong>Government e-Invoice Submission:</strong> Direct submission to government e-invoicing systems (such as IRN, NRS, or similar frameworks) is not currently provided. The Platform is designed to support future integration with such systems.</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">2.3 Platform Classification</h3>
              <p className="mb-6">
                Invoicemonk operates as financial records infrastructure, providing audit-ready invoice management and compliance record-keeping capabilities. The Platform is not a payment processor, tax authority, or government-accredited e-invoicing solution.
              </p>
            </section>

            {/* 3 */}
            <section id="availability" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">3. Service Availability</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.1 Availability Target</h3>
              <p className="mb-2">The Platform targets a monthly availability of <strong>99.5%</strong> for core invoice operations, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Invoice creation and issuance</li>
                <li>Invoice verification via the public portal</li>
                <li>Audit log access and retrieval</li>
                <li>Data export functionality</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.2 Measurement Methodology</h3>
              <p className="mb-4">Availability is calculated as the percentage of time core services are operational during a calendar month, excluding scheduled maintenance windows.</p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.3 Scheduled Maintenance</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Preferred window: Weekdays, 00:00 – 06:00 UTC</li>
                <li>Notice period: Minimum 48 hours advance notification</li>
                <li>Emergency maintenance: Conducted as required with best-effort notification</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.4 Service Credits</h3>
              <p className="mb-6">This SLA does not include financial service credits for availability breaches. Customers requiring contractual service credits should contact the Platform for enterprise service agreements.</p>
            </section>

            {/* 4 */}
            <section id="data-integrity" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">4. Data Integrity Guarantees</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">4.1 Invoice Immutability</h3>
              <p className="mb-2">Once an invoice is issued, the following controls are enforced:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Modification Prevention:</strong> Database triggers prevent modification of issued invoices at the database level.</li>
                <li><strong>Deletion Prevention:</strong> Issued invoices cannot be deleted. Voiding generates a credit note while preserving the original record.</li>
                <li><strong>Point-in-Time Snapshots:</strong> Issuer and recipient data are captured at the time of issuance and stored immutably.</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">4.2 Cryptographic Integrity</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>SHA-256 Hash:</strong> A cryptographic hash is generated at issuance and stored with the invoice record for integrity verification.</li>
                <li><strong>Verification ID:</strong> A unique UUID is assigned to each issued invoice, enabling third-party verification.</li>
                <li><strong>Timestamp:</strong> Issuance time is recorded in UTC with timezone information preserved.</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">4.3 Audit Trail</h3>
              <p className="mb-2">An append-only audit log records all material actions, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Invoice lifecycle events (creation, issuance, viewing, voiding)</li>
                <li>Payment recording events</li>
                <li>Client and business record modifications</li>
                <li>User authentication events</li>
                <li>Data export operations</li>
                <li>Team membership and role changes</li>
              </ul>
              <p className="mb-6">Each audit event includes actor identification, timestamp, entity reference, and relevant state data. Audit logs cannot be modified or deleted.</p>
            </section>

            {/* 5 */}
            <section id="data-retention" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">5. Data Retention</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">5.1 Retention Periods</h3>
              <p className="mb-2">Data retention periods are enforced based on the business jurisdiction:</p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">Jurisdiction</th>
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">Entity Types</th>
                      <th className="text-left py-2 font-semibold text-foreground">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="py-2 pr-4">Nigeria (NG)</td><td className="py-2 pr-4">Invoices, Credit Notes, Payments</td><td className="py-2">6 years</td></tr>
                    <tr><td className="py-2 pr-4">United States (US)</td><td className="py-2 pr-4">Invoices, Credit Notes, Payments</td><td className="py-2">7 years</td></tr>
                    <tr><td className="py-2 pr-4">United Kingdom (GB)</td><td className="py-2 pr-4">Invoices, Credit Notes, Payments</td><td className="py-2">6 years</td></tr>
                    <tr><td className="py-2 pr-4">Germany (DE)</td><td className="py-2 pr-4">Invoices, Credit Notes, Payments</td><td className="py-2">10 years</td></tr>
                    <tr><td className="py-2 pr-4">France (FR)</td><td className="py-2 pr-4">Invoices, Credit Notes, Payments</td><td className="py-2">10 years</td></tr>
                    <tr><td className="py-2 pr-4">Australia (AU)</td><td className="py-2 pr-4">Invoices, Credit Notes, Payments</td><td className="py-2">7 years</td></tr>
                    <tr><td className="py-2 pr-4">Canada (CA)</td><td className="py-2 pr-4">Invoices, Credit Notes, Payments</td><td className="py-2">7 years</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">5.2 Retention Enforcement</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li><strong>Lock Date:</strong> Each record includes a retention lock date, before which the record cannot be deleted.</li>
                <li><strong>Automated Cleanup:</strong> Expired records are processed by scheduled cleanup jobs only after the retention period has elapsed.</li>
                <li><strong>Premature Deletion Prevention:</strong> Database constraints prevent deletion of records before their retention period expires.</li>
              </ul>
            </section>

            {/* 6 */}
            <section id="security" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">6. Security Controls</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">6.1 Access Controls</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Row-Level Security (RLS):</strong> All data tables enforce row-level security policies, ensuring users can only access data they are authorized to view.</li>
                <li><strong>Authentication:</strong> All operations require authenticated sessions.</li>
                <li><strong>Role-Based Access:</strong> Users are assigned roles (owner, admin, member, auditor) with corresponding permission levels.</li>
                <li><strong>Service Tier Enforcement:</strong> Feature access is controlled at the database level based on subscription tier.</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">6.2 Data Protection</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li><strong>Encryption in Transit:</strong> All data transmission uses HTTPS/TLS encryption.</li>
                <li><strong>Encryption at Rest:</strong> Data is encrypted at rest using infrastructure-level encryption provided by the hosting platform.</li>
                <li><strong>Credential Security:</strong> No credentials are stored in unencrypted form. API keys and secrets are managed through secure environment configuration.</li>
              </ul>
            </section>

            {/* 7 */}
            <section id="compliance" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">7. Compliance and Regulatory Alignment</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">7.1 Design Principles</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Support audit-ready financial recordkeeping</li>
                <li>Align with common tax record retention requirements</li>
                <li>Provide technical infrastructure compatible with future e-invoicing framework integration</li>
                <li>Enable third-party verification of invoice authenticity</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">7.2 Disclaimers</h3>
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <p className="font-medium text-foreground mb-2">Important:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Invoicemonk is not certified or accredited by any government agency, tax authority, or regulatory body.</li>
                  <li>Use of the Platform does not constitute compliance with any specific tax law, e-invoicing mandate, or regulatory requirement.</li>
                  <li>The Platform is not a substitute for professional tax, legal, or accounting advice.</li>
                  <li>Customers are solely responsible for ensuring their use of the Platform complies with applicable laws and regulations.</li>
                </ul>
              </div>
            </section>

            {/* 8 */}
            <section id="responsibilities" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">8. Customer Responsibilities</h2>
              <p className="mb-2">Customers using the Platform agree to the following responsibilities:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Data Accuracy:</strong> Customers are responsible for the accuracy of all invoice data submitted to the Platform.</li>
                <li><strong>Lawful Use:</strong> The Platform must be used only for lawful business purposes in accordance with applicable laws.</li>
                <li><strong>Tax Compliance:</strong> Customers are responsible for compliance with all applicable tax laws, including correct tax rate application.</li>
                <li><strong>Account Security:</strong> Customers must maintain the security of their account credentials and promptly report any unauthorized access.</li>
                <li><strong>Data Export:</strong> Customers should export their records before account termination if data preservation is required.</li>
              </ul>
            </section>

            {/* 9 */}
            <section id="support" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">9. Support and Communication</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">9.1 Support Channels</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>In-app messaging</li>
                <li>Email support</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">9.2 Support Tiers</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Professional and Business tiers:</strong> Priority support handling</li>
                <li><strong>Business tier:</strong> Dedicated account manager</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">9.3 Incident Communication</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Service incidents will be communicated via registered email</li>
                <li>Scheduled maintenance will be announced in advance</li>
                <li>Post-incident reports will be provided for significant outages</li>
              </ul>
            </section>

            {/* 10 */}
            <section id="liability" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">10. Limitation of Liability</h2>
              <p className="mb-2">To the maximum extent permitted by applicable law:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>The Platform is provided "as-is" for compliance support purposes.</li>
                <li>No guarantee is made regarding acceptance by any specific regulatory body or government agency.</li>
                <li>The Platform operator shall not be liable for any indirect, incidental, special, or consequential damages arising from use of the Platform.</li>
                <li>Liability for direct damages shall not exceed the fees paid by the customer in the twelve (12) months preceding the claim.</li>
              </ul>
            </section>

            {/* 11 */}
            <section id="updates" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">11. SLA Updates and Governance</h2>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>This SLA is subject to revision as regulations, technology, and service capabilities evolve.</li>
                <li>Updates will be published at this URL with version number and effective date.</li>
              </ul>
            </section>

            {/* Related pages */}
            <section className="mt-12 pt-8 border-t border-border">
              <p className="text-body text-muted-foreground">
                See also: <Link to="/docs/api" className="text-primary hover:underline">API Documentation</Link> · <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link> · <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> · <Link to="/compliance" className="text-primary hover:underline">Compliance</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SLA;
