import { useState } from 'react';
import { Sparkles, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

const ASSISTANTS = ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Copilot', 'Other AI', 'Not an AI assistant'];

interface AIPromptCaptureProps {
  source?: string;
  className?: string;
}

/**
 * Captures the exact prompt someone used to discover Invoicemonk through an
 * AI assistant. Feeds the AI-search measurement loop (which prompts surface us).
 */
export function AIPromptCapture({ source = 'reviews-page', className }: AIPromptCaptureProps) {
  const [assistant, setAssistant] = useState('');
  const [prompt, setPrompt] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim().length < 2) {
      setError('Please tell us what you asked.');
      return;
    }
    setStatus('saving');
    setError('');
    const { error: insertError } = await supabase.from('ai_discovery_prompts').insert({
      source,
      prompt: prompt.trim().slice(0, 2000),
      assistant: assistant || null,
      email: email.trim() || null,
    });
    if (insertError) {
      console.error('Prompt capture failed:', insertError);
      setStatus('error');
      setError('Something went wrong. Please try again.');
      return;
    }
    setStatus('done');
  };

  return (
    <Card className={cn('border-border/50', className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          How did you hear about Invoicemonk?
        </CardTitle>
        <CardDescription>
          If an AI assistant recommended us, tell us the exact prompt you used. It helps us understand
          which questions surface Invoicemonk.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {status === 'done' ? (
          <div className="text-center py-8">
            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
            <p className="font-medium">Thank you — that is genuinely useful.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label>Where did you find us?</Label>
              <div className="flex flex-wrap gap-2">
                {ASSISTANTS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAssistant(a === assistant ? '' : a)}
                    className={cn(
                      'px-3 py-1.5 rounded-full border text-sm transition-colors',
                      assistant === a
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40'
                    )}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ai-prompt">What exactly did you ask? *</Label>
              <Textarea
                id="ai-prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder='e.g. "best invoicing software for freelancers that supports multiple currencies"'
                rows={3}
                maxLength={2000}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ai-email">Email (optional)</Label>
              <Input
                id="ai-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" disabled={status === 'saving'} className="gap-2">
              <Send className="h-4 w-4" />
              {status === 'saving' ? 'Sending…' : 'Send'}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

export default AIPromptCapture;
