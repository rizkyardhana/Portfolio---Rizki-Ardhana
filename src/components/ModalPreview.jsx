import React, { useEffect } from 'react';

export default function ModalPreview({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-lavender-200 p-6 sm:p-8 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold text-lavender-700 bg-lavender-50 px-3 py-1 rounded-full uppercase">
              Design Showcase Preview
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 focus:outline-none transition-colors"
            aria-label="Tutup Preview"
          >
            ✕
          </button>
        </div>

        <div className="w-full bg-brand-soft rounded-2xl p-4 flex items-center justify-center overflow-hidden border border-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[60vh] w-auto object-contain rounded-xl shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Keterangan &amp; Rationale Desain
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed bg-lavender-50/50 p-4 rounded-xl border border-lavender-100">
            {item.description}
          </p>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="bg-lavender-700 hover:bg-lavender-800 text-white font-bold text-xs py-2.5 px-6 rounded-xl transition-all"
          >
            Tutup Pratinjau
          </button>
        </div>
      </div>
    </div>
  );
}

