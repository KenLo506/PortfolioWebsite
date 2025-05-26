'use client'

import { motion } from 'framer-motion'
import { fadeInUp, cardHover } from './animations'

interface ProjectCardProps {
  title: string
  subtitle: string
  points: string[]
  imagePath: string
}

export default function ProjectCard({ title, subtitle, points, imagePath }: ProjectCardProps) {
  return (
    <motion.div 
      variants={fadeInUp} 
      className="relative group bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 overflow-hidden"
      whileHover={cardHover}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${imagePath})`,
          filter: 'blur(8px)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-text-dark">{title}</h3>
        <p className="text-text-light mb-4">{subtitle}</p>
        <ul className="list-disc list-inside text-text-light space-y-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
} 