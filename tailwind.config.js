/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'brand': {
          'bg': '#eef5ee',
          'bg-secondary': '#e5ede5',
          'accent': '#5a8a5a',
          'accent-light': '#8fb88f',
          'accent-dark': '#4a6f4a',
          'heading': '#2d3e2d',
          'text': '#3a4a3a',
          'text-light': '#5a6a5a',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Merriweather', 'serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'heading': ['Merriweather', 'serif'],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}




