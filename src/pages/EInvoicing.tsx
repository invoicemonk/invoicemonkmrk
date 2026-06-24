import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe2, Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { EInvoicingCollectionSchema } from '@/components/seo/EInvoicingCollectionSchema';
import { MandateMatrix } from '@/components/e-invoicing/MandateMatrix';
import { GlobalCapabilityBlock } from '@/components/e-invoicing/GlobalCapabilityBlock';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from '@/components/LocalizedLink';
import {
  MANDATE_COUNT,
  mandatesByRegion,
  regionLabel,
  type RegionKey,
} from '@/data/mandates';
import { trackCTAClick } from '@/hooks/useContentAnalytics';
import personaFreelancer from '@/assets/persona-freelancer.jpg';
import personaSmallBusiness from '@/assets/persona-smallbusiness.jpg';
import personaConsultant from '@/assets/persona-consultant.jpg';
import personaContractor from '@/assets/persona-contractor.jpg';

const SIGNUP_URL = 'https://app.invoicemonk.com/signup?plan=professional&intent=e-invoicing';

const REGION_ORDER: RegionKey[] = ['middle-east', 'asia-pacific', 'europe', 'africa', 'americas'];

const SEGMENT_CTAS: Array<{ id: string; label: string; body: string; image: string }> = [
  {
    id: 'freelancer',
    label: 'Freelancers',
    body: 'Issue mandate-compliant invoices in every country you bill from, with the local artefact pre-attached.',
    image: personaFreelancer,
  },
  {
    id: 'sme',
    label: 'Small businesses',
    body: 'Clear ZATCA, MyInvois, GST IRN, FIRS, eTIMS, and Peppol from one workspace, with audit trails per invoice.',
    image: personaSmallBusiness,
  },
  {
    id: 'agency',
    label: 'Agencies',
    body: 'Bill clients across regions, route Peppol invoices to public-sector buyers, and reconcile in one ledger.',
    image: personaContractor,
  },
  {
    id: 'accountant',
    label: 'Accountants',
    body: 'Onboard CSID, IRN, and UUID issuance for every client, with per-client signing certificates managed centrally.',
    image: personaConsultant,
  },
];

const TRUST_BAR = [
  `${MANDATE_COUNT} live mandates`,
  `${REGION_ORDER.length} regions covered`,
  'Certified Peppol Access Point partner',
  'Audit trail on every invoice',
];

const pillarFaqs = [
  {
    question: 'What is an e-invoicing platform?',
    answer:
      'An e-invoicing platform issues invoices as structured data (XML or JSON) and exchanges them with tax authorities or trading partners over a defined transport (direct API, Peppol Access Point, or national portal). Invoicemonk is an e-invoicing platform live in 16 mandates across 5 regions.',
  },
  {
    question: 'Is e-invoicing mandatory in 2026?',
    answer:
      'It depends on the country. In 2026 e-invoicing is mandatory in Saudi Arabia (ZATCA Phase 2, all VAT-registered businesses), Malaysia (MyInvois, full rollout), India (GST IRN, turnover above ₹5 crore), Italy (SdI, all B2B), Brazil (NF-e / NFS-e, all businesses), Nigeria (FIRS MBS, large taxpayers), Kenya (KRA eTIMS, all VAT-registered), Ghana (GRA E-VAT, phased), the Philippines (BIR CAS for large taxpayers), and across the EU for B2G via Peppol. France, Germany, Belgium, and Spain mandate B2B from 2026–2027.',
  },
  {
    question: 'Do I need a separate Peppol Access Point?',
    answer:
      "No. Invoicemonk's certified Peppol Access Point partner registers your participant ID and routes inbound and outbound Peppol invoices on your behalf. There is no separate setup fee.",
  },
  {
    question: 'What is a CTC (Continuous Transaction Controls) mandate?',
    answer:
      'A CTC mandate requires invoices to flow through a state-operated platform that validates and clears or reports them in (near) real time. ZATCA Phase 2, MyInvois, India GST IRN, Italy SdI, and Brazil NF-e are clearance regimes. UK MTD and the EU Peppol four-corner model are reporting / exchange regimes. The difference matters: in a clearance regime an unpassed invoice is legally not an invoice.',
  },
  {
    question: 'Which countries does Invoicemonk cover for e-invoicing?',
    answer:
      'Invoicemonk is live for ZATCA Phase 1 + 2 (Saudi Arabia), MyInvois (Malaysia), GST IRN (India), Peppol (EU), FIRS MBS (Nigeria), MTD (UK), KRA eTIMS (Kenya), GRA E-VAT (Ghana), BIR EIS (Philippines), SARS (South Africa), ZIMRA FDMS (Zimbabwe), SRC (Seychelles), NF-e / NFS-e (Brazil), IPP B2G (US), and CRA + Peppol (Canada).',
  },
  {
    question: 'What is the difference between /invoicing and /e-invoicing?',
    answer:
      '/invoicing is the everyday invoicing product: templates, reminders, payments, multi-currency. /e-invoicing is the structured, mandate-compliant capability: CSID, IRN, UUID, QR, Peppol routing, and submission to the tax authority. Most customers use both.',
  },
  {
    question: 'Which artefact does each mandate require?',
    answer:
      'CSID for ZATCA, IRN for India GST and FIRS Nigeria and GRA Ghana, UUID for MyInvois, Control Unit Invoice Number + QR for KRA eTIMS, Chave de Acesso for Brazilian NF-e, fiscal signature for ZIMRA FDMS, XAdES digital signature for Peppol and HMRC MTD. Invoicemonk handles all of them.',
  },
  {
    question: 'Do I need to archive e-invoices, and for how long?',
    answer:
      'Yes. Every mandate sets a minimum archival period: Saudi Arabia (ZATCA) 6 years, India (GST) 6 years from the relevant year-end, UK (MTD) 6 years, EU (Peppol member states) 5–10 years depending on the country, Malaysia (MyInvois) 7 years, Brazil (NF-e) 5 years. Invoicemonk stores the signed/cleared payload, the authority response, and the audit trail for the longest applicable period.',
  },
  {
    question: 'Can I migrate from another e-invoicing provider mid-year?',
    answer:
      'Yes. Invoicemonk supports historical invoice import (CSV or your provider\'s export), preserves invoice numbering continuity, and re-registers your Peppol participant ID, CSID, or IRN onboarding token where required. Most migrations complete in under two weeks per mandate.',
  },
];

/**
 * Outbound authority links — proof layer that crawlers and AI search agents
 * read to validate the pillar's claims. Adding these to the pillar (not just
 * per-mandate pages) materially lifts perceived authority.
 */
const SOURCE_AUTHORITIES: Array<{ region: string; items: Array<{ label: string; url: string }> }> = [
  {
    region: 'Middle East',
    items: [
      { label: 'ZATCA — Saudi Arabia E-Invoicing', url: 'https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/default.aspx' },
    ],
  },
  {
    region: 'Asia-Pacific',
    items: [
      { label: 'LHDN MyInvois Portal — Malaysia', url: 'https://www.hasil.gov.my/en/e-invoice/' },
      { label: 'NIC IRP / GSTN — India', url: 'https://einvoice1.gst.gov.in/' },
      { label: 'BIR — Philippines', url: 'https://www.bir.gov.ph/' },
    ],
  },
  {
    region: 'Europe',
    items: [
      { label: 'HMRC — Making Tax Digital', url: 'https://www.gov.uk/government/collections/making-tax-digital-for-vat' },
      { label: 'OpenPeppol Authority', url: 'https://peppol.org/' },
    ],
  },
  {
    region: 'Africa',
    items: [
      { label: 'FIRS — Nigeria MBS', url: 'https://www.firs.gov.ng/' },
      { label: 'KRA — Kenya eTIMS', url: 'https://www.kra.go.ke/individual/filing-paying/types-of-taxes/value-added-tax/etims' },
      { label: 'GRA — Ghana E-VAT', url: 'https://gra.gov.gh/' },
      { label: 'SARS — South Africa', url: 'https://www.sars.gov.za/' },
      { label: 'ZIMRA — Zimbabwe FDMS', url: 'https://www.zimra.co.zw/' },
      { label: 'SRC — Seychelles', url: 'https://www.src.gov.sc/' },
    ],
  },
  {
    region: 'Americas',
    items: [
      { label: 'SEFAZ — Brazil NF-e Portal', url: 'https://www.nfe.fazenda.gov.br/portal/principal.aspx' },
      { label: 'US Treasury IPP (B2G)', url: 'https://www.ipp.gov/' },
      { label: 'CRA — Canada Revenue Agency', url: 'https://www.canada.ca/en/revenue-agency.html' },
    ],
  },
];


export default function EInvoicing() {
  return (
    <>
      <SEOHead
        title={`E-Invoicing Platform: Mandate-Compliant in ${MANDATE_COUNT} Jurisdictions | Invoicemonk`}
        description={`The global e-invoicing platform for small business. CSID, IRN, UUID, QR, and Peppol routing across ${MANDATE_COUNT} mandates from ZATCA to MyInvois, FIRS, GST India, MTD, and Peppol EU.`}
      />
      <SoftwareApplicationSchema
        name="Invoicemonk E-Invoicing"
        description={`Mandate-compliant e-invoicing platform live in ${MANDATE_COUNT} jurisdictions.`}
        schemaId="https://invoicemonk.com/#e-invoicing-software"
      />
      <EInvoicingCollectionSchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'E-Invoicing', url: '/e-invoicing' }]} />
      <FAQSchema items={pillarFaqs} />

      <Layout>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 pt-28 pb-20 lg:pb-28">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm font-medium">E-Invoicing Platform</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
                >
                  The global{' '}
                  <span className="font-serif italic text-primary">e-invoicing</span>{' '}
                  platform for small business
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-6 text-lg text-muted-foreground leading-relaxed"
                >
                  Live in {MANDATE_COUNT} jurisdictions across {REGION_ORDER.length} regions: ZATCA, MyInvois, GST IRN,
                  Peppol, FIRS, MTD, eTIMS, GRA, BIR, SARS, ZIMRA, SRC, NF-e, IPP, and CRA. Every invoice carries the
                  local cryptographic artefact the tax authority requires.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                  <Button asChild size="lg" className="rounded-full px-8 h-14 text-base group">
                    <a href={SIGNUP_URL} onClick={() => trackCTAClick('e-invoicing', { surface: 'pillar_hero' })}>
                      Start with Pro: $15/mo
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="rounded-full px-6 h-14 text-base">
                    <a href="#mandate-matrix">See the mandate matrix</a>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mt-8 grid grid-cols-2 gap-3"
                >
                  {TRUST_BAR.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Compliance badge collage */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Globe2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">Mandate coverage</div>
                        <div className="text-xs text-muted-foreground">Live worldwide</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {MANDATE_COUNT} active
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'ZATCA', sub: 'Saudi Arabia' },
                      { label: 'MyInvois', sub: 'Malaysia' },
                      { label: 'GST IRN', sub: 'India' },
                      { label: 'Peppol', sub: 'EU' },
                      { label: 'FIRS MBS', sub: 'Nigeria' },
                      { label: 'KRA eTIMS', sub: 'Kenya' },
                      { label: 'HMRC MTD', sub: 'UK' },
                      { label: 'NF-e', sub: 'Brazil' },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg border border-border bg-background px-3 py-2.5"
                      >
                        <div className="text-sm font-semibold text-foreground">{m.label}</div>
                        <div className="text-xs text-muted-foreground">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border max-w-[260px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Cryptographically signed</p>
                      <p className="text-xs text-muted-foreground">CSID · IRN · UUID · QR · XAdES</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mandate matrix */}
        <section id="mandate-matrix" className="py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                Live mandate matrix
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Authority, artefact, transport — for every mandate we cover
              </h2>
              <p className="mt-4 text-muted-foreground">
                The full reference: what each tax authority requires and how Invoicemonk delivers it.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <MandateMatrix hidePillarLink />
            </div>
          </div>
        </section>

        {/* Global capability */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <GlobalCapabilityBlock />
            </div>
          </div>
        </section>

        {/* By region */}
        <section className="py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                By region
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Coverage across {REGION_ORDER.length} regions
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {REGION_ORDER.map((region) => {
                const items = mandatesByRegion[region] || [];
                if (items.length === 0) return null;
                return (
                  <motion.div
                    key={region}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-border bg-background p-6 hover:border-primary/20 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Globe2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{regionLabel[region]}</h3>
                        <p className="text-xs text-muted-foreground">{items.length} mandates</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {items.map((m) => (
                        <li key={m.slug}>
                          <Link
                            to={`/e-invoicing/${m.slug}`}
                            className="flex items-start gap-2 text-foreground hover:text-primary group"
                          >
                            <ArrowRight className="w-3.5 h-3.5 mt-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                            <span>
                              <span className="font-medium">{m.jurisdiction}</span>{' '}
                              <span className="text-muted-foreground">({m.mandate.split(' — ')[0]})</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Built for every team */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                Who it's for
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for every team that bills</h2>
              <p className="mt-4 text-muted-foreground">
                One platform, four buying contexts, the same mandate coverage.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SEGMENT_CTAS.map((seg, i) => {
                const href = `https://app.invoicemonk.com/signup?plan=professional&intent=e-invoicing-${seg.id}`;
                return (
                  <motion.div
                    key={seg.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                      <img
                        src={seg.image}
                        alt={seg.label}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{seg.label}</h3>
                      <p className="mt-2 text-sm text-muted-foreground flex-1">{seg.body}</p>
                      <div className="mt-5">
                        <Button asChild size="sm" variant="outline" className="rounded-full">
                          <a
                            href={href}
                            onClick={() => trackCTAClick(`e-invoicing-${seg.id}`, { surface: 'pillar_segment' })}
                          >
                            Start with Pro
                            <ArrowRight className="ml-1.5 w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently asked questions</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {pillarFaqs.map((f, i) => (
                  <AccordionItem key={f.question} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {f.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Source authorities — outbound proof layer */}
        <section className="py-20 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 max-w-3xl">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                  Source authorities
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Verified against tax-authority specifications
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Every mandate page links to the authority's published guideline. Below are the source portals Invoicemonk's implementations are validated against.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SOURCE_AUTHORITIES.map((group) => (
                  <div key={group.region} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                      {group.region}
                    </h3>
                    <ul className="space-y-2.5 text-sm">
                      {group.items.map((item) => (
                        <li key={item.url}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}

        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-primary/5 via-background to-accent/30 border border-border p-10 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Mandate-compliant from day one
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                One platform, {MANDATE_COUNT} mandates, every artefact your tax authority requires.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-base group">
                  <a href={SIGNUP_URL} onClick={() => trackCTAClick('e-invoicing', { surface: 'pillar_footer' })}>
                    Start with Pro: $15/mo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base">
                  <Link to="/contact">Talk to sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
