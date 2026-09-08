import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import FontLoader from "../components/FontLoader";
import WhatsAppWidget from "../components/WhatsAppWidget";

const BASE_URL = "https://idplugsource.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Best Fake ID | #1 Scannable Fake IDs with Hologram & UV | IDPlugSource",
    template: "%s | IDPlugSource",
  },
  description:
    "IDPlugSource is the best fake ID maker online. Buy scannable fake IDs with UV hologram, barcode, and real DMV templates. All US states, Canada & UK. Fast delivery from $65.",
  keywords:
    "best fake id, buy fake ids, scannable fake id, best fake id websites, fake id for sale, order fake id, fake ids that scan",
  authors: [{ name: "IDPlugSource" }],
  creator: "IDPlugSource",
  publisher: "IDPlugSource",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "IDPlugSource",
    title: "Best Fake ID | #1 Scannable Fake IDs with Hologram & UV | IDPlugSource",
    description:
      "Buy the best fake IDs online — scannable, UV hologram, real DMV templates. All US states, Canada & UK. Starting from $65.",
    images: [
      {
        url: `${BASE_URL}/images/idfront.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Fake ID - Scannable Fake ID Card - IDPlugSource",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fake ID | #1 Scannable Fake IDs with Hologram & UV | IDPlugSource",
    description:
      "Buy the best fake IDs online — scannable, UV hologram, real DMV templates. All US states, Canada & UK.",
    images: [`${BASE_URL}/images/idfront.jpg`],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/images/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/images/icon.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// JSON-LD structured data for the business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "IDPlugSource",
  description:
    "IDPlugSource is the best fake ID maker offering premium scannable fake IDs with UV hologram, barcode, and real DMV templates for all US states, Canada and UK.",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.jpg`,
  image: `${BASE_URL}/images/idfront.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "548 Market St Suite 96966",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94104",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://wa.me/19124844702",
    "https://t.me/fakeidplugsource10",
  ],
};

// FAQ structured data (boosts chance of rich results in SERPs)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do fake IDs cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fake IDs start from $65 per card when ordering 10+. Single card price is $100. Express shipping (2-4 days) costs $30; standard shipping (5-7 days) costs $20.",
      },
    },
    {
      "@type": "Question",
      name: "Are the fake IDs scannable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every card has a barcode on the back that scans correctly in most ID scanner apps. Each card is tested for scanning, bending, and UV light before shipment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a fake ID?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest delivery is 9-11 days (3 days production + 6-8 days express shipping). Standard delivery takes 15-19 days.",
      },
    },
    {
      "@type": "Question",
      name: "What states do you offer fake IDs for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer fake IDs for all major US states including California, Texas, New York, Florida, Illinois, and more. We also cover Canadian provinces and UK cities.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <FontLoader />
        <Script id="smartsupp-chat" strategy="lazyOnload">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '5848571d6eaea8b2afad94cfa782bd367d993b1c';
            _smartsupp.orientation = "right";
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
        <WhatsAppWidget />
        {children}
      </body>
    </html>
  );
}
