'use client';

import React from 'react';
import { ShoppingCart, ChevronUp } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/images/logo.jpg" 
                alt="IDMASTER Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-lg"
              />
              <div className="flex flex-col">
                <div className="text-yellow-green text-xl sm:text-2xl font-display font-bold tracking-tight">
                  IDMASTER
                </div>
                <div className="text-xs text-gray-400 hidden sm:block font-sans">Scannable UV hologram</div>
              </div>
            </Link>

            {/* Desktop Navigation */} 
            <div className="hidden lg:flex space-x-8">
              <Link href="/" className="text-yellow-green hover:text-yellow-green transition text-sm">HOME</Link>
              <Link href="/product-info" className="hover:text-yellow-green transition text-sm text-gray-300">PRODUCT INFO</Link>
              <Link href="/order" className="hover:text-yellow-green transition text-sm text-gray-300">ORDER</Link>
              <Link href="/product-list" className="hover:text-yellow-green transition text-sm text-gray-300">PRODUCT LIST</Link>
              <Link href="/use-guide" className="hover:text-yellow-green transition text-sm text-gray-300">USE GUIDE</Link>
              <Link href="/evaluate" className="hover:text-yellow-green transition text-sm text-gray-300">EVALUATE</Link>
              <Link href="/faq" className="hover:text-yellow-green transition text-sm text-gray-300">FAQ</Link>
              <Link href="/contact-us" className="hover:text-yellow-green transition text-sm text-gray-300">CONTACT US</Link>
            </div>

            {/* Cart Icon */}
            <div className="flex items-center">
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 cursor-pointer hover:text-blue-300 transition" />
              </Link>
            </div>
          </div>

          {/* Mobile Horizontal Scroll Menu */}
          <div className="lg:hidden overflow-x-auto pb-3 hide-scrollbar">
            <div className="flex space-x-6 min-w-max">
              <Link href="/" className="text-yellow-green text-sm whitespace-nowrap border-b-2 border-yellow-green pb-1">HOME</Link>
              <Link href="/product-info" className="text-gray-300 hover:text-yellow-green transition text-sm whitespace-nowrap">PRODUCT INFO</Link>
              <Link href="/order" className="text-gray-300 hover:text-yellow-green transition text-sm whitespace-nowrap">ORDER</Link>
              <Link href="/product-list" className="text-gray-300 hover:text-yellow-green transition text-sm whitespace-nowrap">PRODUCT LIST</Link>
              <Link href="/use-guide" className="text-gray-300 hover:text-yellow-green transition text-sm whitespace-nowrap">USE GUIDE</Link>
              <Link href="/faq" className="text-gray-300 hover:text-yellow-green transition text-sm whitespace-nowrap">FAQ</Link>
              <Link href="/contact-us" className="text-gray-300 hover:text-yellow-green transition text-sm whitespace-nowrap">CONTACT US</Link>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 border-t border-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-4 sm:mb-6">
                <span className="text-yellow-green">Top Fake ID Maker</span>
              </h1>
              <p className="text-lg sm:text-2xl lg:text-3xl mb-3 sm:mb-4">
                Building Premium, Authentic-Looking and Scannable <span className="text-yellow-green">Fake IDs</span> for you
              </p>
              <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
                Starting from <span className="text-yellow-green">$65</span>, Delivered within <span className="text-yellow-green">10 days</span>
              </p>
              <div className="flex flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                <button className="bg-yellow-green text-black px-4 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-yellow-green transition text-sm sm:text-base lg:text-lg">
                  Order Now
                </button>
                <button className="border-2 border-white px-4 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-black transition text-sm sm:text-base lg:text-lg">
                  Contact Us
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600 border-2 border-gray-900"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500 border-2 border-gray-900"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 border-2 border-gray-900"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600 border-2 border-gray-900"></div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-yellow-green">20.5K+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Worldwide Delivery</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-green">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 50 50" fill="currentColor">
                      <path d="M25 5 L30 20 L45 20 L33 28 L38 43 L25 35 L12 43 L17 28 L5 20 L20 20 Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Holograms, UV Marker</div>
                    <div className="text-xs sm:text-sm text-gray-400">Anti-Counterfeiting</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Image */}
            <div className="relative hidden lg:block lg:order-2">
              <div className="watermarked-image rounded-lg">
                <img 
                  src="/images/landinggirl.jpg" 
                  alt="Person holding ID card" 
                  className="rounded-lg w-full h-auto object-contain"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
            {/* Mobile Image */}
            <div className="relative mt-8 lg:hidden order-3">
              <div className="watermarked-image rounded-lg">
                <img 
                  src="/images/landinggirl.jpg" 
                  alt="Person holding ID card" 
                  className="rounded-lg w-full h-auto object-contain"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-display font-bold">Tens of Thousands Choose Us for Quality and Reliability</h2>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-6">
            <div className="text-center">
              <div className="text-yellow-green mb-1">↑</div>
              <div className="text-3xl sm:text-5xl font-bold text-yellow-green mb-1">20000<span className="text-xl sm:text-3xl">+</span></div>
              <div className="text-gray-400 text-xs sm:text-base">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-green mb-1">↑</div>
              <div className="text-3xl sm:text-5xl font-bold text-yellow-green mb-1">30000<span className="text-xl sm:text-3xl">+</span></div>
              <div className="text-gray-400 text-xs sm:text-base">Total Orders</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-green mb-1">↑</div>
              <div className="text-3xl sm:text-5xl font-bold text-yellow-green mb-1">15000<span className="text-xl sm:text-3xl">+</span></div>
              <div className="text-gray-400 text-xs sm:text-base">Total Reviews</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold text-yellow-green mb-1">99%<span className="text-xl sm:text-3xl">&gt;</span></div>
              <div className="text-gray-400 text-xs sm:text-base">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold text-yellow-green mb-1">1%<span className="text-xl sm:text-3xl">&lt;</span></div>
              <div className="text-gray-400 text-xs sm:text-base">Order Refund Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Products Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-3 sm:mb-4">Hot Fake ID / Fake Driver License</h2>
          <p className="text-center text-yellow-green mb-8 sm:mb-12 cursor-pointer hover:underline">View more &gt;</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {['California', 'Florida', 'New York Old Verison', 'SSN'].map((state, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition">
                <div className="bg-gray-700 h-40 sm:h-48 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">ID Preview</div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">{state}</h3>
                  <button className="w-full bg-yellow-green text-black py-2.5 sm:py-3 rounded-full font-semibold hover:bg-yellow-green transition text-sm sm:text-base">
                    Order - $90
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How ID Looks Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-8 sm:mb-12">How our Fake ID looks like</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            {['Front', 'Back', 'Front (UV)', 'Back (UV)'].map((view, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gray-700 h-32 sm:h-48 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                  <div className="text-gray-500 text-xs sm:text-base">{view}</div>
                </div>
                <p className="font-semibold text-sm sm:text-base">{view}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-4">Fake ID template videos</h2>
          <p className="text-center text-yellow-green mb-12 cursor-pointer hover:underline">Contact us to learn more &gt;</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['California Video', 'Florida Video', 'New York Video', 'Ontario Video'].map((video, idx) => (
              <div key={idx}>
                <div className="bg-gray-700 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-gray-500">▶</div>
                </div>
                <p className="font-semibold text-center">{video}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-8 sm:mb-12">Product Features</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            {[
              { title: 'Scannable', desc: 'Scan the barcode on the back to obtain fake id card information, which can be verified by most applications, software and systems.' },
              { title: 'Hologram', desc: 'Each state uses a unique holographic pattern, creating a 3D effect via light reflection/refraction, enhancing fake ID authenticity.' },
              { title: 'UV mark', desc: 'Using UV or black light, the card will reveal a specific pattern or marking that matches the appearance of a real ID card.' },
              { title: 'Advanced Technology', desc: 'Anti-counterfeiting, embossing, and laser technologies ensure the card info is fade-resistant and raised, enhancing tactile texture.' },
              { title: 'Strong durability', desc: 'Fake ID cards are resistant to tearing, water resistance and chemical corrosion.' },
              { title: 'High Quality', desc: 'Made from premium materials. Bending tests show they are not easily broken.' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gray-700 h-32 sm:h-40 rounded-lg mb-3 sm:mb-4"></div>
                <h3 className="text-base sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic and Secure Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                Make Fake ID more Authentic and more Secure
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our Fake ID cards are carefully designed in every detail and use advanced security elements such as holograms, UV printing, anti-counterfeiting, embossing, laser, etc. to ensure greater authenticity and security
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-green text-xl">☑</span>
                  <span className="text-yellow-green">Holograms, UV Printing, Micro Text Printing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-green text-xl">☑</span>
                  <span className="text-yellow-green">Laser Engraving, Raised Text and Embossing, Barcode and QR Code Integration</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-green text-xl">☑</span>
                  <span className="text-yellow-green">Teslin Durable Materials, Color-Changing Inks, State-Specific Features</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-green text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-green transition">
                  Order Now
                </button>
                <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1554224311-beee2619248c?w=800&q=80" alt="ID Cards" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Fake ID Protects You Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-4">Fake ID Protects You</h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            4 features to give you extra protection, so you can stay calm even under the close scrutiny of the liquor store cashier or club bouncer.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">ID Card Image</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="w-16 h-16 bg-yellow-green rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">☀</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-gray-400">invisible to UV</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-green rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🖨</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">300 DPI</h3>
                <p className="text-gray-400">micro-printing</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-green rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">+30MIL</h3>
                <p className="text-gray-400">card thickness</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-green rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">3 SUBSTRATES</h3>
                <p className="text-gray-400">micro-printing</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-yellow-green text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-green transition">
              Order Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-8 sm:mb-12">What a scannable ID card can do for you?</h2>
          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[
              {
                title: 'Enter entertainment venues',
                desc: "Don't be afraid of security checks and easily enter nightclubs, bars and other entertainment venues.",
                img: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=600&q=80'
              },
              {
                title: 'Attend an event or competition',
                desc: 'Feel free to attend parties and social events, and legally participate in sporting events.',
                img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80'
              },
              {
                title: 'Travel car rental and hotel stay',
                desc: 'Easily rent a car for cross-state travel in the United States and quickly check into your hotel.',
                img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80'
              },
              {
                title: 'Purchase restricted items',
                desc: 'Alcohol, tobacco and other products are no longer restricted and can be purchased at any time.',
                img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80'
              },
              {
                title: 'Get employment opportunities',
                desc: 'Match career needs (sales, driver) and get a job faster and easier.',
                img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80'
              },
              {
                title: 'Waiting for you to unlock more uses',
                desc: '',
                img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80'
              }
            ].map((useCase, idx) => (
              <div key={idx} className="flex sm:block gap-4 sm:gap-0">
                <img src={useCase.img} alt={useCase.title} className="w-32 h-32 sm:w-full sm:h-40 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1 sm:mt-4">
                  <h3 className="text-base sm:text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12">How to Get Your Fake ID</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=800&q=80" alt="Delivery" className="rounded-lg" />
            </div>
            <div className="space-y-6">
              {[
                { num: '1', text: 'Fill in your fake ID and shipping address info', arrow: true },
                { num: '2', text: 'Submit order, contact us, complete payment', arrow: true },
                { num: '3', text: 'Get electronic fake ID preview (fastest 3 days)', arrow: true },
                { num: '4', text: 'Get package tracking number (2 days later)', arrow: true },
                { num: '5', text: 'Get fake ID package (fastest 5-7 days)', arrow: false }
              ].map((step, idx) => (
                <div key={idx}>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">{step.num}.</span>
                    <span className="text-lg">{step.text}</span>
                  </div>
                  {step.arrow && (
                    <div className="ml-6 text-yellow-green text-3xl">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-yellow-green text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-green transition">
              Order Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-green mb-4">✓ High Credibility</h3>
              <p className="text-gray-300 mb-4">
                We have 10+ years of experience, serving thousands of customers, and are trustworthy.
              </p>
              <p className="text-gray-300">
                We guarantee that fake ID cards you order will be delivered to you safely. If not, we will resend it.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-green mb-4">✓ Delivered within 10 Days</h3>
              <p className="text-gray-300">
                From the day of ordering, the package will be received within 10 days.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-green mb-4">✓ Real DMV Template</h3>
              <p className="text-gray-300">
                We clone real DMV-issued ID card templates to ensure your card looks exactly like the real thing.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-green mb-4">✓ 7*24 Hours Service</h3>
              <p className="text-gray-300">
                If you have any questions, you can contact us at any time.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-green mb-4">✓ Scannable ID Technology</h3>
              <p className="text-gray-300">
                All fake ID cards are scannable and guaranteed to pass detection systems.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-green mb-4">✓ Money Back Guarantee</h3>
              <p className="text-gray-300">
                If the item is not received, you can contact us to negotiate a refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12">About Us</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(12)].map((_, idx) => (
                  <div key={idx} className="bg-gray-700 h-32 rounded-lg transform rotate-12 hover:rotate-0 transition"></div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                idplugmaster is the industry-leading Fake ID card production website. The website provides you with high-quality, legal, scannable Fake ID cards from all Canadian and US states, using high-tech printing technology to ensure that each card passes all security tests.
              </p>
              <p className="text-lg text-gray-300">
                We can help you obtain high-quality Fake ID cards with holograms and UV logos to ensure clear visibility under UV light. Our cards are not only scannable, but also embossed and laser technology to perfectly replicate the real driver's license.
              </p>
              <p className="text-lg text-gray-300">
                We focus on quality and details, and attach great importance to user privacy. The entire ordering process is simple and secure, ensuring that you get the best experience and feel confident every time you use your Fake ID card.
              </p>
              <p className="text-lg text-gray-300">
                Choosing us, you will not only get a high-quality virtual ID document, but also complete peace of mind.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-yellow-green text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-green transition">
              Order Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-6">Payment Methods</h2>
          <p className="text-center text-lg mb-12">
            It is recommended to pay with <span className="text-yellow-green">cryptocurrency</span> to ensure that your payment is untraceable and confidential, and the transaction is not only fast and reliable but also more secure.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
            {[
              { name: 'PayPal', icon: '💳' },
              { name: 'Credit Card', icon: '💳' },
              { name: 'Debit Card', icon: '💳' },
              { name: 'Apple Pay', icon: '🍎' },
              { name: 'Cryptocurrency', icon: '₿' },
              { name: 'Cash App', icon: '💵' },
              { name: 'Remitly', icon: '💸' },
              { name: 'WesternUnion', icon: '💰' }
            ].map((payment, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-2">
                  <span className="text-3xl">{payment.icon}</span>
                </div>
                <span className="text-sm text-center">{payment.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-3 sm:mb-4">Good reviews display wall</h2>
          <p className="text-center text-base sm:text-xl mb-8 sm:mb-12">We have served many customers and are trustworthy.</p>
          
          {/* Chat Screenshots Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-700 rounded-lg h-48 sm:h-64"></div>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Praised in hundreds of comments</h3>
          <p className="text-center text-base sm:text-xl mb-8 sm:mb-12">We have served many customers and are trustworthy</p>
          
          {/* Customer Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 sm:mb-12">
            <div className="bg-white text-black rounded-lg p-4 sm:p-6">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-sm sm:text-base">Deonte Kentrell Batts</div>
                  <div className="text-xs sm:text-sm text-gray-600">2025-09-07</div>
                </div>
              </div>
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm">For anyone wondering I just tried them out good customer service. Answered all my msgs. I'll keep y'all informed</p>
              <div className="bg-gray-100 h-32 sm:h-48 rounded"></div>
            </div>
            <div className="bg-white text-black rounded-lg p-4 sm:p-6">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-sm sm:text-base">Karen Thompson</div>
                  <div className="text-xs sm:text-sm text-gray-600">2025-06-01</div>
                </div>
              </div>
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm">I made a mistake in the info due to my own carelessness, but the customer service caught it – incredibly attentive! Service deserves full marks!</p>
              <div className="bg-gray-100 h-32 sm:h-48 rounded"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-yellow-green text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-green transition">
              Order Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Quick Links</h3>
              <div className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                <Link href="/" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">HOME</Link>
                <Link href="/product-info" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">PRODUCT INFO</Link>
                <Link href="/order" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">ORDER</Link>
                <Link href="/product-list" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">PRODUCT LIST</Link>
                <Link href="/use-guide" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">USE GUIDE</Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">EVALUATE</Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">FAQ</Link>
                <Link href="/contact-us" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">CONTACT US</Link>
              </div>
            </div>

            {/* Related Policies */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Related Policies</h3>
              <div className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                <Link href="#" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">RETURN & REFUND POLICY</Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">SHIPPING POLICY</Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">TERMS & CONDITIONS</Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">PRIVACY POLICY</Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-green transition text-xs sm:text-sm">PAYMENT POLICY</Link>
              </div>
            </div>

            {/* Contact Us / About */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-300">About</h3>
              <div className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <p><span className="font-semibold">Company:</span> IDPLUGMASTER Inc.</p>
                <p><span className="font-semibold">Address:</span> 548 Market St Suite 96966, San Francisco, CA 94104</p>
                <p><span className="font-semibold">WhatsApp:</span> 12052185256</p>
                <p><span className="font-semibold">Telegram:</span> idcardmoss</p>
                <p><span className="font-semibold">Email:</span> orders@idplugmaster.com</p>
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.116 13.815l-2.91-.907c-.632-.196-.642-.632.135-.936l11.37-4.364c.526-.194.988.12.817.936z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 sm:pt-8 mt-8 sm:mt-12 border-t border-gray-800">
            <p className="text-gray-500 text-xs sm:text-sm">Copyright © 2026, idmasterplug, All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {/* Floating Support Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col space-y-3 z-40">
        <button 
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20BA5A] transition flex flex-col items-center"
          onClick={() => window.open('https://wa.me/16266659178', '_blank')}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="text-xs mt-1">Online Service</span>
        </button>
        <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}