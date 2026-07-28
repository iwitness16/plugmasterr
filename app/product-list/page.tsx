import type { Metadata } from 'next';
import { Suspense } from 'react';
import ProductListContent from './ProductListContent';

export const metadata: Metadata = {
  title: 'Buy Fake IDs — All US States, Canada & UK | IDCARDSMEN',
  description:
    'Buy fake IDs online from IDCARDSMEN. Scannable fake IDs for all US states, Canada provinces, and UK cities. Real DMV templates, UV hologram, barcode. From $65.',
  keywords:
    'buy fake ids, fake ids buying, order fake ids, fake id for sale, id cards fake, fake ids that scan, fake state id, scannable fake id, get fake id',
  openGraph: {
    title: 'Buy Fake IDs — All US States, Canada & UK | IDCARDSMEN',
    description:
      'Browse and buy fake IDs for all US states, Canada and UK. Scannable, UV hologram, real DMV templates. Starting from $65.',
    url: 'https://idcardsmen.com/product-list',
    siteName: 'IDCARDSMEN',
    images: [{ url: 'https://idcardsmen.com/images/bgimg.png', width: 1200, height: 630, alt: 'Buy Fake IDs - IDCARDSMEN Product List' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Fake IDs — All US States, Canada & UK | IDCARDSMEN',
    description: 'Browse and buy fake IDs for all US states, Canada and UK. Scannable, UV hologram, real DMV templates.',
    images: ['https://idcardsmen.com/images/bgimg.png'],
  },
  alternates: {
    canonical: 'https://idcardsmen.com/product-list',
  },
};

export default function ProductListPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-400 mx-auto mb-3"></div>
          <p className="text-gray-500 text-sm">Loading products…</p>
        </div>
      </div>
    }>
      <ProductListContent />
    </Suspense>
  );
}
