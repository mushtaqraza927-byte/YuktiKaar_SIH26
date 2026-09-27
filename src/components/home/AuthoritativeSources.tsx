import React from 'react';
import { AUTHORITATIVE_SOURCES } from '../../data/knowledgeSources';
import { SectionHeading } from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, ShieldCheck, Database } from 'lucide-react';

export const AuthoritativeSources: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.sourcesKicker}
          title={t.sourcesTitle}
          subtitle={t.sourcesSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUTHORITATIVE_SOURCES.map((source) => (
            <div
              key={source.id}
              className="bg-[#FAFAF7] border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800">
                    <Database className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {source.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {source.name}
                </h3>

                <div className="text-xs font-semibold text-amber-800 mb-2">
                  {source.category}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {source.description}
                </p>

                <div className="p-3 bg-white rounded-lg border border-slate-200/70 text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-800 block mb-0.5">Corpus Coverage:</span>
                  <span>{source.coverage}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Public Domain Index</span>
                <a
                  href={source.officialPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 hover:text-amber-800 transition-colors"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Integration notice */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          Note: Grounded answers reference publicly gazetted acts, published court decisions, and open statutory repositories. Backend connectors index official publications without fabricating proprietary datasets.
        </div>
      </div>
    </section>
  );
};
