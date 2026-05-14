import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import GlassCard from '../components/shared/GlassCard';
import StatCounter from '../components/shared/StatCounter';
import TeamSection from '../components/about/TeamSection';

const values = [
  { icon: Target, title: 'Precision', desc: 'Every transaction, every interface, every interaction is designed with surgical precision. We leave nothing to chance.' },
  { icon: Eye, title: 'Transparency', desc: 'No hidden fees. No surprise charges. No opaque terms. We believe radical transparency builds unshakable trust.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We push the boundaries of what fintech can do — merging medical funding with housing in ways never done before.' },
  { icon: Users, title: 'Empowerment', desc: 'We put control back in the hands of the people — patients managing their health finance, tenants choosing their homes directly.' },
];

const stats = [
  { value: 15000, suffix: '+', label: 'Active Users' },
  { value: 500, suffix: '+', label: 'Properties Listed' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 24, suffix: '/7', label: 'Platform Uptime' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-obsidian">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mint/3 rounded-full blur-[200px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-heading font-semibold tracking-wider uppercase text-mint mb-8">
              About SwiftRev
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-limestone leading-[0.95] mb-6" style={{ letterSpacing: '-0.04em' }}>
              The Bridge Between{' '}
              <span className="text-mint">Health</span> &{' '}
              <span className="text-copper">Home</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-body">
              SwiftRev and Technology Limited is a pioneering fintech platform that merges medical financing with agent-free housing solutions, creating an ecosystem where your health and shelter are never compromised.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src="/swiftRev.png" alt="SwiftRev logo" className="w-full h-96 object-contain rounded-3xl bg-obsidian p-4 md:p-6" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-wider uppercase text-mint bg-mint/10 border border-mint/20 mb-6">
                Our Mission
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6" style={{ letterSpacing: '-0.04em' }}>
                Financial Technology for Human Necessities
              </h2>
              <p className="text-muted-foreground text-base font-body leading-relaxed mb-4">
                We founded SwiftRev with a singular belief: the two most fundamental human needs — health and shelter — should never be gatekept by inefficient middlemen or opaque financial systems.
              </p>
              <p className="text-muted-foreground text-base font-body leading-relaxed">
                Our platform brings precision technology to medical financing and housing payments, enabling direct relationships between patients and healthcare providers, and between tenants and landlords.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-10 md:p-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats.map((s, i) => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading badge="Our Values" title="What Drives Us" description="The principles that guide every decision, every feature, every interaction on SwiftRev." />
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <GlassCard key={v.title} delay={i * 0.1}>
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-mint/10 shrink-0">
                    <v.icon className="w-6 h-6 text-mint" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6" style={{ letterSpacing: '-0.04em' }}>
              Ready to Experience the Difference?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-body">
              Join the SwiftRev ecosystem and take control of your health and housing finance.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all text-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
