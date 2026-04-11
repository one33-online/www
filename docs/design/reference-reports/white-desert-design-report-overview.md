# White Desert — Design Report

**Pages analysed:** Homepage (white-desert.com) and the "Baby Penguins & Blue Tunnels" itinerary page (/itineraries/early-emperor-penguins)

---

## Typography

The site uses a deliberately contrasting three-font system that works in concert to create a luxury expedition brand voice.

**Oswald** (condensed sans-serif variable font) is used for the primary display heading — the enormous, full-viewport "ANTARCTICA" H1 on the homepage — as well as for all uppercase label text, section identifiers like "The Last Continent" and "Our Season", and structural headings in the itinerary day-by-day section. It is always uppercase, weight 400–500, and at maximum sizes (~195px for the hero) its tightly-packed condensed letterforms fill the screen like a title card. The feeling is bold, directional, expeditionary.

**Cardinal Classic Long** (a high-contrast serif with long ascenders and descenders) is used for editorial headings, subheadings, and quote/body text. It appears in both regular and italic forms. On the itinerary hero it renders the page title ("Baby Penguins & Blue Tunnels") in large italic serif — elegant and editorial, contrasting completely with the Oswald aesthetic. The italic variant is used extensively for poetic taglines, pullquotes, and descriptive subtitles. This font carries the luxury, aspirational register of the brand.

**Inter Tight** (a condensed sans-serif variable font) handles all functional UI text: body paragraphs, button labels, navigation, meta information, captions, and form labels. At 500 weight it reads cleanly at small sizes. All links, CTA text, and navigation use this face.

The type hierarchy is clean and intentional: Oswald for structural/conceptual impact → Cardinal Classic Long italic for editorial/emotional voice → Inter Tight for information and action. Text selection throughout the site highlights in the brand orange (#ff7e15) over white — even this micro-detail is branded.

---

## Colour Palette

The palette is tightly controlled via CSS custom properties, all defined at `:root`. The key colours are:

- **`--wd_orange: #ff7e15`** — the brand accent. Used for the custom cursor dot, hover states on all navigation buttons and CTAs, the right-edge "How it works" sticky tab on the itinerary page, text selection highlights, and in-page link underlines. It appears sparingly but unmistakably.
- **`--wd_dark-blue: #1f2a44`** — the primary brand dark, used for body text, the scribble SVG stroke, section backgrounds, and is the base of the translucent overlays on the nav and CTAs (used as `rgba(31, 42, 68, 0.15–0.20)` for the liquid glass nav effect).
- **`--wd_deep-blue: #0e1118`** — a near-black dark blue used for the major dark sections on the itinerary page (day-by-day, camps, etc.), giving a deep polar night feel.
- **`--dark-bg: #090b10`** — the deepest near-black, used for the globe/map section background and divider lines.
- **`--wd_ash-blue: #2c374b`** — a mid-tone navy used for the interactive scrub section background.
- **`--wd_light-grey: #f3f1ec`** / **`--wd_mushroom: #e9e7e1`** / **`--wd_beige: #dcd8cc`** — a family of warm off-whites used for light-mode section backgrounds and the mushroom-toned hover states on large "Enquire" buttons.
- **`--white: #fff`** — pure white for typography on dark sections and some backgrounds.
- **`--muted: #a8acb3`** — a cool mid-grey used for secondary text.

The palette alternates in dramatic rhythm through the page: white sections → full-bleed photography → deep blue dark sections → full-bleed photography, creating a tonal cadence that keeps the user visually engaged.

---

## Layout, Grid & Structure

The site uses a **12-column CSS Grid** system with the class `.u-grid`, driven by `--grid-columns: 12` and a gutter of `--gutter-x: 0.75em`. Container widths use `.container-large` (max 100% minus 1.5em margin) and `.container-small` (max 100% minus two `--size-375` margins). Column spans use simple `.col-1` through `.col-12` classes.

Particularly noteworthy is the **persistent grid overlay**: a fixed, full-viewport `div.grid-overlay` sits over the entire page at `z-index: 2` with `opacity: 0.1` and `mix-blend-mode: difference`. It renders fine 0.5px white vertical lines marking the 12-column grid gutters in the live viewport. This is invisible on white backgrounds but subtly traces the layout skeleton on imagery and dark sections — a detail that reveals the site was built with design-systems thinking.

Section **vertical rhythm** uses a generous scale: `--section-padding-lg: 20em` for large sections, `--space-8: 4em`, `--space-10: 5.5em`, `--space-12: 7em`. The overall page is spacious, unhurried, and confident.

On the itinerary page, sections with `has-inset-effect` apply a CSS `clip-path: inset(0px 1.25rem round 0.375rem)` on desktop, giving full-bleed image sections a subtle inset float with rounded corners — making them feel like cards within the scroll rather than truly edge-to-edge elements.

---

## Navigation

The top navigation is fixed (`position: fixed`, `z-index: 9999`), transparent by default, with a colour transition (`transition: color 0.3s`) as the page scrolls. It is built on the 12-column grid with left, centre, and right columns.

Navigation buttons are styled with the **liquid glass** effect: they use `backdrop-filter: blur(3px)` with a translucent dark blue background `rgba(31, 42, 68, 0.15–0.20)` and a subtle `1px` inset highlight via `box-shadow`. This creates a frosted glass appearance — the buttons appear to float above whatever is beneath them. The CSS class `.liquid-glass__specular` adds the specular highlight; `.liquid-glass__filter` provides the blur; `.liquid-glass__overlay` handles tinting.

On hover (desktop only, guarded with `@media (hover: hover) and (pointer: fine)`), buttons transition to a solid orange background (`--wd_orange`) with a border-radius increase from `0.125rem` to `0.275rem` — they subtly round. The transition uses a custom easing: `all .3s cubic-bezier(.5,1,.89,1)` — a fast initial acceleration that decelerates sharply, feeling snappy.

The **hamburger menu** (`Menu` button, `.menu-toggle`) uses a different style — a solid light background (`rgb(239, 239, 239)`) with dark text, making it clearly functional and distinct from the glass-effect nav links.

When the menu opens, a full-screen panel slides in using a `clip-path` animation: the `.menu-el` (a white panel) transitions from `clip-path: inset(0% 100% 0% 0% round 0.25em)` (fully hidden to the right) to `clip-path: inset(0% round 0.25em)` (fully visible) using `--transition-wd: all .45s cubic-bezier(.76,0,.24,1)` — a very sharp ease that reads as a confident wipe. The background simultaneously fades in a `backdrop-filter: blur(15px)` dark blue overlay.

---

## Mouse Cursor

The default system cursor is replaced by a fully custom cursor composed of four DOM elements inside `div.custom-cursor`:

- `.custom-cursor_dot` — a 4×4px orange (`#ff7e15`) square (not circular — `border-radius: 0px`), the primary hot-point.
- `.custom-cursor_line-vertical` — a 0.5px wide orange vertical crosshair line.
- `.custom-cursor_line-horizontal` — a 0.5px tall orange horizontal crosshair line.
- `.custom-cursor_label` — a text label element (Inter Tight, 14px, white) that appears contextually when hovering interactive elements, showing labels like "Play", "View", etc.

The overall effect is a precision crosshair in orange — fitting for an expedition brand evoking navigation, cartography, and precision. The cursor label fades in on interactive elements with opacity transition.

---

## Animations & Motion

The site uses **Lenis** for smooth scrolling (a JavaScript-based momentum scroll library), detected via the `.lenis` class. This gives all scroll interactions a fluid, physics-based momentum feel rather than the browser's native abrupt stop.

**Page transitions** are handled via the native **View Transitions API** (`document.startViewTransition`). The exit animation dims the current page (`filter: brightness(0.25)`) over 0.8 seconds with `cubic-bezier(0.25, 1, 0.5, 1)`. The enter animation uses a dramatic `clip-path` wipe from bottom to top — the new page "rises" from the bottom of the screen, using `polygon(0% 100vh, 100% 100vh, ...)` → `polygon(0% 0px, ...)` over 0.8 seconds with `cubic-bezier(0.76, 0, 0.24, 1)`. This is a distinctive page-turn gesture rather than a simple fade.

**Scroll-reveal animations** use the `[data-reveal]` attribute with CSS animations: `reveal-opacity` (fade from 0 to 1 opacity) and `reveal-transform` (translate from `translateY(20rem)` to 0), both running 1.4 seconds with `ease` and `cubic-bezier(0.16, 1, 0.3, 1)` respectively — a long, spring-like deceleration that feels weighty.

**Parallax** is implemented on at least one banner section (`.tall-parallax-banner`) where the inner content moves at a different rate to the outer container during scroll.

**Scribble SVG animations**: Decorative handwritten SVG line paths (`.scribble-el`) appear at various points — a looping underline beneath section titles and a path in the quote section. These are stroked SVG paths in dark blue, `stroke-width: 2px`, and are animated to "draw" on scroll using `stroke-dasharray`/`stroke-dashoffset` techniques.

---

## Key Page Sections & Interactive Features

**Homepage hero**: A full-viewport video background (playing a slow aerial footage of Antarctica) with the massive typographic "ANTARCTICA" text bleeding off the bottom of the screen in Oswald condensed. The hero tagline is in Cardinal Classic Long italic. The entire hero has a mist/cloud overlay image that animates subtly on scroll. A "Watch Film" text button sits bottom-right (with a thumbnail preview image), triggering a video popup.

**Trip listing (homepage)**: Itinerary entries are listed as full-width interactive rows (`.btn-image-hover`). On hover, a portrait-format preview image clips in from the left side of the row using `clip-path: inset(50% 0%)` → `clip-path: inset(0%)` — a reveal that expands vertically. Simultaneously the text content shifts right to accommodate the image. This is one of the most distinctive interaction patterns on the site.

**Globe / Route map section**: A large full-page static image of a globe/map showing the Cape Town → Antarctica route, rendered as a detailed photographic composition. The section uses a dark background (`--dark-bg: #090b10`). Stats (flying time, distance, temperature) are overlaid using Oswald in a large display size.

**Horizontal scroll (Camps section)**: A `position: sticky` wrapper creates a horizontal scroll section where camp cards scroll horizontally as the user scrolls vertically. Each `.horizontal-scroll_panel` is `height: 100svh` and panels are `width: calc(50vw + var(--size-12-5))`. A `.horizontal-scroll_container` uses `will-change: transform` and translates horizontally via JavaScript.

**Itinerary page – Fixed banner with scroll-in**: The hero uses a `fixed-banner` system where the background image is `position: fixed` during the initial viewport, creating a true fixed-background parallax as the page scrolls over it. The content `opacity` starts at 0 and animates in.

**Itinerary page – Day-by-day scrub section**: The most technically sophisticated section. The layout is a sticky 50/50 split — the left column shows accordion-style day items (`.itinerary-scrub_item`) against a charcoal background (`--wd-grey: #323640`). As the user scrolls through a section totalling `calc(75svh × item-count)` in height, each day item expands/collapses in sequence and the right column's image transitions to match, using `clip-path: inset(0px)` transitions and absolute positioning. This creates a cinematic "scrubbing" experience through the itinerary.

**Image gallery**: A full-viewport `gallery-slider` with left/right click zones (invisible but occupying 50% width each) for navigation, with thumbnail strip navigation at the bottom.

**Quote sections**: Centred pullquotes with Cardinal Classic Long italic at ~2em, using a decorative quote mark in the same serif font at `var(--size-325)` (approximately 5–6em). Some quotes have a scribble underline SVG animation.

**Video popup**: Triggered from "Watch Film" buttons sitewide. Opens with a blurred overlay backdrop (`backdrop-filter: blur(15px)`) and a centred player with a progress bar and close button. The close button transitions to orange on hover.

**Sticky right CTA tab**: On the itinerary page, a vertical orange tab reading "How it works +" is fixed to the right viewport edge. This triggers a full-height flyout drawer with a 6-step process explanation. The tab is a bold orange rectangle with rotated text — visually intrusive in an intentional way, keeping the CTA always accessible.

---

## Other Notable Details

The `::selection` pseudo-element is branded orange with white text. Every interactive element uses `cursor: pointer` consistently, but the custom cursor replaces the system cursor entirely so native pointer states are overridden. The site gracefully degrades — all hover effects are wrapped in `@media (hover: hover) and (pointer: fine)` to ensure touch devices don't receive sticky hover states.

The `.btn-large` button hover state shifts text 0.5rem to the left (`transform: translate(-0.5rem)`) and reveals an arrow icon from the right via `opacity: 0 → 1` and `transform: scale(0) → scale(1)`. This "text steps left to make room for icon" pattern appears throughout for large CTAs.

Buttons and containers use `overflow: clip` rather than `overflow: hidden` to prevent scroll-containing side effects while still masking content — a technically precise choice.

The footer includes accreditation logos (IAATO, Carbon Neutral, Condé Nast, TripAdvisor, Travel & Leisure), a Shackleton quote, and a "20 Years" anniversary mark — all grounding the brand in authority and legacy.

---

**In summary**, White Desert's design language is built around a duality of raw extremity (compressed display type, vast dark backgrounds, cinematic full-screen video) and refined luxury (high-contrast serif editorial typography, liquid glass UI, springy easing curves, meticulous spacing). The motion design is consistently purposeful — every transition communicates scale, weight, and deliberateness, appropriate for a brand selling one of the world's most inaccessible travel experiences.