import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';

const mandates = [
  { region: 'Asia-Pacific', countries: [
    { name: 'India', system: 'GST E-Invoicing (IRP)', status: 'live', threshold: '₹5 crore+', link: '/e-invoicing/gst-irn-india', detail: 'Mandatory since 2020 (phased). IRN via IRP. Expanding to all GST-registered businesses.' },
    { name: 'Malaysia', system: 'MyInvois (LHDN)', status: 'live', threshold: 'Phased rollout, all taxpayers by Jul 2025', link: '/e-invoicing/myinvois-malaysia', detail: 'Mandatory for businesses with RM100M+ turnover from Aug 2024. Full rollout by July 2025.' },
    { name: 'Philippines', system: 'BIR CAS', status: 'live', threshold: 'Large taxpayers + e-commerce', link: '/e-invoicing/bir-cas-philippines', detail: 'BIR Computerized Accounting System for the large-taxpayer service and e-commerce platforms.' },
    { name: 'Australia', system: 'Peppol e-Invoicing', status: 'live', threshold: 'Government suppliers', link: '/e-invoicing/peppol-eu', detail: 'Mandatory for government suppliers. Voluntary for B2B via Peppol network.' },
  ]},
  { region: 'Africa', countries: [
    { name: 'Nigeria', system: 'FIRS Merchant-Buyer Solution', status: 'live', threshold: 'Phased rollout (large from Aug 2025)', link: '/e-invoicing/firs-mbs-nigeria', detail: 'Mandatory for large taxpayers (Aug 2025). SMEs phasing in from Jan 2026.' },
    { name: 'Kenya', system: 'KRA eTIMS', status: 'live', threshold: 'All VAT-registered', link: '/e-invoicing/kra-etims-kenya', detail: 'Mandatory for all VAT-registered businesses. eTIMS device or software required.' },
    { name: 'Ghana', system: 'GRA E-VAT', status: 'live', threshold: 'Phased rollout', link: '/e-invoicing/gra-e-vat-ghana', detail: 'Ghana Revenue Authority E-VAT certified-invoice issuance.' },
    { name: 'South Africa', system: 'SARS e-invoicing', status: 'planned', threshold: 'TBD', link: '/e-invoicing/sars-south-africa', detail: 'SARS is reviewing the e-invoicing mandate. Invoicemonk issues structured tax invoices ready for the future regime.' },
    { name: 'Zimbabwe', system: 'ZIMRA FDMS', status: 'live', threshold: 'VAT-registered + fiscalised', link: '/e-invoicing/zimra-zimbabwe', detail: 'ZIMRA Fiscalisation Data Management System fiscal signatures on every invoice.' },
    { name: 'Seychelles', system: 'SRC e-invoicing', status: 'live', threshold: 'VAT-registered', link: '/e-invoicing/src-seychelles', detail: 'Seychelles Revenue Commission structured-invoice regime.' },
  ]},
  { region: 'Europe', countries: [
    { name: 'United Kingdom', system: 'HMRC MTD for VAT', status: 'live', threshold: 'All VAT-registered', link: '/e-invoicing/mtd-uk', detail: 'Making Tax Digital for VAT: digital VAT records and MTD-API returns since April 2022.' },
    { name: 'EU (Peppol BIS Billing 3.0)', system: 'Peppol four-corner network', status: 'live', threshold: 'All EU B2G; B2B per country', link: '/e-invoicing/peppol-eu', detail: 'Peppol BIS 3.0 routing via certified Access Point — covers Italy SDI, Romania e-Factura, Hungary NAV, Poland KSeF, Germany XRechnung, France B2B, Belgium 2026.' },
    { name: 'EU-wide', system: 'ViDA Directive (planned)', status: 'planned', threshold: 'All cross-border B2B', link: '/e-invoicing', detail: 'VAT in the Digital Age: mandatory cross-border e-invoicing planned for 2028-2030. Invoicemonk ready via Peppol.' },
  ]},
  { region: 'Middle East', countries: [
    { name: 'Saudi Arabia (Phase 2)', system: 'ZATCA Fatoorah — Integration', status: 'live', threshold: 'All VAT-registered (waves)', link: '/e-invoicing/zatca-phase-2', detail: 'CSID-signed UBL 2.1 cleared through Fatoorah (B2B) / reported (B2C).' },
    { name: 'Saudi Arabia (Phase 1)', system: 'ZATCA Fatoorah — Generation', status: 'live', threshold: 'All VAT-registered not yet on Phase 2', link: '/e-invoicing/zatca-phase-1', detail: 'Tamper-resistant structured invoices with QR on Simplified Tax Invoices.' },
  ]},
  { region: 'Americas', countries: [
    { name: 'Brazil', system: 'NF-e / NFS-e (SEFAZ)', status: 'live', threshold: 'All businesses', link: '/e-invoicing/sef-brazil', detail: 'NF-e signed with ICP-Brasil A1 and authorised by SEFAZ; Chave de Acesso on every invoice.' },
    { name: 'United States (B2G)', system: 'US Federal B2G', status: 'live', threshold: 'Federal suppliers', link: '/e-invoicing/b2g-us', detail: 'Treasury Bureau of the Fiscal Service Invoice Processing Platform for federal B2G.' },
    { name: 'Canada', system: 'CRA + Peppol Authority Canada', status: 'live', threshold: 'GST/HST registrants', link: '/e-invoicing/cra-peppol-canada', detail: 'CRA-compliant tax invoices, Peppol routing where the buyer has a Canadian participant ID.' },
  ]},
];

const statusColors: Record<string, string> = {
  live: 'bg-green-500/10 text-green-700',
  upcoming: 'bg-amber-500/10 text-amber-700',
  planned: 'bg-blue-500/10 text-blue-700',
  none: 'bg-muted text-muted-foreground',
};
const statusLabels: Record<string, string> = { live: 'Live', upcoming: 'Upcoming', planned: 'Planned', none: 'No Mandate' };

export default function EInvoicingMandatesGuide() {
  return (
    <Layout>
      <SEOHead title="E-Invoicing Mandates by Country 2026 — Global Tracker | Invoicemonk" description="Track e-invoicing mandates worldwide: which countries require electronic invoicing, deadlines, thresholds, and compliance requirements. Updated for 2026." />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'E-Invoicing Mandates', url: '/guides/e-invoicing-mandates' }]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-primary mb-4"><Globe className="w-4 h-4" /> Global Tracker</div>
          <h1 className="text-heading-xl font-bold text-foreground mb-4">E-Invoicing Mandates by Country (2026)</h1>
          <p className="text-lg text-muted-foreground mb-12">Over 80 countries have implemented or announced e-invoicing mandates. This tracker covers the key markets with deadlines, thresholds, and links to detailed compliance guides.</p>

          {mandates.map((region) => (
            <div key={region.region} className="mb-12">
              <h2 className="text-heading-md font-bold text-foreground mb-6">{region.region}</h2>
              <div className="space-y-4">
                {region.countries.map((c) => (
                  <Link key={c.name} to={c.link}>
                    <Card className="hover:border-primary/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <h3 className="font-semibold text-foreground">{c.name}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[c.status]}`}>{statusLabels[c.status]}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground mt-1" />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">{c.system} · Threshold: {c.threshold}</p>
                        <p className="text-sm text-muted-foreground">{c.detail}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Stay Compliant Everywhere</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Invoicemonk supports tax compliance for 14+ countries. Pro from $15/month — cancel anytime.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?plan=professional&utm_source=guide&utm_medium=cta&utm_campaign=einvoicing" target="_blank" rel="noopener noreferrer">Get started with Invoicemonk<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
