# Component Architecture Reference

Use this reference when establishing or refactoring a reusable React or Next.js design system.

## Layer model

1. **Tokens:** colour, typography, spacing, containers, radii, elevation, motion, focus, and breakpoints.
2. **Primitives:** Container, Stack, Grid, Text, Link, Button, Icon, Badge, and form controls.
3. **Patterns:** Header, navigation, hero, cards, testimonials, logo strips, CTAs, forms, and footer.
4. **Sections:** semantic compositions with typed content props.
5. **Pages:** route composition, page copy, metadata, and page-specific decisions.

## Component contract

Every reusable component should have:

- one clear responsibility;
- typed props named for user intent;
- explicit variants and sensible defaults;
- stable layout expectations;
- accessible names and states;
- support for longer content and missing or slow imagery;
- no hidden dependency on page-specific parent selectors.

## Design-system rules

- Centralise repeated values in tokens or the project's equivalent.
- Extend an existing component before creating a near-duplicate.
- Prefer composition over `ComponentV2`, `ComponentFinal`, or page-specific forks.
- Keep repeated content in typed data rather than duplicated JSX.
- Keep client components limited to genuine interactivity or browser API requirements.
- Preserve visible focus, reduced-motion behaviour, semantic markup, and responsive states.

## Acceptance test

Before a component becomes shared, verify its default, variant, focus, disabled, loading, empty, error, long-content, and responsive states as applicable.
