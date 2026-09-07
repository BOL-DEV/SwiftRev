import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Activity,
  Building2,
  Smartphone,
  Cpu,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import StatusBadge from '../shared/StatusBadge';

const sectors = [
  {
    id: 'medical',
    name: 'Medical & Healthcare',
    badge: 'Live Flagship: HRMS',
    status: 'live',
    headline: 'Health Revenue Management System (HRMS)',
    description: 'Our currently built and operating solution. Eliminates hospital revenue leakages, streamlines cashier operations, and provides real-time operational transparency for healthcare facilities.',
    highlight: 'Currently operational in partner hospitals',
    icon: Activity,
  },
  {
    id: 'realestate',
    name: 'Real Estate & Housing',
    badge: 'In Pipeline',
    status: 'pipeline',
    headline: 'Agent-Free Housing & Property Management',
    description: 'Modernizing residential and commercial real estate. Direct landlord-to-tenant tenancy agreements, automated rent management, and transparent property discovery.',
    highlight: 'PropTech platform in architectural design',
    icon: Building2,
  },
  {
    id: 'pos',
    name: 'Smart POS & Commerce',
    badge: 'In Development',
    status: 'development',
    headline: 'Enterprise Point-of-Sale Hardware & Software',
    description: 'Purpose-built smart POS terminals designed for high-frequency billing stations, hospital counters, pharmacies, and commercial merchants.',
    highlight: 'Dedicated merchant & hospital terminals',
    icon: Smartphone,
  },
];

export default function HeroSection() {
  const [activeSector, setActiveSector] = useState(sectors[0]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-pine/5 dark:bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Hero Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 md:mb-20">
          {/* Left Column - Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-pine dark:bg-teal-400 animate-pulse"></span>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                SwiftRev And Technology Limited • Multi-Sector Innovation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-[1.08]"
            >
              Building Specialized Technology Across{' '}
              <span className="text-pine dark:text-teal-400">Vital Sectors</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed max-w-xl"
            >
              SwiftRev develops high-impact digital solutions that solve real industry bottlenecks — from <strong>healthcare revenue and medical finance</strong> to <strong>real estate technology</strong>, <strong>smart POS terminals</strong>, and enterprise software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-pine text-white rounded-full font-heading font-bold text-xs hover:bg-pine-hover shadow-sm transition-all duration-200"
              >
                <span>Explore Our Works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border bg-card hover:bg-muted text-foreground rounded-full font-heading font-semibold text-xs transition-all"
              >
                About the Company
              </Link>
            </motion.div>

            {/* Micro Trust Points */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-pine dark:text-teal-400" />
                <span>Zero Cash Leakage Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-pine dark:text-teal-400" />
                <span>Multi-Sector Enterprise Scale</span>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration of Person Operating Laptop (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-2xl group">
              <img
                src="/illustrations/hospital_revenue_operation.jpg"
                alt="SwiftRev Healthcare Finance Officer Operating Hospital Revenue Management System and POS"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-card/90 dark:bg-slate-900/90 backdrop-blur-md border border-border/70 text-foreground flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
                  <div>
                    <p className="text-[11px] font-heading font-bold text-foreground leading-tight">
                      Hospital Revenue &amp; POS Operation
                    </p>
                    <p className="text-[10px] text-muted-foreground font-body">
                      Live Billing Counter • Smart POS Payment • Zero Leakage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Sector Switcher Bento Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="rounded-3xl bg-card border border-border shadow-lg p-6 md:p-8"
        >
          {/* Sector Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-border">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground mr-2">
              Explore Sectors:
            </span>
            {sectors.map((s) => {
              const Icon = s.icon;
              const isSelected = activeSector.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSector(s)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all ${
                    isSelected
                      ? 'bg-pine text-white shadow-xs'
                      : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{s.name}</span>
                  {s.id === 'medical' && (
                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    }`}>
                      Live
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Sector Showcase Content */}
          <div className="grid lg:grid-cols-12 gap-8 items-center pt-6">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <StatusBadge status={activeSector.status} size="sm" />
                <span className="text-xs font-semibold text-muted-foreground">
                  {activeSector.name}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">
                {activeSector.headline}
              </h2>

              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xl">
                {activeSector.description}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-pine dark:text-teal-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{activeSector.highlight}</span>
              </div>
            </div>

            {/* Quick Context Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-muted/40 border border-border/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                  Sector Overview
                </span>
                <span className="text-xs font-semibold text-foreground">
                  SwiftRev Technology
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-card border border-border">
                  <p className="text-muted-foreground text-[11px]">Primary Focus:</p>
                  <p className="font-semibold text-foreground mt-0.5">{activeSector.headline}</p>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border">
                  <p className="text-muted-foreground text-[11px]">Current Status:</p>
                  <p className="font-semibold text-foreground mt-0.5">{activeSector.badge}</p>
                </div>
              </div>

              <Link
                to="/works"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-pine dark:text-teal-400 hover:underline pt-1"
              >
                <span>Learn more in Our Works</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
