import React, { useState } from 'react';
import { ConfidenceLevel } from '../../types';
import { Info, ShieldCheck, ShieldAlert } from 'lucide-react';

interface ConfidenceIndicatorProps {
  confidence: ConfidenceLevel;
  note?: string;
  size?: 'sm' | 'md';
}

export const ConfidenceIndicator: React.FC<ConfidenceIndicatorProps> = ({
  confidence,
  note,
  size = 'md'
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const config = {
    high: {
      label: 'High Confidence',
      dotColor: 'bg-emerald-500',
      textColor: 'text-emerald-800',
      bgColor: 'bg-emerald-50 border-emerald-200',
      icon: ShieldCheck,
      desc: 'Corroborated with verbatim statutory provisions and published examination manuals.'
    },
    medium: {
      label: 'Medium Confidence',
      dotColor: 'bg-amber-500',
      textColor: 'text-amber-800',
      bgColor: 'bg-amber-50 border-amber-200',
      icon: ShieldAlert,
      desc: 'Grounded in related statutory principles; discretionary examination elements apply.'
    },
    low: {
      label: 'Preliminary Guidance',
      dotColor: 'bg-rose-500',
      textColor: 'text-rose-800',
      bgColor: 'bg-rose-50 border-rose-200',
      icon: ShieldAlert,
      desc: 'General domain information; query involves complex judicial discretion or incomplete prior art.'
    }
  }[confidence];

  return (
    <div className="relative inline-flex items-center">
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium cursor-help transition-colors ${config.bgColor} ${config.textColor}`}
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        role="button"
        tabIndex={0}
        aria-label={`Confidence assessment: ${config.label}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`} />
        <span className="font-semibold">{config.label}</span>
        <Info className="w-3 h-3 opacity-60 ml-0.5" />
      </div>

      {showTooltip && (
        <div className="absolute bottom-full left-0 mb-2 w-72 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl z-50 border border-slate-700 animate-in fade-in duration-150">
          <div className="font-semibold mb-1 flex items-center justify-between">
            <span>Grounding Assessment</span>
            <span className="text-[11px] font-normal text-slate-300 capitalize">{confidence}</span>
          </div>
          <p className="text-slate-300 leading-relaxed mb-2">
            {note || config.desc}
          </p>
          <div className="pt-2 border-t border-slate-700/80 text-[10px] text-slate-400">
            Confidence reflects the system's assessment of retrieved knowledge grounding. It is not a guarantee of legal correctness.
          </div>
        </div>
      )}
    </div>
  );
};
