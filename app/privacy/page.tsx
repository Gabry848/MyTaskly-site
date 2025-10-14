import { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy - MyTaskly',
  description: 'Leggi l\'informativa sulla privacy di MyTaskly. Scopri come proteggiamo i tuoi dati, quali informazioni raccogliamo e come vengono utilizzate per garantire la massima sicurezza.',
  path: '/privacy',
  image: '/images/smart-lists.png',
  imageAlt: 'MyTaskly Privacy Policy',
  keywords: [
    'privacy policy',
    'informativa privacy',
    'protezione dati',
    'GDPR',
    'sicurezza',
    'dati personali',
  ],
});

export default function PrivacyPage() {
  return <PrivacyClient />;
}
