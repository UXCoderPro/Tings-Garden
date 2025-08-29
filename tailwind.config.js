// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
        italian: ['"Italiana"', "serif"],
      },
      colors: {
        primary: "#F0516D", // Red
        primaryShade: "#FFF5F7",
        secondary: "#630926", // Dark Red
        text: "#2C2C2C",
        bg: "#FFFEF9",
        stroke: "#CED0BB",
        border: "#F8F4D1",
      },
      backgroundImage: {
        "yellow-gradient":
          "linear-gradient(104deg,#FFFEF9 33.42%,#FFF 50.52%,#FFFDE4 94.16%)",
        "product-gradient":
          "radial-gradient(83.63% 83.63% at 50% 50%,#FFF 0%,#FAFDFE 28.25%,#EDF6FC 59.96%,#D7EAF9 93.22%,#D1E7F8 100%)",
        "offer-gradient":
          "linear-gradient(129deg,#99C5DD -44.39%,#6B77DB 72.52%)",
      },
    },
  },
  plugins: [],
};
