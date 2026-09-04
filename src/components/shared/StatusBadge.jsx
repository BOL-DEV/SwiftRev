import React from 'react';

export default function StatusBadge({ status = 'live', size = 'md' }) {
  if (status === 'live') {
    return (
      <span className={`inline-flex items-center gap-1.5 font-heading font-semibold rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/50 ${
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-xs md:text-sm'
      }`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Live &amp; Operating
      </span>
    );
  }

  if (status === 'development') {
    return (
      <span className={`inline-flex items-center gap-1.5 font-heading font-semibold rounded-full bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50 ${
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-xs md:text-sm'
      }`}>
        <span className="inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        In Development
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 font-heading font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 ${
      size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-xs md:text-sm'
    }`}>
      <span className="inline-flex rounded-full h-2 w-2 bg-slate-400"></span>
      In Pipeline
    </span>
  );
}
