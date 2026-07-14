# Design

Visual system for **Iris Cai — a personal periodical**: an intentionally-retro scrapbook zine.
Design IS the product (brand register).

## Theme

A self-printed 1970s literary zine. Aged manila paper, faded print inks, halftone/newsprint
texture, printer's crop + registration marks, and tactile keepsakes (masking tape, rubber
stamps, a bookmark ribbon, folded dog-ears, a pressed flower, a library "Date Due" slip).
Composed and disciplined, never whimsical or cluttered.

## Color

Faded, aged 70s print palette. Light theme on warm paper. Body text is dark sepia ink; the
saturated hues are for headings, links, marks, and large handwriting only.

| Token     | Hex       | Role |
|-----------|-----------|------|
| `--paper` | `#E9DCBB` | Page background (aged manila) |
| `--ink`   | `#2C2417` | Primary text / print black |
| `--rust`  | `#A9552F` | Primary accent — links, active nav, button shadow, echoes |
| `--gold`  | `#B98A2E` | Secondary accent — underlines, ribbon edge, hover |
| `--olive` | `#6B6A39` | Botanical / tertiary marks |
| `--teal`  | `#3B6961` | Cool accent — misregistration ghost, handwriting |
| `--brick` | `#8A4636` | Deep accent — stamps, ribbon, roles handwriting |
| `--card`  | `#F1E8CF` | Slip / clipping surfaces |
| `--photo` | `#F4ECD6` | Photo print borders |

Strategy: **Committed** — one dominant warm ground carries the surface; accents used sparingly
and deliberately. Photos are unified with a shared sepia filter
(`sepia(.42) contrast(1.02) saturate(.82)`).

## Typography

Deliberate three-role system (none from the reflex-reject defaults):

- **Display** — `Alfa Slab One` (heavy retro slab). Masthead + page titles, uppercase, tight.
  Titles carry a faint offset color "echo" (misregistration).
- **Body / UI** — `Courier Prime` (typewriter). Body copy, nav, labels, metadata.
- **Handwriting** — `Caveat`. Margin notes, captions, roles, the Date Due slip, TOC authors.
  Used as accent only.

Scale: fluid `clamp()` on headings; display up to ~9rem on the home masthead. Body ~1–1.2rem.
`text-wrap: balance` on large headings. Body measure capped ~68ch (`.lede` ~34ch).

## Signature elements

- **Masthead** set like a zine cover ("IRIS / CAI") with a teal misprint echo.
- **Print furniture:** fixed corner **crop marks**, a fixed top **registration target**, a
  peel-on-hover **dog-ear**, and a **bookmark ribbon** anchored to the top of the page (it
  scrolls away with the content rather than staying pinned).
- **Library "Date Due" slip** that doubles as the section navigation.
- **Rubber stamp** issue mark ("no. 01 · Stanford").
- **Taped sepia photos** (masking-tape corners, handwritten captions).
- **Pressed-flower** specimen images (white background keyed to transparent, blended onto the
  paper with `multiply`) with dated handwritten notes; one anchors the home collage, one closes
  the reading list.
- **Table of contents** treatment for the reading list (title → dotted leaders → author).
- **Taped clippings** for experience; **"In the next issue"** stamp for writing.

## Texture

- `body::before`: foxing stains (radial gradients) + newsprint halftone dot grid (6px).
- `body::after`: fractal-noise film grain (`multiply`, ~10% opacity).

## Motion

Purposeful, print-themed, with a full `prefers-reduced-motion` off switch.

- **Load-in:** hero copy rises; photo, slip, and flower **settle** onto the page from a slight
  offset; the stamp **presses down** with a scale bounce; the ribbon **sways** once and rests.
- **Scroll:** below-the-fold sections/clippings reveal once via `IntersectionObserver`
  (`[data-reveal]`); content is visible by default if JS/motion are off.
- **Hover:** buttons depress into their shadow; dog-ear peels; social stamps lift and tilt;
  slip/TOC links nudge sideways.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out, no bounce/elastic beyond the stamp).

## Layout

- Centered `.wrap` (max 1240px) with fluid padding.
- Home hero: 2-column grid (copy | collage `.plate` with absolutely-positioned artifacts).
- Shared `.masthead-bar` header (imprint + text nav) and `.site-footer` (contact + social).
- Responsive: collage stacks under copy < 900px; artifacts and marks scale down < 620px.

## Files

- `assets/css/styles.css` — all tokens, components, animation, responsive rules.
- `assets/js/site.js` — gallery slideshow + progressive scroll reveals (reduced-motion aware).
- Pages: `index.html` (about + gallery), `reading-recs.html` (TOC), `experience.html`
  (clippings), `blog.html` (writing teaser).
