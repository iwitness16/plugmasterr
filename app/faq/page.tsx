import type { Metadata } from 'next';
import FaqContent from './FaqContent';

export const metadata: Metadata = {
  title: 'Fake ID FAQ — How Much Do Fake IDs Cost? Delivery & More | IDCARDSMEN',
  description:
    'How much do fake IDs cost? How long does delivery take? Are our fake IDs scannable? Get answers to the most common fake ID questions at IDCARDSMEN.',
  keywords:
    'how much do fake ids cost, how much are fake ids, how much does a fake id cost, fake id cost, how long does it take to get a fake id, fake id reviews, are fake ids scannable',
  openGraph: {
    title: 'Fake ID FAQ — How Much Do Fake IDs Cost? Delivery & More | IDCARDSMEN',
    description:
      'Frequently asked questions about fake IDs: pricing from $65, delivery times, scanning, and ordering process.',
    url: 'https://idcardsmen.com/faq',
    siteName: 'IDCARDSMEN',
    images: [{ url: 'https://idcardsmen.com/images/icon.png', width: 1200, height: 630, alt: 'Fake ID FAQ - IDCARDSMEN' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake ID FAQ — How Much Do Fake IDs Cost? | IDCARDSMEN',
    description: 'FAQ: fake ID pricing from $65, delivery times, scanning, and ordering process.',
    images: ['https://idcardsmen.com/images/icon.png'],
  },
  alternates: {
    canonical: 'https://idcardsmen.com/faq',
  },
};

export default function FAQPage() {
  return <FaqContent />;
}
