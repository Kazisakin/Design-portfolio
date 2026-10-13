'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { personalInfo } from '../../data/projects';

// Closing call to action: the line swings up from a tilted plane as it arrives.
export default function Closing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 22, mass: 0.4 });
  const rotateX = useTransform(p, [0, 1], [60, 0]);
  const y = useTransform(p, [0, 1], [120, 0]);
  const o = useTransform(p, [0, 0.5], [0, 1]);
  return (
    <section ref={ref} className="overflow-hidden bg-cream py-28 md:py-40" data-bg="#ffffff" data-fg="#0e0e0e">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6" style={{ perspective: '1200px' }}>
        <p className="eyebrow center text-ink/60">Next project</p>
        <motion.h2
          style={{ rotateX, y, opacity: o, transformOrigin: '50% 100%' }}
          className="mx-auto mt-7 max-w-5xl text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]"
        >
          Let&apos;s build a brand
          <br />
          <span className="mark">people remember.</span>
        </motion.h2>
        <p className="mx-auto mt-8 max-w-lg leading-relaxed text-ink/65">
          I am open to freelance projects and design roles. Send a short note about what you need, and I will
          get back to you with next steps.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${personalInfo.email}`} className="h-btn h-btn-dark">
            Start a conversation <span aria-hidden="true">→</span>
          </a>
          <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer" className="h-btn h-btn-line">
            Behance <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
