import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#EEF1F6',
          100: '#D6DDE9',
          400: '#3A5074',
          600: '#152C4E',
          900: '#0B1F3A'
        },
        royal: {
          DEFAULT: '#2452FF',
          50: '#EAF0FF',
          400: '#5B7CFF',
          600: '#2452FF',
          700: '#1B3ECC'
        },
        surface: {
          light: '#F4F6F9',
          dark: '#0E1526'
        },
        ink: {
          DEFAULT: '#1A2233',
          soft: '#5B6472'
        }
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;
