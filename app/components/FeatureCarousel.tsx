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
      title: t("feature.voiceChat.title"),
      description: t("feature.voiceChat.description"),
      icon: "🎙️",
    },
    {
      title: t("feature.contextualAI.title"),
      description: t("feature.contextualAI.description"),
      icon: "🧠",
    },
    {
      title: t("feature.instantNotes.title"),
      description: t("feature.instantNotes.description"),
      icon: "📝",
    },
    {
      title: t("feature.timeline.title"),
      description: t("feature.timeline.description"),
      icon: "🗓️",
    },
    {
      title: t("feature.privacy.title"),
      description: t("feature.privacy.description"),
      icon: "🛡️",
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
    <div className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-foreground">
            {t("features.whyChoose")}
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("features.whyChooseDescription")}
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <motion.div ref={carousel} className="cursor-grab overflow-hidden mt-10">
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
                  className="min-w-[260px] sm:min-w-[320px] h-[320px] sm:h-[360px] p-6 sm:p-8 m-2 sm:m-4 bg-card text-card-foreground rounded-[2rem] border border-border/60 flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-foreground/40"
                >
                  <div>
                    <div className="text-3xl sm:text-4xl mb-6 text-foreground transition-all duration-300">{feature.icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="mt-4">
                    {/* <a href="#" className="text-primary hover:underline text-sm sm:text-base interactive-element">
                      {t("features.learnMore")} →
                    </a> */}
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
