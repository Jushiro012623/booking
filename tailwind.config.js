/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
            toastLoader: {
              "0%": { transform: "translateX(0)"},
              "100%": { transform: "translateX(-100%)"},
            },
            toastFade: {
              "0%": { transform: "translateY(0)"},
              "100%": { transform: "translateY(100%)", opacity: "0"},
            },
            toastPop: {
                "0%": { transform: "rotate(2deg)"},
                "50%": { transform: "rotate(-2deg)"},
                "100%": { transform: "rotate(0)"},
              },
          },
        animation: {
            toastLoader: "toastLoader 3s linear forwards",
            toastPop: "toastPop .3s linear forwards",
            toastFade: "toastFade .3s linear forwards",
        },
        colors:{
            bg:{
              DEFAULT: '#f6f6f6'
            },
            'cerulean-blue': {
                '50': '#eff5ff',
                '100': '#dbe8fe',
                '200': '#bfd7fe',
                '300': '#94befc',
                '400': '#619bf9',
                '500': '#3c76f5',
                '600': '#2052e9',
                '700': '#1e43d7',
                '800': '#1f38ae',
                '900': '#1f3389',
                '950': '#172154',
            },
     
          }
      },
    },
    plugins: [],
  }