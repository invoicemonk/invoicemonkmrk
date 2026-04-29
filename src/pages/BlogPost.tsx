import { useParams } from 'react-router-dom';
import { Link } from '@/components/LocalizedLink';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { 
  getRelatedPostsEnhanced, 
  getPostClusterInfo,
  getPostsForPillar 
} from '@/data/blogPosts';
import { getBlogPostBySlugTranslated, getLangPrefix } from '@/utils/i18nData';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { AuthorCard } from '@/components/blog/AuthorCard';
import { ClusterNavigation } from '@/components/blog/ClusterNavigation';
import { ClusterTopicMap } from '@/components/blog/ClusterTopicMap';
import { TopicBreadcrumb } from '@/components/blog/TopicBreadcrumb';
import { SignupCTA } from '@/components/blog/SignupCTA';

import { PillarPageLayout } from '@/components/blog/PillarPageLayout';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { enhanceInternalLinks } from '@/utils/enhanceLinks';
import { addBlockAnswers } from '@/utils/blockAnswers';
import { injectInlineCTAs } from '@/utils/inlineCTAs';
import { useContentAnalytics } from '@/hooks/useContentAnalytics';
import { linkGlossaryTermsInText } from '@/components/blog/GlossaryTermLink';
import { getGlossaryTermsForPillar } from '@/utils/glossaryMapping';
import NotFound from './NotFound';

// Side-effect imports: ensure cluster posts are registered in the blogPosts array
import '@/data/blogPostsCluster10';
import '@/data/blogPostsCluster11';
import '@/data/blogPostsCluster12';
import '@/data/blogPostsCluster13';
import '@/data/blogPostsCluster14';
import '@/data/blogPostsCluster15';
import '@/data/blogPostsCluster16';
import '@/data/blogPostsCluster17';
import '@/data/blogPostsCluster18';
import '@/data/blogPostsCluster19';

const BlogPost = () => {
  const { slug, lang: urlLang } = useParams<{ slug: string; lang: string }>();
  const { locale } = useLocale();
  const { t, i18n } = useTranslation('blog');
  const lang = getLangPrefix(i18n.language);
  const post = slug ? getBlogPostBySlugTranslated(slug, lang) : undefined;

  // Enhance links + AI block-answers + inline CTAs in post content (must be before early return)
  const enhancedContent = useMemo(() => {
    if (!post) return '';
    const { pillar: p } = getPostClusterInfo(post.slug);
    const lang = urlLang || 'en';
    let html = enhanceInternalLinks(post.content, lang);
    html = addBlockAnswers(html);
    html = injectInlineCTAs(html, { pillarId: p?.id, lang, slug: post.slug });
    const glossaryTerms = getGlossaryTermsForPillar(p?.id);
    return linkGlossaryTermsInText(html, glossaryTerms);
  }, [post, urlLang]);

  // Inline-CTA click tracking via event delegation
  const { trackEvent } = useContentAnalytics(post?.slug, post ? getPostClusterInfo(post.slug).pillar?.id : undefined);
  useEffect(() => {
    if (!post) return;
    const article = document.querySelector('article .prose');
    if (!article) return;
    const handler = (e: Event) => {
      const target = (e.target as HTMLElement)?.closest('.inline-cta__primary') as HTMLAnchorElement | null;
      if (!target) return;
      trackEvent('tool_cta_click', {
        cta: 'inline_mid_article',
        position: target.dataset.ctaPosition,
        pillarId: target.dataset.ctaPillar,
        href: target.getAttribute('href'),
        slug: post.slug,
      });
    };
    article.addEventListener('click', handler);
    return () => article.removeEventListener('click', handler);
  }, [post, trackEvent]);

  // Country-targeted posts are canonical English content after the country-prefix migration.
  const canonicalPrefix = post?.targetCountry ? 'en' : (urlLang || 'en');
  const canonicalUrl = post?.targetCountry
    ? `https://invoicemonk.com/${canonicalPrefix}/blog/${post.slug}`
    : undefined;

  // Add IDs to headings for TOC navigation
  useEffect(() => {
    if (!post) return;
    
    const article = document.querySelector('article .prose');
    if (!article) return;
    
    const headings = article.querySelectorAll('h2, h3');
    headings.forEach((heading, index) => {
      const id = heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `heading-${index}`;
      heading.id = id;
    });
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  const { pillar, clusterType } = getPostClusterInfo(post.slug);
  const relatedPosts = getRelatedPostsEnhanced(post.slug, 5);
  const clusterPosts = pillar ? getPostsForPillar(pillar.id) : [];
  
  // Find the hub post for this cluster (the pillar content page)
  const hubPost = clusterPosts.find(p => p.pillarContent);
  
  const formattedDate = new Date(post.date).toLocaleDateString(locale.code, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedModifiedDate = (post.dateModified && post.dateModified > post.date)
    ? new Date(post.dateModified).toLocaleDateString(locale.code, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  const articleUrl = `https://invoicemonk.com/${canonicalPrefix}/blog/${post.slug}`;
  const ogImageUrl = `https://invoicemonk.com${post.featuredImage}`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    ...(pillar 
      ? [{ name: pillar.title, url: `/blog/topic/${pillar.id}` }]
      : [{ name: post.category, url: `/blog?category=${encodeURIComponent(post.category)}` }]
    ),
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  // Related articles for schema
  const relatedArticlesSchema = relatedPosts.map(p => ({
    title: p.title,
    url: `https://invoicemonk.com/blog/${p.slug}`
  }));

  // Determine if this is a pillar page that should use special layout
  const isPillarPage = post.pillarContent && pillar;

  // Common article content
  const ArticleContent = () => (
    <>
      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: enhancedContent }}
      />

      {/* Single signup-focused CTA — no competing exits to product pages,
          tools, or the free invoice generator. */}
      <SignupCTA pillarId={pillar?.id} medium="article_inline" campaign="blog_signup_cta_inline" />

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            <span className="text-body-sm font-medium text-foreground">{t('tags')}</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </>
  );

  return (
    <Layout>
      <SEOHead
        title={`${post.title} | Invoicemonk Blog`}
        description={post.excerpt}
        canonical={canonicalUrl}
        ogImage={ogImageUrl}
        ogImageWidth={1200}
        ogImageHeight={630}
        ogType="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.dateModified,
          author: post.author.name,
          section: pillar?.title || post.category
        }}
      />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={articleUrl}
        imageUrl={ogImageUrl}
        datePublished={post.date}
        dateModified={post.dateModified}
        author={post.author}
        section={post.category}
        pillar={pillar}
        clusterType={clusterType}
        isPillarContent={post.pillarContent}
        semanticKeywords={post.semanticKeywords}
        relatedArticles={relatedArticlesSchema}
        entityMentions={post.entityMentions}
        relatedTools={post.relatedTools}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* FAQ Schema - from pillar or article-specific FAQ */}
      {isPillarPage && pillar?.faq && pillar.faq.length > 0 && (
        <FAQSchema items={pillar.faq} />
      )}
      {!isPillarPage && post.faq && post.faq.length > 0 && (
        <FAQSchema items={post.faq} />
      )}

      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Breadcrumb Navigation */}
          <div className="max-w-5xl mx-auto mb-6">
            <TopicBreadcrumb 
              pillar={pillar} 
              category={post.category}
            />
          </div>

          {/* Back Button */}
          <div className="max-w-5xl mx-auto mb-8">
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4" />
                {t('backToBlog')}
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="max-w-5xl mx-auto text-center mb-12">
            {/* Hero Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                fetchPriority="high"
              />
            </div>
            
            {/* Category Badge */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="secondary">
                {post.category}
              </Badge>
            </div>
            
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              {formattedModifiedDate && formattedModifiedDate !== formattedDate && (
                <>
                  <span>•</span>
                  <span className="text-body-sm">Updated: <time dateTime={post.dateModified}>{formattedModifiedDate}</time></span>
                </>
              )}
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Author Info */}
            <div className="flex justify-center">
              <AuthorCard author={post.author} variant="compact" />
            </div>
          </header>

          {/* Main Content Area - Use PillarPageLayout for pillar content */}
          <div className="max-w-5xl mx-auto">
            {isPillarPage ? (
              <PillarPageLayout
                pillar={pillar}
                post={post}
                clusterPosts={clusterPosts}
              >
                <ArticleContent />
              </PillarPageLayout>
            ) : (
              <div className="grid lg:grid-cols-[1fr_300px] gap-8">
                {/* Article Content */}
                <div>
                  {/* Cluster Topic Map for cluster articles */}
                  {pillar && clusterPosts.length > 1 && (
                    <ClusterTopicMap
                      pillar={pillar}
                      currentSlug={post.slug}
                      clusterPosts={clusterPosts}
                      hubPost={hubPost}
                    />
                  )}
                  <ArticleContent />
                </div>

                {/* Sidebar - Cluster Navigation */}
                <aside className="hidden lg:block">
                  <div className="sticky top-24">
                    {pillar && clusterPosts.length > 0 && (
                      <ClusterNavigation 
                        pillar={pillar}
                        currentPostSlug={post.slug}
                        relatedPosts={clusterPosts}
                      />
                    )}
                  </div>
                </aside>
              </div>
            )}
          </div>

          {/* Mobile Cluster Navigation (for non-pillar pages) - Moved higher for better discovery */}
          {!isPillarPage && pillar && clusterPosts.length > 0 && (
            <div className="lg:hidden max-w-3xl mx-auto mt-8 mb-8">
              <details className="bg-muted/30 rounded-xl border border-border" open>
                <summary className="px-4 py-3 font-medium text-foreground cursor-pointer hover:bg-muted/50 rounded-xl transition-colors">
                  {t('moreInSeries', { count: clusterPosts.length })}
                </summary>
                <div className="px-4 pb-4">
                  <ClusterNavigation 
                    pillar={pillar}
                    currentPostSlug={post.slug}
                    relatedPosts={clusterPosts}
                  />
                </div>
              </details>
            </div>
          )}

          {/* Full Author Card */}
          <div className="max-w-3xl mx-auto mt-12">
            <AuthorCard author={post.author} variant="full" showCredentials />
          </div>

          {/* Single signup-focused article-end CTA. No Recommended Tools or
              product-page CTA stack — conversion path stays simple:
              read article → understand challenge → signup. */}
          <div className="max-w-3xl mx-auto mt-16">
            <SignupCTA pillarId={pillar?.id} medium="article_end" campaign="blog_signup_cta" />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="max-w-5xl mx-auto mt-20">
              <h2 className="text-heading-md font-bold text-foreground mb-8 text-center">
                {pillar ? t('moreFrom', { pillar: pillar.title }) : t('relatedArticles')}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogPostCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
