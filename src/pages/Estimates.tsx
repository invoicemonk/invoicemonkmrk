import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCheck, ArrowRight, FileText, CheckCircle, Clock, RefreshCw } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

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

const Estimates = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground mb-6"
            >
              <span className="text-body-sm font-medium">Coming Soon</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                <FileCheck className="w-8 h-8 text-muted-foreground" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-display text-heading mb-6"
            >
              Professional Estimates,{' '}
              <span className="text-muted-foreground">Streamlined</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Create professional quotes, get client approval, and convert to invoices 
              with one click. The complete estimate-to-payment workflow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-12 text-body"
              >
                <a href="https://app.invoicemonk.com/signup">
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-body border-border hover:bg-muted"
              >
                <Link to="/invoicing">Start with Invoicing</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planned Features */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">What's coming</h2>
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
                  className="bg-background rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-muted-foreground" />
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-h3 text-heading mb-4">Start with Invoicing today</h2>
            <p className="text-body text-muted-foreground mb-8">
              While Estimates is in development, get started with our flagship invoicing product 
              and be first to access new features.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/invoicing">Explore Invoicing</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Estimates;
