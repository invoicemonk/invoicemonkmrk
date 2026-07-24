import { useState, FormEvent } from 'react';
import { Apple, CheckCircle2, ArrowLeft, Camera, Cloud, Shield } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { supabase } from '@/integrations/supabase/client';

export default function WaitlistIOS() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const { data, error } = await supabase.functions.invoke('subscribe-marketing-lead', {
        body: { firstName: firstName.trim(), email: email.trim(), source: 'ios_waitlist_receipts' },
      });
      if (error) throw new Error(error.message || 'Something went wrong');
      if (!data?.success) throw new Error('Could not join the waitlist');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <Layout>
      <SEOHead
        title="iPhone Receipt Scanner App — Join the iOS Waitlist | Invoicemonk"
        description="The Invoicemonk iOS receipt scanner app is coming to iPhone. Join the waitlist and be first to scan receipts, track expenses, and sync to your Invoicemonk account."
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Receipts', url: '/receipts' },
        { name: 'iOS Waitlist', url: '/receipts/waitlist-ios' },
      ]} />

      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Link to="/receipts" className="inline-flex items-center gap-2 text-body-sm text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to receipts
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Apple className="w-4 h-4" />
              <span className="text-body-sm font-medium">Coming to iPhone</span>
            </div>

            <h1 className="text-display text-heading mb-5">
              Get the Invoicemonk receipt scanner on <span className="font-serif italic text-primary">iPhone</span>
            </h1>
            <p className="text-body-lg text-muted-foreground mb-10">
              The iOS receipt scanner app is in active development. Join the waitlist and we'll email you the moment it hits the App Store — plus a heads-up when TestFlight opens.
            </p>

            {status === 'success' ? (
              <div className="rounded-2xl border border-wave-green/30 bg-wave-green/5 p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-wave-green mx-auto mb-4" />
                <h2 className="text-h3 text-heading mb-2">You're on the list</h2>
                <p className="text-body text-muted-foreground mb-6">
                  We'll email {email} the moment the iOS app is available.
                </p>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/receipts">Back to receipts</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-soft-md space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-body-sm font-medium text-foreground mb-2">First name</label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    maxLength={50}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background text-body focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Ada"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-body-sm font-medium text-foreground mb-2">Email address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background text-body focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="you@example.com"
                  />
                </div>
                {errorMsg && (
                  <p className="text-body-sm text-destructive">{errorMsg}</p>
                )}
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  size="lg"
                  className="w-full rounded-full h-12 text-body bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {status === 'loading' ? 'Joining…' : 'Join the iOS waitlist'}
                </Button>
                <p className="text-caption text-muted-foreground text-center">
                  No spam. One email when the app launches, that's it.
                </p>
              </form>
            )}

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {[
                { icon: Camera, title: 'AI-powered OCR', text: 'Vendor, date, tax, and total in seconds.' },
                { icon: Cloud, title: 'Syncs to web app', text: 'Every scan lands in your Invoicemonk account.' },
                { icon: Shield, title: 'Bank-level security', text: 'Encrypted in transit and at rest.' },
              ].map((f) => (
                <div key={f.title} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-body font-semibold text-heading mb-1">{f.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-body-sm text-muted-foreground">
              On Android now?{' '}
              <a
                href="https://play.google.com/store/apps/details?id=com.invoicemonk.app&utm_source=invoicemonk_site&utm_medium=ios_waitlist&utm_campaign=cross_platform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:opacity-90"
              >
                Get it on Google Play
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}