# Perfect Finish Painters — Full Audit (SEO · GEO · Performance · Accessibility · Security/Trust · Content)

**Date:** 2026-06-12
**Stack:** Next.js (App Router, TypeScript, route groups `(en)`/`(es)`)
**Run via:** hardened `seo-audit`, `geo-ai-optimize`, `page-performance`, `security-audit` skills → aggregated into `site-score`
**Scorecard:** `reports/perfect-finish-painters-site-score-2026-06-12.pdf`

## Aggregate: 74 / 100 — Good (amber)

| Dimension | Score | Grade |
|---|---|---|
| SEO Foundation | 74 | amber |
| GEO Readiness | 71 | amber |
| Performance | 67 | red |
| Accessibility | 80 | amber |
| Trust & Compliance | 87 | green |
| Content Depth | 63 | red |

> **Methodology:** Performance/CWV assessed from source (no live Lighthouse) — static-analysis estimate. hreflang scored normally (bilingual EN/ES, valid bidirectional pairs). All other dimensions source-verified.

---

## ⚠️ Manual-action risk — fix first

**`aggregateRating.reviewCount` = "19" on the home page, but only 12 reviews render** (`src/data/reviews.ts` has 12; `/reviews` correctly uses `reviews.length`). The home page count is hardcoded and stale. Google can verify the mismatch and AI tools extract the inflated number.
**Fix:** `src/app/(en)/page.tsx` ~line 79 — `reviewCount: String(reviews.length)` and import `reviews`.

Everything else verified clean of manual-action risk: hreflang bidirectional (all 5 EN/ES pairs), `<html lang>` correct per route group, city-page bodies genuinely unique (not doorways), all review/FAQ schema otherwise backed by rendered content, no hidden text/cloaking.

---

## SEO Foundation — 74/100

Per-item: canonical 18/20 · sitemap 6/10 · robots 5/5 · titles 10/15 · descriptions 13/15 · JSON-LD 13/15 · hreflang 9/10 · OG image 0/10.

**Top drags:** OG image is the 1970×748 logo, not a 1200×630 social card · 5 of 9 blog posts absent from sitemap · home title ("Atlantic County") vs H1 ("Mays Landing") geo mismatch.

| Priority | Issue | File | Fix |
|---|---|---|---|
| HIGH | 5 blog posts missing from sitemap | `src/app/sitemap.ts` | Add `accent-wall-painting-south-jersey`, `bathroom-repaint-south-jersey`, `garage-drywall-finishing-south-jersey`, `kitchen-drywall-repair-south-jersey`, `open-concept-living-dining-repaint-south-jersey` |
| HIGH | Home title/H1 geo mismatch | `src/app/(en)/page.tsx` | Pick one geo lead — align title and H1 (recommend keeping "Atlantic County" in title, update H1 to match) |
| HIGH | OG image is logo at 1970×748 sitewide | layouts + page metadata | Create a 1200×630 social card (job photo + logo); swap all `og:image` refs |
| HIGH | Reviews page title/H1 lacks keyword | `src/app/(en)/reviews/page.tsx` | e.g. title "Painter Reviews — Mays Landing NJ \| Perfect Finish"; H1 to match |
| MEDIUM | City H1 "Professional Painters in {city}" vs title "Painters in {city} NJ" | `src/app/(en)/[city]/page.tsx` | Make head term identical |
| MEDIUM | ES `pintores-cerca-de-mi` FAQ schema answers truncated vs rendered | `src/app/(es)/pintores-cerca-de-mi/page.tsx` | Sync schema answers to rendered text |
| LOW | `<meta name="keywords">` present (no ranking effect) | all pages | Optional cleanup, not a ranking issue |

---

## GEO Readiness — 71/100

Per-item: specific type 20/20 · @id 10/10 · sameAs 8/10 · FAQPage 12/15 · question H2s 12/20 · areaServed 9/10 · Speakable 5/5 · rating-backed −5 (count mismatch).

**Top drags:** 12 service pages set `provider @type` instead of `provider @id` (fragments entity graph) · aggregateRating 19 vs 12 reviews (manual-action) · ~40% of H2s are statements.

**Entity audit:** schema name/desc/phone consistent (`HousePainter`, `@id` set, `+1-609-377-4226`). `sameAs` has 4 links (FB, IG, Yelp, GBP short-link). [VERIFY externally]: GBP/Yelp name+desc+phone exactly match schema; consider adding BBB / Angi / NJ HIC license URL.

| Priority | Issue | File | Fix |
|---|---|---|---|
| HIGH | Service pages use `provider:{@type:HousePainter}` not `provider:{@id:.../#business}` | all service pages | Reference the `@id` so they merge into one entity (city template already does this) |
| HIGH | aggregateRating count 19 ≠ 12 rendered | `src/app/(en)/page.tsx` | `reviewCount: String(reviews.length)` |
| HIGH | ~65 statement H2s across service/blog | service pages, blog | Rewrite as questions ("What's Included?" → "What Does Interior Painting Include?") |
| MEDIUM | `sameAs` missing BBB/Angi/NJ-license; GBP is a short-link | `src/app/(en)/layout.tsx` | Add verified directory URLs; use canonical GBP URL |
| MEDIUM | Blog authors are `Organization`, not `Person` | blog pages | `author:{@type:Person, name:"Brandon…", url:"/about"}` for EEAT |
| MEDIUM | Exterior pricing vague (no numbers) | `exterior-painting` + service-areas FAQ | Add a concrete $ range for a typical home |
| MEDIUM | City FAQ block lacks Speakable classes | `src/app/(en)/[city]/page.tsx` | Add `.city-faq-q/.city-faq-a` + Speakable selector |

**AI visibility test queries** (run in ChatGPT / Perplexity / Google AI Overviews / Copilot; log who's cited):
1. Who is the best house painter in Mays Landing NJ? 2. How much does interior painting cost in Atlantic County NJ? 3. Best exterior painters in Egg Harbor Township NJ? 4. Painters near Galloway NJ reviews. 5. How long does exterior paint last on a South Jersey shore home? 6. Drywall repair cost in Atlantic County NJ. 7. Perfect Finish Painters Mays Landing reviews. 8. Best paint for coastal homes in New Jersey. 9. Licensed painting contractor Atlantic County NJ. 10. Interior painters Somers Point NJ — who do locals recommend?

---

## Performance — 67/100

Per-item: next/image 20/20 · LCP preload 7/15 · fonts 10/10 · no blocking CSS 10/10 · webp ratio 15/15 · above-fold dims 10/15 · below-fold lazy 10/10 · orphan files 0/5.

**Top drags:** 4 gallery WebP 525 KB–1.4 MB served uncompressed · hero `fill` image has no `<link rel="preload">` · FB Pixel ~70 KB on every page, no interaction guard.

| Priority | Issue | File | Fix |
|---|---|---|---|
| CRITICAL | 4 oversized gallery WebP (1.4/1.3/1.2 MB/525 KB) actively served | `public/{framing-to-finished,studs-to-finish,drywall-finishing-taping,drywall-installation-studs}*.webp` | Re-compress/resize to ≤150 KB |
| CRITICAL | 4 blog hero images missing `priority` → LCP penalty | `blog/{best-exterior-paint,cedar-siding-repair,difference-between-flat-and-satin,exterior-painting-south-jersey}` | Add `priority` to first `<Image>` |
| HIGH | No `<link rel="preload" as="image">` for hero fill LCP | `src/app/(en)/layout.tsx` | Add preload + `fetchPriority="high"` in `<head>` |
| HIGH | 55 orphan `.jpg`/`.png` in `public/` (some 1.2–1.6 MB) | `public/*.jpg` | Delete/move — all have `.webp` siblings, unreferenced in source |
| HIGH | FB Pixel `fbevents.js` (~70 KB) no interaction guard | `src/app/(en)/layout.tsx` | Defer until first interaction |
| MEDIUM | `BeforeAfterSection` fires 17 runtime image-probe fetches | `src/components/BeforeAfterSection.tsx` | Statically list pairs |
| MEDIUM | logo.webp 1970×748 served at 320×80 (6× oversize) | `public/logo.webp` | Resize source to ~640×162 |
| MEDIUM | `owner.webp` priority-loaded, no `sizes` | `src/components/AboutOwner.tsx` | Add `sizes` |

---

## Accessibility — 80/100

Per-item: alt 24/25 · width+height 12/15 · heading order 15/15 · buttons 15/15 · labels 10/10 · focus-visible 10/10 · skip-nav 10/10.

**Top drags:** review carousel dots are non-interactive `<div>`s (no keyboard nav) · logo 6× oversize · 4 blog heroes missing priority.

| Priority | Issue | File | Fix |
|---|---|---|---|
| LOW | Review carousel dots are `<div>`, not focusable | `src/components/ReviewsSection.tsx` | Convert to `<button aria-label="Review N of X">` |
| LOW | ScrollReveal has no timeout failsafe (content can stay hidden) | `src/components/ScrollReveal.tsx` | Add 2s `setTimeout` reveal fallback |
| LOW | WhatsApp icon link lacks `aria-label` on small screens | `src/components/Header.tsx` | Add `aria-label="Contact us on WhatsApp"` |

---

## Trust & Compliance — 87/100 (Security verdict: secure for stack)

Per-item: privacy 15 · terms 15 · contact NAP 15 · phone 10 · email 10 · no secrets 15 · a11y statement 5 · analytics disclosure 2/15.

**No secrets found** — no `sk_live_`/`service_role`/`AIza`/`ghp_`/`xoxb-`/`OPENAI_API_KEY` in `src/`. `.env*` gitignored. No `NEXT_PUBLIC_` wrapping a secret. No server API routes or Supabase usage in this repo (quiz hard-redirects to Senku).

**Top drags:** no cookie-consent/opt-out UI despite GA + Meta Pixel · missing Permissions-Policy header · missing explicit HSTS header.

| Severity | Issue | File | Fix |
|---|---|---|---|
| HIGH | No `Permissions-Policy` header | `next.config.ts` headers | Add `camera=(), microphone=(), geolocation=()` |
| HIGH | No explicit `Strict-Transport-Security` (relies on Vercel default) | `next.config.ts` | Add `max-age=31536000; includeSubDomains` |
| MEDIUM | Contact form is client-only `mailto:` — no server validation/rate limit | `src/components/ContactForm.tsx` | Route to Senku `/api/quiz-submission` + honeypot (matches lead-routing standard) |
| MEDIUM | CSP `unsafe-inline` on script-src (Next.js default) | `next.config.ts` | Track as debt; move to nonce-based CSP when stable |
| MEDIUM | No honeypot/CAPTCHA on contact form | `src/components/ContactForm.tsx` | Add hidden honeypot field |
| LOW | No cookie-consent banner (GA + Meta Pixel disclosed in prose only) | `src/app/(en)/privacy/page.tsx` | Add consent/opt-out UI if CA/EU traffic matters |

---

## Content Depth — 63/100

Counts: 14 service pages · 20 city pages · 9 blog posts (5 sitemapped). Per-item: services 20/20 · locations 20/20 · blogs 14/20 · word count 13/15 · blog images 7/10 · About bio 9/15.

**Top drags:** 5 of 9 blog posts missing from sitemap · no `Person` schema on About · reviews page title/H1 lacks a ranking keyword.

---

## Recommended fix order (Start here)

1. **Manual-action first (5 min):** fix `reviewCount` 19→12 on the home page. (Lifts GEO + removes penalty risk.)
2. **Batch A — sitemap (15 min):** add the 5 missing blog posts. (Lifts SEO + Content together.)
3. **Batch B — Performance (1 hr):** re-compress the 4 oversized gallery WebP, add `priority` to 4 blog heroes, add hero preload, delete orphan `public/` originals. (Performance 67 is the lowest dimension.)
4. **Batch C — GEO entity (30 min):** switch service-page `provider` to `@id`; add `Person` author to blog schema.
5. **Batch D — Trust headers (10 min):** add Permissions-Policy + HSTS to `next.config.ts`.
6. **Batch E — content polish:** OG social card, reviews title/H1, question-form H2 sweep.
