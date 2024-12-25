/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'metro-blue': 'var(--metro-blue)',
        'metro-red': 'var(--metro-red)',
        'metro-green': 'var(--metro-green)',
        'metro-orange': 'var(--metro-orange)',
      }
    },
  },
  safelist: [
    'ring-metro-blue',
    'ring-metro-red',
    'ring-metro-green',
    'ring-metro-orange',
  ]
}

