import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCheck, ArrowRight, FileText, CheckCircle, Clock, RefreshCw } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';

const plannedFeatures = [
  {
    icon: FileText,
    title: 'Professional Quotes',
    description: 'Create beautiful estimates that match your brand.',
  },
  {
    icon: CheckCircle,
    title: 'Client Approval',
    description: 'Clients can approve estimates with a single click.',
  },
  {
    icon: RefreshCw,
    title: 'Convert to Invoice',
    description: 'Turn approved estimates into invoices instantly.',
  },
  {
    icon: Clock,
    title: 'Validity Tracking',
    description: 'Set expiration dates and get notified before they lapse.',
  },
];

const bannerFeatures = [
  'Professional quotes',
  'One-click approval',
  'Convert to invoice',
  'Expiration tracking',
];

const Estimates = () => {
  return (
    <Layout>
      {/* Hero Section - Wave style */}
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wave-orange/10 text-wave-orange mb-6"
              >
                <span className="text-body-sm font-medium">Coming Soon</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                Professional Estimates,{' '}
                <span className="font-serif italic text-primary">streamlined</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Create professional quotes, get client approval, and convert to invoices 
                with one click. The complete estimate-to-payment workflow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md group"
                >
                  <a href="https://app.invoicemonk.com/signup">
                    Join the Waitlist
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-body border-border hover:bg-muted"
                >
                  <Link to="/invoicing">Start with Invoicing</Link>
                </Button>
              </motion.div>
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
                  <div>
                    <div className="text-caption text-muted-foreground">Estimate</div>
                    <h3 className="text-body font-semibold text-heading">EST-2024-0042</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-wave-green/10 text-wave-green text-body-sm font-medium">
                    Approved
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="text-caption text-muted-foreground mb-1">Client</div>
                  <div className="text-body font-medium text-heading">Acme Corporation</div>
                </div>
                
                {/* Line Items Preview */}
                <div className="space-y-3 mb-4">
                  <div className="text-caption text-muted-foreground">Line Items</div>
                  {[
                    { item: 'Website Design', qty: 1, price: '$3,500' },
                    { item: 'Development', qty: 40, price: '$4,000' },
                    { item: 'SEO Setup', qty: 1, price: '$800' },
                  ].map((line, i) => (
                    <div key={i} className="flex justify-between items-center text-body-sm bg-muted/30 rounded-lg px-3 py-2">
                      <span className="text-foreground">{line.item}</span>
                      <span className="text-muted-foreground">{line.price}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-body font-medium text-heading">Total</span>
                    <span className="text-h4 font-bold text-primary">$8,300</span>
                  </div>
                </div>

                {/* Convert to Invoice Action */}
                <div className="bg-primary/5 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-primary" />
                    <span className="text-body-sm text-primary font-medium">Convert to Invoice</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title="Estimates that work for you"
        features={bannerFeatures}
        variant="orange"
      />

      {/* Planned Features */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              What's <span className="font-serif italic text-primary">coming</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Estimates that flow seamlessly into your invoicing workflow.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {plannedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-background rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-body font-semibold text-heading mb-2">{feature.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 mb-4">
              Start with Invoicing <span className="font-serif italic">today</span>
            </h2>
            <p className="text-body-lg opacity-80 mb-8">
              While Estimates is in development, get started with our flagship invoicing product 
              and be first to access new features.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-8 h-14 bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground"
              >
                <Link to="/invoicing" className="flex items-center gap-2">
                  Explore Invoicing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Estimates;
