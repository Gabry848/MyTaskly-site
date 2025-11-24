"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation"

interface ScrollAnimatedCardProps {
  children: ReactNode
  delay?: number
}

export function ScrollAnimatedCard({ children, delay = 0 }: ScrollAnimatedCardProps) {
  const { ref, isInView } = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
