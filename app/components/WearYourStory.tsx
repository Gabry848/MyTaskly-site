"use client"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"

export default function OrganizeYourLife() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              {t("organize.title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("organize.description")}
            </p>
            <ul className="mt-12 grid gap-6 text-left sm:grid-cols-3">
              {["organize.point1", "organize.point2", "organize.point3"].map((point) => (
                <li key={point} className="rounded-3xl border border-border/60 bg-secondary/40 p-6 text-sm leading-relaxed text-foreground">
                  {t(point)}
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Link href="/download" className="apple-button inline-flex items-center">
                {t("organize.cta")}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
