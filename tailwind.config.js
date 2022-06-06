module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        companyBranding: "#192139",
        companySecondary: "#B47382",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
