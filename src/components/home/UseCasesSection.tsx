import React from 'react';
import { USE_CASES } from '../../data/useCases';
import { SectionHeading } from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import {
  GraduationCap,
  Microscope,
  Rocket,
  Building2,
  TreePine,
  Briefcase
} from 'lucide-react';

interface UseCasesSectionProps {
  onAskUseCase: (topic: string) => void;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ onAskUseCase }) => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'students':
        return <GraduationCap className="w-5 h-5 text-amber-600" />;
      case 'researchers':
        return <Microscope className="w-5 h-5 text-blue-600" />;
      case 'startups':
        return <Rocket className="w-5 h-5 text-purple-600" />;
      case 'msmes':
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'tk_stakeholders':
        return <TreePine className="w-5 h-5 text-teal-600" />;
      case 'ip_facilitators':
        return <Briefcase className="w-5 h-5 text-slate-700" />;
      default:
        return <GraduationCap className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.useCasesKicker}
          title={t.useCasesTitle}
          subtitle={t.useCasesSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((uc) => (
            <div
              key={uc.id}
              className="bg-[#FAFAF7] border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                  {getIcon(uc.id)}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {uc.title}
                </h3>

                <div className="text-xs font-medium text-amber-800 mb-3">
                  {uc.targetAudience}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {uc.description}
                </p>

                <div className="p-3 bg-white rounded-lg border border-slate-200/60 text-xs text-slate-600 space-y-1">
                  <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider">
                    Core Objective:
                  </span>
                  <p className="text-xs text-slate-600">{uc.typicalNeed}</p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Assisted Pathway</span>
                <button
                  type="button"
                  onClick={() => onAskUseCase(`How can IP SAKTI assist ${uc.title.toLowerCase()} in navigating IP?`)}
                  className="font-semibold text-slate-900 hover:text-amber-800 transition-colors"
                >
                  Explore Needs →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
