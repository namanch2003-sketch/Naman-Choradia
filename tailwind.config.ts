import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        parchment: "#FAF8F5",
        "warm-white": "#FFFDF8",
        navy: {
          DEFAULT: "#0C1D48",
          light: "#13295A",
          dark: "#081430",
        },
        gold: {
          DEFAULT: "#C6A15B",
          light: "#D4B57A",
          dark: "#A8863D",
        },
        border: "#EAE3DA",
        muted: "#6D6D6D",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(64px,9vw,120px)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display": ["clamp(48px,6vw,72px)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "headline": ["clamp(36px,4vw,52px)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "subheadline": ["clamp(20px,2.5vw,32px)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      spacing: {
        sidebar: "280px",
        "section": "120px",
      },
      boxShadow: {
        luxury: "0 1px 3px rgba(12,29,72,0.04), 0 8px 32px rgba(12,29,72,0.06)",
        "luxury-hover": "0 4px 24px rgba(12,29,72,0.10), 0 16px 48px rgba(12,29,72,0.08)",
        "gold": "0 0 40px rgba(198,161,91,0.25)",
      },
      backgroundImage: {
        "parchment-gradient": "linear-gradient(135deg, #FAF8F5 0%, #F5F0E8 100%)",
        "navy-gradient": "linear-gradient(135deg, #0C1D48 0%, #13295A 100%)",
        "gold-gradient": "linear-gradient(135deg, #C6A15B 0%, #D4B57A 100%)",
        "hero-gradient": "linear-gradient(to bottom, #1a0a00 0%, #3d1f00 15%, #7a3e10 30%, #c4672a 45%, #e8a040 60%, #f5c878 75%, #fae3b0 85%, #faf2e0 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
