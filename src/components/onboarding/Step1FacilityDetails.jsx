import React from 'react';

const inputCls = "w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition";
const labelCls = "block text-xs font-semibold text-slate-500 mb-1.5";

export default function Step1FacilityDetails({ data, onChange }) {
  const set = (field, value) => onChange({ ...data, [field]: value });

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Hospital / Facility Name *</label>
          <input className={inputCls} placeholder="e.g. Greenfield General Hospital" value={data.facilityName} onChange={e => set('facilityName', e.target.value)} required />
        </div>
        <div>
          <label className={labelCls}>Facility Type *</label>
          <select className={inputCls} value={data.facilityType} onChange={e => set('facilityType', e.target.value)} required>
            <option value="">Select type</option>
            <option>Government Hospital</option>
            <option>Private Hospital</option>
            <option>Teaching Hospital</option>
            <option>Specialist Clinic</option>
            <option>Diagnostic Centre</option>
            <option>Maternity / PHC</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Registration / CAC Number *</label>
          <input className={inputCls} placeholder="e.g. RC-1234567" value={data.regNumber} onChange={e => set('regNumber', e.target.value)} required />
        </div>
        <div>
          <label className={labelCls}>Year Established</label>
          <input className={inputCls} type="number" placeholder="e.g. 2005" min="1900" max="2026" value={data.yearEstablished} onChange={e => set('yearEstablished', e.target.value)} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Full Address *</label>
        <input className={inputCls} placeholder="Street, City, State" value={data.address} onChange={e => set('address', e.target.value)} required />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Primary Contact Name *</label>
          <input className={inputCls} placeholder="Full name" value={data.contactName} onChange={e => set('contactName', e.target.value)} required />
        </div>
        <div>
          <label className={labelCls}>Role / Designation *</label>
          <input className={inputCls} placeholder="e.g. Chief Finance Officer" value={data.contactRole} onChange={e => set('contactRole', e.target.value)} required />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Official Email *</label>
          <input className={inputCls} type="email" placeholder="finance@hospital.com" value={data.email} onChange={e => set('email', e.target.value)} required />
        </div>
        <div>
          <label className={labelCls}>Phone Number *</label>
          <input className={inputCls} type="tel" placeholder="+234 800 000 0000" value={data.phone} onChange={e => set('phone', e.target.value)} required />
        </div>
      </div>

      <div>
        <label className={labelCls}>Approximate Monthly Revenue (₦)</label>
        <select className={inputCls} value={data.revenueRange} onChange={e => set('revenueRange', e.target.value)}>
          <option value="">Select range</option>
          <option>Below ₦5 million</option>
          <option>₦5M – ₦20M</option>
          <option>₦20M – ₦100M</option>
          <option>₦100M – ₦500M</option>
          <option>Above ₦500M</option>
        </select>
      </div>
    </div>
  );
}