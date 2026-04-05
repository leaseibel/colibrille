# Colibrille — Project Guidelines

## Design tokens

All visual values live as CSS custom properties in `src/app/globals.css`.
**Rule: NEVER hardcode hex values, pixel values, or font names in components.**
Always use the CSS custom property (e.g. `var(--color-surface-brand-background-base)`)
or the corresponding Tailwind utility that maps to it via `tailwind.config.ts`.

### Colors — Primitives

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-primitive-deep-green-800` | `#0b5b53` | `primitive-green-800` | Gradient start |
| `--color-primitive-deep-green-900` | `#16302d` | `primitive-green-900` | Gradient end |
| `--color-primitive-alpha-inverted-05` | `rgba(0,0,0,0.05)` | _(shadow)_ | Box-shadow color |

### Colors — Surface Primary

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-surface-primary-background-base` | `#f0f0f0` | `primary-base` | Page background |
| `--color-surface-primary-background-raised` | `#fbfbfb` | `primary-raised` | Cards, raised surfaces |
| `--color-surface-primary-foreground` | `#16302d` | `primary-foreground` | Text on primary surfaces |
| `--color-surface-primary-stroke` | `#b8b8b8` | `primary-stroke` | Borders on primary surfaces |

### Colors — Surface Brand

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-surface-brand-background-base` | `#16302d` | `brand` | Dark brand backgrounds |
| `--color-surface-brand-background-raised` | `#0b5b53` | `brand-raised` | Raised brand bg (scrolled header) |
| `--color-surface-brand-background-inset-rest` | `#09211e` | `brand-inset` | Inset button rest |
| `--color-surface-brand-background-inset-hovered` | `#16302d` | `brand-inset-hovered` | Inset button hover |
| `--color-surface-brand-background-inset-active` | `#16302d` | `brand-inset-active` | Inset button active |
| `--color-surface-brand-foreground-neutral` | `#fbfbfb` | `brand-fg-neutral` | Light text on brand bg |
| `--color-surface-brand-foreground-accent` | `#f3e1a1` | `brand-fg-accent` | Gold accent text on brand bg |

### Colors — Surface Secondary

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-surface-secondary-background-rest` | `#f3e1a1` | `secondary` | Accent button rest |
| `--color-surface-secondary-background-hovered` | `#edcd81` | `secondary-hovered` | Accent button hover |
| `--color-surface-secondary-background-active` | `#edcd81` | `secondary-active` | Accent button active |
| `--color-surface-secondary-foreground` | `#16302d` | `secondary-foreground` | Text on secondary bg |

### Colors — Surface Ghost

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-surface-ghost-foreground` | `#2b2b2b` | `ghost-foreground` | Ghost element text |

### Colors — Surface Ghost Inverted

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-surface-ghost-inverted-background-rest` | `rgba(0,0,0,0)` | `ghost-inverted` | Tab rest bg |
| `--color-surface-ghost-inverted-background-hovered` | `rgba(0,0,0,0.05)` | `ghost-inverted-hovered` | Tab hover bg |
| `--color-surface-ghost-inverted-background-active` | `rgba(0,0,0,0.1)` | `ghost-inverted-active` | Tab active bg |
| `--color-surface-ghost-inverted-background-selected-rest` | `rgba(0,0,0,0.2)` | `ghost-inverted-selected` | Tab selected bg |
| `--color-surface-ghost-inverted-foreground-neutral` | `#fbfbfb` | `ghost-inverted-fg-neutral` | Tab text |
| `--color-surface-ghost-inverted-foreground-accent` | `#f3e1a1` | `ghost-inverted-fg-accent` | Active nav accent |
| `--color-surface-ghost-inverted-stroke` | `rgba(255,255,255,0.2)` | `ghost-inverted-stroke` | Subtle white border |

### Colors — Surface Glass

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-surface-glass-background` | `rgba(255,255,255,0.1)` | `glass` | Glass card bg |
| `--color-surface-glass-inverted-background` | `rgba(0,0,0,0.1)` | `glass-inverted` | Inverted glass overlay |

### Colors — Surface Accent

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-surface-accent-background-rest` | `#f3d1f3` | `accent` | Tag bg |
| `--color-surface-accent-foreground` | `#1b041b` | `accent-foreground` | Tag text |

### Colors — Surface Shape

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-surface-shape-brand` | `#0b5b53` | `shape-brand` | Decorative brand shapes |
| `--color-surface-shape-accent` | `#f3e1a1` | `shape-accent` | Decorative accent shapes |
| `--color-surface-shape-glass` | `rgba(255,255,255,0.05)` | `shape-glass` | Decorative glass shapes |

### Colors — Specific

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--color-specific-scrim` | `rgba(0,0,0,0.2)` | _(inline)_ | Drawer scrim overlay |

### Gradients

| Token | Value | Usage |
|---|---|---|
| `--gradient-linear-01` | `linear-gradient(to top, deep-green-900, deep-green-800)` | Body background (Figma "Linear 01") |

### Border radius

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--border-radius-atom` | `4px` | `rounded-atom` | Buttons, small elements |
| `--border-radius-container` | `8px` | `rounded-container` | Cards, panels |
| `--border-radius-inner-container` | `4px` | `rounded-atom` | Inner containers (same as atom) |
| `--border-radius-rounded` | `999px` | `rounded-pill` | Pill shapes |

### Icon sizes

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--icon-size-small` | `16px` | `w-icon-sm h-icon-sm` | Small icons |
| `--icon-size-medium` | `20px` | `w-icon-md h-icon-md` | Medium icons |
| `--icon-size-large` | `24px` | `w-icon-lg h-icon-lg` | Large icons |
| `--icon-size-x-large` | `36px` | `w-icon-xl h-icon-xl` | Extra-large icons |

## Typography

### Font families

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--font-family-content` | `'Inter', sans-serif` | `font-content` | Body text, UI elements |
| `--font-family-display` | `'Montserrat', sans-serif` | `font-display` | Headings, brand text |
| `--font-family-epigraph` | `'Petrona', serif` | `font-epigraph` | Decorative quotes |

### Font sizes and line heights

| Size token | Value | Line-height token | Value | Tailwind |
|---|---|---|---|---|
| `--font-size-xxs` | `12px` | `--font-line-height-xxs` | `16px` | `text-xxs` |
| `--font-size-xs` | `14px` | `--font-line-height-xs` | `20px` | `text-xs` |
| `--font-size-sm` | `16px` | `--font-line-height-sm` | `24px` | `text-sm` |
| `--font-size-md` | `20px` | `--font-line-height-md` | `32px` | `text-md` |
| `--font-size-lg` | `24px` | `--font-line-height-lg` | `36px` | `text-lg` |
| `--font-size-xl` | `28px` | `--font-line-height-xl` | `40px` | `text-xl` |

### Font weights

| Token | Value | Tailwind |
|---|---|---|
| `--font-weight-regular` | `400` | `font-normal` |
| `--font-weight-medium` | `500` | `font-medium` |
| `--font-weight-bold` | `700` | `font-bold` |

## Spacing

| Token | Value | Tailwind |
|---|---|---|
| `--layout-gap-0` | `0px` | `0` |
| `--layout-gap-50` | `2px` | `2` |
| `--layout-gap-100` | `4px` | `4` |
| `--layout-gap-200` | `8px` | `8` |
| `--layout-gap-300` | `12px` | `12` |
| `--layout-gap-400` | `16px` | `16` |
| `--layout-gap-500` | `20px` | `20` |
| `--layout-gap-600` | `24px` | `24` |
| `--layout-gap-800` | `32px` | `32` |
| `--layout-gap-1000` | `40px` | `40` |

### Layout structure

| Token | Value | Usage |
|---|---|---|
| `--layout-max-width-container` | `1440px` | `max-w-container` |
| `--layout-large-view-horizontal-padding` | `24px` | Desktop edge padding |
| `--layout-medium-view-horizontal-padding` | `16px` | Tablet edge padding |
| `--layout-small-view-horizontal-padding` | `16px` | Mobile edge padding |
| `--layout-large-view-min-width` | `1024px` | `lg:` breakpoint |
| `--layout-medium-view-min-width` | `768px` | `md:` breakpoint |
| `--layout-small-view-max-width` | `767px` | Small viewport ceiling |
| `--layout-header-height` | `80px` | Fixed header height / page top offset |

## Layout utilities

| Class | Description |
|---|---|
| `.section-outer` | Responsive horizontal padding for full-width sections: 24px at lg (≥1024px), 16px below. Apply to any `<section>` or wrapper that needs consistent edge padding. |

## Components

- Location: `src/components/`
- Each component accepts a `className` prop for consumer overrides
- Class merging uses `cn()` from `src/lib/utils.ts` (wraps `clsx`)
- Components must not set default padding or fixed dimensions — consumers control layout via `className`

### SectionHeading

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `React.ReactNode` | _(required)_ | Main heading text |
| `subtitle` | `string` | — | Optional second line rendered below title with `font-weight-medium` on line 1 and `font-weight-bold` on line 2 |
| `inverted` | `boolean` | `false` | Light text for dark backgrounds |
| `viewport` | `"large" \| "small"` | — | Force layout variant. Omit for auto-responsive (switches at 768px) |
| `withTag` | `boolean` | `false` | Show a pink pill tag below the heading |
| `tagLabel` | `string` | — | Text for the tag pill |

## Responsive breakpoints

| Range | Prefix | Description |
|---|---|---|
| 320–767px | _(none)_ | Small / mobile-first base |
| 768–1023px | `md:` | Medium / tablet |
| 1024px+ | `lg:` | Large / desktop |
