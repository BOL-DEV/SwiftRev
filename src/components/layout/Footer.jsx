import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import SwiftRevLogo from '../shared/SwiftRevLogo';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-border items-start">
          
          {/* Logo & Corporate Summary (7 cols on desktop) */}
          <div className="md:col-span-7 space-y-4 max-w-xl">
            <Link to="/" className="inline-flex items-center">
              <SwiftRevLogo className="h-16 sm:h-20 md:h-24 w-auto max-w-full object-contain -my-2" />
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-body">
              <strong>SwiftRev And Technology Limited</strong> is a multi-sector technology firm engineering specialized software and systems across healthcare operations, real estate, point-of-sale, and critical enterprise sectors.
            </p>
          </div>

          {/* Contact Details (5 cols on desktop) */}
          <div className="md:col-span-5 space-y-3.5 text-xs text-muted-foreground font-body w-full md:pt-2">
            <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-pine dark:text-teal-400 block mb-1">
              Head Office &amp; Contact
            </span>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-pine dark:text-teal-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                7 Prince Ajadi Olasunkanmi St, Lafenwa, Ogun State, Nigeria
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-pine dark:text-teal-400 shrink-0" />
              <a
                href="mailto:swiftrevtech@gmail.com"
                className="hover:text-foreground hover:underline transition-colors break-all"
              >
                swiftrevtech@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} SwiftRev And Technology Limited. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact Us
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
