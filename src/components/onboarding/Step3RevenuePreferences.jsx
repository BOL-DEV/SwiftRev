import React from 'react';

const inputCls = "w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition";
const labelCls = "block text-xs font-semibold text-slate-500 mb-1.5";

const collectionChannels = [
  'Cash (Front Desk)',
  'POS Terminal',
  'Bank Transfer',
  'Mobile Money (USSD)',
  'Online Payment Gateway',
  'HMO / Insurance',
  'NHIS / Government Scheme',
];

const reportingFreq = ['Daily', 'Weekly', 'Bi-Weekly', 'Monthly'];

export default function Step3RevenuePreferences({ data, onChange }) {
  const set = (field, value) => onChange({ ...data, [field]: value });

  const toggleChannel = (ch) => {
    const current = data.collectionChannels || [];
    const updated = current.includes(ch) ? current.filter(c => c !== ch) : [...current, ch];
    set('collectionChannels', updated);
  };

  return (
    <div className="space-y-7">
      {/* Collection Channels */}
      <div>
        <label className={labelCls}>Active Revenue Collection Channels *</label>
        <p className="text-xs text-slate-400 mb-3">Select all that apply to your facility.</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {collectionChannels.map(ch => {
            const active = (data.collectionChannels || []).includes(ch);
            return (
              <button
                key={ch}
                type="button"
                onClick={() => toggleChannel(ch)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium text-left transition-all
                  ${active ? 'border-blue-400 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-blue-200'}`}
              >
                <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${active ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}`}>
                  {active && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </span>
                {ch}
              </button>
            );
          })}
        </div>
      </div>

      {/* Settlement Account */}
      <div>
        <label className={labelCls}>Settlement Bank *</label>
        <input className={inputCls} placeholder="e.g. First Bank of Nigeria" value={data.settlementBank || ''} onChange={e => set('settlementBank', e.target.value)} required />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Account Number *</label>
          <input className={inputCls} placeholder="10-digit account number" maxLength={10} value={data.accountNumber || ''} onChange={e => set('accountNumber', e.target.value)} required />
        </div>
        <div>
          <label className={labelCls}>Account Name *</label>
          <input className={inputCls} placeholder="As registered with bank" value={data.accountName || ''} onChange={e => set('accountName', e.target.value)} required />
        </div>
      </div>

      {/* Reporting */}
      <div>
        <label className={labelCls}>Preferred Reporting Frequency *</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {reportingFreq.map(f => (
            <button
              key={f}
              type="button"
              onClick={() => set('reportingFrequency', f)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all
                ${data.reportingFrequency === f ? 'border-blue-400 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-blue-200'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Special Requirements */}
      <div>
        <label className={labelCls}>Special Instructions or Requirements</label>
        <textarea
          className={`${inputCls} resize-none`}
          rows={3}
          placeholder="Any additional configurations, integrations, or workflow notes for our team..."
          value={data.specialInstructions || ''}
          onChange={e => set('specialInstructions', e.target.value)}
        />
      </div>
    </div>
  );
}