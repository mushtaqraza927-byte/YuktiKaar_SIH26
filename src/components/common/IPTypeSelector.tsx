import React from 'react';
import { IPType } from '../../types';

interface IPTypeSelectorProps {
  value: IPType;
  onChange: (val: IPType) => void;
  variant?: 'segmented' | 'dropdown';
}

const OPTIONS: { id: IPType; label: string }[] = [
  { id: 'all', label: 'All IP Types' },
  { id: 'patent', label: 'Patent' },
  { id: 'trademark', label: 'Trademark' },
  { id: 'copyright', label: 'Copyright' },
  { id: 'geographical_indication', label: 'GI' },
  { id: 'traditional_knowledge', label: 'Traditional Knowledge' },
  { id: 'abs', label: 'ABS' }
];

export const IPTypeSelector: React.FC<IPTypeSelectorProps> = ({
  value,
  onChange,
  variant = 'segmented'
}) => {
  if (variant === 'dropdown') {
    return (
      <div className="relative inline-block text-left">
        <label htmlFor="ip-type-select" className="sr-only">
          Select Intellectual Property Type
        </label>
        <select
          id="ip-type-select"
          value={value}
          onChange={(e) => onChange(e.target.value as IPType)}
          className="appearance-none bg-white border border-slate-200 text-slate-800 text-xs font-medium rounded-lg px-3 py-1.5 pr-8 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 cursor-pointer shadow-xs"
        >
          {OPTIONS.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar" role="tablist">
      {OPTIONS.map((opt) => {
        const isActive = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(opt.id)}
            className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors duration-150 ${
              isActive
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
