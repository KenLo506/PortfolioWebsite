'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

const iconHover = {
  scale: 1.2,
  rotate: 5,
  transition: { duration: 0.2 }
}

export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-b from-background-light to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="heading-1 mb-4 text-text-dark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            Ken Lo
          </motion.h1>
          <motion.h2 
            className="text-2xl text-text-light mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Software Engineer
          </motion.h2>
          <motion.p 
            className="text-lg text-text-light mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Queens, NY
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a 
              href="tel:+12016824259" 
              className="text-text-light hover:text-primary transition-colors"
              whileHover={iconHover}
            >
              <FaPhone className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:loken506@gmail.com" 
              className="text-text-light hover:text-primary transition-colors"
              whileHover={iconHover}
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://github.com/KenLo506" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-light hover:text-primary transition-colors"
              whileHover={iconHover}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/ken-lo-782988199" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-light hover:text-primary transition-colors"
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