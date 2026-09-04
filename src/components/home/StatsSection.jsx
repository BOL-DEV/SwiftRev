import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Core Sectors', sub: 'Medical, Real Estate, Retail POS' },
  { value: 'HRMS', label: 'Flagship Live', sub: 'Operating in partner hospitals' },
  { value: 'Zero-Leakage', label: 'System Architecture', sub: 'Closed-loop audit & governance' },
  { value: 'Enterprise', label: 'Engineering Grade', sub: 'Built for scale across Africa' },
];

export default function StatsSection() {
  return (
    <section className="py-12 border-y border-border bg-card/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-pine dark:text-teal-400">
                {stat.value}
              </div>
              <div className="text-sm font-heading font-bold text-foreground mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}