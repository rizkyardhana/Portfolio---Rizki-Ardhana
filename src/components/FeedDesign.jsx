import React from 'react';
import { hasaniFeedDesigns } from '../data/portfolioData';

export default function FeedDesign({ onSelectImage }) {
  const currentList = hasaniFeedDesigns;

  return (
    <section id="feed-design" className="py-20 md:py-28 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Karya Desain Grafis Canva
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Instagram Feed Design Showcase
          </h2>
          <p className="text-base text-gray-600">
            Koleksi desain feed Instagram untuk UMKM dengan komposisi visual profesional, hierarki teks yang jelas, penawaran harga menarik, dan kepatuhan standar BPOM/Halal.
          </p>
        </div>

        {/* Campaign Highlight Box for HASANI */}
        <div className="mb-10 bg-emerald-50/80 border-2 border-emerald-300 rounded-2xl p-5 sm:p-6 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-emerald-700 text-white px-2.5 py-0.5 rounded-md">
                  Project UMKM Herbal
                </span>
                <span className="text-xs font-bold text-emerald-800">
                  HASANI Habbatussauda 2 in 1 (Habbatussauda + Brazilian Propolis)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                Kampanye promosi media sosial untuk suplemen herbal nabawi (100 soft capsule). Fokus pada edukasi stamina, promo spesial Rp99.000/botol (Paket 2 botol Rp189.000), legalitas BPOM TR233044221, dan sertifikat Halal Indonesia.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold bg-white text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 shadow-sm">
                ⭐ Rating 4.8 / 5.0
              </span>
            </div>
          </div>

        {/* 3 Feeds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentList.map((feed) => {
            const isHasani = feed.campaign === "HASANI Herbal Nabawi";
            return (
              <div
                key={`${feed.campaign}-${feed.id}`}
                className={`bg-white rounded-3xl border shadow-card overflow-hidden group hover:shadow-elevated transition-all flex flex-col ${
                  isHasani ? 'border-emerald-200 hover:border-emerald-400' : 'border-brand-border hover:border-lavender-400'
                }`}
              >
                {/* Instagram Mockup Header */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs ${
                        isHasani ? 'bg-emerald-700' : 'bg-lavender-600'
                      }`}
                    >
                      {isHasani ? 'HH' : 'LB'}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 leading-tight">
                        {isHasani ? 'hasani.herbal' : 'lavenderbeauty.id'}
                      </h3>
                      <span className="text-[10px] text-gray-500">
                        {isHasani ? 'Official Store • Feed Poster' : `Sponsored • Desain ${feed.id}`}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isHasani
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-lavender-100 text-lavender-800'
                    }`}
                  >
                    {feed.badge}
                  </span>
                </div>

                {/* Poster Visual Preview (Click to Zoom Modal) */}
                <div
                  className="relative bg-gray-50 overflow-hidden cursor-pointer"
                  onClick={() =>
                    onSelectImage(
                      `${feed.campaign} - ${feed.title}`,
                      feed.image,
                      `${feed.headline || feed.title}. ${feed.description}`
                    )
                  }
                >
                  <img
                    src={feed.image || feed.thumbnail}
                    alt={feed.title}
                    width="1792"
                    height="2400"
                    loading="lazy"
                    style={{ aspectRatio: '1792 / 2400' }}
                    className="w-full h-auto aspect-[1792/2400] object-contain group-hover:scale-[1.02] transition-transform duration-300 block"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-gray-900 font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                      🔍 Klik untuk Perbesar (1792×2400)
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-4 bg-white flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    {/* Headline */}
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                        Headline Poster
                      </span>
                      <h4 className="font-extrabold text-gray-900 text-base leading-snug">
                        "{feed.headline || feed.title}"
                      </h4>
                    </div>

                    {/* Price / Promo Tag if available */}
                    {isHasani && (
                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Harga Promo:</span>
                          <span className="font-black text-emerald-800 text-sm">
                            {feed.pricePromo}
                          </span>
                        </div>
                        {feed.bundleDeal && (
                          <div className="text-[11px] text-emerald-900 font-semibold pt-1 border-t border-emerald-200">
                            🎁 {feed.bundleDeal}
                          </div>
                        )}
                        {feed.legalities && (
                          <div className="text-[10px] text-gray-600 pt-0.5">
                            ✓ {feed.legalities}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Promo Body Description */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feed.description}
                    </p>

                    {/* CTA Details */}
                    {feed.cta && (
                      <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700">
                        <span className="font-bold text-gray-900">CTA: </span>
                        <span>{feed.cta}</span>
                      </div>
                    )}

                    {/* Target & Tone for Hasani */}
                    {isHasani && (
                      <div className="pt-2 border-t border-gray-100 space-y-1 text-[11px] text-gray-500">
                        <p><strong>Target:</strong> {feed.target}</p>
                        <p><strong>Tone:</strong> {feed.tone}</p>
                      </div>
                    )}

                    <div className="text-[11px] text-gray-500 font-medium">
                      {feed.hashtags}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>{feed.aspectRatio}</span>
                    <span className={isHasani ? 'text-emerald-700 font-bold' : 'text-lavender-700 font-bold'}>
                      {feed.campaign}
                    </span>
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
