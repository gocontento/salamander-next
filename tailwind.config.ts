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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            ul: {
              'list-style-type': 'square'
            }
          }
        },
        black: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-lead': theme('colors.black'),
            '--tw-prose-links': theme('colors.black'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-counters': theme('colors.black'),
            '--tw-prose-bullets': theme('colors.black'),
            '--tw-prose-hr': theme('colors.black'),
            '--tw-prose-quotes': theme('colors.black'),
            '--tw-prose-quote-borders': theme('colors.black'),
            '--tw-prose-captions': theme('colors.black'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.white'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.black'),
            '--tw-prose-td-borders': theme('colors.black'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config


