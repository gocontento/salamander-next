import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        // primary
        orange: '#FFB800',
        // secondary
        pink: '#FF5E6B',
        grey: '#333333',
        charcoal: '#1E1E1E',
        light: 'rgba(255, 255, 255, 0.2)',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      fontSize: {
        xs: '1rem',
        sm: '1.2rem',
        md: '1.8rem',
        xl: '2.2rem',
        xxl: '3.8rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            ul: {
              'list-style-type': 'square',
            },
          },
        },
        black: {
          css: {
            '--tw-prose-body': '#000',
            '--tw-prose-headings': '#000',
            '--tw-prose-lead': '#000',
            '--tw-prose-links': '#000',
            '--tw-prose-bold': '#000',
            '--tw-prose-counters': '#000',
            '--tw-prose-bullets': '#000',
            '--tw-prose-hr': '#000',
            '--tw-prose-quotes': '#000',
            '--tw-prose-quote-borders': '#000',
            '--tw-prose-captions': '#000',
            '--tw-prose-code': '#000',
            '--tw-prose-pre-code': '#fff',
            '--tw-prose-pre-bg': '#000',
            '--tw-prose-th-borders': '#000',
            '--tw-prose-td-borders': '#000',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
