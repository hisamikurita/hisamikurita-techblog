/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        notosansjp: ["var(--font-noto-sans-jp)"],
        roboto: ["var(--font-roboto-condensed)"],
      },
    },
  },
  plugins: [],
};
