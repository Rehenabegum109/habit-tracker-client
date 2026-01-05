/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D1FAE5',   
        secondary: '#F59E0B', 
        tertiary: '#10B981',  
        neutral: {
          light: '#F3F4F6',   
          dark: '#1A1A1A',    
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        habitLight: {
          "primary": "#D1FAE5",
          "secondary": "#F59E0B",
          "accent": "#10B981",
          "neutral": "#333333",
          "base-100": "#FFFFFF",
        },
      },
      {
        habitDark: {
          "primary": "#065F46",
          "secondary": "#FBBF24",
          "accent": "#22C55E",
          "neutral": "#F3F4F6",
          "base-100": "#111827",
        },
      },
    ],
    darkTheme: "habitDark",
  },
}
