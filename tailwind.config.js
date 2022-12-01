module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'gray': "#e4e4e4",
      'purple': "#d1baff",
      'yellow': "#ffd88c",
      'black': "#000000",
      'pink': "#ffdada",
      'blue': "#3c2b84",
      'white': '#ffffff'
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      title: "32px",
      "cart-title": "25px",
      "cart-text": "16px",
      tag: "16px",
      "input-title": "44px",
      "input-text": "20px",
    },
    fontWeight: {
      "cart-title": "600",
      "cart-text": "400",
      tag: 500,
    },
    lineHeight: {
      "cart-title": "28px",
      "cart-text": "142%",
      tag: "24px",
      "input-title": "44px",
      "input-text": "44px",
    },
    letterSpacing: {
      "cart-title": "0.4px",
      "cart-text": "-0.02em",
      "input-title": "-0.6px",
      "input-text": "-0.6px",
    },
    maxWidth: {
      cart: "360px",
      popup: "640px",
      color: "32px",
    },
    maxHeight: {
      cart: "314px",
      popup: "408px",
      color: "32px",
    },
    minHeight: {
      color: "32px",
      full: "100vh",
      "text-edit": "200px",
    },
    borderRadius: {
      cart: "16px",
      full: "50%",
      input: '8px'
    },
    boxShadow: {
      cart: "4px 4px 0px rgba(9, 7, 92, 0.07)",
    },
  },
  plugins: [],
};
