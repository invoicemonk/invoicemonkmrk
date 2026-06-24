import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, FileCheck2, Send, CalendarCheck, Building2, Users } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { MandatePageSchema } from '@/components/seo/MandatePageSchema';
import { Link } from '@/components/LocalizedLink';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GlobalCapabilityBlock } from '@/components/e-invoicing/GlobalCapabilityBlock';
import {
  getMandate,
  MANDATES_LAST_REVIEWED,
  MANDATE_LAST_REVIEWED_BY_SLUG,
  MANDATE_RELATED_SLUGS,
} from '@/data/mandates';
// Side-effect import: ensures e-invoicing cluster batches 1–6 register themselves
// into the global blogPosts array before getBlogPostBySlug is called below.
import '@/data/blogPostsClusterEInvoicing';
import '@/data/blogPostsClusterEInvoicing2';
import '@/data/blogPostsClusterEInvoicing3';
import '@/data/blogPostsClusterEInvoicing4';
import '@/data/blogPostsClusterEInvoicing5';
import '@/data/blogPostsClusterEInvoicing6';
import { getBlogPostBySlug } from '@/data/blogPosts';
import { trackCTAClick } from '@/hooks/useContentAnalytics';
import NotFound from '@/pages/NotFound';

const SECTION_ICONS = [ShieldCheck, FileCheck2, Send, CalendarCheck, Building2, Users];

export default function MandatePage() {
  const { mandateSlug } = useParams<{ mandateSlug: string }>();
  const mandate = mandateSlug ? getMandate(mandateSlug) : undefined;

  if (!mandate) return <NotFound />;

  const signupUrl = `https://app.invoicemonk.com/signup?plan=professional&intent=${mandate.slug}`;
  const dateModified =
    mandate.lastReviewed ||
    MANDATE_LAST_REVIEWED_BY_SLUG[mandate.slug] ||
    MANDATES_LAST_REVIEWED;
  const liveYear = (mandate.liveSince || '').slice(0, 4);

  // Intent-matched hero anchors — replace generic copy that the audit flagged.
  const matrixAnchor = `All 16 live e-invoicing mandates`;
  const backAnchor = `← E-invoicing mandate matrix`;

  // Related guides: filter to slugs that resolve to a real blog post so the
  // rail never renders a 404 link while content is still being filled in.
  const relatedSlugs = MANDATE_RELATED_SLUGS[mandate.slug] || [];
  const relatedPosts = relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))
    .slice(0, 4);


  return (
    <>
      <SEOHead title={mandate.title} description={mandate.metaDescription} />
      <SoftwareApplicationSchema
        name={`Invoicemonk: ${mandate.mandate}`}
        description={mandate.metaDescription}
        schemaId={`https://invoicemonk.com/#e-invoicing-${mandate.slug}`}
      />
      <MandatePageSchema mandate={mandate} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'E-Invoicing', url: '/e-invoicing' },
          { name: mandate.jurisdiction, url: `/e-invoicing/${mandate.slug}` },
        ]}
      />
      <FAQSchema items={mandate.faqs} />

      <Layout>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 pt-28 pb-16 lg:pb-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/e-invoicing" className="hover:underline text-primary">
                {backAnchor}
              </Link>
            </nav>


            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
              >
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {mandate.jurisdiction} &middot; {mandate.authority}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
              >
                {mandate.mandate}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {mandate.directAnswer}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-base group">
                  <a href={signupUrl} onClick={() => trackCTAClick(mandate.slug, { surface: 'mandate_hero' })}>
                    Start with Pro: $15/mo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="rounded-full px-6 h-14 text-base">
                  <Link to="/e-invoicing">{matrixAnchor}</Link>
                </Button>

              </motion.div>

              {/* Compliance trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-10 flex flex-wrap gap-2"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Artefact</span>
                  <span className="font-medium">{mandate.localArtefactName}</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Transport</span>
                  <span className="font-medium">{mandate.transport.split(/[.,(]/)[0].trim()}</span>
                </span>
                {liveYear && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Live since</span>
                    <span className="font-medium">{liveYear}</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Applies to</span>
                  <span className="font-medium">{mandate.appliesTo.split(/[.,(]/)[0].trim()}</span>
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What you get — sections as feature cards */}
        <section className="py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                What you get
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Built for {mandate.jurisdiction} from day one
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {mandate.sections.map((s, i) => {
                const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
                return (
                  <motion.div
                    key={s.heading}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{s.heading}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global capability band */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <GlobalCapabilityBlock />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {mandate.jurisdiction} e-invoicing, answered
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {mandate.faqs.map((f, i) => (
                  <AccordionItem key={f.question} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {f.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related guides — mandate → cluster edge (P1 fix: bidirectional link semantics) */}
        {relatedPosts.length > 0 && (
          <section className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="mb-10 max-w-3xl">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                    Related guides
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Implementation playbooks for {mandate.jurisdiction}
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Step-by-step guides, explainers, and error catalogues for the {mandate.localArtefactName} workflow.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="group flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    >
                      {post.featuredImage && (
                        <div className="aspect-[16/9] overflow-hidden bg-muted">
                          <img
                            src={post.featuredImage}
                            alt={post.featuredImageAlt || post.title}
                            width={640}
                            height={360}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="flex flex-col flex-1 p-6">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}
                        <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                          Read guide
                          <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}

        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-primary/5 via-background to-accent/30 border border-border p-10 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {mandate.jurisdiction}: compliant from day one
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {mandate.oneLine}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-base group">
                  <a href={signupUrl} onClick={() => trackCTAClick(mandate.slug, { surface: 'mandate_footer' })}>
                    Start with Pro: $15/mo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base">
                  <Link to="/contact">Talk to sales</Link>
                </Button>
              </div>
            </div>

            {/* Sources — demoted to footnote-style disclosure */}
            <div className="max-w-4xl mx-auto mt-12">
              <details className="group rounded-lg border border-border bg-muted/30 p-5">
                <summary className="cursor-pointer text-sm font-medium text-foreground flex items-center justify-between">
                  <span>
                    Verified against authority specifications
                    <span className="text-muted-foreground font-normal">
                      {' '}— sources reviewed <time dateTime={dateModified}>{dateModified}</time>
                    </span>
                  </span>
                  <span className="text-primary text-xs uppercase tracking-wide group-open:hidden">View</span>
                  <span className="text-primary text-xs uppercase tracking-wide hidden group-open:inline">Hide</span>
                </summary>
                <ul className="mt-4 space-y-2 text-sm">
                  {mandate.citations.map((c) => (
                    <li key={c.url}>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {c.label}
                      </a>
                      {c.section && <span className="text-muted-foreground"> ({c.section})</span>}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
