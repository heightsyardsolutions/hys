# Heights Yard Solutions — Project Status

Last updated: 2026-08-28

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis
(smooth scroll). Single-page marketing site for a landscaping business
(Haider & Patrick, co-owners — note: was briefly called "Ayhem" in one
session, corrected back to "Haider"). Repo:
https://github.com/heightsyardsolutions/hys (pushed to `main`, up to
date as of this file).

**Live**: https://www.heightsyardsolutions.com — connected to Vercel,
auto-deploys from `main` on push. Verified (2026-08-22) that the live site
is current with the latest commit (confirmed "Lawncare"/"Ayhem" content
present in the deployed HTML).

Local dev: `cd ~/heights-yard-solutions && npm run dev -- -p 3010` (no
`.claude/launch.json` port assumption — 3010 was just what this session used).

## Fully working

- **Architecture**: one vertical-scrolling page (`src/components/layout/ScrollExperience.tsx`)
  driven by Lenis for smooth/eased scroll. Sections are plain components in
  `src/components/sections/`, listed in `PANEL_COMPONENTS` in that file. Each
  section also needs a matching entry in `src/lib/panels.ts` (id + nav label) —
  the two arrays are paired by index, so don't add one without the other.
- **Nav**: fixed top bar, logo (h-12/h-14, generated favicon uses a cropped
  version of the same mark), scroll-spy active-link highlighting via
  IntersectionObserver, "Estimate" CTA button, phone number.
- **Hero**: headline + subtext + CTA, parallax background image, and a
  compact "Get A Quote" form embedded top-right (same fields/logic as the
  full estimate form, via shared `EstimateFormFields.tsx`).
- **Gallery**: three separately titled projects — "Star Black Rock &
  Slate Retaining Wall Revamp" (6 pairs), "Garden Flower Bed
  Installation — Marble White Rock & Rubber Mulch" (5 pairs), and
  "Lawncare — Mow, Edge & Blow Service" (3 pairs) — each in its own
  subfolder under `public/images/projects/` (`project-1/`, `project-2/`,
  `project-3/`) and its own carousel with dots/arrows/auto-advance.
  For project-3, the source photos had no clean before/after numbering
  — pairing was determined by matching camera framing + cross-checking
  EXIF capture timestamps (paired shots taken seconds apart; before vs
  after batches ~15–50 min apart). 3 of the 9 source photos had no
  confident match and were left out rather than guessed.
  Comparison is side-by-side static photos (before, then after with a
  2px accent-color border) — an interactive drag-to-reveal slider was
  tried first but swapped back out since the target audience skews
  older and side-by-side reads faster at a glance. Photos processed
  from full-res camera originals with `sharp().rotate()` (auto-orient)
  — see "Known quirks"
  below on why that took multiple passes the first time. Data lives in
  `projects` in `src/lib/site.ts` — add a new project by adding photos
  to a new `project-N/` folder and a new entry to that array.
- **Team**: Haider & Patrick, hand-illustrated SVG avatars (not photos),
  short bios, framed as equal co-owners (no origin-story detail per the
  user's request).
- **Services**: single unified catalog, 4 categories (Lawncare,
  Landscaping, Overgrown Removal & Demolition, Yard Cleanup), each with an
  icon + a full descriptive sentence (not just a bare item list). Source
  of truth is `serviceCategories` in `src/lib/site.ts` — each entry has
  both `description` (shown on the card) and `items` (the flat list the
  estimate form's category dropdown, `estimateCategoryGroups`, is derived
  from) — so adding/renaming a service only needs one edit, but if you
  add an item make sure it's reflected in the description text too since
  those aren't auto-generated from each other.
- **Estimate form** (`EstimateFormFields.tsx`, used by both the hero card
  and the full `EstimateForm` section): name, phone, optional email,
  category select, optional measurements (for linear-foot-priced work),
  project details. Submits to a real API route (`src/app/api/estimate/
  route.ts`) which emails the submission via Resend — no longer a
  `mailto:` link. Has a honeypot field for basic spam protection and
  proper idle/loading/sent/error UI states. **Needs `RESEND_API_KEY` set
  in Vercel to actually work in production — see "Needs attention" #1,
  this is currently blocking.**
- **Reviews section**: all 18 real reviews from the Google Business
  Profile (`customerReviews` in `site.ts`), paginated 6-per-page (3
  pages) with dot/arrow nav — a static grid of all 18 was too long, so
  it follows the same carousel pattern as the gallery. Below that, a
  CTA card with Google and Yelp buttons, both verified as *direct
  write-a-review links* (not just business search pages) — see URLs in
  `site.ts` (`googleReviewUrl`, `yelpReviewUrl`).
- **Contact section**: call, email split into Residential (live) and
  Commercial ("Coming Soon" — no address yet, intentional per user),
  Instagram, footer.
- **Floating call button**: bottom-right, phone-only, hidden on the
  Estimate and Contact panels (to avoid covering their own CTAs).
- **Favicon**: `src/app/icon.png` + `apple-icon.png`, generated by
  cropping the "HYS" mark out of the full wordmark logo and compositing
  onto a rounded-square black background (Next.js App Router auto-wires
  these, no manual `<link>` tags needed).
- **SEO**: `src/app/robots.ts` and `sitemap.ts` (Next.js file-convention
  generators, no manual XML), full Open Graph + Twitter card metadata,
  a generated 1200×630 `opengraph-image.png` (logo + tagline, matches
  site branding), canonical URL, and `HomeAndConstructionBusiness`
  JSON-LD structured data in `layout.tsx` (phone, email, areaServed,
  sameAs links to Instagram/Yelp/Google). Verified locally that all of
  it renders correctly (og:/twitter: tags, valid JSON-LD, robots.txt
  and sitemap.xml both serve correctly).

## Needs attention / half-done

1. **BLOCKING: `RESEND_API_KEY` is not set anywhere, so the estimate form
   cannot actually send email right now.** The code is done and tested
   locally (confirmed the API route validates fields, handles the
   honeypot, and fails gracefully without a key). To make it live:
   1. Sign up free at https://resend.com
   2. Create an API key
   3. In the Vercel dashboard → this project → Settings → Environment
      Variables → add `RESEND_API_KEY` (Production, and Preview/Dev too
      if you want it testable on preview deploys)
   4. Redeploy (Vercel usually needs a new deployment to pick up a new
      env var — push any commit, or use "Redeploy" in the dashboard)
   Until this is done, every estimate request — from both the hero card
   and the full form — will show the visitor an error message telling
   them to call instead. Currently sends from Resend's shared
   `onboarding@resend.dev` address (works without domain verification);
   verifying heightsyardsolutions.com in Resend later would let it send
   from a branded address instead, but isn't required for it to work.
2. **Commercial email is a placeholder** ("Coming Soon", no address) —
   business hasn't set one up yet. Swap in when they have it
   (`src/components/sections/Contact.tsx`, the second email row).
3. **No analytics.** Nothing tracks form submissions, button clicks, or
   traffic yet (no GA4, no Meta Pixel, nothing) — worth adding now that
   the site is publicly reachable at heightsyardsolutions.com.
4. **Mobile nav has no menu.** Below the `xl` breakpoint the nav links
   just disappear (only logo + phone + Estimate button remain) — there's
   no hamburger/drawer. Relies on the floating call button + normal
   scroll to reach everything. Works, but is a known simplification.
5. **Scope note on fire pits**: "Outdoor Custom Firepits Installation" is
   now listed as a normal Landscaping sub-service (per the user's latest
   instruction), but earlier in the project it was explicitly a
   "Coming Soon" item because they had no completed fire pit project yet.
   Worth a quick confirmation with the user that this was an intentional
   change and not something that should still say "coming soon."

## Next 3 steps (recommended)

1. **Set `RESEND_API_KEY` in Vercel** (see step-by-step above) — this is
   the only thing standing between the estimate form and actually
   working in production. Everything else about it is done.
2. **Add analytics** (GA4 is the default choice) now that the site is
   live and has real SEO groundwork — otherwise there's no way to know
   whether any of this is working (traffic, form conversion rate, etc).
3. **Get final business details from the user**: commercial email
   address (or confirm it's staying "Coming Soon"), and confirm the
   fire-pit scope note above.

## Known quirks (context for next session, not site bugs)

- **Image orientation**: the original camera PNGs in the gallery folder
  carry an orientation hint that `sharp` only respects if you call
  `.rotate()` with no arguments (auto-orient). Forgetting this caused
  several rotated/upside-down photos that took multiple passes to catch
  and fix. One photo pair had no such metadata at all and needed a
  manual rotation instead — if more photos get added later, always
  visually verify each one after processing, don't assume `.rotate()`
  alone is enough for every source file.
- **Browser preview tool flakiness**: this session's browser-preview pane
  repeatedly returned blank/black screenshots due to what appears to be a
  tab-visibility issue in the tooling itself (confirmed via
  `document.hidden` checks), unrelated to the actual site. When
  screenshots come back black, verify via DOM inspection
  (`get_page_text`, `read_console_messages`, `javascript_exec` checks on
  element positions/content) rather than assuming the site is broken —
  it consistently wasn't.
- **Dev server HMR cache**: after several rapid consecutive file edits,
  the Next.js dev server occasionally throws stale-module errors
  (`X is not defined`, `Element type is invalid`) that aren't real code
  bugs — a clean restart (`rm -rf .next` + restart `npm run dev`) always
  resolved them. Type-check (`npx tsc --noEmit`) and lint
  (`npx next lint`) are the reliable signal for whether code is actually
  broken; a dev-server error alone isn't proof.
- **Never run two `next dev` processes against the same project
  directory at once** (e.g. two Claude sessions both working on this
  repo), even on different ports — they share the same `.next` build
  cache and WILL corrupt it (webpack "ENOENT ... rename ... pack.gz"
  errors, one or both servers going unresponsive). If a second dev
  server is genuinely needed at the same time, give it an isolated
  build output by temporarily setting `distDir: ".next-verify"` in
  `next.config.mjs` before starting it (Next.js re-reads config only at
  startup, so this is safe to change while another `next dev` is
  already running) — just remember to `git checkout -- next.config.mjs
  tsconfig.json` and delete the temp dir afterward, since Next.js also
  auto-appends the new dir to `tsconfig.json`'s `include`.
- **Framer Motion `AnimatePresence` + a backgrounded/hidden browser tab
  = state updates that appear to "not work."** Browsers throttle
  `requestAnimationFrame` for hidden tabs, and `AnimatePresence` (with
  `mode="wait"`) waits for the exit animation to finish before mounting
  the next state — if the tab is hidden when you click something, the
  DOM can look stuck on the old content even though the underlying
  React state changed correctly. Don't conclude a click handler is
  broken from one immediate DOM check; wait a beat (or check again in a
  separate tool call) before assuming it's a real bug — this cost real
  time diagnosing the (working) review-pagination carousel.
