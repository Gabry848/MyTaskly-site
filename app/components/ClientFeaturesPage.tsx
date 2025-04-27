"use client"
import { Check, Calendar, Bell, Smartphone, Sparkles, ListChecks } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"

export default function ClientFeaturesPage() {
  const { t } = useLanguage()

  return (
    <article className="bg-background">
      {/* Hero Section */}
      <header className="relative isolate px-4 sm:px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-16 md:py-24">
          <ScrollAnimationWrapper>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                <span className="text-gradient">{t("featuresPage.hero.title")}</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                {t("featuresPage.hero.subtitle")}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </header>

      {/* Features Sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 space-y-16 sm:space-y-24 md:space-y-32">
        {/* Feature 1: Task Management */}
        <section aria-labelledby="task-management-title">
          <ScrollAnimationWrapper>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <ListChecks className="h-6 w-6 text-primary" />
                  <h2 id="task-management-title" className="text-xl sm:text-2xl font-bold text-foreground">
                    {t("featuresPage.taskManagement.title")}
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">{t("featuresPage.taskManagement.description")}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.taskManagement.feature1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.taskManagement.feature2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.taskManagement.feature3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.taskManagement.feature4")}</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                  <Image 
                    src="/images/taskly-app.png" 
                    alt="Interfaccia di gestione delle attività di MyTaskly con visualizzazione delle liste e categorizzazione" 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </section>

        {/* Feature 2: Smart Lists */}
        <section aria-labelledby="smart-lists-title">
          <ScrollAnimationWrapper direction="right">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                  <Image 
                    src="/images/smart-lists.png" 
                    alt="Liste intelligenti di MyTaskly con organizzazione automatica delle attività" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h2 id="smart-lists-title" className="text-xl sm:text-2xl font-bold text-foreground">{t("featuresPage.smartLists.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{t("featuresPage.smartLists.description")}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.smartLists.feature1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.smartLists.feature2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.smartLists.feature3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.smartLists.feature4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </section>

        {/* Feature 3: Reminders */}
        <section aria-labelledby="reminders-title">
          <ScrollAnimationWrapper>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                  <h2 id="reminders-title" className="text-xl sm:text-2xl font-bold text-foreground">{t("featuresPage.reminders.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{t("featuresPage.reminders.description")}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.reminders.feature1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.reminders.feature2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.reminders.feature3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.reminders.feature4")}</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                  <Image
                    src="/images/smart-reminders.png"
                    alt="Sistema di promemoria intelligenti di MyTaskly con notifiche contestuali"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </section>

        {/* Feature 4: Cross-platform Sync */}
        <section aria-labelledby="sync-title">
          <ScrollAnimationWrapper direction="right">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                  <Image 
                    src="/images/crossplatform.png" 
                    alt="Sincronizzazione multi-dispositivo di MyTaskly tra smartphone, tablet e computer" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                  <h2 id="sync-title" className="text-xl sm:text-2xl font-bold text-foreground">{t("featuresPage.sync.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{t("featuresPage.sync.description")}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.sync.feature1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.sync.feature2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.sync.feature3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{t("featuresPage.sync.feature4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </section>
      </div>

      {/* Calendar Integration Feature - Special Highlight */}
      <section aria-labelledby="calendar-title" className="bg-gradient-to-b from-background to-primary/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10 sm:mb-16">
              <h2 id="calendar-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("featuresPage.calendar.title")}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("featuresPage.calendar.subtitle")}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ScrollAnimationWrapper delay={0.1}>
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                <Calendar className="h-10 w-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground mb-2">{t("featuresPage.calendar.feature1.title")}</h3>
                <p className="text-muted-foreground">{t("featuresPage.calendar.feature1.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                <Calendar className="h-10 w-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground mb-2">{t("featuresPage.calendar.feature2.title")}</h3>
                <p className="text-muted-foreground">{t("featuresPage.calendar.feature2.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.3}>
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                <Calendar className="h-10 w-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground mb-2">{t("featuresPage.calendar.feature3.title")}</h3>
                <p className="text-muted-foreground">{t("featuresPage.calendar.feature3.description")}</p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-labelledby="cta-title" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="cta-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("featuresPage.cta.title")}
              </h2>
              <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                {t("featuresPage.cta.subtitle")}
              </p>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-x-6">
                <Link href="/download" passHref>
                  <Button 
                    className="rounded-full" 
                    size="lg" 
                  >
                    {t("featuresPage.cta.download")}
                  </Button>
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-sm font-semibold leading-6 text-foreground"
                  aria-label="Visualizza i prezzi di MyTaskly"
                >
                  {t("featuresPage.cta.pricing")} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Disclaimer Section */}
      <footer className="bg-background border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs sm:text-sm text-muted-foreground/70 italic">
                {t("featuresPage.disclaimer")}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </footer>
    </article>
  )
}