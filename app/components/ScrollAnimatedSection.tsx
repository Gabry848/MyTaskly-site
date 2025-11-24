"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation"

interface ScrollAnimatedSectionProps {
  children: ReactNode
  delay?: number
}

export function ScrollAnimatedSection({ children, delay = 0 }: ScrollAnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation(0.15)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
