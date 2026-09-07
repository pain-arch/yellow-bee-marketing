# Responsive Design Reference

Responsive behaviour must be designed as a set of layout states, not as a desktop page that is simply scaled down.

## Validation targets

| View | Widths | Main checks |
|---|---:|---|
| Mobile | 320, 360, 390, 430px | one-column flow, readable type, tap targets, no horizontal overflow |
| Tablet | 768, 834px | grid changes, navigation, image crops, portrait and landscape behaviour |
| Laptop | 1024, 1280px | column balance, container width, density, heading wrapping |
| Desktop | 1440, 1536, 1920px | hierarchy, reading measure, whitespace, full navigation |
| 2K | 2048, 2560px | bounded content, expanded backgrounds, no excessive empty space |

## Layout rules

- Use a centred max-width container with full-bleed backgrounds where appropriate.
- Use fluid `clamp()` sizing when values should transition smoothly.
- Use structural breakpoints when columns, navigation, or content order must change.
- Reduce grid columns deliberately instead of relying on accidental wrapping.
- Avoid fixed heights for content-heavy sections.
- Keep paragraphs, forms, cards, and navigation within readable widths on 2K screens.
- Keep interactive targets comfortably tappable, generally around 44px or larger.
- Test long headings, long labels, missing imagery, zoomed text, and translated copy.

## Responsive acceptance criteria

At every target width, confirm that the primary CTA remains clear, text is not clipped, media has an intentional crop, navigation remains usable, focus order is logical, and no horizontal scrolling occurs.
