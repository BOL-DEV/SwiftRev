import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img
              src="/swiftRev.png"
              alt="SwiftRev Logo"
              className="h-24 md:h-28 w-auto mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Bridging medical finance and housing solutions with precision technology. No agents. Direct connections.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground text-sm tracking-wide mb-4">Platform</h4>
            <div className="space-y-3">
              <Link to="/medical-finance" className="block text-sm text-muted-foreground hover:text-mint transition-colors">Medical Finance</Link>
              <Link to="/housing-solutions" className="block text-sm text-muted-foreground hover:text-copper transition-colors">Housing Solutions</Link>
              <Link to="/healthtech" className="block text-sm text-muted-foreground hover:text-mint transition-colors">HealthTech Solutions</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground text-sm tracking-wide mb-4">Resources</h4>
            <div className="space-y-3">
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              <span className="block text-sm text-muted-foreground">Privacy Policy</span>
              <span className="block text-sm text-muted-foreground">Terms of Service</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground text-sm tracking-wide mb-4">Connect</h4>
            <div className="space-y-3">
              <span className="block text-sm text-muted-foreground">me@swiftrevenue.me</span>
              <span className="block text-sm text-muted-foreground">+234 916 048 2233</span>
              <span className="block text-sm text-muted-foreground leading-relaxed">7 Prince Ajadi Olasunkanmi St, Lafewa, Ogun State</span>
            </div>
          </div>
        </div>

        <div className="hairline mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SwiftRev and Technology Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-mint animate-pulse" />
            <span className="text-xs text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
