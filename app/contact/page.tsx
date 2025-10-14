import { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import ContactClient from './ContactClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contattaci - MyTaskly',
  description: 'Hai domande o feedback su MyTaskly? Contattaci! Il nostro team è qui per aiutarti. Compila il modulo o scrivici direttamente via email.',
  path: '/contact',
  image: '/images/collaboration.png',
  imageAlt: 'Contatta il Team MyTaskly',
  keywords: [
    'contatti',
    'supporto',
    'assistenza clienti',
    'feedback',
    'help',
    'email',
  ],
});

export default function ContactPage() {
  return <ContactClient />;
}
