/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#F7FBFF",
        sky: {
          50: "#EFF8FF",
          100: "#E3F3FC",
          200: "#CCE8F5",
          border: "#D5E8F2",
        },
        cream: "#FFF7E8",
        sand: "#F5DEB5",
        "sun-gold": "#E7AA59",
        "ocean-blue": "#14658E",
        "deep-blue": "#163B65",
        "body-blue": "#315977",
        teal: {
          DEFAULT: "#37A8B6",
          light: "#E0F7FA",
        },
        "veil-lilac": "#927DDB",
        "night-indigo": "#223966",
        "night-violet": "#4B447B",
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        soft: "0 4px 24px -2px rgba(22, 59, 101, 0.06)",
        card: "0 8px 30px -4px rgba(20, 101, 142, 0.08)",
        floating: "0 20px 40px -10px rgba(22, 59, 101, 0.12)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

