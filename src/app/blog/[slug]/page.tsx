import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '@/components/layout/Layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { 
  getBlogPostBySlug, 
  getAllBlogPosts,
  getRelatedPostsEnhanced 
} from '@/data/blogPosts'
import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { AuthorCard } from '@/components/blog/AuthorCard'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://invoicemonk.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://invoicemonk.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author.name],
      images: [
        {
          url: `https://invoicemonk.com${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://invoicemonk.com${post.featuredImage}`],
    },
  }
}

export default function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPostsEnhanced(post.slug, 3)
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const formattedModifiedDate = post.dateModified 
    ? new Date(post.dateModified).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null

  return (
    <Layout>
      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="max-w-5xl mx-auto mb-8">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="max-w-5xl mx-auto text-center mb-12">
            {/* Hero Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden relative aspect-[1200/630]">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                className="object-cover"
                priority
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
                  <span className="text-body-sm">
                    Updated: <time dateTime={post.dateModified}>{formattedModifiedDate}</time>
                  </span>
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

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-6xl mx-auto mt-16 pt-16 border-t">
              <h2 className="text-heading-lg font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogPostCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  )
}
