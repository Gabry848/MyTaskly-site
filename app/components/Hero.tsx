"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const { t } = useLanguage()
  const phoneFeatures = ["Cattura vocale", "Pianificazione contestuale", "Routine automatizzate", "Privacy integrata"]

  return (
    <section className="relative isolate overflow-hidden bg-background">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          animate={{ y: [-20, 10, -20], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[-120px] top-10 h-80 w-80 rounded-full bg-foreground/10 blur-[90px]"
          animate={{ y: [10, -10, 10], scale: [1.05, 0.95, 1.05] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_45%)]" />
      </motion.div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8 relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
          <div className="space-y-7 relative z-10">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
              {t("hero.pretitle")}
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gradient">{t("hero.title")}</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl leading-8 text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              className="pt-2 flex flex-col sm:flex-row sm:items-center sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium shadow-[0_15px_45px_rgba(99,102,241,0.35)] transition-transform hover:-translate-y-0.5"
              >
                <Link href="/download" title={t("hero.cta.download")}>{t("hero.cta.download")}</Link>
              </Button>
              <Link
                href="/early-access"
                className="mt-4 sm:mt-0 inline-flex items-center justify-center text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
                title={t("hero.cta.features")}
                aria-label={t("hero.cta.features")}
              >
                {t("hero.cta.features")}
              </Link>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              {["voice", "memory", "focus"].map((highlight) => (
                <motion.div
                  key={highlight}
                  whileHover={{ y: -6 }}
                  className="border border-border bg-card/70 px-5 py-6 rounded-3xl flex flex-col gap-2 shadow-[0_12px_30px_rgba(0,0,0,0.06)] backdrop-blur"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    {t(`hero.highlight.${highlight}.title`)}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`hero.highlight.${highlight}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative lg:col-start-2 lg:row-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <motion.div
              className="absolute inset-[-16%] rounded-[36px] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative mx-auto max-w-sm rounded-[32px] border border-border bg-card/80 p-8 shadow-[0_28px_70px_rgba(0,0,0,0.12)] backdrop-blur">
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
                  <div className="rounded-3xl border border-border bg-foreground px-4 py-3 text-primary-foreground shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">{t("hero.preview.ai")}</p>
                    <p className="mt-2 text-sm text-primary-foreground/90">{t("hero.preview.aiMessage")}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-full border border-border bg-background px-5 py-3">
                  <span className="text-sm text-muted-foreground">{t("hero.preview.placeholder")}</span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-primary-foreground shadow-lg">
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

              <div className="mt-6 grid grid-cols-2 gap-4">
                {phoneFeatures.map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.05, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
