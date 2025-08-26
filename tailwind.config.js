// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        primary: "#F0516D", // Red
        secondary: "#630926", // Dark Red
        text: "#2C2C2C",
        bg: "#FFFEF9",
        stroke: "#CED0BB",
      },
      backgroundImage: {
        "yellow-gradient":
          "linear-gradient(104deg, #FFFEF9 33.42%, #FFF 50.52%, #FFFDE4 94.16%)",
      },
    },
  },
  plugins: [],
};
