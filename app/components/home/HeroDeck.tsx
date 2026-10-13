'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { useScrollScene, clamp, ease } from './useScrollScene';

const CARDS = [
  { src: '/projects/case-shots/roboflight-home-portrait.webp', label: 'ROBOFLIGHT', href: '/work/roboflight-brand' },
  { src: '/projects/case-shots/krishivet-home-portrait.webp', label: 'KrishiVet', href: '/work/krishivet' },
  { src: '/Miyabi/6c6757135223917.61e4594340365.webp', label: 'Miyabi', href: '/work/miyabi' },
];
const REST = [-6, 2, 8]; // how the stacked cards sit before scrolling

// Hero: three project cards sit in a stack. Scrolling fans them out, then the
// words slide apart and the cards lift away. Scrolling back up reverses it.
export default function HeroDeck() {
  const section = useRef<HTMLElement>(null);
  const words = useRef<(HTMLSpanElement | null)[]>([]);
  const cards = useRef<(HTMLAnchorElement | null)[]>([]);
  const sub = useRef<HTMLDivElement>(null);

  useScrollScene(section, (p) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const fan = ease(clamp(p / 0.5));
    const away = ease(clamp((p - 0.4) / 0.55));
    const spread = Math.min(270, vw * 0.21);
    cards.current.forEach((c, i) => {
      if (!c) return;
      const k = i - 1;
      const x = k * fan * spread;
      const y = Math.abs(k) * fan * 36 - away * vh * (0.95 + i * 0.15);
      const r = REST[i] * (1 - fan) + k * fan * 11 + away * k * 18;
      c.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
    });
    words.current.forEach((w, i) => {
      if (!w) return;
      const dir = i % 2 ? 1 : -1;
      w.style.transform = `translateX(${dir * away * vw * 0.36}px) skewX(${dir * away * -10}deg)`;
      w.style.opacity = String(1 - away * 0.85);
    });
    if (sub.current) {
      const s = clamp(p / 0.22);
      sub.current.style.opacity = String(1 - s);
      sub.current.style.transform = `translateY(${s * 30}px)`;
    }
  });

  return (
    <section ref={section} className="dp-tall h-[250vh]" data-morph="" data-bg="#ffffff" data-fg="#0e0e0e">
      <div className="dp-stage flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
          <h1 className="dp-words" aria-label="Design. Brand. Ship.">
            {['Design.', 'Brand.', 'Ship.'].map((w, i) => (
              <span
                key={w}
                ref={(n) => {
                  words.current[i] = n;
                }}
                className={i === 1 ? 'mark w-fit' : undefined}
                aria-hidden="true"
              >
                {w}
              </span>
            ))}
          </h1>
        </div>
        <div className="dp-deck">
          {CARDS.map((c, i) => (
            <Link
              key={c.label}
              href={c.href}
              ref={(n) => {
                cards.current[i] = n;
              }}
              className="dp-card"
              style={{ zIndex: i === 1 ? 3 : 2 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={`${c.label} project`} loading="eager" />
              <span>{c.label}</span>
            </Link>
          ))}
        </div>
        <div ref={sub} className="dp-hero-sub">
          Designer and Computer Science student. I create brand identities, interfaces and motion for businesses and
          organisations in Canada and Bangladesh.
          <div className="dp-tags">
            <span>UI/UX</span>
            <span>Brand identity</span>
            <span>Motion</span>
            <span>Social media</span>
          </div>
        </div>
      </div>
    </section>
  );
}
