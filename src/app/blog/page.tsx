import type { Metadata } from 'next'
import { Layout } from '@/components/layout/Layout'
import { getAllBlogPosts } from '@/data/blogPosts'
import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Blog - Invoicing, Accounting & Small Business Tips',
  description: 'Expert guides on invoicing, accounting, tax compliance, and running a successful small business or freelance practice.',
  alternates: {
    canonical: 'https://invoicemonk.com/blog',
  },
  openGraph: {
    title: 'Invoicemonk Blog - Small Business & Invoicing Tips',
    description: 'Expert guides on invoicing, accounting, tax compliance, and running a successful small business.',
    url: 'https://invoicemonk.com/blog',
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7)
  
  // Get unique categories
  const categories = Array.from(new Set(posts.map(p => p.category)))

  return (
    <Layout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-display-md lg:text-display-lg font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert guides on invoicing, accounting, tax compliance, and running a successful business.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-heading-lg font-bold mb-6">Featured</h2>
              <BlogPostCard post={featuredPost} featured />
            </div>
          )}

          {/* Recent Posts Grid */}
          <div>
            <h2 className="text-heading-lg font-bold mb-6">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
