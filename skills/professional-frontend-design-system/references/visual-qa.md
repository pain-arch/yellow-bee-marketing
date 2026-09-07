# Frontend Visual QA Reference

Use this reference before approving a page or component for handoff.

## Review sequence

1. Confirm the route, reference image, viewport, fonts, and required assets.
2. Check global geometry: containers, section order, major heights, grid columns, and alignment.
3. Check hierarchy: heading scale, line wrapping, contrast, spacing rhythm, and CTA prominence.
4. Check media: loading, crop, focal point, aspect ratio, and layout stability.
5. Check responsive behaviour at 360, 768, 1024, 1440, 1920, and 2560px widths.
6. Check keyboard focus, mobile navigation, forms, hover/focus/disabled states, and reduced motion.
7. Run the repository's lint, typecheck, test, and build commands where available.

## Defect severity

- **Blocker:** broken route, inaccessible primary action, unusable mobile navigation, missing critical asset, or severe overflow.
- **High:** major layout mismatch, clipped content, incorrect responsive composition, broken form, or unreadable contrast.
- **Medium:** spacing, typography, crop, or component-state inconsistency that affects polish or clarity.
- **Low:** minor decorative mismatch without meaningful usability impact.

## Defect record

For each issue record the affected route, viewport, severity, evidence, likely cause, and recommended correction. Fix geometry and hierarchy before decorative polish.

## Handoff standard

Do not approve a page solely because it resembles the desktop reference. It must remain readable, stable, keyboard-accessible, visually coherent, and usable across the agreed viewport range.
