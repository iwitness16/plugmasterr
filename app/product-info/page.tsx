import type { Metadata } from 'next';
import ProductInfoContent from './ProductInfoContent';

export const metadata: Metadata = {
  title: 'Scannable Fake ID — Features, Shipping & Product Info | IDCARDSMEN',
  description:
    'Learn about our scannable fake IDs: UV hologram, barcode, shipping times, and product specs. Fake IDs that scan and pass all checks. Order from $65.',
  keywords:
    'scannable fake id, fake ids that scan, do fake ids scan, fake id scanner, fake real id, fake ids and digital scanners, fake id front and back',
  openGraph: {
    title: 'Scannable Fake ID — Features, Shipping & Product Info | IDCARDSMEN',
    description:
      'Everything about our scannable fake IDs: UV hologram, barcode, card specs, shipping times. Fake IDs that scan and pass detection.',
    url: 'https://idcardsmen.com/product-info',
    siteName: 'IDCARDSMEN',
    images: [{ url: 'https://idcardsmen.com/images/idfront.jpg', width: 1200, height: 630, alt: 'Scannable Fake ID Product Info' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scannable Fake ID — Features, Shipping & Product Info | IDCARDSMEN',
    description: 'Everything about our scannable fake IDs: UV hologram, barcode, card specs, shipping times.',
    images: ['https://idcardsmen.com/images/idfront.jpg'],
  },
  alternates: {
    canonical: 'https://idcardsmen.com/product-info',
  },
};

export default function ProductInfoPage() {
  return <ProductInfoContent />;
}
