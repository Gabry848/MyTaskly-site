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
    // Configurazione dei formati moderni
    formats: ['image/avif', 'image/webp'],
    // Dimensioni predefinite per migliorare il CLS
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Ottimizzazione per i font web
  optimizeFonts: true,
  // Compressione dei bundle
  compress: true,
  // Strategie di link prefetching
  onDemandEntries: {
    // Periodo di tempo in cui i chunks compilati rimangono in memoria
    maxInactiveAge: 60 * 1000, 
    // Numero di pagine da tenere in buffer
    pagesBufferLength: 5,
  },
  // Ottimizzazione del codice per produzione
  swcMinify: true,
  // Precaricamento dei dati per pagine frequentemente visitate
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Cache aggressiva per i contenuti statici
  staticPageGenerationTimeout: 120,
}

export default nextConfig