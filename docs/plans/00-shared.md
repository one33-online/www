# One33 — Shared Session Instructions

These instructions apply to every concept session. Read this file in full before reading any concept-specific plan.

---

## Step 1: Explore docs before writing any code

Read the following project files in full:

- `docs/design/brand-direction.md`
- `docs/design/logo-direction.md`
- `docs/design/reference-reports/white-desert-design-report-overview.md`
- `docs/design/reference-reports/white-desert-design-report-spec.md`
- `docs/structure-decisions.md`
- `docs/discovery/session-1-notes.md`
- `docs/discovery/context-framework-first-draft-copy-feedback.md`
- `docs/outstanding-items.md`

Also list `docs/design/reference-images/` to understand what visual references exist.

---

## Step 2: Load and read the following skills

Before writing any code, use the Skill tool to load and read these skills. Do not skip any:

- `frontend-design` — for design quality, layout, and visual hierarchy guidance
- `shadcn` — for component discovery, installation, and usage patterns
- `next-best-practices` — for Next.js App Router conventions and file structure
- `web-design-guidelines` — for accessibility, UX, and interface quality standards

---

## Step 3: Install shared shadcn components (first session only)

If the following components are not already present in `components/ui/`, install them using the shadcn MCP or CLI before building any concept:

- `button`
- `separator`
- `card`
- `badge`

Check `components/ui/` before installing to avoid duplicates.

---

## Project structure

The project uses Next.js App Router. The directory layout for concepts is as follows:

```
app/
  layout.tsx         ← root layout: fonts, metadata, body wrapper
  globals.css        ← global tokens, Tailwind imports, font-serif registration
  page.tsx           ← concept switcher: reads ?c= URL param, renders A/B/C

components/
  ui/                ← shadcn-installed components
  shared/
    nav.tsx          ← shared navigation component used by all concepts
    footer.tsx       ← shared footer component used by all concepts
    concept-toggle.tsx ← floating pill toggle (bottom-right)

concepts/
  a/
    index.tsx        ← Concept A full-page layout component
    concept-a.css    ← Concept A scoped styles
  b/
    index.tsx        ← Concept B full-page layout component
    concept-b.css    ← Concept B scoped styles
  c/
    index.tsx        ← Concept C full-page layout component
    concept-c.css    ← Concept C scoped styles

lib/
  utils.ts
```

These directories sit at the project root alongside `app/`. They are not inside `app/`.

---

## Font system

### Global fonts (non-serif — never change these)

`app/layout.tsx` loads two Google Fonts:

- **Instrument Sans** (400, 600) → `--font-sans` — used for all headings and body text in the design system
- **Instrument Serif** (400, 400 italic) → `--font-serif` — loaded globally but never set as a default; used only when explicitly applied

The `--font-heading` token must point to `--font-sans`, not `--font-serif`. This must not change.

### Applying the serif

The serif is available via a Tailwind utility class and a CSS class:

```css
/* In globals.css */
.font-serif-display {
  font-family: var(--font-serif);
}
```

```css
/* In @theme inline */
--font-serif: var(--font-serif);
```

Apply `font-serif-display` in JSX or concept CSS only for:
- Hero pull-quotes or oversize editorial type
- Large section intro lines where emotional weight is intended
- Never for navigation, UI labels, or body copy

---

## Global CSS tokens to add (all concepts share these)

Add the following to `globals.css` alongside the existing Tailwind theme tokens. These are brand-level tokens — concept files may override them locally but should reference these as the default:

```css
:root {
  /* Brand palette */
  --one33-ink:       #0e0c0a;   /* near-black; dark hero and footer backgrounds */
  --one33-paper:     #eae4da;   /* warm off-white; light section backgrounds */
  --one33-cream:     #f5f0e8;   /* lighter warm white; alternating sections */
  --one33-navy:      #13202c;   /* deep navy; Concept C primary */
  --one33-terracotta:#B85C38;   /* accent; use only on CTAs and key callouts */
  --one33-rust:      #b84a2c;   /* deeper accent variant */
  --one33-gold:      #c8902a;   /* warm gold; Concept C accent */
}
```

---

## Concept switcher (`app/page.tsx`)

`page.tsx` is a Client Component that reads the `?c=` URL search param and renders the matching concept. Default is `a` if no param is set.

```tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import ConceptA from '@/concepts/a'
import ConceptB from '@/concepts/b'
import ConceptC from '@/concepts/c'

function ConceptRouter() {
  const params = useSearchParams()
  const concept = params.get('c') ?? 'a'
  if (concept === 'b') return <ConceptB />
  if (concept === 'c') return <ConceptC />
  return <ConceptA />
}

export default function Home() {
  return (
    <Suspense>
      <ConceptRouter />
    </Suspense>
  )
}
```

The concept toggle component (see below) updates this param without a full page reload.

---

## Concept toggle pill (`components/shared/concept-toggle.tsx`)

A small floating pill fixed to the bottom-right of the viewport. It shows the current concept label and lets the client switch between A, B, and C. It must:

- Be visually minimal and non-intrusive (small, semi-transparent, increases opacity on hover)
- Show labels: `Concept A`, `Concept B`, `Concept C`
- Highlight the current concept
- Update `?c=` in the URL using `router.push` without scrolling to top
- Be rendered inside each concept's `index.tsx` (not in `layout.tsx`) so it only appears when a concept is active
- Use `useRouter` and `useSearchParams` from `next/navigation`
- Include a small label above the buttons: `Review concept`

---

## Content: section order and copy

The homepage is a single-page scroll. The section order is fixed:

1. **Hero** — atmospheric entry, photography placeholder, headline TBD by Richard
2. **Why We Exist** — conviction; stacked short-line copy; strongest section
3. **What We Do** — method; Relational vs Practical distinction is the headline idea
4. **Partner With Us** — invitation; giving mechanics, contact, volunteer
5. **Stories** — placeholder only; Jayda will manage later
6. **Footer** — dark, navigation, legal, governance link

### Working copy

**Source of truth for all copy:** `docs/discovery/context-framework-first-draft.pdf` (Richard's first draft) and `docs/discovery/context-framework-first-draft-copy-feedback.md` (copy review notes). Read both before placing any copy. Do not invent or paraphrase copy — use what is in those documents.

The following lines are confirmed from the copy review and must appear verbatim:

**Confirmed — preserve these exactly:**
- *"Not surface-level peace. Not forced agreement."* — Why We Exist
- *"Reconciliation takes time. It takes presence. It takes trust."* — Partner With Us opener
- *"We don't just repair relationships. We help rebuild communities."* — What We Do closing line
- *"Restoring what was broken. Rebuilding what matters. Living in unity."* — Why We Exist closing (use as-is for design review; copy review flags it as worth one iteration before final)
- *"we hold ourselves to the same standard we call others to"* — Governance section

**Confirmed — use revised language from the copy review:**
The copy review (`context-framework-first-draft-copy-feedback.md`) flags specific phrases to replace. Use the alternatives provided there, not the originals:
- Replace "skilled facilitators and community practitioners" → *"people who are trained to hold difficult conversations"*
- Replace "systemic brokenness" → *"what was built to keep people apart"*
- Replace "long-term reconciliation processes (not quick fixes)" → *"reconciliation that stays"*
- Replace "meaningful, ongoing engagement" → *"being present long enough to be trusted"*

**The Why We Exist section:** Take the full body copy directly from the PDF (`context-framework-first-draft.pdf`). The stacked short-line construction is the template — preserve it. Apply the confirmed lines above where they appear.

**What We Do section:** This section needs a rewrite (see copy review). Lead with the Relational/Practical distinction as the headline idea — not buried in structure. Build toward the confirmed closing line. Use the revised language above.

**Sections with no copy yet (use placeholders):**
- **Hero** — headline not yet drafted by Richard. Placeholder: *"[Hero headline — TBD]"*
- **Stories** — not drafted. Placeholder: *"Coming soon."*
- **Contact / Volunteer / Connect** — not yet drafted. Use structural placeholders.

**Footer:**
> One33 is a registered South African non-profit organisation. NPO number [TBD]. PBO number [TBD]. Section 18A approved.
>
> [Governance] · [Privacy] · © 2025 One33

### Name attribution
The name One33 references Psalm 133. Include one line of framing for visitors without a religious reference point — the copy review confirms this is needed. Do not lift a specific line here; the first draft PDF has Richard's handling of it.

---

## Placeholder logo

Until Sade's final files arrive, render the ONE33 wordmark as styled text:

```tsx
<span className="text-current font-sans font-semibold tracking-tight">ONE33</span>
```

Use `font-sans` (Instrument Sans 600). Do not use serif for the placeholder logo. Size it according to the concept's nav treatment.

---

## Code standards

- No `console.log`, no `any` types
- Server Components for static sections; `'use client'` only where interaction is needed
- Use Next.js `<Image>` with placeholder grey backgrounds for photography slots
- Use Lucide for any icons needed
- All shadcn components go in `components/ui/`; custom shared components in `components/shared/`
- Run `pnpm exec ultracite fix` before considering a session complete
- Conventional commits: `feat:`, `fix:`, `chore:`, `style:` — no Claude or Anthropic references

---

## Definition of done (per session)

A concept session is complete when:

- The concept renders correctly at `/?c=[a|b|c]`
- The concept toggle pill appears and switches between concepts
- All six sections are present with working copy
- No TypeScript or lint errors (`pnpm exec ultracite check` passes)
- The concept has its own `.css` file and does not bleed styles into other concepts
- Photography slots use Next.js `<Image>` with a grey placeholder

