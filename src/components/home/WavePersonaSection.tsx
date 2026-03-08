import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { useTranslation } from 'react-i18next';
import personaFreelancer from '@/assets/persona-freelancer.jpg';
import personaConsultant from '@/assets/persona-consultant.jpg';
import personaSmallBusiness from '@/assets/persona-smallbusiness.jpg';
import personaContractor from '@/assets/persona-contractor.jpg';

const personaMeta = [
  { image: personaFreelancer, link: '/freelancers' },
  { image: personaConsultant, link: '/consultants' },
  { image: personaSmallBusiness, link: '/small-businesses' },
  { image: personaContractor, link: '/contractors' },
];

export function WavePersonaSection() {
  const { t } = useTranslation('home');
  const itemsRaw = t('personas.items', { returnObjects: true });
  const items = Array.isArray(itemsRaw) ? itemsRaw : [];

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-h2 mb-4 text-white">
            {t('personas.heading')}{' '}
            <span className="font-serif italic text-white/90">{t('personas.headingAccent')}</span>
          </h2>
          <p className="text-body-lg text-white/80">
            {t('personas.subtitle')}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((persona, i) => (
            <StaggerItem key={i}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
                <Link to={personaMeta[i]?.link || '/'} className="block group">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors">
                    <div className="aspect-[4/3] bg-primary-foreground/5">
                      <img
                        src={personaMeta[i]?.image}
                        alt={persona.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold group-hover:underline underline-offset-4">
                          {persona.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <p className="text-white/75">{persona.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
