import React from 'react';
import { IP_TYPES_LIST } from '../../data/ipTypes';
import { SectionHeading } from '../common/SectionHeading';
import { IPType } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedIPDomains } from '../../i18n/translations';
import {
  Lightbulb,
  BadgeCheck,
  FileText,
  MapPin,
  Sparkles,
  Leaf,
  ArrowRight
} from 'lucide-react';

interface ExploreIPGridProps {
  onSelectType: (type: IPType) => void;
}

export const ExploreIPGrid: React.FC<ExploreIPGridProps> = ({ onSelectType }) => {
  const { currentLanguage, t } = useLanguage();
  const localizedDomains = getLocalizedIPDomains(currentLanguage);

  const getIcon = (id: string) => {
    switch (id) {
      case 'patent':
        return <Lightbulb className="w-5 h-5 text-amber-600" />;
      case 'trademark':
        return <BadgeCheck className="w-5 h-5 text-blue-600" />;
      case 'copyright':
        return <FileText className="w-5 h-5 text-emerald-600" />;
      case 'geographical_indication':
        return <MapPin className="w-5 h-5 text-rose-600" />;
      case 'traditional_knowledge':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'abs':
        return <Leaf className="w-5 h-5 text-teal-600" />;
      default:
        return <Lightbulb className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="explore" className="py-16 md:py-24 border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.exploreKicker}
          title={t.exploreTitle}
          subtitle={t.exploreSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IP_TYPES_LIST.map((item) => {
            const loc = localizedDomains[item.id];
            const displayName = loc?.name || item.name;
            const displayDesc = loc?.description || item.description;

            return (
              <div
                key={item.id}
                onClick={() => onSelectType(item.id)}
                className="group relative bg-[#FAFAF7] rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      {getIcon(item.id)}
                    </div>
                    {item.shortName && (
                      <span className="text-xs font-mono font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {item.shortName}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {displayName}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {displayDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700 block mb-0.5">Statute / विधान:</span>
                    <span className="line-clamp-1">{item.indianStatute}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-amber-700">
                  <span>{t.exploreDomainCTA}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
