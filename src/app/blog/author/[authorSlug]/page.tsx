import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { authors, getAllAuthors, getAuthorBySlug } from '@/data/authors'
import { getAllBlogPosts } from '@/data/blogPosts'
import { BlogPostCard } from '@/components/blog/BlogPostCard'

// Generate static params for all authors
export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({
    authorSlug: author.slug,
  }))
}

// Generate metadata for each author
export async function generateMetadata({ 
  params 
}: { 
  params: { authorSlug: string } 
}): Promise<Metadata> {
  const author = getAuthorBySlug(params.authorSlug)
  
  if (!author) {
    return {
      title: 'Author Not Found',
    }
  }

  return {
    title: `${author.name} - Author at InvoiceMonk`,
    description: author.bio,
    alternates: {
      canonical: `https://invoicemonk.com/blog/author/${author.slug}`,
    },
    openGraph: {
      title: `${author.name} | InvoiceMonk`,
      description: author.bio,
      url: `https://invoicemonk.com/blog/author/${author.slug}`,
      type: 'profile',
      images: [
        {
          url: `https://invoicemonk.com${author.avatar}`,
          width: 400,
          height: 400,
          alt: author.name,
        },
      ],
    },
  }
}

export default function AuthorPage({ 
  params 
}: { 
  params: { authorSlug: string } 
}) {
  const author = getAuthorBySlug(params.authorSlug)
  
  if (!author) {
    notFound()
  }

  // Get all posts by this author
  const allPosts = getAllBlogPosts()
  const authorPosts = allPosts.filter(post => post.author.slug === author.slug)

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

          {/* Author Header */}
          <header className="max-w-5xl mx-auto text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-display-md lg:text-display-lg font-bold text-foreground mb-4">
              {author.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {author.bio}
            </p>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                {authorPosts.length} {authorPosts.length === 1 ? 'article' : 'articles'} published
              </p>
            </div>
          </header>

          {/* Author's Posts */}
          {authorPosts.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-heading-lg font-bold mb-8">Articles by {author.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {authorPosts.map((post) => (
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
