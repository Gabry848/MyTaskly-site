"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useWaitlistRegistration } from "@/hooks/use-waitlist-registration";
import {
  Smartphone,
  Brain,
  Palette,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock
} from "lucide-react";

export default function EarlyAccessPage() {
  const { isRegistered, hasAccess } = useWaitlistRegistration();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>Accesso Negato</CardTitle>
            <CardDescription>
              Devi essere iscritto alla waitlist per accedere all'early access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/#download')}>
              Iscriviti alla Waitlist
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const developmentProgress = [
    { phase: "Concept & Design", completed: true, progress: 100 },
    { phase: "Core Features", completed: true, progress: 100 },
    { phase: "AI Integration", completed: false, progress: 75 },
    { phase: "Beta Testing", completed: false, progress: 30 },
    { phase: "App Store Review", completed: false, progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-start mb-12">
          <Button variant="outline" onClick={() => router.push('/members')} className="gap-2 mr-4">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Area Membri
          </Button>
          <div className="text-center flex-1">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Early Access Esclusivo
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Il Futuro della Produttività è Qui
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                Crittografia end-to-end e controllo completo sui tuoi dati,
                con possibilità di backup locali e sincronizzazione sicura.
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
              Sei tra i primi ad avere accesso alla versione beta di MyTaskly
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
                La versione beta <strong>e` disponibile</strong> ora! Scarica l'app
              </p>
              <a href="https://expo.dev/artifacts/eas/c8eGpLxxhfMM6JkLmScnqG.apk">
                <Button size="lg" className="gap-2">
                  <Shield className="h-5 w-5" />
                  Download Beta
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

      </section>
    </div>
  );
}