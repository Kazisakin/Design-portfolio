'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Heading } from './shared';

const CASES = [
  {
    slug: 'krishivet',
    n: '01',
    name: 'KrishiVet',
    kind: 'Brand identity · Website',
    year: '2025',
    lead: ['Canadian science.', 'Bangladeshi soil.'],
    stats: [
      ['500+', 'farms'],
      ['98%', 'reorder'],
      ['4', 'products'],
    ],
    bg: '#13241a',
    accent: '#8ECDA8',
    thumb: '/home/krishivet-thumb.webp',
    mark: '/home/krishivet-mark.png',
  },
  {
    slug: 'roboflight-brand',
    n: '02',
    name: 'RoboFlight',
    kind: 'Brand identity · Website',
    year: '2024',
    lead: ['Kids learn faster when', 'they build it themselves.'],
    stats: [
      ['100+', 'students'],
      ['3', 'schools'],
      ['8+', 'starting age'],
    ],
    bg: '#0b1633',
    accent: '#38BDF8',
    thumb: '/home/roboflight-thumb.webp',
    mark: '/home/roboflight-mark.png',
  },
];

type Case = (typeof CASES)[number];

function Card({ c, side }: { c: Case; side: -1 | 1 }) {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();

  // swing in from the side like a door, landing flat when the card is in view
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 35%'] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 22, mass: 0.4 });
  const rotateY = useTransform(p, [0, 1], still ? [0, 0] : [side * -38, 0]);
  const rotateX = useTransform(p, [0, 1], still ? [0, 0] : [14, 0]);
  const x = useTransform(p, [0, 1], still ? [0, 0] : [side * 90, 0]);
  const opacity = useTransform(p, [0, 0.5], [0, 1]);

  // the thumbnail leans toward the cursor
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const sx = useSpring(tx, { stiffness: 160, damping: 18 });
  const sy = useSpring(ty, { stiffness: 160, damping: 18 });
  // tx = tilt around X, ty = tilt around Y

  return (
    <div ref={ref} style={{ perspective: '1400px' }}>
      <motion.article
        style={{ rotateY, rotateX, x, opacity, backgroundColor: c.bg, transformOrigin: side === -1 ? '0% 50%' : '100% 50%' }}
        className="group relative h-full rounded-[1.75rem] p-3 text-cream sm:p-4"
        data-bg={c.bg}
        data-fg="#ffffff"
      >
        <Link
          href={`/work/${c.slug}`}
          className="flex h-full flex-col"
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            ty.set(((e.clientX - r.left) / r.width - 0.5) * 10);
            tx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
          }}
          onPointerLeave={() => {
            tx.set(0);
            ty.set(0);
          }}
        >
          {/* thumbnail: the whole mockup, never cropped */}
          <div style={{ perspective: '1000px' }}>
            <motion.div
              className="relative overflow-hidden rounded-[1.25rem] bg-white/5"
              style={{ rotateX: sx, rotateY: sy, transformStyle: 'preserve-3d' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.thumb}
                alt={`${c.name} website on desktop, tablet and phone`}
                className="block aspect-[16/10] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white py-1 pl-1 pr-3 text-xs font-bold text-ink shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.mark} alt="" className="h-6 w-6 rounded-full object-contain" />
                {c.name}
              </span>
            </motion.div>
          </div>

          {/* text */}
          <div className="flex flex-1 flex-col px-2 pb-2 pt-6 sm:px-3">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-[0.72rem]" style={{ color: c.accent }}>
                Case study {c.n}
              </span>
              <span className="text-sm font-semibold text-cream/50">{c.year}</span>
            </div>
            <h3 className="mt-4 text-[clamp(2rem,3.2vw,2.75rem)] font-semibold leading-none tracking-[-0.035em]">{c.name}</h3>
            <p className="mt-2 text-sm font-semibold text-cream/55">{c.kind}</p>
            <p className="mb-7 mt-5 text-[1.15rem] font-semibold leading-snug tracking-[-0.01em]">
              {c.lead[0]} <span style={{ color: c.accent }}>{c.lead[1]}</span>
            </p>

            <div className="mt-auto flex items-end justify-between gap-4 border-t border-cream/15 pt-5">
              <dl className="flex gap-6">
                {c.stats.map(([v, l]) => (
                  <div key={l}>
                    <dt className="sr-only">{l}</dt>
                    <dd className="text-xl font-semibold tracking-[-0.02em]" style={{ color: c.accent }}>
                      {v}
                    </dd>
                    <dd className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream/45">{l}</dd>
                  </div>
                ))}
              </dl>
              <span
                className="grid h-12 w-12 flex-none place-items-center rounded-full text-lg font-bold text-ink transition-transform duration-500 group-hover:-rotate-45"
                style={{ backgroundColor: c.accent }}
                aria-hidden="true"
              >
                →
              </span>
            </div>
            <span className="sr-only">Read the {c.name} case study</span>
          </div>
        </Link>
      </motion.article>
    </div>
  );
}

export default function CaseStack() {
  return (
    <section id="case-studies" className="bg-cream py-24 md:py-32" data-bg="#ffffff" data-fg="#0e0e0e">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-ink/60">Selected case studies</p>
            <Heading a="Two brands," b="built end to end." className="mt-5" />
          </div>
          <p className="max-w-sm leading-relaxed text-ink/65">
            Each one started with a logo and ended with a working website: the identity, the type and colour system,
            the interface and the launch.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <Card key={c.slug} c={c} side={i === 0 ? -1 : 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
