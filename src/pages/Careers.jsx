import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, Users, Wifi, Zap, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

const perks = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    desc: "We take a personal interest in your career goals. At SwiftRev, growth isn't a perk — it's a promise. We sponsor relevant courses, workshops, and certifications to help you reach the next level.",
  },
  {
    icon: Heart,
    title: 'Great Culture',
    desc: 'Our culture is built on freedom and responsibility. We trust our people to work how and where they work best — while owning their impact. No micromanagement, just results and respect.',
  },
  {
    icon: Zap,
    title: 'Healthcare',
    desc: 'Your wellbeing matters. We offer comprehensive health and welfare programmes including medical, dental, disability, and life insurance — because a healthy team is a high-performing team.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    desc: "Great things rarely happen alone. We're deeply collaborative — a team that challenges, supports, and celebrates each other. Every voice matters, and every win is shared.",
  },
  {
    icon: Wifi,
    title: 'Remote Option',
    desc: "Flexibility is part of our DNA. Partial remote work is built into how we operate — because we believe the best work happens when people have the freedom to own their environment.",
  },
  {
    icon: TrendingUp,
    title: 'Real Impact',
    desc: "You won't just be filling a seat. At SwiftRev, every role directly contributes to transforming healthcare revenue management across Nigeria. Your work changes things.",
  },
];

export default function Careers() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-heading font-semibold tracking-wider uppercase text-mint mb-6">
                🎉 We're Hiring
              </span>
              <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-limestone leading-[0.95] mb-6" style={{ letterSpacing: '-0.04em' }}>
                Work Can,{' '}
                <span className="text-mint">&amp; Should,</span>
                <br />Be Amazing.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-body mb-10">
                Join us on our mission to transform healthcare revenue management across Africa. We're building something that matters — and we want you on the team.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all text-lg"
              >
                Join Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="/images/careers-team-main.jpg"
                alt="SwiftRev Team"
                className="w-full max-w-md rounded-3xl shadow-2xl object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-10 md:p-16 text-center"
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-mint mb-5" style={{ letterSpacing: '-0.03em' }}>
              The Experience is Everything.
            </h2>
            <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
              Everyone believes payment is a technological problem — but we believe otherwise. We believe it is a <span className="text-foreground font-semibold">social problem</span>, and technology is simply the tool we use to solve it. That perspective shapes every decision we make and every product we build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Life at SwiftRev"
            title="Why Work With Us?"
            description="We've built a place where ambitious people do their best work — and genuinely enjoy doing it."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:border-mint/20 transition-colors"
              >
                <div className="p-3 rounded-xl bg-mint/10 w-fit mb-5">
                  <perk.icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{perk.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-heading font-semibold tracking-wider uppercase text-mint mb-6">
                🚀 Our Team
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-limestone mb-5" style={{ letterSpacing: '-0.03em' }}>
                Take a look at how great it is working with us.
              </h2>
              <p className="text-muted-foreground text-lg font-body leading-relaxed">
                Join our team of rockstars and work on impactful projects. We're not just building products — we're building a culture where talented people thrive and make a real difference across Africa.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/careers-team-grid-1.jpg"
                alt="SwiftRev Team"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[3/4]"
              />
              <div className="flex flex-col gap-4">
                <img
                  src="/images/careers-workspace.jpg"
                  alt="SwiftRev Workspace"
                  className="w-full rounded-2xl shadow-xl object-cover flex-1"
                  style={{ height: '48%' }}
                />
                <img
                  src="/images/careers-developer.jpg"
                  alt="SwiftRev Developer"
                  className="w-full rounded-2xl shadow-xl object-cover flex-1"
                  style={{ height: '48%' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-12 md:p-16"
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4" style={{ letterSpacing: '-0.04em' }}>
              Ready to Do the Best Work of Your Life?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-body max-w-xl mx-auto">
              We're always looking for driven, curious people who want to build something that changes healthcare finance in Africa. Let's talk.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all text-lg"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
