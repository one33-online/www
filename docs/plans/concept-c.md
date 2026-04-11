# Concept C — Architectural / Institutional

This is the Concept C session plan. Read `docs/plans/00-shared.md` first and complete all steps there before reading this file.

---

## Design direction

**Name:** Architectural / Institutional
**Character:** Clean, structured, and serious. This concept references the visual language of long-established institutions — truth commissions, legal bodies, foundations that carry real authority. The grid is visible in the rhythm of the layout even when no grid lines are drawn. Type is restrained and purposeful. The navy grounds everything. The accent appears rarely and precisely — it is earned.

**Reference register:** Equal Justice Initiative, Open Society Foundations — classical institutional weight without stiffness. Room for humanity within a structured frame.
**What it is not:** Minimal for its own sake, cold, or corporate. Not a law firm. The structure serves the seriousness of the subject matter — it is not the point in itself.

---

## Palette

| Token | Value | Use |
|---|---|---|
| `--one33-navy` | `#13202c` | Primary dark backgrounds — hero, footer, dark sections |
| `--one33-cream` | `#f5f0e8` | Primary light sections |
| `--one33-paper` | `#eae4da` | Alternating slightly darker light sections |
| `--one33-gold` | `#c8902a` | Accent — used even more sparingly than A or B |
| Text on dark | `#ece7de` | Slightly warmer off-white on navy (not pure white) |
| Text on light | `#13202c` | Navy as text colour (not ink-black) |
| `--one33-muted-light` | `rgba(19,32,44,0.45)` | Secondary text on light backgrounds |
| `--one33-muted-dark` | `rgba(236,231,222,0.5)` | Secondary text on dark backgrounds |

The gold accent is the most restrained of the three concepts. It appears on: section kicker lines, one CTA per section at most, horizontal rules at key transitions. Nowhere else.

---

## Typography approach

- **Navigation:** Instrument Sans 400, small, uppercase, tracked — formal register
- **Section kicker lines:** Instrument Sans 400, uppercase, tracked — rendered in `--one33-gold`
- **Section headings:** Instrument Sans 600, large — never serif
- **Body copy:** Instrument Sans 400, generous line-height
- **Display serif moments (classical, measured):**
  - "Why We Exist" section: Instrument Serif 400 italic for the stacked short lines (*"Not surface-level peace. Not forced agreement."*) — the emotional centre of the page
  - A single large Instrument Serif italic quote placed between "Why We Exist" and "What We Do" as a full-bleed interstitial — *"The division didn't end with apartheid. It shifted."* — this is the one major serif display moment
  - Nowhere else
- The serif is used less than Concept B but with more intentional weight. One large moment, carefully placed.

---

## Layout approach

This concept has the most explicit grid discipline. Every section is laid out on a strict column structure. Use a CSS Grid wrapper (`--grid: repeat(12, 1fr)`) at the page level, and sections reference named grid areas or explicit column spans.

Generous whitespace — sections breathe more than A or B. The spatial rhythm signals institutional confidence (organisations that know they have time do not rush).

---

## Section-by-section design decisions

### Navigation
- Full-width, `--one33-navy` background
- Left: ONE33 wordmark in `#ece7de`
- Right: Navigation links in `#ece7de`, small, uppercase, tracked
- No scroll state change — the nav is always navy. The footer and hero match it, so the nav sitting in that family throughout is correct.
- A 1px `--one33-gold` line runs the full width at the bottom of the nav — this is the only persistent accent in the nav
- On mobile: hamburger icon right (Lucide `Menu`), full-screen navy overlay

### Hero
- Full viewport height (`100dvh`)
- Background: `--one33-navy`
- Full-bleed photography (Next.js `<Image>`, `object-fit: cover`, `priority`) with a `--one33-navy` overlay at 55% opacity — heavier than Concept A, the image recedes further
- Layout: centred, single column — not asymmetric like Concept B
  - Kicker (small, uppercase, `--one33-gold`, tracked): `ONE33 · SOUTH AFRICAN RECONCILIATION MINISTRY`
  - Primary headline: Instrument Sans 600, very large (clamp 4rem–7.5rem), `#ece7de`, centred, tight line-height — placeholder: *"Reconciliation is a harder thing than peace."*
  - Below headline: A 1px `--one33-gold` rule, 120px wide, centred
  - One short line of Instrument Sans 400, small, `--one33-muted-dark` — *"One33 works where that harder thing is required."*
- No CTA buttons in the hero
- Lucide `ChevronDown` in `--one33-gold`, centred, bottom of viewport

### Interstitial — full-bleed serif moment
This sits between "Why We Exist" and "What We Do". It is not a named section — it has no kicker:

- Background: `--one33-paper`
- A single Instrument Serif 400 italic line, very large (clamp 2.5rem–4.5rem), centred, `--one33-navy`
- Copy: *"The division didn't end with apartheid. It shifted — into neighbourhoods, into schools, into the silence between people who have never had a real conversation."*
- This may need to wrap over 2–3 lines — that is fine; let it breathe
- No other elements in this section
- Generous top and bottom padding (min 8rem)

### Why We Exist
- Background: `--one33-cream`
- Text: `--one33-navy`
- Section kicker: `WHY WE EXIST` — uppercase, `--one33-gold`, tracked
- Layout: two columns on desktop
  - Left (col 1–5): Section heading — Instrument Sans 600, large — *"The division is still here."*
  - Right (col 7–12): The stacked short-line copy block
- The `font-serif-display italic` treatment on: *"Not surface-level peace. Not forced agreement."* — rendered within the right column copy block
- Closing lines — *"Restoring what was broken. Rebuilding what matters. Living in unity."* — below the two columns, full-width, Instrument Sans 600, centred, slightly larger
- Psalm 133 attribution: small, muted, after the closing lines, centred

### What We Do
- Background: `--one33-navy`
- Text: `#ece7de`
- Section kicker: `WHAT WE DO` — uppercase, `--one33-gold`
- Layout: two columns, equal — the most explicitly grid-based section
  - Each column has:
    - A column label: `RELATIONAL` or `PRACTICAL` — Instrument Sans 600, uppercase, `--one33-gold`, large
    - A 1px `--one33-gold` rule below the label
    - Body copy: Instrument Sans 400, `#ece7de`
  - A 1px `#ece7de` at 15% opacity vertical separator between columns on desktop
- Closing line: *"We don't just repair relationships. We help rebuild communities."* — below the columns, full-width, centred, Instrument Sans 600, large, `#ece7de`, with a 1px `--one33-gold` underline

### Partner With Us
- Background: `--one33-cream`
- Text: `--one33-navy`
- Section kicker: `PARTNER WITH US` — uppercase, `--one33-gold`
- Opening three lines: *"Reconciliation takes time."* / *"It takes presence."* / *"It takes trust."* — rendered as three lines with a 1px `--one33-gold` rule to the left of each line (a left-border accent, like a blockquote marker but deliberate), Instrument Sans 400, large
- Below: three `<Card>` components in a row (stacked on mobile) — same as Concept A
  - Cards: background `--one33-paper`, border `1px solid rgba(19,32,44,0.15)`, `border-radius: 0` (no rounding — institutional precision)
  - Card headings: Instrument Sans 600, uppercase, `--one33-navy`
  - CTA in Give: `Button`, background `--one33-navy`, text `--one33-cream`, `rounded-none`

### Stories
- Background: `--one33-navy`
- Section kicker: `STORIES` — uppercase, `--one33-gold`
- Placeholder: Instrument Sans 400, `#ece7de` at 60% — *"Coming soon. Real stories from One33's reconciliation work."*
- Generous padding — the section breathes; it does not look abandoned

### Footer
- Background: `--one33-navy`
- Full-width 1px `--one33-gold` rule at top
- Layout: three columns
  - Left: ONE33 wordmark + NPO/PBO registration numbers below (small, muted)
  - Centre: Navigation links — `Governance` · `Privacy`
  - Right: Copyright line
- All text: `#ece7de` with secondary items at 50% opacity

---

## Motion and animation

This concept uses the least motion:

- No hero image animation (no Ken Burns, no pulse)
- Scroll-triggered fade-up on section entry (same Intersection Observer approach as A and B)
- The chevron in the hero has a very slow (2s) vertical oscillation, `--one33-gold`
- No other animation

Motion in this concept signals caution and respect for the subject matter. Restraint is the design decision.

---

## Files to create this session

Assumes Concepts A and B sessions have already been completed. The following should already exist:
- `app/layout.tsx`, `app/globals.css`, `app/page.tsx`
- `components/shared/nav.tsx`, `components/shared/footer.tsx`, `components/shared/concept-toggle.tsx`

This session creates:
1. `concepts/c/index.tsx` — Concept C full-page layout (replace the stub from Session A)
2. `concepts/c/concept-c.css` — Concept C scoped styles

The nav component will need a new variant: `dark-navy` (always navy, never transparent, gold bottom rule). Extend `nav.tsx` with a `variant` prop if not already done.

---

## Definition of done (Concept C)

In addition to the shared definition of done:

- Navy hero, photography visible but recessed behind heavier overlay
- Full-bleed interstitial serif moment between "Why We Exist" and "What We Do"
- "Why We Exist" in two-column grid layout (heading left, copy right)
- Gold accent on kickers, rules, and one CTA per section only — nowhere else
- No serif except: the interstitial section, and the two target lines in "Why We Exist"
- All sections breathe — generous vertical padding throughout
- Concept toggle pill present and functional
- `border-radius: 0` on all cards and buttons (institutional precision, no softness)

