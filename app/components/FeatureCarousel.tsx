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
      title: t("feature.voice.title"),
      description: t("feature.voice.description"),
      icon: "🎙",
    },
    {
      title: t("feature.context.title"),
      description: t("feature.context.description"),
      icon: "🧠",
    },
    {
      title: t("feature.automation.title"),
      description: t("feature.automation.description"),
      icon: "⚡",
    },
    {
      title: t("feature.memory.title"),
      description: t("feature.memory.description"),
      icon: "🗂",
    },
    {
      title: t("feature.privacy.title"),
      description: t("feature.privacy.description"),
      icon: "🔒",
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
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                {t("features.pretitle")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("features.whyChoose")}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              {t("features.subtitle")}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <motion.div ref={carousel} className="mt-12 cursor-grab overflow-hidden rounded-[40px] border border-border">
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
                  className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] border-r border-border last:border-r-0 bg-card/80 backdrop-blur px-8 py-12 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="pt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {t("features.carouselHint")}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
