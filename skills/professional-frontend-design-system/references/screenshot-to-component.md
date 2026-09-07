# Screenshot-to-Component Workflow

Use this reference when converting a screenshot, PNG, exported Figma frame, or visual brief into React or Next.js components.

## 1. Analyse the reference

Record the image dimensions and likely viewport. Identify:

- page sections and their order;
- container edges, column widths, alignment lines, and section spacing;
- heading, body, label, and button hierarchy;
- image focal points, aspect ratios, gradients, masks, borders, and decorative shapes;
- repeated patterns such as cards, navigation items, testimonials, logos, and service tiles;
- interaction clues such as menus, tabs, carousels, forms, hover states, and CTAs.

## 2. Inspect the project

Before implementing, check the existing routes, components, tokens, fonts, icons, image assets, styling approach, and build conventions. Extend existing primitives where possible.

## 3. Convert visual structure into code

- Use semantic HTML and real text.
- Create typed data for repeated content.
- Build shared primitives and patterns before composing the page.
- Use `next/image` or the approved project image component.
- Use `object-fit`, `object-position`, gradients, masks, and responsive art direction for media.
- Keep important copy out of images.
- Do not use the full screenshot as a page background to simulate the interface.

## 4. Handle uncertainty

Record missing assets, unavailable fonts, unclear copy, and inferred behaviour. Use the closest project-approved substitute and make the decision easy to revise.

## 5. Validate visual fidelity

Compare at the reference width first, then at mobile, tablet, desktop, and 2K widths. Correct in this order:

1. container and section geometry;
2. typography scale and wrapping;
3. spacing and alignment;
4. image crop and focal point;
5. colour, contrast, borders, shadows, and decorative detail.
