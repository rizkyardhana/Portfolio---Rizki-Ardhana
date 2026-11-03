import React, { useState } from 'react';
import { hasaniCopywritingProjects } from '../data/portfolioData';

export default function Copywriting() {
  const [copiedId, setCopiedId] = useState(null);
  const activeProjects = hasaniCopywritingProjects;

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="copywriting" className="py-20 md:py-28 bg-brand-soft border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border text-emerald-800 bg-emerald-100 border-emerald-200">
            Penulisan Naskah Iklan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Copywriting Project (3 Contoh Promosi)
          </h2>
          <p className="text-base text-gray-600">
            3 naskah copywriting promosi produk UMKM HASANI Herbal Nabawi dengan struktur wajib: Headline, Isi Promosi, dan Call to Action (CTA). Berbahasa Indonesia persuasif tanpa klaim palsu.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activeProjects.map((item) => {
            const fullText = `Headline: ${item.headline}\n\nIsi Promosi:\n${item.body}\n\nCall to Action (CTA):\n${item.cta}`;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-8 border shadow-card flex flex-col justify-between transition-all ${
                  activeTab === 'hasani' 
                    ? 'border-emerald-100 hover:shadow-soft hover:border-emerald-400' 
                    : 'border-brand-border hover:shadow-soft hover:border-lavender-400'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      activeTab === 'hasani'
                        ? 'text-emerald-800 bg-emerald-50 border-emerald-200'
                        : 'text-lavender-700 bg-lavender-50 border-lavender-200'
                    }`}>
                      {item.briefNumber || `Brief 0${item.id}`}
                    </span>
                    <span className={`text-xs font-semibold ${activeTab === 'hasani' ? 'text-emerald-700' : 'text-gray-400'}`}>
                      {item.badge || item.title}
                    </span>
                  </div>

                  {/* 1. Headline */}
                  <div className="space-y-1.5">
                    <span className={`text-xs font-extrabold uppercase tracking-wider ${
                      activeTab === 'hasani' ? 'text-emerald-700' : 'text-lavender-600'
                    }`}>
                      1. Headline
                    </span>
                    <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
                      "{item.headline}"
                    </h3>
                  </div>

                  {/* 2. Isi Promosi */}
                  <div className="space-y-1.5">
                    <span className={`text-xs font-extrabold uppercase tracking-wider ${
                      activeTab === 'hasani' ? 'text-emerald-700' : 'text-lavender-600'
                    }`}>
                      2. Isi Promosi
                    </span>
                    <p className={`text-sm text-gray-700 leading-relaxed p-4 rounded-xl border ${
                      activeTab === 'hasani'
                        ? 'bg-emerald-50/40 border-emerald-100'
                        : 'bg-brand-soft border-gray-100'
                    }`}>
                      {item.body}
                    </p>
                  </div>

                  {/* 3. CTA */}
                  <div className="space-y-1.5">
                    <span className={`text-xs font-extrabold uppercase tracking-wider ${
                      activeTab === 'hasani' ? 'text-emerald-700' : 'text-lavender-600'
                    }`}>
                      3. Call to Action (CTA)
                    </span>
                    <div className={`p-3.5 rounded-xl border text-xs font-bold ${
                      activeTab === 'hasani'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                        : 'bg-lavender-50 border-lavender-200 text-lavender-900'
                    }`}>
                      "{item.cta}"
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                    <p><strong>Target:</strong> {item.target}</p>
                    <p><strong>Tone of Voice:</strong> {item.tone}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleCopy(item.id, fullText)}
                    className={`w-full inline-flex items-center justify-center gap-2 border font-bold text-xs py-2.5 px-4 rounded-xl transition-all ${
                      activeTab === 'hasani'
                        ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-200'
                        : 'bg-gray-50 hover:bg-lavender-50 text-gray-700 hover:text-lavender-700 border-gray-200 hover:border-lavender-300'
                    }`}
                  >
                    <span>{copiedId === item.id ? '✓ Berhasil Disalin!' : 'Salin Naskah Copywriting'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
