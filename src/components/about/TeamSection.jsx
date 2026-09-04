import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram, ArrowUpRight, X, Sparkles } from 'lucide-react';

const ceoData = {
  id: 'ceo',
  name: 'Ajadi Rilwan Ayobami',
  role: 'Chief Executive Officer',
  initials: 'CEO',
  tagline: 'Strategic Vision & Multi-Sector Execution',
  image: '/images/team-ceo.jpg',
  focusAreas: ['Corporate Strategy', 'Healthcare & HRMS', 'Capital Allocation', 'Enterprise Partnerships'],
  bio: [
    "Ajadi Rilwan Ayobami is a visionary entrepreneur and enterprise strategist leading SwiftRev's mission to bridge critical operational, financial, and revenue governance gaps across Africa's high-impact sectors.",
    "With an extensive background in enterprise technology architecture and institutional partnerships, he steers corporate strategy, capital allocation, and multi-sector product roadmaps spanning Healthcare Revenue Management Systems (HRMS), smart point-of-sale hardware, and modern proptech solutions.",
  ],
  socials: {
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
};

const otherExecutives = [
  {
    id: 'coo',
    name: 'Okere Matthew Lucky',
    role: 'Chief Operating Officer',
    initials: 'COO',
    image: '/images/team-coo.jpg',
    focusAreas: ['Nationwide Deployments', 'Institutional SLAs', 'Healthcare Operations'],
    bio: [
      "Okere Matthew Lucky spearheads SwiftRev's nationwide operational deployments, regulatory compliance frameworks, and hospital stakeholder management.",
      "He possesses deep expertise in healthcare workflow optimization and institutional operations, ensuring enterprise service-level agreements (SLAs), multi-facility training, and on-the-ground support run with zero operational friction.",
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 'cto',
    name: 'Adekunle Emmanuel Ayomide',
    role: 'Chief Technology Officer',
    initials: 'CTO',
    image: '/images/team-cto.jpg',
    focusAreas: ['Distributed Architecture', 'Audit Trails & Ledger Security', 'Hardware Integration'],
    bio: [
      "Adekunle Emmanuel Ayomide directs SwiftRev's technical vision, platform security, and high-concurrency systems infrastructure.",
      "He specializes in designing fault-tolerant distributed systems, cryptographic audit trails for financial transactions, and secure hardware-to-cloud integrations that protect multi-million naira institutional revenue cycles.",
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 'lse',
    name: 'Abdulakeem Habeeb Bolaji',
    role: 'Lead Software Engineer',
    initials: 'LSE',
    image: '/Habeeb.jpeg',
    focusAreas: ['Engineering Execution', 'Scalable Platforms', 'Multi-Tenant Systems'],
    bio: [
      "Abdulakeem Habeeb is a technology-focused builder with a background spanning both Building Engineering and Computer Science. He is currently pursuing a degree in Building at Lagos State University while also studying Computer Science at the University of the People.",
      "His expertise lies at the intersection of software engineering, digital products, and the built environment, with a strong focus on turning complex real-world problems into practical technology solutions. He is particularly interested in building scalable digital platforms, intelligent systems, and technology-driven solutions that improve how people and businesses operate.",
      "At SwiftRev, he leads the technology direction, contributing to product development, technical architecture, and the transformation of ideas into working digital products.",
    ],
    socials: {
      linkedin: 'https://www.linkedin.com/in/habeeb-abdulakeem-b75253374/',
      instagram: 'https://www.instagram.com/official_bb_10/#',
    },
  },
];

export default function TeamSection() {
  const [activeExecId, setActiveExecId] = useState(null);

  const toggleExecBio = (id) => {
    setActiveExecId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 relative border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-pine/10 text-pine dark:text-teal-300 border border-pine/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Leadership &amp; Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            The Minds Behind SwiftRev
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-body max-w-2xl mx-auto">
            A seasoned team of technologists, operational leaders, and industry architects shaping enterprise systems across Africa.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. CEO SPOTLIGHT BANNER (WIDE HORIZONTAL CARD) */}
        {/* ======================================================== */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card border border-border/90 shadow-lg hover:shadow-xl hover:border-pine/40 transition-all duration-300 overflow-hidden"
          >
            <div className="grid md:grid-cols-12 items-stretch">
              
              {/* CEO Portrait Area (Left) */}
              <div className="md:col-span-5 relative min-h-[360px] md:min-h-[480px] bg-gradient-to-br from-teal-900/15 via-pine/10 to-card overflow-hidden">
                <img
                  src={ceoData.image}
                  alt={ceoData.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent md:hidden" />
                
                {/* Floating CEO Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs font-heading font-extrabold tracking-wider bg-pine text-white shadow-md">
                    {ceoData.initials}
                  </span>
                </div>

                {/* Quick Socials on Photo */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-background/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/80 shadow-xs">
                  <a
                    href={ceoData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ceoData.name}'s LinkedIn`}
                    className="text-muted-foreground hover:text-[#0A66C2] transition-colors p-1 rounded-full hover:bg-muted"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <span className="w-px h-3.5 bg-border" />
                  <a
                    href={ceoData.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ceoData.name}'s Instagram`}
                    className="text-muted-foreground hover:text-[#E4405F] transition-colors p-1 rounded-full hover:bg-muted"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* CEO Information (Right) */}
              <div className="md:col-span-7 p-7 sm:p-9 md:p-10 flex flex-col justify-between bg-card">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-pine dark:text-teal-400 bg-pine/10 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-pine/20">
                      Chief Executive Officer
                    </span>
                    <span className="text-xs text-muted-foreground font-medium hidden sm:inline">
                      • Executive Leadership
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground mb-1 tracking-tight">
                    {ceoData.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground/90 mb-6">
                    {ceoData.tagline}
                  </p>

                  {/* Bio Narrative */}
                  <div className="space-y-3 pt-4 border-t border-border/70 text-sm text-foreground/85 font-body leading-relaxed">
                    {ceoData.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Focus Areas & Connect Links */}
                <div className="pt-6 mt-6 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {ceoData.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 rounded-md bg-muted/60 text-[11px] font-medium text-muted-foreground border border-border/50"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={ceoData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={ceoData.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5 transition"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

        {/* Section Divider */}
        <div className="relative mb-14 text-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border/80"></div>
          </div>
          <div className="relative inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-background border border-border text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground shadow-xs">
            Executive Leadership &amp; Engineering Squad
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. THE 3 EXECUTIVES BELOW (PORTRAIT CARDS + LARGE BIO PANEL) */}
        {/* ======================================================== */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {otherExecutives.map((member, i) => {
              const isActive = activeExecId === member.id;

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-3xl bg-card border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? 'border-pine shadow-lg ring-2 ring-pine/30'
                      : 'border-border hover:border-pine/50 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Portrait Image Area */}
                    <div
                      onClick={() => toggleExecBio(member.id)}
                      className="relative h-72 sm:h-80 overflow-hidden cursor-pointer group bg-gradient-to-br from-teal-900/15 via-pine/10 to-card"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                          member.image === '/Habeeb.jpeg' ? 'object-[center_18%]' : 'object-top'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

                      {/* Initials Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-heading font-bold tracking-wider bg-card/90 backdrop-blur-md border border-border text-foreground shadow-xs">
                          {member.initials}
                        </span>
                      </div>

                      {/* Quick Socials on Photo */}
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 bg-background/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-border/80 shadow-xs"
                      >
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn`}
                          className="text-muted-foreground hover:text-[#0A66C2] transition-colors p-1 rounded-full hover:bg-muted"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                        <span className="w-px h-3 bg-border" />
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s Instagram`}
                          className="text-muted-foreground hover:text-[#E4405F] transition-colors p-1 rounded-full hover:bg-muted"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Bottom-left square toggle button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExecBio(member.id);
                        }}
                        className={`absolute bottom-0 left-0 w-11 h-11 flex items-center justify-center font-bold text-lg text-white transition-colors duration-200 z-20 ${
                          isActive ? 'bg-pine' : 'bg-teal-600/90 hover:bg-pine'
                        }`}
                        aria-label={isActive ? `Close ${member.name} bio` : `View ${member.name} bio`}
                      >
                        <span className="text-xl leading-none">{isActive ? '−' : '+'}</span>
                      </button>
                    </div>

                    {/* Member Name and Designation */}
                    <div
                      onClick={() => toggleExecBio(member.id)}
                      className="p-5 cursor-pointer"
                    >
                      <h3 className="font-heading font-extrabold text-lg text-foreground mb-1 leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-heading font-bold uppercase tracking-wider text-pine dark:text-teal-400">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Inline expandable bio for Mobile screens */}
                  <div className="md:hidden">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-5 border-t border-border bg-card/60 overflow-hidden"
                        >
                          <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-pine dark:text-teal-400 mb-2">
                            About {member.name}
                          </p>
                          <div className="space-y-2.5 mb-4 text-xs text-muted-foreground font-body leading-relaxed">
                            {member.bio.map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 pt-2 border-t border-border/60">
                            <a
                              href={member.socials.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:text-[#0A66C2]"
                            >
                              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                              <span>LinkedIn</span>
                            </a>
                            <a
                              href={member.socials.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:text-[#E4405F]"
                            >
                              <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                              <span>Instagram</span>
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Card Bar */}
                  <div
                    onClick={() => toggleExecBio(member.id)}
                    className="px-5 py-3 border-t border-border/60 bg-muted/20 flex items-center justify-between text-xs cursor-pointer hover:bg-muted/40 transition-colors"
                  >
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {isActive ? 'Hide Details' : 'View Full Bio'}
                    </span>
                    <span className="text-pine dark:text-teal-400 font-bold text-sm">
                      {isActive ? '−' : '+'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ======================================================== */}
          {/* Large Shared Bio Panel for Desktop (Full Width & Spacious) */}
          {/* ======================================================== */}
          <div className="hidden md:block mt-8">
            <AnimatePresence mode="wait">
              {(() => {
                const selected = otherExecutives.find((e) => e.id === activeExecId);
                if (!selected) return null;

                return (
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="rounded-3xl bg-card border-2 border-pine/40 p-8 sm:p-10 shadow-xl relative overflow-hidden"
                  >
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-pine/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                      
                      {/* Left: Bio Narrative & Identity */}
                      <div className="space-y-5 flex-1">
                        <div className="flex items-center gap-3.5">
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold tracking-wider bg-pine text-white shadow-xs">
                            {selected.initials}
                          </span>
                          <div>
                            <h4 className="font-heading font-extrabold text-2xl text-foreground tracking-tight">
                              {selected.name}
                            </h4>
                            <p className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-pine dark:text-teal-400">
                              {selected.role}
                            </p>
                          </div>
                        </div>

                        {/* Focus Areas Tags */}
                        {selected.focusAreas && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {selected.focusAreas.map((area) => (
                              <span
                                key={area}
                                className="px-3 py-1 rounded-lg bg-muted/60 text-xs font-medium text-muted-foreground border border-border/50"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Large, Spacious Multi-Paragraph Bio */}
                        <div className="pt-4 border-t border-border/80 space-y-4 text-base text-foreground/85 font-body leading-relaxed">
                          {selected.bio.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>

                      {/* Right: Actions (Socials + Close) */}
                      <div className="flex flex-col sm:items-end gap-5 shrink-0 pt-1">
                        <div className="flex items-center gap-2.5">
                          <a
                            href={selected.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-xs font-semibold text-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition shadow-xs"
                          >
                            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                            <span>LinkedIn</span>
                          </a>
                          <a
                            href={selected.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-xs font-semibold text-foreground hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5 transition shadow-xs"
                          >
                            <Instagram className="w-4 h-4 text-[#E4405F]" />
                            <span>Instagram</span>
                          </a>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveExecId(null)}
                          className="px-4 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-xs text-muted-foreground hover:text-foreground font-medium transition"
                        >
                          Close Biography ✕
                        </button>
                      </div>

                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
