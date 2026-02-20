import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { useLocale } from '@/hooks/useLocale';

export function TestimonialsSection() {
  const { locale } = useLocale();
  const testimonials = locale.content.testimonials;

  return (
    <section className="py-20 lg:py-32 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-medium text-body mb-2">Testimonials</p>
          <h2 className="text-h2 text-heading mb-4">
            {locale.content.socialProofHeadline}
          </h2>
          <p className="text-body-lg text-muted-foreground">
            See what our customers have to say about Invoicemonk.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => {
            const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
            return (
              <StaggerItem key={testimonial.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="h-full bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover border border-border transition-shadow duration-300"
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-body text-foreground mb-6">"{testimonial.quote}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-body-sm font-semibold text-primary">
                        {initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-body-sm font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-caption text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
