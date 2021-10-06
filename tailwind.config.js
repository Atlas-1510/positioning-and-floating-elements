module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ns-blue": "rgb(78, 177, 224)",
        "ns-button-blue": "rgb(0, 85, 135)",
        "ns-gray": "rgb(142, 142, 142)",
        "ns-beige": "rgb(244,244,243)",
        "fb-blue": "rgb(59, 89, 152)",
        "twitter-blue": "rgb(91, 180, 240)",
        "whatsapp-green": "rgb(124, 205, 123)",
        "linkedIn-blue": "rgb(72, 149, 192)",
        "reddit-orange": "rgb(255, 87, 0)",
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
