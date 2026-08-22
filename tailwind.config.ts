import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          950: "#050505",
          900: "#0F0F0F",
          800: "#181818",
          700: "#242424",
        },
        volt: {
          DEFAULT: "#C6FF00",
          400: "#D4FF3D",
          500: "#C6FF00",
          600: "#A3D400",
        },
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        volt: "0 0 40px rgba(198,255,0,0.35)",
        "volt-sm": "0 0 20px rgba(198,255,0,0.25)",
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.75) 45%, rgba(5,5,5,0.96) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
