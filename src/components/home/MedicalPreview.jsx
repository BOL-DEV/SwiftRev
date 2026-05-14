import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Search, ShieldCheck } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const features = [
  { icon: BarChart2, label: 'Revenue Management', desc: 'We collect and manage hospital revenue with full transparency and accountability.' },
  { icon: Search, label: 'Leakage Prevention', desc: 'Monitoring systems that identify and eliminate financial loopholes in your facility.' },
  { icon: ShieldCheck, label: 'Accurate Reporting', desc: 'Timely financial reports so management can make informed decisions with confidence.' },
];

export default function MedicalPreview() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Medical Finance"
          badgeColor="mint"
          title="Hospital Revenue, Fully Managed."
          description="A structured financial management solution that collects, monitors, and reports hospital revenue — eliminating leakages and ensuring every facility operates at peak financial efficiency."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-4 p-5 glass-card rounded-xl"
              >
                <div className="p-2.5 rounded-lg bg-mint/10 shrink-0">
                  <feature.icon className="w-5 h-5 text-mint" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">{feature.label}</h4>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}

            <Link
              to="/medical-finance"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all mt-4"
            >
              Explore Medical Finance
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src="/images/medical-preview.png"
                alt="Medical Finance"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
