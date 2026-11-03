import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-lavender-50/60 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-lavender-200 shadow-sm text-xs sm:text-sm font-semibold text-lavender-800">
              <span className="w-2 h-2 rounded-full bg-lavender-600 animate-ping"></span>
              <span>{personalInfo.training}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.15]">
                {personalInfo.heroTitle}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-lavender-700 tracking-tight">
                {personalInfo.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            <div className="pt-1 flex items-center justify-center lg:justify-start gap-3">
              <div className="h-8 w-1 bg-lavender-600 rounded-full"></div>
              <p className="text-sm font-bold text-gray-800">
                Portofolio Karya: <span className="text-lavender-700">{personalInfo.name}</span>
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#dummy-project"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lavender-700 hover:bg-lavender-800 text-white font-bold text-base px-8 py-4 rounded-xl shadow-elevated transition-all"
              >
                <span>Lihat Portofolio</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-lavender-50 text-lavender-900 border-2 border-lavender-300 font-bold text-base px-8 py-4 rounded-xl shadow-sm transition-all"
              >
                <span>Hubungi Saya</span>
              </a>
            </div>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white p-3 rounded-xl border border-brand-border text-center shadow-card">
                <span className="block text-lg font-black text-lavender-700">100%</span>
                <span className="text-xs font-semibold text-gray-500">Kampanye Terpadu</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-brand-border text-center shadow-card">
                <span className="block text-lg font-black text-lavender-700">3 Format</span>
                <span className="text-xs font-semibold text-gray-500">Feed, Story, Reels</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-brand-border text-center shadow-card">
                <span className="block text-lg font-black text-lavender-700">Canva</span>
                <span className="text-xs font-semibold text-gray-500">Design Core</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-brand-border text-center shadow-card">
                <span className="block text-lg font-black text-lavender-700">CapCut</span>
                <span className="text-xs font-semibold text-gray-500">Video Core</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative bg-white p-4 rounded-3xl shadow-elevated border border-lavender-200">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative shadow-inner">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-lavender-200 shadow-soft flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-gray-900">{personalInfo.name}</h2>
                      <p className="text-xs font-medium text-lavender-600">{personalInfo.position}</p>
                    </div>
                    <span className="text-[11px] font-bold bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full">
                      Ready to Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

