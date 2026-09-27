import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import {
  MessageSquare,
  Search,
  Layers,
  Globe2,
  Database,
  Cpu,
  ShieldCheck,
  BookmarkCheck,
  Sparkles,
  Info
} from 'lucide-react';

export const RAGArchitectureSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const architectureDetails = [
    {
      title: '1. User Question Intake',
      desc: 'Natural language input via web workspace or API. Supports multiple languages (English, Hindi, regional Indian languages).',
      tech: 'Language identification & normalization'
    },
    {
      title: '2. Query Analysis & Intent Parsing',
      desc: 'Deconstructs the question into legal concepts: filing criteria, validity challenges, enforcement boundaries, or procedural deadlines.',
      tech: 'Semantic intent classification'
    },
    {
      title: '3. IP Classification & Jurisdiction Detection',
      desc: 'Routes query to dedicated domain ontology (Patent, Trademark, Copyright, GI, TKDL, ABS) and detects jurisdiction (India domestic vs International).',
      tech: 'Jurisdiction routing & Nice/IPC domain tagger'
    },
    {
      title: '4. Knowledge Retrieval (Hybrid BM25 + Vector Search)',
      desc: 'Retrieves authoritative sections from India Code statutes, CGPDTM examination manuals, Supreme Court case law, and WIPO treaties.',
      tech: 'Dense vector embeddings + keyword index'
    },
    {
      title: '5. RAG Generation & Grounding Filter',
      desc: 'Passes retrieved statutory chunks into generative model with strict negative constraint: claims not grounded in retrieved source context are discarded.',
      tech: 'Attribution checking & hallucination suppression'
    },
    {
      title: '6. Verified Response + Citations & Confidence',
      desc: 'Emits structured response with verbatim statutory section references, expandable citation cards, and explicit epistemic confidence indicator.',
      tech: 'Citation metadata extraction & confidence scoring'
    }
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.archKicker}
          title={t.archTitle}
          subtitle={t.archSubtitle}
        />

        {/* Diagram container */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {/* Step 1: User Question */}
            <div
              onMouseEnter={() => setActiveStep(0)}
              className={`w-full max-w-md p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeStep === 0
                  ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                  : 'border-slate-200 bg-[#FAFAF7]'
              }`}
            >
              <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Intake
              </div>
              <div className="text-sm font-bold text-slate-900 flex items-center justify-center gap-1.5 mt-0.5">
                <MessageSquare className="w-4 h-4 text-amber-600" />
                <span>USER QUESTION</span>
              </div>
            </div>

            <div className="w-px h-5 bg-slate-300" />

            {/* Step 2: Query Analysis */}
            <div
              onMouseEnter={() => setActiveStep(1)}
              className={`w-full max-w-md p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeStep === 1
                  ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                  : 'border-slate-200 bg-[#FAFAF7]'
              }`}
            >
              <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Decomposition
              </div>
              <div className="text-sm font-bold text-slate-900 flex items-center justify-center gap-1.5 mt-0.5">
                <Search className="w-4 h-4 text-slate-700" />
                <span>QUERY ANALYSIS</span>
              </div>
            </div>

            <div className="w-px h-5 bg-slate-300" />

            {/* Split classification & jurisdiction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
              <div
                onMouseEnter={() => setActiveStep(2)}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  activeStep === 2
                    ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                    : 'border-slate-200 bg-[#FAFAF7]'
                }`}
              >
                <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Classification
                </div>
                <div className="text-xs font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span>IP CLASSIFICATION</span>
                </div>
              </div>

              <div
                onMouseEnter={() => setActiveStep(2)}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  activeStep === 2
                    ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                    : 'border-slate-200 bg-[#FAFAF7]'
                }`}
              >
                <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Jurisdiction
                </div>
                <div className="text-xs font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>JURISDICTION DETECTION</span>
                </div>
              </div>
            </div>

            <div className="w-px h-5 bg-slate-300" />

            {/* Knowledge Retrieval */}
            <div
              onMouseEnter={() => setActiveStep(3)}
              className={`w-full max-w-lg p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeStep === 3
                  ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                  : 'border-slate-200 bg-[#FAFAF7]'
              }`}
            >
              <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Dense & Keyword Retrieval
              </div>
              <div className="text-sm font-bold text-slate-900 flex items-center justify-center gap-1.5 mt-0.5">
                <Database className="w-4 h-4 text-amber-600" />
                <span>KNOWLEDGE RETRIEVAL</span>
              </div>
            </div>

            <div className="w-px h-4 bg-slate-300" />

            {/* 3 Source categories */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-lg">
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-center">
                <span className="text-xs font-bold text-slate-900 block">LAWS</span>
                <span className="text-[10px] text-slate-500">Patents / TM Acts</span>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-center">
                <span className="text-xs font-bold text-slate-900 block">CASE LAW</span>
                <span className="text-[10px] text-slate-500">Supreme Court Precedents</span>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-center">
                <span className="text-xs font-bold text-slate-900 block">TREATIES</span>
                <span className="text-[10px] text-slate-500">PCT / Madrid / TRIPS</span>
              </div>
            </div>

            <div className="w-px h-5 bg-slate-300" />

            {/* RAG Generation */}
            <div
              onMouseEnter={() => setActiveStep(4)}
              className={`w-full max-w-md p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeStep === 4
                  ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                  : 'border-slate-200 bg-[#FAFAF7]'
              }`}
            >
              <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Grounded Synthesis
              </div>
              <div className="text-sm font-bold text-slate-900 flex items-center justify-center gap-1.5 mt-0.5">
                <Cpu className="w-4 h-4 text-indigo-600" />
                <span>RAG GENERATION</span>
              </div>
            </div>

            <div className="w-px h-5 bg-slate-300" />

            {/* Verified Response */}
            <div
              onMouseEnter={() => setActiveStep(5)}
              className={`w-full max-w-md p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeStep === 5
                  ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                  : 'border-slate-200 bg-[#FAFAF7]'
              }`}
            >
              <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Attribution & Confidence
              </div>
              <div className="text-sm font-bold text-slate-900 flex items-center justify-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>VERIFIED RESPONSE</span>
              </div>
            </div>

            <div className="w-px h-4 bg-slate-300" />

            {/* Citations & Confidence outputs */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-center flex items-center justify-center gap-1.5">
                <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-bold text-slate-900">CITATIONS</span>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-center flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-bold text-slate-900">CONFIDENCE SCORE</span>
              </div>
            </div>
          </div>

          {/* Interactive detail card */}
          <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50/60 rounded-xl p-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-800 font-semibold mb-1">
              <Info className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {activeStep !== null
                  ? architectureDetails[activeStep].title
                  : 'Hover over or tap any pipeline stage to view technical specification'}
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {activeStep !== null
                ? `${architectureDetails[activeStep].desc} (Component: ${architectureDetails[activeStep].tech})`
                : 'IP SAKTI eliminates hallucination by enforcing that response generation can only cite verified statutory chunks retrieved from the knowledge corpus.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
