import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, ArrowRight, Code2, Activity, Cpu, ShieldCheck, Users2, GraduationCap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../shared/GlassCard';
import SectionHeading from '../shared/SectionHeading';
import PulseIndicator from '../shared/PulseIndicator';

const liveServices = [
  {
    icon: Heart,
    title: 'Medical Finance',
    description: 'Revenue collection and management for hospitals — from billing and leakage detection to full revenue cycle management.',
    link: '/medical-finance',
    color: 'mint',
  },
  {
    icon: Home,
    title: 'Housing Solutions',
    description: 'Connect directly with landlords. Make payments seamlessly without agents. Full transparency and control over your housing.',
    link: '/housing-solutions',
    color: 'copper',
  },
  {
    icon: Users2,
    title: 'Outsourcing & Managed Services',
    description: 'IT outsourcing, managed support, CRM systems, and back-office support tailored to your operational needs.',
    link: '/contact',
    color: 'mint',
  },
  {
    icon: Activity,
    title: 'HealthTech Solutions',
    description: 'Hospital Management Systems, Electronic Medical Records (EMR/EHR), medical billing software, and Insurance/HMO integration.',
    link: '/healthtech',
    color: 'copper',
  },
];

const comingSoon = [
  {
    icon: Code2,
    title: 'Technology & IT Services',
    description: 'Custom software development, SaaS platforms, cloud solutions, IT infrastructure management, and system integration.',
  },
  {
    icon: Cpu,
    title: 'Digital Transformation',
    description: 'Business process automation, digital strategy, IT consulting, workflow optimisation, and project management.',
  },
  {
    icon: ShieldCheck,
    title: 'Data, Security & Compliance',
    description: 'Data analytics, cybersecurity services, NDPA compliance, and IT audits to keep your organisation safe and compliant.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Capacity Development',
    description: 'Technology training, RCM training, and digital skills programmes to upskill your teams for the future.',
  },
  {
    icon: Globe,
    title: 'General Technology Services',
    description: 'E-commerce platforms, digital marketing, website development, and business intelligence tools.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="An Integrated Technology Ecosystem."
          description="SwiftRev delivers across financial services, healthcare innovation, and enterprise digital transformation."
        />

        {/* Live Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {liveServices.map((service, i) => (
            <GlassCard key={service.title} delay={i * 0.1} className="group hover:border-border transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl ${service.color === 'mint' ? 'bg-mint/10' : 'bg-copper/10'}`}>
                  <service.icon className={`w-6 h-6 ${service.color === 'mint' ? 'text-mint' : 'text-copper'}`} />
                </div>
                <PulseIndicator color={service.color} size="sm" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">{service.description}</p>
              <Link
                to={service.link}
                className={`inline-flex items-center gap-2 text-sm font-heading font-semibold ${service.color === 'mint' ? 'text-mint' : 'text-copper'} group-hover:gap-3 transition-all`}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-heading font-bold tracking-[0.2em] uppercase text-muted-foreground px-3">Coming Soon</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {comingSoon.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card rounded-2xl p-6 opacity-70 relative overflow-hidden"
            >
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-heading font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-mint/10 text-mint border border-mint/20">
                  Soon
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-secondary w-fit mb-4">
                <service.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed font-body">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}