"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

export default function NewsletterSubscribe() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      alert(t("newsletter.success"))
    }, 2000)
  }

  return (
    <section className="bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="bg-primary/5 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">{t("newsletter.title")}</h2>
            <p className="text-muted-foreground mb-6 text-center">{t("newsletter.subtitle")}</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={t("newsletter.placeholder")} {...field} className="rounded-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? t("newsletter.subscribing") : t("newsletter.subscribe")}
                </Button>
              </form>
            </Form>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
