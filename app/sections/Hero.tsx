'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Download } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="min-h-screen flex items-center py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-40 md:gap-48 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins whitespace-nowrap">
              Tristan Andrei Tamani
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-mono">
              Computer Science Student
            </p>
            <p className="text-gray-600 mb-8 max-w-lg font-mono">
              Building mobile and web applications focused on solving real-world problems.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md font-mono"
              >
                <Download size={24} />
                <span>Download my resume</span>
              </motion.a>
              <motion.a
                href="https://github.com/tristantamani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-3 py-3 border border-black rounded-md hover:bg-black hover:text-white transition-colors"
              >
                <FiGithub size={32} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tristan-andrei-tamani-672b08316/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-3 py-3 border border-black rounded-md hover:bg-black hover:text-white transition-colors"
              >
                <FiLinkedin size={32} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/profile-photo.jpg"
                  alt="Tristan Andrei Tamani"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
