import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        doto: ['Doto', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "particle-float": "particle-float 3s infinite ease-in-out",
        "bounce": "bounce 1.5s infinite",
      },
      keyframes: {
        "particle-float": {
          "0%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-30px) scale(1.2)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
