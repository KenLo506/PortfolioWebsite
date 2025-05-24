'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function CursorGlow() {

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY]) 

  const background = useTransform(
    [mouseX, mouseY],
    ([latestX, latestY]) =>
      `radial-gradient(600px at ${latestX}px ${latestY}px, rgba(255,255,255,0.15), transparent 80%)`
  )

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      style={{ background }}
    />
  )
}