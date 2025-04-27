"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarClock, Gift } from "lucide-react"

export default function LaunchBanner() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Evita l'hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Rendering ottimizzato per il caricamento iniziale
  return (
    <div className="bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {mounted ? (
          <motion.div
            className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                <CalendarClock className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {t("common.comingSoon")} - {t("launch.notLaunched")}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {t("launch.joinWaitlist")}{" "}
                  <span className="font-semibold text-primary">{t("launch.sixMonthsFree")}</span>{" "}
                  {t("launch.atOfficialLaunch")}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                  <Gift className="h-4 w-4 text-accent" />
                  <span>{t("launch.earlyAccess")}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link href="/download" prefetch={true}>
                  <Button className="rounded-full px-6" size="lg">
                    {t("launch.joinWaitlistButton")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          // Placeholder statico durante il primo rendering
          <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-primary/2 p-4 sm:p-6 md:p-8 shadow-sm h-32 md:h-24"></div>
        )}
      </div>
    </div>
  )
}
