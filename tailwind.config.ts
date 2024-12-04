import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006FE3",
        accent: "#5fa3ec",
        "text-light": "#090909",
        "text-dark": "#EBEEF1",
        "dark-background": "#0A0E12",
      },
    },
  },
  plugins: [],
} satisfies Config;
