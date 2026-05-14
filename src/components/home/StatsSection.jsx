import React from 'react';
import StatCounter from '../shared/StatCounter';

const stats = [
  { value: 15000, suffix: '+', label: 'Users Served', delay: 0 },
  { value: 98, suffix: '%', label: 'Approval Rate', delay: 0.1 },
  { value: 2, suffix: 'M+', prefix: '₦', label: 'Transactions Processed', delay: 0.2 },
  { value: 0, suffix: '', label: 'Agent Fees', delay: 0.3 },
];

export default function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-10 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}