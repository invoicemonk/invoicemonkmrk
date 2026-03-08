import { Link } from '@/components/LocalizedLink';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, FileText, Wallet, Calculator, Shield, User, ClipboardList, Receipt, Users } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { getTranslatedPillars, getLangPrefix } from '@/utils/i18nData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Wallet,
  Calculator,
  Shield,
  User,
  ClipboardList,
  Receipt,
  Users
};

export default function GuidesIndex() {
  const { i18n } = useTranslation();
  const lang = getLangPrefix(i18n.language);
  const pillars = getTranslatedPillars(lang);

  return (
    <Layout>
      <SEOHead
        title="Business Guides & Resources | Invoicemonk"
        description="Comprehensive guides on invoicing, getting paid, accounting, tax compliance, freelancing, and business proposals. Expert knowledge to grow your business."
      />
      
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
              Business Guides & Resources
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Everything you need to master invoicing, get paid faster, and grow your business. 
              Explore our comprehensive guides written by industry experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon] || FileText;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link to={pillar.hubPage}>
                    <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all group cursor-pointer">
                      <CardContent className="p-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${pillar.color}15` }}
                        >
                          <Icon className="h-6 w-6" style={{ color: pillar.color }} />
                        </div>
                        <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                          {pillar.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {pillar.description}
                        </p>
                        <span className="inline-flex items-center text-sm font-medium text-primary gap-1">
                          Read Guide <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
