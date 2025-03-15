import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
      fontSize: {
        'xs': '0.875rem',    // 14px (increased from 0.75rem)
        'sm': '1rem',        // 16px (increased from 0.875rem)
        'base': '1.125rem',  // 18px (increased from 1rem)
        'lg': '1.25rem',     // 20px (increased from 1.125rem)
        'xl': '1.375rem',    // 22px (increased from 1.25rem)
        '2xl': '1.625rem',   // 26px (increased from 1.5rem)
        '3xl': '2rem',       // 32px (increased from 1.875rem)
        '4xl': '2.375rem',   // 38px (increased from 2.25rem)
        '5xl': '3rem',       // 48px (increased from 3rem)
        '6xl': '3.75rem',    // 60px (increased from 3.75rem)
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
      },
    },
    fontFamily: {
      sans: ["Playfair Display", "serif"],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
