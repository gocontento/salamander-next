import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        orange: "#FFB800",
        grey: "#333333",
        charcoal: "#1E1E1E",
        light: "rgba(255, 255, 255, 0.2)"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      fontSize: {
        xs: "1rem",
        sm: '1.2rem',
        md: '1.8rem',
        xl: '2.2rem',
        xxl: '3.8rem'

      },
    },
  },
  plugins: [],
}
export default config


