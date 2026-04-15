'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const tools = [
  { name: 'Kotlin', image: '/tools/kotlin.png' },
  { name: 'Jetpack Compose', image: '/tools/jetpack-compose.png' },
  { name: 'Java', image: '/tools/java.png' },
  { name: 'HTML5', image: '/tools/html5.png' },
  { name: 'CSS3', image: '/tools/css3.png' },
  { name: 'JavaScript', image: '/tools/javascript.png' },
  { name: 'Bootstrap', image: '/tools/bootstrap.png' },
  { name: 'Node.js', image: '/tools/nodejs.png' },
  { name: 'MongoDB', image: '/tools/mongodb.png' },
  { name: 'GitHub', image: '/tools/github.png' },
  { name: 'Supabase', image: '/tools/supabase.png' },
]

const toolsRow1 = tools.slice(0, 6)
const toolsRow2 = tools.slice(6)

const projects = [
  {
    title: 'Artroxel',
    description: 'Browser-based arcade game platform featuring pixel and retro games inspired by itch.io',
    screenshot: '/projects/artroxel-screenshot.png',
    link: 'https://github.com/tristantamani/artroxel-web',
  },
  {
    title: 'Cubic Forecast',
    description: 'Predictive water billing appllication that helps users plan and budget for upcoming water bills',
    screenshot: '/projects/cubic-forecast-screenshot.png',
    link: 'https://github.com/tristantamani/cubic-forecast',
  },
  {
    title: 'DubLab Sports',
    description: 'Philippine sports news entertainment website for basketball, volleyball, football, and floorball',
    screenshot: '/projects/dublab-screenshot.png',
    link: '#',
  },
  {
    title: 'UE Admission Portal',
    description: "A web clone of University of the East's online college admission portal with built with JS localStorage",
    screenshot: '/projects/ue-portal-screenshot.png',
    link: 'https://github.com/tristantamani/ue-admission-portal-clone',
  },
  {
    title: 'BookWarrior',
    description: 'Library management dashboard for tracking book inventory, acquisitions, transactions, and vendor records',
    screenshot: '/projects/bookwarrior-screenshot.png',
    link: 'https://github.com/tristantamani/bookwarrior',
  },
]

export function Projects() {
  return (
    <motion.section
      id="projects"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Projects</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const isClickable = project.link !== '#'
            const CardWrapper = isClickable ? motion.a : motion.div
            const cardProps = isClickable
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <CardWrapper
                key={project.title}
                {...cardProps}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group block bg-white rounded-lg border border-gray-300 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-100">
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg font-poppins">{project.title}</h3>
                    {isClickable && (
                      <ExternalLink size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 font-poppins line-clamp-3">{project.description}</p>
                </div>
              </CardWrapper>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20"
        >
          <p className="text-gray-600 mb-8 font-mono text-center">
            Here are some of the tools I used to develop my projects
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-between w-full max-w-3xl px-4">
              {toolsRow1.map((tool) => (
                <div key={tool.name} className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={tool.image}
                    alt={`${tool.name} icon`}
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between w-full max-w-3xl px-16 md:px-24">
              {toolsRow2.map((tool) => (
                <div key={tool.name} className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={tool.image}
                    alt={`${tool.name} icon`}
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
