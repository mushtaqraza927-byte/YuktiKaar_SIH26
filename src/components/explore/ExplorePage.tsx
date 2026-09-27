import React, { useState } from 'react';
import { IP_TYPES_LIST } from '../../data/ipTypes';
import { IPType } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedIPDomains } from '../../i18n/translations';
import {
  Lightbulb,
  BadgeCheck,
  FileText,
  MapPin,
  Sparkles,
  Leaf,
  Scale,
  Building,
  Globe,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

interface ExplorePageProps {
  initialType?: IPType;
  onAskQuestion: (q: string) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  initialType = 'all',
  onAskQuestion
}) => {
  const { currentLanguage, t } = useLanguage();
  const localizedDomains = getLocalizedIPDomains(currentLanguage);
  const [selectedType, setSelectedType] = useState<IPType>(initialType);

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

  const displayedList =
    selectedType === 'all'
      ? IP_TYPES_LIST
      : IP_TYPES_LIST.filter((item) => item.id === selectedType);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SectionHeading
        kicker={t.exploreKicker}
        title={t.exploreTitle}
        subtitle={t.exploreSubtitle}
      />

      {/* Domain Filter Bar */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 no-scrollbar">
        <button
          type="button"
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedType === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          {t.exploreAllDomains} ({IP_TYPES_LIST.length})
        </button>
        {IP_TYPES_LIST.map((item) => {
          const loc = localizedDomains[item.id];
          const name = loc?.name || item.name;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedType(item.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                selectedType === item.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{name}</span>
            </button>
          );
        })}
      </div>

      {/* Domains Detail Cards */}
      <div className="space-y-8">
        {displayedList.map((domain) => {
          const loc = localizedDomains[domain.id];
          const domainName = loc?.name || domain.name;
          const domainTagline = loc?.tagline || domain.tagline;
          const domainDesc = loc?.description || domain.description;

          return (
            <div
              key={domain.id}
              className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden"
            >
              {/* Domain Header */}
              <div className="p-6 sm:p-8 bg-[#FAFAF7] border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
                    {getIcon(domain.id)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {domainName}
                      </h3>
                      {domain.shortName && (
                        <span className="text-xs font-mono font-bold bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                          {domain.shortName}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-amber-800 mt-1">
                      {domainTagline}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onAskQuestion(`What are the key provisions for ${domain.name} in India?`)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors shrink-0 shadow-2xs"
                >
                  <span>{t.exploreDomainCTA}: {domainName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
                  {domainDesc}
                </p>

              {/* Legal Governance Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    <Scale className="w-3.5 h-3.5 text-amber-600" />
                    <span>Primary Indian Statute</span>
                  </div>
                  <p className="text-xs text-slate-800 font-medium">
                    {domain.indianStatute}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    <Building className="w-3.5 h-3.5 text-blue-600" />
                    <span>Governing Authority</span>
                  </div>
                  <p className="text-xs text-slate-800 font-medium">
                    {domain.governingBody}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    <Globe className="w-3.5 h-3.5 text-emerald-600" />
                    <span>International Treaty</span>
                  </div>
                  <p className="text-xs text-slate-800 font-medium">
                    {domain.internationalTreaty}
                  </p>
                </div>
              </div>

              {/* Core Statutory Requirements */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Core Criteria & Thresholds
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {domain.keyElements.map((el, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-slate-200/70 bg-[#FAFAF7] text-xs text-slate-700 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      <span>{el}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Sample Questions */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Frequently Inquired Topics</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {domain.sampleQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onAskQuestion(q)}
                      className="text-left text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-colors shadow-2xs"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};
