import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useExitIntent } from "@/hooks/useExitIntent";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, Download, Loader2, ArrowRight } from "lucide-react";
import { getBlogPostBySlugTranslated, getLangPrefix } from "@/utils/i18nData";
import { getPostClusterInfo } from "@/data/blogPosts";
import { getMagnetForPost } from "@/data/leadMagnets";
import { buildSignupHref } from "@/data/pillarCTAs";
import { logConversion } from "@/lib/conversionTracking";
import { useTranslation } from "react-i18next";

function inferBlogContext(pathname: string, lang: string) {
  // Match /:lang/blog/:slug or /blog/:slug
  const m = pathname.match(/^\/(?:[a-z]{2}\/)?blog\/([^/?#]+)/i);
  if (!m) return { pillarId: undefined, slug: undefined, targetCountry: undefined };
  const slug = m[1];
  const post = getBlogPostBySlugTranslated(slug, lang);
  if (!post) return { pillarId: undefined, slug, targetCountry: undefined };
  const { pillar } = getPostClusterInfo(post.slug);
  return { pillarId: pillar?.id, slug: post.slug, targetCountry: post.targetCountry };
}

export function ExitIntentPopup() {
  const { open, setOpen, markSubmitted } = useExitIntent();
  const { i18n } = useTranslation();
  const lang = getLangPrefix(i18n.language);
  const location = useLocation();

  const { pillarId, slug, targetCountry } = useMemo(
    () => inferBlogContext(location.pathname, lang),
    [location.pathname, lang]
  );
  const magnet = useMemo(() => getMagnetForPost(pillarId, targetCountry), [pillarId, targetCountry]);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
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
        body: {
          firstName: fn,
          email: em,
          source: `exit_intent_${magnet.id}`,
          magnet: magnet.id,
        },
      });
      if (fnError || (data && (data as { error?: string }).error)) {
        throw new Error((data as { error?: string })?.error || fnError?.message || "Failed");
      }
      const url = (data as { downloadUrl?: string })?.downloadUrl || magnet.file;
      setDownloadUrl(url);
      markSubmitted();
      logConversion({
        eventType: "exit_intent_submit",
        placement: "exit_intent",
        pillarId,
        slug,
        magnet: magnet.id,
        ctaVariant: "content_upgrade",
      });
      try {
        // @ts-expect-error dataLayer global
        (window.dataLayer = window.dataLayer || []).push({ event: "exit_intent_submit", magnet: magnet.id });
      } catch {
        // ignore
      }
      setSuccess(true);
      try {
        window.open(url, "_blank", "noopener,noreferrer");
      } catch {
        // ignore
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const onSignupClick = () => {
    logConversion({
      eventType: "click",
      placement: "exit_intent",
      pillarId,
      slug,
      ctaVariant: "signup",
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {success ? (
          <div className="text-center py-4">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary mb-3" />
            <DialogTitle className="text-xl mb-2">You're in, {firstName.trim()}.</DialogTitle>
            <DialogDescription className="mb-4">
              Your download should have started. Check your inbox for more compliance playbooks.
            </DialogDescription>
            <div className="flex flex-col gap-2">
              {downloadUrl && (
                <Button asChild variant="outline">
                  <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download again
                  </a>
                </Button>
              )}
              <Button asChild onClick={onSignupClick}>
                <a
                  href={buildSignupHref("exit_intent_signup", "exit_intent", magnet.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create your account
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Before you go — grab the free {magnet.title}.</DialogTitle>
              <DialogDescription>
                {magnet.description} No spam. Unsubscribe anytime.
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
                <Label htmlFor="ei-email">Work email</Label>
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
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Send me the checklist
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Already sold?{" "}
                <a
                  href={buildSignupHref("exit_intent_direct", "exit_intent", magnet.id)}
                  onClick={onSignupClick}
                  className="underline hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
