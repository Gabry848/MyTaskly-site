"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
          <div className="space-y-6">
            <motion.span
              className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t("hero.pretitle")}
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gradient">{t("hero.title")}</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl leading-8 text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              className="pt-2 flex flex-col sm:flex-row sm:items-center sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium"
              >
                <Link href="/download" title={t("hero.cta.download")}>{t("hero.cta.download")}</Link>
              </Button>
              <Link
                href="/features"
                className="mt-4 sm:mt-0 inline-flex items-center justify-center text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground"
                title={t("hero.cta.features")}
                aria-label={t("hero.cta.features")}
              >
                {t("hero.cta.features")}
              </Link>
            </motion.div>
            <motion.div
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {["voice", "memory", "focus"].map((highlight) => (
                <div key={highlight} className="border border-border bg-card px-5 py-6 rounded-3xl flex flex-col gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    {t(`hero.highlight.${highlight}.title`)}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`hero.highlight.${highlight}.description`)}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="lg:col-start-2 lg:row-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative mx-auto max-w-sm rounded-[32px] border border-border bg-card/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
              <div className="space-y-6">
                <div className="rounded-3xl border border-border bg-background px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("hero.preview.assistant")}</p>
                  <p className="mt-3 text-sm font-medium text-foreground">
                    {t("hero.preview.greeting")}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl border border-border px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("hero.preview.user")}</p>
                    <p className="mt-2 text-sm text-foreground">{t("hero.preview.userMessage")}</p>
                  </div>
                  <div className="rounded-3xl border border-border bg-foreground px-4 py-3 text-primary-foreground">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">{t("hero.preview.ai")}</p>
                    <p className="mt-2 text-sm text-primary-foreground/90">{t("hero.preview.aiMessage")}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-full border border-border bg-background px-5 py-3">
                  <span className="text-sm text-muted-foreground">{t("hero.preview.placeholder")}</span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 3v10" />
                      <path d="M8 7v6a4 4 0 0 0 8 0V7" />
                      <path d="M5 11v2a7 7 0 0 0 14 0v-2" />
                      <path d="M12 19v2" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
