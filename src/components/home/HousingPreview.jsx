import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Ban, MessageSquare, CreditCard } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const features = [
  { icon: Ban, label: 'Zero Agent Fees', desc: 'No middlemen taking a cut of your hard-earned money.' },
  { icon: MessageSquare, label: 'Direct Communication', desc: 'Chat directly with your landlord. No gatekeepers.' },
  { icon: CreditCard, label: 'Seamless Payments', desc: 'Pay rent instantly from your SwiftRev wallet.' },
];

export default function HousingPreview() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(184,115,51,0.5) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(184,115,51,0.5) 0.5px, transparent 0.5px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Housing Solutions"
          badgeColor="copper"
          title="Your Home. Your Terms."
          description="Connect directly with landlords. No agents. No hidden fees. Just transparent, direct housing finance."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/housing-preview.png"
                alt="Housing Solutions"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-4 p-5 glass-card rounded-xl"
              >
                <div className="p-2.5 rounded-lg bg-copper/10 shrink-0">
                  <feature.icon className="w-5 h-5 text-copper" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">{feature.label}</h4>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}

            <Link
              to="/housing-solutions"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-copper text-white font-heading font-bold rounded-full hover:opacity-90 transition-all mt-4"
            >
              Explore Housing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
