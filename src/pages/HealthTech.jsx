import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Monitor, FileText, CreditCard, Shield, Wifi, BarChart2 } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import GlassCard from '../components/shared/GlassCard';
import PulseIndicator from '../components/shared/PulseIndicator';

const features = [
  {
    icon: Monitor,
    title: 'Hospital Management Systems',
    description: 'End-to-end HMS covering patient registration, appointments, ward management, and discharge — all in one platform.',
  },
  {
    icon: FileText,
    title: 'Electronic Medical Records (EMR/EHR)',
    description: 'Secure, interoperable digital records that give clinicians instant access to patient history, lab results, and treatment plans.',
  },
  {
    icon: CreditCard,
    title: 'Medical Billing Software',
    description: 'Automate billing, reduce errors, and accelerate reimbursements with smart coding and claim management tools.',
  },
  {
    icon: Shield,
    title: 'Insurance & HMO Integration',
    description: 'Seamless connectivity with leading insurance providers and HMOs for real-time eligibility checks and claims processing.',
  },
  {
    icon: Wifi,
    title: 'Telemedicine & Remote Care',
    description: 'Enable virtual consultations and remote patient monitoring, expanding your reach beyond physical walls.',
  },
  {
    icon: BarChart2,
    title: 'Clinical Analytics & Reporting',
    description: 'Turn patient and operational data into actionable insights — improving outcomes and driving smarter decisions.',
  },
];

export default function HealthTech() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/4 rounded-full blur-[180px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-heading font-semibold tracking-wider uppercase text-mint">
                  🏥 HealthTech Solutions
                </span>
                <PulseIndicator color="mint" size="sm" />
              </div>
              <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-limestone leading-[0.95] mb-6" style={{ letterSpacing: '-0.04em' }}>
                Technology That{' '}
                <span className="text-mint">Heals</span>{' '}
                Hospitals.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl font-body mb-10">
                SwiftRev HealthTech delivers intelligent hospital management, digital records, billing automation, and insurance integration — giving healthcare facilities the tools to focus on what matters most: patient care.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all text-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80"
              alt="HealthTech Solutions — Hospital digital management"
              className="w-full rounded-3xl shadow-2xl object-cover max-h-[480px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="What We Offer"
            title="A Full Suite of HealthTech Tools."
            description="From managing patient records to integrating with insurers — we cover every digital need of a modern healthcare facility."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <GlassCard key={f.title} delay={i * 0.1} className="hover:border-mint/20 transition-colors">
                <div className="p-3 rounded-xl bg-mint/10 w-fit mb-5">
                  <f.icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{f.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="glass-card rounded-3xl p-12 md:p-16">
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4" style={{ letterSpacing: '-0.04em' }}>
                Ready to Digitise Your Facility?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 font-body max-w-xl mx-auto">
                Let's build the digital infrastructure your hospital needs to thrive in a modern healthcare environment.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all text-lg"
              >
                Talk to Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}