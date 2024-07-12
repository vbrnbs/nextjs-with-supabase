/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brandpurple: "#8C52FF",
        brandblue: "#5CE1E6",
      },
      backgroundImage: {
        brand: "linear-gradient(90deg, #883CF7 0%, #00E0CB 100%)",
        "brand-reverse": "linear-gradient(45deg, #883CF7 -40%, #00E0CB 100%)",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-brand": {
          background: "linear-gradient(90deg, #883CF7 0%, #00E0CB 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
