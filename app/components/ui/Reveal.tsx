'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

// One quiet entrance used everywhere: a short fade and rise.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: { children: ReactNode; delay?: number; className?: string; as?: 'div' | 'li' | 'section' | 'figure' }) {
  const still = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      initial={still ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}
