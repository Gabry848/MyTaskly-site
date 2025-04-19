"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/app/contexts/LanguageContext"
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper"
import { CalendarClock, Gift, Rocket, Star, Zap } from "lucide-react"
import Image from "next/image"

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  platform: z.enum(["ios", "android", "both"]),
  notifications: z.boolean().default(true),
})

export default function DownloadPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      platform: "both",
      notifications: true,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      toast({
        title: t("download.toast.title"),
        description: t("download.toast.description"),
      })
    }, 1500)
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <ScrollAnimationWrapper>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                <span className="text-gradient">{t("download.title")}</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("download.subtitle")}</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="relative h-16 w-48">
                  <Image
                    src="/placeholder.svg?height=60&width=180"
                    alt="App Store Coming Soon"
                    fill
                    className="object-contain opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-foreground">
                    {t("download.comingSoonAppStore")}
                  </div>
                </div>
                <div className="relative h-16 w-48">
                  <Image
                    src="/placeholder.svg?height=60&width=180"
                    alt="Google Play Coming Soon"
                    fill
                    className="object-contain opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-foreground">
                    {t("download.comingSoonGooglePlay")}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="bg-gradient-to-b from-background to-primary/5 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <CalendarClock className="h-12 w-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("download.countdown.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("download.countdown.description")}</p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mt-16 flow-root">
            <ScrollAnimationWrapper>
              <div className="relative rounded-xl bg-background p-8 shadow-lg border border-border">
                <div className="mx-auto max-w-2xl text-center">
                  <h3 className="text-xl font-semibold leading-8 text-foreground">{t("download.waitlist.title")}</h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">{t("download.waitlist.description")}</p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 max-w-xl mx-auto">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("download.form.name")}</FormLabel>
                            <FormControl>
                              <Input placeholder={t("download.form.namePlaceholder")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("download.form.email")}</FormLabel>
                            <FormControl>
                              <Input placeholder={t("download.form.emailPlaceholder")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="platform"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>{t("download.form.platform")}</FormLabel>
                            <FormControl>
                              <div className="flex gap-4 mt-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="ios"
                                    checked={field.value === "ios"}
                                    onChange={() => field.onChange("ios")}
                                    className="h-4 w-4 text-primary"
                                  />
                                  <span className="text-sm text-foreground">iOS</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="android"
                                    checked={field.value === "android"}
                                    onChange={() => field.onChange("android")}
                                    className="h-4 w-4 text-primary"
                                  />
                                  <span className="text-sm text-foreground">Android</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="both"
                                    checked={field.value === "both"}
                                    onChange={() => field.onChange("both")}
                                    className="h-4 w-4 text-primary"
                                  />
                                  <span className="text-sm text-foreground">{t("download.form.both")}</span>
                                </label>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="sm:col-span-2">
                        <FormField
                          control={form.control}
                          name="notifications"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} id="notifications" />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel htmlFor="notifications">{t("download.form.notifications")}</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                      <Button type="submit" className="rounded-full px-8" disabled={isSubmitting}>
                        {isSubmitting ? t("download.form.submitting") : t("download.form.submit")}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("download.benefits.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("download.benefits.subtitle")}</p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <ScrollAnimationWrapper delay={0.1}>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Rocket className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {t("download.benefits.earlyAccess.title")}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{t("download.benefits.earlyAccess.description")}</p>
                  </dd>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.2}>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Gift className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {t("download.benefits.exclusiveFeatures.title")}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{t("download.benefits.exclusiveFeatures.description")}</p>
                  </dd>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.3}>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Star className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {t("download.benefits.premiumDiscount.title")}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{t("download.benefits.premiumDiscount.description")}</p>
                  </dd>
                </div>
              </ScrollAnimationWrapper>
            </dl>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-background to-primary/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("download.faq.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("download.faq.subtitle")}</p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mx-auto mt-16 max-w-2xl divide-y divide-border">
            <ScrollAnimationWrapper delay={0.1}>
              <div className="py-8">
                <h3 className="text-lg font-semibold leading-7 text-foreground">{t("download.faq.q1")}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{t("download.faq.a1")}</p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.2}>
              <div className="py-8">
                <h3 className="text-lg font-semibold leading-7 text-foreground">{t("download.faq.q2")}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{t("download.faq.a2")}</p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.3}>
              <div className="py-8">
                <h3 className="text-lg font-semibold leading-7 text-foreground">{t("download.faq.q3")}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{t("download.faq.a3")}</p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <Zap className="h-12 w-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("download.cta.title")}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                {t("download.cta.description")}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  className="rounded-full px-8"
                  size="lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  {t("download.cta.button")}
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}
