import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Search, CornerDownLeft } from 'lucide-react';
import { ConfidenceIndicator } from '../common/ConfidenceIndicator';
import { useLanguage } from '../../context/LanguageContext';

interface HeroProps {
  onAsk: (question?: string) => void;
  onExploreKnowledge: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAsk, onExploreKnowledge }) => {
  const { t } = useLanguage();
  const [heroQuery, setHeroQuery] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroQuery.trim()) {
      onAsk(heroQuery.trim());
    } else {
      onAsk('What are the requirements for a patent application in India?');
    }
  };

  const sampleChips = [
    { label: 'Patent eligibility', query: 'What are the requirements for a patent application in India?' },
    { label: 'Trademark registration', query: 'What are the absolute grounds for refusal under Section 9 of the Trade Marks Act?' },
    { label: 'Traditional knowledge', query: 'Which Indian rules apply to traditional knowledge and Section 3(p) of the Patents Act?' },
    { label: 'ABS compliance', query: 'When is approval from the National Biodiversity Authority (NBA) required before filing a patent?' }
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Subtle background ambient styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Headline, Description, CTA buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <span>{t.heroKicker}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              {t.heroHeadline}
            </h1>

            <p className="text-lg sm:text-xl text-slate-800 font-medium leading-snug">
              {t.heroSubtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              {t.heroDescription}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onAsk()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-sm hover:shadow active:scale-[0.99]"
              >
                <span>{t.heroAskCTA}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                type="button"
                onClick={onExploreKnowledge}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                <span>{t.heroExploreCTA}</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-200/60">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>India Code & WIPO Grounded</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verifiable Citations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Facilitator Escalation</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Assistant Interface Preview */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden">
              {/* Fake Assistant Titlebar */}
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="ml-2 font-semibold text-slate-700">IP-SAKTI Assistant</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Ready</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Interactive Knowledge Query
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {t.heroPreviewTitle}
                  </h3>
                </div>

                {/* Simulated input form */}
                <form onSubmit={handleHeroSubmit} className="space-y-3">
                  <div className="relative">
                    <textarea
                      rows={3}
                      value={heroQuery}
                      onChange={(e) => setHeroQuery(e.target.value)}
                      placeholder={t.heroInputPlaceholder}
                      className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-slate-800 focus:ring-1 focus:ring-slate-800 focus:outline-none text-slate-900 placeholder:text-slate-400 resize-none transition-all leading-relaxed"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Grounded in Patents Act, TM Act & TKDL
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors shadow-2xs"
                    >
                      <span>{t.heroAskButton}</span>
                      <CornerDownLeft className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </div>
                </form>

                {/* Suggested questions */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-medium text-slate-400 mb-2">
                    {t.heroSuggestionLabel}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sampleChips.map((chip, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => onAsk(chip.query)}
                        className="text-left text-xs px-2.5 py-1 rounded-md bg-slate-100/70 hover:bg-slate-200/80 text-slate-700 transition-colors"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Preview snippet */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 flex items-center justify-between">
                  <span className="truncate pr-2">
                    Sample: <strong>Section 2(1)(j) & Section 3 exclusions</strong>
                  </span>
                  <ConfidenceIndicator confidence="high" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
