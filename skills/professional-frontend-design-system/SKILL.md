---
name: professional-frontend-design-system
description: Design, build, or refine this project's React/Next.js marketing UI from briefs, screenshots, PNGs, or design references. Use for component architecture, design tokens, responsive implementation, accessibility, and visual QA; do not use for backend-only or content-only tasks.
metadata:
  short-description: Build Yellow Bee's responsive frontend system
---

# Professional Frontend Design System

Create production-ready marketing interfaces that preserve Yellow Bee's brand and conversion path while remaining reusable, accessible, performant, and deliberate from mobile through 2K.

Always follow the repository's root `AGENTS.md`. It owns project-wide stack, safety, and verification rules; this skill owns the UI workflow.

## Choose the workflow

Read only the references needed for the request:

- Screenshot, PNG, exported frame, or visual brief: read [references/screenshot-to-component.md](references/screenshot-to-component.md).
- New shared primitives, patterns, sections, tokens, or component refactors: read [references/component-architecture.md](references/component-architecture.md).
- Responsive layout planning or breakpoint defects: read [references/responsive-design.md](references/responsive-design.md).
- Visual comparison, regression review, or pre-handoff inspection: read [references/visual-qa.md](references/visual-qa.md).

Use multiple references only when the task genuinely spans those workflows.

## Working method

1. Inspect the route, adjacent components, global styles, assets, fonts, and package scripts. Extend established conventions before creating new ones.
2. Identify the intended content hierarchy, primary action, reusable patterns, and responsive layout states.
3. Establish or extend shared tokens and primitives before composing several sections. Keep one-off page markup only where the design is genuinely unique.
4. Implement semantic HTML and typed React APIs. Keep repeated content in typed data and page copy separate from presentation where practical.
5. Keep Server Components as the default and client JavaScript proportional to actual interaction needs.
6. Verify the relevant component states, repository checks, target widths, and supplied reference before handoff.

## Non-negotiable outcomes

- Real text and semantic structure replace screenshot-as-background shortcuts.
- Components expose intentional variants and do not depend on page-specific parent selectors.
- Media has explicit sizing, responsive behavior, and deliberate crop/focal-point treatment.
- Navigation, forms, and controls work with keyboard input and visible focus.
- Long content, slow or missing imagery, reduced motion, and wide displays do not break the composition.
- Assumptions about missing brand assets, fonts, copy, or behavior are recorded and easy to revise.

