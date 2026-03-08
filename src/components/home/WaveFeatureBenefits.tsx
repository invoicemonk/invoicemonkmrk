import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useTranslation } from 'react-i18next';
import featureRelief from '@/assets/feature-relief.jpg';
import featureProfessional from '@/assets/feature-professional.jpg';
import featureCompliance from '@/assets/feature-compliance.jpg';

const images = [featureRelief, featureProfessional, featureCompliance];
const imageAlts = ['Person relaxed at desk with laptop', 'Professional invoice on screen', 'Audit trail dashboard'];
const reverseFlags = [false, true, false];

export function WaveFeatureBenefits() {
  const { t } = useTranslation('home');
  const itemsRaw = t('benefits.items', { returnObjects: true });
  const items = Array.isArray(itemsRaw) ? itemsRaw : [];

  return (
    <section className="py-20 lg:py-32 bg-primary-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-h2 text-heading mb-4">
            {t('benefits.heading')}{' '}
            <span className="font-serif italic text-primary">{t('benefits.headingAccent')}</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            {t('benefits.subtitle')}
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto space-y-20 lg:space-y-32">
          {items.map((benefit, index) => {
            const reverse = reverseFlags[index] ?? false;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={reverse ? 'lg:col-start-2' : ''}
                  >
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-wave-blue-light to-accent">
                        <img
                          src={images[index]}
                          alt={imageAlts[index]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-2xl -z-10" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: reverse ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={reverse ? 'lg:col-start-1' : ''}
                  >
                    <h3 className="text-h2 text-heading mb-4">{benefit.title}</h3>
                    <p className="text-body-lg text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
