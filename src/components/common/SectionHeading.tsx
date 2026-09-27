import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  return (
    <div
      className={`mb-10 md:mb-12 ${
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      } max-w-3xl ${className}`}
    >
      {kicker && (
        <div className="text-xs font-semibold tracking-wide text-amber-700 uppercase mb-2">
          {kicker}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
