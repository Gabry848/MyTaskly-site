"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"
import { useParams, useRouter } from 'next/navigation'

export default function FeatureArticlePage() {
  const { t } = useLanguage()
  const { slug } = useParams() as { slug: string }
  const title = t(`portfolio.${slug}.title`)
  const subtitle = t(`portfolio.${slug}.description`)

  const author = t("features.blog.author")
  const date = "19 aprile 2025" // Mantenuto fisso per il momento
  const readingTime = t("features.blog.readTime")

  // Cover images per slug
  const coverImages: Record<string, { url: string; alt: string }> = {
    taskManagement: { url: "/images/taskly-app.png", alt: "Interfaccia Task Management" },
    smartLists: { url: "/images/smart-lists.png", alt: "Smart Lists in azione" },
    calendar: { url: "/images/crossplatform.png", alt: "Integrazione Calendario" },
    themes: { url: "/images/taskly-app.png", alt: "Personalizzazione Temi" },
    progress: { url: "/images/taskly-app.png", alt: "Monitoraggio Progressi" },
    collaboration: { url: "/images/taskly-app.png", alt: "Collaborazione" },
  }
  const cover = coverImages[slug] || { url: "/placeholder.jpg", alt: title }

  // Crea dinamicamente le sezioni basate sulle traduzioni
  const sections = []
  // Esploro le possibili sezioni (1, 2, 3...) per questo slug
  for (let i = 1; i <= 5; i++) {
    // Controllo se esiste una traduzione per questa sezione
    const titleKey = `features.blog.${slug}.section${i}.title`
    const titleText = t(titleKey)
    
    // Se la chiave non esiste, il valore sarà uguale alla chiave stessa
    if (titleText !== titleKey) {
      const section: { id: string; title: string; paragraphs: string[] } = {
        id: `section-${i}`,
        title: titleText,
        paragraphs: []
      }
      
      // Aggiungo paragrafi (p1, p2, p3...) se esistono
      for (let j = 1; j <= 5; j++) {
        const paraKey = `features.blog.${slug}.section${i}.p${j}`
        const paraText = t(paraKey)
        if (paraText !== paraKey) {
          section.paragraphs.push(paraText)
        }
      }
      
      sections.push(section)
    }
  }

  const toc = sections.map(sec => ({ id: sec.id, title: sec.title }))

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="hero text-center mb-8">
          <h1 className="text-4xl font-bold">{title}</h1>
          <h2 className="text-xl text-gray-600 mt-2">{subtitle}</h2>
          <p className="text-sm text-gray-500 mt-1">
            di {author} • {date} • {readingTime}
          </p>
          <img
            src={cover.url}
            alt={cover.alt}
            className="mt-4 w-full h-48 object-cover rounded"
          />
        </section>

        {/* Layout a due colonne */}
        <div className="article-layout flex flex-col lg:flex-row gap-8">
          {/* TOC */}
          <aside className="toc lg:w-1/4 bg-card p-4 rounded-md border border-border lg:order-2 shadow-sm">
            <strong className="block mb-2 text-foreground">{t("features.blog.tocTitle")}</strong>
            <ul className="list-decimal list-inside space-y-1">
              {toc.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-primary hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Article Content */}
          <article className="content lg:w-3/4 lg:order-1">
            {sections.map(sec => (
              <section key={sec.id} id={sec.id} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">{sec.title}</h3>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="mb-4 text-gray-700 leading-relaxed">{p}</p>
                ))}
              </section>
            ))}
            {/* Comments widget placeholder */}
            <div id="comments-widget" className="mt-12">
              {/* COMMENTS_WIDGET placeholder */}
            </div>
          </article>
        </div>
      </main>
    </>
  )
}