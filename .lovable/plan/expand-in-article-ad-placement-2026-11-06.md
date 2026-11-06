# Expand In-Article Ad Placement

## Current implementation
The existing AdSense unit (client `ca-pub-9385120336874709`, slot `3203402858`) is rendered by `InArticleAd` inside the shared `BlogPost` page, but only for five hard-coded slugs. The AdSense loader in `index.html` is sitewide and should remain unchanged. The article page serves detail routes under `/:lang/blog/:slug`; the ad currently appears after the content split at the second `<h2>`, rather than being positioned by paragraph count.

## Routes that will receive the ad
- All valid informational article detail pages handled by `BlogPost`: `/:lang/blog/:slug` (for example, `/en/blog/payment-reminder-email-templates`).
- This includes existing and future blog articles automatically, including pillar-content articles, with no slug-by-slug maintenance.
- The five articles that already show this unit remain covered once each; their special allowlist will be removed to prevent duplicate rendering.

## Routes and page types excluded
- Blog index, topic, and author pages: `/:lang/blog`, `/:lang/blog/topic/:topicId`, and `/:lang/blog/author/:authorSlug`.
- Homepage, pricing, product and company pages, legal pages, signup/login and dashboard/application pages, tools and interactive calculators, comparison pages, and static guide pages. These do not use the shared `BlogPost` article-detail renderer.
- Existing sitewide Auto Ads remain enabled and are not changed.

## Implementation
- Keep the existing AdSense client, slot, responsive styling, and one-time client-side push behavior.
- Update the shared article content rendering so the single unit is inserted after approximately the second paragraph of article content; use a safe content-structure fallback when fewer than two paragraphs are present.
- Ensure the placement is unconditional for valid blog detail articles and rendered exactly once, regardless of article slug or pillar status.

## Verification
- Check representative regular and pillar articles, including one of the five previously enabled slugs, and confirm each has one in-article slot.
- Verify an article with short or unusual paragraph structure uses the fallback without breaking its content.
- Inspect desktop and mobile layouts for responsive sizing and content flow; confirm non-article routes do not render this in-article unit and Auto Ads code is unchanged.
