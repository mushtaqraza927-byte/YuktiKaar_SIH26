import React from 'react';
import { KEY_FEATURES } from '../../data/features';
import { SectionHeading } from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import {
  Languages,
  Globe2,
  FileCheck2,
  BookmarkCheck,
  ShieldAlert,
  Users
} from 'lucide-react';

export const KeyFeaturesGrid: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Languages':
        return <Languages className="w-5 h-5 text-amber-600" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-blue-600" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5 text-emerald-600" />;
      case 'BookmarkCheck':
        return <BookmarkCheck className="w-5 h-5 text-indigo-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-teal-600" />;
      default:
        return <FileCheck2 className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.featuresKicker}
          title={t.featuresTitle}
          subtitle={t.featuresSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#FAFAF7] rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                  {getIcon(feat.iconName)}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium text-slate-700">Verification Mode</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  {feat.status || 'Active'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
