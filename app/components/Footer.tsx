import React from 'react';
import Link from 'next/link';
import { personalInfo } from '../data/projects';

export default function Footer() {
  return (
    <footer className="rule">
      <div className="wrap section">
        <p className="label">Contact</p>
        <h2 className="t-display mt-6 max-w-[16ch]">Have a project in mind? Let&apos;s talk.</h2>
        <a href={`mailto:${personalInfo.email}`} className="link t-h3 mt-10">
          {personalInfo.email} <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="wrap flex flex-col gap-6 border-t border-[#e7e7e4] py-8 text-[15px] text-[#6b6b6b] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Kazi Mostofa Sakin</span>
        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          <Link href="/work" className="hover:text-ink">Work</Link>
          <Link href="/about" className="hover:text-ink">About</Link>
          <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Behance ↗</a>
          <a href={personalInfo.devPortfolio} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Dev portfolio ↗</a>
        </nav>
      </div>
    </footer>
  );
}
