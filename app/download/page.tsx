import { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import DownloadClient from './DownloadClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Scarica MyTaskly - App Todo List',
  description: 'Scarica MyTaskly per iOS e Android. La todo list minimalista con intelligenza artificiale che semplifica la gestione delle tue attività. Disponibile su App Store e Google Play.',
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
