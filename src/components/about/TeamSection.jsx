import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

const team = [
  {
    name: 'Ajadi Rilwan Ayobami',
    role: 'Chief Executive Officer',
    initials: 'CEO',
    image: '/images/team-ceo.jpg',
    accent: 'mint',
  },
  {
    name: 'Okere Matthew Lucky',
    role: 'Chief Operating Officer',
    initials: 'COO',
    image: '/images/team-coo.jpg',
    accent: 'copper',
  },
  {
    name: 'Adekunle Emmanuel Ayomide',
    role: 'Chief Technology Officer',
    initials: 'CTO',
    image: '/images/team-cto.jpg',
    accent: 'mint',
  },
  {
    name: 'Abdulazeez Muhammad',
    role: 'Senior Software Engineer',
    initials: 'SSE',
    image: '/images/team-sse.jpg',
    accent: 'copper',
  },
  {
    name: 'Abdulakeem Habeeb Bolaji',
    role: 'Lead Software Engineer',
    initials: 'LSE',
    image: '/Habeeb.jpeg',
    accent: 'mint',
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(178,255,217,0.4) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(178,255,217,0.4) 0.5px, transparent 0.5px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Team"
          title="The Minds Behind SwiftRev"
          description="A team of visionaries, operators, and engineers committed to transforming financial access for health and housing across Africa."
        />

        {/* CEO — Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-10"
        >
          <div className="relative group max-w-xs w-full">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-b from-mint/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <div className="relative glass-card rounded-3xl overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={team[0].image}
                  alt={team[0].name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-heading font-bold tracking-wider bg-mint/20 text-mint border border-mint/30">
                    {team[0].initials}
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">{team[0].name}</h3>
                <p className="text-mint text-sm font-body font-medium">{team[0].role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of team — 2 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.slice(1).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-b ${member.accent === 'mint' ? 'from-mint/20' : 'from-copper/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              <div className="relative glass-card rounded-2xl overflow-hidden h-full">
                <div className={`relative overflow-hidden ${member.image === '/Habeeb.jpeg' ? 'h-72' : 'h-64'}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                      member.image === '/Habeeb.jpeg' ? 'object-[center_18%]' : 'object-top'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-heading font-bold tracking-wider ${
                      member.accent === 'mint'
                        ? 'bg-mint/20 text-mint border border-mint/30'
                        : 'bg-copper/20 text-copper border border-copper/30'
                    }`}>
                      {member.initials}
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading font-bold text-base text-foreground mb-1 leading-tight">{member.name}</h3>
                  <p className={`text-xs font-body font-medium ${member.accent === 'mint' ? 'text-mint' : 'text-copper'}`}>
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
