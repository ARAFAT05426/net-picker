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
        'primary-bg': "#F6F5EF",
        primary: "#ff2759"
      },
      container: {
        center: true
      },
      fontFamily: {
        Kanit: `"Kanit", sans-serif`,
      }
    },
  },
  plugins: [],
};
export default config;
