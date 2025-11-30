"use client"

import Link from "next/link"
import { ArrowUpRight, GitBranch, HeartHandshake, PlugZap, Zap } from "lucide-react"
import { ScrollAnimatedCard } from "@/app/components/ScrollAnimatedCard"
import { ScrollAnimatedSection } from "@/app/components/ScrollAnimatedSection"
import { useLanguage } from "@/app/contexts/LanguageContext"

export default function OpenSourcePage() {
  const { t } = useLanguage()
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:py-20 lg:py-24 relative">
          <div className="inline-flex items-center gap-3 self-start rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-primary shadow-sm">
            <span className="inline-flex items-center gap-2 text-foreground">
              <GitBranch className="h-4 w-4" />
              {t("openSource.hero.badge")}
            </span>
            <span className="h-4 w-px bg-border/60" aria-hidden="true" />
            <span className="text-muted-foreground">{t("openSource.hero.badgeSubtitle")}</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.12em] text-primary">{t("openSource.hero.pretitle")}</p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                {t("openSource.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                {t("openSource.hero.description")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://github.com/Gabry848/MyTaskly-app"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {t("openSource.hero.ctaRepositories")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://github.com/Gabry848/MyTaskly-MCP"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-card/80"
                >
                  {t("openSource.hero.ctaMCP")}
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 shadow-xl backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_25%)]" aria-hidden />
              <div className="relative space-y-4">
                <h2 className="text-2xl font-bold leading-snug">{t("openSource.hero.whyTitle")}</h2>
                <p className="text-muted-foreground">
                  {t("openSource.hero.whyDescription")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">{t("openSource.hero.tag1")}</span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">{t("openSource.hero.tag2")}</span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">{t("openSource.hero.tag3")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:py-20 lg:py-24">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.12em] text-primary">{t("openSource.advantages.pretitle")}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{t("openSource.advantages.title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("openSource.advantages.description")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              titleKey: "openSource.advantages.transparency.title",
              descriptionKey: "openSource.advantages.transparency.description",
            },
            {
              titleKey: "openSource.advantages.community.title",
              descriptionKey: "openSource.advantages.community.description",
            },
            {
              titleKey: "openSource.advantages.customization.title",
              descriptionKey: "openSource.advantages.customization.description",
            },
          ].map((advantage, index) => (
            <ScrollAnimatedCard key={advantage.titleKey} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-6 shadow-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative space-y-3">
                  <h3 className="text-xl font-semibold">{t(advantage.titleKey)}</h3>
                  <p className="text-muted-foreground">{t(advantage.descriptionKey)}</p>
                </div>
              </div>
            </ScrollAnimatedCard>
          ))}
        </div>
      </section>

      <section id="mcp" className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.2fr,0.8fr] lg:py-24 lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <PlugZap className="h-4 w-4" /> {t("openSource.mcp.badge")}
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">{t("openSource.mcp.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("openSource.mcp.description")}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm">
                <p className="text-sm font-semibold text-foreground">{t("openSource.mcp.feature1Title")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("openSource.mcp.feature1Description")}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm">
                <p className="text-sm font-semibold text-foreground">{t("openSource.mcp.feature2Title")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("openSource.mcp.feature2Description")}
                </p>
              </div>
            </div>
            <Link
              href="https://github.com/Gabry848/MyTaskly-mcp"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("openSource.mcp.button")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.14),transparent_25%)]" aria-hidden />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t("openSource.mcp.highlight")}</p>
                  <p className="text-xs text-muted-foreground">{t("openSource.mcp.highlightSubtitle")}</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                  {t("openSource.mcp.benefit1")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                  {t("openSource.mcp.benefit2")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                  {t("openSource.mcp.benefit3")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/5 via-primary/2 to-transparent py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimatedSection>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-8 sm:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" aria-hidden />
              <div className="relative space-y-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold text-primary">
                  <Zap className="h-4 w-4 animate-pulse" />
                  {t("openSource.mcp.comingSoon.badge")}
                </div>
                <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
                  {t("openSource.mcp.comingSoon.title")}
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  {t("openSource.mcp.comingSoon.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <div className="rounded-lg bg-white/5 border border-primary/20 px-4 py-3 text-sm">
                    <p className="font-semibold text-foreground">{t("openSource.mcp.comingSoon.feature1Title")}</p>
                    <p className="text-muted-foreground text-xs">{t("openSource.mcp.comingSoon.feature1Subtitle")}</p>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-primary/20 px-4 py-3 text-sm">
                    <p className="font-semibold text-foreground">{t("openSource.mcp.comingSoon.feature2Title")}</p>
                    <p className="text-muted-foreground text-xs">{t("openSource.mcp.comingSoon.feature2Subtitle")}</p>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-primary/20 px-4 py-3 text-sm">
                    <p className="font-semibold text-foreground">{t("openSource.mcp.comingSoon.feature3Title")}</p>
                    <p className="text-muted-foreground text-xs">{t("openSource.mcp.comingSoon.feature3Subtitle")}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-2">{t("openSource.mcp.comingSoon.cta")}</p>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      <section id="repos" className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:py-20 lg:py-24">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.12em] text-primary">{t("openSource.repos.pretitle")}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{t("openSource.repos.title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("openSource.repos.description")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[ 
            {
              titleKey: "openSource.repos.repo1Title",
              descriptionKey: "openSource.repos.repo1Description",
              link: "https://github.com/Gabry848/MyTaskly-app"
            },
            {
              titleKey: "openSource.repos.repo2Title",
              descriptionKey: "openSource.repos.repo2Description",
              link: "https://github.com/Gabry848/MyTaskly-site"
            },
            {
              titleKey: "openSource.repos.repo3Title",
              descriptionKey: "openSource.repos.repo3Description",
              link: "https://github.com/Gabry848/MyTaskly-mcp"
            },
          ].map((repo, index) => (
            <ScrollAnimatedCard key={repo.titleKey} delay={index * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-6 shadow-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-1 flex-col gap-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    <GitBranch className="h-4 w-4" /> {t("openSource.repos.badge")}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{t(repo.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(repo.descriptionKey)}</p>
                  </div>
                  <Link
                    href={repo.link}
                    className="relative inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:translate-x-1"
                  >
                    {t("openSource.repos.buttonText")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimatedCard>
          ))}
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/70 p-6 text-center shadow-md">
          <p className="text-lg font-semibold text-foreground">{t("openSource.repos.footerTitle")}</p>
          <p className="mt-2 text-muted-foreground">
            {t("openSource.repos.footerDescription")}
          </p>
        </div>
      </section>
    </div>
  )
}
