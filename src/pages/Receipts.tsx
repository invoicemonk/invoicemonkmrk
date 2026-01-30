import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Receipt, ArrowRight, Camera, FolderOpen, Search, Cloud } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { useLocale } from '@/hooks/useLocale';

const plannedFeatures = [
  {
    icon: Camera,
    title: 'OCR Scanning',
    description: 'Extract data from receipts automatically with AI.',
  },
  {
    icon: FolderOpen,
    title: 'Smart Organization',
    description: 'Receipts are auto-organized by date, vendor, and category.',
  },
  {
    icon: Search,
    title: 'Instant Search',
    description: 'Find any receipt in seconds with full-text search.',
  },
  {
    icon: Cloud,
    title: 'Secure Storage',
    description: 'Cloud backup with compliance-ready retention policies.',
  },
];

const bannerFeatures = [
  'AI-powered OCR',
  'Instant search',
  'Secure cloud storage',
  'Tax-ready exports',
];

const Receipts = () => {
  const { formatCurrency } = useLocale();

  const receipts = [
    { vendor: 'Office Depot', amount: 142.50, category: 'Supplies', date: 'Today' },
    { vendor: 'Zoom Pro', amount: 19.99, category: 'Software', date: 'Yesterday' },
    { vendor: 'United Airlines', amount: 340, category: 'Travel', date: 'Mon' },
    { vendor: 'Starbucks', amount: 18.45, category: 'Meals', date: 'Mon' },
  ];

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
                  <Receipt className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                Never lose a receipt{' '}
                <span className="font-serif italic text-primary">again</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Capture, organize, and store all your receipts digitally. Never lose 
                a receipt again with AI-powered scanning and smart organization.
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-body font-semibold text-heading">Recent Receipts</h3>
                  <span className="text-caption text-muted-foreground">12 this week</span>
                </div>
                
                <div className="space-y-4">
                  {receipts.map((receipt, index) => (
                    <motion.div
                      key={receipt.vendor}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Receipt className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-body-sm font-medium text-foreground truncate">{receipt.vendor}</span>
                          <span className="text-body-sm font-semibold text-heading">{formatCurrency(receipt.amount)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-caption text-muted-foreground">{receipt.category}</span>
                          <span className="text-caption text-muted-foreground">{receipt.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating decoration */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-soft-lg p-3 border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-wave-green/10 flex items-center justify-center">
                    <Camera className="w-4 h-4 text-wave-green" />
                  </div>
                  <span className="text-body-sm font-medium text-foreground">Scan new receipt</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title="Digital receipts, organized automatically"
        features={bannerFeatures}
        variant="primary"
      />

      {/* Planned Features */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              What's <span className="font-serif italic text-primary">coming</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Digital receipt management that integrates with your expense tracking.
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
              While Receipts is in development, get started with our flagship invoicing product 
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

export default Receipts;
