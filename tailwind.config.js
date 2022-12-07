module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#A1E1FA",
        secondary: "#4A8DB7",
        tertiary: "#74BDE0",
        accent: "#3B7197",
      },
    },
  },
  plugins: [],
};
