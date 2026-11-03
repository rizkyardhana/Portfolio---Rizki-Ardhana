import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    service: 'Paket Lengkap Media Sosial (Feed + Story + Reels)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = `Halo ${personalInfo.name},\n\nNama saya *${formData.name}* dari *${formData.business}*.\nSaya tertarik bekerja sama dengan Anda untuk kebutuhan:\n📌 *${formData.service}*`;
    if (formData.message.trim()) {
      text += `\n\nCatatan Tambahan:\n"${formData.message.trim()}"`;
    }
    text += `\n\nMohon informasi ketersediaan jadwal dan penawaran kerja sama. Terima kasih!`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${personalInfo.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-lavender-600 bg-lavender-50 px-3.5 py-1.5 rounded-full border border-lavender-200">
            Kolaborasi &amp; Kerja Sama
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">
            Let's Create Something Creative Together!
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Saya siap membantu mengembangkan konten visual media sosial, copywriting, dan video Reels untuk meningkatkan daya tarik brand dan UMKM Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Active WhatsApp Link */}
            <a
              href={`https://wa.me/${personalInfo.whatsappNumber}?text=Halo%20${encodeURIComponent(personalInfo.name)},%20saya%20tertarik%20bekerja%20sama.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 hover:border-emerald-500 hover:shadow-soft transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-2xl group-hover:scale-105 transition-transform">
                💬
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Direct WhatsApp (Aktif)
                </span>
                <h3 className="text-lg font-extrabold text-emerald-950">
                  {personalInfo.whatsappDisplay}
                </h3>
                <p className="text-xs text-emerald-700">
                  Klik untuk langsung membuka percakapan chat WhatsApp
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}?subject=Pertanyaan%20Kerja%20Sama%20Content%20Editor`}
              className="p-6 rounded-2xl bg-white border border-brand-border hover:border-lavender-400 hover:shadow-card transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-lavender-100 text-lavender-700 flex items-center justify-center shrink-0 font-bold text-2xl group-hover:scale-105 transition-transform">
                ✉️
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Email Korespondensi
                </span>
                <h3 className="text-base font-extrabold text-gray-900 truncate">
                  {personalInfo.email}
                </h3>
                <p className="text-xs text-gray-500">
                  Kirim brief kebutuhan atau pertanyaan proyek
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={personalInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-brand-border hover:border-lavender-400 hover:shadow-card transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <svg className="w-7 h-7 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Instagram Profil
                </span>
                <h3 className="text-base font-extrabold text-gray-900">
                  {personalInfo.instagram}
                </h3>
                <p className="text-xs text-gray-500">
                  Lihat update karya dan aktivitas kreatif
                </p>
              </div>
            </a>

            {/* Public Portfolio URL */}
            <div className="p-6 rounded-2xl bg-white border border-brand-border flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-lavender-50 text-lavender-700 flex items-center justify-center shrink-0 font-bold text-2xl">
                🌐
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Single Public Link
                </span>
                <h3 className="text-sm font-extrabold text-lavender-900 truncate">
                  {personalInfo.portfolioUrl}
                </h3>
                <p className="text-xs text-gray-500">
                  Dapat diakses publik tanpa perlu login
                </p>
              </div>
            </div>

          </div>

          {/* WhatsApp Quick Form */}
          <div className="lg:col-span-7 bg-brand-soft p-8 sm:p-10 rounded-3xl border border-brand-border shadow-card space-y-6">
            <div>
              <span className="text-xs font-bold text-lavender-700 uppercase tracking-wider">
                Quick Inquiry Form
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-dark mt-1">
                Kirim Pesan Cepat ke WhatsApp Saya
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Pilih kebutuhan konten UMKM Anda dan sistem akan otomatis memformat pesan WhatsApp yang rapi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Nama Anda / Pemilik Usaha
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lavender-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Nama Brand / UMKM Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Dapur Nusantara / Glow Skincare"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lavender-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Jenis Konten yang Dibutuhkan
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lavender-600"
                >
                  <option value="Paket Lengkap Media Sosial (Feed + Story + Reels)">
                    Paket Lengkap Media Sosial (Feed + Story + Reels)
                  </option>
                  <option value="Desain Feed Instagram (Single & Carousel 4:5)">
                    Desain Feed Instagram (Single & Carousel 4:5)
                  </option>
                  <option value="Desain Instagram Story Vertikal (9:16)">
                    Desain Instagram Story Vertikal (9:16)
                  </option>
                  <option value="Video Editing Reels / TikTok (CapCut)">
                    Video Editing Reels / TikTok (CapCut)
                  </option>
                  <option value="Desain Katalog Produk UMKM">Desain Katalog Produk UMKM</option>
                  <option value="Copywriting Iklan & Promosi Produk">
                    Copywriting Iklan & Promosi Produk
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Contoh: Kami butuh konten peluncuran produk baru pekan depan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lavender-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>Kirim Pesan via WhatsApp Sekarang</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

