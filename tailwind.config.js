/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',    // Watch/small mobile
      'sm': '640px',    // Mobile
      'md': '768px',    // Tablet
      'lg': '1024px',   // Laptop
      'xl': '1280px',   // Desktop
      '2xl': '1536px',  // Large Desktop
      '3xl': '1920px',  // Full HD
      '4xl': '2560px',  // 2K/4K TV
    },
    extend: {
      fontFamily: {
        mono: ['Source Code Pro', 'JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Electrolize', 'sans-serif'],
      },
      colors: {
        // AeThex division brand colors
        'corp-blue': '#3b82f6',
        'foundation-red': '#ef4444',
        'labs-yellow': '#eab308',
        'gameforge-green': '#22c55e',
        'ethos-pink': '#ec4899',
        'nexus-purple': '#a855f7',
        // Cyberpunk neon
        'neon-cyan': '#00ffff',
        'neon-magenta': '#ff00ff',
        'neon-green': '#00ff00',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scanline': 'scanline 4s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}

