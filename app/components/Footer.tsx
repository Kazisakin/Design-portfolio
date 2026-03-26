'use client';
import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/projects';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-white text-lg">Kazi Sakin</p>
          <p className="text-white/40 text-sm mt-0.5">UI/UX · Social Media · Motion · Brand</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1 hover:text-accent transition-colors">
            Behance <ExternalLink size={12} />
          </a>
          <a href={personalInfo.devPortfolio} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1 hover:text-accent transition-colors">
            Dev Portfolio <ExternalLink size={12} />
          </a>
        </nav>

        <p className="text-white/25 text-xs">© {year} Kazi Mostofa Sakin</p>
      </div>
    </footer>
  );
}
