"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const { t } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-background to-muted">
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
            <Link 
              href="/download" 
              className="apple-button btn-primary-custom cta-highlight"
              title="Scarica MyTaskly"
              aria-label="Scarica l'app MyTaskly"
            >
              {t("hero.cta.download")}
            </Link>
            <a 
              href="/features" 
              className="text-sm font-semibold leading-6 text-foreground interactive-element"
              title="Scopri le funzionalità"
              aria-label="Scopri tutte le funzionalità di MyTaskly"
            >
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
            {isClient ? (
              <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto rounded-2xl shadow-xl ring-1 ring-gray-900/10 overflow-hidden">
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
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 video-container"
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
              <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto rounded-2xl shadow-xl ring-1 ring-gray-900/10 overflow-hidden bg-muted aspect-[9/16]" aria-hidden="true"></div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
