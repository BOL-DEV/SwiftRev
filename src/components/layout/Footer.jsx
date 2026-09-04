import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import SwiftRevLogo from '../shared/SwiftRevLogo';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-border">
          {/* Logo & Corporate Tagline */}
          <div className="space-y-3 max-w-lg">
            <Link to="/" className="inline-block overflow-visible">
              <SwiftRevLogo className="h-28 sm:h-32 md:h-36 w-auto -my-4 md:-my-6" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              <strong>SwiftRev Technology Limited</strong> is a multi-sector technology firm engineering specialized software and systems across healthcare operations, real estate, point-of-sale, and critical enterprise sectors.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5 text-xs text-muted-foreground font-body shrink-0">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-pine dark:text-teal-400 shrink-0 mt-0.5" />
              <span>7 Prince Ajadi Olasunkanmi St, Lafenwa, Ogun State, Nigeria</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-pine dark:text-teal-400 shrink-0" />
              <span>me@swiftrevenue.me</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-pine dark:text-teal-400 shrink-0" />
              <span>+234 916 048 2233</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SwiftRev Technology Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
