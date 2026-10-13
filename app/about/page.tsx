'use client';
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo, designTools } from '../data/projects';

const services = [
  { title: 'UI/UX design', desc: 'Wireframes, prototypes and interface design in Figma, prepared for development.' },
  { title: 'Brand identity', desc: 'Logos, colour palettes, typography and guidelines that give a brand a clear, consistent look.' },
  { title: 'Social media design', desc: 'Posts, stories and campaign templates for Instagram, Facebook and LinkedIn.' },
  { title: 'Motion graphics', desc: 'Animated logos, kinetic type and short promotional videos in After Effects and Premiere Pro.' },
];

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-cream text-ink" data-bg="#ffffff" data-fg="#0e0e0e">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="reveal eyebrow text-ink/60">About</p>
        <h1 className="reveal reveal-delay-1 mt-3 font-display text-[clamp(56px,10vw,150px)] font-semibold leading-[0.88] tracking-[-0.045em]">
          Designer
          <br />
          who <span className="mark">codes.</span>
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-xl leading-relaxed text-ink/75">{personalInfo.bio}</p>

        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          <section className="reveal">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Background</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                I&apos;m Kazi Mostofa Sakin, a fourth-year Computer Science student at the University of New Brunswick. I started
                designing before I started coding, and the two have grown together ever since.
              </p>
              <p>
                Over the past five years I have worked on brand identities, social media campaigns, motion graphics and websites
                for skincare brands, restaurants, student organisations and education programs in Bangladesh and Canada.
              </p>
              <p>
                Because I also build software, I design with the final product in mind: layouts that are practical to develop,
                assets that are ready to hand off, and interfaces that work on every screen.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-accent hover:text-ink">
                View Behance <ArrowUpRight size={15} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold hover:bg-ink hover:text-cream">
                Email me
              </a>
            </div>
          </section>

          <section className="reveal reveal-delay-1">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Toolkit</h2>
            <ul className="mt-6">
              {designTools.map((t) => (
                <li key={t.name} className="flex items-baseline justify-between border-t border-ink/15 py-4 last:border-b">
                  <span className="font-display text-xl font-bold">{t.name}</span>
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-ink/50">{t.category}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-28">
          <h2 className="reveal font-display text-3xl font-semibold tracking-tight">What I do</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <div key={s.title} className={`reveal reveal-delay-${(i % 2) + 1} rounded-3xl border-2 border-ink p-7`}>
                <p className="inline-block rounded-md bg-accent px-2 py-0.5 font-display text-sm font-bold">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <a
          href={personalInfo.devPortfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group mt-28 flex flex-col justify-between gap-6 rounded-3xl bg-ink p-8 text-cream sm:flex-row sm:items-center sm:p-10"
        >
          <div>
            <p className="eyebrow text-cream/50">Also a developer</p>
            <p className="mt-2 font-display text-3xl font-semibold tracking-tight">See my development portfolio</p>
            <p className="mt-1 text-cream/60">Full-stack web applications, software testing and machine learning.</p>
          </div>
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={22} />
          </span>
        </a>
      </div>
    </div>
  );
}
