import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { blogPosts, getBlogCategories } from '@/data/blogPosts';
import { BlogPostCard } from '@/components/blog/BlogPostCard';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getBlogCategories();
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <Layout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
              The Invoicemonk Blog
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Insights, tips, and best practices for managing your business finances, 
              staying compliant, and growing your business.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <BlogPostCard post={featuredPost} featured />
            </div>
          )}

          {/* Post Grid */}
          {remainingPosts.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found in this category.</p>
              <Button 
                variant="link" 
                onClick={() => setSelectedCategory(null)}
                className="mt-2"
              >
                View all posts
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
