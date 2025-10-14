import { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import EarlyAccessClient from './EarlyAccessClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Early Access Beta - MyTaskly',
  description: 'Accedi in anteprima alla versione beta di MyTaskly. Scopri le funzionalità esclusive, scarica l\'app dal Play Store e diventa uno dei primi tester della rivoluzione nella produttività.',
  path: '/early-access',
  image: '/images/taskly-app.png',
  imageAlt: 'MyTaskly Beta - Accesso Anticipato',
  keywords: [
    'beta',
    'early access',
    'accesso anticipato',
    'tester',
    'play store',
    'app beta',
    'nuovo lancio',
    'anteprima esclusiva',
  ],
});

export default function EarlyAccessPage() {
  return <EarlyAccessClient />;
}
