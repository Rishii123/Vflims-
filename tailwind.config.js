export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', "cursive"],
        body: ['"Poppins"', "sans-serif"]
      },
      animation: {
        rotateSlow: 'spin 40s linear infinite'
      }
    },
    theme: {
  extend: {
    screens: {
      'xs': '420px',
    },
    keyframes: {
    rotate: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
  },
  animation: {
    "rotate-slow": "rotate 20s linear infinite",
  },
  },
},
extend: {
  keyframes: {
    rotate: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
  },
  animation: {
    "rotate-slow": "rotate 20s linear infinite",
  },
},
extend: {
  keyframes: {
    "rotate-cw": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
  },
  animation: {
    "rotate-cw": "rotate-cw 20s linear infinite",
  },
},


  },
  plugins: [],
}