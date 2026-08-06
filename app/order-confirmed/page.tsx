'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ADMIN_WHATSAPP = '13344468194';
const WA_URL_KEY = 'orderWhatsAppUrl';
const SUMMARY_KEY = 'orderConfirmationSummary';

export default function OrderConfirmedPage() {
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Trigger checkmark animation
    const t = setTimeout(() => setChecked(true), 100);

    // Read the WhatsApp URL stored by cart checkout
    const storedUrl = sessionStorage.getItem(WA_URL_KEY);
    const summary = sessionStorage.getItem(SUMMARY_KEY);

    const finalUrl = storedUrl || `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(summary || 'New order placed - IDCARDSMEN')}`;
    setWaUrl(finalUrl);

    // Desktop fallback: try to open WhatsApp in new tab
    // (mobile already handled this via location.href in cart checkout)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile && storedUrl) {
      const waTimer = setTimeout(() => {
        window.open(finalUrl, '_blank');
      }, 500);
      return () => {
        clearTimeout(t);
        clearTimeout(waTimer);
      };
    }

    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-sans">

      <style>{`
        @keyframes draw {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .circle-pop { animation: pop 0.5s ease forwards; }
        .check-draw {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: draw 0.5s 0.35s ease forwards;
        }
      `}</style>

      <div className="max-w-md w-full text-center">

        {/* Animated checkmark */}
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 rounded-full bg-green-100 flex items-center justify-center ${checked ? 'circle-pop' : 'opacity-0'}`}>
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
              <path
                className={checked ? 'check-draw' : ''}
                d="M5 13l4 4L19 7"
                stroke="#16a34a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Order Placed Successfully!
        </h1>

        {/* Message */}
        <p className="text-gray-500 text-sm sm:text-base mb-2">
          Thank you for your order. We have received your details and will reach out to you via <strong>WhatsApp</strong> or <strong>Email</strong> to confirm and proceed with your order shortly.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mb-8">
          A confirmation email has been sent to your inbox. Please also check your spam folder.
        </p>

        {/* WhatsApp CTA */}
        {waUrl && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
            <p className="text-gray-600 text-sm mb-4">
              WhatsApp should have opened automatically. If it didn&apos;t, tap the button below to send your order summary directly to our team.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#20BA5A] transition shadow w-full sm:w-auto"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Open WhatsApp Chat
            </a>
            <p className="text-gray-400 text-xs mt-3">
              WhatsApp: +1 334 446 8194
            </p>
          </div>
        )}

        <Link href="/" className="text-yellow-green font-medium text-sm hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
