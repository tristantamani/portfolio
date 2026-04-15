'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-8 border-t border-footer-border dark:border-dark-footer-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-footer-text dark:text-dark-footer-text text-xs font-mono">
          &#169; 2026 Tristan Tamani. Built with Next.js, React, Tailwind, and Framer Motion.
        </p>
      </div>
    </motion.footer>
  )
}
