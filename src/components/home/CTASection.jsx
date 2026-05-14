import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="/images/cta-mission.png"
              alt="Finance background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
          </div>

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 text-center">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-6" style={{ letterSpacing: '-0.04em' }}>
              Ready to Take Control?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 font-body leading-relaxed">
              Join thousands who have already simplified their medical financing and housing payments with SwiftRev.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-mint text-background font-heading font-bold rounded-full hover:opacity-90 transition-all text-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 glass-card text-foreground font-heading font-semibold rounded-full hover:bg-white/10 transition-all text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
