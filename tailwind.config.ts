import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-martian-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Light Mode
        background: '#EEEEEE',
        surface: '#FFFFFF',
        'text-primary': '#000000',
        'text-secondary': '#666666',
        'text-tertiary': '#666666',
        border: '#000000',
        'border-light': '#E5E7EB',
        'border-medium': '#D1D5DB',
        'card-border': '#D1D5DB',
        'icon-muted': '#9CA3AF',
        'footer-border': '#E5E7EB',
        'footer-text': '#6B7280',
        'input-bg': '#F3F4F6',
        'navbar-bg': 'rgba(255, 255, 255, 0.8)',
        'navbar-border': 'rgba(229, 231, 235, 0.5)',
        // Dark Mode
        'dark-bg': '#0a0a0f',
        'dark-surface': '#1a1a25',
        'dark-text-primary': '#FFFFFF',
        'dark-text-secondary': '#A1A1AA',
        'dark-text-tertiary': '#A1A1AA',
        'dark-border': '#FFFFFF',
        'dark-border-light': 'rgba(255, 255, 255, 0.1)',
        'dark-border-medium': 'rgba(255, 255, 255, 0.2)',
        'dark-card-border': 'rgba(255, 255, 255, 0.2)',
        'dark-icon-muted': '#71717A',
        'dark-footer-border': 'rgba(255, 255, 255, 0.1)',
        'dark-footer-text': '#71717A',
        'dark-input-bg': '#27272a',
        'dark-navbar-bg': 'rgba(26, 26, 37, 0.8)',
        'dark-navbar-border': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
