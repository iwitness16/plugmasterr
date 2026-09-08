import type { Metadata } from 'next';
import UseGuideContent from './UseGuideContent';

export const metadata: Metadata = {
  title: 'Fake ID Picture Guide — Photo Rules & Ordering Process | IDPlugSource',
  description:
    'Learn how to take the perfect fake ID picture. Photo rules, selfie requirements, ordering process steps — get your scannable fake ID right the first time.',
  keywords:
    'fake id picture, how to take a fake id photo, how to take a good fake id photo, fake id front and back, fake id photo requirements, how to take fake id photo',
  openGraph: {
    title: 'Fake ID Picture Guide — Photo Rules & Ordering Process | IDPlugSource',
    description:
      'How to take the perfect fake ID picture. Photo rules, selfie tips, and the 5-step ordering process for your scannable fake ID.',
    url: 'https://IDPlugSource.com/use-guide',
    siteName: 'IDPlugSource',
    images: [{ url: 'https://IDPlugSource.com/images/landinggirl.jpg', width: 1200, height: 630, alt: 'Fake ID Picture Guide - IDPlugSource' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake ID Picture Guide — Photo Rules & Ordering Process | IDPlugSource',
    description: 'How to take the perfect fake ID picture: photo rules, selfie tips, and ordering process.',
    images: ['https://IDPlugSource.com/images/landinggirl.jpg'],
  },
  alternates: {
    canonical: 'https://IDPlugSource.com/use-guide',
  },
};

export default function UseGuidePage() {
  return <UseGuideContent />;
}
