"use client"
import { Check, Calendar, Bell, Smartphone, Sparkles, ListChecks, CheckCircle2, Mic, Shield, Lock, StickyNote, MessageSquare, Globe, GraduationCap, Database, Clock, AlertCircle } from "lucide-react"
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

      {/* ✅ FEATURES IMPLEMENTATE */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="text-green-500 font-semibold">Funzionalità Già Disponibili</span>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {/* Voice & Audio */}
          <section aria-labelledby="voice-title">
            <ScrollAnimationWrapper>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Mic className="h-6 w-6 text-primary" />
                    <h2 id="voice-title" className="text-xl sm:text-2xl font-bold text-foreground">
                      {t("featuresPage.voice.title")}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{t("featuresPage.voice.description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.voice.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.voice.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.voice.feature3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.voice.feature4")}</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                    <Image 
                      src="/images/taskly-app.png" 
                      alt="Voice & Audio Interface" 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </section>

          {/* Notifiche & Promemoria */}
          <section aria-labelledby="notifications-title">
            <ScrollAnimationWrapper direction="right">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                    <Image 
                      src="/images/smart-reminders.png" 
                      alt="Notifications System" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <Bell className="h-6 w-6 text-primary" />
                    <h2 id="notifications-title" className="text-xl sm:text-2xl font-bold text-foreground">{t("featuresPage.notifications.title")}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{t("featuresPage.notifications.description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.notifications.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.notifications.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.notifications.feature3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.notifications.feature4")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </section>

          {/* Calendari */}
          <section aria-labelledby="calendars-title">
            <ScrollAnimationWrapper>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h2 id="calendars-title" className="text-xl sm:text-2xl font-bold text-foreground">{t("featuresPage.calendars.title")}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{t("featuresPage.calendars.description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.calendars.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.calendars.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.calendars.feature3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.calendars.feature4")}</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                    <Image 
                      src="/images/crossplatform.png" 
                      alt="Calendar Integration" 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </section>

          {/* Task Management */}
          <section aria-labelledby="task-management-title">
            <ScrollAnimationWrapper direction="right">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                    <Image 
                      src="/images/taskly-app.png" 
                      alt="Task Management" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <ListChecks className="h-6 w-6 text-primary" />
                    <h2 id="task-management-title" className="text-xl sm:text-2xl font-bold text-foreground">{t("featuresPage.taskManagement.title")}</h2>
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
              </div>
            </ScrollAnimationWrapper>
          </section>

          {/* Sincronizzazione Multi-dispositivo */}
          <section aria-labelledby="sync-title">
            <ScrollAnimationWrapper>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <h2 id="sync-title" className="text-xl sm:text-2xl font-bold text-foreground">{t("featuresPage.multiDeviceSync.title")}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{t("featuresPage.multiDeviceSync.description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.multiDeviceSync.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.multiDeviceSync.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.multiDeviceSync.feature3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.multiDeviceSync.feature4")}</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                    <Image 
                      src="/images/crossplatform.png" 
                      alt="Multi-device Sync" 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </section>

          {/* Sicurezza */}
          <section aria-labelledby="security-title">
            <ScrollAnimationWrapper direction="right">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                    <Image 
                      src="/images/smart-lists.png" 
                      alt="Security Features" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 id="security-title" className="text-xl sm:text-2xl font-bold text-foreground">{t("featuresPage.security.title")}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{t("featuresPage.security.description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.security.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.security.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.security.feature3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.security.feature4")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </section>

          {/* Altre Funzionalità */}
          <section aria-labelledby="other-title">
            <ScrollAnimationWrapper>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <h2 id="other-title" className="text-xl sm:text-2xl font-bold text-foreground">{t("featuresPage.other.title")}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{t("featuresPage.other.description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.other.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.other.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.other.feature3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{t("featuresPage.other.feature4")}</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                    <Image 
                      src="/images/taskly-app.png" 
                      alt="Other Features" 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </section>
        </div>
      </div>

      {/* ❌ ROADMAP - FEATURES FUTURE */}
      <section aria-labelledby="roadmap-title" className="bg-gradient-to-b from-background to-primary/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
                <Clock className="h-5 w-5 text-amber-500" />
                <span className="text-amber-500 font-semibold">{t("featuresPage.roadmap.comingSoon")}</span>
              </div>
              <h2 id="roadmap-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("featuresPage.roadmap.title")}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("featuresPage.roadmap.subtitle")}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Speech-to-Text */}
            <ScrollAnimationWrapper delay={0.1}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Mic className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.speechToText.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.speechToText.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            {/* Voice Commands */}
            <ScrollAnimationWrapper delay={0.15}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Mic className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.voiceCommands.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.voiceCommands.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            {/* Location Reminders */}
            <ScrollAnimationWrapper delay={0.2}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Bell className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.locationReminders.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.locationReminders.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            {/* Recurring Tasks */}
            <ScrollAnimationWrapper delay={0.25}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.recurringTasks.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.recurringTasks.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            {/* Subtasks */}
            <ScrollAnimationWrapper delay={0.3}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <ListChecks className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.subtasks.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.subtasks.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            {/* AI Categorization */}
            <ScrollAnimationWrapper delay={0.35}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.aiCategorization.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.aiCategorization.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            {/* Smart Lists */}
            <ScrollAnimationWrapper delay={0.4}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <ListChecks className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.smartLists.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.smartLists.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            {/* Analytics */}
            <ScrollAnimationWrapper delay={0.45}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.analytics.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.analytics.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            {/* Two-Factor Auth */}
            <ScrollAnimationWrapper delay={0.5}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.twoFactor.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.twoFactor.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            {/* Automation */}
            <ScrollAnimationWrapper delay={0.55}>
              <div className="bg-card/50 rounded-2xl p-6 shadow-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">Prossimamente</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("featuresPage.roadmap.automation.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("featuresPage.roadmap.automation.description")}</p>
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