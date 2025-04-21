"use client"; // Add this line

import { useState } from "react"; // Add this line
import { useForm } from "react-hook-form"; // Add this line
import { zodResolver } from "@hookform/resolvers/zod"; // Add this line
import * as z from "zod"; // Add this line
import { Input } from "@/components/ui/input"; // Add this line
import { Button } from "@/components/ui/button"; // Add this line
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Add this line
import { Checkbox } from "@/components/ui/checkbox"; // Add this line
import { useToast } from "@/components/ui/use-toast"; // Add this line
import { useLanguage } from "@/app/contexts/LanguageContext"; // Add this line

import Hero from "./components/Hero"
import LaunchBanner from "./components/LaunchBanner"
import WearYourStory from "./components/WearYourStory" // This is now "Organize Your Life" content
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
// import ContactForm from "./components/ContactForm" // Keep commented or remove if not used elsewhere
// import NewsletterSubscribe from "./components/NewsletterSubscribe" // Remove this line
import Testimonials from "./components/Testimonials"

// Add form schema from download page
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  platform: z.enum(["ios", "android", "both"]),
  notifications: z.boolean().default(true),
  // Assuming newsletter is the same as notifications for this form instance
});


export default function Home() {
  // Add form logic from download page
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      platform: "both",
      notifications: true, // Changed from newsletter to notifications to match schema
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://mytaskly-site-server-production.up.railway.app/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          name: values.name,
          selected_platform: values.platform,
          newsletter: values.notifications, // Send notifications value as newsletter
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Error response:", data);
        throw new Error(data.message || t("download.toast.error.generic"));
      }

      form.reset();
      toast({
        title: t("download.toast.title"),
        description: data.message || t("download.toast.description"),
      });
    } catch (error) {
      console.error("Waitlist submission error:", error);
      const errorMessage =
        error instanceof Error ? error.message : t("download.toast.error.network");
      toast({
        variant: "destructive",
        title: t("download.toast.error.title"),
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div id="home">
        <Hero />
        <LaunchBanner />
      </div>
      <div id="features">
        <WearYourStory />
        <FeatureCarousel />
        <PortfolioGrid />
      </div>
      <div id="about">
        <Timeline />
        <Marquee />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="download">
        {/* Replace NewsletterSubscribe with the form from download page */}
        <div className="relative rounded-xl bg-background p-8 shadow-lg border border-border max-w-4xl mx-auto my-16">
                <div className="mx-auto max-w-2xl text-center">
                  <h3 className="text-xl font-semibold leading-8 text-foreground">
                    {t("download.waitlist.title")}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    {t("download.waitlist.description")}
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-8 max-w-xl mx-auto"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("download.form.name")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("download.form.namePlaceholder")}
                                {...field}
                              />
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
                              <Input
                                placeholder={t(
                                  "download.form.emailPlaceholder"
                                )}
                                {...field}
                              />
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
                                  <span className="text-sm text-foreground">
                                    iOS
                                  </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="android"
                                    checked={field.value === "android"}
                                    onChange={() => field.onChange("android")}
                                    className="h-4 w-4 text-primary"
                                  />
                                  <span className="text-sm text-foreground">
                                    Android
                                  </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="both"
                                    checked={field.value === "both"}
                                    onChange={() => field.onChange("both")}
                                    className="h-4 w-4 text-primary"
                                  />
                                  <span className="text-sm text-foreground">
                                    {t("download.form.both")}
                                  </span>
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
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  id="notifications"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel htmlFor="notifications">
                                  {t("download.form.notifications")}
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                      <Button
                        type="submit"
                        className="rounded-full px-8"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? t("download.form.submitting")
                          : t("download.form.submit")}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
        {/* <NewsletterSubscribe /> */} {/* Remove this line */}
      </div>
    </>
  )
}
