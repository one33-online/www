# One33 — Website Structure Decisions

## Structure

**One-pager with a single separate Governance page.**

The homepage scroll handles the full emotional journey — conviction → method → invitation. Breaking this across multiple pages would interrupt momentum at the exact moments you want someone to keep going.

Governance is reference material, not part of the emotional journey. Bank details, registration numbers, certificate downloads — people who need that are already committed enough to look for it. It lives in the footer nav, accessible without interrupting the scroll.

---

## Homepage Scroll Order

| Section | Purpose |
|---|---|
| Hero | First impression; photography/video; headline |
| Why We Exist | The conviction; the problem; confrontation without aggression |
| What We Do | Relational/practical distinction; the method |
| Partner With Us | The invitation; giving mechanics; contact |
| Stories | Placeholder for now; real content deferred |
| Footer | Nav, Governance link, legal, social (if any) |

---

## Separate Pages

| Page | Rationale |
|---|---|
| Governance | Reference material — NPO/PBO/18A certs, banking details, registration numbers. Linked from footer. |

**Stories** may eventually become its own page once real content exists. Decision deferred until there is actual content to make it with.

---

## Tech Stack

- **Framework:** Next.js
- **UI components:** shadcn/ui
- **Component style:** Lyra
- **Hosting:** Vercel
- **Forms:** Resend (with automatic reply to sender)
- **Donations:** Zapper + direct bank transfer

---

## Typography Baseline

| Role | Font | Notes |
|---|---|---|
| Heading (shadcn baseline) | Instrument Sans 600 | Sans default throughout components |
| Body (shadcn baseline) | Instrument Sans 400 | |
| Display / editorial | TBD in custom CSS | Instrument Serif most likely; applied selectively |

Instrument Sans chosen for coherence with Instrument Serif (used in concept 4 exploration) and proximity to Plus Jakarta Sans in the logo. Display serif to be layered in via custom CSS once concept direction is confirmed — not set as shadcn default.

---

## Icon Library

**Lucide** — restrained, outline-based, invisible in functional UI moments. One33's icon needs are narrow (donate flow, close, chevron). Lucide handles all of it without introducing visual personality that competes with the brand.

---

## Design Decisions

- **Concept direction:** not yet selected. Four homepage concepts produced; selection outstanding.
- **Accent colour:** warm terracotta `#B85C38` is the working candidate. Needs sign-off against final logo files.
- **Tonal cadence:** dark hero → off-white problem → warm grey structure → near-dark invitation → open stories → dark footer (from brief; subject to concept direction selected)
- **Motion:** philosophically grounded — every transition should carry rationale, not just technical justification. Reference: White Desert's page-enter wipe.

---

## Content Editing

- **Jayda** will handle Stories section updates without developer involvement
- Approach TBD once site structure is further along
- Stories section architecture formally deferred until core site is live

---

## Outstanding Decisions

- [ ] Concept direction (one of four produced concepts)
- [ ] Accent colour sign-off (pending logo files from Sade)
- [ ] Hero photography / video approach sign-off from Richard
- [ ] "What We Do" copy — currently weakest section; needs rewrite before launch
- [ ] Jayda content training approach