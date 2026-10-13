'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { personalInfo } from '../../data/projects';
import { Counter } from './shared';

const TEXT =
  "I'm Kazi, a designer and Computer Science student at the University of New Brunswick. For five years I have helped businesses and student organisations look as good as the work they do.";
const HIGHLIGHT = new Set(['designer', 'Computer', 'Science', 'five', 'years']);

function Word({ w, i, n, p }: { w: string; i: number; n: number; p: MotionValue<number> }) {
  const start = i / n;
  const o = useTransform(p, [start, start + 1.5 / n], [0.14, 1]);
  const clean = w.replace(/[.,]/g, '');
  return (
    <motion.span style={{ opacity: o }} className={HIGHLIGHT.has(clean) ? 'mark' : undefined}>
      {w}{' '}
    </motion.span>
  );
}

// The statement lights up word by word as it scrolls through the screen.
export default function AboutStrip() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] });
  const words = TEXT.split(' ');
  return (
    <section className="bg-mist py-24 md:py-32" data-bg="#f4f4f1" data-fg="#0e0e0e">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <p className="eyebrow text-ink/60">About</p>
        <p ref={ref} className="mt-8 max-w-5xl text-[clamp(1.75rem,3.6vw,3rem)] font-semibold leading-[1.18] tracking-[-0.025em]">
          {words.map((w, i) => (
            <Word key={i} w={w} i={i} n={words.length} p={scrollYProgress} />
          ))}
        </p>
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-ink/15 pt-10 md:grid-cols-4">
          {[
            [5, '+', 'years designing'],
            [12, '', 'published projects'],
            [2, '', 'countries served'],
            [4, '', 'disciplines'],
          ].map(([v, s, l]) => (
            <div key={l as string}>
              <p className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.04em]">
                <Counter value={v as number} suffix={s as string} />
              </p>
              <p className="eyebrow mt-3 text-ink/50 before:hidden">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/about" className="h-btn h-btn-dark">
            More about me <span aria-hidden="true">→</span>
          </Link>
          <a href={personalInfo.devPortfolio} target="_blank" rel="noopener noreferrer" className="h-btn h-btn-line">
            Development portfolio <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
