import React from 'react';
import { Upload, CheckCircle, FileText } from 'lucide-react';

const docs = [
  { key: 'cacCert', label: 'CAC Certificate / Incorporation Document', required: true },
  { key: 'taxId', label: 'Tax Identification Number (TIN) Certificate', required: true },
  { key: 'bankStatement', label: 'Last 3 Months Bank Statement', required: true },
  { key: 'auditReport', label: 'Most Recent Audited Financial Report', required: false },
  { key: 'licenseDoc', label: 'Operating License (Ministry of Health)', required: true },
  { key: 'directorId', label: 'Valid ID of Primary Contact / Director', required: true },
];

export default function Step2Documentation({ data, onChange }) {
  const handleFile = (key, file) => {
    onChange({ ...data, [key]: file });
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Please upload the following documents. All files should be in PDF, JPG, or PNG format and under 10MB each.
      </p>
      {docs.map(doc => {
        const uploaded = data[doc.key];
        return (
          <div key={doc.key} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${uploaded ? 'border-green-200 bg-green-50' : 'border-slate-200 bg-white hover:border-blue-200'}`}>
            <div className="flex items-center gap-3 min-w-0">
              {uploaded
                ? <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                : <FileText className="w-5 h-5 text-slate-300 shrink-0" />
              }
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-700 truncate">{doc.label}</p>
                {uploaded
                  ? <p className="text-xs text-green-600 truncate">{uploaded.name}</p>
                  : <p className="text-xs text-slate-400">{doc.required ? 'Required' : 'Optional'}</p>
                }
              </div>
            </div>
            <label className="ml-4 shrink-0 cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={e => e.target.files[0] && handleFile(doc.key, e.target.files[0])}
              />
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors
                ${uploaded ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
                <Upload className="w-3 h-3" />
                {uploaded ? 'Replace' : 'Upload'}
              </span>
            </label>
          </div>
        );
      })}
    </div>
  );
}