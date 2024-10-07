import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontSize: {
      base: "15px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "screen-2xl": "1280px",
        "2xl": "1280px",
      },
    },
    colors: {
      ...require("tailwindcss/colors"),
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      screens: {
        vs: "375px",
        "2xl": "1280px",
      },
      colors: {
        primary: {
          50: "#ffeeff",
          100: "#f1caff",
          200: "#d4a0ff",
          300: "#b875f0",
          400: "#a352e1",
          500: "#902bd4",
          600: "#8629d0",
          700: "#7b19c5",
          800: "#6e12be",
          900: "#5800af",
        },
        secondary: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        accent: {
          50: "#fef3c7",
          100: "#fde68a",
          200: "#fcd34d",
          300: "#fbbf24",
          400: "#f59e0b",
          500: "#ecc94b",
          600: "#d69e2e",
          700: "#b7791f",
          800: "#975a16",
          900: "#744210",
        },
        neutral: {
          DEFAULT: "#464547",
        },
        black900: {
          900: "#110D0D",
        },
        black: "#131313",
        // gray: {
        //   50: "#fafafa",
        //   100: "#f5f5f5",
        //   200: "#e5e5e5",
        //   300: "#d4d4d4",
        //   400: "#a3a3a3",
        //   500: "#737373",
        //   600: "#525252",
        //   700: "#404040",
        //   800: "#303030",
        //   900: "#171717",
        // },
        gray: {
          50: "#FFFFFFD3",
          100: "#FFFFFF0D",
          200: "#FFFFFF1A",
          300: "#FFFFFF21",
          400: "#FFFFFF33",
          500: "#FFFFFF3B",
          600: "#FFFFFF40",
          700: "#FFFFFF80",
          800: "#FFFFFFB3",
          900: "#FFFFFFD3",
        },
        green: {
          100: "#CCFBF1",
          300: "#E7F9DC",
          500: "#10B981",
          700: "#0F766E",
        },
        red: {
          100: "#FEE2E2",
          500: "#EF4444",
          700: "#B91C1C",
        },
        purple: {
          50: "#FFEEFF",
          100: "#F1CAFF",
          200: "#D4A0FF",
          300: "#B875F0",
          400: "#A352E1",
          500: "#902bd4",
          600: "#8628D0",
          700: "#7B19C5",
          800: "#6E12BE",
          900: "#5800AF",
          bg: "#0F041C",
        },
        pink: {
          100: "#FDF3FB",
          500: "#F36FD5",
          700: "#CC3DAB",
        },
        yellow: {
          300: "#FEF0C7",
          500: "#ECAA46",
          700: "#550000",
        },
        orange: {
          100: "#FFEDD5",
          500: "#F97316",
          700: "#C2410C",
        },
        blue: {
          100: "#DBEAFE",
          500: "#3B82F6",
          700: "#1D4ED8",
        },
        cyan: {
          100: "#CFFAFE",
          500: "#06B6D4",
          700: "#0E7490",
        },
      },
      fontSize: {
        "2xs": [
          "10px",
          {
            lineHeight: "140%",
            letterSpacing: "0.01px",
          },
        ],
        xs: [
          "12px",
          {
            lineHeight: "140%",
            letterSpacing: "0.012px",
          },
        ],
        sm: [
          "13px",
          {
            lineHeight: "140%",
            letterSpacing: "0.014px",
          },
        ],
        base: [
          "15px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.008px",
          },
        ],
        md: [
          "18px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.009px",
          },
        ],
        lg: [
          "20px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.01px",
          },
        ],
        xl: [
          "30px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.012px",
          },
        ],
        "2xl": [
          "48px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.015px",
          },
        ],
        "3xl": [
          "72px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.03px",
          },
        ],
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
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-aria-attributes"),
  ],
} satisfies Config;

export default config;
