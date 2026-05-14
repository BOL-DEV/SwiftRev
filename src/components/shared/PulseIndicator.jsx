import React from 'react';

export default function PulseIndicator({ color = 'mint', size = 'md' }) {
  const sizeMap = { sm: 'w-2 h-2', md: 'w-3 h-3', lg: 'w-4 h-4' };
  const colorMap = {
    mint: 'bg-mint shadow-mint/40',
    copper: 'bg-copper shadow-copper/40',
  };

  return (
    <span className="relative inline-flex">
      <span className={`${sizeMap[size]} rounded-full ${colorMap[color]} animate-pulse shadow-lg`} />
      <span className={`absolute inset-0 ${sizeMap[size]} rounded-full ${colorMap[color]} animate-ping opacity-30`} />
    </span>
  );
}