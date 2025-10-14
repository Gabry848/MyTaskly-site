import { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import MembersClient from './MembersClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Area Membri - MyTaskly',
  description: 'Area riservata ai membri della waitlist di MyTaskly. Accedi a contenuti esclusivi, aggiornamenti sullo sviluppo, accesso anticipato alla beta e community di early adopters.',
  path: '/members',
  image: '/images/collaboration.png',
  imageAlt: 'MyTaskly Members Area - Accesso Esclusivo',
  keywords: [
    'area membri',
    'waitlist',
    'membri esclusivi',
    'community',
    'early adopters',
    'aggiornamenti esclusivi',
  ],
  noindex: true, // Pagina riservata, non indicizzare
});

export default function MembersPage() {
  return <MembersClient />;
}
