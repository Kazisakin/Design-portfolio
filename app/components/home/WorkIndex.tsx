'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Category } from '../../data/projects';

type Filter = 'All' | Category;
const FILTERS: Filter[] = ['All', 'Branding', 'UI/UX', 'Motion', 'Social Media'];

const visible = projects.filter((p) => !p.hidden).sort((a, b) => Number(b.year) - Number(a.year));
const peekOf = (p: (typeof visible)[number]) => {
  const img = p.coverImage ?? p.media.find((m) => m.type === 'image')?.src;
  return img ? { kind: 'image' as const, src: img } : p.coverVideo ? { kind: 'video' as const, src: p.coverVideo } : null;
};

// Selected work as an index: each row draws in with the scroll (and undraws on the way back up).
// On desktop, a preview of the project follows the cursor while you hover a row.
export default function WorkIndex() {
  const [filter, setFilter] = useState<Filter>('All');
  const [hover, setHover] = useState<number | null>(null);
  const rows = useRef<(HTMLAnchorElement | null)[]>([]);
  const peek = useRef<HTMLDivElement>(null);

  // rows draw in with the scroll
  useEffect(() => {
    let raf = 0;
    const draw = () => {
      raf = 0;
      const h = window.innerHeight;
      rows.current.forEach((r) => {
        if (!r) return;
        const top = r.getBoundingClientRect().top;
        const k = Math.min(1, Math.max(0, (h * 0.98 - top) / (h * 0.28)));
        const e = 1 - Math.pow(1 - k, 3);
        r.style.setProperty('--line', String(e));
        const rise = Math.min(1, Math.max(0, k * 1.3 - 0.15));
        r.style.setProperty('--rise', String(1 - Math.pow(1 - rise, 3)));
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // preview follows the cursor with a little lag and tilt
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    let mx = 0, my = 0, px = 0, py = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const loop = () => {
      px += (mx - px) * 0.14;
      py += (my - py) * 0.14;
      const tilt = Math.max(-1, Math.min(1, (mx - px) / 40)) * 8;
      if (peek.current) peek.current.style.transform = `translate(${px - 160}px, ${py - 120}px) rotate(${tilt}deg)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const shown = hover !== null ? peekOf(visible[hover]) : null;

  return (
    <section className="py-[16vh]" data-morph="" data-bg="#0e0e0e" data-fg="#ffffff">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-[5vh] flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(46px,8vw,120px)] font-semibold leading-[0.9] tracking-[-0.04em]">
            Selected
            <br />
            work
          </h2>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button key={f} type="button" onClick={() => setFilter(f)} className={`dp-filter ${filter === f ? 'is-on' : ''}`}>
                {f === 'Social Media' ? 'Social' : f}
              </button>
            ))}
          </div>
        </div>

        <div onMouseLeave={() => setHover(null)}>
          {visible.map((p, i) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              ref={(n) => {
                rows.current[i] = n;
              }}
              className={`dp-row ${filter !== 'All' && p.category !== filter ? 'is-hidden' : ''}`}
              onMouseEnter={() => setHover(i)}
              tabIndex={filter !== 'All' && p.category !== filter ? -1 : 0}
            >
              <span className="dp-row-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="dp-row-t">
                <b>{p.title.replace(/ — .*/, '')}</b>
              </span>
              <span className="dp-row-c">{p.category}</span>
              <span className="dp-row-y">{p.year}</span>
            </Link>
          ))}
        </div>

        <Link href="/work" className="mt-12 inline-flex items-center gap-2 font-semibold hover:text-accent">
          View all work with case studies <ArrowUpRight size={18} />
        </Link>
      </div>

      <div ref={peek} className={`dp-peek ${shown ? 'is-on' : ''}`} aria-hidden="true">
        {shown?.kind === 'image' && (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={shown.src} src={shown.src} alt="" />
        )}
        {shown?.kind === 'video' && <video key={shown.src} src={shown.src} autoPlay muted loop playsInline />}
      </div>
    </section>
  );
}
