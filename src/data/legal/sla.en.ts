import type { LegalPageContent } from './types';

export const slaEN: LegalPageContent = {
  seoTitle: 'Service Level Agreement (SLA) | Invoicemonk',
  seoDescription: 'Service commitments and technical guarantees for Invoicemonk.',
  title: 'Service Level Agreement',
  lastUpdated: 'Last updated: February 2026',
  tocTitle: 'Contents',
  tocColumns: true,
  sections: [
    {
      id: 'introduction',
      tocLabel: 'Introduction',
      title: '1. Introduction',
      html: `<p class="mb-4">This Service Level Agreement ("SLA") defines the service commitments, operational standards, and technical guarantees provided by Invoicemonk ("the Platform") for electronic invoicing and compliance record management services.</p><p class="mb-6">This document is intended for review by regulatory bodies, auditors, and customers requiring documented service commitments for compliance purposes.</p>`,
    },
    {
      id: 'scope',
      tocLabel: 'Service Scope',
      title: '2. Service Scope',
      html: `<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">2.1 Services Covered</h3><ul class="list-disc pl-6 mb-4 space-y-1"><li>Invoice creation, issuance, and lifecycle management</li><li>Public invoice verification portal</li><li>Audit logging and event tracking</li><li>Data retention and compliance record management</li><li>Secure data exports (subject to service tier)</li><li>Credit note generation for voided invoices</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">2.2 Services Not Covered</h3><ul class="list-disc pl-6 mb-4 space-y-2"><li><strong>Payment Processing:</strong> Invoicemonk records payment events but does not process, hold, or transfer funds. All payment processing must be conducted through external payment providers.</li><li><strong>Tax Calculation:</strong> Tax rate determination and calculation are the responsibility of the customer. The Platform provides fields for tax recording but does not perform automated tax computation.</li><li><strong>Government e-Invoice Submission:</strong> Direct submission to government e-invoicing systems (such as IRN, NRS, or similar frameworks) is not currently provided. The Platform is designed to support future integration with such systems.</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">2.3 Platform Classification</h3><p class="mb-6">Invoicemonk operates as financial records infrastructure, providing audit-ready invoice management and compliance record-keeping capabilities. The Platform is not a payment processor, tax authority, or government-accredited e-invoicing solution.</p>`,
    },
    {
      id: 'availability',
      tocLabel: 'Service Availability',
      title: '3. Service Availability',
      html: `<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">3.1 Availability Target</h3><p class="mb-2">The Platform targets a monthly availability of <strong>99.5%</strong> for core invoice operations, including:</p><ul class="list-disc pl-6 mb-4 space-y-1"><li>Invoice creation and issuance</li><li>Invoice verification via the public portal</li><li>Audit log access and retrieval</li><li>Data export functionality</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">3.2 Measurement Methodology</h3><p class="mb-4">Availability is calculated as the percentage of time core services are operational during a calendar month, excluding scheduled maintenance windows.</p><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">3.3 Scheduled Maintenance</h3><ul class="list-disc pl-6 mb-4 space-y-1"><li>Preferred window: Weekdays, 00:00 – 06:00 UTC</li><li>Notice period: Minimum 48 hours advance notification</li><li>Emergency maintenance: Conducted as required with best-effort notification</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">3.4 Service Credits</h3><p class="mb-6">This SLA does not include financial service credits for availability breaches. Customers requiring contractual service credits should contact the Platform for enterprise service agreements.</p>`,
    },
    {
      id: 'data-integrity',
      tocLabel: 'Data Integrity',
      title: '4. Data Integrity Guarantees',
      html: `<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.1 Invoice Immutability</h3><p class="mb-2">Once an invoice is issued, the following controls are enforced:</p><ul class="list-disc pl-6 mb-4 space-y-1"><li><strong>Modification Prevention:</strong> Database triggers prevent modification of issued invoices at the database level.</li><li><strong>Deletion Prevention:</strong> Issued invoices cannot be deleted. Voiding generates a credit note while preserving the original record.</li><li><strong>Point-in-Time Snapshots:</strong> Issuer and recipient data are captured at the time of issuance and stored immutably.</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.2 Cryptographic Integrity</h3><ul class="list-disc pl-6 mb-4 space-y-1"><li><strong>SHA-256 Hash:</strong> A cryptographic hash is generated at issuance and stored with the invoice record for integrity verification.</li><li><strong>Verification ID:</strong> A unique UUID is assigned to each issued invoice, enabling third-party verification.</li><li><strong>Timestamp:</strong> Issuance time is recorded in UTC with timezone information preserved.</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.3 Audit Trail</h3><p class="mb-2">An append-only audit log records all material actions, including:</p><ul class="list-disc pl-6 mb-4 space-y-1"><li>Invoice lifecycle events (creation, issuance, viewing, voiding)</li><li>Payment recording events</li><li>Client and business record modifications</li><li>User authentication events</li><li>Data export operations</li><li>Team membership and role changes</li></ul><p class="mb-6">Each audit event includes actor identification, timestamp, entity reference, and relevant state data. Audit logs cannot be modified or deleted.</p>`,
    },
    {
      id: 'data-retention',
      tocLabel: 'Data Retention',
      title: '5. Data Retention',
      html: `<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">5.1 Retention Periods</h3><p class="mb-2">Data retention periods are enforced based on the business jurisdiction:</p><div class="overflow-x-auto mb-4"><table class="min-w-full text-sm"><thead><tr class="border-b border-border"><th class="text-left py-2 pr-4 font-semibold text-foreground">Jurisdiction</th><th class="text-left py-2 pr-4 font-semibold text-foreground">Entity Types</th><th class="text-left py-2 font-semibold text-foreground">Retention Period</th></tr></thead><tbody class="divide-y divide-border"><tr><td class="py-2 pr-4">Nigeria (NG)</td><td class="py-2 pr-4">Invoices, Credit Notes, Payments</td><td class="py-2">6 years</td></tr><tr><td class="py-2 pr-4">United States (US)</td><td class="py-2 pr-4">Invoices, Credit Notes, Payments</td><td class="py-2">7 years</td></tr><tr><td class="py-2 pr-4">United Kingdom (GB)</td><td class="py-2 pr-4">Invoices, Credit Notes, Payments</td><td class="py-2">6 years</td></tr><tr><td class="py-2 pr-4">Germany (DE)</td><td class="py-2 pr-4">Invoices, Credit Notes, Payments</td><td class="py-2">10 years</td></tr><tr><td class="py-2 pr-4">France (FR)</td><td class="py-2 pr-4">Invoices, Credit Notes, Payments</td><td class="py-2">10 years</td></tr><tr><td class="py-2 pr-4">Australia (AU)</td><td class="py-2 pr-4">Invoices, Credit Notes, Payments</td><td class="py-2">7 years</td></tr><tr><td class="py-2 pr-4">Canada (CA)</td><td class="py-2 pr-4">Invoices, Credit Notes, Payments</td><td class="py-2">7 years</td></tr></tbody></table></div><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">5.2 Retention Enforcement</h3><ul class="list-disc pl-6 mb-6 space-y-1"><li><strong>Lock Date:</strong> Each record includes a retention lock date, before which the record cannot be deleted.</li><li><strong>Automated Cleanup:</strong> Expired records are processed by scheduled cleanup jobs only after the retention period has elapsed.</li><li><strong>Premature Deletion Prevention:</strong> Database constraints prevent deletion of records before their retention period expires.</li></ul>`,
    },
    {
      id: 'security',
      tocLabel: 'Security Controls',
      title: '6. Security Controls',
      html: `<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">6.1 Access Controls</h3><ul class="list-disc pl-6 mb-4 space-y-1"><li><strong>Row-Level Security (RLS):</strong> All data tables enforce row-level security policies, ensuring users can only access data they are authorized to view.</li><li><strong>Authentication:</strong> All operations require authenticated sessions.</li><li><strong>Role-Based Access:</strong> Users are assigned roles (owner, admin, member, auditor) with corresponding permission levels.</li><li><strong>Service Tier Enforcement:</strong> Feature access is controlled at the database level based on subscription tier.</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">6.2 Data Protection</h3><ul class="list-disc pl-6 mb-6 space-y-1"><li><strong>Encryption in Transit:</strong> All data transmission uses HTTPS/TLS encryption.</li><li><strong>Encryption at Rest:</strong> Data is encrypted at rest using infrastructure-level encryption provided by the hosting platform.</li><li><strong>Credential Security:</strong> No credentials are stored in unencrypted form. API keys and secrets are managed through secure environment configuration.</li></ul>`,
    },
    {
      id: 'compliance',
      tocLabel: 'Compliance',
      title: '7. Compliance and Regulatory Alignment',
      html: `<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">7.1 Design Principles</h3><ul class="list-disc pl-6 mb-4 space-y-1"><li>Support audit-ready financial recordkeeping</li><li>Align with common tax record retention requirements</li><li>Provide technical infrastructure compatible with future e-invoicing framework integration</li><li>Enable third-party verification of invoice authenticity</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">7.2 Disclaimers</h3><div class="bg-muted/50 rounded-lg p-4 mb-6"><p class="font-medium text-foreground mb-2">Important:</p><ul class="list-disc pl-6 space-y-1"><li>Invoicemonk is not certified or accredited by any government agency, tax authority, or regulatory body.</li><li>Use of the Platform does not constitute compliance with any specific tax law, e-invoicing mandate, or regulatory requirement.</li><li>The Platform is not a substitute for professional tax, legal, or accounting advice.</li><li>Customers are solely responsible for ensuring their use of the Platform complies with applicable laws and regulations.</li></ul></div>`,
    },
    {
      id: 'responsibilities',
      tocLabel: 'Customer Responsibilities',
      title: '8. Customer Responsibilities',
      html: `<p class="mb-2">Customers using the Platform agree to the following responsibilities:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li><strong>Data Accuracy:</strong> Customers are responsible for the accuracy of all invoice data submitted to the Platform.</li><li><strong>Lawful Use:</strong> The Platform must be used only for lawful business purposes in accordance with applicable laws.</li><li><strong>Tax Compliance:</strong> Customers are responsible for compliance with all applicable tax laws, including correct tax rate application.</li><li><strong>Account Security:</strong> Customers must maintain the security of their account credentials and promptly report any unauthorized access.</li><li><strong>Data Export:</strong> Customers should export their records before account termination if data preservation is required.</li></ul>`,
    },
    {
      id: 'support',
      tocLabel: 'Support',
      title: '9. Support and Communication',
      html: `<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.1 Support Channels</h3><ul class="list-disc pl-6 mb-4 space-y-1"><li>In-app messaging</li><li>Email support</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.2 Support Tiers</h3><ul class="list-disc pl-6 mb-4 space-y-1"><li><strong>Professional and Business tiers:</strong> Priority support handling</li><li><strong>Business tier:</strong> Dedicated account manager</li></ul><h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.3 Incident Communication</h3><ul class="list-disc pl-6 mb-6 space-y-1"><li>Service incidents will be communicated via registered email</li><li>Scheduled maintenance will be announced in advance</li><li>Post-incident reports will be provided for significant outages</li></ul>`,
    },
    {
      id: 'liability',
      tocLabel: 'Limitation of Liability',
      title: '10. Limitation of Liability',
      html: `<p class="mb-2">To the maximum extent permitted by applicable law:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li>The Platform is provided "as-is" for compliance support purposes.</li><li>No guarantee is made regarding acceptance by any specific regulatory body or government agency.</li><li>The Platform operator shall not be liable for any indirect, incidental, special, or consequential damages arising from use of the Platform.</li><li>Liability for direct damages shall not exceed the fees paid by the customer in the twelve (12) months preceding the claim.</li></ul>`,
    },
    {
      id: 'updates',
      tocLabel: 'SLA Updates',
      title: '11. SLA Updates and Governance',
      html: `<ul class="list-disc pl-6 mb-6 space-y-1"><li>This SLA is subject to revision as regulations, technology, and service capabilities evolve.</li><li>Updates will be published at this URL with version number and effective date.</li></ul><section class="mt-12 pt-8 border-t border-border"><p class="text-body text-muted-foreground">See also: <a href="__LANG__/docs/api" class="text-primary hover:underline">API Documentation</a> · <a href="__LANG__/terms-of-service" class="text-primary hover:underline">Terms of Service</a> · <a href="__LANG__/privacy-policy" class="text-primary hover:underline">Privacy Policy</a> · <a href="__LANG__/compliance" class="text-primary hover:underline">Compliance</a></p></section>`,
    },
  ],
};
