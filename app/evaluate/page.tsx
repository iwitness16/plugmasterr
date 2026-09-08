import type { Metadata } from 'next';
import EvaluateContent from './EvaluateContent';

export const metadata: Metadata = {
  title: 'Fake ID Reviews — 15,000+ Verified Customer Reviews | IDPlugSource',
  description:
    'Read 15,000+ verified fake ID reviews from real IDPlugSource customers. See why we are rated the best fake ID maker — fast delivery, scannable cards, real quality.',
  keywords:
    'fake id reviews, best fake id, top fake ids, real fake id, fake id for sale, scannable fake id reviews, fake ids buying',
  openGraph: {
    title: 'Fake ID Reviews — 15,000+ Verified Customer Reviews | IDPlugSource',
    description:
      '15,000+ verified fake ID reviews from real customers. Fast delivery, scannable cards, UV hologram — see what buyers say about IDPlugSource.',
    url: 'https://IDPlugSource.com/evaluate',
    siteName: 'IDPlugSource',
    images: [{ url: 'https://IDPlugSource.com/images/idfront.jpg', width: 1200, height: 630, alt: 'Fake ID Reviews - IDPlugSource' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake ID Reviews — 15,000+ Verified Customer Reviews | IDPlugSource',
    description: '15,000+ verified fake ID reviews. Fast delivery, scannable cards, UV hologram — rated the best fake ID maker.',
    images: ['https://IDPlugSource.com/images/idfront.jpg'],
  },
  alternates: {
    canonical: 'https://IDPlugSource.com/evaluate',
  },
};

export default function EvaluatePage() {
  return <EvaluateContent />;
}
