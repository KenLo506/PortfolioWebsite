'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import CursorGlow from './CursorGlow'

const iconHover = {
  scale: 1.2,
  rotate: 5,
  transition: { duration: 0.2 }
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export default function Hero() {
  const name = "Ken Lo"
  const title = "Software Engineer"
  const location = "Queens, NY"

  return (
    <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <CursorGlow />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-background opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1 
            className="text-6xl font-bold mb-4 text-white"
            variants={textVariants}
            custom={0}
          >
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                custom={index}
                className="inline-block"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h2 
            className="text-2xl text-white mb-6"
            variants={textVariants}
            custom={1}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white mb-8"
            variants={textVariants}
            custom={2}
          >
            {location}
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6"
            variants={textVariants}
            custom={3}
          >
            <motion.a 
              href="tel:+12016824259" 
              className="text-white hover:text-primary transition-colors"
              whileHover={iconHover}
            >
              <FaPhone className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:loken506@gmail.com" 
              className="text-white hover:text-primary transition-colors"
              whileHover={iconHover}
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://github.com/KenLo506" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
              whileHover={iconHover}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/ken-lo-782988199" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
              whileHover={iconHover}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 