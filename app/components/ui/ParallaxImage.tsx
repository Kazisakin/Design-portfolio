'use client';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Large image that settles from a slight zoom as it scrolls through the screen.
export default function ParallaxImage({ src, alt, ratio = '16 / 10', priority = false, className = '' }: { src: string; alt: string; ratio?: string; priority?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], still ? [1, 1, 1] : [1.08, 1.02, 1]);
  return (
    <div ref={ref} className={`frame ${className}`} style={{ aspectRatio: ratio }}>
      <motion.img src={src} alt={alt} style={{ scale }} loading={priority ? 'eager' : 'lazy'} />
    </div>
  );
}
