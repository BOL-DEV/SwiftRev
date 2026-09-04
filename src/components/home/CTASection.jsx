import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 md:p-16 bg-pine text-white shadow-xl relative overflow-hidden text-center">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto relative z-10 space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-heading font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Proven Financial Governance
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-[1.08]">
              Ready to Strengthen Your Facility's Revenue?
            </h2>

            <p className="text-base md:text-lg text-white/80 font-body max-w-xl mx-auto leading-relaxed">
              Connect directly with our leadership and operations team to discuss how SwiftRev can close revenue loopholes in your institution.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-pine font-heading font-bold text-xs hover:bg-slate-100 shadow-sm transition-all duration-200"
              >
                <span>Get in Touch with Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-heading font-semibold text-xs transition-all"
              >
                <span>Explore All Works</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
