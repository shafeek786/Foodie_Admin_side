/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "18p": "18%", // Custom width
      },
      borderWidth: {
        1.5: "1.5px", // Custom border width
        1: "1px",
      },
      minHeight: {
        full: "100vh", // Custom minimum height
      },
      colors: {
        gray: {
          400: "#a9a9a9", // Custom gray color
        },
      },
      spacing: {
        "50px": "50px", // Custom spacing
        "20p": "20%", // Custom spacing
      },
      screens: {
        "custom-lg": "900px", // Custom breakpoint
      },
    },
  },
  plugins: [],
};
