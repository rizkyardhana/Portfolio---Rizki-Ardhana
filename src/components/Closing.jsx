import React from 'react';
import { closingSection, personalInfo } from '../data/portfolioData';

export default function Closing() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-lavender-50/50 to-lavender-100/60 border-t border-brand-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="w-16 h-16 rounded-full bg-lavender-700 text-white mx-auto flex items-center justify-center shadow-soft text-2xl font-bold">
          ✨
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
            {closingSection.thankYouMessage}
          </h2>
          <p className="text-base sm:text-xl font-medium text-lavender-900 max-w-2xl mx-auto leading-relaxed">
            "{closingSection.quote}"
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${personalInfo.whatsappNumber}?text=Halo%20${encodeURIComponent(personalInfo.name)},%20saya%20ingin%20berkolaborasi%20dengan%20Anda.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lavender-700 hover:bg-lavender-800 text-white font-extrabold text-base px-10 py-4 rounded-full shadow-elevated transition-all"
          >
            <span>{closingSection.collaborationCta}</span>
          </a>

          <a
            href="#hero"
            className="inline-flex items-center gap-2 bg-white hover:bg-lavender-50 text-gray-700 border border-gray-300 font-bold text-sm px-6 py-4 rounded-full shadow-sm transition-all"
          >
            <span>Kembali ke Atas ↑</span>
          </a>
        </div>

      </div>
    </section>
  );
}

