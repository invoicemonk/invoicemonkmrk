# In-article AdSense unit on five articles (plus finishing the broken-link fix)

## Part 1 — In-article ad on the five requested articles

The five articles are:

| Article | Page |
| --- | --- |
| Payment Reminder Email Templates | `/en/blog/payment-reminder-email-templates` |
| Invoice Payment Terms | `/en/blog/how-to-write-invoice-payment-terms` |
| Credit Notes | `/en/blog/credit-notes-and-invoice-corrections` |
| Invoice Terms & Conditions | `/en/blog/invoice-terms-and-conditions-wording` |
| Deposit Invoice Guide | `/en/blog/deposit-invoice-template-guide` |

The AdSense loader script is already loaded site-wide from `index.html`, so only the
in-article ad slot itself needs to be added — no duplicate loader tags.

What gets built:

1. A small `InArticleAd` component that renders the `ins.adsbygoogle` in-article unit
   (client `ca-pub-9385120336874709`, slot `3203402858`) and pushes it to AdSense once
   per mount, safely on both the prerendered and client-rendered pass.
2. An allowlist of the five article slugs. The ad renders only on those pages; every
   other article stays unchanged.
3. Placement: inside the article body at the existing split point (after the first
   section, alongside the email-capture card) so the ad sits in the natural reading
   flow rather than above the headline or below the footer.
4. The existing reserved-height CSS for `ins.adsbygoogle` already prevents the page
   from jumping as the ad loads, so no layout shift is introduced.

If you'd prefer the ad lower down (e.g. mid-article or just before the closing
call-to-action), say so and I'll move it.

## Part 2 — Finish the 404 link cleanup (already in progress)

Done: the two links you reported now point at the real pages, permanent redirects were
added for the old URLs, and a new automated check was added to the build that fails when
any article links to a page that does not exist.

That check surfaced 22 more broken links in the article library. Remaining work is to
repoint each one at its real page, for example:

- "invoice numbering best practices" -> `invoice-numbering-best-practices`
- "automatic payment reminders" -> `setting-up-automatic-payment-reminders`
- "payment reminders" -> `payment-reminder-email-templates`
- "time tracking" -> `freelance-time-tracking-guide`
- "best invoicing software for Nigeria" -> `/en/compare/best-invoicing-software-nigeria`
- "Nigeria VAT invoice how-to" -> `nigeria-vat-invoice-requirements`
- UK/HMRC invoice links -> `uk-invoice-requirements-hmrc-2026`
- Italy/Romania/Poland country links -> the country e-invoicing guides
- "what is an invoice" -> `what-is-an-invoice-definition`
- "payment terms guide" -> `payment-terms-guide-net-30-explained`
- "tax penalties" -> `freelance-payment-mistakes`

Five links point at country VAT-registration articles that do not exist at all
(Bulgaria, Romania, Poland, Italy, Hungary). Those sentences will be rewritten to link
to the matching country e-invoicing guides instead of inventing pages.

## Technical notes

- New `src/components/blog/InArticleAd.tsx`; slug allowlist plus render inserted in
  `src/pages/BlogPost.tsx` next to `ContentUpgradeCard`.
- `window.adsbygoogle.push({})` runs in a `useEffect` guarded for SSR/prerender.
- Broken-link validation lives in `scripts/audit-routes.mjs` and runs as part of the
  build; the remaining 22 link corrections are edits in `src/data/blogPosts*.ts`.
