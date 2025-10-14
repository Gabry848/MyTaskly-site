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
import {
  Smartphone,
  Brain,
  Palette,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  Mail
} from "lucide-react";

export default function EarlyAccessPage() {
  const { isRegistered, hasAccess, login } = useWaitlistRegistration();
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
        setLoginError("Email non trovata nella waitlist. Registrati prima di accedere.");
      }
    } catch (error) {
      setLoginError("Errore durante il login. Riprova.");
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
              <CardTitle>Accesso Early Access</CardTitle>
            </div>
            <CardDescription>
              Inserisci la tua email per accedere all'early access di MyTaskly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="la-tua-email@esempio.com"
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
                {loginLoading ? "Verifica in corso..." : "Accedi"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const developmentProgress = [
    { phase: "Concept & Design", completed: true, progress: 100 },
    { phase: "Core Features", completed: true, progress: 90 },
    { phase: "AI Integration", completed: false, progress: 50 },
    { phase: "Beta Testing", completed: false, progress: 20 },
    { phase: "App Store Review", completed: false, progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
          <Button variant="outline" onClick={() => router.push('/members')} className="gap-2 mb-6 md:mb-0 md:mr-4 self-start">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Area Membri
          </Button>
          <div className="text-center md:flex-1">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Early Access Esclusivo
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Il Futuro della Produttività è Qui
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri in anteprima le funzionalità rivoluzionarie di MyTaskly prima del lancio ufficiale
            </p>
          </div>
        </div>

        {/* Development Progress */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Stato dello Sviluppo
            </CardTitle>
            <CardDescription>
              Segui i progressi in tempo reale dello sviluppo di MyTaskly
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
                <CardTitle>AI Assistente Personale</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Un assistente IA che impara dalle tue abitudini e suggerisce automaticamente
                come organizzare al meglio la tua giornata.
              </p>
              <Badge variant="outline">In Sviluppo</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Privacy Avanzata</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Crittografia end-to-end e controllo completo sui tuoi dati
                e sincronizzazione sicura.
              </p>
              <Badge variant="outline">Completato</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Smartphone className="h-6 w-6 text-primary" />
                <CardTitle>Sync Cross-Platform</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Sincronizzazione istantanea tra tutti i tuoi dispositivi con
                supporto offline e conflitti risolti automaticamente.
              </p>
              <Badge variant="outline">Completato</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Beta Access Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Accesso Beta Esclusivo</CardTitle>
            <CardDescription>
              Sei tra i primi ad avere accesso alla versione beta di MyTaskly!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">2025</div>
                <div className="text-sm text-muted-foreground">Anno di Lancio</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">11</div>
                <div className="text-sm text-muted-foreground">Mesi di Sviluppo</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Funzionalità</div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                La versione beta <strong>è disponibile</strong> ora su Google Play Store!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => window.open('https://play.google.com/apps/internaltest/4701407835802258178', '_blank')}
                >
                  <Shield className="h-5 w-5" />
                  1. Diventa Tester
                </Button>
                <Button
                  size="lg"
                  className="gap-2"
                  variant="outline"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.Gabry848Studio.Mytaskly&hl=en-US&ah=A0Ml8z3VsRUmRFkINxQ1zi8Pj68', '_blank')}
                >
                  <Smartphone className="h-5 w-5" />
                  2. Scarica l'App
                </Button>
              </div>

              {/* Installation Guide */}
              <div className="mt-6 p-4 bg-background/60 rounded-lg border border-border/50">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Come Accedere alla Beta
                </h3>
                <ol className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                    <span>Clicca sul pulsante "Diventa Tester" per iscriverti al programma di test interno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                    <span>Accetta l'invito a diventare tester dell'app MyTaskly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
                    <span>Clicca sul pulsante "Scarica l'App" per accedere alla pagina del Play Store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">4</span>
                    <span>Installa l'app, registrati e... enjoy! 🎉</span>
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