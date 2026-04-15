'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <div className="rounded-lg p-6 flex items-start gap-8">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="/experience/big-pond-education-logo.png"
                alt="Big Pond Education logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg font-poppins mb-0">Big Pond Education PH</h3>
              <p className="text-gray-600 font-mono mb-2">Backend Developer Intern</p>
              <p className="text-gray-500 text-sm font-mono">June 2025 - July 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
