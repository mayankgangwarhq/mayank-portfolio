/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          indigo: '#4338CA',
          violet: '#7C3AED',
          purple: '#A855F7',
          teal: '#0D9488',
          navy: '#0F172A',
          iceBlue: '#EFF6FF',
          softLavender: '#F5F3FF',
          paleMint: '#ECFDF5',
          warmPeach: '#FFF1E8',
          lightSky: '#F0F9FF',
          softCream: '#FFFBEB',
        },
        slate: {
          heading: '#0F172A',
          body: '#475569',
          muted: '#64748B',
          subtle: '#94A3B8',
          border: '#E2E8F0',
          surface: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'gradient-flow': 'gradientFlow 6s ease infinite',
        'border-flow': 'borderFlow 5s ease infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(10px, -14px) scale(1.04)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-12px, 12px) scale(0.96)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
