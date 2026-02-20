import { Layout } from '@/components/layout/Layout';
import { Link } from '@/components/LocalizedLink';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';

const ApiDocs = () => {
  const seo = pageSEO['/docs/api'];
  return (
    <Layout>
      <SEOHead
        title={seo?.getTitle({} as any) || 'API Documentation | Invoicemonk'}
        description={seo?.getDescription({} as any) || 'Full API reference for the Invoicemonk compliance infrastructure.'}
        canonical="https://invoicemonk.com/docs/api"
      />
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
            API Documentation
          </h1>

          <p className="text-body-lg text-muted-foreground mb-8">
            <strong>Version:</strong> v1 &nbsp;|&nbsp; <strong>Base URL:</strong>{' '}
            <code className="bg-muted px-2 py-0.5 rounded text-sm">https://your-project.supabase.co/functions/v1</code>
          </p>

          {/* Table of Contents */}
          <nav className="bg-muted/50 rounded-xl p-6 mb-12">
            <h2 className="text-heading-sm font-semibold text-foreground mb-4">Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-body text-muted-foreground columns-1 md:columns-2">
              <li><a href="#overview" className="hover:text-primary transition-colors">Overview</a></li>
              <li><a href="#authentication" className="hover:text-primary transition-colors">Authentication</a></li>
              <li><a href="#endpoints" className="hover:text-primary transition-colors">Core Endpoints</a></li>
              <li><a href="#audit" className="hover:text-primary transition-colors">Audit &amp; Compliance</a></li>
              <li><a href="#rate-limiting" className="hover:text-primary transition-colors">Rate Limiting</a></li>
              <li><a href="#errors" className="hover:text-primary transition-colors">Error Handling</a></li>
              <li><a href="#versioning" className="hover:text-primary transition-colors">Versioning</a></li>
              <li><a href="#security" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#access" className="hover:text-primary transition-colors">Access &amp; Support</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none text-muted-foreground">

            {/* 1. Overview */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">1. Overview</h2>
              <p className="mb-4">
                The Invoicemonk API provides programmatic access to our compliance infrastructure, enabling ERP integrators, accounting software vendors, and enterprise IT teams to build integrations with audit-ready, immutable records management.
              </p>
              <p className="mb-6">
                <strong>Access Requirement:</strong> API access is available exclusively to Business tier subscribers.
              </p>
            </section>

            {/* 2. Authentication */}
            <section id="authentication" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">2. Authentication</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">2.1 Bearer Token Authentication</h3>
              <p className="mb-2">All API requests must include a valid bearer token in the Authorization header:</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">{`Authorization: Bearer <access_token>`}</pre>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">2.2 Token Acquisition</h3>
              <p className="mb-2">Access tokens are obtained through Supabase Auth using JWT-based authentication. Tokens can be acquired via:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Email/password authentication</li>
                <li>OAuth providers (if configured)</li>
                <li>Refresh token flow for session renewal</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">2.3 Security Requirements</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>HTTPS required for all API requests</li>
                <li>Tokens should never be logged or transmitted insecurely</li>
                <li>Token rotation recommended every 90 days for service accounts</li>
                <li>Store tokens securely (never in source code)</li>
              </ul>
            </section>

            {/* 3. Core Endpoints */}
            <section id="endpoints" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">3. Core Endpoints</h2>

              {/* 3.1 Invoice Issuance */}
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.1 Invoice Issuance</h3>
              <p className="mb-2"><code className="bg-muted px-2 py-0.5 rounded text-sm font-semibold">POST</code> <code className="bg-muted px-2 py-0.5 rounded text-sm">/functions/v1/issue-invoice</code></p>
              <p className="mb-2">Issues a draft invoice, making it immutable and assigning a verification ID.</p>
              <p className="font-medium text-foreground mt-4 mb-1">Request Body</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "invoice_id": "uuid"
}`}</pre>
              <p className="font-medium text-foreground mt-4 mb-1">Preconditions</p>
              <ul className="list-disc pl-6 mb-2 space-y-1">
                <li>Invoice must be in <code className="bg-muted px-1 rounded text-sm">draft</code> status</li>
                <li>Business profile must be complete</li>
                <li>User email must be verified</li>
                <li>Monthly invoice limit not exceeded</li>
              </ul>
              <p className="font-medium text-foreground mt-4 mb-1">Response</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "success": true,
  "invoice": {
    "id": "uuid",
    "invoice_number": "INV-001",
    "verification_id": "uuid",
    "issued_at": "2026-01-30T12:00:00Z",
    "invoice_hash": "sha256-hex-string"
  }
}`}</pre>
              <p className="font-medium text-foreground mt-4 mb-1">Compliance Behavior</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>SHA-256 hash generated and stored</li>
                <li>Point-in-time snapshots captured (issuer, recipient, tax schema)</li>
                <li>Audit event logged: <code className="bg-muted px-1 rounded text-sm">INVOICE_ISSUED</code></li>
                <li>Invoice becomes immutable</li>
              </ul>

              {/* 3.2 Invoice Verification */}
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.2 Invoice Verification</h3>
              <p className="mb-2"><code className="bg-muted px-2 py-0.5 rounded text-sm font-semibold">GET</code> <code className="bg-muted px-2 py-0.5 rounded text-sm">{`/functions/v1/verify-invoice?verification_id={uuid}`}</code></p>
              <p className="mb-2"><strong>Public Access:</strong> This endpoint does not require authentication.</p>
              <p className="mb-2"><strong>Tier Restriction:</strong> Verification only succeeds if the invoice issuer has Professional or Business tier.</p>
              <p className="font-medium text-foreground mt-4 mb-1">Response</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "verified": true,
  "invoice": {
    "invoice_number": "INV-001",
    "issue_date": "2026-01-30",
    "issued_at": "2026-01-30T12:00:00Z",
    "issuer_name": "Business Name",
    "payment_status": "Issued - Awaiting Payment",
    "total_amount": 50000.00,
    "currency": "NGN",
    "integrity_valid": true
  }
}`}</pre>
              <p className="mb-6"><strong>Integrity Check:</strong> <code className="bg-muted px-1 rounded text-sm">integrity_valid</code> confirms the invoice hash exists and has not been tampered with.</p>

              {/* 3.3 Payment Recording */}
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.3 Payment Recording</h3>
              <p className="mb-2"><code className="bg-muted px-2 py-0.5 rounded text-sm font-semibold">POST</code> <code className="bg-muted px-2 py-0.5 rounded text-sm">/functions/v1/record-payment</code></p>
              <p className="font-medium text-foreground mt-4 mb-1">Request Body</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "invoice_id": "uuid",
  "amount": 25000.00,
  "payment_method": "bank_transfer",
  "payment_reference": "TRF-123456",
  "payment_date": "2026-01-30",
  "notes": "First installment"
}`}</pre>
              <p className="font-medium text-foreground mt-4 mb-1">Validation</p>
              <ul className="list-disc pl-6 mb-2 space-y-1">
                <li>Invoice must be in <code className="bg-muted px-1 rounded text-sm">issued</code>, <code className="bg-muted px-1 rounded text-sm">sent</code>, or <code className="bg-muted px-1 rounded text-sm">viewed</code> status</li>
                <li>Amount must be positive</li>
                <li>Payment recorded with <code className="bg-muted px-1 rounded text-sm">retention_locked_until</code> based on jurisdiction</li>
              </ul>
              <p className="font-medium text-foreground mt-4 mb-1">Response</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "success": true,
  "payment": {
    "id": "uuid",
    "invoice_id": "uuid",
    "amount": 25000.00,
    "payment_date": "2026-01-30"
  },
  "invoice_status": "issued"
}`}</pre>
              <p className="mb-6"><strong>Auto-Status Update:</strong> If total payments equal invoice amount, status changes to <code className="bg-muted px-1 rounded text-sm">paid</code>.</p>

              {/* 3.4 Invoice Voiding */}
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.4 Invoice Voiding</h3>
              <p className="mb-2"><code className="bg-muted px-2 py-0.5 rounded text-sm font-semibold">POST</code> <code className="bg-muted px-2 py-0.5 rounded text-sm">/functions/v1/void-invoice</code></p>
              <p className="font-medium text-foreground mt-4 mb-1">Request Body</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "invoice_id": "uuid",
  "reason": "Customer requested cancellation due to order error"
}`}</pre>
              <p className="font-medium text-foreground mt-4 mb-1">Validation</p>
              <ul className="list-disc pl-6 mb-2 space-y-1">
                <li>Reason must be at least 10 characters (audit requirement)</li>
                <li>Invoice must be in <code className="bg-muted px-1 rounded text-sm">issued</code>, <code className="bg-muted px-1 rounded text-sm">sent</code>, or <code className="bg-muted px-1 rounded text-sm">viewed</code> status</li>
                <li>Cannot void already paid, voided, or credited invoices</li>
              </ul>
              <p className="font-medium text-foreground mt-4 mb-1">Response</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "success": true,
  "credit_note": {
    "id": "uuid",
    "credit_note_number": "CN-INV-001",
    "amount": 50000.00,
    "reason": "Customer requested cancellation",
    "issued_at": "2026-01-30T12:00:00Z"
  }
}`}</pre>
              <p className="font-medium text-foreground mt-4 mb-1">Compliance Behavior</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Original invoice is NOT deleted (immutable)</li>
                <li>Credit note created with SHA-256 hash</li>
                <li>Invoice status changed to <code className="bg-muted px-1 rounded text-sm">voided</code></li>
                <li>Audit event logged: <code className="bg-muted px-1 rounded text-sm">INVOICE_VOIDED</code></li>
              </ul>

              {/* 3.5 PDF Generation */}
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.5 PDF Generation</h3>
              <p className="mb-2"><code className="bg-muted px-2 py-0.5 rounded text-sm font-semibold">POST</code> <code className="bg-muted px-2 py-0.5 rounded text-sm">/functions/v1/generate-pdf</code></p>
              <p className="font-medium text-foreground mt-4 mb-1">Request Body</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "invoice_id": "uuid"
}`}</pre>
              <p className="font-medium text-foreground mt-4 mb-1">Tier Behavior</p>
              <ul className="list-disc pl-6 mb-2 space-y-1">
                <li><strong>Starter:</strong> Watermark applied</li>
                <li><strong>Professional/Business:</strong> Clean PDF with optional branding</li>
              </ul>
              <p className="mb-6"><strong>Response:</strong> Base64-encoded PDF or binary stream</p>

              {/* 3.6 Data Export */}
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">3.6 Data Export</h3>
              <p className="mb-2"><code className="bg-muted px-2 py-0.5 rounded text-sm font-semibold">POST</code> <code className="bg-muted px-2 py-0.5 rounded text-sm">/functions/v1/export-records</code></p>
              <p className="mb-2"><strong>Access:</strong> Professional and Business tiers only</p>
              <p className="font-medium text-foreground mt-4 mb-1">Request Body</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "export_type": "invoices",
  "business_id": "uuid",
  "date_from": "2026-01-01",
  "date_to": "2026-01-31",
  "format": "csv"
}`}</pre>
              <p className="mb-2"><strong>Export Types:</strong> <code className="bg-muted px-1 rounded text-sm">invoices</code>, <code className="bg-muted px-1 rounded text-sm">audit_logs</code>, <code className="bg-muted px-1 rounded text-sm">payments</code>, <code className="bg-muted px-1 rounded text-sm">clients</code></p>
              <p className="font-medium text-foreground mt-4 mb-1">Response</p>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-2">{`{
  "success": true,
  "export_id": "uuid",
  "manifest_id": "uuid",
  "data": "csv-content-string",
  "filename": "invoices_export_2026-01-30.csv",
  "record_count": 45,
  "generated_at": "2026-01-30T12:00:00Z",
  "integrity_hash": "sha256-of-export-content"
}`}</pre>
              <p className="font-medium text-foreground mt-4 mb-1">Chain of Custody</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Export manifest created with actor, timestamp, scope</li>
                <li>Integrity hash generated for export content</li>
                <li>Audit event logged: <code className="bg-muted px-1 rounded text-sm">DATA_EXPORTED</code></li>
              </ul>
            </section>

            {/* 4. Audit & Compliance */}
            <section id="audit" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">4. Audit &amp; Compliance Behavior</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">4.1 Automatically Logged Events</h3>

              <p className="font-medium text-foreground mt-4 mb-1">Authentication</p>
              <ul className="list-disc pl-6 mb-2 space-y-1">
                <li><code className="bg-muted px-1 rounded text-sm">USER_LOGIN</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">USER_LOGOUT</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">USER_SIGNUP</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">EMAIL_VERIFIED</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">PASSWORD_RESET</code></li>
              </ul>

              <p className="font-medium text-foreground mt-4 mb-1">Invoice Lifecycle</p>
              <ul className="list-disc pl-6 mb-2 space-y-1">
                <li><code className="bg-muted px-1 rounded text-sm">INVOICE_CREATED</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">INVOICE_UPDATED</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">INVOICE_ISSUED</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">INVOICE_SENT</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">INVOICE_VIEWED</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">INVOICE_VOIDED</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">INVOICE_CREDITED</code></li>
              </ul>

              <p className="font-medium text-foreground mt-4 mb-1">Financial</p>
              <ul className="list-disc pl-6 mb-2 space-y-1">
                <li><code className="bg-muted px-1 rounded text-sm">PAYMENT_RECORDED</code></li>
              </ul>

              <p className="font-medium text-foreground mt-4 mb-1">Access Control</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><code className="bg-muted px-1 rounded text-sm">TEAM_MEMBER_ADDED</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">TEAM_MEMBER_REMOVED</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">ROLE_CHANGED</code></li>
                <li><code className="bg-muted px-1 rounded text-sm">DATA_EXPORTED</code></li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">4.2 Audit Log Structure</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">{`{
  "event_type": "INVOICE_ISSUED",
  "entity_type": "invoice",
  "entity_id": "uuid",
  "actor_id": "uuid",
  "actor_role": "owner",
  "timestamp_utc": "2026-01-30T12:00:00Z",
  "previous_state": { ... },
  "new_state": { ... },
  "metadata": { ... },
  "event_hash": "sha256-of-event"
}`}</pre>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">4.3 Retention Policies</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">Jurisdiction</th>
                      <th className="text-left py-2 font-semibold text-foreground">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="py-2 pr-4">Nigeria (NG)</td><td className="py-2">6 years</td></tr>
                    <tr><td className="py-2 pr-4">United States (US)</td><td className="py-2">7 years</td></tr>
                    <tr><td className="py-2 pr-4">United Kingdom (GB)</td><td className="py-2">6 years</td></tr>
                    <tr><td className="py-2 pr-4">Germany (DE)</td><td className="py-2">10 years</td></tr>
                    <tr><td className="py-2 pr-4">France (FR)</td><td className="py-2">10 years</td></tr>
                    <tr><td className="py-2 pr-4">Australia (AU)</td><td className="py-2">7 years</td></tr>
                    <tr><td className="py-2 pr-4">Canada (CA)</td><td className="py-2">7 years</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Rate Limiting */}
            <section id="rate-limiting" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">5. Rate Limiting and Usage Controls</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">5.1 Default Limits</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>100 requests per minute per user</li>
                <li>1,000 requests per hour per user</li>
                <li>Bulk export operations limited to 10,000 records per request</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">5.2 Tier-Based Scaling</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Business tier:</strong> Higher rate limits available upon request</li>
                <li><strong>Enterprise agreements:</strong> Custom rate limits negotiated separately</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">5.3 Abuse Prevention</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Repeated authentication failures may trigger temporary lockout</li>
                <li>Excessive failed requests logged for security review</li>
              </ul>
            </section>

            {/* 6. Error Handling */}
            <section id="errors" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">6. Error Handling</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">6.1 Standard Error Response</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">{`{
  "success": false,
  "error": "Human-readable error message",
  "code": "ERROR_CODE"
}`}</pre>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">6.2 HTTP Status Codes</h3>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">Code</th>
                      <th className="text-left py-2 font-semibold text-foreground">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="py-2 pr-4">200</td><td className="py-2">Success</td></tr>
                    <tr><td className="py-2 pr-4">400</td><td className="py-2">Bad Request — Invalid input</td></tr>
                    <tr><td className="py-2 pr-4">401</td><td className="py-2">Unauthorized — Missing or invalid token</td></tr>
                    <tr><td className="py-2 pr-4">403</td><td className="py-2">Forbidden — Tier restriction or permission denied</td></tr>
                    <tr><td className="py-2 pr-4">404</td><td className="py-2">Not Found — Resource does not exist</td></tr>
                    <tr><td className="py-2 pr-4">429</td><td className="py-2">Too Many Requests — Rate limit exceeded</td></tr>
                    <tr><td className="py-2 pr-4">500</td><td className="py-2">Server Error — Unexpected failure</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">6.3 Compliance-Safe Errors</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Error messages do not expose internal system details</li>
                <li>Validation errors provide guidance without revealing data structure</li>
              </ul>
            </section>

            {/* 7. Versioning */}
            <section id="versioning" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">7. Versioning and Change Management</h2>
              <p className="mb-4"><strong>Current Version:</strong> v1 &nbsp;|&nbsp; <strong>Format:</strong> <code className="bg-muted px-1 rounded text-sm">/functions/v1/endpoint-name</code></p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">7.1 Backward Compatibility</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Breaking changes will be introduced in new versions only</li>
                <li>Deprecated versions will be supported for minimum 12 months</li>
                <li>Deprecation notices published 6 months in advance</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">7.2 Change Notification</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>API changes documented in release notes</li>
                <li>Enterprise customers notified via registered email</li>
                <li>Status page updated for any breaking changes</li>
              </ul>
            </section>

            {/* 8. Security */}
            <section id="security" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">8. Security Considerations</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">8.1 Encryption</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>All API traffic encrypted via HTTPS/TLS 1.2+</li>
                <li>Data encrypted at rest using infrastructure-level encryption</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">8.2 Access Logging</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>All API requests logged with timestamp, user, and action</li>
                <li>Logs retained per jurisdiction retention policy</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">8.3 IP Restrictions</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>IP whitelisting available for Enterprise tier</li>
                <li>Contact support to configure IP restrictions</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">8.4 Key Management</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>API tokens should be stored securely (never in source code)</li>
                <li>Service accounts recommended for production integrations</li>
                <li>Token rotation every 90 days recommended</li>
              </ul>
            </section>

            {/* 9. Access & Support */}
            <section id="access" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">9. Access and Support</h2>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">9.1 Requesting API Access</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-1">
                <li>Upgrade to Business tier</li>
                <li>Complete business profile with legal name and tax ID</li>
                <li>Verify email address</li>
                <li>Contact support for API key provisioning (if separate from auth tokens)</li>
              </ol>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">9.2 Review Process</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Business verification may be required for high-volume access</li>
                <li>Enterprise customers receive dedicated onboarding</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">9.3 Support Channels</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Standard:</strong> In-app messaging, email support</li>
                <li><strong>Business tier:</strong> Priority email support</li>
                <li><strong>Enterprise:</strong> Dedicated account manager, SLA-backed response times</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">9.4 Escalation</h3>
              <p className="mb-6">
                For urgent compliance or security matters, contact{' '}
                <a href="mailto:security@invoicemonk.com" className="text-primary hover:underline">security@invoicemonk.com</a>.
              </p>
            </section>

            {/* Related pages */}
            <section className="mt-12 pt-8 border-t border-border">
              <p className="text-body text-muted-foreground">
                See also: <Link to="/legal/sla" className="text-primary hover:underline">Service Level Agreement</Link> · <Link to="/developer" className="text-primary hover:underline">Developer Portal</Link> · <Link to="/compliance" className="text-primary hover:underline">Compliance</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApiDocs;
