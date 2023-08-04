/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Brandey", "serif"],
        sans: ["Poppins", "system-ui"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        "pine-text": "#050807",
        "pine-accent": "#7DD9B7",
      },
    },
  },
  plugins: [],
};
