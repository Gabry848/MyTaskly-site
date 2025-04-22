"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation"
import type { CSSProperties } from "react"

interface ScrollAnimationWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
  style?: CSSProperties
}

export default function ScrollAnimationWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
  style,
}: ScrollAnimationWrapperProps) {
  const { ref, isInView } = useScrollAnimation(threshold)

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: 0.95, // Aggiunto effetto scala
    },
    visible: { opacity: 1, y: 0, x: 0, scale: 1 }, // Aggiunto effetto scala
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: "easeOut" }} // Modificata durata e easing
      className={className}
      style={{ ...style, transition: "background-color 0.3s ease, color 0.3s ease, ...style?.transition" }}
    >
      {children}
    </motion.div>
  )
}
