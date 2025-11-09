"use client"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"

export default function OrganizeYourLife() {
  const { t } = useLanguage()

  const points = [
    t("organize.points.voice"),
    t("organize.points.context"),
    t("organize.points.calendar"),
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
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
                <div key={index} className="rounded-3xl border border-border bg-card px-6 py-6 text-sm leading-relaxed text-muted-foreground">
                  {point}
                </div>
              ))}
            </div>
            <div>
              <Link href="/download" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-foreground hover:text-foreground/80">
                {t("organize.cta")}
              </Link>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
