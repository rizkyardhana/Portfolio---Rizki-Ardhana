import React from 'react';
import { hasaniBrandInfo } from '../data/portfolioData';

export default function DummyProject() {
  const currentBrand = hasaniBrandInfo;

  return (
    <section id="dummy-project" className="py-20 md:py-28 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border text-emerald-800 bg-emerald-50 border-emerald-200">
            Karya Utama Portofolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Dummy Project: UMKM {currentBrand.brandName}
          </h2>
          <p className="text-base text-gray-600">
            Satu proyek kampanye terpadu untuk UMKM suplemen herbal nabawi terpercaya dengan identitas brand yang konsisten, meliputi Feed Instagram, Story, Reels, Copywriting, dan Katalog Produk.
          </p>
        </div>

        {/* Mandatory Disclaimer Box */}
        <div className="mb-12 bg-amber-50/80 border-2 border-amber-300 rounded-2xl p-5 sm:p-6 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 font-bold text-xl">
            ⚠️
          </div>
          <div className="space-y-1">
            <h4 className="font-extrabold text-sm sm:text-base text-amber-900">
              Keterangan Resmi Status Proyek (Disclaimer):
            </h4>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              <strong>{currentBrand.campaignTitle}.</strong> {currentBrand.disclaimer}
            </p>
          </div>
        </div>

        {/* Brand Showcase Card */}
        <div className={`p-8 sm:p-10 rounded-3xl border shadow-soft mb-16 ${
          activeTab === 'hasani'
            ? 'bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/40 border-emerald-200'
            : 'bg-gradient-to-br from-lavender-50 via-white to-lavender-50/40 border-lavender-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              {activeTab === 'hasani' ? (
                <div className="inline-flex items-center gap-3.5 bg-white p-2.5 pr-5 rounded-2xl shadow-sm border border-emerald-200">
                  <img
                    src="./assets/hasani/hasani-logo-thumb.jpeg"
                    alt="HASANI Herbal Nabawi Logo"
                    className="h-14 w-14 object-cover rounded-xl border border-amber-200"
                  />
                  <div>
                    <span className="block text-sm font-extrabold text-emerald-950 uppercase tracking-wide">
                      HASANI HERBAL NABAWI
                    </span>
                    <span className="block text-[11px] text-amber-700 font-semibold">
                      Habbat 2 in 1 • Habbatussauda + Propolis
                    </span>
                  </div>
                </div>
              ) : (
                <div className="inline-block bg-white px-4 py-2 rounded-xl shadow-sm border border-lavender-100">
                  <img src="./assets/brand-logo.svg" alt="Lavender Beauty Logo" className="h-10 w-auto" />
                </div>
              )}

              <h3 className="text-2xl font-bold text-brand-dark">Identitas Brand UMKM</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {activeTab === 'hasani' ? (
                  <>
                    <strong>HASANI Herbal Nabawi</strong> adalah brand UMKM terpercaya di bidang produk herbal alami dan Thibbun Nabawi modern. Mengusung formulasi unggulan <strong>Habbat 2 in 1</strong> (kombinasi sinergis Habbatussauda murni &amp; Brazilian Propolis) dalam bentuk 100 soft capsule untuk memelihara stamina, meningkatkan imunitas keluarga, dan mengembalikan vitalitas tubuh aktif.
                  </>
                ) : (
                  <>
                    <strong>{dummyProjectInfo.brandName}</strong> adalah brand UMKM fiktif di bidang {dummyProjectInfo.industry}. Membawa nilai produk perawatan lembut berbahan ekstrak lavender alami untuk menenangkan dan menjaga kesehatan skin barrier.
                  </>
                )}
              </p>
              
              <div className="space-y-2 text-xs text-gray-800">
                <div className="flex items-start gap-2">
                  <span className={`font-bold w-32 shrink-0 ${activeTab === 'hasani' ? 'text-emerald-900' : 'text-lavender-800'}`}>
                    Bidang Usaha:
                  </span>
                  <span>{currentBrand.industry}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className={`font-bold w-32 shrink-0 ${activeTab === 'hasani' ? 'text-emerald-900' : 'text-lavender-800'}`}>
                    Konsep Visual:
                  </span>
                  <span>{currentBrand.visualConcept}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className={`font-bold w-32 shrink-0 ${activeTab === 'hasani' ? 'text-emerald-900' : 'text-lavender-800'}`}>
                    Strategi Kampanye:
                  </span>
                  <span>{currentBrand.tagline}</span>
                </div>
                {activeTab === 'hasani' && (
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-emerald-900 w-32 shrink-0">Legalitas &amp; BPOM:</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                      BPOM TR233044221 • Sertifikat Halal Indonesia
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Colors */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-brand-border shadow-sm space-y-4">
              <h4 className="font-bold text-gray-900 text-sm flex items-center justify-between">
                <span>Palet Warna Resmi Kampanye (Brand Colors)</span>
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                  activeTab === 'hasani' 
                    ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
                    : 'text-lavender-700 bg-lavender-50 border-lavender-200'
                }`}>
                  {activeTab === 'hasani' ? 'HASANI Official Palette' : 'Lavender Beauty Palette'}
                </span>
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {currentBrand.brandColors.map((col, idx) => (
                  <div key={idx} className="text-center space-y-2">
                    <div
                      className="w-full h-16 rounded-xl shadow-sm border border-gray-100 flex items-end justify-center pb-1"
                      style={{ backgroundColor: col.hex }}
                    >
                      <span className={`text-[10px] font-mono font-bold ${
                        ['#FFFFFF', '#E8F5E9', '#F4EEFC', '#FCE7F3'].includes(col.hex) 
                          ? 'text-gray-800' 
                          : 'text-white'
                      }`}>
                        {col.hex}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-900">{col.name}</span>
                      <span className="block text-[11px] text-gray-500 font-mono">{col.hex}</span>
                      <span className="text-[10px] text-gray-700 font-semibold">{col.role}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 pt-2 border-t border-gray-100 leading-relaxed">
                💡 <em>Konsistensi palet ini diterapkan di seluruh materi promosi UMKM: poster Feed 4:5, Story 9:16, video Reels, serta katalog produk.</em>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
