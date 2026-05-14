import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, BarChart2, ShieldCheck, Search, TrendingUp, ArrowRight, Layers, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import GlassCard from '../components/shared/GlassCard';
import PulseIndicator from '../components/shared/PulseIndicator';

const features = [
  { icon: BarChart2, title: 'Revenue Collection & Management', desc: 'We collect and manage revenue on behalf of hospitals and healthcare facilities, ensuring every naira is accounted for from source to ledger.' },
  { icon: Search, title: 'Leakage Detection', desc: 'Advanced monitoring systems identify revenue leakages and financial loopholes before they erode your facility\'s income.' },
  { icon: ShieldCheck, title: 'Accountability & Controls', desc: 'Robust internal controls create a transparent audit trail, ensuring every transaction is verified and every process is accountable.' },
  { icon: TrendingUp, title: 'Cash Flow Optimisation', desc: 'Structured reporting and cycle management improve cash flow, giving healthcare providers a clear picture of their financial health at all times.' },
  { icon: Activity, title: 'Accurate Reporting', desc: 'Timely, precise financial reports that empower hospital management to make informed decisions without guesswork.' },
  { icon: Layers, title: 'End-to-End Revenue Cycle', desc: 'From billing and collections to reconciliation and reporting — we handle the full revenue cycle so clinicians can focus on patient care.' },
];

const steps = [
  { step: '01', title: 'Onboard Your Facility', desc: 'We assess your current revenue cycle, identify gaps, and set up our management systems within your facility.' },
  { step: '02', title: 'Implement Controls', desc: 'Financial monitoring, accountability frameworks, and reporting tools are deployed across all revenue touchpoints.' },
  { step: '03', title: 'Monitor & Report', desc: 'Continuous oversight with real-time dashboards and regular performance reports keep you fully informed.' },
  { step: '04', title: 'Optimise & Scale', desc: 'Insights from our data drive ongoing improvements, closing loopholes and strengthening revenue performance over time.' },
];

export default function MedicalFinance() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-obsidian">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-heading font-semibold tracking-wider uppercase text-mint mb-6">
                <PulseIndicator color="mint" size="sm" />
                Medical Finance
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-limestone leading-[0.95] mb-6" style={{ letterSpacing: '-0.04em' }}>
                Hospital Revenue,{' '}
                <span className="text-mint">Fully Managed.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-body mb-8">
                SwiftRev is a structured financial management solution that collects and manages revenue on behalf of hospitals and healthcare facilities — delivering transparency, accountability, and a stronger bottom line.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <img src="/images/medical-finance-hero.png" alt="Medical Finance" className="w-full h-[450px] object-cover rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Statement */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-12 grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: 'Full Transparency', desc: 'Every transaction is tracked, reported, and visible to hospital management in real time.' },
              { stat: 'Zero Leakages', desc: 'Systematic controls and monitoring close financial loopholes before they become losses.' },
              { stat: 'More Patient Care', desc: 'With revenue administration handled, your teams focus entirely on healthcare delivery.' },
            ].map((item, i) => (
              <motion.div key={item.stat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <h3 className="font-heading font-extrabold text-xl text-mint mb-2">{item.stat}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="What We Do"
            title="A Complete Revenue Management Solution"
            description="We take full responsibility for the financial engine of your facility — so you never lose revenue to inefficiency or oversight again."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <GlassCard key={f.title} delay={i * 0.08}>
                <div className="p-3 rounded-xl bg-mint/10 w-fit mb-5">
                  <f.icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading badge="Our Process" title="How We Work With You" description="A clear, structured engagement that gets your revenue cycle under control from day one." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6 h-full">
                  <span className="text-5xl font-heading font-extrabold text-mint/10">{s.step}</span>
                  <h4 className="font-heading font-bold text-foreground text-lg mt-2 mb-2">{s.title}</h4>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-mint/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Defines Us */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Our Identity"
            title="What Defines Us"
            description="We're a deeply mission-driven company, and these are the core ideas we return to when we make decisions."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: '01', title: 'Integrity First', desc: 'Every decision we make is grounded in honesty and transparency. We hold ourselves to the same accountability standards we bring to our clients.' },
              { number: '02', title: 'Mission Over Margin', desc: 'We exist to strengthen healthcare infrastructure in Nigeria. Revenue is a byproduct of impact, never the other way around.' },
              { number: '03', title: 'Built for the Long Term', desc: 'We build deep partnerships — not transactional engagements. Our goal is lasting financial health for every facility we serve.' },
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card rounded-2xl p-8"
              >
                <span className="text-5xl font-heading font-extrabold text-mint/10">{item.number}</span>
                <h3 className="font-heading font-bold text-xl text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6" style={{ letterSpacing: '-0.04em' }}>
              Your Facility Deserves Better Financial Management
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-body">
              Let SwiftRev handle your revenue cycle — from collection to reporting — while your team focuses on delivering exceptional patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all text-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/hospital-login"
                className="group inline-flex items-center gap-3 px-10 py-4 border border-mint/40 text-mint font-heading font-bold rounded-full hover:bg-mint/10 transition-all text-lg"
              >
                Hospital Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
