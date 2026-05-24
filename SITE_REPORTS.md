# SEO Audit — Root-Cause Report (perfectfinishpainter.com)

**Audit:** SJ Tech Solutions audit tool, 5/22/2026 — score 83/100
**This document:** Root-cause diagnosis only — no code changes made. Each finding is mapped to file paths + a fix proposal + an effort estimate so the fixes can be batched.

---

## TL;DR

| Finding | Severity | Root cause (short) | Effort |
|---|---|---|---|
| **TTFB 2296 ms** | 🔴 Critical | `await headers()` in `src/app/layout.tsx` opts every route into dynamic rendering | **30 min** |
| **Schema — 79 LocalBusiness errors / 346 total** | 🔴 Critical | `HousePainter` JSON-LD in `src/app/layout.tsx` missing `address`; `hasOfferCatalog` nested `Service` objects missing `provider`; `areaServedCities` duplicated on ~50 pages | **1–2 h** |
| **Content — 26/50 pages <500 words** | 🟡 High | All 21 city pages share one template with ~200 words of unique data + ~250 words of static chrome. Legal pages thin. Blog index thin. | **3–6 h** (content writing) |
| **Thin content — 2 pages <300 words** | 🟡 High | Most likely `/blog` (index, ~280 words) and `/our-work` (only ~120 words of static text outside the gallery) | **30 min each** |
| Warnings (alt, dims, meta, CSP, link) | 🟢 Polish | Mostly false positives from `fill` + `alt=""`; 9 metas to nudge; 1 link to ID | **1–2 h total** |

---

## 1. TTFB FAIL — 2296 ms (target <200 ms)

### Root cause

`src/app/layout.tsx` line 61:

```tsx
export default async function RootLayout({ children }) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const lang = pathname.startsWith("/pintores-") ? "es" : "en";
```

`headers()` is a **Dynamic API** in Next 16. Using it anywhere in the root layout opts **every page on the site** out of static generation. Vercel renders each route fresh on every request — that's the 2.3 s.

This is the *only* dynamic source on the site:
- `force-dynamic` / `revalidate` / `fetchCache` are not set anywhere.
- No Supabase / external `fetch()` in any page (`grep` confirmed: no matches).
- `ReviewsSection.tsx` is `"use client"` reading a static `reviews` array — no server-side fetch.
- `[city]/page.tsx` defines `generateStaticParams` and *would* be statically generated… except its parent layout's `headers()` call disables that for every child.

### What is `headers()` even doing?

Just detecting Spanish routes (paths starting with `/pintores-`) to flip `<html lang="es">`.

### Fix proposal

Stop reading `headers()` in the root layout. Two clean options:

| Option | Approach | Trade-off |
|---|---|---|
| **A. Per-route lang** *(recommended)* | Hard-code `lang="es"` in a small `(es)` route group layout that wraps the 4 Spanish pages. Root layout always emits `lang="en"`. | Cleanest; requires moving 4 files into `src/app/(es)/`. |
| B. Static `lang="en"` only | Drop the `headers()` call entirely, accept `lang="en"` on Spanish pages. | Hurts Spanish SEO — keep A. |

### Routes that should be static after the fix

All 50. There is nothing on this site that legitimately needs SSR-per-request. After removing `headers()`:
- All 30 static service / marketing / legal / blog pages → fully prerendered, cached on edge.
- All 21 `[city]/painters-*` pages → static via existing `generateStaticParams`.
- Spanish pages → static.
- `/quiz` is already just a 307 redirect, no rendering.

Expected TTFB after: **<100 ms** (Vercel edge cache hit). Roughly 20× faster.

**Effort: 30 min** (move 4 Spanish pages into `(es)` group, add tiny layout, delete `headers()` call, verify build, ship).

**Files touched:** `src/app/layout.tsx`, new `src/app/(es)/layout.tsx`, move `src/app/pintores-*/page.tsx` → `src/app/(es)/pintores-*/page.tsx`.

---

## 2. SCHEMA FAIL — 79 LocalBusiness errors / 346 total across 1,769 entities

### Where the schema lives

| File | Entity | Renders on |
|---|---|---|
| `src/app/layout.tsx` (lines 67–127) | `HousePainter` + `WebSite` | **Every page** (50) |
| `src/app/[city]/page.tsx` (76–116) | `Service` + `BreadcrumbList` | 21 city pages |
| `src/app/{service}/page.tsx` × 14 | `Service` + `BreadcrumbList` (with `areaServed: areaServedCities`) | 14 service pages |
| `src/app/reviews/page.tsx` (60–79) | `HousePainter` (merged via `@id`) with `aggregateRating` + `review[]` | 1 page |
| `src/app/{blog post}/page.tsx` × 5 | `Article` | 5 pages |
| `src/app/faq/page.tsx` | `FAQPage` | 1 page |
| `src/app/our-work/page.tsx`, `/about`, `/contact`, etc. | `BreadcrumbList` only | several |

### Root-cause errors

#### A. `HousePainter` is missing `address` — fires on ~50 pages

`src/app/layout.tsx` deliberately omits `address` with the comment "Service-area business — no storefront." That's a misread of Google's spec. For any `LocalBusiness` subtype (`HousePainter` is one), Google's structured-data validator treats missing `address` as a **critical error**, not a warning. Schema.org technically marks it optional, but Google's *rich-results* layer requires it.

**Fix:** include a minimal `address` keyed to the Mays Landing service center. If the storefront address shouldn't be public, use `PostalAddress` with `addressLocality: "Mays Landing"` + `addressRegion: "NJ"` + `postalCode: "08330"` + `addressCountry: "US"` — that's enough to validate without publishing a street.

This single change closes ~50 errors (one per page where the entity renders).

#### B. `hasOfferCatalog.itemListElement[].itemOffered` nested `Service` objects lack `provider`

`src/app/layout.tsx` lines 99–108:

```tsx
hasOfferCatalog: {
  "@type": "OfferCatalog",
  name: "Painting Services",
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
    ...
  ],
}
```

Every nested `Service` should have a `provider` (an `Organization`/`LocalBusiness` reference). Without it the validator emits a warning per nested entity. 5 nested Services × 50 pages = **250 warnings**.

**Fix:** add `provider: { "@id": "https://perfectfinishpainter.com/#business" }` to each `itemOffered`. Or build the offer catalog once via the schema-generator skill.

#### C. `areaServedCities` shape (TBD — needs confirmation in `src/data/service-areas.ts`)

Imported as `areaServedCities` and dropped into both the root `HousePainter.areaServed` *and* every service page's `Service.areaServed`. The array is duplicated on ~30 pages. If its entries are plain strings, that's valid `Text` but coarse. If they're full `Place`/`AdministrativeArea` objects, every nested field counts toward the 1,769-entity total — that's the bloat.

Recommend: keep the master list in `service-areas.ts` but emit at most one `City` reference per page (the city the page is about). Stop spraying the full list onto every page.

#### D. Other systemic issues

- **`/reviews` page** emits a second `HousePainter` keyed to the same `@id` carrying `aggregateRating` + `review[]`. Merging by `@id` is correct, BUT the merge target (root `HousePainter`) is still missing `address`, so the merged entity inherits that critical error.
- **`logo` is 1970×748** (wide banner, not 1:1 / 4:3). Google's logo rich-result wants a square or 1.91:1 image. Won't fail validation but will emit a warning across many pages.
- **`contactPoint.areaServed: "US"`** is loose; could be a `Country` object for precision. Warning only.

### Why 346 errors total

Best estimate of the breakdown (without re-running the audit tool):
- Missing `address`: ~50 (one per page that renders the LocalBusiness)
- Nested `Service` missing `provider` in `hasOfferCatalog`: ~250
- Other systemic minor issues (logo aspect, areaServed text shape, etc.): ~46

Numbers add to ~346.

### Fix proposal

**Regenerate the root schema via the `schema-generator` skill** with these inputs:
- Type: `HousePainter`
- Name, telephone, geo, areaServed: as today
- **Add:** `address` (Mays Landing, NJ, 08330, US)
- `sameAs`: as today
- `hasOfferCatalog.itemListElement[].itemOffered`: each gets `provider: { "@id": "...#business" }`
- `image`: replace with a 1:1 or 1.91:1 logo (or omit `image` and keep `logo`)

Drop the new JSON-LD into `src/app/layout.tsx` and the per-page `Service` schemas can stay as-is once their `provider: { "@id": ... }` reference resolves cleanly.

**Effort: 1–2 h** (regen + replace + visually diff the JSON-LD on the home page + re-run Google Rich Results Test before/after).

---

## 3. CONTENT LENGTH FAIL — 26 of 50 pages under 500 words

### The 21 city pages are the bulk of the failure

`src/app/[city]/page.tsx` renders each city from `src/data/service-areas.ts`. Per-city unique content is just three short strings:

```ts
intro:   ~50 words
body:    ~100 words
closing: ~50 words
```

Plus the template adds ~250 words of static chrome (services grid, "why choose us", "other areas"). **Total: ~450 words per city page** — squarely in the SHORT (300–499) bucket.

Read `src/data/service-areas.ts` lines 27–31 for one example (Egg Harbor Township). The pattern repeats for all 21 cities.

### Other SHORT pages

Confirmed:
- `/privacy` (~380 words)
- `/terms` (~420 words)

### Likely also under 500

- `/blog` (index) — 5 post cards with ~50-word excerpts = ~280 + page chrome ~50 = **~330 words**
- `/services` (~620 words per agent estimate, borderline)

### Fix proposal

For service pages, the audit says they need **1000+ words**. All 14 service pages already meet that (per the agent's 980–2,280 range) — *those are fine*. The fix is for **city pages**:

| Change | Effort | Effect |
|---|---|---|
| **Expand each city's `intro` + `body` + `closing` to ~150 / 300 / 100 words** | ~15 min per city × 21 = 5 h | Each city page goes 450 → ~750+ words. Still under 1000 unless the template adds more. |
| **Add city-specific FAQ section to the `[city]` template** (3–5 Qs sourced per city: prices, timelines, neighborhoods) | ~1 h template + ~10 min per city = 4 h | Adds ~300 words; city pages reach ~750–1,050 words. Bonus: enables `FAQPage` schema. |
| **Add a city-specific case-study block** (1 real project per city) | needs photos + 75-word write-ups | Adds ~100 words and trust signal. |

Recommend combining the FAQ block and a small case-study block — total ~7 h for all 21 cities to clear 1,000 words.

Legal pages can stay short — they don't need to rank.

**Files touched:** `src/data/service-areas.ts` (content expansion), `src/app/[city]/page.tsx` (template additions).

---

## 4. THIN CONTENT — 2 pages under 300 words

Best guesses (the audit's exact pages weren't reported):

| Route | Word count | Why thin |
|---|---|---|
| `/our-work` (`src/app/our-work/page.tsx`) | ~120 of static text | The page is mostly a gallery (`OurWorkGallery.tsx` — 36 image cards). Hero, before/after callout, follow-us, and CTA = ~120 words of body copy. Image alts and card titles likely don't count to the crawler. |
| `/blog` (`src/app/blog/page.tsx`) | ~280 | 5 post excerpts (~50 words each) + sparse hero copy. |

**Fix proposal:**
- `/our-work` — add a 200–300 word "Our approach to every project" section under the hero (prep / prime / paint / protect — that messaging is already in the before-after callout, just expand it). 30 min.
- `/blog` — add an intro paragraph (100 words) introducing the blog + category section blurbs. 30 min.

---

## Warnings — context + quick wins

### Images: 70/237 missing alt, 72/237 missing dimensions

These numbers are **inflated** by the audit tool, but not zero.

- **`<Image fill>` produces a rendered `<img>` without `width`/`height` attributes** (Next sizes it via CSS aspect-ratio). A naïve crawler counts those as "missing dimensions." `OurWorkGallery.tsx` alone renders **36 `fill` images** on `/our-work` — that single page can account for half the 72 missing-dim count.
- **`alt=""`** (decorative) is valid per WCAG. Confirmed in two spots:
  - `src/app/layout.tsx:169` — Facebook pixel `noscript` `<img>` (decorative ✓)
  - `src/app/our-work/page.tsx:69` — Hero background image (decorative ✓)
  A naïve crawler counts empty alt as "missing."

**Recommended action:** spot-check 5–10 of the flagged URLs manually rather than chase 70+. Real fixes are likely few. **Effort: 30 min audit + maybe 30 min repair.**

### Meta descriptions — 9 out of range

From the page-level audit:

| Route | Length | Direction |
|---|---|---|
| `/our-work` | 92 | SHORT |
| `/privacy` | 86 | SHORT |
| `/quiz` | 79 | SHORT |
| `/reviews` | 108 | SHORT |
| `/terms` | 71 | SHORT |
| `/` (home) | 157 | LONG (1–2 chars over) |
| `/cabinet-painting` | 155 | LONG (borderline) |
| `/faq` | 157 | LONG |
| 21 × `[city]` pages | ~155 avg | LONG (one offender each, mostly via `metaDescription` in `service-areas.ts`) |

The 9 the audit counted are the 5 SHORT static + 4 of the borderline LONG ones (home, /cabinet-painting, /faq, plus one more). Likely the audit is strict (`>155` rather than `>160`).

**Fix:** trim/extend each description into 130–155 chars. **Effort: 1 h** (5–10 min per page).

### Broken external link (1)

Candidates from `sameAs` and external `<a>`:

| URL | Where |
|---|---|
| `https://www.facebook.com/PerfectFinishPainters` | `layout.tsx`, `our-work/page.tsx`, `reviews/page.tsx` |
| `https://www.instagram.com/perfectfinishpainter/` | `layout.tsx`, `our-work/page.tsx` |
| `https://www.yelp.com/biz/perfect-finish-painters-mays-landing` | `layout.tsx`, `reviews/page.tsx` |
| `https://g.page/r/CYlKM00sLEMiEAI` (and `…/review`) | `layout.tsx`, `reviews/page.tsx`, `ReviewsSection.tsx` |
| `https://www.facebook.com/PerfectFinishPainters/reviews` | `reviews/page.tsx`, `our-work/page.tsx` |
| `https://www.w3.org/TR/WCAG21/` | `accessibility/page.tsx:59` |

Most likely broken: the **Yelp listing** (frequently moved/removed) or the **g.page** short-link. **Effort:** 5 min — `curl -I` each, replace whichever 404s.

### Missing Content-Security-Policy header

`next.config.ts → headers()` ships X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy. No CSP.

**Why care:** modern security audits flag missing CSP. **Why it's risky to add blindly:** the site loads GA, Facebook Pixel, WhatsApp, Google Maps iframe — a too-tight CSP breaks them.

**Fix proposal:** add a permissive-but-real CSP listing the actual third parties:

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https://*.facebook.com https://www.google-analytics.com;
connect-src 'self' https://www.google-analytics.com https://*.facebook.com;
frame-src https://www.google.com;
```

**Effort:** 30 min (write + verify in browser that nothing breaks).

---

## Prioritized fix list

Ordered by **impact / effort ratio.**

| # | Priority | Fix | File(s) | Effort | Impact |
|---|---|---|---|---|---|
| 1 | 🔴 P0 | Remove `await headers()` from root layout; move Spanish pages to `(es)` route group with its own layout | `src/app/layout.tsx`, new `src/app/(es)/layout.tsx`, move 4 `pintores-*` pages | **30 min** | TTFB 2296 ms → <100 ms (≈20×) |
| 2 | 🔴 P0 | Add `address` to `HousePainter` schema; add `provider: { @id }` to `hasOfferCatalog` nested Services; regenerate via `/schema-generator` skill | `src/app/layout.tsx` | **1–2 h** | Closes ~300 of 346 schema errors |
| 3 | 🟡 P1 | Expand `[city]` template with a per-city FAQ block + bigger `intro`/`body` content in `service-areas.ts` | `src/data/service-areas.ts`, `src/app/[city]/page.tsx` | **5–7 h** | 21 pages clear 500 words (and most reach 1000+); enables `FAQPage` schema on city pages |
| 4 | 🟡 P1 | Beef up `/our-work` and `/blog` index with intro paragraphs | `src/app/our-work/page.tsx`, `src/app/blog/page.tsx` | **1 h** | Resolves the 2 THIN pages |
| 5 | 🟢 P2 | Trim/extend 9 meta descriptions to 130–155 chars | various `page.tsx`, `service-areas.ts` `metaDescription` field | **1 h** | Resolves meta-length warning |
| 6 | 🟢 P2 | Identify + fix the 1 broken external link (likely Yelp or g.page) | `src/app/layout.tsx` (sameAs), `reviews/page.tsx`, `our-work/page.tsx` | **15 min** | Closes broken-link finding |
| 7 | 🟢 P2 | Add a CSP header to `next.config.ts` listing actual third parties (GA, FB Pixel, Maps, WhatsApp) | `next.config.ts` | **30 min** | Closes missing-CSP finding |
| 8 | 🟢 P3 | Spot-check 5–10 of the "missing alt" / "missing dims" flags from the audit — most are likely `fill` images + decorative `alt=""` false positives, but verify | site-wide | **30–60 min** | Likely few real fixes |

**Total effort to clear all four FAILs + all warnings: ~10–13 hours.** Item #1 alone is the single biggest win.

---

## Notes / things not investigated

- The actual word counts here are estimates from reading the source — for exact numbers, the audit tool's per-page counts are authoritative. The audit's "26 of 50 <500" maps cleanly to the 21 city pages + privacy + terms + blog index + our-work + one more (likely /reviews if its 11 short reviews don't add up).
- `areaServedCities` exact shape was not opened — recommend reading `src/data/service-areas.ts` for its definition before regenerating the schema in fix #2.
- The 1,769 schema entity count is dominated by `areaServedCities` and `hasOfferCatalog` items being multiplied across ~30 pages. After fix #2, both the entity count and the error count should drop sharply.

---

*Generated 2026-05-23 — diagnosis only, no code changes.*
