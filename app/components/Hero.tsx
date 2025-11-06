"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mic, Sparkles } from "lucide-react"

export default function Hero() {
  const { t } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24 lg:flex lg:items-center lg:gap-x-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("hero.tagline")}
          </motion.span>
          <motion.h1
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">{t("hero.title")}</span>
            <span className="block font-normal text-muted-foreground text-lg sm:text-xl md:text-2xl mt-4">
              {t("hero.subtitle")}
            </span>
          </motion.h1>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild className="rounded-full px-8 py-6 text-base font-medium">
              <Link href="/features#ai">
                {t("hero.cta.voice")}
              </Link>
            </Button>
            <Link
              href="/download"
              className="text-sm font-semibold leading-6 text-muted-foreground interactive-element"
              title={t("hero.cta.waitlist")}
              aria-label={t("hero.cta.waitlist")}
            >
              {t("hero.cta.waitlist")} <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
          <motion.div
            className="mt-14 grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="rounded-3xl border border-border/80 bg-card/40 p-6">
              <Mic className="h-8 w-8 text-foreground" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{t("hero.voiceTitle")}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t("hero.voiceDescription")}</p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-card/40 p-6">
              <Sparkles className="h-8 w-8 text-foreground" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{t("hero.aiTitle")}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t("hero.aiDescription")}</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            {isClient ? (
              <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] mx-auto rounded-[2.5rem] border border-border/60 bg-card shadow-xl overflow-hidden">
                <Image
                  src="/images/video-poster.png"
                  alt="MyTaskly App: interfaccia utente minimalista con gestione attività intelligente"
                  width={500}
                  height={800}
                  priority={true}
                  loading="eager"
                  className="w-full h-auto object-cover"
                />
                <button
                  onClick={() => {
                    const videoElement = document.createElement('video')
                    videoElement.src = "/video/presentation.mp4"
                    videoElement.controls = true
                    videoElement.autoplay = true
                    videoElement.playsInline = true
                    videoElement.className = "w-full h-full object-cover"
                    const container = document.querySelector('.video-container')
                    if (container) {
                      container.innerHTML = ''
                      container.appendChild(videoElement)
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 video-container"
                  aria-label="Riproduci video di presentazione MyTaskly"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1" aria-hidden="true">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] mx-auto rounded-[2.5rem] border border-border/60 bg-muted aspect-[9/16]" aria-hidden="true"></div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
