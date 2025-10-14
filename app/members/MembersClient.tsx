"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWaitlistRegistration } from "@/hooks/use-waitlist-registration";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { Calendar, Download, Star, Users, Zap, Mail } from "lucide-react";

export default function MembersClient() {
  const { isRegistered, hasAccess, logout, login } = useWaitlistRegistration();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Simula un caricamento per evitare flash di contenuto
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const success = await login(email);
      if (success) {
        // Login riuscito, la pagina si ricaricherà automaticamente
        setEmail("");
      } else {
        setLoginError(t("members.login.errorInvalid"));
      }
    } catch (error) {
      setLoginError(t("members.login.errorGeneric"));
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
              <Mail className="h-6 w-6 text-primary" />
              <CardTitle>{t("members.login.title")}</CardTitle>
            </div>
            <CardDescription>
              {t("members.login.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("members.login.emailLabel")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("members.login.emailPlaceholder")}
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
                {loginLoading ? t("members.login.buttonLoading") : t("members.login.button")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{t("members.header.title")}</h1>
            <p className="text-muted-foreground">{t("members.header.subtitle")}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            {t("members.header.logout")}
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <CardTitle>{t("members.welcome.title")}</CardTitle>
            </div>
            <CardDescription>
              {t("members.welcome.description")}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{t("members.card.betaPreview.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                {t("members.card.betaPreview.description")}
              </p>
              <Button
                onClick={() => router.push('/early-access')}
                className="w-full mt-auto"
                variant="default"
              >
                {t("members.card.betaPreview.button")}
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{t("members.card.community.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                {t("members.card.community.description")}
              </p>
              <div className="mt-auto">
                <Badge variant="secondary">{t("members.card.community.badge")}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{t("members.card.feedback.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                {t("members.card.feedback.description")}
              </p>
              <Button
                onClick={() => router.push('/contact')}
                className="w-full mt-auto"
                variant="outline"
              >
                {t("members.card.feedback.button")}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Exclusive Updates */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle>{t("members.updates.title")}</CardTitle>
            </div>
            <CardDescription>
              {t("members.updates.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">{t("members.updates.betaRelease.title")}</h4>
              <p className="text-muted-foreground text-sm">
                {t("members.updates.betaRelease.description")}
              </p>
              <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">{t("members.updates.betaRelease.badge")}</Badge>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">{t("members.updates.playStoreBeta.title")}</h4>
              <p className="text-muted-foreground text-sm">
                {t("members.updates.playStoreBeta.description")}
              </p>
              <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-700 border-blue-200">{t("members.updates.playStoreBeta.badge")}</Badge>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">{t("members.updates.voiceChat.title")}</h4>
              <p className="text-muted-foreground text-sm">
                {t("members.updates.voiceChat.description")}
              </p>
              <Badge variant="outline" className="mt-2">{t("members.updates.voiceChat.badge")}</Badge>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">{t("members.updates.playStorePublic.title")}</h4>
              <p className="text-muted-foreground text-sm">
                {t("members.updates.playStorePublic.description")}
              </p>
              <Badge variant="outline" className="mt-2">{t("members.updates.playStorePublic.badge")}</Badge>
            </div>

            <div className="border-l-4 border-muted pl-4">
              <h4 className="font-semibold">{t("members.updates.appStore.title")}</h4>
              <p className="text-muted-foreground text-sm">
                {t("members.updates.appStore.description")}
              </p>
              <Badge variant="outline" className="mt-2">{t("members.updates.appStore.badge")}</Badge>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
