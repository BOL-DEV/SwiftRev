import React from 'react';
import { CheckCircle, FileText } from 'lucide-react';

const Row = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-slate-100 last:border-0">
    <span className="text-xs text-slate-400 font-semibold">{label}</span>
    <span className="text-xs text-slate-700 font-medium text-right max-w-[60%]">{value || <span className="text-slate-300 italic">Not provided</span>}</span>
  </div>
);

export default function Step4Review({ facility, docs, prefs, tier }) {
  const uploadedDocs = Object.entries(docs).filter(([, v]) => v);

  return (
    <div className="space-y-6">
      {/* Tier */}
      {tier && (
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Selected Plan</h4>
          <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
            <span className="text-lg font-extrabold text-blue-600 font-heading">{tier} Plan</span>
          </div>
        </div>
      )}

      {/* Facility */}
      <div>
        <h4 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Facility Details</h4>
        <div className="bg-slate-50 rounded-xl p-4">
          <Row label="Facility Name" value={facility.facilityName} />
          <Row label="Type" value={facility.facilityType} />
          <Row label="Registration No." value={facility.regNumber} />
          <Row label="Address" value={facility.address} />
          <Row label="Contact" value={facility.contactName ? `${facility.contactName} — ${facility.contactRole}` : ''} />
          <Row label="Email" value={facility.email} />
          <Row label="Phone" value={facility.phone} />
          <Row label="Monthly Revenue" value={facility.revenueRange} />
        </div>
      </div>

      {/* Documents */}
      <div>
        <h4 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Uploaded Documents</h4>
        <div className="bg-slate-50 rounded-xl p-4 space-y-2">
          {uploadedDocs.length === 0
            ? <p className="text-xs text-slate-400 italic">No documents uploaded.</p>
            : uploadedDocs.map(([key, file]) => (
              <div key={key} className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-xs text-slate-600 truncate">{file.name}</span>
                <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 ml-auto" />
              </div>
            ))
          }
        </div>
      </div>

      {/* Revenue Prefs */}
      <div>
        <h4 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Revenue Preferences</h4>
        <div className="bg-slate-50 rounded-xl p-4">
          <Row label="Collection Channels" value={(prefs.collectionChannels || []).join(', ')} />
          <Row label="Settlement Bank" value={prefs.settlementBank} />
          <Row label="Account Number" value={prefs.accountNumber} />
          <Row label="Account Name" value={prefs.accountName} />
          <Row label="Reporting Frequency" value={prefs.reportingFrequency} />
          {prefs.specialInstructions && <Row label="Special Instructions" value={prefs.specialInstructions} />}
        </div>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed text-center pt-2">
        By submitting, you confirm that all information provided is accurate and that you authorise SwiftRev to commence revenue management services on behalf of your facility.
      </p>
    </div>
  );
}