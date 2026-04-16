import { useState, useMemo } from 'react';
import { Link } from '@/components/LocalizedLink';
import { Check, Circle, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import type { Pillar } from '@/data/topicalMap';
import type { BlogPost } from '@/data/blogPosts';

interface ClusterTopicMapProps {
  pillar: Pillar;
  currentSlug: string;
  clusterPosts: BlogPost[];
  hubPost?: BlogPost;
}

export function ClusterTopicMap({ 
  pillar, 
  currentSlug, 
  clusterPosts,
  hubPost
}: ClusterTopicMapProps) {
  const allPosts = hubPost 
    ? [hubPost, ...clusterPosts.filter(p => p.slug !== hubPost.slug)]
    : clusterPosts;

  const [isExpanded, setIsExpanded] = useState(false);

  const currentIndex = useMemo(
    () => allPosts.findIndex(p => p.slug === currentSlug),
    [allPosts, currentSlug]
  );

  const needsCollapse = allPosts.length > 3;

  const visiblePosts = useMemo(() => {
    if (!needsCollapse || isExpanded) return allPosts;
    const indices = new Set<number>();
    if (currentIndex > 0) indices.add(currentIndex - 1);
    indices.add(Math.max(0, currentIndex));
    if (currentIndex < allPosts.length - 1) indices.add(currentIndex + 1);
    return allPosts.filter((_, i) => indices.has(i));
  }, [allPosts, currentIndex, needsCollapse, isExpanded]);

  const hiddenCount = allPosts.length - visiblePosts.length;

  if (allPosts.length === 0) return null;

  const renderPost = (post: BlogPost) => {
    const isCurrent = post.slug === currentSlug;
    const isHub = hubPost && post.slug === hubPost.slug;

    if (isCurrent) {
      return (
        <div 
          className={cn("flex items-start gap-3 py-2 px-3 rounded-lg", "font-medium")}
          style={{ backgroundColor: `${pillar.color}10` }}
        >
          <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: pillar.color }} />
          <span className="text-sm" style={{ color: pillar.color }}>
            {post.title}
            {isHub && <span className="ml-2 text-xs opacity-70">(Complete Guide)</span>}
          </span>
        </div>
      );
    }

    return (
      <Link 
        to={`/blog/${post.slug}`}
        className={cn(
          "group flex items-start gap-3 py-2 px-3 rounded-lg",
          "text-muted-foreground hover:text-foreground",
          "hover:bg-muted/50 transition-colors"
        )}
      >
        <Circle 
          className="h-4 w-4 mt-0.5 flex-shrink-0 transition-colors"
          style={{ color: `${pillar.color}60` }}
        />
        <span className="text-sm">
          {post.title}
          {isHub && <span className="ml-2 text-xs opacity-70">(Complete Guide)</span>}
        </span>
      </Link>
    );
  };

  return (
    <Card className="border-2 mb-8" style={{ borderColor: pillar.color }}>
      <CardHeader className="pb-3" style={{ backgroundColor: `${pillar.color}08` }}>
        <CardTitle className="flex items-center gap-2 text-lg">
          <BookOpen className="h-5 w-5 flex-shrink-0" style={{ color: pillar.color }} />
          <span>{pillar.title} Series</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          This guide is part of a comprehensive series. Explore all {allPosts.length} topics:
        </p>
      </CardHeader>
      <CardContent className="pt-4">
        <nav aria-label="Topic cluster navigation">
          <ul className="space-y-2">
            {visiblePosts.map((post) => (
              <li key={post.slug}>{renderPost(post)}</li>
            ))}
          </ul>

          {needsCollapse && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mt-3 pt-3 border-t border-border/50 w-full transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  <span>Show less</span>
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  <span>Show all {allPosts.length} articles in this series</span>
                </>
              )}
            </button>
          )}
        </nav>
      </CardContent>
    </Card>
  );
}
