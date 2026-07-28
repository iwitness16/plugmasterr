import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Do Fake IDs Cost in 2026? Full Pricing Guide | IDCARDSMEN',
  description:
    'How much do fake IDs cost? Single cards from $65, bulk discounts available. Full pricing breakdown including shipping, production time, and what affects the price.',
  keywords:
    'how much do fake ids cost, how much are fake ids, how much does a fake id cost, fake id cost, fake id price, fake id reviews, cheap fake ids, buy fake ids',
  openGraph: {
    title: 'How Much Do Fake IDs Cost in 2026? Full Pricing Guide | IDCARDSMEN',
    description:
      'Complete fake ID pricing guide: single cards from $65, bulk discounts, shipping costs, and production times explained.',
    url: 'https://idcardsmen.com/how-much-do-fake-ids-cost',
    siteName: 'IDCARDSMEN',
    images: [{ url: 'https://idcardsmen.com/images/idfront.jpg', width: 1200, height: 630, alt: 'How Much Do Fake IDs Cost - IDCARDSMEN Pricing' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Do Fake IDs Cost in 2026? | IDCARDSMEN',
    description: 'Complete fake ID pricing: from $65 per card. Bulk discounts, shipping options, and delivery times.',
    images: ['https://idcardsmen.com/images/idfront.jpg'],
  },
  alternates: {
    canonical: 'https://idcardsmen.com/how-much-do-fake-ids-cost',
  },
};

const pricingTiers = [
  { qty: '1 card', price: '$100', perCard: '$100', discount: '—', highlight: false },
  { qty: '2–3 cards', price: '$180–$270', perCard: '$90', discount: 'Save $10/card', highlight: false },
  { qty: '4–9 cards', price: '$320–$720', perCard: '$80', discount: 'Save $20/card', highlight: true },
  { qty: '10+ cards', price: '$700+', perCard: '$70', discount: 'Save $30/card', highlight: false },
];

const shippingOptions = [
  { method: 'Standard Shipping', carrier: 'USPS', time: '5–7 days', cost: '$20', best: false },
  { method: 'Express Shipping', carrier: 'FedEx', time: '2–4 days', cost: '$30', best: true },
];

const faqItems = [
  {
    q: 'How much does a fake ID typically cost?',
    a: 'A single high-quality fake ID from IDCARDSMEN costs $100. Bulk orders get progressively cheaper — $90/card for 2–3, $80/card for 4–9, and $70/card for 10 or more. Shipping is additional ($20 standard, $30 express).',
  },
  {
    q: 'Why do some fake IDs cost only $30–$50?',
    a: 'Very cheap fake IDs ($30–$50) typically use low-resolution printing, no UV features, and a non-functional barcode. They fail scanner checks and are easy to spot under UV light. A quality fake ID that actually works needs proper materials and printing technology, which costs more.',
  },
  {
    q: 'What is included in the price?',
    a: 'The card price includes: full custom printing, UV hologram overlay, scannable 2D barcode, laser engraving, and quality testing before shipment. An electronic preview is sent for your approval before shipping. Shipping cost is separate.',
  },
  {
    q: 'How long does delivery take?',
    a: 'From order to delivery: production takes 1–3 business days, then shipping adds 2–7 days depending on your chosen option. Total fastest time is around 9–11 days with express shipping.',
  },
  {
    q: 'Are there extra charges?',
    a: 'No hidden fees. You pay for the card + shipping. Expedited production (1 day instead of 3) is available for an additional $20 for 1–2 cards.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'Cryptocurrency (Bitcoin, Ethereum, USDT), Apple Pay, CashApp, Zelle, and bank transfer. Cryptocurrency is recommended for privacy — transactions are untraceable.',
  },
  {
    q: 'Do cheap fake IDs actually work?',
    a: 'No. IDs under $50 almost universally fail scanner checks and UV inspection. A properly made scannable fake ID requires real DMV template data encoded into the barcode, UV-reactive ink, and precise hologram placement — none of which are possible at very low price points.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes. If you do not receive your order, we will reship it or negotiate a refund. We have served 20,000+ customers and have a less than 1% refund rate.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/logo.jpg" alt="IDCARDSMEN Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-lg" />
              <div className="flex flex-col">
                <div className="text-yellow-green text-base sm:text-lg font-display font-semibold tracking-tight">IDCARDSMEN</div>
                <div className="text-xs text-gray-400 hidden sm:block">Scannable UV hologram</div>
              </div>
            </Link>
            <div className="hidden lg:flex space-x-8">
              {[['/', 'HOME'], ['/product-info', 'PRODUCT INFO'], ['/order', 'ORDER'], ['/product-list', 'PRODUCT LIST'], ['/faq', 'FAQ'], ['/contact-us', 'CONTACT US']].map(([href, label]) => (
                <Link key={href} href={href} className="hover:text-yellow-green transition text-xs sm:text-sm text-gray-300">{label}</Link>
              ))}
            </div>
            <Link href="/order" className="bg-yellow-green text-black px-4 py-2 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
              Order Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs text-gray-500 mb-3">
            <Link href="/" className="hover:text-yellow-green">Home</Link> / <span className="text-gray-800">How Much Do Fake IDs Cost</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
            How Much Do Fake IDs Cost in 2026?
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl">
            A complete breakdown of fake ID pricing — what you pay for a quality card, what drives the cost up or down, and how to get the best value.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Short answer: <strong className="text-gray-800">$65–$100 per card</strong> for a quality scannable fake ID, with bulk discounts available.
          </p>
          <Link href="/order" className="inline-block bg-yellow-green text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
            Order Your Fake ID Now →
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Pricing table */}
          <section className="mb-14">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">IDCARDSMEN Fake ID Pricing</h2>
            <p className="text-gray-600 text-sm mb-6">All prices in USD. UK IDs priced in GBP (£90 per card).</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {pricingTiers.map((tier) => (
                <div key={tier.qty} className={`rounded-2xl border p-5 flex flex-col ${tier.highlight ? 'border-yellow-green bg-yellow-green/5 shadow-md' : 'border-gray-200 bg-white'}`}>
                  {tier.highlight && (
                    <span className="text-xs font-bold text-yellow-green mb-2 uppercase tracking-wide">Most Popular</span>
                  )}
                  <div className="text-lg font-bold text-gray-900 mb-1">{tier.qty}</div>
                  <div className="text-2xl font-display font-extrabold text-gray-900 mb-1">{tier.perCard}</div>
                  <div className="text-xs text-gray-500 mb-1">per card</div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">{tier.price} total</div>
                  {tier.discount !== '—' && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full self-start font-semibold">{tier.discount}</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500">* UK IDs (London, Manchester, etc.) are priced at £90 per card. Canada IDs follow the same USD pricing tiers above.</p>
          </section>

          {/* Shipping */}
          <section className="mb-14">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Shipping Costs & Delivery Times</h2>
            <p className="text-gray-600 text-sm mb-6">Shipping is charged separately from the card price. Both options include tracking.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shippingOptions.map((opt) => (
                <div key={opt.method} className={`rounded-2xl border p-6 ${opt.best ? 'border-yellow-green shadow-md' : 'border-gray-200'}`}>
                  {opt.best && <div className="text-xs font-bold text-yellow-green mb-2 uppercase tracking-wide">Recommended</div>}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{opt.method}</h3>
                  <p className="text-sm text-gray-500 mb-3">{opt.carrier}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-display font-extrabold text-gray-900">{opt.cost}</div>
                      <div className="text-xs text-gray-500">shipping fee</div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-semibold text-gray-800">{opt.time}</div>
                      <div className="text-xs text-gray-500">delivery</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Total cost example */}
          <section className="mb-14">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Total Cost Examples</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Scenario</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Cards</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Shipping</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 text-green-700">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['1 card, standard shipping', '$100', '$20', '$120'],
                    ['1 card, express shipping', '$100', '$30', '$130'],
                    ['4 cards, standard shipping', '$320', '$20', '$340'],
                    ['10 cards, express shipping', '$700', '$30', '$730'],
                  ].map(([scenario, cards, ship, total]) => (
                    <tr key={scenario} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{scenario}</td>
                      <td className="px-4 py-3 text-gray-600">{cards}</td>
                      <td className="px-4 py-3 text-gray-600">{ship}</td>
                      <td className="px-4 py-3 font-bold text-gray-900">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What affects price */}
          <section className="mb-14">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">What Affects Fake ID Pricing?</h2>
            <p className="text-gray-700 mb-6">
              The market price for fake IDs varies widely — from $30 junk to $200+ premium cards. Here is what actually determines quality and price:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Template Accuracy', desc: 'Real DMV templates cost more to source and replicate accurately. Cheap cards use generic designs that immediately look fake.', icon: '🪪' },
                { title: 'UV Printing', desc: 'Proper UV-reactive ink requires specialised equipment. Without it, the card fails any UV light check at a venue.', icon: '☀️' },
                { title: 'Barcode Encoding', desc: 'A real encoded 2D barcode that returns correct data in scanner apps requires custom software. This is what separates scam cards from real ones.', icon: '📊' },
                { title: 'Material Quality', desc: 'Real IDs use PVC Teslin substrate. Cheap cards use thin plastic that bends, creases, and looks wrong to anyone who handles IDs daily.', icon: '💳' },
                { title: 'Hologram Quality', desc: 'State-specific holographic overlays require precision manufacturing. Printed holograms look obviously fake under close inspection.', icon: '✨' },
                { title: 'Production Speed', desc: 'Rush production (1-day) costs more than standard (3-day) but gets you the card faster for time-sensitive situations.', icon: '⚡' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Fake ID Pricing FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-4">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.q}</h3>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-700 text-sm sm:text-base">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-14">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/best-states-for-fake-ids" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-yellow-green transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-yellow-green mb-1">Best States for Fake IDs</h3>
                <p className="text-xs text-gray-500">Which US state makes the best fake ID? Full ranked breakdown.</p>
              </Link>
              <Link href="/product-info" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-yellow-green transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-yellow-green mb-1">Product Information</h3>
                <p className="text-xs text-gray-500">Full details on security features, materials, and production process.</p>
              </Link>
              <Link href="/use-guide" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-yellow-green transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-yellow-green mb-1">Photo Guide</h3>
                <p className="text-xs text-gray-500">How to take the perfect fake ID photo for your card.</p>
              </Link>
              <Link href="/faq" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-yellow-green transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-yellow-green mb-1">Full FAQ</h3>
                <p className="text-xs text-gray-500">All common questions about ordering, delivery, and quality.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black rounded-2xl p-8 sm:p-10 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
              Ready to Order? <span className="text-yellow-green">Start from $65</span>
            </h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-xl mx-auto">
              Single card $100. Buy 10+ and pay just $70 per card. All US states, Canada, and UK available. Delivered in 9–15 days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/order" className="bg-yellow-green text-black px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition">
                Order Your Fake ID
              </Link>
              <Link href="/product-list" className="border border-gray-600 text-gray-300 px-6 py-3 rounded-full text-sm hover:border-yellow-green hover:text-yellow-green transition">
                Browse all IDs
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            {[['/', 'Home'], ['/product-list', 'Products'], ['/order', 'Order'], ['/faq', 'FAQ'], ['/best-states-for-fake-ids', 'Best States'], ['/contact-us', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className="text-gray-400 hover:text-yellow-green text-xs">{label}</Link>
            ))}
          </div>
          <p className="text-gray-600 text-xs">Copyright {'\u00A9'} 2026, idcardsmen, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
