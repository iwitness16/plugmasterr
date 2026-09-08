import type { Metadata } from 'next';
import FaqContent from './FaqContent';

export const metadata: Metadata = {
  title: 'Fake ID FAQ — How Much Do Fake IDs Cost? Delivery & More | IDPlugSource',
  description:
    'How much do fake IDs cost? How long does delivery take? Are our fake IDs scannable? Get answers to the most common fake ID questions at IDPlugSource.',
  keywords:
    'how much do fake ids cost, how much are fake ids, how much does a fake id cost, fake id cost, how long does it take to get a fake id, fake id reviews, are fake ids scannable',
  openGraph: {
    title: 'Fake ID FAQ — How Much Do Fake IDs Cost? Delivery & More | IDPlugSource',
    description:
      'Frequently asked questions about fake IDs: pricing from $65, delivery times, scanning, and ordering process.',
    url: 'https://IDPlugSource.com/faq',
    siteName: 'IDPlugSource',
    images: [{ url: 'https://IDPlugSource.com/images/icon.png', width: 1200, height: 630, alt: 'Fake ID FAQ - IDPlugSource' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake ID FAQ — How Much Do Fake IDs Cost? | IDPlugSource',
    description: 'FAQ: fake ID pricing from $65, delivery times, scanning, and ordering process.',
    images: ['https://IDPlugSource.com/images/icon.png'],
  },
  alternates: {
    canonical: 'https://IDPlugSource.com/faq',
  },
};

export default function FAQPage() {
  return <FaqContent />;
}
