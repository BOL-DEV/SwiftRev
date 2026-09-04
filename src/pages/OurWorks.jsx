import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Smartphone,
  Receipt,
  Building,
  CreditCard,
  FileText,
  Lock
} from 'lucide-react';
import StatusBadge from '../components/shared/StatusBadge';

export default function OurWorks() {
  return (
    <div className="pt-24 min-h-screen font-body">
      {/* Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-pine/10 text-pine dark:text-teal-300 border border-pine/20 mb-6">
              Our Works &amp; Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground tracking-tight max-w-4xl mx-auto leading-[1.08]">
              High-Trust Technology for{' '}
              <span className="text-pine dark:text-teal-400">Critical Sectors</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              SwiftRev Technology Limited develops enterprise software systems across healthcare operations, real estate, and point-of-sale commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ================= SOLUTION 1: HRMS (FLAGSHIP - LIVE) ================= */}
        <div className="rounded-3xl p-8 md:p-12 bg-card border-2 border-pine/30 dark:border-teal-700/50 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <StatusBadge status="live" size="md" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Healthcare Operations &amp; Medical Finance
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
                HRMS — Hospital Revenue Management System
              </h2>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A comprehensive Healthcare Revenue &amp; Operations Management platform designed to automate, streamline, and audit the complete administrative, clinical support, billing, dual-tier pharmacy supply chain, and financial reporting lifecycle of modern multi-department hospitals.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/hrms"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-pine text-white font-heading font-bold text-xs hover:bg-pine-hover shadow-sm transition-all"
              >
                <span>Read More About HRMS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= SOLUTION 2: FINTECH & POS ================= */}
        <div className="rounded-3xl p-8 md:p-12 bg-card border border-border shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <StatusBadge status="development" size="md" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Financial Technology &amp; Point of Sale
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">
                SwiftRev Smart POS &amp; Commercial Billing Terminals
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Dedicated enterprise smart POS hardware and terminal software tailored for hospital billing stations, agency banking, and high-velocity commercial merchants.
              </p>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-200 dark:border-amber-800/50 shrink-0">
              In Active Development
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6 text-xs">
            <div className="p-5 rounded-2xl bg-muted/30 border border-border/70 space-y-2">
              <Smartphone className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h4 className="font-heading font-bold text-sm text-foreground">Dedicated Counter Hardware</h4>
              <p className="text-muted-foreground leading-relaxed">
                Android payment terminals configured specifically for hospital ward routing, pharmacy checkouts, and consultation billing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-muted/30 border border-border/70 space-y-2">
              <Receipt className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h4 className="font-heading font-bold text-sm text-foreground">Instant Ledger Sync</h4>
              <p className="text-muted-foreground leading-relaxed">
                Thermal transaction slips print with cryptographic verification codes matched to hospital invoices in real time.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-muted/30 border border-border/70 space-y-2">
              <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h4 className="font-heading font-bold text-sm text-foreground">Offline Resilience</h4>
              <p className="text-muted-foreground leading-relaxed">
                Stores encrypted transaction signatures locally during network outages and synchronizes automatically upon reconnect.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SOLUTION 3: REAL ESTATE ================= */}
        <div className="rounded-3xl p-8 md:p-12 bg-card border border-border shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <StatusBadge status="pipeline" size="md" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  PropTech &amp; Real Estate Solutions
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">
                Agent-Free Housing &amp; Tenancy Management
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                A digital rental ecosystem connecting tenants directly with verified property owners, cutting out opaque agency markups and establishing structured rent escrow.
              </p>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shrink-0">
              In Architecture &amp; Planning
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6 text-xs">
            <div className="p-5 rounded-2xl bg-muted/30 border border-border/70 space-y-2">
              <Building className="w-5 h-5 text-slate-500" />
              <h4 className="font-heading font-bold text-sm text-foreground">Direct Landlord Access</h4>
              <p className="text-muted-foreground leading-relaxed">
                Eliminates traditional 10-20% agent commission and caution fees by verifying properties directly from owners.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-muted/30 border border-border/70 space-y-2">
              <CreditCard className="w-5 h-5 text-slate-500" />
              <h4 className="font-heading font-bold text-sm text-foreground">Protected Rent Escrow</h4>
              <p className="text-muted-foreground leading-relaxed">
                Structured rent collection with instant receipts and escrow protection for both tenants and landlords.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-muted/30 border border-border/70 space-y-2">
              <FileText className="w-5 h-5 text-slate-500" />
              <h4 className="font-heading font-bold text-sm text-foreground">Digital Tenancy Agreements</h4>
              <p className="text-muted-foreground leading-relaxed">
                Legally backed, verifiable digital lease contracts stored on secure encrypted ledgers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Bottom Banner */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <div className="rounded-3xl p-10 md:p-12 bg-pine text-white shadow-xl space-y-3">
          <h2 className="text-3xl font-heading font-extrabold tracking-tight">
            Partner With SwiftRev Technology Limited
          </h2>
          <p className="text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
            Get in touch with our team to discuss hospital deployment for HRMS or collaborate on our upcoming solutions.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-pine font-heading font-bold text-xs hover:bg-slate-100 transition shadow-xs"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
