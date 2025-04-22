"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-4 sm:mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">{t("hero.title")}</span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div
            className="mt-6 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/download" className="apple-button btn-primary-custom cta-highlight">
              {t("hero.cta.download")}
            </Link>
            <a href="/features" className="text-sm font-semibold leading-6 text-foreground interactive-element">
              {t("hero.cta.features")} <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-10 sm:mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <video
            controls
              loop
              // muted
              playsInline
              preload="auto"
              poster="/images/video-poster.png"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto rounded-2xl shadow-xl ring-1 ring-gray-900/10 object-cover"
            >
              <source src="/video/presentation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
