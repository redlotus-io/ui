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
      colors: {
        textGray: "#292929",
        textWhite: "#f3f2f0",
        casualRed: "#FF695A",
        casualOrange: "#FFA033",
        casualGreen: "#42D68C",
        casualAqua: "#08CAD1",
        casualSkyBlue: "#59ADF6",
        casualSlateBlue: "#97B8FC",
        casualViolet: "#C780E8",
        casualPink: "#F07DD7",
        casualRedDarker: "#B92F27",
        casualOrangeDarker: "#C76A2A",
        casualGreenDarker: "#30A46A",
        casualAquaDarker: "#05989D",
        casualSkyBlueDarker: "#2A85D4",
        casualSlateBlueDarker: "#728ABC",
        casualVioletDarker: "#9756B5",
        casualPinkDarker: "#CC41AE",
        casualRedOutline: "#fcaaa1",
        casualOrangeOutline: "#FFC684",
        casualGreenOutline: "#79E2AE",
        casualAquaOutline: "#26E2E9",
        casualSkyBlueOutline: "#6DB7F8",
        casualSlateBlueOutline: "#AAC6FF",
        casualVioletOutline: "#E2A5FF",
        casualPinkOutline: "#FFA8EC",
        darkOutline: "#78808c",
        lightOutline: "#eef2f6",
        blueOutline: "#6585DF",
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
