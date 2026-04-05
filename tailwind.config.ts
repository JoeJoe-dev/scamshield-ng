import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode surfaces (design system)
        "surface":           "#f8f9fa",
        "surface-low":       "#f3f4f5",
        "surface-lowest":    "#ffffff",
        "surface-high":      "#e8eaed",
        // Brand
        "navy":              "#00081e",
        "navy-mid":          "#0a1f44",
        "navy-light":        "#1a3a6e",
        "green-safe":        "#006e2d",
        "green-safe-light":  "#d4edda",
        "green-safe-text":   "#004d1f",
        "red-risk":          "#c0392b",
        "red-risk-light":    "#fde8e6",
        "red-risk-text":     "#7f1d1d",
        "amber-warn":        "#b45309",
        "amber-warn-light":  "#fef3c7",
        // Dark mode surfaces
        "dark-surface":      "#0d1117",
        "dark-surface-low":  "#161b22",
        "dark-surface-card": "#1c2128",
        "dark-surface-high": "#21262d",
      },
      fontFamily: {
        display: ["'Manrope'", "sans-serif"],
        body:    ["'Inter'",   "sans-serif"],
      },
      keyframes: {
        fadeUp:    { "0%": { opacity:"0", transform:"translateY(12px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        fadeIn:    { "0%": { opacity:"0" }, "100%": { opacity:"1" } },
        pulse2:    { "0%,100%": { opacity:"1" }, "50%": { opacity:"0.4" } },
        scaleIn:   { "0%": { opacity:"0", transform:"scale(0.94)" }, "100%": { opacity:"1", transform:"scale(1)" } },
        spin2:     { "0%": { transform:"rotate(0deg)" }, "100%": { transform:"rotate(360deg)" } },
        shimmer:   { "0%": { backgroundPosition:"-400px 0" }, "100%": { backgroundPosition:"400px 0" } },
      },
      animation: {
        "fade-up":  "fadeUp 0.45s ease both",
        "fade-in":  "fadeIn 0.35s ease both",
        "pulse2":   "pulse2 2s ease infinite",
        "scale-in": "scaleIn 0.4s ease both",
        "spin2":    "spin2 3s linear infinite",
        "shimmer":  "shimmer 2s infinite linear",
      },
      backgroundImage: {
        "navy-gradient":   "linear-gradient(135deg, #00081e 0%, #0a1f44 100%)",
        "green-gradient":  "linear-gradient(135deg, #006e2d 0%, #00a843 100%)",
        "shield-gradient": "linear-gradient(160deg, #00081e 0%, #0d2a5c 60%, #006e2d 100%)",
      },
      boxShadow: {
        "card":    "0 2px 32px -4px rgba(0,8,30,0.06)",
        "card-md": "0 4px 24px -4px rgba(0,8,30,0.10)",
        "card-lg": "0 8px 40px -4px rgba(0,8,30,0.14)",
        "dark-card": "0 2px 16px -2px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
