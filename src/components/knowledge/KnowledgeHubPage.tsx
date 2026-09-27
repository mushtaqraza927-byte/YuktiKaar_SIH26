import React, { useState } from 'react';
import { KNOWLEDGE_ITEMS } from '../../data/knowledgeHub';
import { SectionHeading } from '../common/SectionHeading';
import { KnowledgeItem, Jurisdiction } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import {
  Search,
  BookOpen,
  ExternalLink,
  Filter,
  Sparkles,
  ArrowRight,
  FileText,
  Scale
} from 'lucide-react';

interface KnowledgeHubPageProps {
  initialCategory?: string;
  initialSearch?: string;
  onAskQuestion: (q: string) => void;
}

const CATEGORIES = [
  'All',
  'Laws',
  'Rules',
  'Case Law',
  'Treaties',
  'Guidelines',
  'Traditional Knowledge',
  'ABS',
  'IP Registries'
];

export const KnowledgeHubPage: React.FC<KnowledgeHubPageProps> = ({
  initialCategory = 'All',
  initialSearch = '',
  onAskQuestion
}) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [jurisdictionFilter, setJurisdictionFilter] = useState<'all' | Jurisdiction>('all');

  const filteredItems = KNOWLEDGE_ITEMS.filter((item) => {
    // Category match
    if (selectedCategory !== 'All' && item.category !== selectedCategory) {
      return false;
    }

    // Jurisdiction match
    if (jurisdictionFilter !== 'all') {
      if (item.jurisdiction !== 'both' && item.jurisdiction !== jurisdictionFilter) {
        return false;
      }
    }

    // Search term match
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchRef = item.officialReference.toLowerCase().includes(q);
      const matchSections = item.primarySections?.some((s) => s.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchRef && !matchSections) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      <SectionHeading
        kicker={t.hubKicker}
        title={t.hubTitle}
        subtitle={t.hubSubtitle}
      />

      {/* Search and Filters Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.hubSearchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-slate-100">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Jurisdiction toggle */}
          <div className="flex items-center gap-2 shrink-0 text-xs">
            <span className="text-slate-500 font-medium">Jurisdiction:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
              <button
                type="button"
                onClick={() => setJurisdictionFilter('all')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  jurisdictionFilter === 'all'
                    ? 'bg-white font-semibold text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setJurisdictionFilter('india')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  jurisdictionFilter === 'india'
                    ? 'bg-white font-semibold text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                India 🇮🇳
              </button>
              <button
                type="button"
                onClick={() => setJurisdictionFilter('international')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  jurisdictionFilter === 'international'
                    ? 'bg-white font-semibold text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                International 🌍
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong>{filteredItems.length}</strong> authoritative resources
        </span>
        {(searchTerm || selectedCategory !== 'All' || jurisdictionFilter !== 'all') && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setJurisdictionFilter('all');
            }}
            className="text-amber-800 hover:underline font-medium"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {item.yearOrVersion}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-1 mb-3">
                <span>{item.publisher}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-slate-700">{item.officialReference}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {item.description}
              </p>

              {item.primarySections && item.primarySections.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Key Statutory Provisions & Clauses:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.primarySections.map((sec, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              {item.externalUrl ? (
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Official Text</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs text-slate-400">Statutory Record</span>
              )}

              <button
                type="button"
                onClick={() => onAskQuestion(`Explain ${item.title} and its key statutory requirements.`)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors shadow-2xs"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Ask About This</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white border border-dashed border-slate-300 rounded-xl p-8">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <h3 className="text-base font-bold text-slate-900">No resources match your query</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search terms or resetting category filters to browse all statutory repositories.
          </p>
        </div>
      )}
    </div>
  );
};
