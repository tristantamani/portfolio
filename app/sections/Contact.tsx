'use client'

import { motion } from 'framer-motion'
import { FiLinkedin } from "react-icons/fi";
import { Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tristan-andrei-tamani-672b08316/',
    icon: FiLinkedin,
  },
]

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-32 md:py-48"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Contact Me</h2>
          <p className="text-text-secondary dark:text-dark-text-secondary mb-12 font-mono">
            Let's connect and explore opportunities together.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="mailto:tristanandreitamani@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3 py-3 bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
            >
              <Mail size={40} />
            </motion.a>
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-3 py-3 border border-black dark:border-white rounded-md hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black dark:text-white transition-colors duration-300"
                >
                  <Icon size={40} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
