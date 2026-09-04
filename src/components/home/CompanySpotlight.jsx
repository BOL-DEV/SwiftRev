import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, ArrowRight, Target, Eye, Sparkles } from 'lucide-react';

export default function CompanySpotlight() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-card border border-border p-8 md:p-14 shadow-sm overflow-hidden relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Story (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-pine/10 text-pine dark:text-teal-300 border border-pine/20">
                About SwiftRev Technology Limited
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight leading-snug">
                Engineering Custom Software for Complex Industry Bottlenecks
              </h2>

              <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                SwiftRev is an enterprise technology innovation firm based in Nigeria. We build proprietary software and hardware solutions tailored to sectors with deep operational friction.
              </p>

              <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                Rather than building generic tools, we immerse our engineering and operations teams into target industries — starting with our operational flagship <strong>HRMS</strong> in healthcare facilities, and extending into <strong>real estate technology</strong> and <strong>smart POS devices</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pine text-white text-xs font-heading font-bold hover:bg-pine-hover transition shadow-xs"
                >
                  <span>Meet Our Leadership Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/works"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-xs font-heading font-semibold hover:bg-muted transition"
                >
                  <span>View All Solutions</span>
                </Link>
              </div>
            </div>

            {/* Right Company Attributes (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-muted/40 border border-border/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-foreground">Sector-Specific Engineering</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Custom domain architectures built to address specific hospital, commercial, and property workflows.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-muted/40 border border-border/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-foreground">Operational Transparency</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Closed-loop internal controls that eliminate manual loopholes, ghost entries, and financial leakages.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-muted/40 border border-border/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-foreground">Executive &amp; Field Operators</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Led by experienced Nigerian technologists, product leaders, and healthcare operations specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
