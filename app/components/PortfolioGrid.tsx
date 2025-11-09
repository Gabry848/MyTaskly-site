"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"

export default function PortfolioGrid() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      slug: "voice-console",
      title: t("portfolio.voice.title"),
      description: t("portfolio.voice.description"),
      icon: "🎙",
      category: t("category.voice"),
    },
    {
      id: 2,
      slug: "ai-routines",
      title: t("portfolio.routines.title"),
      description: t("portfolio.routines.description"),
      icon: "⚡",
      category: t("category.automation"),
    },
    {
      id: 3,
      slug: "context-hub",
      title: t("portfolio.context.title"),
      description: t("portfolio.context.description"),
      icon: "🧠",
      category: t("category.intelligence"),
    },
    {
      id: 4,
      slug: "shared-notes",
      title: t("portfolio.notes.title"),
      description: t("portfolio.notes.description"),
      icon: "🗂",
      category: t("category.collaboration"),
    },
    {
      id: 5,
      slug: "calendar-sync",
      title: t("portfolio.calendar.title"),
      description: t("portfolio.calendar.description"),
      icon: "🗓",
      category: t("category.automation"),
    },
    {
      id: 6,
      slug: "focus-metrics",
      title: t("portfolio.metrics.title"),
      description: t("portfolio.metrics.description"),
      icon: "📈",
      category: t("category.intelligence"),
    },
  ]

  const allCategory = t("category.all")
  const categories = [allCategory, ...new Set(projects.map((project) => project.category))]
  const [filter, setFilter] = useState(allCategory)

  const filteredProjects = filter === allCategory ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              {t("features.collectionsPretitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">{t("features.appFeatures")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("features.appFeaturesSubtitle")}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.3em] transition-colors ${
                  filter === category
                    ? "bg-foreground text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ScrollAnimationWrapper key={project.id} delay={0.1 * index} threshold={0.2}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-[32px] border border-border bg-card/70 px-8 py-10 shadow-[0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur"
                >
                  <div className="text-5xl">{project.icon}</div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {project.category}
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
