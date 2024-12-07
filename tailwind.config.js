import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "border-glow": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "0% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "border-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {
            fontFamily: "Satoshi",
          },
        },
        dark: {
          layout: {
            fontFamily: "Satoshi",
          },
        },
      },
    }),
    function ({ addUtilities }) {
      addUtilities({
        ".mask-border": {
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "mask-composite": "exclude",
        },
        ".mask-composite-source-out": {
          "mask-composite": "source-out",
        },
      });
    },
  ],
};
