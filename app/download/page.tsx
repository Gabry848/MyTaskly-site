import { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import DownloadClient from './DownloadClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Scarica MyTaskly - App Todo List',
  description: 'Partecipa alla beta aperta di MyTaskly. Scarica la build Android su Google Play, segui i progressi di sviluppo e ricevi aggiornamenti sulla prossima versione iOS.',
  path: '/download',
  image: '/images/taskly-app.png',
  imageAlt: 'Scarica MyTaskly - App Todo List',
  keywords: [
    'download',
    'scarica app',
    'app store',
    'google play',
    'iOS',
    'android',
    'installa',
  ],
});

export default function DownloadPage() {
  return <DownloadClient />;
}
