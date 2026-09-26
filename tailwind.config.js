/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
        },
        dark: '#050508',
        card: 'rgba(255, 255, 255, 0.04)',
        border: 'rgba(255, 255, 255, 0.08)',
        text: {
          primary: '#FFFFFF',
          muted: 'rgba(255, 255, 255, 0.55)',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        coolvetica: ['Coolvetica', 'sans-serif'],
      },
      spacing: {
        'nav-h': '80px',
      },
      borderRadius: {
        'default': '16px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.8s ease both',
        'cardFloat': 'cardFloat 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 30s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cardFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        }
      }
    },
  },
  plugins: [],
}
