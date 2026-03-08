import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ReviewFormProps {
  onSuccess?: () => void;
  className?: string;
}

export function ReviewForm({ onSuccess, className }: ReviewFormProps) {
  const { t } = useTranslation('explore');
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const ratingLabels = t('reviewForm.ratingLabels', { returnObjects: true }) as string[];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) { setErrorMessage(t('reviewForm.selectRating')); return; }
    if (!name.trim() || !email.trim() || !reviewText.trim()) { setErrorMessage(t('reviewForm.fillRequired')); return; }
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const review = { id: `review_${Date.now()}`, rating, name: name.trim(), email: email.trim(), company: company.trim() || undefined, role: role.trim() || undefined, reviewText: reviewText.trim(), createdAt: new Date().toISOString(), status: 'pending' };
      const existingReviews = JSON.parse(localStorage.getItem('invoicemonk_reviews') || '[]');
      existingReviews.push(review);
      localStorage.setItem('invoicemonk_reviews', JSON.stringify(existingReviews));
      setSubmitStatus('success');
      onSuccess?.();
      setTimeout(() => { setRating(0); setName(''); setEmail(''); setCompany(''); setRole(''); setReviewText(''); setSubmitStatus('idle'); }, 3000);
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('error');
      setErrorMessage(t('reviewForm.submitError'));
    } finally { setIsSubmitting(false); }
  };

  return (
    <Card className={cn("border-border/50", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          {t('reviewForm.title')}
        </CardTitle>
        <CardDescription>{t('reviewForm.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {submitStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-wave-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('reviewForm.thankYou')}</h3>
              <p className="text-muted-foreground">{t('reviewForm.thankYouMessage')}</p>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>{t('reviewForm.overallRating')}</Label>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} className="p-1 transition-transform hover:scale-110">
                        <Star className={cn("h-8 w-8 transition-colors", (hoverRating || rating) >= star ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30")} />
                      </button>
                    ))}
                  </div>
                  {(hoverRating || rating) > 0 && <span className="text-sm font-medium text-muted-foreground">{ratingLabels[(hoverRating || rating) - 1]}</span>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="review-name">{t('reviewForm.yourName')}</Label>
                  <Input id="review-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review-email">{t('reviewForm.email')}</Label>
                  <Input id="review-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" required />
                  <p className="text-xs text-muted-foreground">{t('reviewForm.emailNote')}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="review-company">{t('reviewForm.company')}</Label>
                  <Input id="review-company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review-role">{t('reviewForm.yourRole')}</Label>
                  <Input id="review-role" value={role} onChange={(e) => setRole(e.target.value)} placeholder={t('reviewForm.rolePlaceholder')} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="review-text">{t('reviewForm.yourReview')}</Label>
                <Textarea id="review-text" value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder={t('reviewForm.reviewPlaceholder')} rows={5} required />
                <p className="text-xs text-muted-foreground">{t('reviewForm.minChars', { count: reviewText.length })}</p>
              </div>
              {errorMessage && <div className="flex items-center gap-2 text-destructive text-sm"><AlertCircle className="h-4 w-4" />{errorMessage}</div>}
              <Button type="submit" disabled={isSubmitting || rating === 0 || reviewText.length < 50} className="w-full">
                {isSubmitting ? (<><span className="animate-spin mr-2">⏳</span>{t('reviewForm.submitting')}</>) : (<><Send className="h-4 w-4 mr-2" />{t('reviewForm.submitReview')}</>)}
              </Button>
              <p className="text-xs text-center text-muted-foreground">{t('reviewForm.disclaimer')}</p>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

export default ReviewForm;