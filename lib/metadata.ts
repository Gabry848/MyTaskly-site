import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path,
  image = '/images/og-image.png',
  imageAlt = 'MyTaskly App Preview',
  keywords = [],
  noindex = false,
}: PageMetadata): Metadata {
  const baseUrl = 'https://mytaskly.com';
  const url = `${baseUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords: [
      'todo app',
      'task management',
      'produttività',
      'intelligenza artificiale',
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'MyTaskly',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: 'it_IT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@mytaskly',
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
