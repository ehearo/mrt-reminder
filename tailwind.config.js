/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // 移除未使用的樣式
  purge: {
    enabled: true,
    content: [
      './src/**/*.{vue,js,ts,jsx,tsx}',
      './index.html',
    ],
  }
}

