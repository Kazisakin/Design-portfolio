'use client';
import React, { useEffect, useRef } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/projects';

export default function CtaBanner() {
  const ref = useRef<HTMLElement>(null);

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
    <section ref={ref} className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Let&apos;s Collaborate
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white mb-6 leading-tight">
            Have a project<br />
            <span className="gradient-text">in mind?</span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
            Whether it&apos;s a brand identity, a UI redesign, or a motion piece — I&apos;d love to hear about it.
          </p>
        </div>
        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all text-sm"
          >
            <Mail size={16} />
            Get in Touch
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={personalInfo.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-accent text-white/60 hover:text-white font-semibold rounded-full transition-all text-sm hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            View Behance
          </a>
        </div>
      </div>
    </section>
  );
}
