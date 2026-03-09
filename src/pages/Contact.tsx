import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { useLocale } from '@/hooks/useLocale';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const faqKeys = ['responseTime', 'supportChannels', 'phoneSupport'] as const;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = t('form.errors.firstNameRequired');
    else if (formData.firstName.length > 100) newErrors.firstName = t('form.errors.firstNameLength');
    if (!formData.lastName.trim()) newErrors.lastName = t('form.errors.lastNameRequired');
    else if (formData.lastName.length > 100) newErrors.lastName = t('form.errors.lastNameLength');
    if (!formData.email.trim()) newErrors.email = t('form.errors.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t('form.errors.emailInvalid');
    if (!formData.subject.trim()) newErrors.subject = t('form.errors.subjectRequired');
    else if (formData.subject.length > 200) newErrors.subject = t('form.errors.subjectLength');
    if (!formData.message.trim()) newErrors.message = t('form.errors.messageRequired');
    else if (formData.message.length > 5000) newErrors.message = t('form.errors.messageLength');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({ title: t('toast.fixErrors'), description: t('toast.fixErrorsDesc'), variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-message', { body: formData });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast({ title: t('toast.success'), description: t('toast.successDesc') });
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Contact form error:', error);
      toast({ title: t('toast.error'), description: error instanceof Error ? error.message : t('toast.errorDesc'), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { locale } = useLocale();
  const seo = pageSEO['/contact'];

  const contactFAQs = faqKeys.map(key => ({
    question: t(`faqs.${key}.question`),
    answer: t(`faqs.${key}.answer`),
  }));

  return (
    <Layout>
      <FAQSchema items={contactFAQs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]} />
      <SEOHead
        title={seo?.getTitle(locale) || 'Contact Us | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Get in touch with Invoicemonk. We are here to help with your invoicing needs.'}
      />
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-body-lg text-muted-foreground">
              {t('hero.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('info.email.title')}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{t('info.email.subtitle')}</p>
                      <a href="mailto:hello@invoicemonk.com" className="text-primary hover:underline text-sm">
                        hello@invoicemonk.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('info.office.title')}</h3>
                      <p className="text-muted-foreground text-sm">{t('info.office.description')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('info.responseTime.title')}</h3>
                      <p className="text-muted-foreground text-sm">{t('info.responseTime.description')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 border-border/50">
              <CardContent className="p-8">
                <h2 className="text-heading-md font-semibold text-foreground mb-6">
                  {t('form.title')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t('form.firstName')}</Label>
                      <Input 
                        id="firstName" name="firstName"
                        placeholder={t('form.placeholders.firstName')}
                        value={formData.firstName} onChange={handleChange}
                        className={errors.firstName ? 'border-destructive' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />{errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t('form.lastName')}</Label>
                      <Input 
                        id="lastName" name="lastName"
                        placeholder={t('form.placeholders.lastName')}
                        value={formData.lastName} onChange={handleChange}
                        className={errors.lastName ? 'border-destructive' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />{errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('form.email')}</Label>
                    <Input 
                      id="email" name="email" type="email"
                      placeholder={t('form.placeholders.email')}
                      value={formData.email} onChange={handleChange}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('form.subject')}</Label>
                    <Input 
                      id="subject" name="subject"
                      placeholder={t('form.placeholders.subject')}
                      value={formData.subject} onChange={handleChange}
                      className={errors.subject ? 'border-destructive' : ''}
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.subject}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('form.message')}</Label>
                    <Textarea 
                      id="message" name="message"
                      placeholder={t('form.placeholders.message')}
                      rows={5}
                      value={formData.message} onChange={handleChange}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.message}
                      </p>
                    )}
                    <p className="text-muted-foreground text-xs text-right">
                      {formData.message.length}/5000
                    </p>
                  </div>
                  
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        {t('form.submitting')}
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {t('form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;