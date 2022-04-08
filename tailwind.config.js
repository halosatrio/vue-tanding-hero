module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Lora", "serif"],
    },
    extend: {
      padding: {
        "65pct": "65%",
        "35pct": "35%",
      },
      maxWidth: {
        "80pct": "80%",
      },
    },
  },
  plugins: [],
}
