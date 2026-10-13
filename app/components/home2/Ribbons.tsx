'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WORDS = ['Brand identity', 'UI/UX design', 'Websites', 'Motion', 'Social media', 'Art direction', 'Print'];

function Band({ x, dark, rotate }: { x: ReturnType<typeof useTransform<number, string>>; dark: boolean; rotate: number }) {
  const list = [...WORDS, ...WORDS, ...WORDS];
  return (
    <div className={`rb-band ${dark ? 'bg-ink text-cream' : 'bg-accent text-ink'}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <motion.div className="flex w-max items-center" style={{ x }}>
        {list.map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-6 text-[clamp(1.5rem,3.4vw,2.75rem)] font-semibold tracking-[-0.03em]">{w}</span>
            <span aria-hidden="true" className={dark ? 'text-accent' : 'text-ink'}>
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Two bands cross over each other and slide in opposite directions with the scroll.
export default function Ribbons() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const a = useTransform(scrollYProgress, [0, 1], ['-8%', '-38%']);
  const b = useTransform(scrollYProgress, [0, 1], ['-40%', '-10%']);
  return (
    <div ref={ref} className="relative overflow-hidden bg-cream py-24" aria-label="Disciplines" role="img" data-bg="#ffffff" data-fg="#0e0e0e">
      <div className="relative">
        <Band x={b} dark={false} rotate={3} />
        <div className="absolute inset-x-0 top-0">
          <Band x={a} dark rotate={-3} />
        </div>
      </div>
    </div>
  );
}
