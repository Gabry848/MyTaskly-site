"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useWaitlistRegistration } from "@/hooks/use-waitlist-registration";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z\s'\-]+$/, { message: "Il nome può contenere solo lettere, spazi, apostrofi e trattini." }),
  platform: z.enum(["ios", "android", "both"]),
  notifications: z.boolean().default(true),
});

export default function WaitlistForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { markAsRegistered } = useWaitlistRegistration();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      platform: "both",
      notifications: true,
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

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      placeholder={t("download.form.emailPlaceholder")}
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
          <div className="flex justify-center">
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
  );
}