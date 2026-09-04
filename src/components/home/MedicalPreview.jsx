import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Receipt,
  ArrowRight,
  TrendingUp,
  CreditCard,
  CheckCircle2,
  Lock,
  Building2
} from 'lucide-react';
import StatusBadge from '../shared/StatusBadge';

export default function MedicalPreview() {
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <StatusBadge status="live" size="sm" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Flagship In Action
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight leading-[1.08]">
              Hospital Revenue, <br />
              <span className="text-pine dark:text-teal-400">100% Accounted For</span>
            </h2>

            <p className="text-base text-muted-foreground font-body leading-relaxed">
              Healthcare facilities frequently lose between 15% and 25% of patient revenue to manual omissions, unmonitored cash handling, and unauthorized receipt reprints. SwiftRev HRMS stops every leak with a closed-loop collection and audit engine.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-muted/40 border border-border/80 space-y-1.5">
                <div className="flex items-center gap-2 font-heading font-bold text-sm text-foreground">
                  <ShieldCheck className="w-4 h-4 text-pine dark:text-teal-400" />
                  <span>Closed-Loop Cash</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Cashier shifts reconcile physical collections against logged invoices before any station handover.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/80 space-y-1.5">
                <div className="flex items-center gap-2 font-heading font-bold text-sm text-foreground">
                  <Receipt className="w-4 h-4 text-pine dark:text-teal-400" />
                  <span>Reprint Guard</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Prevents fraudulent duplicate invoices and billing slip fraud through supervisor authorization.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/80 space-y-1.5">
                <div className="flex items-center gap-2 font-heading font-bold text-sm text-foreground">
                  <CreditCard className="w-4 h-4 text-pine dark:text-teal-400" />
                  <span>Integrated POS</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Direct connection with hospital POS terminals ensures immediate verification of card settlements.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/80 space-y-1.5">
                <div className="flex items-center gap-2 font-heading font-bold text-sm text-foreground">
                  <TrendingUp className="w-4 h-4 text-pine dark:text-teal-400" />
                  <span>Executive Audit</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Hospital CMDs and finance executives maintain complete real-time visibility across all wards.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pine text-white font-heading font-bold text-xs hover:bg-pine-hover shadow-xs transition"
              >
                <span>Read Full HRMS Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-heading font-semibold text-xs hover:bg-muted transition"
              >
                Inquire for Facility Deployment
              </Link>
            </div>
          </motion.div>

          {/* Right Operational Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl bg-background border border-border p-6 shadow-lg space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">OPERATIONAL DEPLOYMENT</p>
                  <h4 className="font-heading font-bold text-base text-foreground">Facility Revenue Audit</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-semibold">
                  100% Balanced
                </span>
              </div>

              {/* Collections breakdown */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-card border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center font-bold text-xs">
                      C
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Cash Collections (Physical)</p>
                      <p className="text-[11px] text-muted-foreground">38 verified shift vouchers</p>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-sm text-foreground">₦61,300.00</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-card border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center font-bold text-xs">
                      P
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">POS Terminal Settlements</p>
                      <p className="text-[11px] text-muted-foreground">4 verified bank card batches</p>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-sm text-foreground">₦21,100.00</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-card border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center font-bold text-xs">
                      T
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Direct Bank Transfers</p>
                      <p className="text-[11px] text-muted-foreground">3 verified bank receipts</p>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-sm text-foreground">₦10,000.00</span>
                </div>
              </div>

              {/* Total Row */}
              <div className="p-4 rounded-2xl bg-pine text-white flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-white/80">TOTAL REVENUE VERIFIED</p>
                  <p className="text-2xl font-heading font-extrabold mt-0.5">₦92,400.00</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-white/80">DISCREPANCY</p>
                  <p className="text-sm font-heading font-extrabold text-teal-200 mt-0.5">₦0.00 (Zero)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
