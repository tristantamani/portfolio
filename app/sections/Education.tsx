'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

const universities = [
  {
    name: 'University of the East',
    degree: 'BS Computer Science',
    years: '2023 — Expected Jan 2027',
    logo: '/education/ue-logo.png',
  },
  {
    name: 'FEU Institute of Technology',
    degree: 'BS Computer Science - Software Engineering',
    years: '2022 - 2023',
    logo: '/education/feu-tech-logo.png',
  },
]

export function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Education</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl space-y-8"
        >
          {universities.map((uni) => (
            <motion.div
              key={uni.name}
              variants={itemVariants}
              className="rounded-lg p-6 flex items-start gap-8"
            >
              <div className="w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg font-poppins mb-0">{uni.name}</h3>
                <p className="text-text-secondary dark:text-dark-text-secondary text-md font-mono mb-2">{uni.degree}</p>
                <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm font-mono">{uni.years}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
