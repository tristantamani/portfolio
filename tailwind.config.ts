import type { Config } from 'tailwindcss'

const config: Config = {
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
        background: '#EEEEEE',
        surface: '#FFFFFF',
        'text-primary': '#000000',
        'text-secondary': '#666666',
      },
    },
  },
  plugins: [],
}

export default config
