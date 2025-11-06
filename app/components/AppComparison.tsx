"use client"

import { useEffect, useState } from "react"
import { Check, HelpCircle } from "lucide-react"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AppComparison() {
  const { t } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  // Necessario per evitare errori di idratazione con componenti client-side
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null
  
  // Features principali da confrontare - ridotte e semplificate
  const features = [
    {
      name: "Chat vocale IA",
      tooltip: "Parla con l'assistente e genera attività con la voce",
      mytaskly: true,
      todoist: false,
      microsoft: false,
      ticktick: false,
    },
    {
      name: "Briefing intelligente",
      tooltip: "Riepilogo giornaliero personalizzato per restare allineato",
      mytaskly: true,
      todoist: false,
      microsoft: false,
      ticktick: true,
    },
    {
      name: "Automazioni IA",
      tooltip: "Pianificazione automatica e suggerimenti contestuali",
      mytaskly: true,
      todoist: false,
      microsoft: false,
      ticktick: false,
    },
    {
      name: "Note vocali istantanee",
      tooltip: "Trascrizioni accurate e comprensione multi-lingua",
      mytaskly: true,
      todoist: false,
      microsoft: true,
      ticktick: true,
    },
    {
      name: "Modalità offline",
      tooltip: "Funziona anche senza connessione",
      mytaskly: true,
      todoist: true,
      microsoft: true,
      ticktick: true,
    }
  ]

  // Array di competitors per visualizzazione mobile
  const competitors = [
    { name: "MyTaskly", isPrimary: true },
    { name: "Todoist", isPrimary: false },
    { name: "Microsoft", isPrimary: false },
    { name: "TickTick", isPrimary: false }
  ]

  return (
    <section className="w-full py-12 bg-secondary/5">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Perché l'assistente IA di MyTaskly è diverso
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Confronta le capacità vocali e intelligenti di MyTaskly con le app todo più popolari
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.1}>
          {/* Versione desktop */}
          <div className="hidden md:block">
            <div className="bg-background rounded-xl p-6 shadow-lg border border-border/30">
              <h3 className="text-xl font-semibold mb-4">Funzionalità principali</h3>
              
              <TooltipProvider>
                <div className="space-y-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex items-center w-1/3">
                        <span className="text-foreground font-medium">{feature.name}</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 text-muted-foreground ml-1 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm">{feature.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      
                      <div className="flex justify-between w-2/3 space-x-2">
                        <div className="flex-1 text-center">
                          {feature.mytaskly && <Check className="h-5 w-5 text-primary mx-auto" />}
                        </div>
                        <div className="flex-1 text-center text-muted-foreground">
                          {feature.todoist && <Check className="h-5 w-5 mx-auto opacity-60" />}
                        </div>
                        <div className="flex-1 text-center text-muted-foreground">
                          {feature.microsoft && <Check className="h-5 w-5 mx-auto opacity-60" />}
                        </div>
                        <div className="flex-1 text-center text-muted-foreground">
                          {feature.ticktick && <Check className="h-5 w-5 mx-auto opacity-60" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TooltipProvider>
              
              <div className="mt-3 flex justify-between text-sm text-muted-foreground">
                <div className="w-1/3"></div>
                <div className="flex justify-between w-2/3 px-2">
                  <div className="flex-1 text-center text-primary font-semibold">MyTaskly</div>
                  <div className="flex-1 text-center">Todoist</div>
                  <div className="flex-1 text-center">Microsoft</div>
                  <div className="flex-1 text-center">TickTick</div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/50">
                <Link href="/features" passHref>
                  <Button className="rounded-full mx-auto block" size="sm">
                    Scopri tutte le funzionalità
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Versione mobile */}
          <div className="md:hidden">
            <div className="bg-background rounded-xl p-5 shadow-lg border border-border/30">
              <h3 className="text-lg font-semibold mb-4 text-center">Le nostre funzionalità</h3>
              
              <div className="space-y-4">
                {/* Header della tabella mobile */}
                <div className="grid grid-cols-5 gap-1 text-center text-xs border-b pb-2">
                  <div className="col-span-2 text-left pl-1 font-medium">Funzionalità</div>
                  {competitors.map((comp, i) => (
                    <div key={i} className={`${comp.isPrimary ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                      {comp.name}
                    </div>
                  ))}
                </div>
                
                {/* Righe della tabella mobile */}
                {features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-5 gap-1 items-center py-2 border-b border-border/20">
                    <div className="col-span-2 flex items-center">
                      <span className="text-sm text-foreground">{feature.name}</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-3 w-3 text-muted-foreground ml-1 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs max-w-[200px]">{feature.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    
                    <div className="text-center">{feature.mytaskly && <Check className="h-4 w-4 text-primary mx-auto" />}</div>
                    <div className="text-center text-muted-foreground">{feature.todoist && <Check className="h-4 w-4 mx-auto opacity-60" />}</div>
                    <div className="text-center text-muted-foreground">{feature.microsoft && <Check className="h-4 w-4 mx-auto opacity-60" />}</div>
                    <div className="text-center text-muted-foreground">{feature.ticktick && <Check className="h-4 w-4 mx-auto opacity-60" />}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-2">
                <Link href="/features" passHref>
                  <Button className="w-full rounded-full text-sm" size="sm">
                    Scopri tutte le funzionalità
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={0.2}>
          <div className="mt-8 text-center">
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              MyTaskly combina semplicità ed efficienza in un'unica app. Design minimalista, 
              funzionalità potenti, assistenza IA per organizzare la tua vita quotidiana.
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}