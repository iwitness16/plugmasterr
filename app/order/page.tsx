import type { Metadata } from 'next';
import OrderContent from './OrderContent';

export const metadata: Metadata = {
  title: 'Order Fake ID Online — Buy Fake IDs from $65 | IDPlugSource',
  description:
    'Order your fake ID online at IDPlugSource. Fill in your info, choose your state, pay securely — and receive your scannable fake ID in as fast as 9 days. Starting from $65.',
  keywords:
    'order fake id, fake id purchase, buy fake id, get fake id, fake id buy, how to get fake id, order fake ids, fake id for sale, buying fake ids online',
  openGraph: {
    title: 'Order Fake ID Online — Buy Fake IDs from $65 | IDPlugSource',
    description:
      'Order a scannable fake ID online. Fill in your details, choose your state, and receive it in as fast as 9 days. From $65.',
    url: 'https://IDPlugSource.com/order',
    siteName: 'IDPlugSource',
    images: [{ url: 'https://IDPlugSource.com/images/ordertemp.png', width: 1200, height: 630, alt: 'Order Fake ID Online - IDPlugSource' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Order Fake ID Online — Buy Fake IDs from $65 | IDPlugSource',
    description: 'Order a scannable fake ID online. Fill in your details, choose your state, receive in as fast as 9 days.',
    images: ['https://IDPlugSource.com/images/ordertemp.png'],
  },
  alternates: {
    canonical: 'https://IDPlugSource.com/order',
  },
};

export default function OrderPage() {
  return <OrderContent />;
}
