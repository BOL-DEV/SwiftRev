import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SwiftRevLogo from '../components/shared/SwiftRevLogo';
import StatusBadge from '../components/shared/StatusBadge';
import TeamSection from '../components/about/TeamSection';

const values = [
  { icon: Target, title: 'Precision', desc: 'Every transaction, every interface, and every ledger entry is calculated with zero room for error.' },
  { icon: Eye, title: 'Radical Transparency', desc: 'No hidden fees or opaque reports. Hospital administrators and stakeholders see real-time performance.' },
  { icon: Lightbulb, title: 'Applied Innovation', desc: 'We solve fundamental human necessities — starting with healthcare revenue and expanding to retail POS and housing.' },
  { icon: Users, title: 'Accountability', desc: 'We place robust internal controls that empower hospital staff while protecting institutional revenue.' },
];

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-pine/10 text-pine dark:text-teal-300 border border-pine/20 mb-6">
              About SwiftRev
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-[1.05]">
              Building High-Trust Solutions for{' '}
              <span className="text-pine dark:text-teal-400">Essential Sectors</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              <strong>SwiftRev And Technology Limited</strong> is an enterprise technology provider focused on closing inefficiencies in healthcare operations, financial payments, and real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Mission */}
      <section className="py-16 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-pine dark:text-teal-400">
                Our Foundation
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-foreground">
                Solving the Revenue Governance Crisis in African Healthcare
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                We founded SwiftRev after witnessing the immense financial strain faced by hospitals due to revenue leaks, manual receipt handling, and uncoordinated billing desks.
              </p>
              <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                By building <strong>HRMS (Health Revenue Management System)</strong> as our first fully deployed operational solution, we proved that transparent technology can immediately restore financial health to hospitals so clinicians can focus on saving lives.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <StatusBadge status="live" size="sm" />
                <span className="text-xs text-muted-foreground">HRMS currently active across partner facilities</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-background border border-border shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-lg text-foreground">Corporate Scope</h3>
              <div className="space-y-3 text-xs text-muted-foreground">
                <div className="p-3.5 rounded-xl bg-card border border-border flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-pine dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Medical Finance &amp; HRMS</p>
                    <p className="mt-0.5">Flagship live operating solution managing multi-million naira healthcare revenue cycles.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-card border border-border flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Smart POS &amp; Fintech Infrastructure</p>
                    <p className="mt-0.5">In development: dedicated hospital payment terminals and multi-channel reconciliation.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-card border border-border flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Real Estate &amp; Housing Solutions</p>
                    <p className="mt-0.5">In pipeline: direct tenant-to-landlord rent escrow and agent-free agreements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Executives Team Section */}
      <TeamSection />

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-pine dark:text-teal-400">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-foreground mt-2">
            Values That Drive Our Execution
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center shrink-0">
                <v.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground">{v.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed mt-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">
          Partner with SwiftRev And Technology Limited
        </h2>
        <p className="text-sm text-muted-foreground mt-2 font-body">
          Explore our solutions or connect directly with our leadership team.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-7 py-3 rounded-full bg-pine text-white text-xs font-heading font-bold hover:bg-pine-hover transition"
          >
            Contact Our Executive Team
          </Link>
          <Link
            to="/works"
            className="px-6 py-3 rounded-full border border-border text-foreground text-xs font-heading font-semibold hover:bg-muted transition"
          >
            Explore Our Works
          </Link>
        </div>
      </section>
    </div>
  );
}
