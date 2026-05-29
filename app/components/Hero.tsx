'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/projects';

const disciplines = ['UI/UX', 'Social Media', 'Motion Graphics', 'Brand Identity'];

// Best project previews shown as floating cards
const floatingCards = [
  {
    src: '/projects/roboflight/1.png',
    label: 'ROBOFLIGHT — UI Design',
    cls: 'float-a',
    style: { top: '6%', right: '2%', width: 260, animationDelay: '0s' },
  },
  {
    src: '/projects/krishivet/home-01-hero.png',
    label: 'KrishiVet — Web UI',
    cls: 'float-b',
    style: { top: '38%', right: '18%', width: 220, animationDelay: '0.8s' },
  },
  {
    src: '/Miyabi/6c6757135223917.61e4594340365.webp',
    label: 'Miyabi — Brand Identity',
    cls: 'float-c',
    style: { top: '64%', right: '4%', width: 200, animationDelay: '1.6s' },
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef   = useRef<HTMLDivElement>(null);
  const blob1Ref     = useRef<HTMLDivElement>(null);
  const blob2Ref     = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      if (blob1Ref.current)
        blob1Ref.current.style.transform = `translate(calc(-50% + ${x}px), calc(${y}px))`;
      if (blob2Ref.current)
        blob2Ref.current.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${y * 0.18}px)`;
        contentRef.current.style.opacity   = String(Math.max(0, 1 - y / 500));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div
        ref={blob1Ref}
        className="absolute top-1/4 left-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[130px] pointer-events-none"
        style={{ transition: 'transform 0.12s ease-out' }}
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-fuchsia-500/8 rounded-full blur-[110px] pointer-events-none"
        style={{ transition: 'transform 0.18s ease-out' }}
      />

      {/* Two-column layout: text left, floating cards right */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-0">

        {/* ── Left: Text content ── */}
        <div ref={contentRef} className="lg:w-[55%]" style={{ willChange: 'transform, opacity' }}>

          {/* Eyebrow */}
          <div className="reveal flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Design Portfolio
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-white mb-8">
            <span className="reveal reveal-delay-1 block text-[clamp(3rem,8vw,7rem)]">Design.</span>
            <span className="reveal reveal-delay-2 block text-[clamp(3rem,8vw,7rem)] gradient-text">Brand.</span>
            <span className="reveal reveal-delay-3 block text-[clamp(3rem,8vw,7rem)]">Ship.</span>
          </h1>

          {/* Bio */}
          <div className="reveal reveal-delay-4 mb-12">
            <p className="text-white/50 text-lg max-w-md leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Discipline tags */}
          <div className="reveal reveal-delay-5 flex flex-wrap gap-3 mb-14">
            {disciplines.map((d, i) => (
              <span
                key={d}
                className="tag-float px-4 py-2 rounded-full border border-white/10 text-white/60 text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {d}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="reveal reveal-delay-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all text-sm hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(139,92,246,0.35)]"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={personalInfo.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-accent text-white/70 hover:text-white font-semibold rounded-full transition-all text-sm hover:scale-105 active:scale-95"
            >
              Behance
              <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* ── Right: Floating project cards (desktop only) ── */}
        <div className="hidden lg:block lg:w-[45%] relative" style={{ height: 520 }}>
          {floatingCards.map((card) => (
            <div
              key={card.src}
              className={`absolute ${card.cls} rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.7)] border border-white/10 backdrop-blur-sm`}
              style={{ ...card.style, animationDelay: card.style.animationDelay }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.label}
                style={{ width: card.style.width }}
                className="block h-auto"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                <p className="text-white/70 text-[10px] font-medium tracking-wide truncate">{card.label}</p>
              </div>
            </div>
          ))}

          {/* Ambient glow behind cards */}
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent scroll-line" />
      </div>
    </section>
  );
}
