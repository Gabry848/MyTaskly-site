import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "./contexts/LanguageContext"
import { WaitlistRegistrationProvider } from "../hooks/use-waitlist-registration"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollReset from "./components/ScrollReset"
import type React from "react"
import Script from "next/script"

// Configurazione ottimizzata del font con preload e dimensione ridotta
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
  // Limita il set di caratteri per migliorare le performance di caricamento
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s | MyTaskly - App Todo List Minimalista',
    default: 'MyTaskly - App Todo List Minimalista con IA',
  },
  description: "MyTaskly è un'app Todo List elegante che integra l'intelligenza artificiale per semplificare la gestione delle attività quotidiane. Disponibile per iOS e Android.",
  generator: 'v0.dev',
  applicationName: 'MyTaskly',
  keywords: ['todo app', 'applicazione todo', 'task management', 'produttività', 'intelligenza artificiale', 'IA todo', 'design minimalista', 'gestione attività', 'app organizzazione', 'reminder', 'promemoria', 'app mobile', 'migliore app to-do', 'organizzazione personale'],
  authors: [{ name: 'Gabriele Cipriani', url: 'https://mytaskly.com/about' }],
  creator: 'Gabriele Cipriani',
  publisher: {
    '@type': 'Organization',
    name: 'MyTaskly Team',
    logo: {
      '@type': 'ImageObject',
      url: '/images/mytaskly-logo.png', // Assicurati che questo file esista in /public
      // Puoi aggiungere width e height se conosci le dimensioni esatte
      // width: 600, 
      // height: 600,
    }
  },
  alternates: {
    canonical: 'https://mytaskly.com',
    languages: {
      'it-IT': 'https://mytaskly.com/it',
      'en-US': 'https://mytaskly.com/en',
    },
    types: {
      'application/rss+xml': 'https://mytaskly.com/feed.xml',
    }
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://mytaskly.com'),
  openGraph: {
    title: 'MyTaskly - App Todo List Minimalista con IA',
    description: "MyTaskly è un'app Todo List elegante che integra l'intelligenza artificiale per semplificare la gestione delle attività quotidiane",
    url: 'https://mytaskly.com',
    siteName: 'MyTaskly',
    images: [
      {
        url: 'https://mytaskly.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyTaskly App Preview',
      },
      {
        // Immagine ottimizzata per mobile
        url: 'https://mytaskly.com/images/og-image-mobile.png', 
        width: 600,
        height: 600,
        alt: 'MyTaskly App Preview',
      }
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyTaskly - App Todo List con IA',
    description: "App Todo List elegante che integra l'intelligenza artificiale",
    creator: '@mytaskly',
    images: ['https://mytaskly.com/images/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    }
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'productivity',
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/app/mytaskly/id123456789',
      app_name: 'MyTaskly',
    },
    android: {
      package: 'com.mytaskly.app',
      app_name: 'MyTaskly',
    },
    web: {
      url: 'https://mytaskly.com',
      should_fallback: true,
    },
  },
  // Aggiunto campo manifest per migliorare l'esperienza PWA
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        {/* Precarica risorse critiche */}
        <link
          rel="preload"
          href="/images/video-poster.png"
          as="image"
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          href="/fonts/custom-font.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Aggiunta di hint per preconnessione a domini di risorse esterne usate frequentemente */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.vercel-insights.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        {/* Script Schema.org per dati strutturati */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "MyTaskly",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "iOS, Android",
            "description": "MyTaskly è un'app Todo List elegante che integra l'intelligenza artificiale per semplificare la gestione delle attività quotidiane",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1024"
            },
            "author": {
              "@type": "Person",
              "name": "Gabriele Cipriani"
            },
            "potentialAction": {
              "@type": "DownloadAction",
              "target": "https://mytaskly.com/download"
            }
          })
        }} />
        
        {/* Marker invisibile per trigger lazy loading */}
        <div id="lazy-load-trigger" className="absolute top-[800px] h-1 w-full pointer-events-none" aria-hidden="true" />
        
        <LanguageProvider>
          <WaitlistRegistrationProvider>
            <ScrollReset />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <SpeedInsights />
            <Analytics />
          </WaitlistRegistrationProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
