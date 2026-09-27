import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import {
  MessageSquare,
  Search,
  Database,
  ShieldCheck,
  Sparkles,
  BookmarkCheck,
  Cpu,
  Layers,
  ArrowRight,
  ShieldAlert,
  Users
} from 'lucide-react';

interface HowItWorksPageProps {
  onAsk: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onAsk }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'user' | 'technical'>('user');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SectionHeading
        kicker={t.howKicker}
        title={t.howTitle}
        subtitle={t.howSubtitle}
      />

      {/* Perspective Tab Selector */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('user')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === 'user'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            User Experience Journey
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('technical')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === 'technical'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Technical RAG Pipeline
          </button>
        </div>
      </div>

      {activeTab === 'user' ? (
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              step: '01',
              title: 'ASK',
              subtitle: 'Formulate an inquiry in plain natural language',
              desc: 'Users can submit queries across any intellectual property domain—from broad foundational questions ("What is the difference between patent and design?") to highly specific procedural questions ("What are the timelines for filing Form 27?"). The system accepts inputs in English, Hindi, and regional Indian languages.',
              icon: MessageSquare
            },
            {
              step: '02',
              title: 'UNDERSTAND',
              subtitle: 'Intent parsing and jurisdiction classification',
              desc: 'The assistant identifies the governing statutory category (Patent, Trademark, Copyright, GI, Traditional Knowledge, or ABS) and segregates domestic Indian statutory jurisdiction (The Patents Act 1970, Trade Marks Act 1999) from international frameworks (PCT, Madrid Protocol, TRIPS, Berne Convention).',
              icon: Search
            },
            {
              step: '03',
              title: 'RETRIEVE',
              subtitle: 'Extracting verified statutory chunks',
              desc: 'Rather than predicting answers from ungrounded memory, IP SAKTI retrieves authoritative statutory provisions, gazetted amendments, and published examination manuals from official repositories including India Code, CGPDTM, and WIPO.',
              icon: Database
            },
            {
              step: '04',
              title: 'VERIFY',
              subtitle: 'Grounding check and judicial precedent verification',
              desc: 'Retrieved statutory sections are checked for current legal validity, relevant amendments (e.g. 2024 Patent Rules or 2023 Biodiversity amendments), and landmark Supreme Court interpretations (e.g. Novartis AG v. Union of India for Section 3(d)).',
              icon: ShieldCheck
            },
            {
              step: '05',
              title: 'ANSWER',
              subtitle: 'Synthesized plain-language legal explanation',
              desc: 'The assistant generates a clear, structured summary with bulleted statutory criteria, procedural context, and practical guidance without dense inaccessible legalese.',
              icon: Sparkles
            },
            {
              step: '06',
              title: 'CITE',
              subtitle: 'Uncompromising source transparency',
              desc: 'Every response is accompanied by expandable citation cards referencing the exact act, rule, section, publisher, and official portal URL, paired with a transparent epistemic confidence indicator.',
              icon: BookmarkCheck
            }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6 shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs font-semibold text-amber-800">
                      {item.subtitle}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xs">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-600" />
              <span>Zero-Hallucination Retrieval Augmented Generation (RAG)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standard commercial LLMs are prone to hallucinating non-existent court decisions, invented statutory section numbers, and outdated rules. IP SAKTI eliminates this vulnerability through a strict, multi-stage retrieval and grounding constraint pipeline:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">
                  1. Dense + BM25 Hybrid Retrieval
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Queries are matched against tokenized legal statutory clauses using BM25 for precise section codes (e.g. "Section 3(k)") combined with dense vector embeddings for conceptual matching.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">
                  2. Jurisdictional Gating
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Indian domestic statutory materials (India Code, CGPDTM manuals) are strictly partitioned from foreign and international treaty frameworks to prevent legal conflation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">
                  3. Grounding Verification
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The generation engine is constrained to cite only retrieved source chunks. Claims that fail attribution check are pruned before the final response is delivered.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">
                  4. Epistemic Confidence Scoring
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Confidence (High, Medium, Low) is mathematically scored based on cosine overlap with verbatim statutes and certainty of administrative guidelines.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold">Human Facilitator Escalation Protocol</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When queries involve active litigation, First Examination Report (FER) response deadlines, complex patent claim drafting, or contentious opposition proceedings, automated retrieval is insufficient. IP SAKTI features a direct escalation mechanism enabling innovators to package their inquiry with retrieved statutory citations and route it to registered patent attorneys and certified IP facilitators.
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="text-center pt-6">
        <button
          type="button"
          onClick={onAsk}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-xs"
        >
          <span>Test the Assistant Pipeline</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </button>
      </div>
    </div>
  );
};
