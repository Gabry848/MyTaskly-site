import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import TermlyCMP from './components/TermlyCMP';
import Hero from "./components/Hero";
import AppComparison from './components/AppComparison';
import { Metadata } from 'next';

// Importazioni dinamiche per componenti non critici per il rendering iniziale
const WearYourStory = dynamic(() => import('./components/WearYourStory'), { ssr: true });
const FeatureCarousel = dynamic(() => import('./components/FeatureCarousel'), { ssr: true });
const PortfolioGrid = dynamic(() => import('./components/PortfolioGrid'), { ssr: true });
const Timeline = dynamic(() => import('./components/Timeline'), { ssr: true });
const Marquee = dynamic(() => import('./components/Marquee'), { ssr: true });

// Definisci l'UUID di Termly
const WEBSITE_UUID = process.env.NEXT_PUBLIC_TERMLY_UUID || '';

// Metadata specifici per la home page
export const metadata: Metadata = {
  title: 'MyTaskly - App Todo List Minimalista con IA',
  description: 'Organizza la tua vita con MyTaskly, l\'app Todo List minimalista potenziata dall\'intelligenza artificiale che semplifica la gestione delle tue attività quotidiane',
  alternates: {
    canonical: 'https://mytaskly.com',
  },
  openGraph: {
    title: 'MyTaskly - Rivoluziona la Tua Produttività con l\'IA',
    description: 'Scopri come MyTaskly, l\'app Todo List potenziata dall\'intelligenza artificiale, può trasformare il modo in cui organizzi le tue giornate',
  }
};

export default function Home() {
  return (
    <>
      <main className="w-full px-4 sm:px-6 lg:px-8">
        <Suspense fallback={null}>
          <TermlyCMP websiteUUID={WEBSITE_UUID} />
        </Suspense>

        {/* Sezione iniziale ad alta priorità con markup semantico migliorato */}
        <section id="home" aria-label="MyTaskly - Introduzione" className="py-8">
          <Hero />
        </section>
        
        {/* Componenti caricati dinamicamente con markup semantico */}
        <Suspense fallback={<div className="min-h-[200px]"></div>}>
          <section id="features" aria-label="Caratteristiche di MyTaskly" className="py-8">
            <WearYourStory />
            <FeatureCarousel />
            <PortfolioGrid />
          </section>
        </Suspense>
        
        {/* Sezione di confronto con altre app todo */}
        <Suspense fallback={<div className="min-h-[200px]"></div>}>
          <section id="comparison" aria-label="Confronto con altre app" className="py-8">
            <AppComparison />
          </section>
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[200px]"></div>}>
          <section id="about" aria-label="Chi siamo" className="py-8">
            <Timeline />
            <Marquee />
          </section>
        </Suspense>
      </main>
    </>
  )
}
