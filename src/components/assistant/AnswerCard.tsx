import React, { useState } from 'react';
import { AssistantAnswer } from '../../types';
import { ConfidenceIndicator } from '../common/ConfidenceIndicator';
import { CitationPanel } from './CitationPanel';
import {
  Copy,
  Check,
  Users,
  Compass,
  FileCheck2,
  ChevronDown,
  ChevronUp,
  Share2,
  Cpu
} from 'lucide-react';

interface AnswerCardProps {
  answer: AssistantAnswer;
  onSelectRelatedQuestion: (q: string) => void;
  onOpenEscalation: (ans: AssistantAnswer) => void;
}

export const AnswerCard: React.FC<AnswerCardProps> = ({
  answer,
  onSelectRelatedQuestion,
  onOpenEscalation
}) => {
  const [copied, setCopied] = useState(false);
  const [showRAGTrace, setShowRAGTrace] = useState(false);

  const handleCopy = () => {
    const textToCopy = `Question: ${answer.question}\n\nSummary:\n${answer.answerSummary}\n\nKey Points:\n${answer.keyPoints.map((p) => `• ${p}`).join('\n')}\n\nSources:\n${answer.citations.map((c) => `${c.title} (${c.sectionOrArticle || ''})`).join('\n')}\n\n-- Grounded by IP SAKTI (Informational guidance only)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden transition-all duration-200">
      {/* Top Metadata Bar */}
      <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-900 capitalize">
            {answer.ipType.replace('_', ' ')}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 flex items-center gap-1">
            <span>Jurisdiction:</span>
            <span className="font-semibold text-slate-900 capitalize">
              {answer.jurisdiction === 'india' ? 'India 🇮🇳' : 'International 🌍'}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ConfidenceIndicator
            confidence={answer.confidence}
            note={answer.confidenceNote}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Core Summary */}
        <div>
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Grounded Assessment
          </h3>
          <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
            {answer.answerSummary}
          </p>
        </div>

        {/* Structured Key Points */}
        {answer.keyPoints && answer.keyPoints.length > 0 && (
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Statutory Breakdown & Key Elements
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              {answer.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Detailed Explanation */}
        {answer.fullExplanation && (
          <div className="p-4 rounded-lg bg-[#FAFAF7] border border-slate-200/60 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1">
            <span className="font-semibold text-slate-800 block text-xs uppercase tracking-wider mb-1">
              Procedural Context
            </span>
            <p>{answer.fullExplanation}</p>
          </div>
        )}

        {/* RAG Inspection Toggle */}
        {answer.retrievalStages && (
          <div className="border border-slate-200/80 rounded-lg overflow-hidden bg-slate-50/50">
            <button
              type="button"
              onClick={() => setShowRAGTrace(!showRAGTrace)}
              className="w-full px-4 py-2.5 flex items-center justify-between text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-medium">Behind This Answer: Retrieval & Verification Trace</span>
              </div>
              {showRAGTrace ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showRAGTrace && (
              <div className="p-4 border-t border-slate-200/70 text-xs space-y-2 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-800 block">Query Analysis</span>
                    <span>{answer.retrievalStages.queryAnalysis}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block">Identified Jurisdiction</span>
                    <span>{answer.retrievalStages.jurisdictionIdentified}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block">Knowledge Corpus Match</span>
                    <span>{answer.retrievalStages.classification} ({answer.retrievalStages.sourcesMatchedCount} authoritative sources linked)</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block">Grounding Verification</span>
                    <span>{answer.retrievalStages.verificationNotes}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Citations Section */}
        <CitationPanel citations={answer.citations} />

        {/* Related Questions */}
        {answer.relatedQuestions && answer.relatedQuestions.length > 0 && (
          <div className="pt-4 border-t border-slate-200/80 space-y-2">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-slate-500" />
              <span>Related Inquiries</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {answer.relatedQuestions.map((q, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onSelectRelatedQuestion(q)}
                  className="text-left text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 transition-colors shadow-2xs"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copied with Citations' : 'Copy Answer'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenEscalation(answer)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-2xs"
          >
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Escalate to Facilitator</span>
          </button>
        </div>
      </div>
    </div>
  );
};
