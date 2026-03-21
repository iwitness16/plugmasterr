/**
 * Full-screen notice shown when SITE_SHUTDOWN_ENABLED is true.
 * Designed to read like a domain/service suspension after abuse reports.
 */
export default function SiteShutdownScreen() {
  return (
    <div
      className="site-shutdown-root fixed inset-0 z-[2147483647] flex min-h-[100dvh] flex-col items-center justify-center overflow-auto bg-[#0d0202] px-4 py-10 text-[#f5e6e6] selection:bg-red-900 selection:text-white"
      role="alert"
      aria-live="assertive"
    >
      {/* Hazard stripe */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-3 opacity-90"
        style={{
          background:
            "repeating-linear-gradient(-45deg, #b91c1c 0px, #b91c1c 12px, #1a0505 12px, #1a0505 24px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-3 opacity-90"
        style={{
          background:
            "repeating-linear-gradient(-45deg, #b91c1c 0px, #b91c1c 12px, #1a0505 12px, #1a0505 24px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Large danger symbol */}
        <div className="mb-8 flex justify-center">
          <div className="site-shutdown-pulse relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-red-600 bg-red-950/80 shadow-[0_0_60px_rgba(220,38,38,0.45)] sm:h-44 sm:w-44">
            <svg
              className="h-20 w-20 text-red-500 sm:h-28 sm:w-28"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
          </div>
        </div>

        <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-red-400/90">
          Security &amp; abuse intervention
        </p>
        <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          This website has been taken offline
        </h1>
        <p className="mb-6 border-y border-red-900/60 bg-red-950/30 py-4 text-base leading-relaxed text-red-100/95 sm:text-lg">
          Following <strong className="text-white">multiple independent reports</strong> of{" "}
          <strong className="text-white">fraudulent and scam-related activity</strong> from
          visitors and third-party monitors, access to this domain and all associated pages has
          been <strong className="text-white">suspended</strong>.
        </p>
        <p className="mb-8 text-sm leading-relaxed text-red-200/80 sm:text-base">
          No orders, evaluations, or administrative functions are available. Do not send payments,
          gift cards, cryptocurrency, or personal documents to any contact previously associated
          with this site. Further interaction with this service is not possible from this address.
        </p>

        <div className="rounded-lg border border-red-800/80 bg-black/40 px-4 py-3 font-mono text-[11px] text-red-300/70 sm:text-xs">
          <p className="mb-1">
            Reference: <span className="text-red-200">ABUSE-WEB-2026-019847</span>
          </p>
          <p className="text-red-400/60">Status: DOMAIN_HOLD — FULL RESTRICTION</p>
        </div>

        <p className="mt-10 text-xs uppercase tracking-widest text-red-500/70">
          Access permanently restricted
        </p>
      </div>
    </div>
  );
}
