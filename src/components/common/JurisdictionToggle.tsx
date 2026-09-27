import React from 'react';
import { Jurisdiction } from '../../types';

interface JurisdictionToggleProps {
  value: Jurisdiction;
  onChange: (val: Jurisdiction) => void;
  size?: 'sm' | 'md';
}

export const JurisdictionToggle: React.FC<JurisdictionToggleProps> = ({
  value,
  onChange,
  size = 'md'
}) => {
  return (
    <div
      className={`inline-flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200/80 ${
        size === 'sm' ? 'text-xs' : 'text-sm'
      }`}
      role="radiogroup"
      aria-label="Select IP Jurisdiction"
    >
      <button
        type="button"
        role="radio"
        aria-checked={value === 'india'}
        onClick={() => onChange('india')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-all duration-150 ${
          value === 'india'
            ? 'bg-white text-slate-900 shadow-xs font-semibold'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        <span>India</span>
        <span aria-hidden="true">🇮🇳</span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={value === 'international'}
        onClick={() => onChange('international')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-all duration-150 ${
          value === 'international'
            ? 'bg-white text-slate-900 shadow-xs font-semibold'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        <span>International</span>
        <span aria-hidden="true">🌍</span>
      </button>
    </div>
  );
};
