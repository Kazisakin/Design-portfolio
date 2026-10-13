import type { Config } from 'tailwindcss';

// One colour theme: white paper, near-black ink and a highlighter-lime accent (used as a background, never as text on white).
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#ffffff',
        ink: '#0e0e0e',
        mist: '#f4f4f1',
        accent: {
          DEFAULT: '#d4f760',
          dark: '#b9e02f',
          soft: '#f1fcc8',
        },
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
