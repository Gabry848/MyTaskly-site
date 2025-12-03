"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper";
import {
  CalendarClock,
  CheckCircle2,
  Rocket,
  Star,
  Zap,
  Mic,
  Bell,
  Calendar,
  Cloud,
  Shield,
  ListChecks,
  Users,
  Sparkles,
  Clock,
  Globe,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWaitlistRegistration } from "@/hooks/use-waitlist-registration";

export default function DownloadPage() {
  const { t } = useLanguage();
  const { markAsRegistered } = useWaitlistRegistration();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("android");
  const [wantsUpdates, setWantsUpdates] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError(t("download.form.errorEmail"));
      return;
    }

    setIsSubmitting(true);

    try {
      // Simula una registrazione andata a buon fine per la waitlist della beta
      await new Promise((resolve) => setTimeout(resolve, 400));
      markAsRegistered();
      setShowConfirmation(true);
      setFullName("");
      setEmail("");
      setPlatform("android");
      setWantsUpdates(true);
    } catch (error) {
      setFormError(t("download.form.errorGeneric"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <ScrollAnimationWrapper>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                {t("download.badge")}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                <span className="text-gradient">{t("download.title")}</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t("download.subtitle")}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Button className="rounded-full px-8" size="lg" asChild>
                  <a href="#waitlist">{t("download.buttons.playStore")}</a>
                </Button>
                <Button
                  className="rounded-full px-8"
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <a href="/early-access">{t("download.buttons.progress")}</a>
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                {t("download.comingSoonAppStore")}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Information Section */}
      <div
        id="waitlist"
        className="bg-gradient-to-b from-background to-primary/5 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <CalendarClock className="h-12 w-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("download.waitlist.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t("download.waitlist.description")}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mt-16 grid gap-6">
            <ScrollAnimationWrapper delay={0.1}>
              <div className="relative rounded-xl bg-background p-8 shadow-lg border border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <CalendarClock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold leading-8 text-foreground">
                      {t("download.waitlist.formTitle")}
                    </h3>
                  </div>
                  <p className="text-base leading-7 text-muted-foreground">
                    {t("download.waitlist.formDescription")}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          {t("download.form.name")}
                        </Label>
                        <Input
                          id="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={t("download.form.namePlaceholder")}
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t("download.form.email")}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t("download.form.emailPlaceholder")}
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="platform">
                          {t("download.form.platform")}
                        </Label>
                        <Select
                          value={platform}
                          onValueChange={setPlatform}
                          defaultValue="android"
                        >
                          <SelectTrigger id="platform" className="w-full">
                            <SelectValue
                              placeholder={t(
                                "download.form.platformPlaceholder"
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="android">Android</SelectItem>
                            <SelectItem value="ios">iOS</SelectItem>
                            <SelectItem value="both">
                              {t("download.form.both")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {t("download.form.notifications")}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t("download.form.notificationsHint")}
                          </p>
                        </div>
                        <Switch
                          checked={wantsUpdates}
                          onCheckedChange={setWantsUpdates}
                          disabled={isSubmitting}
                          aria-label={t("download.form.notifications")}
                        />
                      </div>
                    </div>

                    {formError && (
                      <p className="text-sm text-red-600">{formError}</p>
                    )}

                    <Button
                      className="w-full rounded-full"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? t("download.form.submitting")
                        : t("download.form.submit")}
                    </Button>
                  </form>
                  <p className="text-sm text-muted-foreground">
                    {t("download.waitlist.formFootnote")}
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader className="items-center text-center space-y-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <DialogTitle className="text-2xl">
              {t("download.waitlist.confirmationTitle")}
            </DialogTitle>
            <DialogDescription>
              {t("download.waitlist.confirmationDescription")}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button
              onClick={() => setShowConfirmation(false)}
              className="w-full sm:w-auto"
            >
              {t("download.waitlist.confirmationButton")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Funzionalità Disponibili
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                MyTaskly offre già un set completo di funzionalità per gestire
                al meglio le tue attività
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimationWrapper delay={0.1}>
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mic className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Voice & Audio
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Registrazione vocale con streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Voice Activity Detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Chat testuale con risposte streaming</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Notifiche & Promemoria
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Push notifications complete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Promemoria 1 ora prima scadenza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Notifiche per tipo di task</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.3}>
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Calendario
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Google Calendar sync bidirezionale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Visualizzazione calendario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Task per giorno</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.4}>
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ListChecks className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Gestione Task
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>CRUD completo (Create, Read, Update, Delete)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Categorizzazione e organizzazione</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Filtraggio avanzato per status, priorità, categoria
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ricerca globale dei task</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.5}>
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Cloud className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Sincronizzazione
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Offline-first con caching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sync periodico ogni 5 minuti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Queue system per operazioni offline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cache versioning con deduplicazione</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.6}>
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Sicurezza & Altro
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>JWT Authentication & HTTPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Condivisione categorie con permessi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Note adesive draggabili</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Multi-lingua (IT/EN)</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
                <Clock className="h-4 w-4" />
                <span>Prossimamente</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Nuove Funzionalità in Arrivo
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Stiamo lavorando per portarti ancora più funzionalità avanzate
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimationWrapper delay={0.1}>
              <div className="relative rounded-2xl border border-dashed border-primary/30 bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <Calendar className="h-5 w-5 text-primary/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Calendari Multipli
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gestisci più calendari contemporaneamente con sincronizzazione
                  avanzata
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <div className="relative rounded-2xl border border-dashed border-primary/30 bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <Clock className="h-5 w-5 text-primary/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Task Ricorrenti
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Crea attività che si ripetono automaticamente con frequenze
                  personalizzabili
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.3}>
              <div className="relative rounded-2xl border border-dashed border-primary/30 bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <ListChecks className="h-5 w-5 text-primary/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Subtask
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Suddividi le attività complesse in sotto-attività più
                  gestibili
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.4}>
              <div className="relative rounded-2xl border border-dashed border-primary/30 bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <Sparkles className="h-5 w-5 text-primary/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    AI Categorization
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Categorizzazione automatica dei task tramite intelligenza
                  artificiale
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.5}>
              <div className="relative rounded-2xl border border-dashed border-primary/30 bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <Sparkles className="h-5 w-5 text-primary/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Smart Suggestions
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Suggerimenti intelligenti basati sulle tue abitudini e
                  preferenze
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.6}>
              <div className="relative rounded-2xl border border-dashed border-primary/30 bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <Shield className="h-5 w-5 text-primary/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    2FA & Pattern Learning
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Autenticazione a due fattori e apprendimento dei pattern
                  comportamentali
                </p>
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
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-24 lg:max-w-5xl lg:grid-cols-3 lg:mx-auto">
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

              <ScrollAnimationWrapper delay={0.5}>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <CalendarClock
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {t("download.benefits.exclusiveFeatures.title")}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">
                      {t("download.benefits.exclusiveFeatures.description")}
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
                <Button className="rounded-full px-8" size="lg" asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.Gabry848Studio.Mytaskly&hl=en-US&ah=A0Ml8z3VsRUmRFkINxQ1zi8Pj68"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("download.cta.button")}
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
