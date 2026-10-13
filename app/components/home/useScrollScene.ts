'use client';
import { useEffect, useRef, type RefObject } from 'react';

// Runs `render(progress, seconds)` every frame while a tall section is on screen.
// Progress is 0 when the section's top reaches the top of the screen and 1 when its
// bottom reaches the bottom. It is smoothed, so the motion glides and reverses
// naturally when the visitor scrolls back up.
export function useScrollScene(ref: RefObject<HTMLElement | null>, render: (p: number, t: number) => void) {
  const draw = useRef(render);
  draw.current = render;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let smooth = -1;
    let last = performance.now();

    const target = () => {
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      return span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
    };
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const p = target();
      smooth = smooth < 0 || still ? p : smooth + (p - smooth) * Math.min(1, dt * 9);
      draw.current(smooth, now / 1000);
      raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !raf) {
          last = performance.now();
          raf = requestAnimationFrame(loop);
        } else if (!e.isIntersecting && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { rootMargin: '200px 0px' }
    );
    io.observe(el);
    draw.current(target(), 0);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
