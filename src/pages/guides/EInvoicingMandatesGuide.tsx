import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';

const mandates = [
  { region: 'Asia-Pacific', countries: [
    { name: 'India', system: 'GST E-Invoicing (IRP)', status: 'live', threshold: '₹5 crore+', link: '/blog/e-invoicing-india-gst-guide', detail: 'Mandatory since 2020 (phased). IRN via IRP. Expanding to all GST-registered businesses.' },
    { name: 'Malaysia', system: 'MyInvois (LHDN)', status: 'upcoming', threshold: 'All businesses by 2026', link: '/compliance', detail: 'Mandatory for businesses with RM100M+ turnover from Aug 2024. Full rollout by July 2025.' },
    { name: 'Australia', system: 'Peppol e-Invoicing', status: 'live', threshold: 'Government suppliers', link: '/blog/ato-invoice-requirements-australian-compliance', detail: 'Mandatory for government suppliers. Voluntary for B2B via Peppol network.' },
  ]},
  { region: 'Africa', countries: [
    { name: 'Nigeria', system: 'FIRS TaxPro-Max', status: 'live', threshold: 'Phased rollout', link: '/blog/e-invoicing-nigeria-firs-guide', detail: 'Mandatory for large taxpayers (Aug 2025). SMEs phasing in from Jan 2026.' },
    { name: 'Kenya', system: 'KRA eTIMS', status: 'live', threshold: 'All VAT-registered', link: '/blog/e-invoicing-kenya-etims', detail: 'Mandatory for all VAT-registered businesses. eTIMS device or software required.' },
    { name: 'South Africa', system: 'SARS (under review)', status: 'planned', threshold: 'TBD', link: '/blog/sars-invoice-requirements-south-africa', detail: 'SARS is reviewing e-invoicing mandate. No confirmed timeline yet.' },
  ]},
  { region: 'Europe', countries: [
    { name: 'Italy', system: 'SDI', status: 'live', threshold: 'All businesses', link: '/blog/tax-compliant-invoice-it', detail: 'Mandatory since 2019 for all Italian businesses and cross-border B2B from 2022.' },
    { name: 'Poland', system: 'KSeF', status: 'upcoming', threshold: 'All businesses by 2026', link: '/blog/tax-compliant-invoice-pl', detail: 'Krajowy System e-Faktur mandatory from Feb 2026 for all VAT-registered businesses.' },
    { name: 'Romania', system: 'RO e-Factura', status: 'live', threshold: 'All B2B', link: '/blog/tax-compliant-invoice-ro', detail: 'Mandatory for all B2B domestic transactions since January 2024.' },
    { name: 'Germany', system: 'ZUGFeRD / XRechnung', status: 'live', threshold: 'B2G mandatory, B2B from 2025', link: '/blog/tax-compliant-invoice-de', detail: 'B2G mandatory via Peppol. B2B e-invoicing obligation started Jan 2025.' },
    { name: 'Hungary', system: 'NAV RTIR', status: 'live', threshold: 'All VAT invoices', link: '/blog/tax-compliant-invoice-hu', detail: 'Real-time invoice reporting mandatory for all invoices with VAT above HUF 100,000.' },
    { name: 'EU-wide', system: 'ViDA Directive', status: 'planned', threshold: 'All cross-border B2B', link: '/compliance', detail: 'VAT in the Digital Age: mandatory cross-border e-invoicing planned for 2028-2030.' },
  ]},
  { region: 'Middle East', countries: [
    { name: 'Saudi Arabia', system: 'ZATCA Fatoorah', status: 'live', threshold: 'All VAT-registered', link: '/compliance', detail: 'Phase 1 (generation) mandatory since Dec 2021. Phase 2 (integration) rolling out by group.' },
  ]},
  { region: 'Americas', countries: [
    { name: 'United States', system: 'No federal mandate', status: 'none', threshold: 'N/A', link: '/blog/irs-invoice-requirements-us-compliance', detail: 'No federal e-invoicing mandate. Some states exploring digital reporting. Business Networks (Peppol) voluntary.' },
    { name: 'Canada', system: 'No mandate', status: 'none', threshold: 'N/A', link: '/blog/cra-invoice-standards-canadian-compliance', detail: 'No e-invoicing mandate. CRA exploring digital reporting options.' },
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
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Invoicemonk supports tax compliance for 14+ countries. Create compliant invoices — free.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
