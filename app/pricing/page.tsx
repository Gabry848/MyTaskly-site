"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function PricingPage() {
  const { t } = useLanguage()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  // Calculate yearly prices (20% discount)
  const premiumMonthly = 2.99
  const proMonthly = 7.99
  const premiumYearly = Math.round(premiumMonthly * 12 * 0.8 * 100) / 100
  const proYearly = Math.round(proMonthly * 12 * 0.8 * 100) / 100
  const premiumMonthlySavings = Math.round(premiumMonthly * 12 - premiumYearly)
  const proMonthlySavings = Math.round(proMonthly * 12 - proYearly)

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <ScrollAnimationWrapper>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                <span className="text-gradient">{t("pricing.title")}</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("pricing.subtitle")}</p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
        <ScrollAnimationWrapper>
          <div className="flex justify-center">
            <div className="relative flex rounded-full bg-muted p-1 w-fit">
              <button
                type="button"
                className={cn(
                  "relative rounded-full py-2 px-6 text-sm font-medium transition-all",
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted-foreground/10",
                )}
                onClick={() => setBillingCycle("monthly")}
              >
                {t("pricing.monthly")}
              </button>
              <button
                type="button"
                className={cn(
                  "relative ml-0.5 rounded-full py-2 px-6 text-sm font-medium transition-all",
                  billingCycle === "yearly"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted-foreground/10",
                )}
                onClick={() => setBillingCycle("yearly")}
              >
                {t("pricing.yearly")}
                <span className="absolute -top-2 -right-2 flex h-5 items-center justify-center rounded-full bg-primary/90 px-2 text-xs text-primary-foreground">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Free Plan */}
          <ScrollAnimationWrapper delay={0.1}>
            <div className="flex flex-col rounded-3xl bg-background border border-border p-8 shadow-lg hover-lift">
              <h3 className="text-lg font-semibold leading-8 text-foreground">{t("pricing.free.title")}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{t("pricing.free.description")}</p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">$0</span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">{t("pricing.month")}</span>
              </div>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.free.feature1")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.free.feature2")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.free.feature3")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.free.feature4")}</span>
                </li>
                <li className="flex gap-x-3">
                  <X className="h-6 w-5 flex-none text-muted-foreground" />
                  <span className="text-muted-foreground/70">{t("pricing.free.feature5")}</span>
                </li>
                <li className="flex gap-x-3">
                  <X className="h-6 w-5 flex-none text-muted-foreground" />
                  <span className="text-muted-foreground/70">{t("pricing.free.feature6")}</span>
                </li>
                <li className="flex gap-x-3">
                  <X className="h-6 w-5 flex-none text-muted-foreground" />
                  <span className="text-muted-foreground/70">{t("pricing.free.feature7")}</span>
                </li>
              </ul>
              <Button className="mt-8 rounded-full" variant="outline">
                {t("pricing.cta.free")}
              </Button>
            </div>
          </ScrollAnimationWrapper>

          {/* Premium Plan */}
          <ScrollAnimationWrapper delay={0.2}>
            <div className="flex flex-col rounded-3xl bg-primary/5 border border-primary/20 p-8 shadow-lg relative hover-lift">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                {t("pricing.mostPopular")}
              </div>
              <h3 className="text-lg font-semibold leading-8 text-foreground">{t("pricing.premium.title")}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{t("pricing.premium.description")}</p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  ${billingCycle === "monthly" ? premiumMonthly : (premiumYearly / 12).toFixed(2)}
                </span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">{t("pricing.month")}</span>
              </div>
              {billingCycle === "yearly" && (
                <div className="mt-1 flex items-baseline text-sm text-primary">
                  <span>
                    ${premiumYearly.toFixed(2)} {t("pricing.billed")}
                  </span>
                  <span className="ml-1">
                    ({t("pricing.save")} ${premiumMonthlySavings})
                  </span>
                </div>
              )}
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.premium.feature1")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.premium.feature2")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.premium.feature3")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.premium.feature4")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.premium.feature5")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.premium.feature6")}</span>
                </li>
                <li className="flex gap-x-3">
                  <X className="h-6 w-5 flex-none text-muted-foreground" />
                  <span className="text-muted-foreground/70">{t("pricing.premium.feature7")}</span>
                </li>
              </ul>
              <Button className="mt-8 rounded-full">{t("pricing.cta.premium")}</Button>
            </div>
          </ScrollAnimationWrapper>

          {/* Pro Plan */}
          <ScrollAnimationWrapper delay={0.3}>
            <div className="flex flex-col rounded-3xl bg-background border border-border p-8 shadow-lg hover-lift">
              <h3 className="text-lg font-semibold leading-8 text-foreground">{t("pricing.pro.title")}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{t("pricing.pro.description")}</p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  ${billingCycle === "monthly" ? proMonthly : (proYearly / 12).toFixed(2)}
                </span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">{t("pricing.month")}</span>
              </div>
              {billingCycle === "yearly" && (
                <div className="mt-1 flex items-baseline text-sm text-primary">
                  <span>
                    ${proYearly.toFixed(2)} {t("pricing.billed")}
                  </span>
                  <span className="ml-1">
                    ({t("pricing.save")} ${proMonthlySavings})
                  </span>
                </div>
              )}
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.pro.feature1")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.pro.feature2")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.pro.feature3")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.pro.feature4")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.pro.feature5")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.pro.feature6")}</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  <span>{t("pricing.pro.feature7")}</span>
                </li>
              </ul>
              <Button className="mt-8 rounded-full" variant="outline">
                {t("pricing.cta.pro")}
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("pricing.comparison.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("pricing.comparison.subtitle")}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-5 px-4 text-left text-foreground font-medium">{t("pricing.comparison.feature")}</th>
                  <th className="py-5 px-4 text-center text-foreground font-medium">{t("pricing.free.title")}</th>
                  <th className="py-5 px-4 text-center text-foreground font-medium">{t("pricing.premium.title")}</th>
                  <th className="py-5 px-4 text-center text-foreground font-medium">{t("pricing.pro.title")}</th>
                </tr>
              </thead>
              <tbody>
                {/* Core Features */}
                <tr className="border-b border-border bg-muted/30">
                  <td colSpan={4} className="py-3 px-4 text-foreground font-semibold">
                    {t("pricing.comparison.category.core")}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.taskLists")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.upTo3")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.unlimited")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.unlimited")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.tasks")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.upTo50")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.unlimited")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.unlimited")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.subtasks")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.attachments")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.limited")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.unlimited")}</td>
                </tr>

                {/* Organization */}
                <tr className="border-b border-border bg-muted/30">
                  <td colSpan={4} className="py-3 px-4 text-foreground font-semibold">
                    {t("pricing.comparison.category.organization")}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.tags")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.filters")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.basic")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.advanced")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.advanced")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.sorting")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.basic")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.advanced")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.advanced")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.customViews")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.upTo3")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.unlimited")}</td>
                </tr>

                {/* Reminders & Notifications */}
                <tr className="border-b border-border bg-muted/30">
                  <td colSpan={4} className="py-3 px-4 text-foreground font-semibold">
                    {t("pricing.comparison.category.reminders")}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.basicReminders")}</td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.recurringReminders")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.locationReminders")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.customNotifications")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>

                {/* Sync & Devices */}
                <tr className="border-b border-border bg-muted/30">
                  <td colSpan={4} className="py-3 px-4 text-foreground font-semibold">
                    {t("pricing.comparison.category.sync")}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.devices")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">1</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">5</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.unlimited")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.cloudSync")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.offlineMode")}</td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.dataBackup")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>

                {/* Customization */}
                <tr className="border-b border-border bg-muted/30">
                  <td colSpan={4} className="py-3 px-4 text-foreground font-semibold">
                    {t("pricing.comparison.category.customization")}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.themes")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.basic")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.advanced")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.advanced")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.customColors")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.widgets")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.customFonts")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>

                {/* Advanced Features */}
                <tr className="border-b border-border bg-muted/30">
                  <td colSpan={4} className="py-3 px-4 text-foreground font-semibold">
                    {t("pricing.comparison.category.advanced")}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.calendarIntegration")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.aiSuggestions")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.teamCollaboration")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.analytics")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.basic")}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{t("pricing.comparison.advanced")}</td>
                </tr>

                {/* Support */}
                <tr className="border-b border-border bg-muted/30">
                  <td colSpan={4} className="py-3 px-4 text-foreground font-semibold">
                    {t("pricing.comparison.category.support")}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.emailSupport")}</td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.prioritySupport")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">{t("pricing.comparison.dedicatedManager")}</td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <ScrollAnimationWrapper>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("pricing.faq.title")}</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("pricing.faq.subtitle")}</p>
          </div>
        </ScrollAnimationWrapper>
        <div className="mt-20">
          <ScrollAnimationWrapper delay={0.2}>
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
              <div>
                <dt className="text-base font-semibold leading-7 text-foreground">{t("pricing.faq.q1")}</dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{t("pricing.faq.a1")}</dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-foreground">{t("pricing.faq.q2")}</dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{t("pricing.faq.a2")}</dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-foreground">{t("pricing.faq.q3")}</dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{t("pricing.faq.a3")}</dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-foreground">{t("pricing.faq.q4")}</dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{t("pricing.faq.a4")}</dd>
              </div>
            </dl>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("pricing.cta.ready")}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                {t("pricing.cta.readySubtitle")}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button className="rounded-full" size="lg">
                  {t("pricing.cta.getStarted")}
                </Button>
                <Link href="#features" className="text-sm font-semibold leading-6 text-foreground">
                  {t("pricing.cta.learnMore")} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}
