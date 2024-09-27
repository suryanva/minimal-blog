/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 30px 100px 0px rgba(17, 23, 41, 0.05)",
      },
    },
  },
  plugins: [],
};
