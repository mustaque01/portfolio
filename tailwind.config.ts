import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(240 3.7% 15.9%)",
        input: "hsl(240 3.7% 15.9%)",
        ring: "hsl(263 70% 50%)",
        background: "hsl(224 71% 4%)",
        foreground: "hsl(213 31% 91%)",
        primary: {
          DEFAULT: "hsl(263 70% 50%)",
          foreground: "hsl(210 20% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(215 27.9% 16.9%)",
          foreground: "hsl(210 20% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 63% 31%)",
          foreground: "hsl(210 20% 98%)",
        },
        muted: {
          DEFAULT: "hsl(215 27.9% 16.9%)",
          foreground: "hsl(217.9 10.6% 64.9%)",
        },
        accent: {
          DEFAULT: "hsl(215 27.9% 16.9%)",
          foreground: "hsl(210 20% 98%)",
        },
        popover: {
          DEFAULT: "hsl(224 71% 4%)",
          foreground: "hsl(215 20.2% 65.1%)",
        },
        card: {
          DEFAULT: "hsl(224 71% 4%)",
          foreground: "hsl(213 31% 91%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradient: "gradient 3s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
