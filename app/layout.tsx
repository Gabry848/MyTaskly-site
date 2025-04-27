import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "./contexts/LanguageContext"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollReset from "./components/ScrollReset"
import type React from "react"

// Configurazione ottimizzata del font con preload
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif']
})

export const metadata = {
  title: "Mytaskly - Minimal Todo List App",
  description: "The sleek app that integrates AI to simplify to-do management",
  generator: 'v0.dev',
  applicationName: 'Mytaskly',
  keywords: ['todo app', 'task management', 'productivity', 'AI todo', 'minimal design'],
  authors: [{ name: 'Gabriele Cipriani' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        {/* Precarica risorse critiche */}
        <link
          rel="preload"
          href="/images/video-poster.png"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <LanguageProvider>
          <ScrollReset />
          <Header />
          <main>{children}</main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
