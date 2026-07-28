import type { Metadata } from 'next';
import EvaluateContent from './EvaluateContent';

export const metadata: Metadata = {
  title: 'Fake ID Reviews — 15,000+ Verified Customer Reviews | IDCARDSMEN',
  description:
    'Read 15,000+ verified fake ID reviews from real IDCARDSMEN customers. See why we are rated the best fake ID maker — fast delivery, scannable cards, real quality.',
  keywords:
    'fake id reviews, best fake id, top fake ids, real fake id, fake id for sale, scannable fake id reviews, fake ids buying',
  openGraph: {
    title: 'Fake ID Reviews — 15,000+ Verified Customer Reviews | IDCARDSMEN',
    description:
      '15,000+ verified fake ID reviews from real customers. Fast delivery, scannable cards, UV hologram — see what buyers say about IDCARDSMEN.',
    url: 'https://idcardsmen.com/evaluate',
    siteName: 'IDCARDSMEN',
    images: [{ url: 'https://idcardsmen.com/images/idfront.jpg', width: 1200, height: 630, alt: 'Fake ID Reviews - IDCARDSMEN' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake ID Reviews — 15,000+ Verified Customer Reviews | IDCARDSMEN',
    description: '15,000+ verified fake ID reviews. Fast delivery, scannable cards, UV hologram — rated the best fake ID maker.',
    images: ['https://idcardsmen.com/images/idfront.jpg'],
  },
  alternates: {
    canonical: 'https://idcardsmen.com/evaluate',
  },
};

export default function EvaluatePage() {
  return <EvaluateContent />;
}
