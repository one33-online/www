# Concept D — Dark Editorial

This is the Concept D session plan. Read `docs/plans/00-shared.md` first and complete all steps there before reading this file.

---

## Design direction

**Name:** Dark Editorial
**Character:** The site opens in darkness and stays predominantly dark. Parchment and cream sections appear as deliberate relief — not the default. The rhythm is more journalistic than Concept A: a decorative "133" stat in the hero, numbered method columns, a standalone give section, a documentation credentials strip, a story image row treated as a proper visual section, and a pull-quote interstitial before the partner section. The nav carries a visible "Donate" CTA. The accent — `--one33-rust` — appears precisely and earns its place.

**Reference:** The HTML prototype shared by Josh during concept review (dark editorial, noise overlay, square cursor, Cormorant + Outfit font pairing, ink/parchment palette). Adapt to the project font system and Next.js component constraints.

**Brand filter:** Emotional. Aggrieved. Grateful. *(Richard's confirmed words, Session 3; this plan was written against the earlier working words — Resolved. Grounded. Human.)* Against those original words, this concept felt the most *resolved* of the four — it does not reach for warmth through texture or approachability. The warmth is in the copy and the photography, not the visual system.

**What it is not:** A softer Concept A. Each structural addition (Give section, docs strip, image strip, pull quote) has a purpose and should not be removed for simplicity.

---

## How this concept deviates from the shared section order

The shared plan defines 5 sections: Hero → Why We Exist → What We Do → Partner With Us → Stories. Concept D expands and restructures this:

| Shared plan | Concept D | Note |
|---|---|---|
| Hero | Hero | New layout treatment — bottom-left, decorative stat |
| Why We Exist | Why We Exist (Statement) | Same content, different visual treatment |
| What We Do | What We Do | Numbered columns (01 / 02), vertical divider, tags |
| Partner With Us | Stories — image strip | Visual placeholder promoted from text to image section |
| Stories | Pull quote | Interstitial between Stories and Partner |
| Footer | Partner With Us | Three cards pointing to Give, Skills, Relationships |
| — | Documentation strip | **New** — NPO / PBO / 18A credentials with pill links |
| — | Give | **New** — Standalone donation section |
| — | Footer | Shared footer |

The documentation strip and standalone give section are explicitly requested. They do not exist in A, B, or C.

---

## Palette

Same family as Concept A. Accent shifts from `--one33-terracotta` to `--one33-rust` throughout.

| Token | Value | Use |
|---|---|---|
| `--one33-ink` | `#0e0c0a` | Hero, footer, partner section |
| `--one33-cream` | `#f5f0e8` | Statement, stories strip |
| `--one33-paper` | `#eae4da` | Pull quote, documentation strip |
| `--one33-rust` | `#b84a2c` | All accents — kickers, CTAs, card hover rule, pills |
| `--cd-ink-mid` | `#1c1a15` | Method section, give section backgrounds |
| `--cd-ink-light` | `#2d2a24` | Partner card hover state |

---

## Typography

The HTML reference uses Cormorant Garamond for all serif type — a more dramatic cut than Instrument Serif. In the Next.js implementation, Instrument Serif (`font-serif-display`) substitutes for all display serif moments. The visual weight will differ; the brand register (then Resolved, Grounded, Human; now Emotional, Aggrieved, Grateful) is not harmed by the substitution.

| Role | Font | Notes |
|---|---|---|
| Nav, kickers, labels | Instrument Sans 400, uppercase, tracked | Same as all concepts |
| Section headings | Instrument Sans 600 | Never serif |
| Body copy | Instrument Sans 400 | Generous line-height |
| Hero headline em (`It is a reckoning.`) | `font-serif-display` italic | One moment in hero only |
| Pull quote | `font-serif-display` italic | The one full serif display moment |
| Documentation strip left text | `font-serif-display` regular | Lends authority to the credentials copy |

Nowhere else. Not on method titles, not on partner headings, not on the give section.

---

## Navigation

- `default` variant (transparent → scrolled dark blur) — same behaviour as Concept A
- Nav links: `What We Do` · `Partner With Us` · `Governance`
- **New: `cta` prop added to `nav.tsx`** — renders a small button-styled anchor at the far right of the desktop nav. Styled via `concept-d.css` under `.concept-d .nav-cta-btn`. Hidden on mobile (hamburger overlay handles navigation already). No other concept uses this prop unless they opt in.

---

## Noise overlay

Implemented as a `::before` pseudo-element on `.concept-d`:

```css
.concept-d::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,...");
  background-size: 200px;
}
```

Pure CSS — no JS, no additional client component.

---

## What the HTML reference uses that cannot be implemented here

1. **Custom cursor** — The HTML sets `cursor: none` on `<body>` and positions a `div.cursor` via `mousemove`. Not implemented because:
   - Breaks keyboard and screen reader UX
   - Requires a top-level client component wrapping the full page
   - Conflicts with interactive elements that restore native cursor behaviour
   - Decision: drop it entirely. The concept works without it.

2. **Cormorant Garamond** — The reference font. Adding it would require a new font token in `globals.css` that affects all concepts. If Richard prefers it for D, add to `docs/outstanding-items.md` as a post-selection task.

3. **Real document downloads** — The doc pills link to `#` for now. Wire up when NPO/PBO/18A PDFs are hosted. Add to `docs/outstanding-items.md`.

---

## Section-by-section design decisions

### Hero
- Full viewport height (`100dvh`)
- Background: `--one33-ink`
- Photography: `<Image>` with `object-fit: cover`, `priority`, `--one33-ink` background placeholder, 35% dark overlay
- Layout: `flex-direction: column; justify-content: flex-end` — text anchored bottom-left, padding `0 3rem 5rem`
- Eyebrow: `"South Africa — Reconciliation"` — rust kicker
- H1: `"Reconciliation is not a moment."` first line; `"It is a reckoning."` wrapped in `<em>` with `font-serif-display` italic, muted cream (`0.55` opacity)
- Body: `"South Africa has named its wounds..."` — Instrument Sans 400 (or weight 300 if available), cream at 60%, `max-width: 42ch`
- Scroll indicator: animated rust line (CSS `scaleX` keyframe) + "Scroll" label — `aria-hidden`
- Decorative stat (top-right, `position: absolute`): "133" large, near-transparent (`opacity: 0.08`); "Psalm 133 — unity" label, small, very muted — `aria-hidden`

### Why We Exist (Statement)
- Background: `--one33-cream`
- Section: `position: relative`
- Kicker: "Why One33 Exists" — rust
- H2: `"Restoration requires someone to take responsibility — and act on it."` — Instrument Sans, large (`clamp(2.8rem, 6vw, 6.5rem)`), light weight (`font-weight: 400`), `<strong>` on "take responsibility"
- Below heading: `"Not surface-level peace. Not forced agreement."` — Instrument Sans 400 italic, muted ink, as a styled note — this is confirmed copy
- Right-side aside (desktop: `position: absolute; right: 3rem; bottom: 12rem`): 2px rust left border, `"One33 exists at the intersection of the relational and the practical — because without both, neither lasts."` — muted text, `max-width: 28ch`
- Mobile: aside falls into normal flow below the heading

### What We Do
- Background: `--cd-ink-mid`
- Kicker: "What We Do" — rust
- Grid: `grid-template-columns: 1fr 1px 1fr` with a vertical divider div (`background: rgba(245,240,232,0.1)`)
- Each column:
  - Large decorative number `01` / `02` — `opacity: 0.08`, large font-size, no serif
  - H3: "Relational Work" / "Practical Work" — Instrument Sans 600
  - 2px rust `<span>` rule below title
  - Body copy (use revised language — no flagged phrases)
    - Relational: `"We put people who are trained to hold difficult conversations into rooms with communities — across race, gender, culture, and generation. We show up consistently, long enough to be trusted. This work, we do ourselves."`
    - Practical: `"We identify what has been lost — then connect the organisations, government resources, and skills equipped to restore it. One33 does not build. It positions the people who do, in the places where they are needed."`
  - Tag: `"Direct Facilitation"` / `"Connector & Facilitator"` — rust text, rust border pill, no fill
- Closing line below grid: `"We don't just repair relationships. We help rebuild communities."` — confirmed copy, Instrument Sans 600, centred, cream
- Mobile: single column, vertical divider hidden

### Stories — Image Strip
- Background: `--one33-cream`
- Kicker: "The South African Story" — rust
- H2: `"Every face carries a history that deserves to be known."` — Instrument Sans 600, large
- Three image placeholders in a horizontal row (`display: flex`, height: `55vh`, min-height `280px`):
  - Slot 1: `flex: 1.4`, background `#C5B8A8`
  - Slot 2: `flex: 0.8`, background `#A8997F`
  - Slot 3: `flex: 1.0`, background `#BAA98F`
  - Each: `<Image fill alt="" src="/placeholder-dark.svg" className="object-cover">` in a `position: relative; overflow: hidden` container — `aria-hidden`
- Mobile: stacked vertically, each `height: 30vh`

### Pull Quote
- Background: `--one33-paper`
- Centered content
- Large decorative `"` mark — rust, opacity 0.3, `font-serif-display`, very large (~8rem), line-height 0.5
- `<blockquote>` with `font-serif-display` italic: `"Most organisations arrive with what they can offer. We arrive asking what has been lost."` — large (`clamp(1.8rem, 4vw, 3.8rem)`), ink-coloured, `max-width: 22ch`
- Attribution: `"The One33 Method"` — small, uppercase, tracked, muted, flanked by rust dashes (CSS `::before`/`::after`)

### Partner With Us
- Background: `--one33-ink`
- Header row (`display: flex; justify-content: space-between; align-items: flex-end`):
  - H2: `"There is a place for you in this work."` — Instrument Sans 600, large, `max-width: 16ch`
  - Sub: `"Reconciliation takes time. It takes presence. It takes trust."` — muted cream, `max-width: 36ch` — this is confirmed copy placed at section entry
- Three `<article class="cd-card">` elements (not shadcn Card — the hover animation and action link require clean custom markup):
  - `--cd-ink-mid` background, `1px` cream-at-6% border
  - Hover: `--cd-ink-light` background, rust `2px` bottom bar slides in from left (`::after` pseudo-element `transform: scaleX()`)
  - Number prefix, H3 title, body, action link with `→` that shifts on hover
  - Card 01 "Give Financially": body and action "Donate via Zapper or EFT" → `#give`
  - Card 02 "Offer Your Skills": body and action "Tell us what you carry" → `mailto:hello@one33.africa`
  - Card 03 "Open Your Relationships": body and action "Explore partnership" → `mailto:hello@one33.africa`

### Documentation Strip
- Background: `--one33-cream`
- `border-top: 1px solid var(--one33-paper)`
- `display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap`
- Left: `font-serif-display` (regular, not italic): `"All legal documentation is in place. One33 is a registered South African NPO, PBO, and Section 18A tax-benefit organisation."` — Instrument Serif 400, `max-width: 30ch`
- Right: Three pill `<a>` elements — `"NPO Certificate"` · `"PBO Certificate"` · `"Section 18A"` — small uppercase sans, `1px` ink-at-30% border, no radius
  - Hover: rust background, white text, rust border
  - Currently `href="#"` — placeholder until PDFs are hosted

### Give
- Background: `--cd-ink-mid`
- Centered layout
- Kicker: "Give" — rust
- H2: `"If you believe this matters, this is how it moves."` — Instrument Sans 600, `max-width: 20ch`, centred; "matters" in `<strong>`
- Body: `"Donate via Zapper or direct bank transfer. All gifts benefit from Section 18A tax deductibility. Your contribution stays tied to a purpose: presence in community, not overhead."` — muted cream, `max-width: 44ch`
- Three action buttons (`display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap`):
  - `<a class="cd-btn-primary">Donate via Zapper</a>` — rust background, white text, no radius
  - `<a class="cd-btn-ghost">Bank Transfer Details</a>` — transparent, cream-at-20% border
  - `<a class="cd-btn-ghost" id="contact">Get in Touch</a>` → `mailto:hello@one33.africa`

---

## Files to create / modify this session

Assumes A, B, C sessions are complete.

**Create:**
1. `concepts/d/index.tsx` — Concept D full-page layout
2. `concepts/d/concept-d.css` — Concept D scoped styles

**Modify:**
3. `app/page.tsx` — Add `ConceptD` import and `?c=d` route
4. `components/shared/concept-toggle.tsx` — Add `{ key: "d", label: "Concept D" }` to concepts array
5. `components/shared/nav.tsx` — Add optional `cta?: { label: string; href: string }` prop; render as `<a class="nav-cta-btn">` in default variant only

---

## Definition of done (Concept D)

In addition to the shared definition of done:

- [ ] Dark hero with bottom-left text, decorative "133" stat, animated scroll indicator
- [ ] Noise overlay visible at low opacity (subtle grain texture over all sections)
- [ ] Statement section with `"Not surface-level peace. Not forced agreement."` present and right-side aside visible on desktop
- [ ] Method section in numbered two-column grid with vertical divider, tags, closing line
- [ ] Story image strip with three proportioned placeholder slots
- [ ] Pull quote centred with serif text and decorative opening mark
- [ ] Partner cards with rust bottom-rule hover animation and arrow-shift on action link
- [ ] Documentation strip present with three pill links
- [ ] Standalone give section with three action buttons
- [ ] Donate CTA button visible in desktop nav
- [ ] `?c=d` route renders Concept D; concept toggle shows Concept D
- [ ] No Cormorant Garamond references
- [ ] No custom cursor
- [ ] `pnpm exec ultracite check` passes
