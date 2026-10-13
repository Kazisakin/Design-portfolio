'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Each slot cycles through its own set of stills, like a small slideshow —
// together the three slots form a collage that keeps changing.
const slots: { label: string; title: string; src: string; href: string }[][] = [
  [
    { label: 'Social Media', title: 'SimplyFresh — Full Campaign', src: '/projects/simplyfresh/Untitled-1.png', href: '/work/simplyfresh' },
    { label: 'UI/UX', title: 'KrishiVet — Website', src: '/projects/krishivet/home-01-hero.png', href: '/work/krishivet' },
  ],
  [
    { label: 'Branding', title: 'Miyabi — Packaging', src: '/Miyabi/bfc772135223917.61e4594340aac.webp', href: '/work/miyabi' },
    { label: 'UI/UX', title: 'ROBOFLIGHT — Website', src: '/projects/roboflight/1.png', href: '/work/roboflight-brand' },
  ],
  [
    { label: 'Branding', title: 'SMAK — Brand Visual', src: '/projects/SMAK%20SKIN%20CARE/0062a9138394399.621ce68c8fc17.webp', href: '/work/smak-skin-care' },
    { label: 'Branding', title: 'The Feyre — Brand Campaign', src: '/projects/THE%20Feyere/1-01.png', href: '/work/the-feyre' },
  ],
];

const SLIDE_MS = 3200;

function CollageSlot({ items, delayMs }: { items: typeof slots[number]; delayMs: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => setIndex((i) => (i + 1) % items.length), SLIDE_MS);
    }, delayMs);
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = items[index];

  return (
    <Link
      href={current.href}
      className="group block rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover:border-accent/30 transition-colors relative aspect-square"
    >
      {items.map((item, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={item.src}
          src={item.src}
          alt={item.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
        <p className="text-accent text-[11px] font-semibold uppercase tracking-wider mb-0.5">{current.label}</p>
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display font-bold text-white text-sm leading-snug">{current.title}</h3>
          <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function PhotoCollageSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-20 px-6 bg-[#060606]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-2 block">Brand & Visual Identity</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">In Frame</h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-accent transition-colors"
          >
            See all projects
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Compact collage — each tile is its own small slideshow */}
        <div className="reveal reveal-delay-1 grid grid-cols-3 gap-3">
          {slots.map((items, i) => (
            <CollageSlot key={i} items={items} delayMs={i * 900} />
          ))}
        </div>
      </div>
    </section>
  );
}
