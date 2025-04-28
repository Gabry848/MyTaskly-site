import { MetadataRoute } from 'next'

/**
 * Configurazione ottimizzata dei robot per il crawling
 * - Include specifiche dettagliate per i crawler principali
 * - Blocca percorsi non necessari per evitare consumo di crawl budget
 * - Indirizza al sitemap per una scansione efficiente
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mytaskly.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Blocca percorsi non necessari con pattern specifico
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/404',
          '/500',
          '/*.json$',
          '/private/',
          '/temp/'
        ],
      },
      // Regole specifiche per Googlebot per ottimizzare la scansione
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      // Regole per crawler di immagini per migliorare l'indicizzazione delle immagini
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/public/images/'],
      },
      // Regole per crawler mobile per garantire corretta indicizzazione mobile
      {
        userAgent: 'Googlebot-Mobile',
        allow: '/',
      }
    ],
    // Includere sia la versione XML che JSON del sitemap
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap.json`,
    ],
    // Aggiungere host per specificare il dominio canonico
    host: baseUrl,
  }
}