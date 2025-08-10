/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D46666",
      },
      fontFamily: {
        notosansjp: ["var(--font-noto-sans-jp)"],
        roboto: ["var(--font-roboto-condensed)"],
      },
      transitionTimingFunction: {
        transform: "cubic-bezier(0.43, 0.05, 0.17, 1)",
        material: "cubic-bezier(0.26, 0.16, 0.1, 1)",
      },
    },
  },
  plugins: [],
};
