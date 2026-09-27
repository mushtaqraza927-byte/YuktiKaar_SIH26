import React from 'react';
import { SAMPLE_QUESTIONS } from '../../data/sampleQuestions';
import { SectionHeading } from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { MessageSquare, ArrowRight, CornerDownRight } from 'lucide-react';

interface RealQuestionsSectionProps {
  onSelectQuestion: (q: string) => void;
}

export const RealQuestionsSection: React.FC<RealQuestionsSectionProps> = ({
  onSelectQuestion
}) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.questionsKicker}
          title={t.questionsTitle}
          subtitle={t.questionsSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {SAMPLE_QUESTIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectQuestion(item.question)}
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-400 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700 capitalize">
                      {item.category.replace('_', ' ')}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500 capitalize">
                      {item.jurisdiction === 'india' ? 'India 🇮🇳' : 'International 🌍'}
                    </span>
                  </div>
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                  "{item.question}"
                </h3>

                <p className="mt-2 text-xs text-slate-500 flex items-start gap-1.5">
                  <CornerDownRight className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{item.brief}</span>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800 group-hover:text-amber-700">
                <span>Ask this in Assistant</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
