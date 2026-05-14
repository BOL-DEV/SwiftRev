import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Ban, MessageSquare, CreditCard, MapPin, Eye, Lock, ArrowRight, Building, KeyRound } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import GlassCard from '../components/shared/GlassCard';
import PulseIndicator from '../components/shared/PulseIndicator';
import FeaturedListings from '../components/housing/FeaturedListings';

const features = [
  { icon: Ban, title: 'Zero Agent Fees', desc: 'Eliminate middlemen completely. Every naira goes where it should — to your landlord, not an agent.' },
  { icon: MessageSquare, title: 'Direct Landlord Chat', desc: 'Communicate directly with property owners. Ask questions, negotiate terms, and build real relationships.' },
  { icon: CreditCard, title: 'Seamless Rent Payments', desc: 'Pay rent, deposits, and utility bills instantly from the SwiftRev platform. Full receipt and history.' },
  { icon: MapPin, title: 'Property Discovery', desc: 'Browse verified properties with transparent pricing. No hidden fees, no surprise agent charges.' },
  { icon: Eye, title: 'Full Transparency', desc: 'See every charge, every term, every detail. We believe in absolute clarity in housing transactions.' },
  { icon: Lock, title: 'Secure Agreements', desc: 'Digital lease agreements with blockchain verification. Your tenancy, fully protected and documented.' },
];

const benefits = [
  'Save up to 30% on housing costs by eliminating agent fees',
  'Direct negotiations mean better terms for both parties',
  'Instant digital receipts for every payment',
  'Real-time property availability updates',
  'Verified landlord profiles with ratings',
  'Dispute resolution built into the platform',
];

export default function HousingSolutions() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-obsidian">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-copper/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-heading font-semibold tracking-wider uppercase text-copper mb-6">
                <PulseIndicator color="copper" size="sm" />
                Housing Solutions
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-limestone leading-[0.95] mb-6" style={{ letterSpacing: '-0.04em' }}>
                Your Home.{' '}
                <span className="text-copper">No Agents.</span>{' '}
                Your Terms.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-body mb-8">
                SwiftRev's Housing Portal connects tenants directly to landlords. Make payments, communicate, and manage your tenancy — all without a single agent involved.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-copper text-white font-heading font-bold rounded-full hover:opacity-90 transition-all"
              >
                Find Your Home
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <img src="/images/housing-hero.png" alt="Housing Solutions" className="w-full h-[450px] object-cover rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* No Agent Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12 border-copper/20 flex flex-col md:flex-row items-center gap-6 md:gap-12"
          >
            <div className="p-4 rounded-2xl bg-copper/10 shrink-0">
              <Ban className="w-10 h-10 text-copper" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2" style={{ letterSpacing: '-0.04em' }}>
                Agent-Free Housing is Here
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                We believe tenants and landlords should communicate and transact directly. No commission-hungry middlemen. No inflated prices. Just transparent, honest housing.
              </p>
            </div>
            <div className="shrink-0">
              <div className="text-center">
                <span className="font-heading font-extrabold text-4xl text-copper">₦0</span>
                <p className="text-muted-foreground text-sm font-body mt-1">Agent Fees</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FeaturedListings />

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Features"
            badgeColor="copper"
            title="Everything You Need, Nothing You Don't"
            description="Our housing platform strips away the unnecessary complexity of traditional property transactions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <GlassCard key={f.title} delay={i * 0.08}>
                <div className="p-3 rounded-xl bg-copper/10 w-fit mb-5">
                  <f.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src="/images/housing-direct-connections.png" alt="Direct connections" className="w-full h-96 object-cover rounded-3xl" />
            </motion.div>

            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-wider uppercase text-copper bg-copper/10 border border-copper/20 mb-6">
                Why SwiftRev Housing
              </span>
              <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-8" style={{ letterSpacing: '-0.04em' }}>
                Direct Benefits, Real Savings
              </h3>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-copper/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-copper" />
                    </div>
                    <p className="text-foreground text-sm font-body leading-relaxed">{b}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6" style={{ letterSpacing: '-0.04em' }}>
              Housing Should Be Simple
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-body">
              Start your agent-free housing journey with SwiftRev today.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-copper text-white font-heading font-bold rounded-full hover:opacity-90 transition-all text-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
