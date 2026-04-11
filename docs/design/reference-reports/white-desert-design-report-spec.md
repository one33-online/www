# White Desert — Design Report

**Studio:** Malvah  
**Pages analysed:** Homepage (white-desert.com) and the "Baby Penguins & Blue Tunnels" itinerary page (/itineraries/early-emperor-penguins)

---

## Brand Framework

### Three Words: Vast. Precise. Earned.

These three words map directly onto specific design decisions throughout the site. They are not decorative brand language — they function as a decision filter.

White Desert sells something genuinely extreme: a private luxury camp in the Antarctic interior, accessible to perhaps a few hundred people a year at $75,000+ per person. The design must simultaneously communicate the incomprehensible scale of the landscape, the exacting operational precision required to survive in it, and the sense that this experience is not casually purchased. It is earned — through means, through seriousness of intent, through a self-seriousness that distinguishes it from ordinary luxury tourism.

Most of the most considered spec decisions are direct expressions of one of these three qualities. The more neutral decisions are where the studio has reached for convention — competent and appropriate, but not especially considered.

---

## Typography

### Font System

The site uses a deliberate three-font system working in concert to create a luxury expedition brand voice.

| Role | Font | Character |
|---|---|---|
| Display / structural | Oswald (condensed grotesque variable) | Bold, directional, expeditionary |
| Editorial / emotional | Cardinal Classic Long (high-contrast serif) | Elegant, aspirational, luxury register |
| UI / functional | Inter Tight (condensed sans variable) | Clean, precise, gets out of the way |

### Oswald — Vast

Used for the primary display heading (the enormous, full-viewport "ANTARCTICA" H1), all uppercase label text, section identifiers, and structural headings in the itinerary day-by-day section. Always uppercase, weight 400–500, always at scale.

The rationale is precise: Oswald is a condensed grotesque with a particular quality — verticality and compression, as if enduring under pressure. At 256px for the hero and 320px for the XXL section title, it stops being text and becomes geography. "ANTARCTICA" at that scale is not a label; it is a topographic feature. The choice of a *condensed* face is specific: it packs visual weight into horizontal space without spilling softly across it. That tension — density without spread — evokes what the place is.

### Cardinal Classic Long — Earned

A high-contrast serif with long ascenders and descenders, used for editorial headings, subheadings, and pull quotes. The italic variant is used extensively for poetic taglines, pullquotes, and descriptive subtitles.

The verticality of Cardinal Classic Long echoes Oswald's compression, giving the pairing coherence. But the contrast — soft, flowing curves of the italic against Oswald's rigid geometry — maps directly onto the brand's duality: extreme conditions, luxurious experience. The italic is the voice of desire; Oswald is the voice of fact. The serif signals heritage and cultural confidence, which is how luxury typically announces itself.

### Inter Tight — Precise

Handles all functional UI text: body paragraphs, button labels, navigation, meta information, captions, form labels. At weight 500 it reads cleanly at small sizes. The choice of a *tight* variant (rather than standard Inter) shows awareness, but it is close enough to conventional practice to read as functional competence rather than creative direction.

### Type Hierarchy

> Oswald — structural/conceptual impact  
> Cardinal Classic Long italic — editorial/emotional voice  
> Inter Tight — information and action

### Notable Type Decisions

**Weight restraint — Intentional.** Consistent use of weight 400 for display type at large sizes is deliberate restraint. Heavier weights would feel muscular and promotional, closer to adventure tourism advertising. The lightness at enormous scale reinforces *Vast*: these letters are not shouting. They simply exist, at size.

**`letter-spacing: 0.5em` on eyebrow labels — Intentional.** Half an em of tracking is extreme. It effectively spaces letters to the width of individual words, turning labels like "EARLY SEASON" into something that sits as lightly as a watermark. A luxury editorial convention borrowed from fashion and high-end hospitality — it signals restraint and space. *Vast* expressed typographically.

**Text selection highlight — Branded.** `::selection { color: #ffffff; background: #ff7e15; }` Even this micro-detail is on-brand. The orange appears even in the act of reading.

---

## Colour

### Palette Overview

The palette is tightly controlled via CSS custom properties on `:root`. The core logic: the navy family maps to the Antarctic sky at the edge of darkness — deep, cold, directional. These are not generic darks; the specific blue-cast distinguishes them from neutral charcoal and grounds them in the actual environment. *Precise* — the palette is drawn from place.

### Full Token Reference

| Token | Value | Usage |
|---|---|---|
| `--wd_orange` | `#ff7e15` | Brand accent — cursor, hover states, CTAs, text selection |
| `--wd_dark-blue` | `#1f2a44` | Primary brand dark — body text, scribble stroke, nav overlay base |
| `--wd_deep-blue` | `#0e1118` | Near-black dark section bg (itinerary, camps) |
| `--dark-bg` | `#090b10` | Deepest near-black — globe section bg, divider lines |
| `--wd_ash-blue` | `#2c374b` | Mid-navy — interactive scrub section bg |
| `--wd-grey` | `#323640` | Charcoal — itinerary scrub item bg |
| `--wd_mushroom` | `#e9e7e1` | Warm off-white — section backgrounds, button hover fills |
| `--wd_beige` | `#dcd8cc` | Warm beige |
| `--wd_light-grey` | `#f3f1ec` | Light warm grey — btn-large default bg |
| `--wd_light-charcoal` | `#535353` | Mid-grey text |
| `--wd_light-charcoal-faded` | `#a4a29c` | Faded mid-grey |
| `--muted` | `#a8acb3` | Cool secondary text |
| `--white` / `--wd_white` | `#ffffff` | Pure white |
| `--black` / `--wd_black` | `#000000` | Pure black |
| `--black-faded` | `rgba(0, 0, 0, 0.5)` | 50% black overlay |
| `--wd_dark-blue-faded` | `rgba(31, 42, 68, 0.2)` | Nav/glass overlay |
| `--wd_blue-faded` | `rgba(31, 42, 68, 0.5)` | Stronger overlay |
| `--border` | `#1f2330` | Divider/border colour |
| `--wd_red` | `#ff1515` | Error/alert (system reserve, barely used) |
| `--wd_turqoise` | `#6af0ff` | Accent — flight indicator pulse (system reserve) |
| `--surface` | `#12141a` | Dark surface |
| `--primary` | `#6aa5ff` | Interactive primary (focus states) |
| `--quote-accent` | `#1f2a44` | Same as dark-blue, for blockquote accents |

### Section Background Classes

| Class | Background |
|---|---|
| `section.bg-white` | `#ffffff` |
| `section.bg-light-grey` | `#f3f1ec` |
| `section.bg-mushroom` | `#e9e7e1` |
| `section.bg-deep-blue` | `#0e1118` |
| `section.bg-dark-blue` | `#1f2a44` |
| `section.bg-dark` | `#090b10` |
| `section.bg-dark-blur` | `rgba(0,0,0,0.6)` + `backdrop-filter: blur(15px)` |

### The Orange — Precise and Vast

The most deliberate single decision in the colour system. In a palette of dark blues and warm neutrals, `#ff7e15` operates like a flare in a blizzard — unmissable, purposeful, slightly urgent. It appears only at moments of action or precision: the cursor dot, hover states on buttons, text selection highlights. It never appears as a background. It never decorates.

The rationale: orange is the colour of emergency equipment, GPS markers, and the functional world that keeps you alive in the landscape the blue palette evokes. Every use of it says: *this matters, attend to this.* Precise and Vast in combination.

### The Off-Whites — Earned

The warm off-whites (`#e9e7e1`, `#dcd8cc`, `#f3f1ec`) are not white. Pure white would read as clinical or digital. These warm, slightly dusty tones are closer to parchment, to aged luxury objects, to the colour of Antarctic rock exposed beneath ice. They soften contrast with the dark navies and push the palette toward the organic rather than the technological.

### Tonal Cadence

The palette alternates in dramatic rhythm through the page: white sections → full-bleed photography → deep blue dark sections → full-bleed photography. This creates a visual rhythm that keeps the user engaged without relying on decorative elements.

---

## Fluid Scaling

### The Root Rule

```css
body { font-size: 1.11111vw; }
```

At the native design viewport of 1440px, this resolves to exactly 16px. All `em`-based size tokens are anchored to 1440px. On mobile (≤767px), size tokens switch from `em` to `rem` (absolute, preserving the same numeric values) to prevent runaway shrinkage.

### Rationale — Intentional, Functional, and Brand-Expressive

`1.11111vw` is `100/90 vw` — anchoring 1em to 16px at exactly 1440px. The entire scale is a continuous function of the viewport. There are no breakpoints where type jumps. Everything breathes proportionally.

The brand rationale: the site is built around absolute scale, things that cannot be miniaturised. A design system that scales fluidly without interruption formally enacts that same quality. The text never becomes an approximation of itself at a different size; it remains precisely itself at every viewport width. This is *Vast* as a technical decision.

The switch to `rem` on mobile is the one concession to practicality — a viewport-relative font-size cannot run to its logical conclusion on a 375px phone — but it is handled cleanly, preserving numeric parity between em and rem values.

---

## Type Scale

All sizes are token-based. Em values are the design source of truth; px values are at 1440px (1em = 16px).

| Role | Font | Token | px@1440 | Weight | Style | Line-height | Transform | Letter-spacing |
|---|---|---|---|---|---|---|---|---|
| Hero title (full-bleed) | Oswald | `--size-16` | 256px | 400 | normal | 1 | uppercase | normal |
| Section title XXL | Oswald | `--size-20` | 320px | 400 | normal | 0.9 | uppercase | normal |
| Section title LG | Cardinal Classic Long | `--size-875` | 140px | 400 | normal | 1 | uppercase | normal |
| H1 | Cardinal Classic Long | `--size-7375` | 118px | 400–500 | normal | 1 | uppercase | normal |
| H2 / section title | Cardinal Classic Long | `--size-375` | 60px | 400 | normal | 1 | uppercase | normal |
| H3 | Cardinal Classic Long | `--size-2625` | 42px | 400 | normal | 1 | uppercase | normal |
| Pull quote | Cardinal Classic Long | `--size-1625` | 26px | 500 | italic | 1.2 | none | normal |
| Large body italic | Cardinal Classic Long | `--size-2` | 32px | 500 | italic | — | none | normal |
| Quote mark XL | Cardinal Classic Long | `--size-325` | 52px | — | — | 0 | — | — |
| H4 / layout label | Oswald | `--size-1125` | 18px | 500 | normal | 1.2 | uppercase | normal |
| Hero subtitle / eyebrow | Oswald | `--size-1125` | 18px | 500 | normal | 1.4 | uppercase | 0.5em |
| Body large | Inter Tight | `--size-1125` | 18px | 500 | normal | 1.4 | none | — |
| Body regular | Inter Tight | `--size-1` | 16px | 500 | normal | 1.4 | none | — |
| Body default | Inter Tight | `--size-0875` | 14px | 500 | normal | 1.5 | none | normal |
| Body small | Inter Tight | `--size-075` | 12px | 500 | normal | 1.2 | none | — |
| Button label | Inter Tight | `--size-0875` | 14px | 500 | normal | 1.5 | none | — |
| Quote author / attribution | Inter Tight | `--size-0875` | 14px | 600 | normal | 1.4 | uppercase | 0.175em |
| Cursor label | Inter Tight | `0.875rem` | 14px | 500 | normal | 1.2 | — | — |

---

## Size Token Reference

| Token | em | px@1440 |
|---|---|---|
| `--size-03125` | 0.3125em | 5px |
| `--size-0625` | 0.625em | 10px |
| `--size-075` | 0.75em | 12px |
| `--size-0875` | 0.875em | 14px |
| `--size-1` | 1em | 16px |
| `--size-1125` | 1.125em | 18px |
| `--size-125` | 1.25em | 20px |
| `--size-15` | 1.5em | 24px |
| `--size-1625` | 1.625em | 26px |
| `--size-175` | 1.75em | 28px |
| `--size-2` | 2em | 32px |
| `--size-225` | 2.25em | 36px |
| `--size-25` | 2.5em | 40px |
| `--size-2625` | 2.625em | 42px |
| `--size-3` | 3em | 48px |
| `--size-325` | 3.25em | 52px |
| `--size-375` | 3.75em | 60px |
| `--size-5` | 5em | 80px |
| `--size-625` | 6.25em | 100px |
| `--size-6875` | 6.875em | 110px |
| `--size-7375` | 7.375em | 118px |
| `--size-875` | 8.75em | 140px |
| `--size-10` | 10em | 160px |
| `--size-12-5` | 12.5em | 200px |
| `--size-16` | 16em | 256px |
| `--size-20` | 20em | 320px |

---

## Spacing Scale

| Token | em | px@1440 |
|---|---|---|
| `--space-1` | 0.35em | 5.6px |
| `--space-2` | 0.75em | 12px |
| `--space-3` | 1.1em | 17.6px |
| `--space-4` | 1.5em | 24px |
| `--space-5` | 2em | 32px |
| `--space-6` | 2.75em | 44px |
| `--space-8` | 4em | 64px |
| `--space-10` | 5.5em | 88px |
| `--space-12` | 7em | 112px |
| `--section-padding-lg` | 20em | 320px |

The spacing scale itself is conventional — standard harmonic practice, not meaningfully distinctive. What is intentional is the use of the extremes. `--section-padding-lg: 20em` (320px at 1440px) is generous to the point of being operatic. It says: *we have room, and we are not rushing you.* Combined with the fluid scale, these sections expand even further on wider screens. *Vast* expressed spatially.

---

## Layout and Grid

### Grid System

| Property | Value |
|---|---|
| System | CSS Grid |
| Column count (desktop) | 12 (`--grid-columns: 12`) |
| Column count (mobile ≤767px) | 8 |
| Column gap (`--gutter-x`) | 0.75em → 12px @ 1440 |
| Row gap (`--gutter-y`) | 1.5em → 24px @ 1440 |
| Container padding | 1.25em → 20px @ 1440 |
| `.container-large` max-width | `calc(100% − 1.5em)` |
| `.container-small` max-width | `calc(100% − 120px)` |
| Grid span classes | `.col-1` through `.col-12` |

The 12-column grid with 12px gutters is standard practice — professional, not distinctive. The grid infrastructure is Malvah being competent, not White Desert being singular.

### Grid Overlay

A fixed, full-viewport `div.grid-overlay` sits over the entire page at `z-index: 2`, `opacity: 0.1`, `mix-blend-mode: difference`. It renders 0.5px white vertical lines marking the 12-column grid gutters across the live viewport. Invisible on white backgrounds, it traces the layout skeleton on imagery and dark sections. A detail that reveals the site was built with design-systems thinking.

### Inset Effect

`section.has-inset-effect` applies `clip-path: inset(0px 1.25rem round 0.375rem)` on desktop, giving full-bleed image sections a subtle inset float with rounded corners — making them feel like cards within the scroll rather than truly edge-to-edge elements.

---

## Border Radius

| Token | em | px@1440 |
|---|---|---|
| `--radius-0125` | 0.125em | 2px |
| `--radius-sm` | 0.25em | 4px |
| `--radius-hover` | 0.275em | 4.4px |
| `--radius-md` | 0.5em | 8px |
| `--radius-0625` | 0.625em | 10px |
| `--radius-lg` | 2.5em | 40px |

### The 2px Default — Intentional

Two pixels of radius is almost nothing. It is the minimum gesture toward softness — enough to prevent hard-cornered sharpness that reads as cheap or aggressive, but not enough to tip into friendliness or approachability. Luxury brands at this price point need to feel precise and controlled, not warm and approachable. *Precise.*

The `--radius-hover` (4.4px) and `--radius-0625` (10px) used on hover states introduce progressively more radius as an element becomes active. The button softens as you approach it — slightly organic, almost like a material yielding under pressure. It maps the tactile quality of expensive physical objects (watch crowns, instrument dials) onto digital interaction.

---

## Navigation

### Fixed Bar

`position: fixed`, `top: 0`, `z-index: 9999`, height `5em` (80px @ 1440). Transparent by default with `transition: color 0.3s` on scroll. Built on the 12-column grid with logo centred in columns 5–8.

### Liquid Glass Effect

Applied to all nav buttons. Three-layer composite:

**Layer 1 — Blur:**
```css
backdrop-filter: blur(3px);
position: absolute; inset: 0; z-index: 0;
```

**Layer 2 — Tint:**
```css
position: absolute; inset: 0; z-index: 1;
/* tint colour set per context */
```

**Layer 3 — Specular highlight:**
```css
box-shadow:
  inset 1px 1px 0 rgba(255,255,255,0.2),
  inset 0 0 5px rgba(255,255,255,0.2);
z-index: 2;
```

**SVG displacement filter (organic distortion):**
```xml
<feTurbulence type="fractalNoise" baseFrequency="0.008 0.008"
              numOctaves="2" seed="100" result="noise"/>
<feGaussianBlur in="noise" stdDeviation="2" result="blurred"/>
<feDisplacementMap in="SourceGraphic" in2="blurred"
                   scale="40" xChannelSelector="R" yChannelSelector="G"/>
```

### Nav Button Specs

| Property | Value |
|---|---|
| Width | `--size-75` = 120px |
| Min-height | `--size-25` = 40px |
| Padding inline | `--size-1` = 16px |
| Border | `0.03125rem solid rgba(255, 255, 255, 0.2)` |
| Background at rest | `rgba(31, 42, 68, 0.15)` |
| Border-radius at rest | 2px |
| Hover border-radius | 4.4px |
| Hover background | `#ff7e15` |
| Font | Inter Tight, 14px, weight 500 |
| Hover easing | `all 0.3s cubic-bezier(0.5, 1, 0.89, 1)` |

### Menu

The hamburger menu button uses a solid light background (`rgb(239, 239, 239)`) with dark text, making it clearly functional and distinct from the glass-effect nav links.

When opened, a full-screen panel wipes in via clip-path:

```css
/* Closed */
.menu-el { clip-path: inset(0% 100% 0% 0% round 0.25em); }

/* Open */
.menu-component.open .menu-el {
  clip-path: inset(0% round 0.25em);
  transition: all 0.45s cubic-bezier(0.76, 0, 0.24, 1);
}
```

The background simultaneously fades in `backdrop-filter: blur(15px)` with a dark blue overlay at `opacity 0.4s`.

---

## Components

### Large CTA Button (`.btn-large`)

| Property | Value |
|---|---|
| Width | 100% of container |
| Min-height | `--size-6875` = 110px |
| Background at rest | `#f3f1ec` |
| Colour at rest | `#1f2a44` |
| Border-radius at rest | 2px |
| Hover border-radius | 10px |
| Hover: text shift | `transform: translate(-0.5rem)` |
| Hover: icon reveal | `opacity: 0 → 1`, `transform: scale(0) → scale(1)` |

The "text steps left to make room for icon" pattern appears throughout for large CTAs.

### Standard Button (`.btn-standard`)

Width `--size-10` (160px), height `--size-3125` (50px). Hover: background `#ffffff`, colour `#ff7e15`.

### Sticky Bottom CTA Nav (`.cta-nav`)

`position: fixed`, bottom 0, height `--size-5` (80px). Pill height `--size-3125` (50px), `border-radius: 4px`, `padding-inline: 30px`, background `rgba(31,42,68,0.15)`, gap `--size-125` (20px).

---

## Motion and Easing

### Easing Tokens

| Token | Value |
|---|---|
| `--transition-ease-out` | `all 0.3s cubic-bezier(0.5, 1, 0.89, 1)` |
| `--transition-ease-in` | `all 0.3s ease-in` |
| `--transition-ease-in-out` | `all 0.3s ease-in-out` |
| `--transition-wd` | `all 0.45s cubic-bezier(0.76, 0, 0.24, 1)` |

The easing pair at the heart of the motion language:

- **`cubic-bezier(0.76, 0, 0.24, 1)`** — sharp: accelerates quickly from zero, decelerates hard into stillness. Things landing with intention.
- **`cubic-bezier(0.16, 1, 0.3, 1)`** — spring: long, weighty deceleration. Objects arriving from distance.

Using the same curve family at component and page levels creates tonal consistency in how the site moves. *Precise* as a motion language — not ornamental, not whimsical. Directional.

### Page Transitions (View Transitions API)

The most cinematic choice in the motion spec.

```css
/* Exit: current page dims to 25% brightness */
::view-transition-old(root) {
  animation: 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards page-exit;
}
@keyframes page-exit {
  0%   { filter: brightness(1); }
  100% { filter: brightness(0.25); }
}

/* Enter: new page wipes up from bottom via clip-path */
::view-transition-new(root) {
  animation: 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards page-enter;
}
@keyframes page-enter {
  0%   { clip-path: polygon(0% 100vh, 100% 100vh, 100% 100%, 0% 100%); }
  100% { clip-path: polygon(0% 0px,   100% 0px,   100% 100%, 0% 100%); }
}
```

Pages don't fade. They rise from below, as if the ground itself is surfacing. The metaphor is nearly literal: arrival is a physical, directional event. You come *up from* somewhere.

The two curves are mirror images. Entrance is sharp — decisive arrival. Exit dims slowly to dark — a gentle departure. Departures are gentle; arrivals are decisive. *Earned.*

### Scroll Reveal

```css
[data-reveal] {
  animation:
    reveal-opacity 1.4s ease both,
    reveal-transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes reveal-opacity   { 0% { opacity: 0; } 100% { opacity: 1; } }
@keyframes reveal-transform { 0% { transform: translateY(20rem); } 100% { transform: translateY(0); } }
```

The `translateY(20rem)` (320px) offset is the one motion decision that reads as slightly theatrical rather than precise. Most scroll reveals use 20–40px. At 320px, elements arrive from a long way down. The 1.4s spring ease softens it, but this is the one place where the designer pushed to the dramatic extreme without clearly serving communication over spectacle.

### Additional Transitions

| Usage | Value |
|---|---|
| Gallery/slider image | `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)` |
| Backdrop filter | `backdrop-filter 0.3s ease-out` |
| Progress bar | `width 0.1s linear` |
| Menu bg overlay | `opacity 0.4s` |

---

## Scroll Behaviour

**Lenis** provides smooth scrolling — a JavaScript-based momentum scroll library giving all scroll interactions a fluid, physics-based momentum feel rather than the browser's native abrupt stop.

**Intersection Observer** drives the `[data-reveal]` scroll-triggered animations.

**Horizontal scroll (camps section):** `.horizontal-scroll_wrapper` is `position: sticky`, `top: 0`, `height: 100svh`. The container uses `will-change: transform` and translates horizontally via JavaScript as the user scrolls. Panels are `height: 100svh; flex-shrink: 0`.

**Itinerary scrub:** Layout height = `calc(75svh × item-count)`. The sticky pane is `height: 100svh`, `padding-block: 50px`. Items expand/contract via `transition: all 0.3s ease-in-out`. The most technically sophisticated section — a cinematic "scrubbing" experience through the itinerary, with a sticky 50/50 split where each day item expands/collapses in sequence and the right-column image transitions to match via `clip-path` transitions.

---

## Custom Cursor

All elements `position: fixed`, `z-index: 10001`, `pointer-events: none`. Hidden on touch devices via `@media (pointer: coarse)`.

| Element | Dimensions | Colour |
|---|---|---|
| `.custom-cursor_dot` | 4×4px | `#ff7e15` |
| `.custom-cursor_line-vertical` | 0.5px wide | `#ff7e15` (opacity 0, shown on hover) |
| `.custom-cursor_line-horizontal` | 0.5px tall | `#ff7e15` (opacity 0, shown on hover) |
| `.custom-cursor_label` | auto | White text, 14px Inter Tight, weight 500 |

The crosshair is a navigational instrument — cartographic, a surveying reticle, a map pin. All instruments of *Precise* positioning in terrain. The orange connects it to the operational safety register of the brand palette. The contextual label that appears on hover elevates this from a novelty cursor to a considered UI decision: the cursor becomes an information system that travels with you through the page.

---

## Breakpoints

| Label | Condition |
|---|---|
| Mobile | `max-width: 767px` |
| Mobile/tablet boundary | `max-width: 768px` / `min-width: 769px` |
| Tablet | `max-width: 1023px` |
| Large desktop | `min-width: 1279px` |
| XL desktop | `min-width: 1560px` |
| Hover-capable device | `(hover: hover) and (pointer: fine)` |
| Touch device | `(pointer: coarse) and (any-pointer: coarse)` |

All hover states are wrapped in `@media (hover: hover) and (pointer: fine)` to ensure touch devices don't receive sticky hover states. The site degrades gracefully.

---

## Key Page Sections

### Homepage Hero

Full-viewport video background with slow aerial Antarctica footage. The "ANTARCTICA" H1 in Oswald bleeds off the bottom of the screen. A mist/cloud overlay image animates subtly on scroll. A "Watch Film" button bottom-right triggers a video popup.

### Trip Listing (Homepage)

Itinerary entries are full-width interactive rows. On hover, a portrait-format preview image clips in from the left side of the row using `clip-path: inset(50% 0%) → clip-path: inset(0%)` — a vertical reveal that expands to show the image. Simultaneously the text content shifts right to accommodate it. One of the most distinctive interaction patterns on the site.

### Globe / Route Map Section

A large full-page static image showing the Cape Town → Antarctica route. Dark background (`#090b10`). Stats (flying time, distance, temperature) overlaid in Oswald at display size.

### Itinerary Page — Fixed Banner

The hero uses a `fixed-banner` system where the background image is `position: fixed` during the initial viewport, creating a true fixed-background parallax as the page scrolls over it.

### Image Gallery

Full-viewport `gallery-slider` with left/right click zones (invisible, 50% width each) for navigation. Thumbnail strip navigation at the bottom.

### Video Popup

Triggered from "Watch Film" buttons sitewide. Opens with `backdrop-filter: blur(15px)` dark overlay and a centred player with progress bar and close button.

### Sticky Right CTA Tab

On the itinerary page, a vertical orange tab reading "How it works +" is fixed to the right viewport edge. A bold orange rectangle with rotated text — visually intrusive by intention, keeping the CTA always accessible. Triggers a full-height flyout drawer with a 6-step process explanation.

### Quote Sections

Centred pull quotes in Cardinal Classic Long italic at ~2em, with a decorative quote mark at `--size-325` (~52px). Some quotes have a scribble SVG underline animation.

---

## Animations Reference

### General Fades

```css
@keyframes fadeInUp {
  0%   { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  100% { opacity: 1; }
}
```

### Pulse (Flight Indicator / Map Marker)

```css
@keyframes pulsed {
  0%    { opacity: 1; width: 100%; height: 100%; }
  59.9% { opacity: 0; width: 500%; height: 500%; }
  60%, 100% { opacity: 0; width: 100%; height: 100%; }
}
```

### Trip List Hover

```css
.btn-image-hover .btn-preview-image {
  clip-path: inset(50% 0%);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.5, 1, 0.89, 1);
}
.btn-image-hover:hover .btn-preview-image {
  opacity: 1;
  clip-path: inset(0%);
}
.btn-image-hover:hover .btn-content-wrapper { width: 90%; }
```

### Scribble SVG

Decorative handwritten SVG line paths (`.scribble-el`) in dark blue, `stroke-width: 2px`. Animated to "draw" on scroll using `stroke-dasharray` / `stroke-dashoffset` techniques. Used as looping underlines beneath section titles and in the quote section.

---

## Shadows

| Token | Value |
|---|---|
| `--shadow-1` | `0 1px 2px rgba(0,0,0,0.06), 0 1px 1px rgba(0,0,0,0.04)` |
| `--shadow-2` | `0 4px 10px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)` |

Shadow usage is conventional — standard practice in any well-run design system, carrying no specific expressive freight.

---

## What Is Convention vs. What Is Considered

The brand is expressed in the exceptions and the extremes, not in the infrastructure. To be direct about what is not especially considered:

**Standard practice:** the 12-column grid with 12px gutters, Inter Tight for UI text, the shadow tokens, the specific spacing scale values, the `0.3s` default transition duration, the breakpoints (767px, 1023px, 1279px), and the `--wd_red` / `--wd_turqoise` reserve tokens. These are Malvah being professional — competent, appropriate, not singularly expressive.

**Considered decisions:** the `1.11111vw` fluid scaling root, the Oswald / Cardinal Classic Long pairing and their specific usage contexts, the orange as operational safety equipment colour, the `0.5em` eyebrow letter-spacing, the 2px border radius default, the `cubic-bezier(0.76, 0, 0.24, 1)` easing family, the page-enter wipe-up transition, the warm off-whites instead of pure white, the custom crosshair cursor, and the `20em` section vertical padding.

The brand identity lives in that second list.

---

## Footer

Accreditation logos (IAATO, Carbon Neutral, Condé Nast, TripAdvisor, Travel & Leisure), a Shackleton quote, and a "20 Years" anniversary mark. All grounding the brand in authority and legacy. *Earned.*

---

*Report compiled from: design analysis of white-desert.com, reverse-engineered CSS specification, and brand rationale document. Studio: Malvah.*