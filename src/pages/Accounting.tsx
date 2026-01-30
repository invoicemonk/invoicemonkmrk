import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, BookOpen, FileSpreadsheet, TrendingUp, Building2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';

const plannedFeatures = [
  {
    icon: BookOpen,
    title: 'Double-Entry',
    description: 'Full double-entry bookkeeping with chart of accounts.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Financial Statements',
    description: 'Balance sheets, P&L, and cash flow statements.',
  },
  {
    icon: TrendingUp,
    title: 'Tax Reports',
    description: 'Generate tax-ready reports for your accountant.',
  },
  {
    icon: Building2,
    title: 'Multi-Entity',
    description: 'Manage multiple businesses from one dashboard.',
  },
];

const bannerFeatures = [
  'Double-entry bookkeeping',
  'Financial statements',
  'Tax-ready reports',
  'Multi-entity support',
];

const Accounting = () => {
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
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                Full Accounting,{' '}
                <span className="font-serif italic text-primary">made simple</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Complete accounting software with double-entry bookkeeping, financial 
                statements, and tax reports — all with Invoicemonk's compliance guarantees.
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
                  <h3 className="text-body font-semibold text-heading">Financial Overview</h3>
                  <span className="text-caption text-muted-foreground">Q4 2024</span>
                </div>
                
                {/* Balance Sheet Preview */}
                <div className="space-y-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-caption text-muted-foreground mb-2">Balance Sheet</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-body-sm">
                        <span className="text-foreground">Total Assets</span>
                        <span className="font-medium text-heading">$124,500</span>
                      </div>
                      <div className="flex justify-between text-body-sm">
                        <span className="text-foreground">Total Liabilities</span>
                        <span className="font-medium text-heading">$42,300</span>
                      </div>
                      <div className="h-px bg-border my-2" />
                      <div className="flex justify-between text-body-sm font-semibold">
                        <span className="text-primary">Equity</span>
                        <span className="text-primary">$82,200</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-wave-green/10 rounded-xl p-3">
                      <div className="text-caption text-wave-green mb-1">Revenue</div>
                      <div className="text-h4 font-bold text-wave-green">$48,200</div>
                    </div>
                    <div className="bg-wave-orange/10 rounded-xl p-3">
                      <div className="text-caption text-wave-orange mb-1">Expenses</div>
                      <div className="text-h4 font-bold text-wave-orange">$31,400</div>
                    </div>
                  </div>
                </div>

                {/* Chart of Accounts Preview */}
                <div className="border-t border-border pt-4">
                  <div className="text-caption text-muted-foreground mb-3">Chart of Accounts</div>
                  <div className="space-y-2">
                    {['1000 - Cash', '1200 - Accounts Receivable', '2000 - Accounts Payable', '4000 - Revenue'].map((account, i) => (
                      <div key={account} className="flex items-center gap-2 text-body-sm text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                        {account}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title="Accounting that works for you"
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
              Professional accounting tools built on top of your invoicing data.
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
              While Accounting is in development, get started with our flagship invoicing product 
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

export default Accounting;
