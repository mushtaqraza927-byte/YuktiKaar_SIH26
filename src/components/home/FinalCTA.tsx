import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FinalCTAProps {
  onAsk: () => void;
  onExploreKnowledge: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onAsk, onExploreKnowledge }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 border-t border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 text-amber-800 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Interactive Guidance</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {t.ctaTitle}
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {t.ctaText}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onAsk}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-sm active:scale-[0.99]"
          >
            <span>{t.ctaButton}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>

          <button
            type="button"
            onClick={onExploreKnowledge}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-2xs"
          >
            <BookOpen className="w-4 h-4 text-slate-500" />
            <span>{t.hubViewComplete}</span>
          </button>
        </div>

        <div className="pt-6 text-xs text-slate-400">
          Grounded on India Code · Patents Act 1970 · Trade Marks Act 1999 · WIPO Treaties
        </div>
      </div>
    </section>
  );
};
