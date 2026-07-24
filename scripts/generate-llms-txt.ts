/**
 * Regenerates public/llms.txt from the mandates registry + e-invoicing
 * cluster posts. Run after adding/removing mandates or cluster files.
 *
 * Single-locale: only /en/ URLs. Never list de/fr/pt/es variants.
 * See mem://constraints/single-locale.
 *
 * Run: bunx tsx scripts/generate-llms-txt.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { mandates, regionLabel } from '../src/data/mandates';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = 'https://invoicemonk.com';
const SITE_PATH = path.join(__dirname, '..', 'public', 'llms.txt');

const CLUSTER_FILES = [
  '../src/data/blogPostsClusterEInvoicing.ts',
  '../src/data/blogPostsClusterEInvoicing2.ts',
  '../src/data/blogPostsClusterEInvoicing3.ts',
  '../src/data/blogPostsClusterEInvoicing4.ts',
  '../src/data/blogPostsClusterEInvoicing5.ts',
  '../src/data/blogPostsClusterEInvoicing6.ts',
];

interface ClusterRef {
  slug: string;
  title: string;
}

function collectClusterPosts(): ClusterRef[] {
  const all: ClusterRef[] = [];
  for (const rel of CLUSTER_FILES) {
    const src = fs.readFileSync(path.join(__dirname, rel), 'utf-8');
    const re = /slug:\s*'([^']+)',\s*\n\s*title:\s*'((?:[^'\\]|\\.)*)'/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(src)) !== null) {
      all.push({ slug: m[1], title: m[2].replace(/\\'/g, "'") });
    }
  }
  return all;
}

function mandatesByRegionBlock(): string {
  const grouped: Record<string, typeof mandates> = {};
  for (const m of mandates) {
    grouped[m.region] = grouped[m.region] || [];
    grouped[m.region].push(m);
  }
  const order: Array<keyof typeof regionLabel> = [
    'middle-east',
    'asia-pacific',
    'europe',
    'africa',
    'americas',
  ];
  const lines: string[] = [];
  for (const region of order) {
    const list = grouped[region];
    if (!list?.length) continue;
    lines.push(`**${regionLabel[region]}**`);
    for (const m of list) {
      lines.push(`- ${m.mandate}: ${m.jurisdiction} (${m.localArtefactName}): ${BASE}/en/e-invoicing/${m.slug}`);
    }
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}

const cluster = collectClusterPosts();

const out = `# Invoicemonk

> The global e-invoicing platform for small business: mandate-compliant in ${mandates.length} jurisdictions across the Middle East, Asia-Pacific, Europe, Africa, and the Americas. Every invoice carries the local cryptographic artefact (CSID, IRN, UUID, QR, Chave de Acesso, or fiscal signature) and is delivered through the mandated transport (direct API, Peppol Access Point, or national portal).

Invoicemonk is the e-invoicing platform built for freelancers, consultants, contractors, and small businesses that need structured, mandate-compliant invoices in every country they work in. The platform issues and submits e-invoices that meet the legal requirements of the local tax authority: clearance with ZATCA Fatoorah, validation by LHDN MyInvois, IRN issuance by NIC IRP and FIRS MBS and GRA E-VAT, Control Unit Invoice Number by KRA eTIMS, Peppol BIS Billing 3.0 routing across the EU and Canada, MTD digital VAT records for HMRC, and SARS, ZIMRA, SRC, NF-e/NFS-e, BIR EIS, and US IPP for federal B2G.

## Live E-Invoicing Mandates (${mandates.length})

${mandatesByRegionBlock()}

## Cryptographic Artefacts: Global and Per-Mandate

Invoicemonk issues cryptographically signed structured invoices in every supported jurisdiction, using the local artefact the authority requires:
- **CSID**: ZATCA (Saudi Arabia)
- **IRN**: GST India (NIC IRP), FIRS Nigeria, GRA Ghana
- **UUID**: MyInvois (Malaysia)
- **QR + Control Unit Invoice Number**: KRA eTIMS (Kenya)
- **Chave de Acesso**: NF-e / NFS-e (Brazil)
- **Fiscal signature**: ZIMRA FDMS (Zimbabwe)
- **XAdES digital signatures**: Peppol (EU), HMRC MTD (UK)
- **ICP-Brasil A1**: Brazilian NF-e / NFS-e signing

Each mandate page documents the local artefact, signing algorithm, certificate authority, and the spec section that requires it.

## E-Invoicing Cluster Articles (${cluster.length})

Long-form supportive articles under the /e-invoicing pillar. Every article carries a direct-answer paragraph, fact box, table of contents, compliance checklist, authority citations, and an expanded FAQ.

${cluster.map((c) => `- [${c.title}](${BASE}/en/blog/${c.slug})`).join('\n')}

## Core Products

- [E-Invoicing](${BASE}/en/e-invoicing): The mandate-compliant e-invoicing platform: ${mandates.length} live mandates with CSID, IRN, UUID, QR, and Peppol routing.
- [Invoicing](${BASE}/en/invoicing): Everyday professional invoicing: templates, reminders, multi-currency, payments.
- [Expenses](${BASE}/en/expenses): Receipt scanning (OCR), automatic categorization, tax-deductible expense identification.
- [Payments](${BASE}/en/payments): Accept payments via Stripe (US, UK, Canada, Australia, Europe) and Paystack (Nigeria, Ghana, Kenya, South Africa).
- [Accounting](${BASE}/en/accounting): Automated bookkeeping, chart of accounts, financial reports, multi-entity support.
- [Estimates](${BASE}/en/estimates): Quotes and proposals with one-click conversion to invoices.
- [Receipts](${BASE}/en/receipts): Payment receipts with OCR scanning and compliance-ready storage.

## Who It's For

Freelancers, consultants, contractors, small businesses, agencies, photographers, lawyers, accountants, and e-commerce sellers operating across one or more of the ${mandates.length} supported e-invoicing mandates.

## Pricing

Paid-only: no free plan or free trial.

- **Pro** ($15/month, recommended): Unlimited invoices, receipts, clients, and currency accounts; up to 5 team members; full audit trail; custom branding; data exports; watermark-free PDFs; all mandate-compliant e-invoicing capabilities.
- **SME** ($49/month): Pro plus unlimited team members, online payments, advanced reports, premium templates.
- **Biz** (custom): SME plus dedicated account manager, custom integrations, SLA guarantee, priority support.

Annual billing saves approximately 17%. Cancel anytime.

## Comparisons

- [vs QuickBooks](${BASE}/en/compare/invoicemonk-vs-quickbooks)
- [vs FreshBooks](${BASE}/en/compare/invoicemonk-vs-freshbooks)
- [vs Wave](${BASE}/en/compare/invoicemonk-vs-wave)
- [vs Zoho Invoice](${BASE}/en/compare/invoicemonk-vs-zoho-invoice)

The defensible wedge across all comparisons: e-invoicing mandate coverage. None of the above match Invoicemonk's ${mandates.length}-mandate live footprint with a single platform.

## Key Differentiators

1. **Mandate-compliant by default**: ${mandates.length} live e-invoicing mandates, not roadmap items
2. **Local artefact, every jurisdiction**: CSID, IRN, UUID, QR, fiscal signature, ICP-Brasil, XAdES
3. **One platform, all transports**: direct API, Peppol Access Point, national portals
4. **Real-time clearance and reporting** where mandated (ZATCA, MyInvois, eTIMS, ZIMRA FDMS)
5. **Affordable**: Pro from $15/month
6. **Single language**: English (en) — no per-country localisation; product ships globally in one locale

## Mobile Apps

- Android: https://play.google.com/store/apps/details?id=com.invoicemonk.app (${BASE}/en/mobile)
- iOS: not yet available

## Contact

- Website: ${BASE}
- E-Invoicing platform: ${BASE}/en/e-invoicing
- Contact: ${BASE}/en/contact
- Sign up: https://app.invoicemonk.com/signup?plan=professional
`;

fs.writeFileSync(SITE_PATH, out, 'utf-8');
console.log(`✅ Wrote ${SITE_PATH} (${mandates.length} mandates, ${cluster.length} cluster posts)`);
