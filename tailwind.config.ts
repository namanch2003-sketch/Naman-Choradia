import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#001B4D",
          light: "#002566",
          dark: "#001030",
        },
        accent: {
          DEFAULT: "#1E63FF",
          light: "#4A80FF",
          dark: "#1550D4",
        },
        border: "#E5EAF2",
        muted: "#6B7280",
      },
      fontFamily: {
        // Playfair Display — used via font-serif class
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        // Source Sans 3 — used via font-sans class
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
        // Legacy alias kept for any existing components
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      spacing: {
        sidebar: "280px",
      },
      boxShadow: {
        card: "0 1px 4px 0 rgba(0, 27, 77, 0.06), 0 4px 16px 0 rgba(0, 27, 77, 0.04)",
        "card-hover":
          "0 4px 20px 0 rgba(0, 27, 77, 0.12), 0 8px 32px 0 rgba(0, 27, 77, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
