"use client"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"
import { motion } from "framer-motion"

export default function OrganizeYourLife() {
  const { t } = useLanguage()

  const points = [
    t("organize.points.voice"),
    t("organize.points.calendar"),
    t("organize.points.sync"),
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.12),transparent_40%)]" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollAnimationWrapper>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start rounded-[32px] border border-border bg-card/70 backdrop-blur shadow-[0_24px_60px_rgba(0,0,0,0.08)] p-10 sm:p-12">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                {t("organize.pretitle")}
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground">
                {t("organize.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-8">
                {t("organize.description")}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="rounded-3xl border border-border bg-background/70 px-6 py-6 text-sm leading-relaxed text-muted-foreground"
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  >
                    <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {index + 1}
                    </div>
                    {point}
                  </motion.div>
                ))}
              </div>

              <div>
                <Link href="/download" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-foreground hover:text-primary transition-colors">
                  {t("organize.cta")}
                  <motion.span
                    className="h-px w-12 bg-gradient-to-r from-primary/70 via-primary to-transparent"
                    animate={{ scaleX: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Link>
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="absolute inset-[-14%] rounded-[28px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-3xl"
                animate={{ rotate: [0, 1.5, -1.5, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative rounded-[28px] border border-border bg-background/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span>{t("organize.pretitle")}</span>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                    <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-2xl border border-border/60 bg-card/70 px-5 py-4 shadow-sm"
                    >
                      <div className="text-sm font-semibold text-foreground">#{index + 1}</div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
