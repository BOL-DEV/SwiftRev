import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, Users, Wifi, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import StatusBadge from '../components/shared/StatusBadge';

const perks = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    desc: "At SwiftRev And Technology Limited, personal mastery is a core commitment. We sponsor certifications and hands-on operational leadership opportunities.",
  },
  {
    icon: Heart,
    title: 'High-Ownership Culture',
    desc: 'Our teams have high autonomy and clear responsibility. We measure real operational outcomes, not hours at a desk.',
  },
  {
    icon: Zap,
    title: 'Healthcare & Wellbeing',
    desc: 'Comprehensive welfare programs for you and your family. A healthy, protected team builds resilient infrastructure.',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    desc: 'Work alongside experienced engineers, healthcare operations specialists, and finance veterans across Nigeria.',
  },
  {
    icon: Wifi,
    title: 'Hybrid & Remote Flexibility',
    desc: 'Flexible working arrangements that balance field execution in hospitals with deep-work focus.',
  },
  {
    icon: TrendingUp,
    title: 'Tangible African Impact',
    desc: 'Your code and field operations directly eliminate millions of naira in healthcare revenue leaks, safeguarding hospital viability.',
  },
];

export default function Careers() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine/10 text-pine dark:text-teal-300 border border-pine/20 text-xs font-heading font-semibold uppercase tracking-wider">
              🎉 We're Hiring
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-[1.05]">
              Build Infrastructure That{' '}
              <span className="text-pine dark:text-teal-400">Truly Matters.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-lg">
              Join SwiftRev And Technology Limited in solving foundational problems across healthcare revenue, smart POS fintech, and real estate.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-pine text-white font-heading font-bold text-sm rounded-full hover:bg-pine-hover shadow-xs transition"
              >
                <span>View Open Roles &amp; Apply</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-card border border-border shadow-sm space-y-4"
          >
            <h3 className="font-heading font-bold text-xl text-foreground">Why Engineers &amp; Operators Join Us</h3>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              We aren't building trivial consumer toys. Our flagship HRMS platform sits directly between hospital cashiers, patients, and banking ledgers — guaranteeing that healthcare institutions remain solvent and operational.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <CheckCircle2 className="w-4 h-4 text-pine dark:text-teal-400" />
                <span>Live deployment in healthcare institutions</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <CheckCircle2 className="w-4 h-4 text-pine dark:text-teal-400" />
                <span>Modern React, Vite, Node, and embedded Linux/Android POS stacks</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <CheckCircle2 className="w-4 h-4 text-pine dark:text-teal-400" />
                <span>Competitive compensation with performance bonuses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-20 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-pine dark:text-teal-400">
              Perks &amp; Culture
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-foreground mt-2">
              Life at SwiftRev And Technology Limited
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl bg-background border border-border space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{p.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <div className="rounded-3xl p-10 bg-pine text-white shadow-xl">
          <h2 className="text-3xl font-heading font-extrabold">Ready to Join Our Mission?</h2>
          <p className="mt-3 text-sm text-white/80 max-w-md mx-auto font-body">
            Reach out directly with your portfolio or CV. We are always seeking talented minds across engineering, sales, and field operations.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block px-8 py-3.5 rounded-full bg-white text-pine font-heading font-bold text-xs hover:bg-slate-100 transition shadow"
          >
            Contact Talent Team
          </Link>
        </div>
      </section>
    </div>
  );
}
