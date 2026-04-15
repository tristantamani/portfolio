'use client'

import { motion } from 'framer-motion'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center gap-2 md:gap-4 font-bold">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="inline-block px-4 py-2 text-xs uppercase tracking-wider border border-black rounded-full hover:bg-black hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
