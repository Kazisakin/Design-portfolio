import React from 'react';
import Link from 'next/link';
import { personalInfo } from '../data/projects';

export default function Footer() {
  return (
    <footer data-bg="#0e0e0e" data-fg="#ffffff" className="relative bg-ink px-5 pb-8 pt-16 text-cream sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-cream/50">Have a project in mind?</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-3 block font-display text-[clamp(28px,5vw,56px)] font-semibold leading-none tracking-tight hover:text-accent"
            >
              {personalInfo.email}
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-semibold">
            <Link href="/" className="hover:text-accent">Home</Link>
            <Link href="/work" className="hover:text-accent">Work</Link>
            <Link href="/about" className="hover:text-accent">About</Link>
            <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Behance ↗</a>
            <a href={personalInfo.devPortfolio} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Dev portfolio ↗</a>
          </nav>
        </div>
        <p className="mt-14 select-none font-display text-[clamp(64px,17vw,250px)] font-semibold leading-[0.8] tracking-[-0.05em] text-cream/[0.07]" aria-hidden="true">
          Kazi Sakin
        </p>
        <div className="mt-6 flex flex-wrap justify-between gap-3 text-xs font-medium text-cream/50">
          <span>© {new Date().getFullYear()} Kazi Mostofa Sakin</span>
          <span>UI/UX · Brand identity · Motion · Social media</span>
        </div>
      </div>
    </footer>
  );
}
