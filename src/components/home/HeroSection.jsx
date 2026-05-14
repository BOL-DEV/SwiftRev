import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Home } from 'lucide-react';

export default function HeroSection() {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-obsidian">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(178,255,217,0.3) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(178,255,217,0.3) 0.5px, transparent 0.5px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-copper/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[80vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-heading font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="text-mint">Now Live</span>
              <span className="text-muted-foreground">• Medical Finance, Housing & More</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-limestone leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              One Platform.{' '}
              <span className="text-mint">Every</span>
              <br />
              <span className="text-copper">Solution.</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg font-body">
              SwiftRev helps hospitals get paid faster, helps people find homes without agents, and provides the tech tools healthcare facilities need to run smoothly. One company. Everything you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/medical-finance"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all"
              >
                <Heart className="w-5 h-5" />
                Medical Finance
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/housing-solutions"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-copper text-white font-heading font-bold rounded-full hover:opacity-90 transition-all"
              >
                <Home className="w-5 h-5" />
                Housing Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right - Split images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4 h-[560px]">
              <Link
                to="/medical-finance"
                onMouseEnter={() => setHoveredSide('medical')}
                onMouseLeave={() => setHoveredSide(null)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-700 ${hoveredSide === 'housing' ? 'scale-95 opacity-60' : hoveredSide === 'medical' ? 'scale-105' : ''}`}
              >
                <img src="/images/medical-finance-hero.png" alt="Medical Finance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-mint text-xs font-heading font-bold tracking-wider uppercase">Medical Finance</span>
                  <p className="text-limestone text-sm mt-1 font-body">Wellness-first funding</p>
                </div>
              </Link>

              <Link
                to="/housing-solutions"
                onMouseEnter={() => setHoveredSide('housing')}
                onMouseLeave={() => setHoveredSide(null)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-700 ${hoveredSide === 'medical' ? 'scale-95 opacity-60' : hoveredSide === 'housing' ? 'scale-105' : ''}`}
              >
                <img src="/images/housing-hero.png" alt="Housing Solutions" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-copper text-xs font-heading font-bold tracking-wider uppercase">Housing</span>
                  <p className="text-limestone text-sm mt-1 font-body">Agent-free living</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
