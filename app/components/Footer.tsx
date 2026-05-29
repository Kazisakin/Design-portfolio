'use client';
import React from 'react';
import Link from 'next/link';
import { ExternalLink, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/projects';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">

      {/* Top CTA strip */}
      <div className="px-6 py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {/* Available badge */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-white/60 text-sm font-medium">Available for freelance & collaborations</span>
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 text-white font-semibold rounded-full text-sm transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
          >
            <Mail size={14} />
            {personalInfo.email}
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main footer row */}
      <div className="px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-white text-lg">Kazi Sakin</p>
            <p className="text-white/30 text-sm mt-0.5">UI/UX · Social Media · Motion · Brand</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
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

          <p className="text-white/20 text-xs">© {year} Kazi Mostofa Sakin</p>
        </div>
      </div>
    </footer>
  );
}
