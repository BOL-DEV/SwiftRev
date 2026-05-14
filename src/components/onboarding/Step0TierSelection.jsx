import React from 'react';
import { Check, Zap, Shield, Crown } from 'lucide-react';

const tiers = [
  {
    id: 'elite',
    icon: Zap,
    name: 'Elite',
    tagline: 'Essentials to get started',
    price: '₦150,000',
    period: '/month',
    color: 'blue',
    features: [
      'Revenue collection management',
      'Monthly financial reports',
      'Basic leakage detection',
      'Email support',
      'Up to 2 revenue touchpoints',
    ],
  },
  {
    id: 'pro',
    icon: Shield,
    name: 'Pro',
    tagline: 'For growing facilities',
    price: '₦350,000',
    period: '/month',
    popular: true,
    color: 'indigo',
    features: [
      'Everything in Elite',
      'Weekly financial reports',
      'Advanced leakage detection',
      'Dedicated account manager',
      'Up to 5 revenue touchpoints',
      'Cash flow optimisation',
      'Staff accountability tracking',
    ],
  },
  {
    id: 'platinum',
    icon: Crown,
    name: 'Platinum',
    tagline: 'Full-service revenue control',
    price: '₦700,000',
    period: '/month',
    color: 'amber',
    features: [
      'Everything in Pro',
      'Daily financial reports & dashboards',
      'End-to-end revenue cycle management',
      'On-site SwiftRev finance officer',
      'Unlimited revenue touchpoints',
      'HMO & insurance reconciliation',
      'Custom integrations & API access',
      'Priority 24/7 support',
    ],
  },
];

const colorMap = {
  blue: {
    badge: 'bg-blue-100 text-blue-600',
    ring: 'ring-blue-400',
    btn: 'bg-blue-500 hover:bg-blue-600 text-white',
    check: 'text-blue-500',
    icon: 'bg-blue-100 text-blue-500',
  },
  indigo: {
    badge: 'bg-indigo-100 text-indigo-600',
    ring: 'ring-indigo-500',
    btn: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    check: 'text-indigo-500',
    icon: 'bg-indigo-100 text-indigo-500',
  },
  amber: {
    badge: 'bg-amber-100 text-amber-600',
    ring: 'ring-amber-400',
    btn: 'bg-amber-500 hover:bg-amber-600 text-white',
    check: 'text-amber-500',
    icon: 'bg-amber-100 text-amber-500',
  },
};

export default function Step0TierSelection({ selected, onSelect }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Choose the service tier that best fits your facility's size and revenue management needs. You can upgrade at any time.
      </p>
      {tiers.map((tier) => {
        const c = colorMap[tier.color];
        const isSelected = selected === tier.id;
        const Icon = tier.icon;

        return (
          <button
            key={tier.id}
            type="button"
            onClick={() => onSelect(tier.id)}
            className={`w-full text-left rounded-2xl border-2 p-5 transition-all relative
              ${isSelected ? `ring-2 ${c.ring} border-transparent bg-slate-50` : 'border-slate-200 hover:border-slate-300 bg-white'}`}
          >
            {tier.popular && (
              <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-600">
                Most Popular
              </span>
            )}

            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.icon}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="font-bold text-slate-800 text-base font-heading">{tier.name}</h3>
                  <span className="text-xs text-slate-400">{tier.tagline}</span>
                </div>
                <div className="flex items-baseline gap-1 mt-0.5 mb-3">
                  <span className="text-xl font-extrabold text-slate-800 font-heading">{tier.price}</span>
                  <span className="text-xs text-slate-400">{tier.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${c.check}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selection indicator */}
              <div className={`w-5 h-5 rounded-full border-2 shrink-0 mt-1 flex items-center justify-center transition-all
                ${isSelected ? `${c.btn.split(' ')[0]} border-transparent` : 'border-slate-300'}`}>
                {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}