import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import FontLoader from "../components/FontLoader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import SiteShutdownScreen from "../components/SiteShutdownScreen";
import { SITE_SHUTDOWN_ENABLED } from "../lib/site-shutdown";

const normalMetadata: Metadata = {
  title: "IDPLUGMASTER - Premium Fake ID Cards",
  description:
    "Top Fake ID Maker - Building Premium, Authentic-Looking and Scannable Fake IDs",
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

const shutdownMetadata: Metadata = {
  title: "Domain suspended – reported fraudulent activity",
  description:
    "This website is no longer available following verified reports of scam and fraudulent activity.",
  robots: { index: false, follow: false, nocache: true },
};

export async function generateMetadata(): Promise<Metadata> {
  return SITE_SHUTDOWN_ENABLED ? shutdownMetadata : normalMetadata;
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (SITE_SHUTDOWN_ENABLED) {
    return (
      <html lang="en">
        <body className="site-shutdown-active antialiased">
          <SiteShutdownScreen />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="antialiased">
        <FontLoader />
        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '4b9d245f3765f6ef52859a5ba84d77cdfd97d093';
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
