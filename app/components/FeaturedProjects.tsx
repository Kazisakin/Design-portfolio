'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Selected Work</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">Featured Projects</h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-accent transition-colors"
          >
            View all work
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} project-card group block bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-colors`}
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                {/* Placeholder gradient while no image is uploaded */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, hsl(${(i * 60) + 250}, 50%, 15%) 0%, hsl(${(i * 60) + 280}, 60%, 10%) 100%)`,
                  }}
                />
                {/* Real image — shown when file exists */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="overlay" />
                <div className="card-info">
                  <p className="text-white/90 text-sm font-medium">{project.tagline}</p>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-display font-bold text-white text-lg mt-1 group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm mt-1">{project.year}</p>
                </div>
                <div className="flex-shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all mt-1">
                  <ArrowUpRight size={15} className="text-white/50 group-hover:text-white transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
