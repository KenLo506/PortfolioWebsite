/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B5563',
        secondary: '#1F2937',
        accent: '#6B7280',
        background: {
          light: '#F9FAFB',
          DEFAULT: '#F3F4F6',
          dark: '#E5E7EB',
        },
        text: {
          light: '#6B7280',
          DEFAULT: '#374151',
          dark: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 