import type { Metadata, Viewport } from "next";
import "./globals.css";
import FontLoader from "../components/FontLoader";

export const metadata: Metadata = {
  title: "IDPLUGMASTER - Premium Fake ID Cards",
  description: "Top Fake ID Maker - Building Premium, Authentic-Looking and Scannable Fake IDs",
  icons: {
    icon: '/images/icon.png',
    shortcut: '/images/icon.png',
    apple: '/images/icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
