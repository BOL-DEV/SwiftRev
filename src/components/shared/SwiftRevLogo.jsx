import React from 'react';

export default function SwiftRevLogo({ className = "h-20 md:h-24", showTagline = false }) {
  return (
    <div className="flex items-center select-none">
      <img
        src="/swiftRev.png"
        alt="SwiftRev Technology Limited"
        className={`w-auto object-contain transition-transform hover:scale-105 ${className}`}
      />
    </div>
  );
}
