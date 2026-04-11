# Concept B — Light Confrontational

This is the Concept B session plan. Read `docs/plans/00-shared.md` first and complete all steps there before reading this file.

---

## Design direction

**Name:** Light Confrontational
**Character:** The site opens bright and direct. High contrast, strong typographic presence. The confrontation is in the weight of the type and the bluntness of the words — not in aggression or darkness. The paper background family makes it feel grounded and printed, not digital-default. The viewer is met immediately, face to face.

**Reference register:** Strong editorial publication; institutional credibility without softness. The equivalent of a well-designed annual report for an organisation that has something to say.
**What it is not:** Warm, welcoming, or inviting in a startup sense. Direct. Unambiguous. Human in tone, not in texture.

---

## Palette

| Token | Value | Use |
|---|---|---|
| `--one33-paper` | `#eae4da` | Hero and primary section backgrounds |
| `--one33-cream` | `#f5f0e8` | Alternating lighter sections |
| `--one33-ink` | `#0e0c0a` | Primary text and dark sections |
| `--one33-rust` | `#b84a2c` | Accent — CTAs, key callouts, underlines |
| `--one33-muted` | `rgba(14,12,10,0.45)` | Secondary text, kickers |

No blues, no navy. Dark sections use `--one33-ink`. The accent is the rust variant (slightly deeper than terracotta) — it reads sharply against both paper and ink.

---

## Typography approach

- **Navigation:** Instrument Sans 400, small — no uppercase tracking (more editorial, less institutional here)
- **Section kicker lines:** Instrument Sans 400, uppercase, tracked — e.g. `WHY WE EXIST` — but rendered in `--one33-rust` rather than muted grey
- **Section headings:** Instrument Sans 600, large — never serif
- **Body copy:** Instrument Sans 400, generous line-height
- **Display serif moments (slightly more than Concept A):**
  - Hero: A large italic Instrument Serif line beneath the primary headline — one introductory phrase, editorial in feel
  - "Why We Exist": Apply `font-serif-display italic` to the key stacked lines (*"Not surface-level peace. Not forced agreement."*)
  - Section intros: A single italic Instrument Serif line opening each major section before the sans body copy takes over
  - Never on headings, never on nav, never on UI elements

---

## Layout approach

This concept uses a more explicit grid. On desktop, a 12-column grid underlies every section. Sections alternate rhythm between:
- Full-bleed centred type (maxed at ~840px, centred in viewport)
- Asymmetric split compositions (large type left, supporting element right)

Use CSS Grid at the section level, not a UI framework grid. Each section's layout is defined in `concept-b.css`.

---

## Section-by-section design decisions

### Navigation
- Full-width, light background (`--one33-paper`)
- Centre-aligned ONE33 wordmark
- Left of wordmark: two links — `What We Do` · `Why We Exist`
- Right of wordmark: two links — `Partner With Us` · `Governance`
- This centre-logo split nav signals publication/editorial register
- On scroll: background transitions to `--one33-cream`, a 1px `--one33-rust` line appears at the bottom of the nav
- On mobile: wordmark centred, hamburger right — full-screen overlay in `--one33-ink` with cream text

### Hero
- Full viewport height (`100dvh`)
- Background: `--one33-paper`
- Layout: asymmetric on desktop
  - Left (60%): Typography block — stacked
    - Ghost text (very large, low opacity `0.07`): `ONE33` — rendered as background texture
    - Kicker: `ONE33 · South African Reconciliation Ministry` — Instrument Sans 400, small, `--one33-muted`
    - Primary headline: Instrument Sans 600, very large (clamp 3.5rem–7rem), `--one33-ink`, tight line-height — placeholder: *"The reconciliation that stays."*
    - Secondary display: Instrument Serif 400 italic, large — placeholder: *"For the harder thing."* — `--one33-rust`
    - CTA row: Two buttons — primary (`Button`, background `--one33-ink`, text `--one33-paper`, `rounded-none`) and ghost (`Button` variant outline, `rounded-none`)
  - Right (40%): Photography placeholder — Next.js `<Image>`, `object-fit: cover`, full height of the text block, slight `--one33-ink` overlay at 20%
- On mobile: stacked — image above at 40vh, text block below

### Why We Exist
- Background: `--one33-cream`
- Text: `--one33-ink`
- Section kicker: `WHY WE EXIST` — Instrument Sans 400, uppercase, `--one33-rust`
- Intro serif line: Instrument Serif italic — *"History built the divides. Habit maintains them."* — large, centred
- Body copy block: the stacked short lines, left-aligned, generous spacing between lines
- Apply `font-serif-display italic` to: *"Not surface-level peace. Not forced agreement."*
- A thin 1px `--one33-rust` horizontal rule spans 60% of the section width, centred, placed between the serif line and the body block
- Psalm 133 attribution: same treatment as Concept A — small, muted, after closing lines

### What We Do
- Background: `--one33-ink`
- Text: `--one33-paper`
- Section kicker: `WHAT WE DO` — uppercase, `--one33-rust`
- Serif intro: Instrument Serif italic in `--one33-paper`, one line — *"One33 does two things. The difference between them matters."*
- Below the intro: two stacked full-width horizontal panels (not columns) — separated by a 1px `--one33-rust` rule
  - Panel 1: `RELATIONAL` label (large, uppercase, Instrument Sans 600) + copy flush-left, with a right-aligned detail in small Instrument Sans 400 italic
  - Panel 2: `PRACTICAL` label + same treatment
- This stacked horizontal approach feels more editorial than the two-column Concept A treatment
- Closing line as full-width Instrument Sans 600, large, `--one33-paper`, centred, with a `--one33-rust` underline (CSS text decoration or a pseudo-element line)

### Partner With Us
- Background: `--one33-paper`
- Text: `--one33-ink`
- Section kicker: `PARTNER WITH US` — uppercase, `--one33-rust`
- Opening lines rendered as very large type — *"Reconciliation takes time."* on one line, *"It takes presence."* on the next, *"It takes trust."* on the third — Instrument Sans 600, large, generous spacing. No serif here — the weight of the sans carries it.
- Below: three modes — but rendered as a numbered list rather than cards:
  - `01 — GIVE`
  - `02 — VOLUNTEER`
  - `03 — CONNECT`
  Each item has a full-width rule above it (1px `--one33-rust`), a large number, the label, and the copy below. Accordion-style is acceptable if the layout needs compression.
- CTA button in Give: `Button`, background `--one33-rust`, text `--one33-paper`, `rounded-none`

### Stories
- Background: `--one33-ink`
- Placeholder treatment — but slightly more present than Concept A
- A large Instrument Serif italic line centred: *"The stories are being written."* — `--one33-paper`
- One line below it: Instrument Sans 400, small, `--one33-muted` — *"This section will carry real accounts from One33's reconciliation work. Jayda is curating these."*

### Footer
- Background: `--one33-ink`
- Full-width 1px `--one33-rust` rule at the top of the footer
- ONE33 wordmark left; links right: `Governance` · `Privacy`
- NPO/PBO numbers centred on the line below
- Copyright line below that, muted

---

## Motion and animation

- Scroll-triggered fade-up on section entry (same approach as Concept A — Intersection Observer, no heavy libraries)
- Hero image: a very slow subtle scale (Ken Burns style, `transform: scale(1)` → `scale(1.04)`, 12s linear, no repeat) — gives life to the photography without distraction
- The ghost `ONE33` text in the hero has a slow fade-in on load only
- No nav transition animation — the paper-to-cream background change is instant (the 1px rust line appearing creates the signal)

---

## Files to create this session

Assumes Concept A session has already been completed. The following should already exist from Session A:
- `app/layout.tsx` (updated with serif)
- `app/globals.css` (updated with brand tokens)
- `app/page.tsx` (concept switcher)
- `components/shared/nav.tsx` (but note: Concept B uses a different nav layout — create a variant or extend via props)
- `components/shared/footer.tsx`
- `components/shared/concept-toggle.tsx`

This session creates:
1. `concepts/b/index.tsx` — Concept B full-page layout (replace the stub from Session A)
2. `concepts/b/concept-b.css` — Concept B scoped styles

If the shared nav component doesn't support the centre-logo split layout, extend it with a `variant` prop (`default | split-centre`) rather than creating a second nav component.

---

## Definition of done (Concept B)

In addition to the shared definition of done:

- Paper-background hero with asymmetric split (type left, image right) on desktop
- Ghost `ONE33` text visible as background texture in hero
- Rust kicker lines on each section
- "What We Do" in stacked horizontal panels with rust rules (not two-column cards)
- "Partner With Us" in numbered list style
- Serif intro lines present at the start of: hero (one line), Why We Exist, What We Do
- No serif on headings, nav, body paragraphs beyond the intro lines
- Concept toggle pill present and functional

