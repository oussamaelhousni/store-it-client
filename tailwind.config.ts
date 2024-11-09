import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        "secondary-dark": "var(--secondary-dark",
      },
    },
  },
  plugins: [],
} satisfies Config;
