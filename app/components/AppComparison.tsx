"use client"

import { useEffect, useState } from "react"
import { Check, HelpCircle } from "lucide-react"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AppComparison() {
  const { t } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const features = [
    {
      key: "voice",
      mytaskly: true,
      todoist: false,
      microsoft: false,
      ticktick: false,
    },
    {
      key: "ai",
      mytaskly: true,
      todoist: true,
      microsoft: false,
      ticktick: true,
    },
    {
      key: "memory",
      mytaskly: true,
      todoist: false,
      microsoft: false,
      ticktick: false,
    },
    {
      key: "automation",
      mytaskly: true,
      todoist: true,
      microsoft: true,
      ticktick: true,
    },
    {
      key: "design",
      mytaskly: true,
      todoist: false,
      microsoft: false,
      ticktick: false,
    },
  ]

  const competitors = [
    { name: t("comparison.competitors.mytaskly"), isPrimary: true },
    { name: "Todoist", isPrimary: false },
    { name: "Microsoft To Do", isPrimary: false },
    { name: "TickTick", isPrimary: false },
  ]

  return (
    <section className="w-full py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              {t("comparison.pretitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              {t("comparison.title")}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t("comparison.subtitle")}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.1}>
          <div className="hidden md:block mt-12">
            <div className="rounded-[32px] border border-border bg-card/70 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {t("comparison.tableTitle")}
              </h3>

              <TooltipProvider>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={feature.key} className="flex items-start">
                      <div className="flex items-center w-1/3 pr-6">
                        <span className="text-sm font-medium text-foreground">{t(`comparison.features.${feature.key}.name`)}</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 text-muted-foreground ml-2 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs max-w-[220px] leading-relaxed">
                              {t(`comparison.features.${feature.key}.tooltip`)}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>

                      <div className="flex w-2/3 justify-between text-muted-foreground">
                        <div className="flex-1 text-center">
                          {feature.mytaskly && <Check className="h-5 w-5 text-foreground mx-auto" />}
                        </div>
                        <div className="flex-1 text-center">
                          {feature.todoist && <Check className="h-5 w-5 mx-auto opacity-60" />}
                        </div>
                        <div className="flex-1 text-center">
                          {feature.microsoft && <Check className="h-5 w-5 mx-auto opacity-60" />}
                        </div>
                        <div className="flex-1 text-center">
                          {feature.ticktick && <Check className="h-5 w-5 mx-auto opacity-60" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TooltipProvider>

              <div className="mt-8 flex justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <div className="w-1/3" />
                <div className="flex w-2/3 justify-between">
                  <div className="flex-1 text-center text-foreground">{t("comparison.competitors.mytaskly")}</div>
                  <div className="flex-1 text-center">Todoist</div>
                  <div className="flex-1 text-center">Microsoft To Do</div>
                  <div className="flex-1 text-center">TickTick</div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-border">
                <Link href="/features" passHref>
                  <Button className="rounded-full px-8" size="sm">
                    {t("comparison.cta")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:hidden mt-12">
            <div className="rounded-[32px] border border-border bg-card/70 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur">
              <h3 className="text-base font-semibold text-center text-foreground mb-6">
                {t("comparison.tableTitle")}
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-5 gap-1 text-center text-[10px] border-b border-border pb-3 uppercase tracking-[0.2em] text-muted-foreground">
                  <div className="col-span-2 text-left font-medium text-foreground">
                    {t("comparison.featuresLabel")}
                  </div>
                  {competitors.map((comp, i) => (
                    <div key={i} className={comp.isPrimary ? "text-foreground" : "text-muted-foreground"}>
                      {comp.name}
                    </div>
                  ))}
                </div>

                {features.map((feature, index) => (
                  <div key={feature.key} className="grid grid-cols-5 gap-1 items-center py-3 border-b border-border/60">
                    <div className="col-span-2 flex items-center">
                      <span className="text-xs text-foreground">{t(`comparison.features.${feature.key}.name`)}</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-3 w-3 text-muted-foreground ml-1 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs max-w-[200px] leading-relaxed">
                              {t(`comparison.features.${feature.key}.tooltip`)}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="text-center">{feature.mytaskly && <Check className="h-4 w-4 text-foreground mx-auto" />}</div>
                    <div className="text-center text-muted-foreground">{feature.todoist && <Check className="h-4 w-4 mx-auto opacity-60" />}</div>
                    <div className="text-center text-muted-foreground">{feature.microsoft && <Check className="h-4 w-4 mx-auto opacity-60" />}</div>
                    <div className="text-center text-muted-foreground">{feature.ticktick && <Check className="h-4 w-4 mx-auto opacity-60" />}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4">
                <Link href="/features" passHref>
                  <Button className="w-full rounded-full" size="sm">
                    {t("comparison.cta")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
