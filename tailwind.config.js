module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ns-blue": "rgb(78, 177, 224)",
        "ns-gray": "rgb(142, 142, 142)",
      },
      fontFamily: {
        titillium: ["Titillium Web", "Helvetica", "Trebuchet MS", "Arial"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
