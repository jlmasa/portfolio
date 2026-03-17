import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      colors: {
        obsidian: "#0A0A0A",
        surface: "#111111",
        "surface-2": "#1A1A1A",
        blue: "#3B82F6",
        sky: "#38BDF8",
        cream: "#F5F5F0",
        muted: "#666666",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "blink": "blink 1s step-end infinite",
        "slide-in": "slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
