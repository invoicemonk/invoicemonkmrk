import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from '@/components/LocalizedLink';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, FileText, Receipt, CreditCard, Calculator, FileCheck, Wallet, Users, LayoutTemplate, DollarSign, ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountrySelector } from '@/components/CountrySelector';
import logo from '@/assets/invoicemonk-logo.png';

const productKeys = [
  { key: 'invoicing', href: '/invoicing', icon: FileText, status: 'available' },
  { key: 'expenses', href: '/expenses', icon: Wallet, status: 'available' },
  { key: 'payments', href: '/payments', icon: CreditCard, status: 'available' },
  { key: 'accounting', href: '/accounting', icon: Calculator, status: 'available' },
  { key: 'estimates', href: '/estimates', icon: FileCheck, status: 'coming-soon' },
  { key: 'receipts', href: '/receipts', icon: Receipt, status: 'available' },
  { key: 'clientManagement', href: '/client-management', icon: Users, status: 'available' },
];

const toolKeys = [
  { key: 'freeInvoiceGenerator', href: '/free-invoice-generator', icon: FileText },
  { key: 'invoiceTemplates', href: '/invoice-templates', icon: LayoutTemplate },
  { key: 'paymentFeeCalculator', href: '/international-payment-fee-calculator', icon: Calculator },
  { key: 'freelancerRateCalculator', href: '/freelancer-rate-calculator', icon: DollarSign },
  { key: 'paypalVsWise', href: '/paypal-vs-wise-fees', icon: ArrowRightLeft },
  { key: 'invoiceGeneratorAu', href: '/free-invoice-generator-australia', icon: FileCheck },
];

const navLinkKeys = [
  { key: 'help', href: '/help' },
  { key: 'guides', href: '/guides' },
  { key: 'blog', href: '/blog' },
  { key: 'pricing', href: '/pricing' },
  { key: 'whyInvoicemonk', href: '/why-invoicemonk' },
];

/** Strip the language prefix so we can compare against link hrefs */
function stripPrefix(pathname: string): string {
  return pathname.replace(/^\/[a-z]{2}(-[a-z]{2})?(\/|$)/, '/');
}

export function Navbar() {
  const { t } = useTranslation('common');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);
  const location = useLocation();
  const currentPath = stripPrefix(location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
    setIsToolsOpen(false);
    setIsMobileToolsOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-soft border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 relative z-10">
              <img src={logo} alt="Invoicemonk" className="h-8 lg:h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-body-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isProductsOpen ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {t('nav.products')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-4 w-[420px]">
                        <div className="grid grid-cols-2 gap-2">
                          {productKeys.map((product) => {
                            const Icon = product.icon;
                            const isAvailable = product.status === 'available';
                            return (
                              <Link
                                key={product.key}
                                to={product.href}
                                className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  isAvailable ? 'hover:bg-primary/5 group' : 'hover:bg-muted/50'
                                }`}
                              >
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                                  isAvailable ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                                }`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className={`text-body-sm font-medium ${
                                      isAvailable ? 'text-foreground group-hover:text-primary' : 'text-foreground'
                                    }`}>
                                      {t(`products.${product.key}.name`)}
                                    </span>
                                    {isAvailable ? (
                                      <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-green-100 text-green-700">{t('status.available')}</span>
                                    ) : (
                                      <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground">{t('status.comingSoon')}</span>
                                    )}
                                  </div>
                                  <p className="text-caption text-muted-foreground mt-0.5 truncate">{t(`products.${product.key}.description`)}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tools Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsToolsOpen(true)}
                onMouseLeave={() => setIsToolsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-body-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isToolsOpen ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {t('nav.tools')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isToolsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-4 w-[340px]">
                        <div className="space-y-1">
                          {toolKeys.map((tool) => {
                            const Icon = tool.icon;
                            return (
                              <Link
                                key={tool.key}
                                to={tool.href}
                                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-primary/5 group"
                              >
                                <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-body-sm font-medium text-foreground group-hover:text-primary block">
                                    {t(`navTools.${tool.key}.name`)}
                                  </span>
                                  <p className="text-caption text-muted-foreground mt-0.5 truncate">{t(`navTools.${tool.key}.description`)}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-3 pt-3 border-t border-border">
                          <Link
                            to="/tools"
                            className="flex items-center justify-center gap-1 text-body-sm font-medium text-primary hover:text-primary/80 transition-colors py-2"
                          >
                            {t('nav.viewAllTools')}
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinkKeys.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  className={`text-body-sm font-medium transition-colors duration-200 hover:text-primary ${
                    currentPath === link.href ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <CountrySelector variant="compact" />
              <a href="https://app.invoicemonk.com/login" className="text-body-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {t('nav.login')}
              </a>
              <Button asChild className="rounded-full px-6 shadow-soft hover:shadow-soft-md transition-all duration-300 hover:-translate-y-0.5">
                <a href="https://app.invoicemonk.com/signup">{t('nav.getStarted')}</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[min(80vw,320px)] bg-card shadow-soft-xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Products Section */}
                <div className="mb-4">
                  <h4 className="text-caption font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-4">{t('nav.products')}</h4>
                  <nav className="space-y-1">
                    {productKeys.map((product, index) => {
                      const Icon = product.icon;
                      const isAvailable = product.status === 'available';
                      return (
                        <motion.div key={product.key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.03 + 0.1 }}>
                          <Link
                            to={product.href}
                            className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                              isAvailable ? 'text-foreground hover:bg-primary/5 hover:text-primary' : 'text-muted-foreground hover:bg-muted'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-body font-medium">{t(`products.${product.key}.name`)}</span>
                            {isAvailable ? (
                              <span className="ml-auto px-2 py-0.5 text-[10px] font-medium rounded-full bg-green-100 text-green-700">{t('status.available')}</span>
                            ) : (
                              <span className="ml-auto px-2 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground">{t('status.comingSoon')}</span>
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* Tools Section */}
                <div className="mb-4">
                  <button
                    onClick={() => setIsMobileToolsOpen(!isMobileToolsOpen)}
                    className="flex items-center justify-between w-full text-caption font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-4"
                  >
                    {t('nav.freeTools')}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileToolsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileToolsOpen && (
                      <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {toolKeys.map((tool, index) => {
                          const Icon = tool.icon;
                          return (
                            <motion.div key={tool.key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.03 }}>
                              <Link
                                to={tool.href}
                                className="flex items-center gap-3 py-3 px-4 rounded-lg text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                              >
                                <Icon className="w-5 h-5" />
                                <span className="text-body font-medium">{t(`navTools.${tool.key}.name`)}</span>
                              </Link>
                            </motion.div>
                          );
                        })}
                        <Link
                          to="/tools"
                          className="block py-3 px-4 rounded-lg text-body font-medium text-primary hover:bg-primary/5 transition-colors"
                        >
                          {t('nav.viewAllTools')}
                        </Link>
                      </motion.nav>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Links */}
                <div className="mb-4">
                  <h4 className="text-caption font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-4">{t('nav.company')}</h4>
                  <nav className="space-y-1">
                    {navLinkKeys.map((link, index) => (
                      <motion.div key={link.key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (productKeys.length + index) * 0.03 + 0.1 }}>
                        <Link
                          to={link.href}
                          className={`block py-3 px-4 rounded-lg text-body font-medium transition-colors ${
                            currentPath === link.href ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                          }`}
                        >
                          {t(`nav.${link.key}`)}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <div className="flex items-center justify-center pb-4 border-b border-border">
                    <CountrySelector variant="default" />
                  </div>
                  <a href="https://app.invoicemonk.com/login" className="text-center py-3 text-body font-medium text-foreground hover:text-primary transition-colors">
                    {t('nav.login')}
                  </a>
                  <Button asChild className="w-full rounded-full">
                    <a href="https://app.invoicemonk.com/signup">{t('nav.getStarted')}</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
