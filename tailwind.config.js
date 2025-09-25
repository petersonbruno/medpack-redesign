// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 8px 24px 10px #E4F3FF',
      },
      maxWidth: {
        '1440': '1440px',
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(112.96deg, rgba(248, 248, 248, 0) 0%, #0B7CD0 59.31%)",
      },
    },
  },
  plugins: [],
}
