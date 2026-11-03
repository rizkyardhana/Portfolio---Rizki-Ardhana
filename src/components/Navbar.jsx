import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-lavender-600 to-lavender-900 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              RA
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-gray-900 group-hover:text-lavender-700 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs font-semibold text-lavender-600 tracking-wider uppercase">
                {personalInfo.position}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-gray-600">
            <a href="#hero" className="px-3 py-2 rounded-lg hover:text-lavender-700 hover:bg-lavender-50 transition-colors">Beranda</a>
            <a href="#about" className="px-3 py-2 rounded-lg hover:text-lavender-700 hover:bg-lavender-50 transition-colors">Tentang Saya</a>
            <a href="#skills" className="px-3 py-2 rounded-lg hover:text-lavender-700 hover:bg-lavender-50 transition-colors">Skills & Tools</a>
            <a href="#dummy-project" className="px-3 py-2 rounded-lg hover:text-lavender-700 hover:bg-lavender-50 transition-colors">Dummy Project</a>
            <a href="#copywriting" className="px-3 py-2 rounded-lg hover:text-lavender-700 hover:bg-lavender-50 transition-colors">Copywriting</a>
            <a href="#feed-design" className="px-3 py-2 rounded-lg hover:text-lavender-700 hover:bg-lavender-50 transition-colors">Feed IG</a>
            <a href="#story-design" className="px-3 py-2 rounded-lg hover:text-lavender-700 hover:bg-lavender-50 transition-colors">Story IG</a>
            <a href="#reels-video" className="px-3 py-2 rounded-lg hover:text-lavender-700 hover:bg-lavender-50 transition-colors">Reels Video</a>
            <a href="#catalog" className="px-3 py-2 rounded-lg hover:text-lavender-700 hover:bg-lavender-50 transition-colors">Katalog</a>
          </nav>

          {/* Quick CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${personalInfo.whatsappNumber}?text=Halo%20${encodeURIComponent(personalInfo.name)},%20saya%20tertarik%20bekerja%20sama.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lavender-700 hover:bg-lavender-800 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm transition-all"
            >
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-lavender-700 hover:bg-lavender-50 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-brand-border bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <a onClick={() => setIsOpen(false)} href="#hero" className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-lavender-50">Beranda</a>
          <a onClick={() => setIsOpen(false)} href="#about" className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-lavender-50">Tentang Saya</a>
          <a onClick={() => setIsOpen(false)} href="#skills" className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-lavender-50">Skills & Tools</a>
          <a onClick={() => setIsOpen(false)} href="#dummy-project" className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-lavender-50">Dummy Project UMKM</a>
          <a onClick={() => setIsOpen(false)} href="#copywriting" className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-lavender-50">Copywriting Project</a>
          <a onClick={() => setIsOpen(false)} href="#feed-design" className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-lavender-50">Instagram Feed Design</a>
          <a onClick={() => setIsOpen(false)} href="#story-design" className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-lavender-50">Instagram Story Design</a>
          <a onClick={() => setIsOpen(false)} href="#reels-video" className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-lavender-50">Reels Video Editing</a>
          <a onClick={() => setIsOpen(false)} href="#catalog" className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-lavender-50">Product Catalog Design</a>
          <a onClick={() => setIsOpen(false)} href="#contact" className="block px-3 py-2.5 rounded-md text-base font-semibold text-lavender-700 bg-lavender-50">Hubungi Saya (WhatsApp)</a>
        </div>
      )}
    </header>
  );
}

