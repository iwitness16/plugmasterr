import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Best Fake ID | #1 Scannable Fake IDs with Hologram & UV | IDCARDSMEN',
  description:
    'IDCARDSMEN is the best fake ID maker online. Buy scannable fake IDs with UV hologram, barcode, and real DMV templates. All US states, Canada & UK. Fast delivery from $65.',
  keywords:
    'best fake id, buy fake ids, scannable fake id, best fake id websites, fake id for sale, fake ids that scan, fake real id, id cards fake',
  openGraph: {
    title: 'Best Fake ID | #1 Scannable Fake IDs with Hologram & UV | IDCARDSMEN',
    description:
      'Buy the best fake IDs online — scannable, UV hologram, real DMV templates. All US states, Canada & UK. Starting from $65.',
    url: 'https://idcardsmen.com/',
    siteName: 'IDCARDSMEN',
    images: [{ url: 'https://idcardsmen.com/images/idfront.jpg', width: 1200, height: 630, alt: 'Best Fake ID - IDCARDSMEN' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Fake ID | #1 Scannable Fake IDs with Hologram & UV | IDCARDSMEN',
    description: 'Buy the best fake IDs — scannable, UV hologram, real DMV templates. All US states, Canada & UK.',
    images: ['https://idcardsmen.com/images/idfront.jpg'],
  },
  alternates: {
    canonical: 'https://idcardsmen.com/',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
