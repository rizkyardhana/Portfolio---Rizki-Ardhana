import React from 'react';
import { productCatalog } from '../data/portfolioData';

export default function ProductCatalog({ onSelectImage }) {
  return (
    <section id="catalog" className="py-20 md:py-28 bg-brand-soft border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Desain Katalog Penjualan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Product Catalog Design (Katalog Resmi)
          </h2>
          <p className="text-base text-gray-600">
            Wajib memiliki foto produk, nama produk, informasi produk, harga resmi, desain visual konsisten, dan informasi promosi.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-soft mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-gray-100 gap-4">
            <div>
              <span className="text-xs font-extrabold text-emerald-700 tracking-wider uppercase">
                Official Product Line
              </span>
              <h3 className="text-2xl font-black text-brand-dark">
                {productCatalog.brand} Product Catalog 2026
              </h3>
            </div>
            <button
              onClick={() => onSelectImage(productCatalog.title, productCatalog.catalogImage, productCatalog.description)}
              className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs py-2.5 px-5 rounded-xl transition-all shadow-sm"
            >
              <span>Buka Fullsheet Katalog</span>
            </button>
          </div>

          {/* 4 Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCatalog.items.map((item) => (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition-all group ${
                  item.badge === 'Best Seller'
                    ? 'bg-white border-2 border-emerald-600 shadow-soft relative'
                    : 'bg-brand-soft border-brand-border hover:border-emerald-400 hover:shadow-card'
                }`}
              >
                {item.badge === 'Best Seller' && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white font-extrabold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                    <span>⭐</span> BEST SELLER
                  </span>
                )}
                <div>
                  <div
                    onClick={() => onSelectImage(item.name, item.image, `${item.name} - ${item.volume}. ${item.benefits}`)}
                    className="w-full h-48 rounded-xl bg-white border border-gray-100 flex items-center justify-center p-3 mb-4 overflow-hidden relative cursor-pointer group/img"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full object-contain group-hover/img:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity">
                      Zoom
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    item.badge === 'Best Seller'
                      ? 'text-amber-900 bg-amber-100 border-amber-200'
                      : 'text-emerald-800 bg-emerald-100 border-emerald-200'
                  }`}>
                    {item.category}
                  </span>
                  <h4 className="font-extrabold text-gray-900 text-base mt-2">{item.name}</h4>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">Ukuran: {item.volume}</p>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{item.benefits}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200">
                  {item.originalPriceFormatted && (
                    <span className="block text-[11px] text-gray-400 line-through">
                      {item.originalPriceFormatted}
                    </span>
                  )}
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-black text-emerald-800">{item.priceFormatted}</span>
                    {item.discountBadge && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {item.discountBadge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-700">
            <span className="font-semibold text-emerald-950 flex items-center gap-2">
              <span className="text-emerald-700 font-bold">📌 Informasi Pemesanan:</span> WhatsApp {productCatalog.whatsappContact} • Pengiriman Cepat Seluruh Indonesia (Bisa COD) • Halal &amp; Terdaftar {productCatalog.legalities}
            </span>
            <a
              href={`https://wa.me/62${productCatalog.whatsappContact.replace(/[^0-9]/g, '').replace(/^0/, '')}?text=Halo%20HASANI%20Herbal,%20saya%20tertarik%20konsultasi%20katalog%20produk`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-emerald-800 hover:text-emerald-950 underline flex items-center gap-1 shrink-0"
            >
              <span>Konsultasi Pemesanan via WhatsApp</span>
              <span>➔</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

