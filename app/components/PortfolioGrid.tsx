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
      imageUrl: "/placeholder.svg?height=600&width=800",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t("features.appFeatures")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("features.appFeaturesSubtitle")}</p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
                  className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    >
                      <p className="text-white text-center px-4">{project.description}</p>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <Link href={`/features/${project.slug}`} className="text-primary hover:underline inline-flex items-center">
                      {t("common.learnMore")}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
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
