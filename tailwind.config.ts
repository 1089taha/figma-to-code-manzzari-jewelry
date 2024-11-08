import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily :{
        rey :['"Rey"', "san-serif"],
        badoni : ['"Libre Badoni"' , "serif"]
      },
      screens : {
        'xs': '100px'
      },
      letterSpacing : {
        'extra-wide' : '0.025em',
      }
    },
  },
  plugins: [],
};
export default config;
