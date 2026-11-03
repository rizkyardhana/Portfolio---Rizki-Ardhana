import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-lavender-600 bg-lavender-50 px-3.5 py-1.5 rounded-full border border-lavender-200">
            Profil Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Tentang Saya &amp; Latar Belakang
          </h2>
          <p className="text-base text-gray-600">
            Mengenal lebih dekat dedikasi, keterampilan, dan orientasi kerja saya sebagai Content Editor untuk UMKM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Identity Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-lavender-50/80 to-white p-8 rounded-3xl border border-lavender-200 shadow-card space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-lavender-200">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-lavender-300 shadow-soft bg-gradient-to-tr from-lavender-100 to-white shrink-0">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">{personalInfo.name}</h3>
                <p className="text-sm font-semibold text-lavender-700">{personalInfo.position}</p>
                <span className="inline-block mt-1 text-xs text-gray-500 font-medium">{personalInfo.training}</span>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Nama Lengkap</span>
                <span className="font-bold text-gray-900">{personalInfo.name}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Posisi</span>
                <span className="font-bold text-lavender-800">{personalInfo.position}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Pendidikan</span>
                <span className="font-bold text-gray-900">{personalInfo.education}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Pelatihan</span>
                <span className="font-bold text-lavender-700 text-right">{personalInfo.training}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-500 font-medium">Ketersediaan</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full text-xs">
                  {personalInfo.availability}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-lavender-700 hover:bg-lavender-800 text-white font-semibold text-sm py-3 px-6 rounded-xl transition-all"
              >
                <span>Diskusikan Kebutuhan Konten</span>
              </a>
            </div>
          </div>

          {/* Description Verbatim */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-card space-y-6">
              <h3 className="text-xl font-bold text-brand-dark">Deskripsi Profil</h3>

              {personalInfo.aboutDescription.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`leading-relaxed text-base ${
                    idx === personalInfo.aboutDescription.length - 1
                      ? 'font-semibold text-lavender-900 bg-lavender-50 p-4 rounded-xl border border-lavender-100'
                      : 'text-gray-700'
                  }`}
                >
                  "{paragraph}"
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-lavender-50/50 border border-lavender-100 space-y-2">
                <h4 className="font-bold text-gray-900 text-sm">Brief-Oriented</h4>
                <p className="text-xs text-gray-600 leading-normal">Mendesain sesuai tujuan bisnis dan USP produk, bukan visual tanpa arah.</p>
              </div>

              <div className="p-5 rounded-2xl bg-lavender-50/50 border border-lavender-100 space-y-2">
                <h4 className="font-bold text-gray-900 text-sm">Visual Consistency</h4>
                <p className="text-xs text-gray-600 leading-normal">Menjaga palet warna, tipografi, dan tone of voice tetap konsisten.</p>
              </div>

              <div className="p-5 rounded-2xl bg-lavender-50/50 border border-lavender-100 space-y-2">
                <h4 className="font-bold text-gray-900 text-sm">Modern Workflow</h4>
                <p className="text-xs text-gray-600 leading-normal">Kombinasi Canva, CapCut, dan AI tools untuk eksekusi efisien dan rapi.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

