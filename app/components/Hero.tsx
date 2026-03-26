'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/projects';

const disciplines = ['UI/UX', 'Social Media', 'Motion Graphics', 'Brand Identity'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-accent" />
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Design Portfolio
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal reveal-delay-1 font-display font-extrabold leading-[0.95] tracking-tight text-white mb-8">
          <span className="block text-[clamp(3rem,8vw,7rem)]">Crafting</span>
          <span className="block text-[clamp(3rem,8vw,7rem)] gradient-text">Visual Stories</span>
          <span className="block text-[clamp(3rem,8vw,7rem)]">that Matter</span>
        </h1>

        {/* Sub + disciplines */}
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
          <p className="text-white/50 text-lg max-w-md leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Discipline tags */}
        <div className="reveal reveal-delay-3 flex flex-wrap gap-3 mb-14">
          {disciplines.map((d) => (
            <span
              key={d}
              className="px-4 py-2 rounded-full border border-white/10 text-white/60 text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
            >
              {d}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="reveal reveal-delay-4 flex flex-col sm:flex-row gap-4">
          <Link
            href="/work"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all text-sm"
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={personalInfo.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-accent text-white/70 hover:text-white font-semibold rounded-full transition-all text-sm"
          >
            Behance
            <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
