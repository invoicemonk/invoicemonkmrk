

# Fix robots.txt Syntax Error (Line 9)

## Problem
Google Search Console reports **"Syntax not understood (line 9)"** for:
```
llms.txt: https://invoicemonk.com/llms.txt
```
`llms.txt:` is not a valid robots.txt directive. Only directives like `User-agent`, `Allow`, `Disallow`, `Sitemap`, and `Crawl-delay` are recognized.

## Fix
Move the llms.txt reference into a comment (prefixed with `#`) so it's informational but doesn't trigger a parsing error. The `llms.txt` standard relies on the well-known URL path (`/llms.txt`), not a robots.txt directive.

### Before (line 7-9):
```
# AI/LLM Context
# See https://llmstxt.org for specification
llms.txt: https://invoicemonk.com/llms.txt
```

### After:
```
# AI/LLM Context
# See https://llmstxt.org for specification
# llms.txt available at https://invoicemonk.com/llms.txt
```

## File Changed
| File | Change |
|------|--------|
| `public/robots.txt` | Comment out the invalid `llms.txt:` directive on line 9 |

