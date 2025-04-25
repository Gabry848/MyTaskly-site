"use client";

import Hero from "./components/Hero"
import LaunchBanner from "./components/LaunchBanner"
import WearYourStory from "./components/WearYourStory" // This is now "Organize Your Life" content
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
// import ContactForm from "./components/ContactForm" // Keep commented or remove if not used elsewhere
// import NewsletterSubscribe from "./components/NewsletterSubscribe" // Remove this line
import Testimonials from "./components/Testimonials"
import WaitlistForm from "./components/WaitlistForm" // Import the new component
import { Analytics } from "@vercel/analytics/react"
import { useLanguage } from "@/app/contexts/LanguageContext"; // Keep this import if needed elsewhere
import TermlyCMP from './components/TermlyCMP'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Suspense } from 'react';

// Definisci l'UUID di Termly - Se non hai un vero UUID, puoi usarne uno vuoto
const WEBSITE_UUID = process.env.NEXT_PUBLIC_TERMLY_UUID || '';

export default function Home() {
  const { t } = useLanguage(); // Keep this if used elsewhere in the component
  
  return (
    <>
     <Suspense fallback={null}>
       <TermlyCMP websiteUUID={WEBSITE_UUID} />
     </Suspense>
      <div id="home">
        <Hero />
        <LaunchBanner />
      </div>
      <div id="features">
        <WearYourStory />
        <FeatureCarousel />
        <PortfolioGrid />
      </div>
      <div id="about">
        <Timeline />
        <Marquee />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="download">
        {/* Usando il nuovo componente WaitlistForm */}
        <WaitlistForm />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
