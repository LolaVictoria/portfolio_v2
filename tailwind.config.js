/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F4EF',
        ink: '#1C1B18',
        muted: '#6B685F',
        line: '#DEDAD0',
        accent: '#33415C',
        'accent-soft': '#DDE3EC',
        'accent-dark': '#212C3F',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '860px',
      },
    },
  },
  plugins: [],
}
