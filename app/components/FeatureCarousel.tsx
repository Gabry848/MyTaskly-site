"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"

export default function FeatureCarousel() {
  const { t } = useLanguage()
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  const features = [
    {
      title: t("feature.smartLists.title"),
      description: t("feature.smartLists.description"),
      icon: "🧠",
    },
    {
      title: t("feature.reminders.title"),
      description: t("feature.reminders.description"),
      icon: "🔔",
    },
    {
      title: t("feature.sync.title"),
      description: t("feature.sync.description"),
      icon: "🔄",
    },
    {
      title: t("feature.darkMode.title"),
      description: t("feature.darkMode.description"),
      icon: "🌙",
    },
    {
      title: t("feature.priority.title"),
      description: t("feature.priority.description"),
      icon: "⭐",
    },
  ]

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-12 sm:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            {t("features.whyChoose")}
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <motion.div ref={carousel} className="cursor-grab overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              animate={controls}
              style={{ x }}
              onDragEnd={handleDragEnd}
              className="flex"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="min-w-[250px] sm:min-w-[300px] h-[350px] sm:h-[400px] p-6 sm:p-8 m-2 sm:m-4 bg-card text-card-foreground rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
                >
                  <div>
                    <div className="text-3xl sm:text-4xl mb-4 feature-icon">{feature.icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="text-primary hover:underline text-sm sm:text-base interactive-element">
                      {t("features.learnMore")} →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}
