import { Link } from '@/components/LocalizedLink';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getTermBySlug } from '@/data/glossaryTerms';

interface GlossaryTermLinkProps {
  termSlug: string;
  children: React.ReactNode;
  showTooltip?: boolean;
  className?: string;
}

/**
 * Inline link to a glossary term with optional tooltip showing the definition.
 * Use in blog content to link technical terms to the glossary.
 */
export function GlossaryTermLink({ 
  termSlug, 
  children, 
  showTooltip = true,
  className = '' 
}: GlossaryTermLinkProps) {
  const term = getTermBySlug(termSlug);
  
  if (!term) {
    // Fallback: render children without link if term not found
    return <span className={className}>{children}</span>;
  }

  const link = (
    <Link
      to={`/glossary?term=${termSlug}`}
      className={`text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid ${className}`}
    >
      {children}
    </Link>
  );

  if (!showTooltip) {
    return link;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {link}
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        className="max-w-xs"
        sideOffset={5}
      >
        <p className="font-medium mb-1">{term.term}</p>
        <p className="text-xs text-muted-foreground">{term.definition}</p>
      </TooltipContent>
    </Tooltip>
  );
}

/**
 * Utility function to wrap glossary terms in content with links.
 * Can be used to auto-link terms in blog post content.
 */
export function linkGlossaryTermsInText(
  content: string,
  termsToLink: string[]
): string {
  let result = content;

  termsToLink.forEach(termSlug => {
    const term = getTermBySlug(termSlug);
    if (!term) return;

    const termRegex = new RegExp(`\\b(${term.term})\\b`, 'gi');
    let replaced = false;

    // Split into HTML tags vs text segments, track anchor nesting
    result = result.replace(
      /(<a\b[^>]*>[\s\S]*?<\/a>)|(<[^>]+>)|([^<]+)/gi,
      (segment, anchorBlock, tag, text) => {
        // Full anchor block or HTML tag — pass through unchanged
        if (anchorBlock || tag) return segment;
        // Plain text segment — safe to replace (only first occurrence)
        if (text && !replaced) {
          const newText = text.replace(termRegex, (match: string) => {
            if (replaced) return match;
            replaced = true;
            return `<a href="/glossary?term=${termSlug}" class="glossary-term-link">${match}</a>`;
          });
          return newText;
        }
        return segment;
      }
    );
  });

  return result;
}
