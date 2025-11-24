import { Metadata } from "next"
import { ArrowUpRight, Code, HeartHandshake, Plug, ShieldCheck, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "MyTaskly open source e MCP",
  description:
    "Scopri perché MyTaskly è open source, nata dal lavoro di un ragazzo di 16 anni, e come l'MCP ufficiale permette di integrarla ovunque.",
}

const openSourceBenefits = [
  {
    title: "Trasparenza totale",
    description:
      "Il codice è aperto, verificabile e migliorabile da chiunque: ogni scelta è alla luce del sole e costruita insieme alla community.",
    icon: ShieldCheck,
  },
  {
    title: "Velocità di sviluppo",
    description:
      "Feature e fix arrivano più in fretta grazie ai contributi condivisi e a una roadmap che la community può plasmare.",
    icon: Sparkles,
  },
  {
    title: "Controllo e personalizzazione",
    description:
      "Puoi forkarla, adattarla al tuo flusso e ridistribuirla: MyTaskly nasce per essere modificata e integrata liberamente.",
    icon: Code,
  },
  {
    title: "Affidabilità a prova di community",
    description:
      "Bug, security fix e ottimizzazioni vengono monitorati da chi usa davvero l'app, evitando lock-in e sorprese nascoste.",
    icon: HeartHandshake,
  },
]

const repoLinks = [
  {
    title: "App & interfaccia",
    description: "Frontend minimale open source per mobile e web, pronto da clonare e personalizzare.",
    href: "#",
  },
  {
    title: "Backend & API",
    description: "Tutto il motore server di MyTaskly, aperto per self-hosting e contribuzioni.",
    href: "#",
  },
  {
    title: "MyTaskly MCP",
    description: "Il connettore Model Context Protocol per portare MyTaskly in qualsiasi agente o stack personalizzato.",
    href: "#",
  },
]

const mcpHighlights = [
  {
    title: "Integra ovunque",
    description:
      "Collega MyTaskly a IDE, chatbot, automazioni o dashboard: l'MCP ufficiale espone comandi e memoria operativa ovunque serva.",
    icon: Plug,
  },
  {
    title: "Setup rapido",
    description: "Configura l'MCP con pochi parametri, scegliendo le API che vuoi abilitare e il livello di permessi.",
    icon: Sparkles,
  },
  {
    title: "Pensato per builder",
    description: "Documentazione chiara e esempi pronti permettono a team e maker di sperimentare senza attriti.",
    icon: Code,
  },
]

export default function OpenSourcePage() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_bottom,_rgba(12,18,39,0.12),transparent_45%)]" />

      <section className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-12 pt-16 sm:gap-8 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Open Source • MCP ufficiale
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
              MyTaskly è 100% open source, creata da un ragazzo di 16 anni dopo 11 mesi di lavoro quotidiano.
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Il progetto è nato e cresciuto grazie alla community: codice aperto, feedback costante e un MCP ufficiale per
              integrarla ovunque. Entrare in MyTaskly significa contribuire a uno spazio costruito con passione e trasparenza.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-semibold text-primary">
                Nessun lock-in
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 font-semibold text-foreground">
                Community-driven
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-4 py-2 font-semibold text-emerald-500">
                MCP pronto all'uso
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background/40 p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Story</p>
                <p className="text-2xl font-bold text-foreground">11 mesi di lavoro, 16 anni di visione</p>
              </div>
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
            <p className="mt-4 text-muted-foreground">
              MyTaskly nasce dall'idea di dare a tutti uno spazio minimale e vocale per organizzare la vita. Il codice aperto è la
              promessa che chiunque può verificarlo, migliorarlo e portarlo oltre con il proprio contributo.
            </p>
            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-center gap-2 rounded-xl border border-primary/10 bg-primary/5 px-4 py-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Licenza aperta per fork e self-hosting.</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-primary/10 bg-primary/5 px-4 py-3">
                <HeartHandshake className="h-5 w-5 text-primary" />
                <span>Issue e roadmap pubbliche: la community decide le priorità.</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-primary/10 bg-primary/5 px-4 py-3">
                <Plug className="h-5 w-5 text-primary" />
                <span>MCP ufficiale per portare MyTaskly dove serve.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-muted/40 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Perché open source</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Vantaggi concreti per chi costruisce</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Condividere il codice significa crescere più in fretta. MyTaskly resta minimal e affidabile proprio perché ogni
                scelta può essere discussa, verificata e migliorata.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:scale-[1.01] hover:shadow-md"
            >
              Vai alle repository
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {openSourceBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 rounded-2xl border border-border/60 bg-background px-5 py-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Model Context Protocol</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">L'MCP ufficiale di MyTaskly</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Vuoi portare MyTaskly in un agente, in un IDE o in una pipeline automatica? L'MCP ufficiale espone task, note e
              routine con interfacce standard e permission chiare.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 self-start rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:scale-[1.01] hover:bg-primary/10"
          >
            Scarica l'MCP
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {mcpHighlights.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-background px-5 py-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-500">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-background to-background/40 p-6 shadow-md">
          <h3 className="text-xl font-semibold text-foreground">Come iniziare</h3>
          <ul className="mt-3 grid gap-2 text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3">
              <Plug className="h-5 w-5 text-primary" />
              Installa l'MCP ufficiale di MyTaskly nel tuo orchestratore o agente preferito.
            </li>
            <li className="flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3">
              <Code className="h-5 w-5 text-primary" />
              Configura le credenziali e scegli quali endpoint esporre (task, note, routine, memoria condivisa).
            </li>
            <li className="flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Imposta permessi granulari e log per audit e debugging.
            </li>
            <li className="flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3">
              <HeartHandshake className="h-5 w-5 text-primary" />
              Condividi feedback e PR: l'MCP migliora grazie alla community open source.
            </li>
          </ul>
        </div>
      </section>

      <section className="relative bg-muted/40 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Repository ufficiali</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Scegli dove contribuire</h2>
            <p className="max-w-2xl text-muted-foreground">
              MyTaskly resta aperta e gratuita perché chi la usa partecipa attivamente. Troverai tutto nelle repository: inserisci
              le tue pull request, proponi idee o porta il codice nel tuo stack.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {repoLinks.map((repo) => (
              <a
                key={repo.title}
                href={repo.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-background px-5 py-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Open source
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{repo.title}</h3>
                  <p className="text-muted-foreground">{repo.description}</p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3">
                  Apri la repo
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
