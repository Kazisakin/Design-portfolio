'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { projects, type Category } from '../../data/projects';
import { EASE, Heading } from './shared';

// Lightweight home thumbnails (originals are very large).
const THUMBS: Record<string, string> = {
  miyabi: '/home/miyabi.webp',
  'smak-skin-care': '/home/smak.webp',
  'sm-care': '/home/sm-care.webp',
  simplyfresh: '/home/simplyfresh.webp',
  'bss-event-visuals': '/home/bss.webp',
  'the-feyre': '/home/feyre.webp',
  'acc-it-club': '/home/acc-it.webp',
};
const ORDER = ['miyabi', 'simplyfresh', 'acc-eco-amica-club', 'smak-skin-care', 'bss-event-visuals', 'the-feyre-serum', 'sm-care', 'the-feyre', 'acc-it-club'];
const FILTERS: ('All' | Category)[] = ['All', 'Branding', 'Social Media', 'Motion'];

const LIST = ORDER.map((s) => projects.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => !!p && !p.hidden);

function Tile({ p, i }: { p: (typeof LIST)[number]; i: number }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 160, damping: 16 });
  const sy = useSpring(ry, { stiffness: 160, damping: 16 });
  const thumb = THUMBS[p.slug];
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 70, rotateX: 22 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: EASE }}
      style={{ transformPerspective: 1200 }}
    >
      <Link
        href={`/work/${p.slug}`}
        className="group block"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          ry.set(((e.clientX - r.left) / r.width - 0.5) * 14);
          rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
        }}
        onPointerLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
      >
        <motion.div className="mw-media" style={{ rotateX: sx, rotateY: sy, transformPerspective: 900 }}>
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumb} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          ) : (
            <video src={p.coverVideo} poster={p.coverVideo?.replace('/upload/', '/upload/so_1/').replace(/\.mp4$/, '.jpg')} muted loop autoPlay playsInline preload="metadata" className="h-full w-full object-cover" aria-label={p.title} />
          )}
          <span className="mw-chip">{p.category}</span>
        </motion.div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.01em]">{p.title.split(' — ')[0]}</h3>
            <p className="mt-1 text-sm text-ink/60">{p.tagline}</p>
          </div>
          <span className="mw-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>
    </motion.li>
  );
}

export default function MoreWork() {
  const [f, setF] = useState<(typeof FILTERS)[number]>('All');
  const shown = LIST.filter((p) => f === 'All' || p.category === f);
  return (
    <section className="bg-cream py-24 md:py-32" data-bg="#ffffff" data-fg="#0e0e0e">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-ink/60">More work</p>
            <Heading a="Identity, campaigns" b="and motion." className="mt-5" />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {FILTERS.map((x) => (
              <button key={x} onClick={() => setF(x)} className={`mw-filter ${f === x ? 'is-on' : ''}`} aria-pressed={f === x}>
                {x}
              </button>
            ))}
          </div>
        </div>
        <motion.ul layout className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <Tile key={p.slug} p={p} i={i} />
            ))}
          </AnimatePresence>
        </motion.ul>
        <div className="mt-16 flex justify-center">
          <Link href="/work" className="h-btn h-btn-line">
            See all projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
