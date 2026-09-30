import React from 'react';
import { ShieldAlert, Globe, Mail, Linkedin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-slate-950 font-bold text-xs tracking-wider">
                <span className="text-amber-600 mr-0.5">I</span>P
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                IP-SAKTI
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Intellectual Property Knowledge Assistant. A multilingual, source-backed knowledge platform bridging statutory complexity across patents, trademarks, copyright, geographical indications, traditional knowledge, and biodiversity.
            </p>
            <div className="text-xs text-slate-500">
              Architecture: Grounded RAG · Verifiable Citations · Human Facilitation
            </div>
          </div>

          {/* Product & Resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/explore')}
                  className="hover:text-white transition-colors"
                >
                  Explore IP Domains
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/assistant')}
                  className="hover:text-white transition-colors"
                >
                  Knowledge Assistant
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/knowledge')}
                  className="hover:text-white transition-colors"
                >
                  Knowledge Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors"
                >
                  About Platform
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Authoritative Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/knowledge?cat=Laws')}
                  className="hover:text-white transition-colors"
                >
                  Primary Statutes & Acts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/knowledge?cat=Rules')}
                  className="hover:text-white transition-colors"
                >
                  Procedural Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/knowledge?cat=Case Law')}
                  className="hover:text-white transition-colors"
                >
                  Judicial Precedents
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/knowledge?cat=Treaties')}
                  className="hover:text-white transition-colors"
                >
                  International Treaties (WIPO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/knowledge?cat=Guidelines')}
                  className="hover:text-white transition-colors"
                >
                  Examination Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://www.bietdvg.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors group"
                >
                  <Globe className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover:text-amber-400" />
                  <span className="break-all">bietdvg.edu</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mushtaqraza095@bietdvg.edu"
                  className="flex items-start gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover:text-amber-400" />
                  <span className="break-all">mushtaqraza095@bietdvg.edu</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mohammed-mushtaq-55010236a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover:text-amber-400" />
                  <span>Mohammed Mushtaq</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer banner */}
        <div className="mt-12 pt-6 border-t border-slate-900/80">
          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-300">Statutory Disclaimer:</strong> IP-SAKTI provides informational guidance based on available statutory sources and published examination practice. It is not a substitute for professional legal advice or formal representation by a registered patent/trademark agent.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <div>
              © 2026 IP-SAKTI · Intellectual Property Knowledge Assistant. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Grounding: India Code · IP India · TKDL · NBA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
