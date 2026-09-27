import React from 'react';
import { Citation } from '../../types';
import { CitationCard } from './CitationCard';
import { BookmarkCheck } from 'lucide-react';

interface CitationPanelProps {
  citations: Citation[];
}

export const CitationPanel: React.FC<CitationPanelProps> = ({ citations }) => {
  if (!citations || citations.length === 0) return null;

  return (
    <div className="space-y-3 pt-4 border-t border-slate-200/80">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 uppercase tracking-wider">
          <BookmarkCheck className="w-4 h-4 text-amber-600" />
          <span>Supporting Statutory Sources & References ({citations.length})</span>
        </div>
        <span className="text-[11px] text-slate-500">
          Click any source to expand section text
        </span>
      </div>

      <div className="space-y-2.5">
        {citations.map((cit, idx) => (
          <CitationCard key={cit.id || idx} citation={cit} index={idx} />
        ))}
      </div>
    </div>
  );
};
