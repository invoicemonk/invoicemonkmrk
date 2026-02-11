import { blogPosts } from '@/data/blogPosts';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { Layout } from '@/components/layout/Layout';
import { Metadata } from 'next';

export const dynamic = "force-dynamic";

// Make async and await params
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://invoicemonk.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="py-16 text-center">
          <h1>Post Not Found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="mb-8 text-muted-foreground">{post.excerpt}</p>
        <BlogPostCard post={post} />
      </div>
    </Layout>
  );
}
