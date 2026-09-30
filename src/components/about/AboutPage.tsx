import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldCheck, ShieldAlert, Award, Globe, Scale, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AboutPageProps {
  onAsk: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onAsk }) => {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SectionHeading
        kicker="Mission & Principles"
        title="About IP-SAKTI"
        subtitle="A source-backed, multilingual intellectual property knowledge assistant designed to democratize legal literacy for Indian innovators and global creators."
      />

      {/* Main Philosophy Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Democratizing Intellectual Property Literacy
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Intellectual property (IP) is the lifeblood of technological innovation, scientific research, and cultural heritage preservation. Yet for thousands of grassroots inventors, university students, small-scale entrepreneurs, and traditional custodians across India, navigating statutes like The Patents Act 1970 or The Biological Diversity Act 2002 remains prohibitively difficult due to fragmented documentation, dense statutory jargon, and linguistic barriers.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            <strong>IP-SAKTI</strong> was conceived to solve this foundational gap. Rather than acting as a generic conversational bot that invents plausible-sounding answers, IP-SAKTI operates on an uncompromising mandate: <em>every answer must be retrieved from, verified against, and cited to authentic statutory and administrative records</em>.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-[#FAFAF7] border border-slate-200/70 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900">
              <Scale className="w-4 h-4 text-amber-600" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Statutory Grounding</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every assertion is anchored in primary legislation, gazetted rules, official manuals, or judicial rulings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAFAF7] border border-slate-200/70 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900">
              <Globe className="w-4 h-4 text-blue-600" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Multilingual Access</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Translating complex IP concepts across English and major Indian languages for equitable nationwide reach.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAFAF7] border border-slate-200/70 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Transparent Epistemics</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explicit confidence indicators and instant facilitator escalation paths when human legal counsel is necessary.
            </p>
          </div>
        </div>
      </div>

      {/* Distinction: What IP-SAKTI Is & Is Not */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>What IP-SAKTI Is</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
              <span>An informational knowledge assistant conditioned on verified IP statutes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
              <span>A cross-referencing tool connecting user questions with exact sections, rules, and court precedents.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
              <span>A preparatory hub that helps researchers and startups understand requirements before incurring attorney costs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
              <span>A transparent bridge to certified human IP facilitators and patent agents.</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-base">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <span>What IP-SAKTI Is NOT</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-amber-950">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
              <span>NOT a legal-advice platform or replacement for licensed attorney counsel.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
              <span>NOT an attorney-client relationship or formal legal representation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
              <span>NOT an ungrounded chatbot with hallucinated case precedents or fabricated rules.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
              <span>NOT an official government registry (applications must be filed via CGPDTM/IP India).</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Formal Statutory Disclaimer Section */}
      <div
        id="disclaimer"
        className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 scroll-mt-24"
      >
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
          <ShieldAlert className="w-5 h-5 text-amber-600" />
          <span>Statutory Disclaimer & Legal Notice</span>
        </div>
        <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5">
          <p>
            IP-SAKTI provides informational guidance based on publicly available statutory sources, examination guidelines, and judicial decisions. It does not constitute formal legal advice, patent prosecution counsel, or trademark agency representation.
          </p>
          <p>
            Intellectual property statutes involve rigorous procedural deadlines, complex territorial considerations, and discretionary examination judgments. Users preparing patent specifications, filing notices of opposition, or responding to examination objections (FER) should seek the counsel of a registered patent/trademark agent or qualified legal practitioner.
          </p>
        </div>
      </div>
    </div>
  );
};
