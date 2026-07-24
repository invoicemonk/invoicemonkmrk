import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { MobileApplicationSchema } from '@/components/seo/MobileApplicationSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { GooglePlayBadge } from '@/components/marketing/GooglePlayBadge';
import { Smartphone, Check, ScanLine, Bell, Users, FileCheck } from 'lucide-react';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.invoicemonk.app';

const parity = [
  { feature: 'Create and send invoices', web: true, mobile: true },
  { feature: 'Scan receipts with OCR', web: true, mobile: true },
  { feature: 'Track payments and reminders', web: true, mobile: true },
  { feature: 'Client management', web: true, mobile: true },
  { feature: 'Multi-currency', web: true, mobile: true },
  { feature: 'Mandate-compliant e-invoicing (ZATCA, MyInvois, FIRS, Peppol…)', web: true, mobile: true },
  { feature: 'Bulk imports and advanced reports', web: true, mobile: false },
  { feature: 'Team member management', web: true, mobile: false },
];

const faqs = [
  {
    question: 'Is Invoicemonk available on iOS?',
    answer:
      'Not yet. The Invoicemonk mobile app is currently available on Android via Google Play. The full Invoicemonk web app works on any iPhone browser in the meantime.',
  },
  {
    question: 'Does the mobile app support e-invoicing mandates?',
    answer:
      'Yes. The Android app connects to the same backend as the web app, so invoices you create on your phone still carry the local mandate artefact (CSID, IRN, UUID, QR, Peppol routing, etc.) required by your jurisdiction.',
  },
  {
    question: 'Is the Android app free?',
    answer:
      'The app itself is free to install. You need an Invoicemonk subscription (Pro from $15/month) to create and send invoices.',
  },
  {
    question: 'Do I need a separate account for the app?',
    answer:
      'No. Sign in with your existing Invoicemonk account and your clients, invoices, and settings sync automatically.',
  },
];

export default function Mobile() {
  return (
    <>
      <SEOHead
        title="Invoicemonk for Android — Mobile Invoicing App | Invoicemonk"
        description="Download the Invoicemonk Android app on Google Play. Create mandate-compliant invoices, scan receipts, and track payments from your phone. iOS coming later."
      />
      <MobileApplicationSchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Mobile app', url: '/mobile' }]} />
      <FAQSchema items={faqs} />
      <Layout>
        <section className="bg-gradient-to-b from-background to-primary-soft py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-body-sm font-medium text-primary">Now on Google Play</span>
              </div>
              <h1 className="text-display text-heading mb-6">
                Invoicemonk on <span className="font-serif italic text-primary">Android</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Create mandate-compliant invoices, scan receipts, and get paid — all from your phone.
                Same account, same compliance, same audit trail as the web app.
              </p>
              <div className="flex items-center justify-center">
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Get Invoicemonk on Google Play">
                  <GooglePlayBadge height={60} />
                </a>
              </div>
              <p className="text-caption text-muted-foreground mt-4">
                iOS app is not available yet.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-h2 text-heading text-center mb-12">What you can do on mobile</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: FileCheck, title: 'Send compliant invoices', body: 'Create and issue invoices that carry the local mandate artefact for your jurisdiction.' },
                  { icon: ScanLine, title: 'Scan receipts', body: 'Snap a photo, OCR extracts the fields, and expenses are categorised automatically.' },
                  { icon: Bell, title: 'Track and remind', body: 'See what is paid, what is overdue, and send reminders in a tap.' },
                  { icon: Users, title: 'Manage clients', body: 'Full client history — invoices, payments, notes — in your pocket.' },
                ].map((f) => (
                  <div key={f.title} className="p-6 rounded-2xl border border-border bg-card">
                    <f.icon className="w-6 h-6 text-primary mb-4" />
                    <h3 className="text-h5 text-heading mb-2">{f.title}</h3>
                    <p className="text-body-sm text-muted-foreground">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-primary-soft/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 text-heading text-center mb-10">Web vs mobile: what works where</h2>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <table className="w-full text-body-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-heading">Feature</th>
                      <th className="p-4 font-semibold text-heading">Web</th>
                      <th className="p-4 font-semibold text-heading">Android</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parity.map((row) => (
                      <tr key={row.feature} className="border-t border-border">
                        <td className="p-4 text-foreground">{row.feature}</td>
                        <td className="p-4 text-center">{row.web ? <Check className="w-4 h-4 text-primary mx-auto" /> : '—'}</td>
                        <td className="p-4 text-center">{row.mobile ? <Check className="w-4 h-4 text-primary mx-auto" /> : '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 text-heading text-center mb-10">FAQ</h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.question} className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="text-h5 text-heading mb-2">{f.question}</h3>
                    <p className="text-body-sm text-muted-foreground">{f.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Get Invoicemonk on Google Play" className="inline-block">
                  <GooglePlayBadge height={60} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
