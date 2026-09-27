import React, { useState } from 'react';
import { Citation } from '../../types';
import { ExternalLink, ChevronDown, ChevronUp, FileText, CheckCircle2 } from 'lucide-react';

interface CitationCardProps {
  citation: Citation;
  index: number;
}

export const CitationCard: React.FC<CitationCardProps> = ({ citation, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg bg-white overflow-hidden transition-all duration-150 hover:border-slate-300">
      <div
        className="p-3.5 flex items-start justify-between gap-3 cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start gap-2.5 min-w-0">
          <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center shrink-0 text-slate-700 text-xs font-semibold font-mono">
            {index + 1}
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
              {citation.title}
            </h4>
            <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[11px] text-slate-500">
              <span>{citation.sourceType}</span>
              <span aria-hidden="true">·</span>
              <span className="truncate max-w-[200px]">{citation.publisher}</span>
              {citation.sectionOrArticle && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-700">{citation.sectionOrArticle}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1 text-[10px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>{citation.verificationStatus}</span>
          </div>
          <button
            type="button"
            className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label={expanded ? 'Collapse citation' : 'Expand citation'}
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/50 text-xs text-slate-600 space-y-2 animate-in fade-in duration-150">
          <p className="leading-relaxed text-slate-700">
            {citation.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] text-slate-500 border-t border-slate-200/60">
            {citation.dateOrVersion && (
              <div>
                <span className="font-medium text-slate-700">Enactment / Revision: </span>
                <span>{citation.dateOrVersion}</span>
              </div>
            )}
            <div>
              <span className="font-medium text-slate-700">Jurisdiction: </span>
              <span className="capitalize">{citation.jurisdiction}</span>
            </div>
          </div>

          {citation.officialUrl && (
            <div className="pt-2">
              <a
                href={citation.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-900 hover:text-amber-700 transition-colors underline decoration-slate-300 underline-offset-2"
              >
                <span>Access verified statutory record</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
