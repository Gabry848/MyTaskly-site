"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/app/contexts/LanguageContext"
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper"
import { Mail, Phone, Clock, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Define form schema with validation
  const formSchema = z.object({
    name: z.string().min(2, { message: t("contact.validation.nameRequired") }),
    email: z.string().email({ message: t("contact.validation.emailValid") }),
    subject: z.string().min(5, { message: t("contact.validation.subjectRequired") }),
    message: z.string().min(10, { message: t("contact.validation.messageRequired") }),
  })

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    console.log(values)

    try {
      const response = await fetch("https://mytaskly-site-server-production.up.railway.app/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        form.reset()
        toast({
          title: t("contact.toast.success"),
          description: t("contact.toast.successMessage"),
        })
      } else {
        // Handle server errors (e.g., validation errors, server down)
        const errorData = await response.json().catch(() => ({})) // Try to parse error, default to empty object
        toast({
          variant: "destructive",
          title: t("contact.toast.error"),
          description: errorData.message || t("contact.toast.errorMessage"),
        })
      }
    } catch (error) {
      // Handle network errors or other unexpected issues
      console.error("Submission error:", error)
      toast({
        variant: "destructive",
        title: t("contact.toast.error"),
        description: t("contact.toast.errorMessageNetwork"),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: t("contact.info.email"),
      details: "support@mytasklyapp.com",
      link: "mailto:support@mytasklyapp.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: t("contact.info.phone"),
      details: "None at the moment",
      link: "tel:+15551234567",
    },

    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: t("contact.info.hours"),
      details: t("contact.info.hoursDetails"),
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <ScrollAnimationWrapper>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                <span className="text-gradient">{t("contact.title")}</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("contact.subtitle")}</p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form */}
          <ScrollAnimationWrapper>
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
              <h2 className="text-2xl font-bold mb-6">{t("contact.form.title")}</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.name")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.namePlaceholder")} {...field} />
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
                        <FormLabel>{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.emailPlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.subject")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.subjectPlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.message")}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("contact.form.messagePlaceholder")}
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        {t("contact.form.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        {t("contact.form.submit")}
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollAnimationWrapper>

          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollAnimationWrapper>
              <h2 className="text-2xl font-bold mb-6">{t("contact.info.title")}</h2>
              <p className="text-muted-foreground mb-8">{t("contact.info.description")}</p>
            </ScrollAnimationWrapper>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      {item.link ? (
                        <Link
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.details}
                        </Link>
                      ) : (
                        <p className="text-muted-foreground">{item.details}</p>
                      )}
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>

            {/* Social Media */}
            <ScrollAnimationWrapper delay={0.4}>
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">{t("contact.social.title")}</h3>
                <div className="flex gap-4">
                  {/* Removed Twitter Link */}
                  <Link
                    href="https://instagram.com/mytaskly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://linkedin.com/company/mytaskly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <div className="w-full h-96 bg-muted relative overflow-hidden">
        <ScrollAnimationWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948534!3d37.75781499657613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1649252132504!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mytaskly Office Location"
          ></iframe>
        </ScrollAnimationWrapper>
      </div> */}

      {/* FAQ Section */}
      <div className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("contact.faq.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("contact.faq.subtitle")}</p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mx-auto mt-16 max-w-2xl divide-y divide-border">
            {[1, 2, 3, 4].map((num) => (
              <ScrollAnimationWrapper key={num} delay={num * 0.1}>
                <div className="py-6">
                  <h3 className="text-lg font-semibold leading-7 text-foreground">{t(`contact.faq.q${num}`)}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{t(`contact.faq.a${num}`)}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-background to-primary/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("contact.cta.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("contact.cta.description")}</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button className="rounded-full" size="lg">
                  {t("contact.cta.button")}
                </Button>
                <Link href="/download" className="text-sm font-semibold leading-6 text-foreground">
                  {t("contact.cta.link")} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}
