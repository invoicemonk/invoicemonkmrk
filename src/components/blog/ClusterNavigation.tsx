import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Pillar } from '@/data/topicalMap';
import type { BlogPost } from '@/data/blogPosts';

interface ClusterNavigationProps {
  pillar: Pillar;
  currentPostSlug?: string;
  relatedPosts: BlogPost[];
  className?: string;
}

export function ClusterNavigation({ 
  pillar, 
  currentPostSlug,
  relatedPosts,
  className 
}: ClusterNavigationProps) {
  const filteredPosts = relatedPosts.filter(p => p.slug !== currentPostSlug);
  
  if (filteredPosts.length === 0) return null;

  return (
    <Card className={cn('border-border/50 overflow-hidden', className)}>
      <CardHeader 
        className="pb-3"
        style={{ borderBottom: `2px solid ${pillar.color}` }}
      >
        <CardTitle className="flex items-center gap-2 text-base">
          <BookOpen 
            className="h-4 w-4" 
            style={{ color: pillar.color }} 
          />
          <span>From this series</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {pillar.description}
        </p>
      </CardHeader>
      <CardContent className="pt-4">
        <nav aria-label="Related articles in this series">
          <ul className="space-y-3">
            {filteredPosts.slice(0, 5).map((post) => (
              <li key={post.slug}>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="group flex items-start gap-3 text-sm hover:text-primary transition-colors"
                >
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-transform group-hover:scale-125"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <span className="line-clamp-2">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {pillar.hubPage && (
          <Button 
            asChild 
            variant="ghost" 
            size="sm" 
            className="w-full mt-4 group"
          >
            <Link to={pillar.hubPage}>
              <span>Read the complete guide</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
