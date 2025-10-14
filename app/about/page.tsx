import { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import AboutClient from './AboutClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Chi Siamo - MyTaskly',
  description: 'Scopri la storia dietro MyTaskly, la nostra missione di rivoluzionare la produttività e il team appassionato che sta creando l\'app todo list del futuro.',
  path: '/about',
  image: '/images/gabriele.png',
  imageAlt: 'MyTaskly Team - Chi Siamo',
  keywords: [
    'chi siamo',
    'about us',
    'team',
    'missione',
    'storia',
    'visione aziendale',
  ],
});

export default function AboutPage() {
  return <AboutClient />;
}
