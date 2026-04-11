# Concept A — Dark Cinematic

This is the Concept A session plan. Read `docs/plans/00-shared.md` first and complete all steps there before reading this file.

---

## Design direction

**Name:** Dark Cinematic
**Character:** The site opens in darkness. The weight of what One33 is responding to is present before a word is read. The photography carries the story; the typography anchors it. Resolve comes through clarity, not decoration. The accent colour appears only where action is required.

**Reference register:** Apartheid Museum, Equal Justice Initiative — institutional, serious, image-led.
**What it is not:** Cold, corporate, or minimalist for its own sake. There should be warmth in the spacing and in the type.

---

## Palette

| Token | Value | Use |
|---|---|---|
| `--one33-ink` | `#0e0c0a` | Hero background, footer, dark sections |
| `--one33-cream` | `#f5f0e8` | "Why We Exist" and "Stories" sections |
| `--one33-paper` | `#eae4da` | Alternating light sections |
| `--one33-terracotta` | `#B85C38` | CTAs, accent moments only |
| Text on dark | `#f5f0e8` (cream) | Off-white, never pure white |
| Text on light | `#0e0c0a` (ink) | Near-black |

No additional colours. The terracotta is used for: primary buttons, the nav active state, and one accent element per section at most.

---

## Typography approach

- **Navigation and UI labels:** Instrument Sans 400, small, uppercase tracking
- **Section kicker lines** (short labels above section headings): Instrument Sans 400, uppercase, letter-spacing wide, small — e.g. `WHY WE EXIST`
- **Section headings:** Instrument Sans 600, large — never serif
- **Body copy:** Instrument Sans 400, generous line-height
- **Display serif moments (use sparingly):**
  - The "Why We Exist" stacked lines: apply `font-serif-display` (Instrument Serif 400 italic) to two or three key phrases for emotional emphasis — but not the whole block
  - One pull-quote in "What We Do" if a short quote is introduced
  - Nowhere else

---

## Section-by-section design decisions

### Navigation
- Fixed, full-width
- Initial state: transparent background, `--one33-cream` text
- Scrolled state: `--one33-ink` background with low opacity (`rgba(14,12,10,0.92)`), subtle blur (`backdrop-filter: blur(12px)`)
- Left: ONE33 wordmark
- Right: Three text links — `What We Do` · `Partner With Us` · `Governance` — small, uppercase, tracked
- No hamburger on desktop. On mobile: a minimal icon toggle revealing a full-screen dark overlay menu

### Hero
- Full viewport height (`100dvh`)
- Background: `--one33-ink`
- Foreground: A Next.js `<Image>` component filling the full frame as `object-fit: cover` with `priority` flag, low-opacity overlay (`rgba(14,12,10,0.45)`) on top
- Headline: Instrument Sans 600, very large (clamp between 3rem and 6rem), `--one33-cream`, centred or left-aligned
- Placeholder headline: *"Reconciliation is a harder thing than peace."*
- Below headline: One short line of Instrument Sans 400, `--one33-cream` at 70% opacity — e.g. *"One33 exists for the harder thing."*
- No buttons in the hero. A small downward-pointing chevron (Lucide `ChevronDown`) at the bottom centre, `--one33-terracotta`, subtle pulse animation
- Image placeholder: a solid `bg-[#1c1a18]` div at full size (grey-dark, slightly warmer than pure black) with `aria-hidden`

### Why We Exist
- Background: `--one33-cream`
- Text: `--one33-ink`
- Section kicker (top-left): `WHY WE EXIST` — small, uppercase, tracked, Instrument Sans 400
- Layout: centred single column, max-width around 720px
- The stacked short lines render each line individually in a `<p>` with generous spacing between — not a block paragraph
- Apply `font-serif-display italic` (Instrument Serif 400 italic) to: *"Not surface-level peace. Not forced agreement."* — this is the one moment of editorial weight in this section
- Closing lines — *"Restoring what was broken. Rebuilding what matters. Living in unity."* — render in Instrument Sans 600 at a slightly larger size, back to ink, no serif
- Psalm 133 attribution: one line, small, muted — `The name references Psalm 133: how good and pleasant it is when people live together in unity.` — placed after the closing lines

### What We Do
- Background: `--one33-ink`
- Text: `--one33-cream`
- Section kicker: `WHAT WE DO` — same treatment as above but in cream on dark
- Layout: two columns on desktop, stacked on mobile
  - Left column: **Relational** — bold label, then copy. Instrument Sans 600 label, 400 body.
  - Right column: **Practical** — same treatment
  - A `<Separator>` (`orientation="vertical"` on desktop, `horizontal` on mobile) between the two columns
- Column labels: `RELATIONAL` and `PRACTICAL` — Instrument Sans 600, uppercase, small
- Closing line — *"We don't just repair relationships. We help rebuild communities."* — full width below the two columns, Instrument Sans 600, large, centred, `--one33-cream`
- No serif in this section

### Partner With Us
- Background: `--one33-paper`
- Text: `--one33-ink`
- Section kicker: `PARTNER WITH US`
- Opening lines — *"Reconciliation takes time. It takes presence. It takes trust."* — render as three separate lines with space between them, Instrument Sans 400, large
- Three giving modes rendered as three `<Card>` components in a row (stacked on mobile):
  - **Give** — bank details + Zapper QR placeholder
  - **Volunteer** — short copy + contact prompt
  - **Connect** — short copy for orgs/government
- Cards: background `--one33-cream`, border `1px solid rgba(14,12,10,0.12)`, radius `2px` (precision, not softness)
- CTA button in Give card: `Button` component, background `--one33-terracotta`, text `--one33-cream`, no rounding (`rounded-none`)

### Stories
- Background: `--one33-cream`
- A minimal placeholder section — do not build content here
- Render: section kicker `STORIES`, then one line — *"Coming soon. Real stories from people and communities."* — centred, muted
- Leave generous vertical space (the section should breathe, not look broken)

### Footer
- Background: `--one33-ink`
- Text: `--one33-cream` at 70% opacity for secondary items, full opacity for primary
- Layout: two rows
  - Row 1: ONE33 wordmark left, three links right — `Governance` · `Privacy` · NPO/PBO registration numbers
  - Row 2: Copyright line, centred
- A `<Separator>` above the footer at full width, `--one33-terracotta`, 1px

---

## Motion and animation

Keep motion restrained and purposeful:

- Chevron in hero: subtle vertical oscillation (CSS `@keyframes`, 1.5s ease-in-out infinite)
- Section entry: elements fade up on scroll into view — use the Intersection Observer API or a lightweight CSS approach (no heavy animation libraries this session)
- Nav background transition: CSS transition on `background-color` and `backdrop-filter`, 300ms ease

No page-enter transitions this session. That is a post-concept-selection enhancement.

---

## Files to create this session

All files unless already present:

1. `app/layout.tsx` — update to add Instrument Serif, update metadata title to "One33"
2. `app/globals.css` — add `--font-serif` to `@theme`, add `.font-serif-display` class, add brand palette tokens
3. `app/page.tsx` — concept switcher (see shared instructions)
4. `components/shared/nav.tsx` — navigation component
5. `components/shared/footer.tsx` — footer component
6. `components/shared/concept-toggle.tsx` — floating pill toggle (bottom-right)
7. `concepts/a/index.tsx` — Concept A full-page layout
8. `concepts/a/concept-a.css` — Concept A scoped styles
9. Stub files for B and C so the switcher compiles: `concepts/b/index.tsx` and `concepts/c/index.tsx` — each just renders `null` or a placeholder `<div>`

---

## Definition of done (Concept A)

In addition to the shared definition of done:

- Dark hero with photography placeholder and headline renders at full viewport height
- "Why We Exist" serif italic on the two target lines only
- "What We Do" two-column layout on desktop
- "Partner With Us" three cards visible
- Concept toggle pill appears, bottom-right, and correctly switches to `?c=b` and `?c=c` (stubs)
- No serif on navigation, section headings, body copy, or footer

