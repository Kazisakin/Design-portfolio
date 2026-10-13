import React from 'react';
import ProjectGrid from '../components/ProjectGrid';

export const metadata = {
  title: 'Work — Kazi Sakin Design',
  description: 'Brand identity, UI/UX, motion and social media projects, each with a short case study.',
};

export default function WorkPage() {
  return (
    <div data-bg="#ffffff" data-fg="#0e0e0e" className="min-h-screen bg-cream px-5 pb-24 pt-32 text-ink sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-ink/60">Portfolio</p>
        <h1 className="mt-3 font-display text-[clamp(56px,10vw,150px)] font-semibold leading-[0.88] tracking-[-0.045em]">
          All <span className="mark">work.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink/70">
          Brand identities, interfaces, motion and social media. Each project opens as a short case study.
        </p>
        <div className="mt-14">
          <ProjectGrid />
        </div>
      </div>
    </div>
  );
}
