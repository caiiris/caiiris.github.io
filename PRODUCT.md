# Product

## Register

brand

## Users

Iris Cai's personal network: friends, people she meets through her work, and the occasional
curious visitor. They arrive to get a feel for who Iris is: a Stanford freshman studying
computer science who does AI research, co-founded the youth literary magazine Eucalyptus Lit,
and reads a lot of poetry. The site is a warm home base, not a transactional resume.

## Product Purpose

A personal home on the web that feels unmistakably like Iris. It collects who she is (about),
what she's made (experience), and what she reads (reading list). Success is a visitor thinking
"how was this made?" and coming away with a clear, memorable sense of her taste.

## Brand Personality

Bold, artful, intentionally retro. The voice is literate but unfussy — a self-printed zine
edited by someone who cares about sentences. Warm, tactile, a little wry (margin notes,
library slips). Confident enough to take one real aesthetic risk and commit to it.

## Anti-references

- Pastel / cutesy / juvenile (the previous version of this site).
- Generic corporate/SaaS templates (Inter, blue links, tidy identical cards).
- The overdone "AI editorial" look: cream background + italic display serif + tiny
  letter-spaced eyebrow labels above every section.
- Busy / cluttered: too many colors and effects competing at once. Boldness comes from one
  committed idea, not from piling on decoration.
- Whimsical craft-supply clip-art. The retro feel must read as a real, aged printed artifact,
  not as scattered stickers.

## Design Principles

- **It's a printed object.** Every surface behaves like a page from a self-published zine —
  ink, paper, crop marks, tape, stamps. The metaphor is the discipline.
- **Artifacts must do work.** Structural devices are true, not decorative: the "Date Due" slip
  is the navigation, the rubber stamp is the issue mark, the table of contents is the reading
  list. If an element is only decoration, cut it.
- **One risk, spent well.** Commit to the retro-print concept fully; keep everything around it
  quiet and precise so the composition reads curated, not noisy.
- **Warmth is voice, not filler.** The warmth comes from typography, handwriting, and real
  content — never from an empty warm-tinted background.
- **Show the maker's hand.** Slight rotations, sepia photos, handwritten notes — evidence a
  person assembled this page.

## Accessibility & Inclusion

- Target WCAG AA for text contrast. Body copy is dark sepia ink (#2C2417) on aged paper
  (#E9DCBB); saturated accents (rust, brick, teal) are reserved for headings, links, and large
  handwriting, not small body text.
- All motion (load-in settle, stamp press, ribbon sway, scroll reveals) has a
  `prefers-reduced-motion` fallback that disables animation and keeps content fully visible.
- Content is visible by default; reveals are progressive enhancement and never gate visibility.
- Decorative print furniture (crop marks, ribbon, dog-ear, pressed flower) is `aria-hidden`.
- Interactive controls (gallery, nav) are real buttons/links with labels and visible focus.
