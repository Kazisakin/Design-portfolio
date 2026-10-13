'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useReducedMotion,
  useMotionValueEvent,
  animate,
  type MotionValue,
} from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects, type Project, type StoryBoard } from '../data/projects';

// A brand case study told as one story:
// hero → brief & process → brand idea → 01 Identity → 02 Website → 03 In the world → results → closing.
// Every motion is tied to the scroll, so it plays back in reverse when scrolling up.

const visible = projects.filter((p) => !p.hidden);
const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- small building blocks ---------- */

function Title({ a, b, accent, as = 'h2', className = '' }: { a: string; b: string; accent: string; as?: 'h1' | 'h2'; className?: string }) {
  // The heading itself is observed: the lines start clipped, so they can't trigger on their own.
  const Tag = as === 'h1' ? motion.h1 : motion.h2;
  const line = (d: number) => ({ hidden: { y: '105%' }, show: { y: 0, transition: { duration: 0.9, delay: d, ease: EASE } } });
  return (
    <Tag
      className={`${as === 'h1' ? 't-h1' : 't-h2'} ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      <span className="block overflow-hidden pb-[0.08em]">
        <motion.span className="block" variants={line(0)}>
          {a}
        </motion.span>
      </span>
      <span className="block overflow-hidden pb-[0.08em]">
        <motion.span className="block" style={{ color: accent }} variants={line(0.08)}>
          {b}
        </motion.span>
      </span>
    </Tag>
  );
}

// A board that tilts up from a 3D plane as it scrolls into view.
function Board({ src, alt, side = 0, rounded = true }: { src: string; alt: string; side?: number; rounded?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 30%'] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const rotateX = useTransform(p, [0, 1], [22, 0]);
  const rotateY = useTransform(p, [0, 1], [side * 10, 0]);
  const y = useTransform(p, [0, 1], [110, 0]);
  const scale = useTransform(p, [0, 1], [0.9, 1]);
  const opacity = useTransform(p, [0, 0.5, 1], [0.25, 0.85, 1]);
  return (
    <div ref={ref} style={{ perspective: 1600 }}>
      <motion.div
        style={still ? undefined : { rotateX, rotateY, y, scale, opacity, transformOrigin: '50% 100%' }}
        className={`overflow-hidden ${rounded ? 'rounded-2xl sm:rounded-3xl' : ''} shadow-[0_40px_80px_-40px_rgba(14,14,14,.45)]`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
      </motion.div>
    </div>
  );
}

function Caption({ n, title, note, dark = false }: { n: string; title: string; note?: string; dark?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="mb-7 grid gap-3 md:grid-cols-[1fr_1.5fr] md:items-end md:gap-16"
    >
      <div className="flex items-baseline gap-4">
        <span className={`text-sm font-bold tabular-nums ${dark ? 'text-cream/45' : 'text-ink/40'}`}>{n}</span>
        <h3 className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em]">{title}</h3>
      </div>
      {note && <p className={`text-lg leading-relaxed ${dark ? 'text-cream/70' : 'text-ink/70'}`}>{note}</p>}
    </motion.div>
  );
}

function Chapter({ n, title, line, dark = false, accent }: { n: string; title: string; line: string; dark?: boolean; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-14%']);
  return (
    <div ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <motion.p
        style={{ x, WebkitTextStroke: `1.5px ${dark ? 'rgba(255,255,255,.18)' : 'rgba(14,14,14,.12)'}` }}
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(8rem,22vw,22rem)] font-semibold leading-none tracking-[-0.05em] text-transparent"
        aria-hidden="true"
      >
        {n} {title}
      </motion.p>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow" style={{ color: accent }}>
          Chapter {n}
        </p>
        <h2 className="mt-4 text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">{title}</h2>
        <p className={`mt-5 max-w-xl text-lg ${dark ? 'text-cream/70' : 'text-ink/70'}`}>{line}</p>
      </div>
    </div>
  );
}

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: EASE, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

/* ---------- hero: the cover unfolds from a tilted plane ---------- */

function Hero({ project, accent, accentDark }: { project: Project; accent: string; accentDark: string }) {
  const story = project.story!;
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.4 });
  const rotateX = useTransform(p, [0, 1], [34, 0]);
  const scale = useTransform(p, [0, 1], [0.8, 1]);
  const y = useTransform(p, [0, 1], [40, 0]);
  return (
    <header className="bg-ink pb-24 pt-32 text-cream sm:pt-40" data-bg="#0e0e0e" data-fg="#ffffff">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-cream/70 hover:text-cream">
          <ArrowLeft size={16} /> All work
        </Link>
        <p className="eyebrow mt-10" style={{ color: accentDark }}>
          Case study · Brand identity &amp; website
        </p>
        <Title as="h1" a={project.title} b={project.brand?.font.sample[1] ?? ''} accent={accentDark} className="mt-5" />
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="mt-12 grid grid-cols-2 gap-6 border-t border-cream/15 pt-6 md:grid-cols-4"
        >
          {[
            ['Client', project.client ?? '—'],
            ['Role', project.role],
            ['Year', project.year],
            ['Tools', project.tools.join(', ')],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow text-cream/45 before:hidden">{k}</dt>
              <dd className="mt-2 font-semibold">{v}</dd>
            </div>
          ))}
        </motion.dl>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: accent }}
          >
            Visit the live site <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      <div ref={ref} className="mx-auto mt-16 max-w-[1500px] px-3 sm:px-6" style={{ perspective: 1800 }}>
        <motion.div
          style={still ? undefined : { rotateX, scale, y, transformOrigin: '50% 0%' }}
          className="overflow-hidden rounded-2xl shadow-[0_80px_120px_-50px_rgba(0,0,0,.8)] sm:rounded-3xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={story.cover} alt={`${project.title} brand identity cover`} className="block h-auto w-full" />
        </motion.div>
      </div>
    </header>
  );
}

/* ---------- 02 website: pinned 3D screen stack with synced steps ---------- */

function ScreenCard({ t, i, src, alt }: { t: MotionValue<number>; i: number; src: string; alt: string }) {
  const d = useTransform(t, (v) => v - i);
  const rotateX = useTransform(d, [-1, 0, 1], [-28, 0, 24]);
  const y = useTransform(d, [-1, 0, 1], ['38%', '0%', '-30%']);
  const scale = useTransform(d, [-1, 0, 1], [0.86, 1, 0.9]);
  const opacity = useTransform(d, [-1, -0.55, 0, 0.6, 1], [0, 1, 1, 0.6, 0]);
  const z = useTransform(d, (v) => Math.round(100 - Math.abs(v) * 10));
  return (
    <motion.div className="absolute inset-0 flex items-center" style={{ rotateX, y, scale, opacity, zIndex: z, transformOrigin: '50% 50%' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block h-auto w-full rounded-2xl shadow-[0_50px_100px_-40px_rgba(0,0,0,.55)]" />
    </motion.div>
  );
}

function ScreenStack({ project, accent }: { project: Project; accent: string }) {
  const screens = project.media.filter((m) => m.type === 'image');
  const n = screens.length;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const t = useSpring(useTransform(scrollYProgress, [0.04, 0.96], [0, n - 1]), { stiffness: 140, damping: 28, mass: 0.35 });
  const [active, setActive] = useState(0);
  useMotionValueEvent(t, 'change', (v) => setActive(Math.min(n - 1, Math.max(0, Math.round(v)))));
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      {/* desktop: pinned stack */}
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${n * 85 + 40}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-[0.8fr_1.6fr] items-center gap-14 px-8">
            <div>
              <div className="relative mb-8 h-[3px] overflow-hidden rounded-full bg-ink/10">
                <motion.div className="absolute inset-y-0 left-0" style={{ width: bar, background: accent }} />
              </div>
              <ol className="space-y-2">
                {screens.map((m, i) => (
                  <li key={m.src} className={`rounded-2xl p-5 transition-all duration-500 ${i === active ? 'bg-mist' : 'opacity-40'}`}>
                    <p className="flex items-baseline gap-3">
                      <span className="text-sm font-bold tabular-nums" style={{ color: i === active ? accent : undefined }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xl font-semibold tracking-[-0.01em]">{m.caption}</span>
                    </p>
                    <div className={`grid transition-all duration-500 ${i === active ? 'mt-2 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <p className="overflow-hidden pl-9 leading-relaxed text-ink/70">{m.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="eyebrow mt-8 text-ink/40">Desktop · Tablet · Phone</p>
            </div>
            <div className="relative aspect-[16/10]" style={{ perspective: 1800 }}>
              {screens.map((m, i) => (
                <ScreenCard key={m.src} t={t} i={i} src={m.src} alt={m.alt ?? m.caption ?? ''} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* phones & tablets: simple sequence */}
      <div className="space-y-20 px-5 sm:px-8 lg:hidden">
        {screens.map((m, i) => (
          <div key={m.src}>
            <Caption n={String(i + 1).padStart(2, '0')} title={m.caption ?? ''} note={m.description} />
            <Board src={m.src} alt={m.alt ?? ''} side={i % 2 ? 1 : -1} />
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- 03 in the world: 3D cover-flow ---------- */

function FlowCard({ t, i, item }: { t: MotionValue<number>; i: number; item: StoryBoard }) {
  const d = useTransform(t, (v) => i - v);
  const rotateY = useTransform(d, [-1.5, 0, 1.5], [42, 0, -42]);
  const scale = useTransform(d, [-1.5, 0, 1.5], [0.78, 1, 0.78]);
  const opacity = useTransform(d, [-2, -1, 0, 1, 2], [0, 0.55, 1, 0.55, 0]);
  const z = useTransform(d, (v) => Math.round(100 - Math.abs(v) * 10));
  return (
    <motion.figure
      className="absolute left-1/2 top-1/2 w-[min(68vw,1080px)]"
      style={{ x: useTransform(d, (v) => `calc(-50% + ${v * 62}vw)`), y: '-50%', rotateY, scale, opacity, zIndex: z }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} alt={item.title} className="block h-auto w-full rounded-2xl shadow-[0_60px_120px_-40px_rgba(0,0,0,.7)]" />
      <figcaption className="mt-4 text-center text-sm font-semibold text-cream/70">{item.title}</figcaption>
    </motion.figure>
  );
}

function WorldFlow({ items }: { items: StoryBoard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const n = items.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const t = useSpring(useTransform(scrollYProgress, [0.05, 0.95], [0, n - 1]), { stiffness: 120, damping: 26, mass: 0.4 });
  return (
    <>
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${n * 80 + 40}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden" style={{ perspective: 1600 }}>
          {items.map((it, i) => (
            <FlowCard key={it.src} t={t} i={i} item={it} />
          ))}
        </div>
      </div>
      <div className="space-y-16 px-5 pb-10 sm:px-8 lg:hidden">
        {items.map((it, i) => (
          <div key={it.src}>
            <Board src={it.src} alt={it.title} side={i % 2 ? 1 : -1} />
            <p className="mt-4 text-center text-sm font-semibold text-cream/70">{it.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- closing board: settles from a slow zoom ---------- */

function Closing({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.img src={src} alt={alt} style={{ scale }} className="block h-auto w-full" />
    </div>
  );
}

/* ---------- the page ---------- */

export default function BrandCaseStudy({ project }: { project: Project }) {
  const story = project.story!;
  const brand = project.brand!;
  const accent = brand.headlineAccent; // brand colour on light backgrounds
  const accentDark = brand.font.sampleAccent; // brand colour on dark backgrounds

  const i = visible.findIndex((p) => p.slug === project.slug);
  const next = visible[(i + 1) % visible.length];
  const prev = visible[(i - 1 + visible.length) % visible.length];

  return (
    <div className="bg-cream text-ink">
      <Hero project={project} accent={accent} accentDark={accentDark} />

      {/* ---------- brief & process ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32" data-bg="#ffffff" data-fg="#0e0e0e">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="eyebrow" style={{ color: accent }}>
              The brief
            </p>
            <Title a="What the brand" b="needed to do." accent={accent} className="mt-5" />
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE }}>
            <p className="text-xl leading-relaxed sm:text-2xl">{project.description}</p>
            {project.challenge && <p className="mt-6 text-lg leading-relaxed text-ink/70">{project.challenge}</p>}
          </motion.div>
        </div>

        {project.approach && (
          <div className="mt-24">
            <p className="eyebrow" style={{ color: accent }}>
              Process
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1200 }}>
              {project.approach.map((step, k) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, rotateX: -45, y: 40 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.9, delay: k * 0.1, ease: EASE }}
                  style={{ transformOrigin: '50% 0%' }}
                  className="rounded-3xl border border-ink/10 bg-mist p-7"
                >
                  <p className="text-[2.75rem] font-semibold leading-none tracking-[-0.04em]" style={{ color: accent }}>
                    {String(k + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-6 leading-relaxed text-ink/80">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        {project.deliverables && (
          <div className="mt-10 flex flex-wrap gap-2.5">
            {project.deliverables.map((d) => (
              <span key={d} className="rounded-full border border-ink/15 px-4 py-2 text-[15px] font-semibold">
                {d}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* ---------- brand idea ---------- */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32" data-bg="#ffffff" data-fg="#0e0e0e">
        <Caption n="—" title="The brand idea" note={story.idea.note} />
        <Board src={story.idea.src} alt={`${project.title} brand idea`} />
        {story.glance && (
          <div className="mt-14">
            <Board src={story.glance} alt={`${project.title} identity at a glance`} side={1} />
          </div>
        )}
      </section>

      {/* ---------- 01 identity ---------- */}
      <section className="bg-mist pb-24 sm:pb-32" data-bg="#f4f4f1" data-fg="#0e0e0e">
        <Chapter n="01" title="Identity" line="Mark, colour, type and imagery: the building blocks that make the brand recognisable." accent={accent} />
        <div className="mx-auto max-w-7xl space-y-24 px-5 sm:space-y-32 sm:px-8">
          {story.identity.map((b, k) => (
            <div key={b.src}>
              <Caption n={String(k + 1).padStart(2, '0')} title={b.title} note={b.note} />
              <Board src={b.src} alt={`${project.title} — ${b.title}`} side={k % 2 ? 1 : -1} />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- 02 website ---------- */}
      <section className="pb-24 sm:pb-32" data-bg="#ffffff" data-fg="#0e0e0e">
        <Chapter n="02" title="Website" line="The identity brought to life on screen: designed and built for phones, tablets and desktops." accent={accent} />
        <div className="mx-auto mb-24 max-w-7xl px-5 sm:px-8">
          <Board src={story.websiteOpener} alt={`${project.title} website on devices`} />
        </div>
        <ScreenStack project={project} accent={accent} />
      </section>

      {/* ---------- 03 in the world ---------- */}
      <section className="bg-ink text-cream" data-bg="#0e0e0e" data-fg="#ffffff">
        <Chapter n="03" title="In the world" line={story.worldNote} dark accent={accentDark} />
        <WorldFlow items={story.world} />
      </section>

      {/* ---------- results ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32" data-bg="#ffffff" data-fg="#0e0e0e">
        <p className="eyebrow" style={{ color: accent }}>
          The result
        </p>
        <Title a="A brand that works" b="on every surface." accent={accent} className="mt-5" />
        <div className="mt-14 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
          {story.stats.map((s) => (
            <div key={s.label}>
              <p className="text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-none tracking-[-0.045em]" style={{ color: accent }}>
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="eyebrow mt-3 text-ink/50 before:hidden">{s.label}</p>
            </div>
          ))}
        </div>
        {project.outcome && <p className="mt-14 max-w-3xl text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug tracking-[-0.015em]">{project.outcome}</p>}
      </section>

      <Closing src={story.closing} alt={`${project.title} closing board`} />

      {/* ---------- next project ---------- */}
      <nav className="border-t-2 border-ink" aria-label="More projects" data-bg="#d4f760" data-fg="#0e0e0e">
        <Link href={`/work/${next.slug}`} className="group relative block overflow-hidden bg-accent px-5 py-16 sm:px-8 sm:py-24">
          <div className="relative z-[1] mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-3 text-[clamp(40px,7vw,104px)] font-semibold leading-[0.9] tracking-[-0.04em]">{next.title}</p>
            </div>
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-2">
              <ArrowRight size={26} />
            </span>
          </div>
        </Link>
        <Link href={`/work/${prev.slug}`} className="block bg-cream px-5 py-5 text-sm font-semibold underline-offset-4 hover:underline sm:px-8">
          <span className="mx-auto flex max-w-7xl items-center gap-2">
            <ArrowLeft size={15} /> Previous: {prev.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
