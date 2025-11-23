"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Brain, Clock3, LucideIcon, Mic, Shield, Zap } from "lucide-react"

export default function FeatureCarousel() {
  const { t } = useLanguage()
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  const features: { title: string; description: string; icon: LucideIcon }[] = [
    {
      title: t("feature.voice.title"),
      description: t("feature.voice.description"),
      icon: Mic,
    },
    {
      title: t("feature.context.title"),
      description: t("feature.context.description"),
      icon: Brain,
    },
    {
      title: t("feature.automation.title"),
      description: t("feature.automation.description"),
      icon: Zap,
    },
    {
      title: t("feature.memory.title"),
      description: t("feature.memory.description"),
      icon: Clock3,
    },
    {
      title: t("feature.privacy.title"),
      description: t("feature.privacy.description"),
      icon: Shield,
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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      <motion.div
        className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.16),transparent_55%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimationWrapper>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
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
          <motion.div
            ref={carousel}
            className="mt-12 cursor-grab overflow-hidden rounded-[40px] border border-border bg-card/70 backdrop-blur shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
          >
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
                  className="group min-w-[260px] sm:min-w-[320px] md:min-w-[340px] border-r border-border/70 last:border-r-0 px-8 py-12 flex flex-col justify-between bg-gradient-to-b from-background/60 via-card/80 to-card/50"
                  whileHover={{ scale: 1.02, rotate: -0.25 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner shadow-primary/20">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="pt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
                    {t("features.carouselHint")}
                    <motion.span
                      className="h-px w-12 bg-gradient-to-r from-primary/50 via-primary to-primary/30"
                      animate={{ scaleX: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                    />
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
