import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Shield, FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';

const countryGuides = [
  { country: 'Nigeria', system: 'FIRS E-Invoicing', link: '/blog/e-invoicing-nigeria-firs-guide', status: 'Mandatory (phased rollout 2025–2026)', format: 'JSON/XML via TaxPro-Max', deadline: '2025–2026' },
  { country: 'India', system: 'GST E-Invoicing (IRP)', link: '/blog/e-invoicing-india-gst-guide', status: 'Mandatory (₹5 crore+ threshold)', format: 'JSON via IRP portal', deadline: 'Active since 2020' },
  { country: 'Kenya', system: 'KRA eTIMS', link: '/blog/e-invoicing-kenya-etims', status: 'Mandatory for VAT-registered businesses', format: 'Via eTIMS system', deadline: 'Active since 2024' },
  { country: 'Italy', system: 'SDI (Sistema di Interscambio)', link: '/blog/tax-compliant-invoice-it', status: 'Mandatory since 2019', format: 'FatturaPA XML', deadline: '2019' },
  { country: 'Romania', system: 'RO e-Factura / SAF-T', link: '/blog/tax-compliant-invoice-ro', status: 'Mandatory since 2024', format: 'XML via e-Factura', deadline: '2024' },
  { country: 'Hungary', system: 'NAV RTIR', link: '/blog/tax-compliant-invoice-hu', status: 'Real-time reporting mandatory', format: 'XML via NAV Online', deadline: 'Active since 2018' },
  { country: 'Poland', system: 'KSeF', link: '/blog/tax-compliant-invoice-pl', status: 'Mandatory from 2026', format: 'XML via KSeF platform', deadline: '2026' },
  { country: 'Saudi Arabia', system: 'ZATCA FATOORA', link: '/blog/e-invoicing-saudi-zatca-guide', status: 'Mandatory (Phase 2 integration)', format: 'XML UBL 2.1', deadline: 'Phase 2: 2024+' },
  { country: 'Malaysia', system: 'MyInvois (LHDN)', link: '/blog/e-invoicing-malaysia-myinvois-guide', status: 'Mandatory (phased from 2024)', format: 'XML/JSON via MyInvois', deadline: '2024–2025' },
  { country: 'Germany', system: 'XRechnung / ZUGFeRD', link: '/blog/tax-compliant-invoice-de', status: 'Mandatory for B2G; B2B from 2025', format: 'XRechnung XML / ZUGFeRD', deadline: 'B2B: 2025+' },
  { country: 'United Kingdom', system: 'Making Tax Digital (MTD)', link: '/blog/tax-compliant-invoice-uk', status: 'Digital record-keeping mandatory', format: 'Via MTD-compatible software', deadline: 'Active since 2019' },
  { country: 'Ghana', system: 'GRA E-VAT', link: '/blog/tax-compliant-invoice-gh', status: 'E-VAT system rollout', format: 'Via GRA portal', deadline: '2024–2025' },
  { country: 'South Africa', system: 'SARS E-Invoicing', link: '/blog/tax-compliant-invoice-za', status: 'Under development', format: 'TBD', deadline: 'Expected 2025–2026' },
  { country: 'Australia', system: 'Peppol E-Invoicing', link: '/blog/tax-compliant-invoice-au', status: 'Mandatory for government suppliers', format: 'Peppol BIS 3.0', deadline: 'Active for B2G' },
];

const faqs = [
  { question: 'What is e-invoicing?', answer: 'E-invoicing (electronic invoicing) is the automated creation, transmission, and processing of invoices in a structured digital format between systems. Unlike emailing a PDF, e-invoicing means invoice data flows directly into tax authority systems for real-time validation, reducing fraud and improving tax collection.' },
  { question: 'Is e-invoicing mandatory?', answer: 'It depends on your country. Over 80 countries have implemented or announced e-invoicing mandates. India, Italy, and Saudi Arabia already require it. Nigeria, Kenya, and Malaysia are rolling it out. The EU plans a bloc-wide mandate by 2028. Check your country\'s specific requirements in our country guides above.' },
  { question: 'How is e-invoicing different from emailing a PDF?', answer: 'A PDF invoice is an image — a human can read it, but systems can\'t process it automatically. An e-invoice is structured data (usually XML or JSON) that systems read, validate, and process without human intervention. E-invoicing enables real-time tax reporting, automatic validation, and seamless integration between buyer and seller systems.' },
  { question: 'What format do e-invoices use?', answer: 'Most countries use XML-based formats. Common standards include UBL 2.1 (used by Peppol, ZATCA), FatturaPA (Italy), XRechnung (Germany), and country-specific JSON schemas (India IRP, Nigeria FIRS). Your invoicing software should handle format conversion automatically.' },
  { question: 'Do small businesses need to comply with e-invoicing?', answer: 'In most countries, e-invoicing mandates are being rolled out progressively — starting with large enterprises and expanding to smaller businesses over time. India started with companies above ₹500 crore and has lowered the threshold to ₹5 crore. Check your country\'s current threshold.' },
  { question: 'What happens if I don\'t comply with e-invoicing mandates?', answer: 'Penalties vary by country. In India, non-compliant invoices are invalid for GST input tax credit claims. In Italy, fines range from €250 to €2,000 per invoice. In Saudi Arabia, penalties start at SAR 5,000. Most countries provide transition periods before enforcement.' },
  { question: 'Can I use Invoicemonk for e-invoicing?', answer: 'Yes. Invoicemonk generates tax-compliant invoices with all required fields — tax IDs, VAT/GST calculations, line-item breakdowns, and proper formatting. For countries requiring government portal submission (India IRP, Nigeria FIRS, Kenya eTIMS), Invoicemonk produces invoices in the correct format for upload.' },
  { question: 'What is Peppol e-invoicing?', answer: 'Peppol (Pan-European Public Procurement Online) is an international e-invoicing framework used in 39+ countries. It provides a standardized way to send e-invoices between businesses and governments. Australia, Singapore, New Zealand, and many EU countries use Peppol for B2G and increasingly B2B transactions.' },
  { question: 'How much does e-invoicing compliance cost?', answer: 'With Invoicemonk, e-invoicing compliance is included in all plans, including the free tier. You get tax-compliant invoice generation, multi-currency support, and tax calculation at no extra cost. Enterprise ERP solutions can charge $5,000–$50,000+ for e-invoicing modules.' },
  { question: 'Will e-invoicing replace PDF invoices?', answer: 'For tax reporting purposes, yes — structured data is replacing PDFs in mandated countries. However, most e-invoicing systems generate a human-readable PDF alongside the structured data file. Your clients still receive a PDF, but the tax authority gets the machine-readable version.' },
  { question: 'What is the difference between e-invoicing and e-reporting?', answer: 'E-invoicing involves sending the actual invoice in a structured format through a government platform. E-reporting (used in countries like France and Spain) means you submit invoice data to the tax authority separately while still sending invoices directly to your clients. Both aim to close the VAT gap.' },
  { question: 'Which countries will mandate e-invoicing next?', answer: 'The EU has proposed mandatory B2B e-invoicing across all member states by 2028 via the ViDA (VAT in the Digital Age) directive. France is implementing e-invoicing from 2026. Belgium, Spain, and several African nations are also preparing mandates. The global trend is clearly toward universal e-invoicing.' },
];

export default function EInvoicingGuide() {
  return (
    <Layout>
      <SEOHead
        title="E-Invoicing: What It Is, Country Mandates & How to Comply (2026)"
        description="Complete guide to e-invoicing (electronic invoicing): what it is, how it works, which countries mandate it, compliance requirements, and how small businesses can prepare. 14 country guides included."
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'E-Invoicing', url: '/guides/e-invoicing' }]} />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-primary mb-4"><Globe className="w-4 h-4" /> Pillar Guide</div>
          <h1 className="text-heading-xl font-bold text-foreground mb-4">E-Invoicing: The Complete Guide to Electronic Invoicing</h1>
          <p className="text-lg text-muted-foreground mb-8">Over 80 countries now mandate or plan e-invoicing. This guide explains what electronic invoicing is, how it works, which countries require it, and how your business can comply — whether you're a freelancer in Nigeria or a contractor in Germany.</p>

          {/* Definition box — targets featured snippet */}
          <Card className="border-primary/30 mb-16">
            <CardContent className="p-6">
              <h2 className="text-heading-md font-bold text-foreground mb-3">What Is E-Invoicing?</h2>
              <p className="text-muted-foreground"><strong>E-invoicing (electronic invoicing)</strong> is the automated exchange of invoice data in a structured digital format (XML or JSON) between a seller's system, a government tax platform, and a buyer's system. Unlike emailing a PDF, e-invoicing enables real-time tax validation, eliminates manual data entry, and creates an automatic audit trail. Governments mandate e-invoicing to reduce VAT fraud, improve tax collection, and modernize business-to-business transactions.</p>
            </CardContent>
          </Card>

          {/* E-Invoicing vs Traditional */}
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <h2 className="text-heading-md font-bold text-foreground">E-Invoicing vs Traditional Invoicing</h2>
            <p>Traditional invoicing involves creating a document (paper or PDF), sending it to your client, and separately reporting the transaction to tax authorities. <strong>E-invoicing automates this entire chain.</strong> Your invoice data is created in a structured format (XML or JSON), validated by a government system in real time, and automatically reported for tax purposes.</p>
            <p>Think of it as the difference between mailing a letter and sending a bank transfer. Both communicate the same information, but the digital version is instant, verifiable, and leaves an automatic audit trail.</p>

            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-muted-foreground" /> Traditional (PDF/Paper)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Human-readable only</li>
                    <li>• Manual data entry required</li>
                    <li>• Separate tax filing</li>
                    <li>• Error-prone reconciliation</li>
                    <li>• No real-time validation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary/30">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> E-Invoicing (Structured Data)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Machine-readable (XML/JSON)</li>
                    <li>• Automatic processing</li>
                    <li>• Real-time tax reporting</li>
                    <li>• Instant validation</li>
                    <li>• Automatic audit trail</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-heading-md font-bold text-foreground">How E-Invoicing Works</h2>
            <p>The exact process varies by country, but the general e-invoicing workflow follows these steps:</p>
            <ol>
              <li><strong>Create invoice</strong> in your accounting or invoicing software with all mandatory fields (tax IDs, line items, VAT/GST calculations)</li>
              <li><strong>Software converts</strong> the invoice to structured data (XML/JSON) in the required national format — UBL 2.1, FatturaPA, XRechnung, or country-specific schemas</li>
              <li><strong>Submit to government platform</strong> — IRP (India), SDI (Italy), FIRS TaxPro-Max (Nigeria), eTIMS (Kenya), ZATCA FATOORA (Saudi Arabia), KSeF (Poland)</li>
              <li><strong>Government validates</strong> — checks tax IDs, mathematical accuracy, format compliance, and business registration status</li>
              <li><strong>Reference number issued</strong> — IRN (India), unique ID (Italy), QR code (Saudi Arabia). This proves the invoice was validated</li>
              <li><strong>Invoice delivered</strong> to the recipient, often through the same government platform or directly with the validation reference attached</li>
              <li><strong>Tax return auto-populated</strong> — validated invoice data automatically appears in pre-filled tax returns, reducing manual filing</li>
            </ol>

            <h2 className="text-heading-md font-bold text-foreground">Benefits of E-Invoicing for Small Businesses</h2>
            <p>E-invoicing isn't just a compliance requirement — it delivers real operational benefits:</p>
            <ul>
              <li><strong>Faster payments</strong> — validated invoices are processed more quickly because recipients trust the data accuracy</li>
              <li><strong>Reduced errors</strong> — real-time validation catches calculation mistakes, missing fields, and invalid tax IDs before the invoice reaches your client</li>
              <li><strong>Auto-populated tax returns</strong> — less manual data entry for GST/VAT filing. In India, validated e-invoices automatically appear in GSTR-1</li>
              <li><strong>Lower compliance costs</strong> — no need for manual reconciliation between your invoices and tax reports</li>
              <li><strong>Audit readiness</strong> — every invoice is validated and stored in government systems, eliminating paper record-keeping requirements</li>
              <li><strong>Reduced fraud risk</strong> — validated invoices are harder to forge, protecting both buyers and sellers</li>
              <li><strong>Cross-border standardization</strong> — frameworks like Peppol enable seamless international invoicing</li>
            </ul>
          </div>

          {/* Country Mandates Table */}
          <h2 className="text-heading-lg font-bold text-foreground mb-4">E-Invoicing Country Mandates (2026)</h2>
          <p className="text-muted-foreground mb-8">Click any country for a detailed compliance guide with step-by-step instructions, required fields, and software setup.</p>

          <div className="overflow-x-auto mb-16">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-sm font-semibold text-foreground">Country</th>
                  <th className="py-3 px-4 text-sm font-semibold text-foreground">System</th>
                  <th className="py-3 px-4 text-sm font-semibold text-foreground hidden md:table-cell">Format</th>
                  <th className="py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {countryGuides.map((g, i) => (
                  <tr key={g.country} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="py-3 px-4 text-sm"><Link to={g.link} className="text-primary hover:underline font-medium">{g.country}</Link></td>
                    <td className="py-3 px-4 text-sm text-foreground">{g.system}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground hidden md:table-cell">{g.format}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{g.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Country cards (mobile-friendly) */}
          <h2 className="text-heading-md font-bold text-foreground mb-6">Country-Specific E-Invoicing Guides</h2>
          <div className="grid gap-4 mb-16">
            {countryGuides.map((g) => (
              <Link key={g.country} to={g.link}>
                <Card className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{g.country} — {g.system}</h3>
                      <p className="text-sm text-muted-foreground">{g.status}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Global trends */}
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <h2 className="text-heading-md font-bold text-foreground">Global E-Invoicing Trends (2026)</h2>
            <p>The global shift toward e-invoicing is accelerating. Key developments to watch:</p>
            <ul>
              <li><strong>EU ViDA Directive</strong> — The EU's "VAT in the Digital Age" proposal will mandate B2B e-invoicing across all 27 member states by 2028, creating the world's largest e-invoicing market</li>
              <li><strong>Africa's rapid adoption</strong> — Nigeria, Kenya, Ghana, and South Africa are all implementing or planning e-invoicing systems, driven by the need to formalize economies and close tax gaps</li>
              <li><strong>Asia-Pacific expansion</strong> — Following India and Malaysia, the Philippines, Vietnam, and Thailand are developing e-invoicing mandates</li>
              <li><strong>Peppol growth</strong> — The Peppol framework has expanded beyond Europe to Australia, New Zealand, Singapore, and Japan, creating a global interoperability standard</li>
              <li><strong>Real-time reporting</strong> — Countries like Hungary (NAV RTIR) and Spain (SII) require real-time or near-real-time invoice data transmission, a trend that will accelerate</li>
            </ul>

            <h2 className="text-heading-md font-bold text-foreground">How to Prepare for E-Invoicing Compliance</h2>
            <p>Whether your country already mandates e-invoicing or plans to, here's how to prepare:</p>
            <ol>
              <li><strong>Audit your current invoicing</strong> — Ensure every invoice includes tax IDs, proper VAT/GST calculations, and all fields required by your jurisdiction</li>
              <li><strong>Use compliant software</strong> — Choose invoicing software that generates properly formatted invoices with all mandatory fields. Invoicemonk includes tax compliance for NG, UK, US, CA, AU, IN, KE, and more</li>
              <li><strong>Register for your country's system</strong> — Most countries require businesses to register on their e-invoicing portal before submitting invoices</li>
              <li><strong>Test before the deadline</strong> — Most countries offer sandbox or testing environments. Use them before mandatory enforcement begins</li>
              <li><strong>Train your team</strong> — Ensure everyone who creates invoices understands the new workflow and required fields</li>
            </ol>
          </div>

          {/* Compliance checklist */}
          <Card className="border-primary/30 mb-16">
            <CardContent className="p-6">
              <h2 className="text-heading-md font-bold text-foreground mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> E-Invoicing Compliance Checklist</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Tax ID / VAT number on every invoice',
                  'Line-item breakdown with quantities and unit prices',
                  'Correct VAT/GST rates per item',
                  'Invoice sequential numbering',
                  'Supplier and buyer legal names and addresses',
                  'Invoice date and due date',
                  'Currency and exchange rates (if multi-currency)',
                  'Payment terms and methods',
                  'Credit note references (if applicable)',
                  'Digital signature or hash (where required)',
                ].map((item) => (
                  <div key={item} className="flex gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related tools */}
          <div className="mb-16">
            <h2 className="text-heading-md font-bold text-foreground mb-6">Related Tools & Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/free-invoice-generator">
                <Card className="hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">Free Invoice Generator</h3>
                    <p className="text-sm text-muted-foreground">Create tax-compliant invoices with VAT/GST calculations — free, no signup.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/guides/e-invoicing-mandates">
                <Card className="hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">E-Invoicing Mandates Timeline</h3>
                    <p className="text-sm text-muted-foreground">Detailed timeline of global e-invoicing mandate deadlines and phases.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/compliance">
                <Card className="hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">Invoicemonk Compliance Features</h3>
                    <p className="text-sm text-muted-foreground">How Invoicemonk ensures your invoices meet tax authority requirements.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/guides/tax-compliance">
                <Card className="hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">Tax Compliance Guide</h3>
                    <p className="text-sm text-muted-foreground">Complete guide to invoice tax compliance for small businesses worldwide.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently Asked Questions About E-Invoicing</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">E-Invoicing Compliant Invoices — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create tax-compliant invoices with proper tax IDs, VAT/GST calculations, and structured data. Start free — no signup required for the generator.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
              <Link to="/free-invoice-generator">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Start Full Platform Free<ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
