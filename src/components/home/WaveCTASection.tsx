import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useTranslation } from 'react-i18next';

export function WaveCTASection() {
  const { t } = useTranslation('home');
  const badgesRaw = t('cta.badges', { returnObjects: true });
  const badges = Array.isArray(badgesRaw) ? badgesRaw : [];

  return (
    <section className="py-20 lg:py-32 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-h1 lg:text-display mb-6 text-white">
            {t('cta.heading')}{' '}
            <span className="font-serif italic text-primary">{t('cta.headingAccent')}</span>
          </h2>
          <p className="text-body-lg text-white/90 mb-10">
            {t('cta.subtitle')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-lg group"
            >
              <a href="https://app.invoicemonk.com/signup">
                {t('cta.button')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-body-sm text-white/80">
                <Check className="w-4 h-4 text-primary" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
