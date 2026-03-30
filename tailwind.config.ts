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
        "deep-green": {
          900: "var(--color-deep-green-900)",
          800: "var(--color-deep-green-800)",
          inset: "var(--color-deep-green-inset)",
        },
        secondary: "var(--color-secondary)",
        "surface-raised": "var(--color-surface-raised)",
        "surface-base": "var(--color-surface-base)",
        glass: "var(--color-glass)",
        shadow: "var(--color-shadow)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        content: ["var(--font-content)"],
        epigraph: ["var(--font-epigraph)"],
      },
      fontSize: {
        xxs: ["12px", "16px"],
        xs: ["14px", "20px"],
        sm: ["16px", "24px"],
        md: ["20px", "32px"],
        lg: ["24px", "36px"],
        xl: ["28px", "40px"],
      },
      spacing: {
        "0": "0px",
        "2": "2px",
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "32": "32px",
        "40": "40px",
      },
      maxWidth: {
        container: "1440px",
      },
      borderRadius: {
        atom: "4px",
        container: "8px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 2px 8px var(--color-shadow)",
      },
    },
  },
  plugins: [],
};
export default config;
