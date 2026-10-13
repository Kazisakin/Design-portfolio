'use client';
import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1] as const;

// Two-line heading in the dev-portfolio style. The heading is observed (not the
// clipped lines), so the reveal always fires.
export function Heading({
  a,
  b,
  as = 'h2',
  mark = true,
  className = '',
}: {
  a: string;
  b: string;
  as?: 'h1' | 'h2';
  mark?: boolean;
  className?: string;
}) {
  const Tag = as === 'h1' ? motion.h1 : motion.h2;
  const line = (d: number) => ({
    hidden: { y: '108%' },
    show: { y: 0, transition: { duration: 1, delay: d, ease: EASE } },
  });
  return (
    <Tag
      className={`${as === 'h1' ? 't-h1' : 't-h2'} ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8% 0px' }}
    >
      <span className="block overflow-hidden pb-[0.1em]">
        <motion.span className="block" variants={line(0)}>
          {a}
        </motion.span>
      </span>
      <span className="block overflow-hidden pb-[0.1em]">
        <motion.span className="block" variants={line(0.1)}>
          <span className={mark ? 'mark' : undefined}>{b}</span>
        </motion.span>
      </span>
    </Tag>
  );
}

export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
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
