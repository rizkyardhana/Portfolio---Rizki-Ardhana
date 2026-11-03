import React from 'react';
import { skillsList, toolsList } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-brand-soft border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-lavender-600 bg-lavender-100 px-3.5 py-1.5 rounded-full border border-lavender-200">
            Kompetensi &amp; Perangkat
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Skills &amp; Tools yang Dikuasai
          </h2>
          <p className="text-base text-gray-600">
            Keterampilan teknis dan perangkat kerja yang saya gunakan untuk memproduksi konten berkualitas tinggi secara konsisten.
          </p>
        </div>

        {/* 10 Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-dark mb-6">
            Daftar Keterampilan (Skills)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsList.map((skill) => (
              <div
                key={skill.id}
                className="bg-white p-6 rounded-2xl border border-brand-border shadow-card hover:border-lavender-400 hover:shadow-soft transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-lavender-100 text-lavender-700 flex items-center justify-center font-bold text-xs">
                    {skill.id < 10 ? `0${skill.id}` : skill.id}
                  </span>
                  <span className="text-[11px] font-bold text-lavender-700 bg-lavender-50 px-2.5 py-1 rounded-full uppercase">
                    {skill.category}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1">{skill.name}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Tools */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark mb-6">
            Tools Kerja Utama
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolsList.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-brand-border shadow-card hover:shadow-soft transition-all"
              >
                <span className="inline-block text-xs font-bold text-lavender-700 bg-lavender-50 px-3 py-1 rounded-full mb-3">
                  {tool.badge}
                </span>
                <h4 className="text-2xl font-extrabold text-gray-900 mb-1">{tool.name}</h4>
                <p className="text-xs font-semibold text-lavender-600 mb-3">{tool.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{tool.focus}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

