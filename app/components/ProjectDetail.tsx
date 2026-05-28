'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, type Project } from '../data/projects';

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const imageMedia = project.media.filter((m) => m.type === 'image');
  const videoMedia = project.media.filter((m) => m.type !== 'image');

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

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

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((i) => i !== null ? Math.min(i + 1, imageMedia.length - 1) : null);
      if (e.key === 'ArrowLeft') setLightbox((i) => i !== null ? Math.max(i - 1, 0) : null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, imageMedia.length]);

  return (
    <div ref={sectionRef} className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link
          href="/work"
          className="reveal inline-flex items-center gap-2 text-white/40 hover:text-accent text-sm font-medium transition-colors mb-12"
        >
          <ArrowLeft size={15} />
          All Work
        </Link>

        {/* Hero */}
        <div className="reveal mb-6">
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">{project.category}</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            {project.title}
          </h1>
          <p className="text-white/50 text-base sm:text-xl mt-3">{project.tagline}</p>
        </div>

        {/* Meta */}
        <div className="reveal reveal-delay-1 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-4 sm:p-6 rounded-2xl bg-[#111] border border-white/5">
          {[
            { label: 'Year',   value: project.year,                  wide: false },
            { label: 'Role',   value: project.role,                  wide: false },
            { label: 'Client', value: project.client ?? 'Personal',  wide: false },
            { label: 'Tools',  value: project.tools.join(', '),      wide: true  },
          ].map(({ label, value, wide }) => (
            <div key={label} className={wide ? 'col-span-2 sm:col-span-1' : ''}>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">{label}</p>
              <p className="text-white text-sm font-medium break-words">{value}</p>
            </div>
          ))}
        </div>

        {/* Cover image */}
        {(project.coverImage || project.coverVideo) && (
          <div
            className="reveal reveal-delay-1 mb-14 rounded-2xl overflow-hidden bg-[#111] aspect-[16/9] cursor-pointer relative"
            onClick={() => setLightbox(0)}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #1a0f2e 0%, #0d0d0d 100%)' }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.coverImage}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        )}

        {/* Write-up */}
        <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-3">
            <h2 className="font-display font-bold text-2xl text-white mb-3">Overview</h2>
            <p className="text-white/60 leading-relaxed">{project.description}</p>
          </div>
          {project.challenge && (
            <div>
              <h3 className="font-display font-semibold text-white mb-2 text-lg">Challenge</h3>
              <p className="text-white/50 text-sm leading-relaxed">{project.challenge}</p>
            </div>
          )}
          {project.outcome && (
            <div>
              <h3 className="font-display font-semibold text-white mb-2 text-lg">Outcome</h3>
              <p className="text-white/50 text-sm leading-relaxed">{project.outcome}</p>
            </div>
          )}
          <div>
            <h3 className="font-display font-semibold text-white mb-2 text-lg">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-white/50 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image gallery — editorial collage grid */}
        {imageMedia.length > 0 && (
          <div className="reveal mb-14">
            <h2 className="font-display font-bold text-2xl text-white mb-6">Design Screens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {imageMedia.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightbox(idx)}
                  className={[
                    'rounded-2xl overflow-hidden bg-[#111] cursor-pointer relative group border border-white/5 hover:border-accent/30 transition-colors',
                    item.wide ? 'sm:col-span-2' : '',
                  ].join(' ')}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt ?? `${project.title} ${idx + 1}`}
                    className="w-full h-auto block group-hover:scale-[1.015] transition-transform duration-500 origin-center"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                  {item.caption && (
                    <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50 group-hover:text-white/80 transition-colors">
                      {item.caption}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video embeds */}
        {videoMedia.length > 0 && (
          <div className="reveal mb-14">
            <h2 className="font-display font-bold text-2xl text-white mb-6">Video</h2>
            <div className="space-y-6">
              {videoMedia.map((item, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-[#111] border border-white/5">
                  {(item.type === 'youtube' || item.type === 'vimeo') ? (
                    <div className="aspect-video">
                      <iframe
                        src={item.src}
                        title={item.alt ?? `Video ${idx + 1}`}
                        className="w-full h-full"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </div>
                  ) : (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      playsInline
                      controls
                      loop={false}
                      className="w-full rounded-2xl"
                      poster={item.thumbnail}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prev / Next */}
        <div className="reveal border-t border-white/5 pt-12 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex flex-col gap-1 p-5 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-2 text-white/30 text-xs mb-1">
                <ArrowLeft size={12} /> Previous
              </div>
              <span className="font-display font-bold text-white text-sm group-hover:text-accent transition-colors">{prev.title}</span>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col items-end gap-1 p-5 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-2 text-white/30 text-xs mb-1">
                Next <ArrowRight size={12} />
              </div>
              <span className="font-display font-bold text-white text-sm group-hover:text-accent transition-colors text-right">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && imageMedia.length > 0 && (
        <div
          className="fixed inset-0 z-[9000] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>

          {lightbox > 0 && (
            <button
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => Math.max((i ?? 1) - 1, 0)); }}
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageMedia[lightbox].src}
              alt={imageMedia[lightbox].alt ?? project.title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
            <p className="text-white/40 text-sm text-center mt-3">
              {lightbox + 1} / {imageMedia.length}
            </p>
          </div>

          {lightbox < imageMedia.length - 1 && (
            <button
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => Math.min((i ?? 0) + 1, imageMedia.length - 1)); }}
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
