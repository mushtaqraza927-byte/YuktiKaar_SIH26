import React, { useState, useEffect } from 'react';
import { AssistantAnswer, IPType, Jurisdiction } from '../../types';
import { askQuestion } from '../../services/assistantService';
import { JurisdictionToggle } from '../common/JurisdictionToggle';
import { IPTypeSelector } from '../common/IPTypeSelector';
import { AnswerCard } from './AnswerCard';
import { EscalationModal } from '../layout/EscalationModal';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { queryStore } from '../../services/queryStore';
import {
  Send,
  Sparkles,
  Loader2,
  HelpCircle,
  RotateCcw,
  ShieldAlert,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface AssistantWorkspaceProps {
  initialQuestion?: string;
  initialJurisdiction?: Jurisdiction;
  initialIPType?: IPType;
  onNavigate?: (path: string) => void;
}

const SUGGESTED_CHIPS = [
  { label: 'Patent eligibility in India', query: 'What are the requirements for a patent application in India?' },
  { label: 'Trademark Section 9 refusal', query: 'What are the absolute grounds for refusal under Section 9 of the Trade Marks Act?' },
  { label: 'Traditional knowledge & 3(p)', query: 'Which Indian rules apply to traditional knowledge and Section 3(p) of the Patents Act?' },
  { label: 'NBA approval for patent (ABS)', query: 'When is approval from the National Biodiversity Authority (NBA) required before filing a patent?' },
  { label: 'PCT priority timelines', query: 'What international agreements govern priority timelines for global patent filings (PCT)?' },
  { label: 'Copyright fair dealing', query: 'What constitutes fair dealing under Section 52 of the Copyright Act in India?' }
];

export const AssistantWorkspace: React.FC<AssistantWorkspaceProps> = ({
  initialQuestion = '',
  initialJurisdiction = 'india',
  initialIPType = 'all',
  onNavigate
}) => {
  const { t } = useLanguage();
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction>(initialJurisdiction);
  const [ipType, setIpType] = useState<IPType>(initialIPType);
  const [inputQuery, setInputQuery] = useState(initialQuestion);
  const [loading, setLoading] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<AssistantAnswer | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [escalationAnswer, setEscalationAnswer] = useState<AssistantAnswer | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  // If initialQuestion provided, execute immediately
  useEffect(() => {
    if (initialQuestion && initialQuestion.trim().length > 0) {
      setInputQuery(initialQuestion);
      handleExecuteQuery(initialQuestion);
    }
  }, [initialQuestion]);

  const { user } = useAuth();

  const handleExecuteQuery = async (queryText: string) => {
    if (!queryText.trim() || loading) return;

    setLoading(true);
    setError(null);

    try {
      const result = await askQuestion(queryText.trim(), jurisdiction, ipType);
      setCurrentAnswer(result);
      if (!history.includes(queryText.trim())) {
        setHistory((prev) => [queryText.trim(), ...prev.slice(0, 4)]);
      }
      // Record query in administrative store
      try {
        queryStore.recordFromAssistant(queryText.trim(), ipType, jurisdiction, result, user);
      } catch (storeErr) {
        console.error('Failed to log query to queryStore:', storeErr);
      }
    } catch (err) {
      setError('An error occurred while accessing the knowledge corpus. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExecuteQuery(inputQuery);
  };

  const handleChipClick = (query: string) => {
    setInputQuery(query);
    handleExecuteQuery(query);
  };

  const handleClear = () => {
    setInputQuery('');
    setCurrentAnswer(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.assistantKicker}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {t.assistantTitle}
          </h1>
        </div>

        {/* Jurisdiction & IP Type Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <JurisdictionToggle
            value={jurisdiction}
            onChange={(j) => {
              setJurisdiction(j);
              if (currentAnswer) {
                handleExecuteQuery(inputQuery);
              }
            }}
          />
        </div>
      </div>

      {/* Query Formulation Box */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <label htmlFor="query-input" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            {t.assistantPromptLabel}
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">{t.assistantDomainFilter}</span>
            <IPTypeSelector
              value={ipType}
              onChange={(t) => setIpType(t)}
              variant="dropdown"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <textarea
            id="query-input"
            rows={3}
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={
              jurisdiction === 'india'
                ? t.assistantInputPlaceholderIndia
                : t.assistantInputPlaceholderIntl
            }
            className="w-full text-sm sm:text-base p-3.5 rounded-lg border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 focus:outline-none text-slate-900 placeholder:text-slate-400 resize-none transition-all leading-relaxed"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                handleSubmit(e);
              }
            }}
          />

          <div className="mt-3 flex items-center justify-between">
            <div className="text-[11px] text-slate-400 hidden sm:block">
              Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-600 font-mono text-[10px]">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-600 font-mono text-[10px]">Enter</kbd> to submit
            </div>

            <div className="flex items-center gap-2 ml-auto">
              {inputQuery && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Clear
                </button>
              )}
              <button
                type="submit"
                disabled={!inputQuery.trim() || loading}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xs"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                    <span>{t.assistantRetrieving}</span>
                  </>
                ) : (
                  <>
                    <span>{t.heroAskButton}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Suggested Queries Chips */}
        <div className="pt-2 border-t border-slate-100">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Suggested Verification Questions:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {SUGGESTED_CHIPS.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleChipClick(chip.query)}
                className="text-left text-xs px-2.5 py-1 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-700 transition-colors"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* States: Loading, Error, Answer, Empty */}
      {loading && (
        <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 text-center space-y-4 shadow-xs animate-in fade-in duration-150">
          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mx-auto animate-pulse">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              {t.assistantRetrieving}
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Scanning India Code, Patent Examination Manuals, and WIPO repository indexes for relevant provisions.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 text-[11px] text-slate-400">
            <span>Query Analysis</span>
            <span>→</span>
            <span>Statute Verification</span>
            <span>→</span>
            <span>Citation Grounding</span>
          </div>
        </div>
      )}

      {error && !loading && (
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center space-y-3">
          <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mx-auto">
            <RotateCcw className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-semibold text-rose-900">{error}</h3>
          <button
            onClick={() => handleExecuteQuery(inputQuery)}
            className="px-4 py-1.5 bg-rose-900 text-white text-xs font-semibold rounded-lg hover:bg-rose-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {currentAnswer && !loading && (
        <AnswerCard
          answer={currentAnswer}
          onSelectRelatedQuestion={(q) => {
            setInputQuery(q);
            handleExecuteQuery(q);
          }}
          onOpenEscalation={(ans) => setEscalationAnswer(ans)}
        />
      )}

      {!currentAnswer && !loading && !error && (
        <div className="bg-white border border-dashed border-slate-300 rounded-xl p-8 sm:p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6 text-slate-500" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {t.assistantEmptyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto leading-relaxed">
              {t.assistantEmptyDesc}
            </p>
          </div>
          <div className="pt-2 text-xs text-slate-400">
            Architecture: Ask → Understand → Retrieve → Verify → Answer → Cite
          </div>
        </div>
      )}

      {/* Persistent Disclaimer */}
      <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-500 flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-slate-700">Legal Boundary Notice:</strong> {t.disclaimerText}
        </p>
      </div>

      {/* Escalation Modal */}
      {escalationAnswer && (
        <EscalationModal
          isOpen={!!escalationAnswer}
          onClose={() => setEscalationAnswer(null)}
          initialQuestion={escalationAnswer.question}
          initialIPType={escalationAnswer.ipType}
          initialJurisdiction={escalationAnswer.jurisdiction}
        />
      )}
    </div>
  );
};
