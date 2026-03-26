import React from 'react';
import ProjectGrid from '../components/ProjectGrid';

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Portfolio</span>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white mb-4">All Work</h1>
          <p className="text-white/40 text-lg max-w-xl">
            A collection of design projects across UI/UX, social media, motion graphics, and branding.
          </p>
        </div>

        <ProjectGrid />
      </div>
    </div>
  );
}
