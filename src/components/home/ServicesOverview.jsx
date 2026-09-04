import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Smartphone, Building } from 'lucide-react';
import StatusBadge from '../shared/StatusBadge';

const solutions = [
  {
    status: 'live',
    title: 'HRMS (Hospital Revenue Management System)',
    category: 'Medical Finance • Live Flagship',
    desc: 'Our currently operational platform managing hospital billing, cashier desks, and multi-channel reconciliation from patient touchpoints to bank ledgers with zero cash leakage.',
    features: [
      'Multi-channel reconciliation (Cash, POS, Transfer)',
      'Cashier & field agent shift handover audit',
      'Tamper-proof receipt reprint controls',
      'Automated daily bank settlement sweeps'
    ],
    link: '/works',
    linkLabel: 'View HRMS in Our Works',
    accentBorder: 'border-pine/30 dark:border-teal-700/50',
    highlight: true,
  },
  {
    status: 'development',
    title: 'SwiftRev Smart POS & Fintech',
    category: 'Financial Technology • In Development',
    desc: 'Customized Android POS payment terminals built specifically for hospital cashier desks, consultation points, and retail merchant operations with real-time ledger sync.',
    features: [
      'Encrypted thermal slips with verification QR',
      'Offline cashier mode for network resilience',
      'Direct HMS/EHR billing API integration',
      'Automated batch card settlement'
    ],
    link: '/works',
    linkLabel: 'Explore Pipeline Specs',
    accentBorder: 'border-border',
    highlight: false,
  },
  {
    status: 'pipeline',
    title: 'EstateRev Real Estate Solutions',
    category: 'PropTech • In Pipeline',
    desc: 'A direct tenant-to-landlord rental ecosystem that eliminates traditional 10-20% agency markups, introducing automated monthly rent escrow and verified digital lease contracts.',
    features: [
      'Direct landlord-to-tenant lease agreements',
      'Eliminates agency & caution fee markups',
      'Automated rent escrow protection',
      'Verified property ownership database'
    ],
    link: '/works',
    linkLabel: 'Learn More in Our Works',
    accentBorder: 'border-border',
    highlight: false,
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 relative border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-pine/10 text-pine dark:text-teal-300 border border-pine/20 mb-4">
            Solutions Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            Our Works &amp; Innovation Pipeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-body">
            SwiftRev Technology Limited develops high-trust infrastructure across three strategic domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl p-8 bg-card border ${item.accentBorder} shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                item.highlight ? 'ring-2 ring-pine/20 dark:ring-teal-500/20' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <StatusBadge status={item.status} size="sm" />
                  <span className="text-[11px] font-semibold text-muted-foreground">
                    {item.category.split('•')[0]}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-extrabold text-foreground leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 pt-6 border-t border-border space-y-2.5">
                  <p className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400">
                    Core Capabilities:
                  </p>
                  {item.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-foreground/80 font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pine dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to={item.link}
                  className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-center text-xs font-heading font-bold transition-all ${
                    item.highlight
                      ? 'bg-pine text-white hover:bg-pine-hover shadow-xs'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  <span>{item.linkLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}