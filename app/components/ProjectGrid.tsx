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
  const [visible, setVisible] = useState(projects);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(active === ALL ? projects : projects.filter((p) => p.category === active));
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
      <div className="flex flex-wrap gap-2 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === f
                ? 'bg-accent text-white'
                : 'border border-white/10 text-white/50 hover:border-accent/50 hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto flex items-center text-white/25 text-sm">
          {visible.length} project{visible.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`reveal reveal-delay-${Math.min((i % 3) + 1, 4)} project-card group block bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-colors`}
          >
            {/* Thumbnail */}
            <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, hsl(${(i * 47) + 250}, 45%, 14%) 0%, hsl(${(i * 47) + 285}, 55%, 9%) 100%)`,
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.coverImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="overlay" />
              <div className="card-info">
                <p className="text-white/90 text-sm">{project.tagline}</p>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex items-start justify-between gap-3">
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-display font-bold text-white text-base mt-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tools.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all mt-1">
                <ArrowUpRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="py-24 text-center text-white/30 text-sm">
          No projects in this category yet.
        </div>
      )}
    </div>
  );
}
