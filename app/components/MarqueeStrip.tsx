'use client';
import React from 'react';

const items = ['UI/UX Design', 'Social Media', 'Motion Graphics', 'Brand Identity', 'Figma', 'After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator'];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-white/5 py-4 overflow-hidden bg-[#0c0c0c]">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6 text-sm font-medium text-white/30 uppercase tracking-widest whitespace-nowrap">
            {item}
            <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
