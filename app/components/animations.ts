export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
}

export const iconHover = {
  scale: 1.2,
  rotate: 5,
  transition: { duration: 0.2 }
} 