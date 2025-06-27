'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import next from 'next'

export default function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [mouseDownAt, setMouseDownAt] = useState("0")
  const [prevPercentage, setPrevPercentage] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const images = [
    '/images/carousel1.jpg',
    '/images/carousel2.jpg',
    '/images/carousel3.jpg',
    '/images/carousel4.jpg',
    '/images/carousel5.jpg',
    '/images/carousel6.jpg',
    '/images/carousel7.jpg',
    '/images/carousel8.jpg',
  ]

//   const handleOnDown = (e: React.MouseEvent | React.TouchEvent) => {
//     e.preventDefault()
//     const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
//     setMouseDownAt(clientX.toString())
//   }

//   const handleOnUp = () => {
//     setMouseDownAt("0")
//     setPrevPercentage(percentage)
//   }

//   const handleOnMove = (e: React.MouseEvent | React.TouchEvent) => {
//     if (mouseDownAt === "0" || !trackRef.current) return

//     const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
//     const mouseDelta = parseFloat(mouseDownAt) - clientX
//     const maxDelta = window.innerWidth / 2

//     const percentage = (mouseDelta / maxDelta) * -100
//     const nextPercentageUnconstrained = prevPercentage + percentage
//     const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)

//     setPercentage(nextPercentage)

//     trackRef.current.animate({
//       transform: `translate(${nextPercentage*3}%, -50%)`
//     }, { duration: 1200, fill: "forwards" })

//     const imagesElements = trackRef.current.getElementsByClassName("image")
//     for (let i = 0; i < imagesElements.length; i++) {
//       const image = imagesElements[i] as HTMLElement
//       image.animate({
//         objectPosition: `${100 + nextPercentage}% center`
//       }, { duration: 1200, fill: "forwards" })
//     }
//   }

  // Global event listeners
  useEffect(() => {

    if (trackRef.current) {
      trackRef.current.style.transform = 'translate(0%, -50%)'
      
      const imagesElements = trackRef.current.getElementsByClassName("image")
      for (let i = 0; i < imagesElements.length; i++) {
        const image = imagesElements[i] as HTMLElement
        image.style.objectPosition = '100% center'
      }
    }

    const handleGlobalMouseDown = (e: MouseEvent) => {
    //   e.preventDefault()
      setMouseDownAt(e.clientX.toString())
    }

    const handleGlobalTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      setMouseDownAt(e.touches[0].clientX.toString())
    }

    const handleGlobalMouseUp = () => {
      setMouseDownAt("0")
      setPrevPercentage(percentage)
    }

    const handleGlobalTouchEnd = () => {
      setMouseDownAt("0")
      setPrevPercentage(percentage)
    }

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (mouseDownAt === "0" || !trackRef.current) return

      const mouseDelta = parseFloat(mouseDownAt) - e.clientX
      const maxDelta = window.innerWidth / 2
      
      const percentage = (mouseDelta / maxDelta) * -100
      const nextPercentageUnconstrained = prevPercentage + percentage
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)

      setPercentage(nextPercentage)

      trackRef.current.animate({
        transform: `translate(${nextPercentage*3}%, -50%)`
      }, { duration: 1200, fill: "forwards" })

      const imagesElements = trackRef.current.getElementsByClassName("image")
      for (let i = 0; i < imagesElements.length; i++) {
        const image = imagesElements[i] as HTMLElement
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" })
      }
    }

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (mouseDownAt === "0" || !trackRef.current) return
      const mouseDelta = parseFloat(mouseDownAt) - e.touches[0].clientX
      const maxDelta = window.innerWidth / 2

      const percentage = (mouseDelta / maxDelta) * -100
      const nextPercentageUnconstrained = prevPercentage + percentage
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)

      setPercentage(nextPercentage)

      trackRef.current.animate({
        transform: `translate(${nextPercentage*3}%, -50%)`
      }, { duration: 1200, fill: "forwards" })

      const imagesElements = trackRef.current.getElementsByClassName("image")
      for (let i = 0; i < imagesElements.length; i++) {
        const image = imagesElements[i] as HTMLElement
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" })
      }
    }

    window.addEventListener('mousedown', handleGlobalMouseDown)
    // window.addEventListener('touchstart', handleGlobalTouchStart, { passive: false })
    window.addEventListener('mouseup', handleGlobalMouseUp)
    // window.addEventListener('touchend', handleGlobalTouchEnd)
    window.addEventListener('mousemove', handleGlobalMouseMove)
    // window.addEventListener('touchmove', handleGlobalTouchMove, { passive: false })

    return () => {
      window.removeEventListener('mousedown', handleGlobalMouseDown)
    //   window.removeEventListener('touchstart', handleGlobalTouchStart)
      window.removeEventListener('mouseup', handleGlobalMouseUp)
    //   window.removeEventListener('touchend', handleGlobalTouchEnd)
      window.removeEventListener('mousemove', handleGlobalMouseMove)
    //   window.removeEventListener('touchmove', handleGlobalTouchMove)
    }
  }, [mouseDownAt, prevPercentage, percentage])

  return (
    <section className="h-screen bg-background-black relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-16"
        >
        </motion.div>
      </div>
      
      <div
        ref={trackRef}
        id="image-track"
        className="flex gap-4vmin absolute left-1/2 top-1/2 transform translate-y-[-50%] select-none"
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="image w-40vmin h-56vmin object-cover object-center rounded-lg shadow-lg"
            src={image}
            alt={`Gallery image ${index + 1}`}
            draggable="false"
            style={{
              objectPosition: '100% center',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
          />
        ))}
      </div>
    </section>
  )
}  