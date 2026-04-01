import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        /* Primitives (gradients, decorative) */
        "primitive-green": {
          800: "var(--color-primitive-deep-green-800)",
          900: "var(--color-primitive-deep-green-900)",
        },

        /* Surface Primary */
        "primary": {
          base: "var(--color-surface-primary-background-base)",
          raised: "var(--color-surface-primary-background-raised)",
          foreground: "var(--color-surface-primary-foreground)",
          stroke: "var(--color-surface-primary-stroke)",
        },

        /* Surface Brand */
        "brand": {
          DEFAULT: "var(--color-surface-brand-background-base)",
          inset: "var(--color-surface-brand-background-inset-rest)",
          "inset-hovered": "var(--color-surface-brand-background-inset-hovered)",
          "inset-active": "var(--color-surface-brand-background-inset-active)",
          "fg-neutral": "var(--color-surface-brand-foreground-neutral)",
          "fg-accent": "var(--color-surface-brand-foreground-accent)",
        },

        /* Surface Secondary */
        "secondary": {
          DEFAULT: "var(--color-surface-secondary-background-rest)",
          hovered: "var(--color-surface-secondary-background-hovered)",
          active: "var(--color-surface-secondary-background-active)",
          foreground: "var(--color-surface-secondary-foreground)",
        },

        /* Surface Ghost */
        "ghost": {
          foreground: "var(--color-surface-ghost-foreground)",
        },

        /* Surface Ghost Inverted */
        "ghost-inverted": {
          DEFAULT: "var(--color-surface-ghost-inverted-background-rest)",
          hovered: "var(--color-surface-ghost-inverted-background-hovered)",
          active: "var(--color-surface-ghost-inverted-background-active)",
          selected: "var(--color-surface-ghost-inverted-background-selected-rest)",
          "fg-neutral": "var(--color-surface-ghost-inverted-foreground-neutral)",
          "fg-accent": "var(--color-surface-ghost-inverted-foreground-accent)",
          stroke: "var(--color-surface-ghost-inverted-stroke)",
        },

        /* Surface Glass */
        "glass": {
          DEFAULT: "var(--color-surface-glass-background)",
          inverted: "var(--color-surface-glass-inverted-background)",
        },

        /* Surface Accent */
        "accent": {
          DEFAULT: "var(--color-surface-accent-background-rest)",
          foreground: "var(--color-surface-accent-foreground)",
        },

        /* Surface Shape */
        "shape": {
          brand: "var(--color-surface-shape-brand)",
          accent: "var(--color-surface-shape-accent)",
          glass: "var(--color-surface-shape-glass)",
        },
      },
      fontFamily: {
        display: ["var(--font-family-display)"],
        content: ["var(--font-family-content)"],
        epigraph: ["var(--font-family-epigraph)"],
      },
      fontSize: {
        xxs: ["var(--font-size-xxs)", "var(--font-line-height-xxs)"],
        xs: ["var(--font-size-xs)", "var(--font-line-height-xs)"],
        sm: ["var(--font-size-sm)", "var(--font-line-height-sm)"],
        md: ["var(--font-size-md)", "var(--font-line-height-md)"],
        lg: ["var(--font-size-lg)", "var(--font-line-height-lg)"],
        xl: ["var(--font-size-xl)", "var(--font-line-height-xl)"],
      },
      spacing: {
        "0": "var(--layout-gap-0)",
        "2": "var(--layout-gap-50)",
        "4": "var(--layout-gap-100)",
        "8": "var(--layout-gap-200)",
        "12": "var(--layout-gap-300)",
        "16": "var(--layout-gap-400)",
        "20": "var(--layout-gap-500)",
        "24": "var(--layout-gap-600)",
        "32": "var(--layout-gap-800)",
        "40": "var(--layout-gap-1000)",
        "icon-sm": "var(--icon-size-small)",
        "icon-md": "var(--icon-size-medium)",
        "icon-lg": "var(--icon-size-large)",
        "icon-xl": "var(--icon-size-x-large)",
      },
      maxWidth: {
        container: "var(--layout-max-width-container)",
        content: "var(--layout-max-width-content)",
      },
      borderRadius: {
        atom: "var(--border-radius-atom)",
        container: "var(--border-radius-container)",
        pill: "var(--border-radius-rounded)",
      },
      boxShadow: {
        card: "0px 4px 2px 0px var(--color-primitive-alpha-inverted-05)",
      },
    },
  },
  plugins: [],
};
export default config;
