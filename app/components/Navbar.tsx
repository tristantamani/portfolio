'use client'

import { motion } from 'framer-motion'
import { CgDarkMode } from 'react-icons/cg'
import { useTheme } from './ThemeProvider'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4 bg-navbar-bg dark:bg-dark-navbar-bg backdrop-blur-md border-b border-navbar-border dark:border-dark-navbar-border transition-colors duration-300"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <ul className="flex justify-center gap-2 md:gap-4 font-bold flex-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="inline-block px-4 py-2 text-xs uppercase tracking-wider border border-black dark:border-white rounded-full text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-4 p-2 rounded-full border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black dark:text-white transition-colors duration-300"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          <CgDarkMode size={20} />
        </motion.button>
      </nav>
    </motion.header>
  )
}
