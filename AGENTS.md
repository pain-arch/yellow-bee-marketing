<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Yellow Bee Marketing project guidance

## Scope and precedence

These are the always-on repository rules. User instructions take precedence. For detailed UI implementation workflows, use the project skill at [`skills/professional-frontend-design-system/SKILL.md`](skills/professional-frontend-design-system/SKILL.md) and load only the reference relevant to the task.

## Stack

- Next.js 16 App Router, React 19, and TypeScript.
- Tailwind CSS 4 is available through PostCSS; preserve the styling approach already established in `app/globals.css` and nearby components.
- Use Server Components by default. Add `"use client"` only for browser APIs or genuine interaction.
- Use `next/image` for site imagery and `next/font` for managed fonts unless the project establishes a different local convention.
- Do not add UI, icon, font, animation, or state libraries without first confirming that the existing stack cannot meet the requirement.

## Product and design direction

- Treat this as a professional marketing-agency site: preserve brand identity, scannable hierarchy, trust signals, and a clear path to enquiry.
- Build a coherent, reusable visual system rather than isolated screenshot replicas.
- Keep important copy as semantic, crawlable text. Never use a whole-page screenshot as the interface.
- Centralise repeated colour, typography, spacing, container, radius, shadow, focus, and motion values as tokens.
- Prefer typed data and component variants over duplicated JSX or numbered component forks.

## Implementation boundaries

- Inspect the current route, adjacent components, assets, and styles before changing architecture.
- Keep route files focused on composition, metadata, and page-specific content.
- Use semantic landmarks, logical headings, visible focus, keyboard-operable controls, descriptive alternative text, and programmatic form errors.
- Use links for navigation and buttons for actions. Respect `prefers-reduced-motion`.
- Keep content bounded on wide displays and avoid fixed heights for content-heavy sections.
- Preserve unrelated changes and keep edits small and reviewable.

## Verification

Run the checks that match the change:

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

For visual work, also inspect 360, 768, 1024, 1440, 1920, and 2560px widths. Check overflow, clipped text, image crops, layout shift, keyboard focus, mobile navigation, reduced motion, console errors, and missing assets or fonts. Note any intentional deviation from a supplied reference.
