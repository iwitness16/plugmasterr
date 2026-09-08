import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us — Buy Fake ID for Sale | IDPlugSource',
  description:
    'Contact IDPlugSource to buy a fake ID for sale. Reach us on WhatsApp or Telegram for orders, payment, and support. Fast response 24/7.',
  keywords:
    'fake id for sale, where to buy fake ids, buy fake id, fake id vendors, contact fake id maker, order fake id',
  openGraph: {
    title: 'Contact Us — Buy Fake ID for Sale | IDPlugSource',
    description:
      'Contact IDPlugSource to buy a fake ID. Reach us on WhatsApp or Telegram for orders, payment, and 24/7 support.',
    url: 'https://IDPlugSource.com/contact-us',
    siteName: 'IDPlugSource',
    images: [{ url: 'https://IDPlugSource.com/images/icon.png', width: 1200, height: 630, alt: 'Contact IDPlugSource - Buy Fake ID' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Buy Fake ID for Sale | IDPlugSource',
    description: 'Contact IDPlugSource on WhatsApp or Telegram to buy a fake ID. 24/7 support.',
    images: ['https://IDPlugSource.com/images/icon.png'],
  },
  alternates: {
    canonical: 'https://IDPlugSource.com/contact-us',
  },
};

export default function ContactUsPage() {
  return <ContactContent />;
}
