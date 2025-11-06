"use client"

import { motion } from "framer-motion"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"

export default function Marquee() {
  const { t } = useLanguage()
  const words = [t("marquee.voice"), t("marquee.ai"), t("marquee.minimal"), t("marquee.focus")]

  return (
    <ScrollAnimationWrapper threshold={0.1}>
      <div className="relative w-full overflow-hidden bg-background py-16 border-y border-border">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 24 }}
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center gap-12 pr-12">
              {words.map((word, wordIndex) => (
                <span
                  key={`${index}-${wordIndex}`}
                  className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-foreground/10"
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </ScrollAnimationWrapper>
  )
}
