import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useExitIntent } from "@/hooks/useExitIntent";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ExitIntentPopup() {
  const { open, setOpen, markSubmitted } = useExitIntent();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClose = (next: boolean) => {
    if (!next && !success) {
      try {
        // @ts-expect-error dataLayer global
        (window.dataLayer = window.dataLayer || []).push({ event: "exit_intent_dismiss" });
      } catch {
        // ignore
      }
    }
    setOpen(next);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const fn = firstName.trim();
    const em = email.trim().toLowerCase();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
    if (!fn || fn.length > 50) return setError("Please enter your first name.");
    if (!emailOk || em.length > 255) return setError("Please enter a valid email address.");

    setSubmitting(true);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("subscribe-marketing-lead", {
        body: { firstName: fn, email: em, source: "exit_intent" },
      });
      if (fnError || (data && (data as { error?: string }).error)) {
        throw new Error((data as { error?: string })?.error || fnError?.message || "Failed");
      }
      markSubmitted();
      try {
        // @ts-expect-error dataLayer global
        (window.dataLayer = window.dataLayer || []).push({ event: "exit_intent_submit" });
      } catch {
        // ignore
      }
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {success ? (
          <div className="text-center py-4">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary mb-3" />
            <DialogTitle className="text-xl mb-2">You're in, {firstName.trim()}.</DialogTitle>
            <DialogDescription className="mb-4">
              Check your inbox for compliance and getting-paid playbooks.
            </DialogDescription>
            <a
              href="https://app.invoicemonk.com"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Start your free account
            </a>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Before you go — get smarter invoicing tips.</DialogTitle>
              <DialogDescription>
                Compliance, payments, and getting-paid playbooks. No spam. Unsubscribe anytime.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="space-y-3 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="ei-firstname">First name</Label>
                <Input
                  id="ei-firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  maxLength={50}
                  required
                  autoComplete="given-name"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ei-email">Email</Label>
                <Input
                  id="ei-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  required
                  autoComplete="email"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send me the playbooks"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Free forever plan available —{" "}
                <a href="https://app.invoicemonk.com" className="underline hover:text-primary">
                  create your account
                </a>
                .
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}