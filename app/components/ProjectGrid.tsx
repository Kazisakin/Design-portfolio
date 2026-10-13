'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Category } from '../data/projects';

const ALL = 'All' as const;
type Filter = typeof ALL | Category;
const FILTERS: Filter[] = [ALL, 'UI/UX', 'Social Media', 'Motion', 'Branding'];

export default function ProjectGrid() {
  const [active, setActive] = useState<Filter>(ALL);
  const [visible, setVisible] = useState(projects.filter((p) => !p.hidden));
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const all = projects.filter((p) => !p.hidden);
    const filtered = active === ALL ? all : all.filter((p) => p.category === active);
    // Fade out then back in
    if (gridRef.current) gridRef.current.style.opacity = '0';
    const timer = setTimeout(() => {
      setVisible(filtered);
      if (gridRef.current) {
        gridRef.current.style.opacity = '1';
        gridRef.current.style.transition = 'opacity 0.35s ease';
      }
    }, 180);
    return () => clearTimeout(timer);
  }, [active]);

  useEffect(() => {
    const els = gridRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [visible]);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-12 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
              active === f ? 'bg-ink text-cream' : 'hover:bg-ink/5'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="text-sm font-medium text-ink/50 sm:ml-auto">
          {visible.length} project{visible.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <div ref={gridRef} className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" style={{ transition: 'opacity 0.35s ease' }}>
        {visible.map((project, i) => {
          const cover = project.coverImage ?? project.media.find((m) => m.type === 'image')?.src;
          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`reveal reveal-delay-${Math.min((i % 3) + 1, 3)} project-card group block`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink">
                {cover ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={cover} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                ) : project.coverVideo ? (
                  <video src={project.coverVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
                ) : null}
                <span className="absolute right-4 top-4 flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-accent text-ink opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-bold tracking-tight decoration-accent decoration-4 underline-offset-4 group-hover:underline">{project.title}</h3>
                <span className="shrink-0 text-sm font-medium text-ink/50">{project.year}</span>
              </div>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-ink/50">{project.category}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{project.tagline}</p>
            </Link>
          );
        })}
      </div>

      {visible.length === 0 && <div className="py-24 text-center text-sm text-ink/50">No projects in this category yet.</div>}
    </div>
  );
}
