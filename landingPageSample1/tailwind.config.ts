import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Golden Luxe color palette
        cream: {
          50: '#fdfcf9',
          100: '#faf8f3',
          200: '#f5f1e7',
          300: '#ede7c7', // Primary cream
          400: '#e5ddb0',
          500: '#ddd399',
          600: '#c9ba7a',
          700: '#b5a15b',
          800: '#8a7a46',
          900: '#5f5331',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc2626',
          600: '#8b0000', // Primary red
          700: '#7a0000',
          800: '#5b0202', // Dark maroon
          900: '#450101',
          950: '#200e01', // Very dark brown
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

