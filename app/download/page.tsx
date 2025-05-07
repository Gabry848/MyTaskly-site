"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper";
import { CalendarClock, ChevronDown, Gift, Rocket, Star, Zap } from "lucide-react"; 
// import { useCookieConsent } from "@/hooks/use-cookie-consent"; // Ensure this module exists or comment it out if not needed
import { useWaitlistRegistration } from "@/hooks/use-waitlist-registration";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z\s'\-]+$/, { message: "Il nome può contenere solo lettere, spazi, apostrofi e trattini." }),
  platform: z.enum(["ios", "android", "both"]),
  notifications: z.boolean().default(true),
  newsletter: z.boolean().default(true),
});

export default function DownloadPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { isCookieBannerClosed } = useCookieConsent();
  const { isRegistered, markAsRegistered } = useWaitlistRegistration();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      platform: "both",
      newsletter: true,
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
          newsletter: values.notifications,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Error response:", data);
        throw new Error(data.message || t("download.toast.error.generic"));
      }

      // Segna l'utente come registrato dopo che la registrazione è andata a buon fine
      markAsRegistered();
      
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

  // Function to scroll to the waitlist section
  const scrollToWaitlist = () => {
    const waitlistElement = document.getElementById('waitlist-section');
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Mostra il popup solo se l'utente ha chiuso il banner dei cookie 
    // E non si è ancora registrato alla waitlist
    if (isCookieBannerClosed && !isRegistered) {
      const timer = setTimeout(() => {
        const popupElement = document.getElementById("subscription-popup");
        if (popupElement) {
          popupElement.style.display = "block";
        }
      }, 10000); // Mostra il popup dopo 10 secondi (come richiesto)
      
      return () => clearTimeout(timer);
    }
  }, [isCookieBannerClosed, isRegistered]);

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
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t("download.subtitle")}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="relative h-16 w-48">
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-foreground">
                    {t("download.comingSoonAppStore")}
                  </div>
                </div>
                <div className="relative h-16 w-48">
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-foreground">
                    {t("download.comingSoonGooglePlay")}
                  </div>
                </div>
              </div>

              {/* Animated arrows section */}
              <div className="mt-16 flex flex-col items-center">
                <div className="text-primary font-medium flex items-center mb-4">
                  <Gift className="w-5 h-5 mr-2" />
                  {/* Using hardcoded text as requested, consider adding to translations */}
                  <span>Scorri per iscriverti alla waitlist e ricevere 3 mesi gratis + 30% di sconto!</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer" onClick={scrollToWaitlist}>
                  <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
                  <ChevronDown className="w-6 h-6 text-primary -mt-3 animate-bounce" style={{ animationDelay: '0.3s' }} />
                  <ChevronDown className="w-6 h-6 text-primary -mt-3 animate-bounce" style={{ animationDelay: '0.6s' }} />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Countdown Section - Adding id here for scroll target */}
      <div id="waitlist-section" className="bg-gradient-to-b from-background to-primary/5 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <CalendarClock className="h-12 w-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("download.countdown.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t("download.countdown.description")}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mt-16 flow-root">
            <ScrollAnimationWrapper>
              <div className="relative rounded-xl bg-background p-8 shadow-lg border border-border">
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
                          name="notifications" // This field seems to control the newsletter subscription based on the API call
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  id="notifications" // ID should probably match the name/purpose, e.g., "newsletter-check"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel htmlFor="notifications">
                                  {/* Label text should reflect what the checkbox controls */}
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
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t("download.benefits.subtitle")}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-24 lg:max-w-3xl lg:grid-cols-2 lg:mx-auto">
              <ScrollAnimationWrapper delay={0.1}>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Rocket
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {t("download.benefits.earlyAccess.title")}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">
                      {t("download.benefits.earlyAccess.description")}
                    </p>
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
                    <p className="flex-auto">
                      {t("download.benefits.premiumDiscount.description")}
                    </p>
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
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t("download.faq.subtitle")}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mx-auto mt-16 max-w-2xl divide-y divide-border">
            <ScrollAnimationWrapper delay={0.1}>
              <div className="py-8">
                <h3 className="text-lg font-semibold leading-7 text-foreground">
                  {t("download.faq.q1")}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {t("download.faq.a1")}
                </p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.2}>
              <div className="py-8">
                <h3 className="text-lg font-semibold leading-7 text-foreground">
                  {t("download.faq.q2")}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {t("download.faq.a2")}
                </p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.3}>
              <div className="py-8">
                <h3 className="text-lg font-semibold leading-7 text-foreground">
                  {t("download.faq.q3")}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {t("download.faq.a3")}
                </p>
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
                  onClick={() =>
                    // Scroll to waitlist section instead of top
                    scrollToWaitlist()
                  }
                >
                  {t("download.cta.button")}
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <div id="subscription-popup" style={{ display: "none" }}>
        {/* Popup content */}
      </div>
    </div>
  );
}