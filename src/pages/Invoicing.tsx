import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Check, ArrowRight, Send, Clock, Globe, Users, Shield, Repeat } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTestimonials } from '@/components/home/WaveTestimonials';
import { WaveCTASection } from '@/components/home/WaveCTASection';

const features = [
  {
    icon: FileText,
    title: 'Professional Templates',
    description: 'Choose from beautiful, customizable invoice templates that reflect your brand. Add your logo, colors, and payment terms.',
  },
  {
    icon: Repeat,
    title: 'Recurring Invoices',
    description: 'Set up automatic invoicing for retainer clients. Schedule, customize, and forget — invoices go out on time, every time.',
  },
  {
    icon: Send,
    title: 'Automatic Reminders',
    description: 'Never chase payments manually. Set up smart reminder sequences that follow up on overdue invoices automatically.',
  },
  {
    icon: Globe,
    title: 'Multi-Currency Support',
    description: 'Invoice clients worldwide in their preferred currency. Automatic exchange rate updates and clear conversion displays.',
  },
  {
    icon: Users,
    title: 'Client Portal',
    description: 'Give clients a branded portal to view invoices, make payments, and access their complete invoice history.',
  },
  {
    icon: Clock,
    title: 'Payment Tracking',
    description: 'Real-time status updates on every invoice. Know instantly when invoices are viewed, paid, or overdue.',
  },
];

const bannerFeatures = [
  'Send professional invoices in minutes',
  'Get paid faster with payment links',
  'Automatic overdue reminders',
  'Complete audit trail for compliance',
];

const complianceFeatures = [
  'Immutable invoice records that cannot be altered after creation',
  'Complete audit trail with timestamps and user identity',
  'Hash-based integrity verification for every document',
  'Regulatory-compliant storage and retention policies',
  'Export-ready reports for auditors and regulators',
  'Cryptographic proof of document authenticity',
];

const Invoicing = () => {
  return (
    <Layout>
      {/* Hero Section - Wave style with split layout */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wave-green/10 text-wave-green mb-6"
              >
                <Check className="w-4 h-4" />
                <span className="text-body-sm font-medium">Available Now</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-display text-heading mb-6"
              >
                Invoicing software that makes you{' '}
                <span className="font-serif italic text-primary">look good</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Create beautiful invoices in seconds, automate payment reminders, and maintain 
                complete audit trails. Professional invoicing that's ready for any audit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md group"
                >
                  <a href="https://app.invoicemonk.com/signup">
                    Start Invoicing Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-body border-border hover:bg-muted"
                >
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-body-sm text-muted-foreground mt-6"
              >
                Free to use • No credit card required
              </motion.p>
            </div>

            {/* Right - Product Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">IM</span>
                    </div>
                    <div>
                      <div className="text-body-sm font-medium text-heading">Invoice #1042</div>
                      <div className="text-caption text-muted-foreground">Acme Corporation</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-caption font-medium rounded-full bg-wave-green/10 text-wave-green">
                    Paid
                  </span>
                </div>
                
                <div className="space-y-3 mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-muted-foreground">Web Design Services</span>
                    <span className="text-foreground font-medium">$2,000.00</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-muted-foreground">Annual Hosting</span>
                    <span className="text-foreground font-medium">$450.00</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-muted-foreground">Total</span>
                  <span className="text-h3 font-bold text-heading">$2,450.00</span>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-soft-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-wave-green/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-wave-green" />
                  </div>
                  <div>
                    <p className="text-body-sm font-medium text-foreground">Payment received</p>
                    <p className="text-caption text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner - Wave style */}
      <WaveFeatureBanner 
        title="Stop chasing clients around"
        features={bannerFeatures}
      />

      {/* Features Grid */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-h2 text-heading mb-4">
              Everything you need to{' '}
              <span className="font-serif italic text-primary">get paid</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Powerful invoicing features designed for modern businesses. Simple to use, professional results.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              
              return (
                <StaggerItem key={feature.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-2">{feature.title}</h3>
                    <p className="text-body text-muted-foreground">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Compliance Section - Wave alternating layout */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <span className="inline-block px-3 py-1 text-caption font-medium rounded-full bg-primary/10 text-primary mb-4">
                  Compliance Built-In
                </span>
                <h2 className="text-h2 text-heading mb-6">
                  Audit-ready from{' '}
                  <span className="font-serif italic text-primary">day one</span>
                </h2>
                <p className="text-body-lg text-muted-foreground mb-8">
                  Every invoice you create is automatically protected with immutable records and 
                  complete audit trails. Be confident your invoicing meets any regulatory requirement.
                </p>
                
                <ul className="space-y-4">
                  {complianceFeatures.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-wave-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-wave-green" />
                      </div>
                      <span className="text-body text-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="text-body font-semibold text-heading">Audit Trail</h4>
                        <p className="text-body-sm text-muted-foreground">Invoice #1042</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { action: 'Invoice created', time: 'Jan 15, 2024 9:32 AM', user: 'John D.' },
                        { action: 'Sent to client', time: 'Jan 15, 2024 9:33 AM', user: 'System' },
                        { action: 'Viewed by client', time: 'Jan 15, 2024 2:15 PM', user: 'Client' },
                        { action: 'Payment received', time: 'Jan 17, 2024 10:42 AM', user: 'System' },
                      ].map((log, index) => (
                        <div key={index} className="flex items-start gap-3 text-body-sm">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{log.action}</p>
                            <p className="text-muted-foreground">{log.time} • {log.user}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-caption text-muted-foreground">
                        Hash: a7f3b9c2d1e8...4k9m
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <WaveTestimonials />
      <WaveCTASection />
    </Layout>
  );
};

export default Invoicing;
