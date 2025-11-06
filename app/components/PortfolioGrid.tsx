"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"

export default function PortfolioGrid() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      slug: 'taskManagement',
      title: t("portfolio.taskManagement.title"),
      description: t("portfolio.taskManagement.description"),
      imageUrl: "/images/ai-power.png",
      category: t("category.coreFeatures"),
    },
    {
      id: 2,
      slug: 'smartLists',
      title: t("portfolio.smartLists.title"),
      description: t("portfolio.smartLists.description"),
      imageUrl: "/images/smart-lists.png",
      category: t("category.organization"),
    },
    {
      id: 3,
      slug: 'calendar',
      title: t("portfolio.calendar.title"),
      description: t("portfolio.calendar.description"),
      imageUrl: "/images/integration.png",
      category: t("category.integration"),
    },
    {
      id: 4,
      slug: 'themes',
      title: t("portfolio.themes.title"),
      description: t("portfolio.themes.description"),
      imageUrl: "/images/personalization.png",
      category: t("category.personalization"),
    },
    {
      id: 5,
      slug: 'progress',
      title: t("portfolio.progress.title"),
      description: t("portfolio.progress.description"),
      imageUrl: "/images/analytics.png",
      category: t("category.analytics"),
    },
    {
      id: 6,
      slug: 'collaboration',
      title: t("portfolio.collaboration.title"),
      description: t("portfolio.collaboration.description"),
      imageUrl: "/images/collaboration.png",
      category: t("category.collaboration"),
    },
  ]

  const allCategory = t("category.all")
  const categories = [allCategory, ...new Set(projects.map((project) => project.category))]
  const [filter, setFilter] = useState(allCategory)

  const filteredProjects = filter === allCategory ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold sm:text-4xl">{t("features.appFeatures")}</h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">{t("features.appFeaturesSubtitle")}</p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
                  filter === category
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-foreground/80 border-border hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ScrollAnimationWrapper key={project.id} delay={0.1 * index} threshold={0.2}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-[2.25rem] border border-border/60 overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-foreground/30"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <Link
                      href={`/features/${project.slug}`}
                      className="mt-6 inline-flex items-center text-sm font-semibold text-foreground underline-offset-4 hover:underline"
                    >
                      {t("common.learnMore")}
                    </Link>
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
