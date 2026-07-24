import { Layout } from '@/components/layout/Layout';
import { Link } from '@/components/LocalizedLink';
import { Card, CardContent } from '@/components/ui/card';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ItemListSchema } from '@/components/seo/ItemListSchema';

interface Entry {
  title: string;
  desc: string;
  to: string;
}
interface Group {
  heading: string;
  intro: string;
  entries: Entry[];
}

const groups: Group[] = [
  {
    heading: 'Head-to-head vs competitors',
    intro: 'Direct comparisons between Invoicemonk and a named competitor — pricing, features, and who each is best for.',
    entries: [
      { title: 'Invoicemonk vs FreshBooks', desc: 'Premium invoicing UX vs global compliance and multi-currency at $15/mo.', to: '/compare/invoicemonk-vs-freshbooks' },
      { title: 'Invoicemonk vs Wave', desc: 'Full accounting comparison — US/CA-only Wave vs global Invoicemonk.', to: '/compare/invoicemonk-vs-wave' },
      { title: 'Invoicemonk vs Zoho Invoice', desc: 'Zoho ecosystem vs standalone invoicing with 40+ tax regimes.', to: '/compare/invoicemonk-vs-zoho-invoice' },
      { title: 'Invoicemonk vs QuickBooks', desc: 'Big-brand accounting vs invoicing-first workflow.', to: '/compare/invoicemonk-vs-quickbooks' },
      { title: 'Invoicemonk vs Dext', desc: 'Bookkeeper/accountant OCR vs invoicing + receipts in one account.', to: '/compare/invoicemonk-vs-dext' },
      { title: 'Invoicemonk vs Atoinvoice', desc: 'Head-to-head with Atoinvoice on pricing and compliance.', to: '/compare/invoicemonk-vs-atoinvoice' },
      { title: 'Invoicemonk vs Stripe', desc: 'Payments processor vs full invoicing platform.', to: '/compare/invoicemonk-vs-stripe' },
      { title: 'Invoicemonk vs Stripe Invoicing', desc: 'Stripe\'s invoicing product vs Invoicemonk\'s dedicated workflow.', to: '/compare/invoicemonk-vs-stripe-invoicing' },
      { title: 'Invoicemonk Estimates vs QuickBooks', desc: 'Estimates and proposals — free-form vs QuickBooks templates.', to: '/compare/invoicemonk-estimates-vs-quickbooks' },
      { title: 'Invoicemonk vs Expensify', desc: 'Receipt scanning + reimbursement flows compared.', to: '/compare/invoicemonk-vs-expensify' },
      { title: 'Invoicemonk vs Shoeboxed', desc: 'Mail-in scanning vs mobile-first AI OCR.', to: '/compare/invoicemonk-vs-shoeboxed' },
      { title: 'Invoicemonk vs Wave Receipts', desc: 'The direct alternative after the Wave Receipts app sunset (Feb 2024).', to: '/compare/invoicemonk-vs-wave-receipts' },
    ],
  },
  {
    heading: 'Best-of roundups',
    intro: 'Category leaderboards ranking Invoicemonk against every serious alternative.',
    entries: [
      { title: 'Best invoicing software for freelancers 2026', desc: 'Freelancer-first leaderboard with 8+ tools ranked.', to: '/compare/best-invoicing-software-freelancers' },
      { title: 'Best free invoicing software 2026', desc: 'What "free" really means across the market in 2026.', to: '/compare/best-free-invoicing-software' },
      { title: 'Best receipt scanner app 2026', desc: 'Six scanner apps ranked on OCR accuracy, free tiers, and invoicing integration.', to: '/compare/best-receipt-scanner-app' },
    ],
  },
  {
    heading: 'Best invoicing software by country',
    intro: 'Country-specific comparisons with local compliance (VAT, e-invoicing mandates, tax IDs).',
    entries: [
      { title: 'Best invoicing software USA', desc: 'US freelancers and SMBs — 1099s, sales tax, and Stripe.', to: '/compare/best-invoicing-software-usa' },
      { title: 'Best invoicing software UK', desc: 'HMRC VAT, MTD, and UK-friendly invoicing.', to: '/compare/best-invoicing-software-uk' },
      { title: 'Best invoicing software Canada', desc: 'GST/HST, CRA-ready invoicing, multi-currency for cross-border work.', to: '/compare/best-invoicing-software-canada' },
      { title: 'Best invoicing software Australia', desc: 'ATO GST, ABN validation, and STP-adjacent invoicing.', to: '/compare/best-invoicing-software-australia' },
      { title: 'Best invoicing software France', desc: 'TVA, franchise en base, and the 2026 Factur-X e-invoicing mandate.', to: '/compare/best-invoicing-software-france' },
      { title: 'Best invoicing software Italy', desc: 'SdI e-invoicing, XML FatturaPA, and Italian VAT.', to: '/compare/best-invoicing-software-italy' },
      { title: 'Best invoicing software India', desc: 'GST, IRN, and QR-code compliance for Indian businesses.', to: '/compare/best-invoicing-software-india' },
      { title: 'Best invoicing software Nigeria', desc: 'FIRS e-invoicing, WHT, and Nigerian VAT compliance.', to: '/compare/best-invoicing-software-nigeria' },
      { title: 'Best invoicing software Kenya', desc: 'eTIMS, KRA compliance, and Kenyan VAT.', to: '/compare/best-invoicing-software-kenya' },
      { title: 'Best invoicing software Ghana', desc: 'GRA e-VAT and Ghanaian tax compliance.', to: '/compare/best-invoicing-software-ghana' },
      { title: 'Best invoicing software South Africa', desc: 'SARS VAT and South African invoicing.', to: '/compare/best-invoicing-software-south-africa' },
      { title: 'Best invoicing software Saudi Arabia', desc: 'ZATCA Phase 2 e-invoicing, CSID, and Arabic invoicing.', to: '/compare/best-invoicing-software-saudi-arabia' },
      { title: 'Best invoicing software Malaysia', desc: 'MyInvois e-invoicing and Malaysian SST.', to: '/compare/best-invoicing-software-malaysia' },
    ],
  },
  {
    heading: 'Wave alternatives',
    intro: 'For anyone offboarded from Wave in 2020 or affected by later product changes.',
    entries: [
      { title: 'Wave alternatives (global)', desc: 'Top 4 free and paid Wave alternatives compared.', to: '/compare/wave-alternatives' },
      { title: 'Wave alternative — Nigeria', desc: 'Best Wave replacement for Nigerian freelancers and SMBs.', to: '/compare/wave-alternative-nigeria' },
      { title: 'Wave alternative — UK', desc: 'Best Wave replacement for UK freelancers and SMBs.', to: '/compare/wave-alternative-uk' },
      { title: 'Wave alternative — Australia', desc: 'Best Wave replacement for Australian businesses.', to: '/compare/wave-alternative-australia' },
      { title: 'Wave alternative — South Africa', desc: 'Best Wave replacement for South African businesses.', to: '/compare/wave-alternative-south-africa' },
    ],
  },
];

export default function CompareIndex() {
  const allEntries = groups.flatMap((g) => g.entries);

  return (
    <Layout>
      <SEOHead
        title="Compare Invoicemonk — head-to-head, best-of, and country guides"
        description="Every Invoicemonk comparison in one place: head-to-head vs FreshBooks, Wave, QuickBooks, Zoho, Dext, Expensify and more, plus best-of roundups and country-specific invoicing software guides."
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Compare', url: '/compare' },
        ]}
      />
      <ItemListSchema
        name="Invoicemonk comparison pages"
        items={allEntries.map((e) => ({ name: e.title, url: e.to }))}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-5">
            Compare Invoicemonk
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Every Invoicemonk comparison in one place — head-to-head vs the tools you're weighing,
            best-of roundups for freelancers and receipt scanning, and country-specific guides that
            factor in local tax rules and e-invoicing mandates.
          </p>
        </div>
      </section>

      {groups.map((group, gi) => (
        <section
          key={group.heading}
          className={`py-12 ${gi % 2 === 0 ? 'bg-muted/30' : ''}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-heading-lg font-bold text-foreground mb-2">{group.heading}</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">{group.intro}</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.entries.map((entry) => (
                <Card
                  key={entry.to}
                  className="hover:border-primary/40 transition-colors h-full"
                >
                  <CardContent className="p-5">
                    <Link to={entry.to} className="block">
                      <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                        {entry.title} →
                      </h3>
                      <p className="text-sm text-muted-foreground">{entry.desc}</p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}
