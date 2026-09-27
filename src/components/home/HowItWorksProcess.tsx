import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import {
  MessageSquare,
  Compass,
  Database,
  ShieldCheck,
  Sparkles,
  BookmarkCheck
} from 'lucide-react';

export const HowItWorksProcess: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t.stepAsk,
      desc: 'The user asks an IP-related question across any IP domain or query depth.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: t.stepUnderstand,
      desc: 'The system identifies the relevant IP type, statutory topic, and applicable jurisdiction.',
      icon: Compass
    },
    {
      num: '03',
      title: t.stepRetrieve,
      desc: 'Relevant sections and rules are retrieved from authoritative statutory corpora.',
      icon: Database
    },
    {
      num: '04',
      title: t.stepVerify,
      desc: 'Retrieved legal information is checked against gazette text and precedents.',
      icon: ShieldCheck
    },
    {
      num: '05',
      title: t.stepAnswer,
      desc: 'The assistant synthesizes a grounded response with structured key points.',
      icon: Sparkles
    },
    {
      num: '06',
      title: t.stepCite,
      desc: 'Exact supporting statutes, official sections, and verification links are displayed.',
      icon: BookmarkCheck
    }
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.howKicker}
          title={t.howTitle}
          subtitle={t.howSubtitle}
        />

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      {step.num}
                    </span>
                    <div className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Subtle indicator for desktop flow */}
                <div className="mt-4 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-medium flex items-center justify-between">
                  <span>Phase {idx + 1} of 6</span>
                  {idx < 5 && <span className="hidden lg:inline text-slate-300 font-bold">→</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow summary banner */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-900">Epistemic Standard:</span>
            <span className="text-slate-600">
              No answer is generated without supporting statutory citations and a clear confidence rating.
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px] shrink-0">
            <span>Ask</span>
            <span>→</span>
            <span>Understand</span>
            <span>→</span>
            <span>Retrieve</span>
            <span>→</span>
            <span>Verify</span>
            <span>→</span>
            <span>Answer</span>
            <span>→</span>
            <span>Cite</span>
          </div>
        </div>
      </div>
    </section>
  );
};
