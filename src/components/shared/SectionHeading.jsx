import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ badge, title, description, align = 'center', badgeColor = 'mint' }) {
  const colorMap = {
    mint: 'text-mint bg-mint/10 border-mint/20',
    copper: 'text-copper bg-copper/10 border-copper/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-16`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-wider uppercase border ${colorMap[badgeColor]} mb-6`}>
          {badge}
        </span>
      )}
      <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight mb-4" style={{ letterSpacing: '-0.04em' }}>
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}