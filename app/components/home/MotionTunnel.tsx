'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { useScrollScene, clamp } from './useScrollScene';

const REELS = [
  {
    title: 'ACC IT Club',
    tag: 'Branding · Motion',
    poster: '/projects/ACC%20IT%20CLUB/banner-01.jpg',
    src: 'https://res.cloudinary.com/dshmix8ep/video/upload/v1774524522/0001_cuwc4s.mp4',
    href: '/work/acc-it-club',
  },
  {
    title: 'The Feyre',
    tag: 'Brand video',
    poster: '/projects/THE%20Feyere/1-01.png',
    src: 'https://res.cloudinary.com/dshmix8ep/video/upload/4_1_v4g4os.mp4',
    href: '/work/the-feyre',
  },
  {
    title: 'ACC ECO AMICA',
    tag: 'Motion identity',
    poster: undefined as string | undefined,
    src: 'https://res.cloudinary.com/dshmix8ep/video/upload/3_wk2gbv.mp4',
    href: '/work/acc-eco-amica-club',
  },
];

// In motion: the camera flies through the three video reels one after another.
// Only the reel in front plays, to keep the page light.
export default function MotionTunnel() {
  const section = useRef<HTMLElement>(null);
  const reels = useRef<(HTMLAnchorElement | null)[]>([]);
  const vids = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const shown = useRef(-1);

  useScrollScene(section, (p) => {
    const n = REELS.length;
    const t = clamp((p - 0.05) / 0.9) * (n + 0.2) - 0.6;
    reels.current.forEach((el, i) => {
      if (!el) return;
      const d = t - i;
      const scale = Math.pow(3.2, d);
      const opacity = d < 0 ? clamp(1 + d * 1.1) : clamp(1 - d * 1.8);
      const tilt = (i % 2 ? 1 : -1) * (1 - clamp(d + 1)) * 8;
      el.style.transform = `scale(${scale}) rotate(${tilt}deg)`;
      el.style.opacity = String(opacity);
      el.style.zIndex = String(Math.round(100 - Math.abs(d) * 10));
      el.style.filter = d < 0 ? `blur(${-d * 6}px)` : 'none';
      el.style.pointerEvents = opacity > 0.6 ? 'auto' : 'none';
    });
    const a = Math.min(n - 1, Math.max(0, Math.round(t)));
    if (a !== shown.current) {
      shown.current = a;
      setActive(a);
      vids.current.forEach((v, i) => {
        if (!v) return;
        if (i === a) v.play().catch(() => {});
        else v.pause();
      });
    }
  });

  return (
    <section ref={section} className="dp-tall h-[320vh]" data-morph="" data-bg="#0e0e0e" data-fg="#ffffff">
      <div className="dp-stage grid place-items-center [perspective:900px]">
        <h2 className="pointer-events-none absolute inset-x-0 top-[12vh] text-center font-display text-[clamp(40px,7vw,104px)] font-semibold leading-[0.9] tracking-[-0.04em]">
          In motion
        </h2>
        {REELS.map((r, i) => (
          <Link
            key={r.title}
            href={r.href}
            ref={(n) => {
              reels.current[i] = n;
            }}
            className="dp-reel"
          >
            <video
              ref={(n) => {
                vids.current[i] = n;
              }}
              src={r.src}
              poster={r.poster}
              muted
              loop
              playsInline
              preload="metadata"
            />
            <span className="dp-reel-label">
              {r.title}
              <small>{r.tag}</small>
            </span>
          </Link>
        ))}
        <p className="absolute inset-x-0 bottom-[7vh] text-center text-[13px] font-semibold uppercase tracking-[0.14em]">
          {String(active + 1).padStart(2, '0')} / {String(REELS.length).padStart(2, '0')} · {REELS[active].tag}
        </p>
      </div>
    </section>
  );
}
