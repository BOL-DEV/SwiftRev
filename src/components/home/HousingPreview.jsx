import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Building, ArrowRight, ShieldCheck, CreditCard, Lock, Sparkles } from 'lucide-react';
import StatusBadge from '../shared/StatusBadge';

export default function HousingPreview() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-muted text-muted-foreground border border-border mb-4">
            Next-Generation Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            Expanding Beyond Healthcare Revenue
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-body">
            While HRMS actively manages healthcare finance today, SwiftRev is engineering specialized infrastructure for retail POS and residential tenancy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Fintech & POS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 bg-card border border-border shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <StatusBadge status="development" size="sm" />
                <span className="text-xs font-semibold text-muted-foreground">Financial Technology</span>
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-foreground mb-3">
                SwiftRev Smart POS Terminals
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                Purpose-built Android payment hardware engineered for continuous cashier environments. Offline transaction batching, integrated thermal receipt encryption, and direct hospital treasury settlement.
              </p>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/70 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Smartphone className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Hardware &amp; Terminal Software</span>
                </div>
                <p className="text-muted-foreground">
                  Currently undergoing internal laboratory testing with merchant billing integration.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">In Development</span>
              <Link to="/works" className="text-xs font-bold text-pine dark:text-teal-400 hover:underline flex items-center gap-1">
                Read Specifications &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Real Estate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-8 bg-card border border-border shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <StatusBadge status="pipeline" size="sm" />
                <span className="text-xs font-semibold text-muted-foreground">PropTech &amp; Real Estate</span>
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-foreground mb-3">
                Agent-Free Housing &amp; Rent Escrow
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                Direct tenant-to-landlord rental ecosystem that eliminates middleman markup, agency cuts, and opaque caution deposits with automated digital rent verification.
              </p>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/70 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Building className="w-4 h-4 text-slate-500" />
                  <span>Direct Tenancy Platform</span>
                </div>
                <p className="text-muted-foreground">
                  Architecture planning and landlord verification framework in design.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">In Pipeline</span>
              <Link to="/works" className="text-xs font-bold text-pine dark:text-teal-400 hover:underline flex items-center gap-1">
                Explore in Our Works &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
