/* eslint-disable global-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  // darkMode: "class",
  theme: {
    extend: {
      screens: {
        minscreen: "340px",
        xs: "460px",
        xs2: "500px",
        // sm	640px
        // md	768px
        // lg	1024px
        // xl	1280px
        // 2xl 1536px
      },
      boxShadow: {
        top: "20px 35px 60px -15px rgba(0, 0, 0, 0.3)",
        notLeft: "3px 3px 5px -4px rgba(0, 0, 0, 0.3)",
      },
      dropShadow: {
        red: "0 35px 35px rgba(229, 8, 21, 1)",
      },
    },
    fontFamily: {
      varela: ["Varela Round", "sans-serif"],
      sans: ["Rubik", "sans-serif"],
    },
    linearBorderGradients: () => ({
      colors: {
        "light-green": [colors.emerald[500], colors.green[500], colors.lime[500]],
        "light-blue": [colors.teal[500], colors.emerald[500], colors.green[500]],
        purple: [colors.blue[500], colors.pink[500], colors.purple[500]],
        gray: [colors.gray[300], colors.gray[100], colors.gray[300]],
      },
      background: {
        white: "#fff",
      },
    }),
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-border-gradient-radius"),
  ],
};
