// tailwind.config.mjs

const config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pastel-blue": "#A7C7E7",
        "pastel-peach": "#FFDAB9",
        "pastel-green": "#C8E6C9",
        "light-bg": "#F8F8F8",
        "card-bg": "#FFFFFF",
        "dark-text": "#4A4A4A",
        "medium-text": "#707070",

        "dark-mode-bg": "#1A202C",
        "dark-mode-card": "#2D3748",
        "dark-mode-text-light": "#E2E8F0",
        "dark-mode-text-medium": "#CBD5E0",
        "dark-mode-primary": "#63B3ED",
        "dark-mode-accent": "#FBD38D",
        "dark-mode-success": "#68D391",
      },
    },
  },
  plugins: [],
};

export default config;
