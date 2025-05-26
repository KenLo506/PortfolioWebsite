'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Ken Lo. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/KenLo506"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ken-lo-782988199"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 