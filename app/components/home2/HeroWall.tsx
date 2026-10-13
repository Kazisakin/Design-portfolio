'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { EASE } from './shared';

// Three rows of work, laid on a tilted plane and drifting slowly.
const ROWS = [
  ['krishivet', 'miyabi', 'roboflight-posters', 'smak', 'sm-care', 'krishivet-logo'],
  ['roboflight', 'krishivet-posters', 'simplyfresh', 'feyre', 'roboflight-logo', 'bss'],
  ['acc-it', 'roboflight-devices', 'miyabi', 'krishivet-devices', 'smak', 'simplyfresh'],
];

function Row({ items, dir, speed }: { items: string[]; dir: 1 | -1; speed: number }) {
  const list = [...items, ...items];
  return (
    <div className="hw-row" style={{ animationDuration: `${speed}s`, animationDirection: dir === 1 ? 'normal' : 'reverse' }}>
      {list.map((k, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={i} src={`/home/${k}.webp`} alt="" className="hw-tile" loading={i < 6 ? 'eager' : 'lazy'} draggable={false} />
      ))}
    </div>
  );
}

// Hero: the headline sits over a tilted wall of work. Scrolling lifts the wall
// upright to face the visitor, then a short statement settles on top of it.
export default function HeroWall() {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  const rotateX = useTransform(p, [0, 0.7], still ? [0, 0] : [52, 0]);
  const rotateZ = useTransform(p, [0, 0.7], still ? [0, 0] : [-16, 0]);
  const scale = useTransform(p, [0, 0.7], still ? [1, 1] : [1.05, 1.18]);
  const wallX = useTransform(p, [0, 0.7], ['18%', '0%']);
  const wallY = useTransform(p, [0, 0.7], ['8%', '0%']);
  const veil = useTransform(p, [0, 0.35], [1, 0]);
  const textY = useTransform(p, [0, 0.35], [0, -120]);
  const textO = useTransform(p, [0, 0.28], [1, 0]);
  const dim = useTransform(p, [0.6, 0.85], [0, 0.72]);
  const sayO = useTransform(p, [0.7, 0.88], [0, 1]);
  const sayY = useTransform(p, [0.7, 0.9], [40, 0]);

  return (
    <section ref={ref} className="relative h-[260vh]" data-bg="#ffffff" data-fg="#0e0e0e">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-cream">
        {/* the wall */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1500px' }}>
          <motion.div
            className="hw-plane"
            style={{ rotateX, rotateZ, scale, x: wallX, y: wallY, transformStyle: 'preserve-3d' }}
            aria-hidden="true"
          >
            <Row items={ROWS[0]} dir={1} speed={70} />
            <Row items={ROWS[1]} dir={-1} speed={84} />
            <Row items={ROWS[2]} dir={1} speed={76} />
          </motion.div>
        </div>

        {/* white veil so the headline reads cleanly, lifted as the wall rises */}
        <motion.div className="hw-veil pointer-events-none absolute inset-0" style={{ opacity: veil }} />
        <motion.div className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: dim }} />

        {/* headline */}
        <motion.div style={{ y: textY, opacity: textO }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-5 pt-28 sm:px-6 md:justify-center md:pt-16">
          <div className="max-w-[46rem]">
            <motion.p
              className="eyebrow text-ink/60"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              Kazi Sakin · Design portfolio
            </motion.p>
            <h1 className="mt-6 text-[clamp(2.6rem,6.2vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              {['Design that earns', 'trust at first look.'].map((l, i) => (
                <span key={l} className="block overflow-hidden pb-[0.1em] md:whitespace-nowrap">
                  <motion.span
                    className="block"
                    initial={{ y: '108%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: EASE }}
                  >
                    {i === 1 ? <span className="mark">{l}</span> : l}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              className="mt-7 max-w-[30rem] text-[1.0625rem] leading-relaxed text-ink/70"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            >
              I create brand identities, websites and motion for businesses and organisations in Canada and Bangladesh,
              from the first sketch to the finished launch.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            >
              <a href="#case-studies" className="h-btn h-btn-dark">
                View case studies <span aria-hidden="true">↓</span>
              </a>
              <Link href="/about" className="h-btn h-btn-line">
                About me
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* statement over the upright wall */}
        <motion.div
          style={{ opacity: sayO, y: sayY }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 text-center text-cream"
        >
          <div>
            <p className="eyebrow center text-accent">Since 2021</p>
            <p className="t-h2 mt-5 text-cream">
              Twelve projects. Four disciplines.
              <br />
              <span className="text-accent">One standard of care.</span>
            </p>
          </div>
        </motion.div>

        <motion.div style={{ opacity: textO }} className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
          Scroll
          <span className="hw-cue" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
