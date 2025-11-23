"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Brain, Clock3, LucideIcon, Mic, NotebookPen, Shield, Sparkles, Zap } from "lucide-react"

type Project = {
  id: number
  slug: string
  title: string
  description: string
  icon: LucideIcon
  category: string
}

export default function PortfolioGrid() {
  const { t } = useLanguage()

  const projects: Project[] = [
    {
      id: 1,
      slug: "voice-console",
      title: t("portfolio.voice.title"),
      description: t("portfolio.voice.description"),
      icon: Mic,
      category: t("category.voice"),
    },
    {
      id: 2,
      slug: "ai-routines",
      title: t("portfolio.routines.title"),
      description: t("portfolio.routines.description"),
      icon: Zap,
      category: t("category.automation"),
    },
    {
      id: 3,
      slug: "context-hub",
      title: t("portfolio.context.title"),
      description: t("portfolio.context.description"),
      icon: Brain,
      category: t("category.intelligence"),
    },
    {
      id: 4,
      slug: "shared-notes",
      title: t("portfolio.notes.title"),
      description: t("portfolio.notes.description"),
      icon: NotebookPen,
      category: t("category.collaboration"),
    },
    {
      id: 5,
      slug: "calendar-sync",
      title: t("portfolio.calendar.title"),
      description: t("portfolio.calendar.description"),
      icon: Clock3,
      category: t("category.automation"),
    },
    {
      id: 6,
      slug: "focus-metrics",
      title: t("portfolio.metrics.title"),
      description: t("portfolio.metrics.description"),
      icon: Shield,
      category: t("category.intelligence"),
    },
  ]

  const allCategory = t("category.all")
  const categories = [allCategory, ...new Set(projects.map((project) => project.category))]
  const [filter, setFilter] = useState(allCategory)

  const filteredProjects = filter === allCategory ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative">
        <ScrollAnimationWrapper>
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
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
                    ? "bg-foreground text-primary-foreground shadow-[0_10px_30px_rgba(15,23,42,0.16)]"
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
              <ScrollAnimationWrapper key={project.id} delay={0.08 * index} threshold={0.2}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ translateY: -6 }}
                  className="group relative overflow-hidden rounded-[32px] border border-border bg-card/70 px-8 py-10 shadow-[0_16px_50px_rgba(0,0,0,0.08)] backdrop-blur"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner shadow-primary/20">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      {project.slug}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    <span>{project.category}</span>
                    <Sparkles className="h-4 w-4 text-primary" />
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
