'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// The two best motion/video projects
const reelItems = [
  {
    label: 'Branding · Motion',
    title: 'ACC IT Club — Batch-22 Recruitment',
    src: 'https://res.cloudinary.com/dshmix8ep/video/upload/v1774524522/0001_cuwc4s.mp4',
    href: '/work/acc-it-club',
    wide: true,
  },
  {
    label: 'Brand · Motion',
    title: 'The Feyre — Brand Video',
    src: 'https://res.cloudinary.com/dshmix8ep/video/upload/4_1_v4g4os.mp4',
    href: '/work/the-feyre',
    wide: false,
  },
  {
    label: 'Motion',
    title: 'ACC ECO AMICA — Visual Identity',
    src: 'https://res.cloudinary.com/dshmix8ep/video/upload/3_wk2gbv.mp4',
    href: '/work/acc-eco-amica-club',
    wide: false,
  },
];

export default function ShowreelSection() {
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
    <section ref={ref} className="py-24 sm:py-32 px-6 bg-[#060606]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16">
          <div>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Motion & Brand</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">In Motion</h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-accent transition-colors"
          >
            See all projects
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Video grid: first one wide, two below side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reelItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`reveal reveal-delay-${i + 1} group block rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover:border-accent/30 transition-colors relative${item.wide ? ' md:col-span-2' : ''}`}
            >
              <div className={item.wide ? 'aspect-[21/9]' : 'aspect-video'}>
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-white text-lg">{item.title}</h3>
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
