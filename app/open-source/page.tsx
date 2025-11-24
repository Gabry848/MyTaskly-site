import Link from "next/link"
import { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import { ArrowUpRight, GitBranch, HeartHandshake, PlugZap } from "lucide-react"

export const metadata: Metadata = generateMetadata({
  title: "MyTaskly è open source e pronta per il tuo stack",
  description:
    "Scopri perché MyTaskly è open source, il lavoro di 11 mesi di un giovane sviluppatore di 16 anni, e come integrare l'MCP dedicato ovunque ti serva.",
  path: "/open-source",
  keywords: ["open source", "mcp", "integrazioni", "community", "repository"],
})

const advantages = [
  {
    title: "Trasparenza totale",
    description:
      "Codice aperto e consultabile da chiunque: sai sempre come vengono gestiti dati, algoritmi e modelli IA, senza segreti nascosti.",
  },
  {
    title: "Affidabilità di comunità",
    description:
      "Chiunque può proporre miglioramenti, segnalare bug e contribuire con nuove idee: MyTaskly cresce più velocemente grazie a contributi reali.",
  },
  {
    title: "Personalizzazione libera",
    description:
      "Forka, adatta e distribuisci la tua versione: l'open source ti permette di creare esattamente l'esperienza di produttività che cerchi.",
  },
]

const repos = [
  {
    title: "Repository principale di MyTaskly",
    description: "Il cuore dell'app, pronta per essere studiata, forkata e migliorata dalla community.",
    href: "#",
  },
  {
    title: "Interfaccia web e landing",
    description: "La base del sito e dell'esperienza web: perfetta per contribuire a UI, accessibilità e performance.",
    href: "#",
  },
  {
    title: "MCP di MyTaskly",
    description: "Il connettore ufficiale per integrare MyTaskly in automazioni, agent e strumenti personalizzati.",
    href: "#",
  },
]

export default function OpenSourcePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:py-20 lg:py-24 relative">
          <div className="inline-flex items-center gap-3 self-start rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-primary shadow-sm">
            <span className="inline-flex items-center gap-2 text-foreground">
              <GitBranch className="h-4 w-4" />
              Open Source senza compromessi
            </span>
            <span className="h-4 w-px bg-border/60" aria-hidden="true" />
            <span className="text-muted-foreground">creata da un 16enne in 11 mesi</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.12em] text-primary">Mytaskly è aperta a tutti</p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                MyTaskly è <span className="text-gradient">open source</span>,
                sviluppata in 11 mesi da un ragazzo di 16 anni e pronta per essere migliorata da chiunque.
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Abbiamo scelto l'open source per rendere trasparente ogni scelta tecnologica e invitare la community a costruire
                insieme la migliore esperienza di produttività vocale. Ogni commit racconta la determinazione di chi ha dedicato
                quasi un anno per portare questa visione alla vita.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#repos"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Esplora le repository
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#mcp"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-card/80"
                >
                  Scopri l'MCP ufficiale
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 shadow-xl backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_25%)]" aria-hidden />
              <div className="relative space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">Perché apriamo il codice</p>
                <h2 className="text-2xl font-bold leading-snug">Trasparenza, fiducia e integrazione ovunque</h2>
                <p className="text-muted-foreground">
                  MyTaskly nasce come progetto personale di un sedicenne e diventa una piattaforma aperta: questo garantisce
                  revisione pubblica, miglioramenti continui e la libertà di integrare l'assistente vocale nei tuoi flussi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">Community-first</span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">Licenza aperta</span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">MCP incluso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:py-20 lg:py-24">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.12em] text-primary">Vantaggi reali</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Perché MyTaskly è open source</h2>
          <p className="text-lg text-muted-foreground">
            Rendere pubblica la base di codice è la scelta più coerente con la nostra missione: offrire un assistente vocale di
            produttività etico, controllabile e potenziato dalla forza della community.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-6 shadow-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-3">
                <h3 className="text-xl font-semibold">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="mcp" className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.2fr,0.8fr] lg:py-24 lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <PlugZap className="h-4 w-4" /> MCP ufficiale
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">Integra MyTaskly ovunque grazie all'MCP</h2>
            <p className="text-lg text-muted-foreground">
              L'MCP di MyTaskly rende l'assistente accessibile da agent, workflow personalizzati e tool interni. È open source,
              documentato e pronto per essere adattato a qualsiasi stack, dal tuo CRM alle automazioni no-code.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm">
                <p className="text-sm font-semibold text-foreground">Integrazione immediata</p>
                <p className="text-sm text-muted-foreground">
                  Endpoint chiari e esempi già pronti per collegare MyTaskly a bot, dashboard e flussi vocali.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm">
                <p className="text-sm font-semibold text-foreground">Contributi benvenuti</p>
                <p className="text-sm text-muted-foreground">
                  Issue, PR e proposte di nuove capability MCP sono incoraggiate: la community guida la roadmap.
                </p>
              </div>
            </div>
            <Link
              href="#repos"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Vai al repository MCP
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.14),transparent_25%)]" aria-hidden />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Dal codice al tuo ecosistema</p>
                  <p className="text-xs text-muted-foreground">Open source significa libertà di integrare senza barriere</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                  SDK e esempi pronti all'uso per agent AI e workflow vocali.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                  Documentazione aperta e migliorabile via PR dalla community.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                  Compatibilità pensata per cloud, self-hosting e tool no-code.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="repos" className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:py-20 lg:py-24">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.12em] text-primary">Repository pubbliche</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Contribuisci, studia, integra</h2>
          <p className="text-lg text-muted-foreground">
            Troverai il codice aperto su repository dedicate: sostituisci i link placeholder con quelli ufficiali e inizia a
            contribuire. Ogni issue o PR aiuta un giovane founder di 16 anni a crescere insieme al progetto.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-6 shadow-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col gap-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  <GitBranch className="h-4 w-4" /> Repo aperta
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{repo.title}</h3>
                  <p className="text-sm text-muted-foreground">{repo.description}</p>
                </div>
                <Link
                  href={repo.href}
                  className="relative inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:translate-x-1"
                >
                  Apri la repository
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/70 p-6 text-center shadow-md">
          <p className="text-lg font-semibold text-foreground">MyTaskly nasce dalla passione di un sedicenne</p>
          <p className="mt-2 text-muted-foreground">
            Dopo 11 mesi di lavoro costante, il codice è aperto per permettere a chiunque di verificarlo, migliorarlo e
            integrarlo. Se ami la produttività open source, questo è il momento di unirti.
          </p>
        </div>
      </section>
    </div>
  )
}
