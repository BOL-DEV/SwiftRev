import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Square, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const listings = [
  {
    id: 1,
    title: 'Modern Studio Apartment',
    location: 'Lekki Phase 1, Lagos',
    price: '₦450,000',
    period: '/year',
    beds: 1,
    baths: 1,
    sqm: 42,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
    tag: 'Studio',
  },
  {
    id: 2,
    title: '2-Bedroom Flat',
    location: 'Ikeja GRA, Lagos',
    price: '₦850,000',
    period: '/year',
    beds: 2,
    baths: 2,
    sqm: 78,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    tag: 'Apartment',
  },
  {
    id: 3,
    title: 'Executive 3-Bedroom Duplex',
    location: 'Banana Island, Lagos',
    price: '₦3,200,000',
    period: '/year',
    beds: 3,
    baths: 3,
    sqm: 180,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    tag: 'Duplex',
  },
  {
    id: 4,
    title: 'Cozy 1-Bedroom Flat',
    location: 'Yaba, Lagos',
    price: '₦380,000',
    period: '/year',
    beds: 1,
    baths: 1,
    sqm: 55,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
    tag: 'Apartment',
  },
  {
    id: 5,
    title: '4-Bedroom Terrace House',
    location: 'Victoria Island, Lagos',
    price: '₦5,500,000',
    period: '/year',
    beds: 4,
    baths: 4,
    sqm: 240,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    tag: 'Terrace',
  },
  {
    id: 6,
    title: 'Mini Flat — Self Contain',
    location: 'Surulere, Lagos',
    price: '₦220,000',
    period: '/year',
    beds: 1,
    baths: 1,
    sqm: 30,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    tag: 'Mini Flat',
  },
];

export default function FeaturedListings() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-wider uppercase text-copper bg-copper/10 border border-copper/20 mb-4">
              Featured Listings
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground leading-tight" style={{ letterSpacing: '-0.04em' }}>
              Verified. Agent-Free. Yours.
            </h2>
          </motion.div>

          {/* Scroll Controls */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-copper/40 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-copper/40 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {listings.map((listing, i) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="shrink-0 w-[300px] md:w-[320px] snap-start"
            >
              <div className="glass-card rounded-2xl overflow-hidden group hover:border-copper/30 transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />

                  {/* Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-background/60 backdrop-blur-sm text-foreground border border-border/40">
                    {listing.tag}
                  </span>

                  {/* No-Agent Badge */}
                  <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-heading font-bold bg-copper/90 text-white">
                    <ShieldCheck className="w-3 h-3" />
                    No-Agent Verified
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">{listing.title}</h3>

                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-body mb-4">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{listing.location}</span>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 mb-5 text-xs text-muted-foreground font-body">
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-3.5 h-3.5" />
                      {listing.beds} Bed{listing.beds > 1 ? 's' : ''}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5" />
                      {listing.baths} Bath{listing.baths > 1 ? 's' : ''}
                    </span>
                    <span className="flex items-center gap-1">
                      <Square className="w-3.5 h-3.5" />
                      {listing.sqm} m²
                    </span>
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="font-heading font-extrabold text-xl text-foreground">{listing.price}</span>
                      <span className="text-muted-foreground text-xs font-body">{listing.period}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center gap-1.5 px-4 py-2 bg-copper text-white text-xs font-heading font-bold rounded-full hover:opacity-90 transition-opacity"
                    >
                      Enquire
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="mt-4 text-center text-xs text-muted-foreground font-body md:hidden">
          Swipe to explore more listings →
        </p>
      </div>
    </section>
  );
}