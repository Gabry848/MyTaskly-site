"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper";
import { CalendarClock, Rocket, Star, Zap } from "lucide-react";

export default function DownloadPage() {
  const { t } = useLanguage();

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

            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-gradient-to-b from-background to-primary/5 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <CalendarClock className="h-12 w-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Periodo di Iscrizione Terminato
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Il periodo per iscriversi alla waitlist è terminato. Se hai già completato la tua iscrizione, puoi accedere all'area riservata.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mt-16 flow-root">
            <ScrollAnimationWrapper>
              <div className="relative rounded-xl bg-background p-8 shadow-lg border border-border">
                <div className="mx-auto max-w-2xl text-center">
                  <h3 className="text-xl font-semibold leading-8 text-foreground">
                    Accesso all'Area Riservata
                  </h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground mb-8">
                    Se ti sei già registrato alla waitlist, clicca il pulsante qui sotto per accedere all'area riservata e scaricare l'app.
                  </p>
                  <Button
                    className="rounded-full px-8"
                    size="lg"
                    asChild
                  >
                    <a href="/early-access">
                      Accedi all'Area Riservata
                    </a>
                  </Button>
                </div>
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
                  asChild
                >
                  <a href="/early-access">
                    Accedi all'Area Riservata
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

    </div>
  );
}