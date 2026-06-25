# Fix broken article featured images

## Root cause

`vercel.json` has a 301 redirect at the top:

```
/blog/:path*  →  /en/blog/:path*
```

This redirect runs **before** static files are served, so every request for an image stored under `public/blog/...jpg` is redirected to `/en/blog/...jpg`, which doesn't exist on disk and gets swallowed by the SPA rewrite (returns `index.html`). The browser then renders a broken image.

Yesterday's update added 50 new featured images in `public/blog/` and referenced them in the data files as `/blog/<slug>.jpg`. Locally (no Vercel redirect) they load fine; in production they all break. Older posts use `/images/blog/<slug>.jpg` (which is not caught by any redirect) and continue to work — that's why only the newly updated ones appear broken.

## Fix

Standardize on the working convention `/images/blog/...` for every featured image.

1. **Move all 50 files** from `public/blog/` to `public/images/blog/` (the directory already exists with 345 files):
   ```
   mv public/blog/*.jpg public/images/blog/
   rmdir public/blog
   ```

2. **Update 52 references** in `src/data/` from `'/blog/...jpg'` → `'/images/blog/...jpg'`. Affected files (per `rg`): `blogPostsCluster17.ts`, `blogPostsCluster18.ts`, `blogPostsCluster19.ts`, `blogPostsCluster20.ts`, and any sibling cluster files matching the pattern. A single sed pass handles them:
   ```
   rg -l "'/blog/[^']*\.(jpg|png|webp|jpeg)'" src/data \
     | xargs sed -i "s|'/blog/|'/images/blog/|g"
   ```

3. **Verify** no remaining `'/blog/*.jpg'` references exist anywhere in `src/` and `public/blog/` is empty.

## Out of scope

- No changes to `vercel.json` redirects (the `/blog/:path*` → `/en/blog/...` SEO redirect is intentional for HTML routes).
- No changes to the BlogPostCard or BlogPost components — the image fields render unchanged.
- No changes to existing `/images/blog/...` references already working in production.
