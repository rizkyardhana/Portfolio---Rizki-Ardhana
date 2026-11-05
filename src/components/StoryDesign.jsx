import React from 'react';
import { hasaniStoryDesigns } from '../data/portfolioData';

export default function StoryDesign({ onSelectImage }) {
  const currentList = hasaniStoryDesigns;

  return (
    <section id="story-design" className="py-20 md:py-28 bg-brand-soft border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Format Vertikal Interaktif (9:16)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Instagram Story Design Showcase
          </h2>
          <p className="text-base text-gray-600">
            Desain materi Instagram Story berformat vertikal 9:16 dengan tipografi yang tajam, penempatan stiker engagement mockup (Q&amp;A box, countdown, call-to-action), serta CTA yang memicu konversi langsung ke WhatsApp dan marketplace.
          </p>
        </div>

        {/* Highlight Banner for Hasani Story */}
        <div className="mb-10 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50/70 border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 text-emerald-950 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-black uppercase tracking-wider bg-emerald-700 text-white px-3 py-1 rounded-lg">
                Karya Desain Story UMKM
              </span>
              <span className="text-sm font-extrabold text-emerald-900">
                HASANI Herbal Nabawi • Habbatussauda 2 in 1
              </span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed max-w-3xl">
              Format vertikal interaktif yang dioptimalkan untuk safe-area Instagram Story: penempatan stiker tanya jawab (Q&amp;A), edukasi manfaat stamina &amp; imunitas keluarga, serta banner promosi bundling hemat Rp189.000 dengan link langsung ke WhatsApp pemesanan.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold bg-white text-emerald-800 px-3.5 py-2 rounded-xl border border-emerald-200 shadow-sm">
              Rasio Vertikal 9:16
            </span>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentList.map((story) => {
            const isHasani = story.campaign === "HASANI Herbal Nabawi";
            return (
              <div
                key={`${story.campaign}-${story.id}`}
                className={`bg-white p-5 rounded-3xl border shadow-card flex flex-col justify-between group hover:shadow-elevated transition-all ${
                  isHasani ? 'border-emerald-200 hover:border-emerald-400' : 'border-brand-border hover:border-lavender-400'
                }`}
              >
                {/* Story Top Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        isHasani
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-lavender-50 text-lavender-700 border-lavender-200'
                      }`}
                    >
                      {story.type}
                    </span>
                    <span className="text-[11px] text-gray-400 font-bold">
                      {isHasani ? 'HASANI' : 'Lavender'}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-gray-900 text-base leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {story.description}
                  </p>
                </div>

                {/* Smartphone Frame Mockup */}
                <div
                  className={`relative rounded-2xl overflow-hidden border-2 shadow-inner cursor-pointer ${
                    isHasani ? 'border-emerald-300 bg-emerald-50' : 'border-lavender-200 bg-lavender-50'
                  }`}
                  onClick={() =>
                    onSelectImage(
                      `${story.campaign} - ${story.title}`,
                      story.image,
                      `${story.headline || story.title}. ${story.description} (Interactive Feature: ${story.interactiveFeature})`
                    )
                  }
                >
                  <img
                    src={story.thumbnail || story.image}
                    alt={story.title}
                    className="w-full aspect-9-16 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-gray-900 font-bold text-xs px-3.5 py-2 rounded-full shadow flex items-center gap-1.5">
                      🔍 Perbesar Story
                    </span>
                  </div>
                </div>

                {/* Bottom Interactive Feature Note */}
                <div className="pt-4 mt-3 border-t border-gray-100 space-y-2">
                  <div className="text-[11px] text-gray-600 leading-tight">
                    <span className="font-bold text-gray-900">Interaksi: </span>
                    <span>{story.interactiveFeature}</span>
                  </div>
                  {story.ctaLink && (
                    <a
                      href={story.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                    >
                      Coba CTA WhatsApp ➔
                    </a>
                  )}
                  <div className="text-center text-[11px] font-semibold text-gray-400">
                    {story.aspectRatio}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
