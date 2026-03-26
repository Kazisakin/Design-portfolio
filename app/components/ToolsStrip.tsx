'use client';
import React, { useEffect, useRef } from 'react';
import { designTools } from '../data/projects';

export default function ToolsStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.2 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Toolkit</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">Tools I Work With</h2>
        </div>
        <div className="reveal reveal-delay-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {designTools.map((tool, i) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/5 bg-[#111] hover:border-accent/40 hover:bg-accent/5 transition-all cursor-default"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-3xl">{tool.icon}</span>
              <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors text-center">{tool.name}</span>
              <span className="text-accent/60 text-xs uppercase tracking-wider">{tool.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
