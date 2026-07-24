## AdSense verification fix

Live site checks confirm both signals are already in place:
- Script `adsbygoogle.js?client=ca-pub-9385120336874709` loads in `<head>` (index.html line 33).
- `ads.txt` serves correctly at `https://invoicemonk.com/ads.txt` with 200 and the right publisher line.

So the script/ads.txt path is not the problem. Two things typically cause AdSense to keep saying "we couldn't verify" even when the snippet is present:

1. **The site was submitted for the wrong verification method.** AdSense currently offers three methods (AdSense code snippet, `ads.txt`, meta tag). If the account was set to "Meta tag", it will keep failing regardless of the script, because it only checks for that specific tag.
2. **The snippet is present but AdSense's crawler can't confirm ownership** on the exact hostname submitted (e.g. `www.invoicemonk.com` vs `invoicemonk.com`).

### Change I'll make
Add the AdSense **meta verification tag** to `index.html` `<head>`, right next to the existing Google Search Console tag:

```html
<meta name="google-adsense-account" content="ca-pub-9385120336874709" />
```

This is the tag AdSense's "Meta tag" verification method looks for. It's harmless alongside the existing script and ads.txt — it just adds a third independent proof of ownership so all three verification methods pass.

### What you should do after I ship it
1. Publish the site (frontend change requires the Publish button).
2. In AdSense → Sites → your site → **Verify**, pick whichever method you prefer (Meta tag is now the safest). Click "Verify" again.
3. Confirm the site was added to AdSense as `invoicemonk.com` (root), not `www.invoicemonk.com` — that's the hostname all three signals live on.

### Out of scope
No change to the existing script or ads.txt (both are correct). No other files touched.

Confirm and I'll add the meta tag.