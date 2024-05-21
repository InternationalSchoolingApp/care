/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require('daisyui'),],
  daisyui: {
    themes: false,
    darkTheme: "dark"
  },
};
