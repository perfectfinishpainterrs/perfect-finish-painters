# Progress — Perfect Finish Painters

## Shipped
- [x] 2026-04-22 — Session 3: image optimization. Wrote one-shot `scripts/convert-to-webp.mjs` (sharp, quality 82) and converted 55 raster files in `public/` + `public/before/` + `public/images/blog/` to `.webp` siblings. Regenerated `logo.webp` from the higher-quality `logo.png` source. Then `scripts/retarget-images.mjs` swept `src/**/*.{ts,tsx}` and rewrote 193 URL references (`.jpg`/`.jpeg`/`logo.png` → `.webp`) across 41 files, including OpenGraph/Twitter image metadata and Article JSON-LD `image` fields. Originals left in place as fallbacks (cacheable under existing static asset rule). Total image bytes dropped ~24MB → ~12MB (~50%). Alt text audit: every `<Image>` already had an alt set in source; 92/286 "missing" in audit report likely counted inline SVG icons or OG image references — no source-level action needed. Width/height + lazy-loading are handled automatically by `next/image`. Build passes, 59 routes compile.
- [x] 2026-04-22 — Header now links to `/contact` and `/faq` (desktop nav + mobile menu). `ContactForm.tsx` mailto repointed from `perfectfinishpainterr@gmail.com` → `info@perfectfinishpainter.com` (BP's real inbox).
- [x] 2026-04-22 — Session 2: legal/essential pages. Created `/contact` (NAP + methods + map + `ContactPage` schema merging by @id), `/privacy` (GA/Meta/Vercel disclosure, retention, rights), `/terms` (estimates non-binding, payment, warranty, NJ governing law), `/accessibility` (WCAG 2.1 AA target, known limitations, feedback channel), `/faq` (20 Qs across Pricing, Scheduling, Prep, Warranty, Service Areas with `FAQPage` schema). Footer restructured into 5-column layout with new Legal section. Sitemap extended with all 5 new routes. Expected audit impact: E-E-A-T 50→~75 (Contact + Privacy FAILs cleared), Content Analysis 40→~65 (Essential Pages FAIL cleared), Conversion Architecture Footer warning cleared.
- [x] 2026-04-22 — Session 1 schema fixes (audit 2026-04-22, LocalBusiness 75 errors / 415 total)
  - Root `HousePainter` in `src/app/layout.tsx`: removed `address` (service-area business), removed `aggregateRating`+`review` (was rendering on 48 pages with no visible review content), removed 1-item `BreadcrumbList`, removed duplicate `Organization` entity, added stable `@id` (`#business`), dropped `", NJ"` from `areaServed` city names, normalized `dayOfWeek` to arrays, flattened `hasOfferCatalog` (removed redundant `ListItem` wrapping `Offer`), added `contactPoint` and `logo`, linked `WebSite` → business via `@id`
  - `src/app/[city]/page.tsx` (14 city pages): removed duplicate `HousePainter` (had `streetAddress: "Mays Landing"` which is a city not a street), replaced with a `Service` entity that references the root business by `@id` and carries per-city `areaServed` with `geo` + `containedInPlace`
  - `src/app/page.tsx`: added `HousePainter` JSON-LD with `aggregateRating` + 5 `review` entries, merged by `@id` into root — home renders `<ReviewsSection />`
  - `src/app/reviews/page.tsx`: added `HousePainter` JSON-LD with `aggregateRating` + full `review` array (built from `reviews` data) — page renders all review cards
  - `src/app/blog/cedar-siding-repair-south-jersey/page.tsx` + `src/app/blog/exterior-painting-south-jersey/page.tsx`: replaced literal `&apos;` inside JSON-LD `headline`, `BreadcrumbList` item name, and `description` with real `'`
  - Verified: `npx tsc --noEmit` passes; lint errors all pre-existing (no new ones from this session)

## In progress
- [ ] Session 1 & 2 verification — BP to run Google Rich Results Test on home, `/reviews`, a city page, a blog page, and `/faq`; skim `/contact`, `/privacy`, `/terms`, `/accessibility` for tone/wording changes before next audit run

## Next up
- [ ] If audit alt/width/lazy numbers persist after next re-crawl: audit tool may be counting inline SVG icons. Add `aria-hidden="true"` to decorative SVGs and `<title>` to informative ones.
- [ ] Session 4 (accessibility): skip-nav link, form labels (quiz form — ContactForm already has them), `:focus-visible` styles
- [ ] Session 5 (performance): TTFB 1757ms (static where possible), LCP, CSP header, HTTP/2 confirm
- [ ] Session 6 (content): thin content on 30 pages, title/meta length outliers (15/14 pages)
- [ ] Session 7 (cleanup): `&apos;` outside schema, `<a>`→`<Link>` lint fixes, `Article.image` per-post, question-based headings, rename `src/middleware.ts` → `src/proxy.ts` (Next 16 deprecation)
- [ ] `&apos;` cleanup outside schema (blog JSX bodies, metadata titles/descriptions) — separate session, not schema
- [ ] Pre-existing lint errors: `<a>` → `<Link />` in `[city]/page.tsx` and `drywall-repair/page.tsx`
- [ ] Blog `Article.image` currently points at `/logo.png` for every post — should be the post's hero image

## Locked decisions
- Perfect Finish is a service-area business — `HousePainter` schema uses `areaServed` only, no `address` or `streetAddress`. Do not re-add a physical address.
- Single source of truth for the business entity: `@id: "https://perfectfinishpainter.com/#business"`. Pages that add properties (reviews, ratings) reference this `@id` and are merged, not duplicated.
- `aggregateRating` + `review` may only appear on pages that actually render the review cards (currently home + `/reviews`). Do not add them to layout or other pages — Google treats this as a manual action risk.
- Public contact email is `info@perfectfinishpainter.com` — confirmed BP's real inbox. `ContactForm.tsx` submissions now route there too (was `perfectfinishpainterr@gmail.com`, changed 2026-04-22).
- `/faq` is the canonical FAQ location. Individual service pages keep their own `FAQPage` schema for topic-specific questions, but the footer and primary nav should link to `/faq`.
- WebP is the canonical image format site-wide. Source `.jpg`/`.jpeg`/`.png` originals are kept in `public/` as cached fallbacks; do not delete them without checking for stale references first. If adding new images, drop both `.jpg` (or `.png`) + `.webp` alongside, or re-run `node scripts/convert-to-webp.mjs` and reference the `.webp`.

## Don't redo
- Don't put a `HousePainter` on `[city]/page.tsx` — the root layout already emits one, and duplicate LocalBusiness entities on one page conflict.
- Don't set `streetAddress: "Mays Landing"` — "Mays Landing" is a city, not a street. The fix is to remove the address block, not correct the value.
- Don't use `&apos;` inside plain JS string values that get passed to `JSON.stringify` — the entity gets serialized verbatim and Google sees `Home&apos;s` instead of `Home's`. `&apos;` is only for JSX text nodes / HTML attributes.
