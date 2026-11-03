import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white py-12 border-t border-lavender-900 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-lavender-600 text-white flex items-center justify-center font-bold text-sm">
            RA
          </div>
          <div className="text-left">
            <p className="font-bold text-white text-sm">{personalInfo.name}</p>
            <p className="text-gray-400 text-xs">{personalInfo.training}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300 font-semibold">
          <a href="#about" className="hover:text-white transition-colors">Tentang</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#dummy-project" className="hover:text-white transition-colors">Dummy Project</a>
          <a href="#feed-design" className="hover:text-white transition-colors">Feed IG</a>
          <a href="#reels-video" className="hover:text-white transition-colors">Reels CapCut</a>
          <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
        </div>

        <div className="text-center md:text-right text-[11px] text-gray-400">
          <p>&copy; 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="mt-0.5 text-lavender-300">Modern Minimalist • Elegant Professional • Responsive Design</p>
        </div>

      </div>
    </footer>
  );
}

