import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import {
  Search,
  BookOpen,
  ArrowRight,
  Scale,
  FileCheck,
  Award,
  Globe,
  Compass,
  Sparkles,
  Leaf,
  Layers
} from 'lucide-react';

interface KnowledgeHubPreviewProps {
  onNavigateToKnowledge: (category?: string, searchTerm?: string) => void;
}

export const KnowledgeHubPreview: React.FC<KnowledgeHubPreviewProps> = ({
  onNavigateToKnowledge
}) => {
  const { t } = useLanguage();
  const [searchInput, setSearchInput] = useState('');

  const categories = [
    { name: 'Laws', desc: 'Primary statutes including Patents Act 1970 & TM Act 1999', icon: Scale, count: '5 Core Acts' },
    { name: 'Rules', desc: 'Procedural rules, fees, timelines and form specifications', icon: FileCheck, count: '4 Procedural Codes' },
    { name: 'Case Law', desc: 'Judicial precedents from Supreme Court & High Courts', icon: Award, count: 'Landmark Rulings' },
    { name: 'Treaties', desc: 'PCT, Madrid Protocol, TRIPS and WIPO conventions', icon: Globe, count: 'Multilateral Pacts' },
    { name: 'Guidelines', desc: 'Manual of Patent Practice & CRI examination guidelines', icon: Compass, count: 'Office Manuals' },
    { name: 'Traditional Knowledge', desc: 'TKDL formulations, TKRC structure & Sec 3(p) defense', icon: Sparkles, count: 'Defensive Archives' },
    { name: 'ABS', desc: 'Biological Diversity Act & NBA Form III approvals', icon: Leaf, count: 'Biodiversity Rules' },
    { name: 'IP Registries', desc: 'InPASS, TMR Public Search & Copyright e-filing registers', icon: Layers, count: 'Official Portals' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigateToKnowledge(undefined, searchInput.trim());
  };

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.hubKicker}
          title={t.hubTitle}
          subtitle={t.hubSubtitle}
        />

        {/* Search Bar Interface */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={t.hubSearchPlaceholder}
              className="w-full pl-11 pr-28 py-3.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-slate-800 focus:ring-1 focus:ring-slate-800 focus:outline-none shadow-xs text-slate-900 placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="absolute inset-y-1.5 right-1.5 px-4 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              {t.hubSearchButton}
            </button>
          </form>
          <div className="mt-2 text-center text-[11px] text-slate-500">
            Indexes official statutory enactments and published administrative manuals
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                onClick={() => onNavigateToKnowledge(cat.name)}
                className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-800 group-hover:text-amber-700">
                  <span>Browse repository</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View Knowledge Hub CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigateToKnowledge()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs"
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>View Complete Knowledge Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
