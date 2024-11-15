export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '1.75rem',       
          lg: '2.5rem',         
          xl: '3.5rem',       
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      colors: {
        primary: "#e7ab3c",
        secondary: "#191919",
        accent: "#434445",
        background: "#f9fafb",
        card: "#1e293b",
        textPrimary: "#1f2937",
        textSecondary: "#4b5563",
        border: "#d1d5db"
      },
      fontFamily: {
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.1)",
        button: "0 2px 4px rgba(0, 0, 0, 0.15)",
      }
    },
  },
  plugins: [],
}
