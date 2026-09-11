'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { ShoppingCart, ChevronUp, Search } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getCartItemCount } from '@/lib/cart';

// ─── Image mapping ────────────────────────────────────────────────────────────
const PRODUCT_IMAGES: Record<string, string> = {
  'Alabama': '/images/alabama.jpg', 'Arizona': '/images/arizona.jpg',
  'California': '/images/california.jpg', 'California CM1': '/images/california.jpg',
  'California CDL': '/images/california.jpg', 'Colorado': '/images/colorado.jpg',
  'Connecticut': '/images/connecticut.jpg', 'Delaware': '/images/delaware.jpg',
  'Florida': '/images/florida.jpg', 'Florida Motorcycle': '/images/florida.jpg',
  'Georgia': '/images/georgia.jpg', 'Illinois': '/images/maintemplate.png',
  'Illinois CDL': '/images/maintemplate.png', 'Indiana': '/images/indiana.jpg',
  'Kansas': '/images/kansas.jpg', 'Maryland': '/images/maryland.jpg',
  'Massachusetts': '/images/massachusetts.jpg', 'Michigan': '/images/michigan.jpg',
  'Minnesota': '/images/minnesota.jpg', 'Mississippi': '/images/mississippi.jpg',
  'Missouri': '/images/missouri.jpg', 'Nebraska': '/images/nebraska.jpg',
  'Nevada': '/images/nevada.jpg', 'New Jersey': '/images/newjersey.jpg',
  'New York Old Verison': '/images/newyork.jpg', 'New York CDL': '/images/newyork.jpg',
  'North Carolina': '/images/northcarolina.jpg', 'Ohio': '/images/ohio.jpg',
  'Ohio CDL': '/images/ohio.jpg', 'Pennsylvania': '/images/pennsylvania.jpg',
  'Pennsylvania CDL': '/images/pennsylvania.jpg', 'Rhode Island': '/images/rhodeisland.jpg',
  'South Carolina': '/images/southcarolina.jpg', 'Tennessee': '/images/tennessee.jpg',
  'Texas': '/images/texas.jpg', 'Texas CDL': '/images/texas.jpg',
  'Utah': '/images/utah.jpg', 'Virginia': '/images/virginia.jpg',
  'Washington': '/images/washington.jpg', 'Wisconsin': '/images/wisconsin.jpg',
  'British Columbia': '/images/british.jpg', 'Ontario': '/images/ontario.jpg',
  'Quebec': '/images/quebec.jpg',
  'London': '/images/uk.jpg', 'Newcastle': '/images/uk.jpg', 'Wales': '/images/uk.jpg',
  'Scotland': '/images/uk.jpg', 'Northern Ireland': '/images/uk.jpg',
  'Birmingham': '/images/uk.jpg', 'Manchester': '/images/uk.jpg',
  'Liverpool': '/images/uk.jpg', 'Leeds': '/images/uk.jpg', 'Bristol': '/images/uk.jpg',
  'SSN': '/images/ssn.png',
  // Europe
  'Germany': '/images/germany.jpg',
  'Netherlands': '/images/netherlands.jpg',
  'France': '/images/france.jpg',
  'Ireland': '/images/ireland.jpg',
  // Oceania
  'Australia': '/images/australia.jpg',
  // South America
  'Argentina': '/images/argentina.jpg',
};

function getProductImage(name: string, category: string): string {
  if (PRODUCT_IMAGES[name]) return PRODUCT_IMAGES[name];
  if (category === 'UK ID') return '/images/maintemplate.png';
  return '/images/maintemplate.png';
}

// ─── Product data ─────────────────────────────────────────────────────────────
interface Product {
  id: string; name: string;
  category: 'USA ID' | 'CANADA ID' | 'UK ID' | 'SSN' | 'GERMANY ID' | 'NETHERLANDS ID' | 'FRANCE ID' | 'IRELAND ID' | 'AUSTRALIA ID' | 'ARGENTINA ID';
  price: number; image: string;
}

const rawProducts: Omit<Product, 'image'>[] = [
  { id: 'alabama', name: 'Alabama', category: 'USA ID', price: 100 },
  { id: 'arizona', name: 'Arizona', category: 'USA ID', price: 100 },
  { id: 'california', name: 'California', category: 'USA ID', price: 100 },
  { id: 'california-cm1', name: 'California CM1', category: 'USA ID', price: 100 },
  { id: 'connecticut', name: 'Connecticut', category: 'USA ID', price: 100 },
  { id: 'delaware', name: 'Delaware', category: 'USA ID', price: 100 },
  { id: 'florida', name: 'Florida', category: 'USA ID', price: 100 },
  { id: 'florida-motorcycle', name: 'Florida Motorcycle', category: 'USA ID', price: 100 },
  { id: 'georgia', name: 'Georgia', category: 'USA ID', price: 100 },
  { id: 'illinois', name: 'Illinois', category: 'USA ID', price: 100 },
  { id: 'indiana', name: 'Indiana', category: 'USA ID', price: 100 },
  { id: 'kansas', name: 'Kansas', category: 'USA ID', price: 100 },
  { id: 'maryland', name: 'Maryland', category: 'USA ID', price: 100 },
  { id: 'massachusetts', name: 'Massachusetts', category: 'USA ID', price: 100 },
  { id: 'michigan', name: 'Michigan', category: 'USA ID', price: 100 },
  { id: 'minnesota', name: 'Minnesota', category: 'USA ID', price: 100 },
  { id: 'mississippi', name: 'Mississippi', category: 'USA ID', price: 100 },
  { id: 'missouri', name: 'Missouri', category: 'USA ID', price: 100 },
  { id: 'nebraska', name: 'Nebraska', category: 'USA ID', price: 100 },
  { id: 'nevada', name: 'Nevada', category: 'USA ID', price: 100 },
  { id: 'new-jersey', name: 'New Jersey', category: 'USA ID', price: 100 },
  { id: 'new-york', name: 'New York Old Verison', category: 'USA ID', price: 100 },
  { id: 'north-carolina', name: 'North Carolina', category: 'USA ID', price: 100 },
  { id: 'ohio', name: 'Ohio', category: 'USA ID', price: 100 },
  { id: 'pennsylvania', name: 'Pennsylvania', category: 'USA ID', price: 100 },
  { id: 'rhode-island', name: 'Rhode Island', category: 'USA ID', price: 100 },
  { id: 'south-carolina', name: 'South Carolina', category: 'USA ID', price: 100 },
  { id: 'texas', name: 'Texas', category: 'USA ID', price: 100 },
  { id: 'utah', name: 'Utah', category: 'USA ID', price: 100 },
  { id: 'virginia', name: 'Virginia', category: 'USA ID', price: 100 },
  { id: 'washington', name: 'Washington', category: 'USA ID', price: 100 },
  { id: 'california-cdl', name: 'California CDL', category: 'USA ID', price: 100 },
  { id: 'illinois-cdl', name: 'Illinois CDL', category: 'USA ID', price: 100 },
  { id: 'new-york-cdl', name: 'New York CDL', category: 'USA ID', price: 100 },
  { id: 'ohio-cdl', name: 'Ohio CDL', category: 'USA ID', price: 100 },
  { id: 'pennsylvania-cdl', name: 'Pennsylvania CDL', category: 'USA ID', price: 100 },
  { id: 'texas-cdl', name: 'Texas CDL', category: 'USA ID', price: 100 },
  { id: 'british-columbia', name: 'British Columbia', category: 'CANADA ID', price: 100 },
  { id: 'ontario', name: 'Ontario', category: 'CANADA ID', price: 100 },
  { id: 'quebec', name: 'Quebec', category: 'CANADA ID', price: 100 },
  { id: 'london', name: 'London', category: 'UK ID', price: 90 },
  { id: 'newcastle', name: 'Newcastle', category: 'UK ID', price: 90 },
  { id: 'wales', name: 'Wales', category: 'UK ID', price: 90 },
  { id: 'scotland', name: 'Scotland', category: 'UK ID', price: 90 },
  { id: 'northern-ireland', name: 'Northern Ireland', category: 'UK ID', price: 90 },
  { id: 'birmingham', name: 'Birmingham', category: 'UK ID', price: 90 },
  { id: 'manchester', name: 'Manchester', category: 'UK ID', price: 90 },
  { id: 'liverpool', name: 'Liverpool', category: 'UK ID', price: 90 },
  { id: 'leeds', name: 'Leeds', category: 'UK ID', price: 90 },
  { id: 'bristol', name: 'Bristol', category: 'UK ID', price: 90 },
  { id: 'ssn', name: 'SSN', category: 'SSN', price: 100 },
  // Individual countries — each has its own category
  { id: 'germany', name: 'Germany', category: 'GERMANY ID', price: 100 },
  { id: 'netherlands', name: 'Netherlands', category: 'NETHERLANDS ID', price: 100 },
  { id: 'france', name: 'France', category: 'FRANCE ID', price: 100 },
  { id: 'ireland', name: 'Ireland', category: 'IRELAND ID', price: 100 },
  { id: 'australia', name: 'Australia', category: 'AUSTRALIA ID', price: 100 },
  { id: 'argentina', name: 'Argentina', category: 'ARGENTINA ID', price: 100 },
];

const allProducts: Product[] = rawProducts
  .map(p => ({ ...p, image: getProductImage(p.name, p.category) }))
  .sort((a, b) => a.name.localeCompare(b.name));

// ─── Categories ───────────────────────────────────────────────────────────────
const CATEGORIES = [
  { key: 'USA ID',         abbr: 'US',  label: 'USA',         flag: '🇺🇸', desc: 'All US states with holograms and UV features' },
  { key: 'UK ID',          abbr: 'UK',  label: 'UK',          flag: '🇬🇧', desc: 'UK driving licences with UV features' },
  { key: 'CANADA ID',      abbr: 'CA',  label: 'Canada',      flag: '🇨🇦', desc: 'Canadian provincial IDs with holograms' },
  { key: 'GERMANY ID',     abbr: 'DE',  label: 'Germany',     flag: '🇩🇪', desc: 'German national ID cards' },
  { key: 'NETHERLANDS ID', abbr: 'NL',  label: 'Netherlands', flag: '🇳🇱', desc: 'Dutch ID cards' },
  { key: 'FRANCE ID',      abbr: 'FR',  label: 'France',      flag: '🇫🇷', desc: 'French national IDs' },
  { key: 'IRELAND ID',     abbr: 'IE',  label: 'Ireland',     flag: '🇮🇪', desc: 'Irish ID cards' },
  { key: 'AUSTRALIA ID',   abbr: 'AU',  label: 'Australia',   flag: '🇦🇺', desc: 'Australian driver licences' },
  { key: 'ARGENTINA ID',   abbr: 'AR',  label: 'Argentina',   flag: '🇦🇷', desc: 'Argentine DNI national identity cards' },
  { key: 'SSN',            abbr: 'SSN', label: 'SSN',         flag: '🪪', desc: 'Replica Social Security card' },
] as const;

// ─── Nav ──────────────────────────────────────────────────────────────────────
function SiteNav({ cartCount }: { cartCount: number }) {
  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/logo.jpg" alt="IDPlugSource Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-lg" />
            <div className="flex flex-col">
              <div className="text-yellow-green text-base sm:text-lg font-display font-semibold tracking-tight">IDPlugSource</div>
              <div className="text-xs text-gray-400 hidden sm:block">Scannable UV hologram</div>
            </div>
          </Link>
          <div className="hidden lg:flex space-x-8">
            {[['/', 'HOME'], ['/product-info', 'PRODUCT INFO'], ['/order', 'ORDER'], ['/use-guide', 'USE GUIDE'], ['/evaluate', 'EVALUATE'], ['/faq', 'FAQ'], ['/contact-us', 'CONTACT US']].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-yellow-green transition text-xs sm:text-sm text-gray-300">{label}</Link>
            ))}
            <Link href="/product-list" className="text-yellow-green text-xs sm:text-sm border-b-2 border-yellow-green pb-1">PRODUCT LIST</Link>
          </div>
          <div className="flex items-center relative">
            <Link href="/cart">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 cursor-pointer hover:text-blue-300 transition" />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
            </Link>
          </div>
        </div>
        <div className="lg:hidden overflow-x-auto pb-3 hide-scrollbar">
          <div className="flex space-x-6 min-w-max text-xs sm:text-sm">
            <Link href="/" className="text-gray-300 hover:text-yellow-green whitespace-nowrap">HOME</Link>
            <Link href="/product-info" className="text-gray-300 hover:text-yellow-green whitespace-nowrap">PRODUCT INFO</Link>
            <Link href="/order" className="text-gray-300 hover:text-yellow-green whitespace-nowrap">ORDER</Link>
            <Link href="/product-list" className="text-yellow-green whitespace-nowrap border-b-2 border-yellow-green pb-1">PRODUCT LIST</Link>
            <Link href="/use-guide" className="text-gray-300 hover:text-yellow-green whitespace-nowrap">USE GUIDE</Link>
            <Link href="/evaluate" className="text-gray-300 hover:text-yellow-green whitespace-nowrap">EVALUATE</Link>
            <Link href="/faq" className="text-gray-300 hover:text-yellow-green whitespace-nowrap">FAQ</Link>
            <Link href="/contact-us" className="text-gray-300 hover:text-yellow-green whitespace-nowrap">CONTACT US</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = React.useState(false);
  const cur = product.category === 'UK ID' ? '£' : '$';
  return (
    <div className="flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="aspect-[3.375/2.125] relative overflow-hidden bg-gray-100 cursor-pointer"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <img src={product.image} alt={`Buy fake ${product.name} ID - scannable fake driver license`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`} />
        <img src="/images/maintemplate.png" alt={`${product.name} UV back view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
        <span className="absolute top-2 right-2 bg-black/70 text-yellow-green text-xs font-bold px-2 py-0.5 rounded-full z-10">{cur}{product.price}</span>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-2 text-center">{product.name}</h3>
        <Link href={`/order?product=${encodeURIComponent(product.name)}`}
          className="mt-auto w-full bg-yellow-green text-black py-2 rounded-full font-semibold hover:opacity-90 transition text-center text-xs sm:text-sm block">
          Order — {cur}{product.price}
        </Link>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function ProductListContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams?.get('cat') ?? '';
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cartCount, setCartCount] = React.useState(0);

  const activeCat = CATEGORIES.find(c => c.key === catParam)?.key ?? null;
  const activeCatConfig = CATEGORIES.find(c => c.key === activeCat);

  useEffect(() => {
    const update = () => setCartCount(getCartItemCount());
    update();
    window.addEventListener('cartUpdated', update);
    return () => window.removeEventListener('cartUpdated', update);
  }, []);

  const filteredProducts = useMemo(() => {
    let list = activeCat ? allProducts.filter(p => p.category === activeCat) : allProducts;
    if (searchQuery.trim()) list = list.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return list;
  }, [activeCat, searchQuery]);

  const counts = useMemo(() => ({
    all: allProducts.length,
    'USA ID': allProducts.filter(p => p.category === 'USA ID').length,
    'UK ID': allProducts.filter(p => p.category === 'UK ID').length,
    'CANADA ID': allProducts.filter(p => p.category === 'CANADA ID').length,
    'SSN': allProducts.filter(p => p.category === 'SSN').length,
  }), []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SiteNav cartCount={cartCount} />
      <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>

      {/* Hero banner */}
      <div className="pt-16 sm:pt-20">
        <div className="w-full h-44 sm:h-56 lg:h-64 relative overflow-hidden">
          <img src="/images/bgimg.png" alt="Buy fake IDs online - IDPlugSource product catalogue" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb */}
          <div className="py-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-yellow-green">Home</Link>{' / '}
            {activeCat
              ? <><Link href="/product-list" className="hover:text-yellow-green">Products</Link>{' / '}<span className="text-gray-800 font-semibold">Products</span></>
              : <span className="text-gray-800 font-semibold">Products</span>
            }
          </div>

          {/* Search */}
          <div className="mb-5 flex justify-center">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by state or region..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-green bg-white shadow-sm" />
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Link href="/product-list"
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition border ${!activeCat ? 'bg-yellow-green text-black border-yellow-green' : 'bg-white text-gray-700 border-gray-300 hover:border-yellow-green'}`}>
              All ({counts.all})
            </Link>
            {CATEGORIES.map(cat => (
              <Link key={cat.key} href={`/product-list?cat=${encodeURIComponent(cat.key)}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition border flex items-center gap-1.5 ${activeCat === cat.key ? 'bg-yellow-green text-black border-yellow-green font-semibold' : 'bg-white text-gray-700 border-gray-300 hover:border-yellow-green'}`}>
                <span>{cat.flag}</span>
                <span>{cat.abbr === 'CA' ? 'Canada' : cat.abbr}</span>
                <span className="text-gray-500">({counts[cat.key as keyof typeof counts]})</span>
              </Link>
            ))}
          </div>

          {/* Overview cards — no image, matching screenshot */}
          {!activeCat && !searchQuery && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {CATEGORIES.map(cat => {
                const count = counts[cat.key as keyof typeof counts];
                return (
                  <Link key={cat.key} href={`/product-list?cat=${encodeURIComponent(cat.key)}`}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-yellow-green transition-all duration-200 flex flex-col group relative p-6">
                    <span className="absolute top-4 right-4 bg-yellow-green text-black text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shadow">{count}</span>
                    <div className="text-5xl font-display font-extrabold text-yellow-green mb-1">{cat.abbr}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base font-semibold text-gray-800">{cat.label}</span>
                      <span className="text-xl">{cat.flag}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{count} products</p>
                    <p className="text-xs text-yellow-green mb-5">{cat.desc}</p>
                    <span className="w-full bg-yellow-green text-black py-2.5 rounded-full font-semibold text-sm text-center group-hover:opacity-90 transition mt-auto">
                      View All →
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Product grid */}
          {(activeCat || searchQuery) && (
            <>
              {activeCatConfig && (
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{activeCatConfig.flag}</span>
                  <div>
                    <h1 className="text-2xl font-display font-bold text-gray-900">{activeCatConfig.label} Fake IDs</h1>
                    <p className="text-sm text-gray-500">{filteredProducts.length} products · <Link href="/product-list" className="text-yellow-green hover:underline">All categories</Link></p>
                  </div>
                </div>
              )}
              {!activeCatConfig && searchQuery && (
                <p className="text-sm text-gray-500 mb-5">{filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo; · <Link href="/product-list" className="text-yellow-green hover:underline">Clear</Link></p>
              )}
              {filteredProducts.length === 0
                ? <p className="text-center text-gray-500 py-16">No products found.</p>
                : <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
                    {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
                  </div>
              }
            </>
          )}

        </div>
      </div>

      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
            {[['/', 'HOME'], ['/product-info', 'PRODUCT INFO'], ['/order', 'ORDER'], ['/product-list', 'PRODUCT LIST'], ['/use-guide', 'USE GUIDE'], ['/evaluate', 'EVALUATE'], ['/faq', 'FAQ'], ['/contact-us', 'CONTACT US']].map(([href, label]) => (
              <Link key={href} href={href} className="text-gray-400 hover:text-yellow-green text-xs">{label}</Link>
            ))}
          </div>
          <div className="text-gray-400 text-xs space-y-1 mb-6">
            <p><span className="font-semibold text-gray-300">Company:</span> IDPlugSource Inc. · <span className="font-semibold text-gray-300">WhatsApp:</span> +1 (912) 484-4702 · <span className="font-semibold text-gray-300">Email:</span> idplugsource@gmail.com</p>
          </div>
          <div className="text-center pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">Copyright {'\u00A9'} 2026, IDPlugSource, All Rights Reserved</p>
          </div>
        </div>
      </footer>

      <div className="fixed left-4 bottom-4 z-30">
        <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
