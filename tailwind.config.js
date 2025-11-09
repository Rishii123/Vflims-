export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', "cursive"],
        body: ['"Poppins"', "sans-serif"],
        varnan: ['"Varnan"', "sans-serif"],
      },
      
      screens: {
        xs: "420px",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-slow": "rotate 20s linear infinite",
        "slow-spin": "slow-spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};

