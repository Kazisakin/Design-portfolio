'use client';
import React, { useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { personalInfo, designTools } from '../data/projects';

const services = [
  {
    title: 'UI/UX Design',
    desc: 'End-to-end interface design — wireframes, prototypes, design systems, and handoff-ready components in Figma or Adobe XD.',
    icon: '🖥️',
  },
  {
    title: 'Social Media Design',
    desc: 'Scroll-stopping posts, stories, reels covers, highlight icons, and brand templates for Instagram, Facebook, and LinkedIn.',
    icon: '📱',
  },
  {
    title: 'Motion Graphics',
    desc: 'Animated logos, kinetic typography, video intros, and visual effects using After Effects and Premiere Pro.',
    icon: '🎬',
  },
  {
    title: 'Brand Identity',
    desc: 'Logo design, colour palettes, typography systems, and brand guidelines that communicate a clear visual identity.',
    icon: '✏️',
  },
];

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Headline */}
        <div className="reveal mb-20">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">About Me</span>
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl text-white leading-tight mb-8">
            Designer who<br />
            <span className="gradient-text">codes.</span>
          </h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl">
            {personalInfo.bio}
          </p>
        </div>

        {/* Two-col: bio + tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="reveal reveal-delay-1">
            <h2 className="font-display font-bold text-2xl text-white mb-5">Background</h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                I&apos;m Kazi Mostofa Sakin, a 4th-year Computer Science student at the University of New Brunswick
                with a strong passion for design. I started designing before I started coding — and the two disciplines
                have grown together ever since.
              </p>
              <p>
                My design work spans digital interfaces, social media campaigns, motion graphics, and brand identities.
                I&apos;ve created visual systems for student societies, educational platforms, and personal projects —
                each one pushing me to think more deeply about communication and aesthetics.
              </p>
              <p>
                When I&apos;m not at a screen, I&apos;m exploring graphic design theory, studying motion principles,
                and experimenting with new tools. You can find my public design work on Behance.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={personalInfo.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-dark text-white text-sm font-semibold transition-colors"
              >
                View Behance <ExternalLink size={13} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-accent text-white/60 hover:text-white text-sm font-semibold transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <h2 className="font-display font-bold text-2xl text-white mb-5">Design Toolkit</h2>
            <div className="grid grid-cols-2 gap-3">
              {designTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#111] border border-white/5 hover:border-accent/30 transition-colors"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{tool.name}</p>
                    <p className="text-white/30 text-xs">{tool.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="reveal mb-20">
          <h2 className="font-display font-bold text-3xl text-white mb-10">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${i + 1} p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-accent/30 transition-colors group`}
              >
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dev portfolio CTA */}
        <div className="reveal p-8 rounded-2xl bg-[#111] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Also a Developer</p>
            <h3 className="font-display font-bold text-white text-2xl">Check out my Dev Portfolio</h3>
            <p className="text-white/40 text-sm mt-1">Full-stack projects, machine learning, and more.</p>
          </div>
          <a
            href={personalInfo.devPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-accent text-white/60 hover:text-white text-sm font-semibold transition-all"
          >
            kazisakin.github.io
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
