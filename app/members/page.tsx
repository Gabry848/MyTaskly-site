"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWaitlistRegistration } from "@/hooks/use-waitlist-registration";
import { Calendar, Download, Star, Users, Zap, Mail } from "lucide-react";

export default function MembersPage() {
  const { isRegistered, hasAccess, logout, login } = useWaitlistRegistration();
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
        setLoginError("Email non valida. Controlla il formato dell'email.");
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
              <Mail className="h-6 w-6 text-primary" />
              <CardTitle>Accesso Area Membri</CardTitle>
            </div>
            <CardDescription>
              Inserisci la tua email per accedere all'area riservata
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
                {loginLoading ? "Accesso in corso..." : "Accedi"}
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
            <h1 className="text-2xl font-bold">Area Membri</h1>
            <p className="text-muted-foreground">Contenuto esclusivo per i membri della waitlist</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Logout
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
              <CardTitle>Benvenuto nella community esclusiva!</CardTitle>
            </div>
            <CardDescription>
              Grazie per esserti iscritto alla waitlist di MyTaskly. Ecco cosa puoi fare qui:
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Beta Preview</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                Accedi in anteprima alle funzionalità della beta di MyTaskly
              </p>
              <Button
                onClick={() => router.push('/early-access')}
                className="w-full mt-auto"
                variant="default"
              >
                Accedi Early Access
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Community</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                Partecipa alle discussioni con altri early adopters
              </p>
              <div className="mt-auto">
                <Badge variant="secondary">Prossimamente</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Feedback</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                Condividi il tuo feedback e influenza lo sviluppo
              </p>
              <Button
                onClick={() => router.push('/contact')}
                className="w-full mt-auto"
                variant="outline"
              >
                Invia Feedback
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Exclusive Updates */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle>Aggiornamenti Esclusivi</CardTitle>
            </div>
            <CardDescription>
              Le ultime novità sullo sviluppo di MyTaskly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Release Beta</h4>
              <p className="text-muted-foreground text-sm">
                La versione beta di MyTaskly è stata rilasciata con successo
                per i membri della waitlist.
              </p>
              <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">Completato - Settembre 2025</Badge>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">Chat Vocale Avanzata</h4>
              <p className="text-muted-foreground text-sm">
                Perfezionamento della chat vocale con IA per offrire
                la migliore esperienza di interazione naturale.
              </p>
              <Badge variant="outline" className="mt-2">Ottobre 2025</Badge>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">Lancio Play Store</h4>
              <p className="text-muted-foreground text-sm">
                Prima versione ufficiale di MyTaskly disponibile
                per il download su Google Play Store.
              </p>
              <Badge variant="outline" className="mt-2">Fine Ottobre 2025</Badge>
            </div>

            <div className="border-l-4 border-muted pl-4">
              <h4 className="font-semibold">App Store iOS</h4>
              <p className="text-muted-foreground text-sm">
                Pubblicazione dell'app MyTaskly sull'App Store di Apple
                per dispositivi iPhone e iPad.
              </p>
              <Badge variant="outline" className="mt-2">Novembre 2025</Badge>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}