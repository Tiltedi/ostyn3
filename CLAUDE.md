# Ostyn — Project Context

Marketing landing page for **Ostyn**, a Belgian premium poolhouse company
(formerly Veranclassic + Poolhouse Plaza, family-run since 1992).

## Stack

- **Next.js 16** (Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** with a custom theme in `src/styles/theme.css`
- **UntitledUI** as the component primitive layer (Button, Input,
  Carousel, etc. live under `src/components/`)
- Deployed on **Vercel** — project `ostyn-2`, production branch
  `claude/ready-3BJ0B` (also the GitHub default), URL
  https://ostyn-2.vercel.app

## Where the work lives

| Path | Role |
|---|---|
| `src/app/landing-page-17.tsx` | The whole landing page in one file — header, every section, footer. Keep it that way. |
| `src/app/page.tsx` | Re-exports `landing-page-17`. |
| `src/app/layout.tsx` | Root layout, Inter font, NL locale, Ostyn metadata. |
| `src/providers/theme.tsx` | `forcedTheme="light"` — no theme switching. |
| `src/styles/theme.css` | Design tokens. Brand color anchored here. |
| `src/components/base/buttons/button.tsx` | **Customized** — primary variant has had its border/inset shadow stripped. See gotcha #3. |
| `public/` | Ostyn logo SVGs. Real photos/video go here once uploaded. |

## Brand rules (hard constraints from the client)

1. **Backgrounds — pick from EXACTLY three values**:
   - `bg-white`
   - `bg-[#F2F2F2]`
   - `bg-[#C19848]` (Ostyn gold)

   Never cream / tan / beige. UntitledUI's default `bg-utility-brand-50_alt`
   and similar tokens have been replaced everywhere with one of these three.

2. **Text color rule**:
   - On `bg-white` and `bg-[#F2F2F2]`: text is `text-black`.
   - On `bg-[#C19848]` (gold sections like Showroom): text is `text-white`.
     CTAs inside gold sections keep their own button colors.
   - On the dark hero photo overlay: text is `text-white`, with the
     gold eyebrow as the one deliberate gold-text exception.

3. **Emphasis = font weight, NEVER color.** Wrap key words in
   `<strong className="font-extrabold">…</strong>`. No gold-tinted text.

4. **Primary CTA = exactly `#C19848`.** It is, because `theme.css` anchors
   `--color-brand-600` to `rgb(193 152 72)` and `--color-bg-brand-solid`
   maps to brand-600. Don't pass `color` to primary CTAs.

5. **CTA sizes are LOCKED:**
   - `size="xl"` — offerte, showroom, realisaties, nazorg
   - `size="lg"` — hero cards, doorlooptijd callout
   - `size="sm"` — header

   The hero uses `lg` (not `xl`) because the CTAs sit inside floating
   cards over the rounded photo — `xl` overpowers the card.

## Typography weight ladder (already shifted down once — don't bump back up)

| Used for | Class |
|---|---|
| h1, h2 base | `font-medium` |
| Card titles · eyebrows · footer headers · in-text strongs · project tags · step numbers · links | `font-semibold` |
| Strong emphasis inside headlines | `font-extrabold` |
| Body paragraphs | default (no class) |
| Testimonial quote body, stat caption | `font-medium` |

## UntitledUI structural conventions (use for every new section)

- **Section wrapper**: `<section className="bg-{white|[#F2F2F2]|[#C19848]} py-16 md:py-24">`
- **Container**: `<div className="mx-auto max-w-container px-4 md:px-8">`
- **Section anatomy** (eyebrow → headline → lead):
  ```tsx
  <p className="text-sm font-semibold tracking-wider text-black uppercase md:text-md">
    {eyebrow}
  </p>
  <h2 className="mt-3 text-display-sm font-medium text-balance text-black md:text-display-md">
    Headline with <strong className="font-extrabold">{accent}</strong>.
  </h2>
  <p className="mt-4 text-lg text-black md:mt-5 md:text-xl">{lead}</p>
  ```
- **Spacing rhythm**: `mt-3 / mt-4 / mt-5 / mt-8 / mt-10 / mt-12 / mt-16`;
  grid `gap-6` or `gap-8`. Don't invent new values mid-page.
- **Cards**: `rounded-2xl bg-white p-6 md:p-8`. No ring/border when
  sitting on F2F2F2 — the contrast does the work.
- **Icons**: from `@untitledui/icons`, sized `size-5` or `size-6`.
  Gold accent on white/F2F2F2: `text-[#C19848]`. Inside a gold circle:
  `bg-[#C19848] text-white`.
- **react-aria-components imports** must be prefixed `Aria*` per repo
  convention (`import { Button as AriaButton } from "react-aria-components"`).
- **File names**: kebab-case.

## Current page sections (top to bottom)

1. `OstynHeader` — sticky white, two rows. Utility row (h-6, 60% black
   text, klantenportaal + nl) sits tight above the main row (h-16/20,
   logo + 7 product nav links + gold "afspraak maken" + hamburger).
   Logo and main-row nav are bottom-aligned via `items-end`.
2. `HeroSection` — rounded full-bleed photo inset by `p-4/6/8`, with
   parallax on the photo. A single floating card on the bottom-left
   (bg-black/55, backdrop-blur-2xl) carries the gold eyebrow +
   display headline + a CTA row: realisaties thumbnails + "Onze
   realisaties" pill on the left, "Vraag uw offerte" main CTA pushed
   to the right via `justify-between`.
3. `PromiseSection` — F2F2F2, 3 outcome cards on white
4. `RealisatiesSection` — white, 6-project carousel with gold tag chips
5. `WaaromSection` — F2F2F2, 3 pillar cards on white
6. `ProcesSection` — white, 5-step horizontal timeline with gold numbered
   circles, F2F2F2 doorlooptijd callout
7. `ShowroomSection` — gold (#C19848), white text. Two-column layout:
   copy (eyebrow + headline + lead + address/hours + CTAs) on the
   left, square photo card on the right with parallax on the photo.
8. `TestimonialsSection` — white outer (py-16/24) with rounded
   full-bleed photo inset (mirrors Hero pattern). A top-to-bottom
   gradient overlay (black/45 → black/15 → white) keeps the headline
   legible at the top and fades the photo into the white section bg
   at the bottom for a seamless handoff. Carries a centered white
   "Getuigenissen" pill + display headline. Below, two horizontally
   marqueeing rows of white testimonial cards (title + quote +
   avatar/name/role + decorative quote glyph). Second row reverses
   direction; both pause on hover and respect
   `prefers-reduced-motion`.
9. `NazorgSection` — white, 4 aftercare items with gold check circles
10. `OfferteSection` — F2F2F2, two-column: copy/contact sidebar + contact
    form on white card
11. `OstynFooter` — white with top border, logo + 3 link columns, copyright

## Gotchas (don't re-discover these the hard way)

1. **No dark mode.** The `.dark-mode` block was deleted from `theme.css`.
   `forcedTheme="light"` in `src/providers/theme.tsx`. Don't add dark-mode
   rules back.
2. **`bg-utility-gray-900` does NOT exist** in this codebase — it was only
   defined inside the deleted dark-mode block. If you want a dark/colored
   section, use `bg-[#C19848]` (Showroom pattern). Never `bg-utility-gray-*`.
3. **Primary Button has been customized.** In `button.tsx`, the `primary`
   color variant had `shadow-xs-skeuomorphic`, the `before:` inner-highlight
   pseudo-element, and the transparent ring removed — it's now flat gold +
   white text. If you `npx untitledui add` or upgrade something that
   regenerates `button.tsx`, re-apply the strip.
4. **Vercel per-deployment URLs are immutable** (`ostyn-2-<hash>-...`) —
   they always serve the build they were minted with. Use the canonical
   `https://ostyn-2.vercel.app` to see the current production. "Redeploy"
   on an old deployment rebuilds the OLD commit — push a new commit instead.
5. **UntitledUI hero/section template variants look generic for this
   brand.** The user looked through them and explicitly preferred custom
   sections built in the UntitledUI *structural* style. When asked for new
   sections, design them; don't drop in a template.
6. **No cream / beige / tan**, even if a UntitledUI token resolves to one.

## Placeholders to swap when real assets arrive

- `HeroSection` photo: served from `public/hero.jpg` (real
  Ostyn-supplied poolhouse photo).
- `RealisatiesSection` 6 project photos: all Unsplash placeholders.
- `ShowroomSection` image: served from `public/showroom.jpg` (real
  Ostyn adviesgesprek photo, 1200×1200 JPEG).
- `TestimonialsSection` content: 3 real quotes (Devos, Palsterman,
  Lechantre) + 6 plausible placeholders written in similar tone.
  All 9 avatars are UntitledUI PRO stock photos via
  `untitledui.com/images/avatars/*` — swap for real Ostyn
  customer portraits when available. Background photo: served from
  `public/testimonials.jpg` (Ostyn-supplied poolhouse + reflecting
  pool shot) with a vertical gradient overlay
  (black/45 → black/15 → white).
- `OfferteSection` form `action="#"` is a no-op — wire to the real
  endpoint when ready.

## Dev / build / deploy

```bash
npm run dev     # localhost:3000
npm run build   # production (Turbopack)
```

Vercel auto-deploys every branch. Pushes to `claude/ready-3BJ0B`
land on production at https://ostyn-2.vercel.app; pushes to any
other branch get their own preview URL
(`ostyn-2-git-<branch>-luca-tiltedicoms-projects.vercel.app`).
Give it ~60–90 seconds after a push before reloading.

## Working with UntitledUI from MCP

The repo has access to UntitledUI's MCP server. Use these for new
components (the user has a PRO key on file):

- `mcp__…__search_components` — semantic search across the catalog
- `mcp__…__get_component` — install command for one component
- `mcp__…__get_component_bundle` — install multiple at once
- `mcp__…__search_icons` — verify icon names before importing
- `mcp__…__get_page_templates` / `…__get_page_template_files` — for
  page-level templates (mostly PRO)

If you reach for a PRO component without the user's key, the response
includes `agent_instructions` — follow them, don't try to build the
component from scratch.

## Workflow notes for new sessions

- **Branch**: stay on the branch the harness pins this session to —
  do NOT switch to `claude/ready-3BJ0B`. Each session is its own
  feature branch; Vercel auto-deploys it to a preview URL
  (`ostyn-2-git-<branch>-...vercel.app`) and the user reviews
  there. Only merge to `claude/ready-3BJ0B` (production) when the
  user explicitly approves it. Never push to `claude/ready-3BJ0B`
  on your own.
- **One file**: keep adding sections to `src/app/landing-page-17.tsx`.
  When you add one, slot the component into the `LandingPage17` render
  tree at the bottom.
- **Don't rebuild what UntitledUI ships** — Button, Input, TextArea,
  Checkbox, Carousel, etc. are already in `src/components/`.
- **Verify with `npm run build`** before pushing — the project does full
  type-check during build.
- **Commit messages**: short headline + 2-4 line body explaining the why,
  ending with the Claude Code session link footer.
