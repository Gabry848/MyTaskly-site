"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWaitlistRegistration } from "@/hooks/use-waitlist-registration";
import { useLanguage } from "@/app/contexts/LanguageContext";
import {
  Smartphone,
  Brain,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function EarlyAccessClient() {
  const { isRegistered, hasAccess, login } = useWaitlistRegistration();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const success = await login(email);
      if (success) {
        setEmail("");
      } else {
        setLoginError(t("earlyAccess.login.errorNotFound"));
      }
    } catch (error) {
      setLoginError(t("earlyAccess.login.errorGeneric"));
    } finally {
      setLoginLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isRegistered || !hasAccess()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center gap-2 justify-center">
              <Sparkles className="h-6 w-6 text-primary" />
              <CardTitle>{t("earlyAccess.login.title")}</CardTitle>
            </div>
            <CardDescription>
              {t("earlyAccess.login.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("earlyAccess.login.emailLabel")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("earlyAccess.login.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loginLoading}
                />
              </div>
              {loginError && (
                <p className="text-sm text-red-600">{loginError}</p>
              )}
              <Button
                type="submit"
                className="w-full"
                disabled={loginLoading || !email.trim()}
              >
                {loginLoading ? t("earlyAccess.login.buttonLoading") : t("earlyAccess.login.button")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const developmentProgress = [
    { phase: t("earlyAccess.progress.phase1"), completed: true, progress: 100 },
    { phase: t("earlyAccess.progress.phase2"), completed: true, progress: 90 },
    { phase: t("earlyAccess.progress.phase3"), completed: false, progress: 50 },
    { phase: t("earlyAccess.progress.phase4"), completed: false, progress: 20 },
    { phase: t("earlyAccess.progress.phase5"), completed: false, progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
          <Button variant="outline" onClick={() => router.push('/members')} className="gap-2 mb-6 md:mb-0 md:mr-4 self-start">
            <ArrowRight className="h-4 w-4 rotate-180" />
            {t("earlyAccess.backButton")}
          </Button>
          <div className="text-center md:flex-1">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              {t("earlyAccess.badge")}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("earlyAccess.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("earlyAccess.hero.description")}
            </p>
          </div>
        </div>

        {/* Development Progress */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {t("earlyAccess.progress.title")}
            </CardTitle>
            <CardDescription>
              {t("earlyAccess.progress.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {developmentProgress.map((phase, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {phase.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className={phase.completed ? "text-foreground" : "text-muted-foreground"}>
                      {phase.phase}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {phase.progress}%
                  </span>
                </div>
                <Progress value={phase.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Exclusive Features Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                <CardTitle>{t("earlyAccess.features.ai.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t("earlyAccess.features.ai.description")}
              </p>
              <Badge variant="outline">{t("earlyAccess.features.ai.badge")}</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>{t("earlyAccess.features.privacy.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t("earlyAccess.features.privacy.description")}
              </p>
              <Badge variant="outline">{t("earlyAccess.features.privacy.badge")}</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Smartphone className="h-6 w-6 text-primary" />
                <CardTitle>{t("earlyAccess.features.sync.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t("earlyAccess.features.sync.description")}
              </p>
              <Badge variant="outline">{t("earlyAccess.features.sync.badge")}</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Beta Access Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t("earlyAccess.beta.title")}</CardTitle>
            <CardDescription>
              {t("earlyAccess.beta.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{t("earlyAccess.beta.stat1.value")}</div>
                <div className="text-sm text-muted-foreground">{t("earlyAccess.beta.stat1.label")}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{t("earlyAccess.beta.stat2.value")}</div>
                <div className="text-sm text-muted-foreground">{t("earlyAccess.beta.stat2.label")}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{t("earlyAccess.beta.stat3.value")}</div>
                <div className="text-sm text-muted-foreground">{t("earlyAccess.beta.stat3.label")}</div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                {t("earlyAccess.beta.available")}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => window.open('https://groups.google.com/g/mytaskly-testers', '_blank')}
                >
                  <Sparkles className="h-5 w-5" />
                  Unisciti al Google Group
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.Gabry848Studio.Mytaskly', '_blank')}
                >
                  <Smartphone className="h-5 w-5" />
                  Scarica dal Play Store
                </Button>
              </div>

              {/* Installation Guide */}
              <div className="mt-6 p-4 bg-background/60 rounded-lg border border-border/50">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  {t("earlyAccess.guide.title")}
                </h3>
                <ol className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                    <span>Clicca su "Unisciti al Google Group" e nella pagina clicca sul pulsante "Unisciti al gruppo" in alto a sinistra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                    <span>Clicca su "Scarica dal Play Store" per installare l'app MyTaskly sul tuo dispositivo Android</span>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

      </section>
    </div>
  );
}
