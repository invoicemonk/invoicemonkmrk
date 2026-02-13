import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { topicalMap } from '@/data/topicalMap'
import { getPostsForPillar } from '@/data/blogPosts'
import { BlogPostCard } from '@/components/blog/BlogPostCard'


export const dynamic = 'force-dynamic';
// Generate static params for all topics
export async function generateStaticParams() {
  return Object.keys(topicalMap).map((topicId) => ({
    topicId,
  }))
}

// Generate metadata for each topic
export async function generateMetadata({ 
  params 
}: { 
  params: { topicId: string } 
}): Promise<Metadata> {
  const pillar = topicalMap[params.topicId as keyof typeof topicalMap]
  
  if (!pillar) {
    return {
      title: 'Topic Not Found',
    }
  }

  return {
    title: `${pillar.title} - Expert Guide & Resources`,
    description: pillar.description,
    alternates: {
      canonical: `https://invoicemonk.com/blog/topic/${params.topicId}`,
    },
    openGraph: {
      title: `${pillar.title} | InvoiceMonk Blog`,
      description: pillar.description,
      url: `https://invoicemonk.com/blog/topic/${params.topicId}`,
      type: 'website',
    },
  }
}

export default function BlogTopicPage({ 
  params 
}: { 
  params: { topicId: string } 
}) {
  const pillar = topicalMap[params.topicId as keyof typeof topicalMap]
  
  if (!pillar) {
    notFound()
  }

  const posts = getPostsForPillar(params.topicId)
  const hubPost = posts.find(p => p.pillarContent)
  const clusterPosts = posts.filter(p => !p.pillarContent)

  return (
    <Layout>
      <div className="py-16 lg:py-24">
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

          {/* Topic Header */}
          <header className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-display-md lg:text-display-lg font-bold text-foreground mb-4">
              {pillar.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {pillar.description}
            </p>
          </header>

          {/* Hub Post (Pillar Content) */}
          {hubPost && (
            <div className="max-w-5xl mx-auto mb-16">
              <h2 className="text-heading-lg font-bold mb-6">Complete Guide</h2>
              <BlogPostCard post={hubPost} featured />
            </div>
          )}

          {/* Cluster Posts */}
          {clusterPosts.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-heading-lg font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clusterPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
