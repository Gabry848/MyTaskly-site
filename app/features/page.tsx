import { Metadata } from "next"
import ClientFeaturesPage from "../components/ClientFeaturesPage"

// Metadati SEO ottimizzati per la pagina delle funzionalità
export const metadata: Metadata = {
  title: 'Funzionalità | MyTaskly - Gestione Attività Intelligente',
  description: 'Scopri tutte le funzionalità avanzate di MyTaskly: liste intelligenti, promemoria contestuali, intelligenza artificiale e sincronizzazione multi-dispositivo per organizzare al meglio le tue attività.',
  alternates: {
    canonical: 'https://mytaskly.com/features',
  },
  openGraph: {
    title: 'Funzionalità di MyTaskly - App per la Gestione Attività con IA',
    description: 'MyTaskly incorpora funzionalità avanzate di intelligenza artificiale per una gestione delle attività intuitiva ed efficiente su tutti i tuoi dispositivi.',
    url: 'https://mytaskly.com/features',
    images: [
      {
        url: 'https://mytaskly.com/images/features-screenshot.png',
        width: 1200,
        height: 630,
        alt: 'Schermata delle funzionalità di MyTaskly',
      }
    ],
  },
  keywords: ['funzionalità mytaskly', 'gestione attività', 'app todo list', 'reminder intelligenti', 'sincronizzazione multi-dispositivo', 'organizzazione attività']
}

// Componente server-side per la pagina delle funzionalità
export default function FeaturesPage() {
  return (
    <ClientFeaturesPage />
  )
}
