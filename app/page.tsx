import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import TermlyCMP from './components/TermlyCMP';
import Hero from "./components/Hero";
import LaunchBanner from "./components/LaunchBanner";

// Importazioni dinamiche per componenti non critici per il rendering iniziale
const WearYourStory = dynamic(() => import('./components/WearYourStory'), { ssr: true });
const FeatureCarousel = dynamic(() => import('./components/FeatureCarousel'), { ssr: true });
const PortfolioGrid = dynamic(() => import('./components/PortfolioGrid'), { ssr: true });
const Timeline = dynamic(() => import('./components/Timeline'), { ssr: true });
const Marquee = dynamic(() => import('./components/Marquee'), { ssr: true });
const WaitlistForm = dynamic(() => import('./components/WaitlistForm'), { ssr: true });

// Definisci l'UUID di Termly
const WEBSITE_UUID = process.env.NEXT_PUBLIC_TERMLY_UUID || '';

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <TermlyCMP websiteUUID={WEBSITE_UUID} />
      </Suspense>
      
      {/* Sezione iniziale ad alta priorità */}
      <div id="home">
        <Hero />
        <LaunchBanner />
      </div>
      
      {/* Componenti caricati dinamicamente */}
      <Suspense fallback={<div className="min-h-[200px]"></div>}>
        <div id="features">
          <WearYourStory />
          <FeatureCarousel />
          <PortfolioGrid />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[200px]"></div>}>
        <div id="about">
          <Timeline />
          <Marquee />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[200px]"></div>}>
        <div id="download">
          <WaitlistForm />
        </div>
      </Suspense>
    </>
  )
}
