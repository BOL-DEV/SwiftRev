import React from 'react';
import { Check } from 'lucide-react';

const steps = [
  { number: 1, label: 'Tier' },
  { number: 2, label: 'Details' },
  { number: 3, label: 'Docs' },
  { number: 4, label: 'Revenue' },
  { number: 5, label: 'Review' },
];

export default function StepIndicator({ current }) {
  return (
    <div className="flex items-center justify-center mb-10">
      {steps.map((step, i) => (
        <React.Fragment key={step.number}>
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                ${current > step.number ? 'bg-blue-500 text-white' : current === step.number ? 'bg-blue-500 text-white ring-4 ring-blue-100' : 'bg-slate-100 text-slate-400'}`}
            >
              {current > step.number ? <Check className="w-3.5 h-3.5" /> : step.number}
            </div>
            <span className={`mt-1.5 text-xs font-semibold hidden sm:block ${current === step.number ? 'text-blue-500' : 'text-slate-400'}`}>
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-1.5 mb-5 transition-all ${current > step.number ? 'bg-blue-500' : 'bg-slate-200'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}