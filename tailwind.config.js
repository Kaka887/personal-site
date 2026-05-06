/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        accent: 'var(--color-accent)',
        'accent-secondary': 'var(--color-accent-secondary)',
        border: 'var(--color-border)',
        card: 'var(--color-card)',
        ring: 'var(--color-ring)',
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      boxShadow: {
        editorial: '0 1px 2px rgba(26, 26, 26, 0.04), 0 8px 22px rgba(26, 26, 26, 0.05)',
      },
      borderRadius: {
        editorial: '8px',
      },
      letterSpacing: {
        editorial: '0.15em',
      },
    },
  },
  plugins: [],
}
