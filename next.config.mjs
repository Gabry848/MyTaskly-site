/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Abilitiamo l'ottimizzazione delle immagini
    unoptimized: false,
    // Configurazione dei formati moderni con priorità AVIF
    formats: ['image/avif', 'image/webp'],
    // Dimensioni predefinite ottimizzate per vari dispositivi
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Limite di dimensione aumentato per supportare immagini più grandi quando necessario
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 giorni per migliorare la cache
    domains: ['mytaskly.com'],
  },
  // Compressione dei bundle
  compress: true,
  // Strategie di link prefetching
  onDemandEntries: {
    // Periodo di tempo in cui i chunks compilati rimangono in memoria
    maxInactiveAge: 60 * 1000, 
    // Numero di pagine da tenere in buffer
    pagesBufferLength: 5,
  },
  // Configurazione per le prestazioni
  experimental: {
    // Miglioramenti per il rendering ottimizzato
    optimizeCss: true,
    scrollRestoration: true,
    // Abilitare il middleware per la memorizzazione nella cache
    nextScriptWorkers: true,
    // Ottimizzazione per immagini
    urlImports: ['https://mytaskly.com'],
    // Migliorare le performance di build
    esmExternals: true,
  },
  // Cache aggressiva per i contenuti statici
  staticPageGenerationTimeout: 120,
  // Ottimizzazione della build per dimensioni più piccole
  compiler: {
    // Rimuove i console.log in produzione
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'],
    } : false,
  },
  // Ottimizzazioni per i Web Vitals
  reactStrictMode: true,
  poweredByHeader: false,
  // Configurazione dei routing basati su intestazioni per una migliore esperienza mobile
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Ottimizzazione della cache per risorse statiche
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ]
      },
      {
        // Ottimizzazione della cache per font
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ]
      },
    ]
  },
}

export default nextConfig