'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import BrandIdentity from './BrandIdentity';

interface Props {
  project: Project;
}

const visibleProjects = projects.filter((p) => !p.hidden);

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="md:sticky md:top-28">
      <p className="inline-block rounded-md bg-accent px-2 py-0.5 font-display text-sm font-bold">{n}</p>
      <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{children}</h2>
    </div>
  );
}

// A case study: overview, brief, approach, deliverables, the work itself and the result.
export default function ProjectDetail({ project }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const cover = useRef<HTMLDivElement>(null);

  const images = project.media.filter((m) => m.type === 'image');
  const videos = project.media.filter((m) => m.type !== 'image');
  const coverImage = project.coverImage ?? images[0]?.src;

  const i = visibleProjects.findIndex((p) => p.slug === project.slug);
  const next = visibleProjects[(i + 1) % visibleProjects.length];
  const prev = visibleProjects[(i - 1 + visibleProjects.length) % visibleProjects.length];
  const nextCover = next.coverImage ?? next.media.find((m) => m.type === 'image')?.src;

  // fade sections in as they arrive
  useEffect(() => {
    const els = root.current?.querySelectorAll('.reveal');
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [project.slug]);

  // the cover settles from a slight zoom as you scroll past it
  useEffect(() => {
    const el = cover.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const draw = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const k = Math.min(1, Math.max(0, 1 - r.top / window.innerHeight));
      const media = el.firstElementChild as HTMLElement | null;
      if (media) media.style.transform = `scale(${1.12 - k * 0.12})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [project.slug]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((n) => (n !== null ? Math.min(n + 1, images.length - 1) : null));
      if (e.key === 'ArrowLeft') setLightbox((n) => (n !== null ? Math.max(n - 1, 0) : null));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, images.length]);

  return (
    <div ref={root} className="bg-cream text-ink" data-bg="#ffffff" data-fg="#0e0e0e">
      {/* ---------- title ---------- */}
      <header className="mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 sm:pt-40">
        <Link href="/work" className="reveal inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
          <ArrowLeft size={16} /> All work
        </Link>
        <p className="reveal mt-10 eyebrow text-ink/60">
          Case study · {project.category} · {project.year}
        </p>
        <h1 className="reveal reveal-delay-1 mt-4 max-w-5xl font-display text-[clamp(44px,8vw,120px)] font-semibold leading-[0.92] tracking-[-0.04em]">
          {project.title}
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg text-ink/70 sm:text-xl">{project.tagline}</p>

        <dl className="reveal reveal-delay-3 mt-12 grid grid-cols-2 gap-6 border-t-2 border-ink pt-6 md:grid-cols-4">
          {[
            ['Client', project.client ?? 'Personal project'],
            ['Role', project.role],
            ['Year', project.year],
            ['Tools', project.tools.join(', ')],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">{k}</dt>
              <dd className="mt-1.5 font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-accent hover:text-ink"
          >
            Visit the live site <ArrowUpRight size={16} />
          </a>
        )}
      </header>

      {/* ---------- cover ---------- */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={cover} className="aspect-[16/9] overflow-hidden rounded-3xl bg-ink">
          {project.coverVideo ? (
            <video src={project.coverVideo} autoPlay muted loop playsInline poster={coverImage} className="h-full w-full object-cover" />
          ) : coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={coverImage} alt={`${project.title} cover`} className="h-full w-full object-cover" />
          ) : null}
        </div>
      </div>

      {/* ---------- story ---------- */}
      <div className="mx-auto max-w-7xl space-y-20 px-5 py-24 sm:px-8 sm:py-32">
        <section className="reveal grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
          <SectionLabel n="01">Overview</SectionLabel>
          <p className="text-xl leading-relaxed sm:text-2xl">{project.description}</p>
        </section>

        {project.challenge && (
          <section className="reveal grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
            <SectionLabel n="02">The brief</SectionLabel>
            <p className="text-lg leading-relaxed text-ink/80">{project.challenge}</p>
          </section>
        )}

        {project.approach && project.approach.length > 0 && (
          <section className="reveal grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
            <SectionLabel n="03">Approach</SectionLabel>
            <ol className="space-y-0">
              {project.approach.map((step, k) => (
                <li key={k} className="grid grid-cols-[3rem_1fr] gap-3 border-t border-ink/15 py-5 last:border-b">
                  <span className="font-display text-lg font-bold text-ink/35">{String(k + 1).padStart(2, '0')}</span>
                  <span className="text-lg leading-relaxed text-ink/85">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {project.deliverables && project.deliverables.length > 0 && (
          <section className="reveal grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
            <SectionLabel n="04">Deliverables</SectionLabel>
            <ul className="flex flex-wrap gap-2.5">
              {project.deliverables.map((d) => (
                <li key={d} className="rounded-full border-2 border-ink px-4 py-2 text-[15px] font-semibold">
                  {d}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {project.brand && <BrandIdentity brand={project.brand} />}

      {/* ---------- brand presentation: full-width boards, Behance-style ---------- */}
      {project.presentation && project.presentation.length > 0 && (
        <section className="bg-ink text-cream" data-bg="#0e0e0e" data-fg="#ffffff" aria-label="Brand presentation">
          <div className="mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-8 sm:pt-32">
            <p className="eyebrow text-cream/50">Brand presentation</p>
            <h2 className="mt-3 font-display text-[clamp(40px,6vw,80px)] font-semibold leading-none tracking-[-0.03em]">The identity in use</h2>
            <p className="mt-5 max-w-2xl text-lg text-cream/70">
              {project.presentationNote ?? 'Logo, colour, type and voice applied across print, social media and the website.'}
            </p>
          </div>
          <div className="mx-auto max-w-[1600px]">
            {project.presentation.map((src, k) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`${project.title} brand presentation, board ${k + 1}`} loading="lazy" className="block h-auto w-full" />
            ))}
          </div>
        </section>
      )}

      {/* ---------- the work ---------- */}
      {(images.length > 0 || videos.length > 0) && (
        <section className="bg-ink py-24 text-cream sm:py-32" data-bg="#0e0e0e" data-fg="#ffffff">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="reveal font-display text-[clamp(40px,6vw,80px)] font-semibold leading-none tracking-[-0.03em]">{project.brand ? 'The interfaces' : 'The work'}</h2>
            {videos.length > 0 && (
              <div className="mt-12 space-y-6">
                {videos.map((v, k) =>
                  v.type === 'youtube' || v.type === 'vimeo' ? (
                    <div key={k} className="reveal aspect-video overflow-hidden rounded-3xl">
                      <iframe src={v.src} title={v.alt ?? `Video ${k + 1}`} className="h-full w-full" allowFullScreen />
                    </div>
                  ) : (
                    <video key={k} src={v.src} controls muted playsInline poster={v.thumbnail} className="reveal w-full rounded-3xl bg-black" />
                  )
                )}
              </div>
            )}
            {images.length > 0 && project.brand && (
              <div className="mt-14 space-y-24 sm:space-y-32">
                {images.map((m, k) => (
                  <figure key={m.src} className="reveal">
                    <figcaption className="mb-8 grid gap-4 md:grid-cols-[1fr_1.4fr] md:items-end md:gap-16">
                      <div>
                        <span className="inline-block rounded-md bg-accent px-2 py-0.5 font-display text-sm font-bold text-ink">
                          {String(k + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mt-3 font-display text-[clamp(28px,3.4vw,44px)] font-semibold leading-tight tracking-tight">{m.caption}</h3>
                      </div>
                      <div>
                        {m.description && <p className="text-lg leading-relaxed text-cream/75">{m.description}</p>}
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-cream/45">Desktop · Tablet · Phone</p>
                      </div>
                    </figcaption>
                    <button type="button" onClick={() => setLightbox(k)} className="block w-full overflow-hidden rounded-3xl text-left" aria-label={`Enlarge ${m.caption}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={m.src} alt={m.alt ?? `${project.title} ${k + 1}`} loading="lazy" className="block h-auto w-full transition-transform duration-700 hover:scale-[1.01]" />
                    </button>
                  </figure>
                ))}
              </div>
            )}
            {images.length > 0 && !project.brand && (
              <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {images.map((m, k) => (
                  <button
                    type="button"
                    key={m.src}
                    onClick={() => setLightbox(k)}
                    className={`reveal group relative block overflow-hidden rounded-3xl bg-[#222] text-left ${m.wide || (images.length % 2 === 1 && k === 0) ? 'sm:col-span-2' : ''}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.src} alt={m.alt ?? `${project.title} ${k + 1}`} loading="lazy" className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]" />
                    {(m.caption || m.alt) && (
                      <span className="absolute bottom-3 left-3 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100">
                        {m.caption ?? m.alt?.replace(/^.*— /, '')}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ---------- result ---------- */}
      {project.outcome && (
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="reveal grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
            <SectionLabel n={project.approach ? '05' : '03'}>The result</SectionLabel>
            <p className="font-display text-[clamp(26px,3.4vw,44px)] font-bold leading-tight tracking-tight">{project.outcome}</p>
          </div>
        </section>
      )}

      {/* ---------- next project ---------- */}
      <nav className="border-t-2 border-ink" aria-label="More projects" data-bg="#d4f760" data-fg="#0e0e0e">
        <Link href={`/work/${next.slug}`} className="group relative block overflow-hidden bg-accent px-5 py-16 sm:px-8 sm:py-24">
          <div className="relative z-[1] mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-3 font-display text-[clamp(40px,7vw,104px)] font-semibold leading-[0.9] tracking-[-0.04em]">{next.title}</p>
            </div>
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-2">
              <ArrowRight size={26} />
            </span>
          </div>
          {nextCover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={nextCover}
              alt=""
              className="pointer-events-none absolute right-[8%] top-1/2 hidden w-72 -translate-y-1/2 rotate-6 rounded-2xl opacity-0 transition-all duration-500 group-hover:rotate-3 group-hover:opacity-100 lg:block"
            />
          )}
        </Link>
        <Link href={`/work/${prev.slug}`} className="block bg-cream px-5 py-5 text-sm font-semibold underline-offset-4 hover:underline sm:px-8">
          <span className="mx-auto flex max-w-7xl items-center gap-2">
            <ArrowLeft size={15} /> Previous: {prev.title}
          </span>
        </Link>
      </nav>

      {/* ---------- lightbox ---------- */}
      {lightbox !== null && images.length > 0 && (
        <div className="fixed inset-0 z-[9000] flex items-center justify-center bg-ink/95 p-4" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button type="button" aria-label="Close" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink" onClick={() => setLightbox(null)}>
            <X size={18} />
          </button>
          {lightbox > 0 && (
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox - 1);
              }}
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <figure className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[lightbox].src} alt={images[lightbox].alt ?? project.title} className="max-h-[80vh] max-w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-cream/60">
              {lightbox + 1} / {images.length}
            </figcaption>
          </figure>
          {lightbox < images.length - 1 && (
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox + 1);
              }}
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
