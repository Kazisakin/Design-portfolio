import React from 'react';
import Link from 'next/link';
import { projects, type Project } from '../data/projects';
import { coverFor, shortTitle, labelFor } from '../data/covers';
import Reveal from './ui/Reveal';

const ORDER = ['krishivet', 'roboflight-brand', 'miyabi', 'smak-skin-care', 'simplyfresh', 'acc-eco-amica-club', 'bss-event-visuals', 'the-feyre', 'the-feyre-serum', 'sm-care', 'acc-it-club'];
const visible = ORDER.map((s) => projects.find((p) => p.slug === s)).filter((p): p is Project => !!p && !p.hidden);

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="wrap rule">
      <div className="grid gap-10 py-[clamp(4rem,8vw,7rem)] lg:grid-cols-12">
        <p className="label lg:col-span-4">{label}</p>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

// Project page in the same quiet layout as the brand case studies:
// title and facts, a large cover, a short story, then the work at full width.
export default function ProjectDetail({ project }: { project: Project }) {
  const images = project.media.filter((m) => m.type === 'image' && m.src !== project.coverImage);
  const videos = project.media.filter((m) => m.type !== 'image');
  const cover = coverFor(project);
  const i = visible.findIndex((p) => p.slug === project.slug);
  const next = visible[(i + 1) % visible.length];
  const nextCover = coverFor(next);

  return (
    <article>
      <header className="wrap pb-[clamp(3rem,6vw,5rem)] pt-[clamp(8rem,16vh,11rem)]">
        <Reveal>
          <Link href="/work" className="text-[15px] text-[#6b6b6b] hover:text-ink">
            ← Work
          </Link>
          <p className="label mt-12">{labelFor(project)}</p>
          <h1 className="t-display mt-6">{shortTitle(project)}</h1>
          <p className="t-lead mt-6 max-w-[40ch] text-[#3a3a3a]">{project.tagline}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[#e7e7e4] pt-8 lg:grid-cols-4">
            {[
              ['Client', project.client ?? 'Personal project'],
              ['Role', project.role],
              ['Year', project.year],
              ['Tools', project.tools.join(', ')],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="label">{k}</dt>
                <dd className="mt-2">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </header>

      <div className="wrap">
        <div className="frame" style={{ aspectRatio: '16 / 9' }}>
          {cover.kind === 'video' ? (
            <video src={cover.src} poster={cover.poster} autoPlay muted loop playsInline aria-label={`${shortTitle(project)} video`} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cover.src} alt={`${shortTitle(project)} cover`} />
          )}
        </div>
      </div>

      <div className="mt-[clamp(4rem,8vw,7rem)]" />
      <Block label="Overview">
        <Reveal>
          <p className="t-h2 max-w-[32ch]">{project.description}</p>
        </Reveal>
      </Block>
      {project.challenge && (
        <Block label="The brief">
          <Reveal>
            <p className="t-lead max-w-[48ch]">{project.challenge}</p>
          </Reveal>
        </Block>
      )}
      {project.approach && project.approach.length > 0 && (
        <Block label="Approach">
          <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {project.approach.map((a, k) => (
              <Reveal as="li" key={k} delay={(k % 2) * 0.08}>
                <p className="text-[15px] text-[#6b6b6b]">0{k + 1}</p>
                <p className="t-body mt-3 text-ink">{a}</p>
              </Reveal>
            ))}
          </ol>
          {project.deliverables && (
            <ul className="mt-14 flex flex-wrap gap-2">
              {project.deliverables.map((d) => (
                <li key={d} className="rounded-full border border-[#e7e7e4] px-4 py-1.5 text-[14px] text-[#3a3a3a]">
                  {d}
                </li>
              ))}
            </ul>
          )}
        </Block>
      )}

      {(images.length > 0 || videos.length > 0) && (
        <section className="wrap rule pt-[clamp(4rem,8vw,7rem)]">
          <p className="label">The work</p>
          <div className="mt-10 space-y-6">
            {videos.map((v, k) =>
              v.type === 'youtube' || v.type === 'vimeo' ? (
                <div key={k} className="frame" style={{ aspectRatio: '16 / 9' }}>
                  <iframe src={v.src} title={v.alt ?? `Video ${k + 1}`} className="h-full w-full" allowFullScreen />
                </div>
              ) : (
                <div key={k} className="frame">
                  <video src={v.src} controls muted playsInline poster={v.thumbnail} />
                </div>
              )
            )}
            {images.map((m, k) => (
              <Reveal key={m.src}>
                <figure>
                  <div className="frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.src} alt={m.alt ?? `${shortTitle(project)} ${k + 1}`} loading="lazy" style={{ height: 'auto' }} />
                  </div>
                  {m.caption && <figcaption className="mt-4 text-[15px] text-[#6b6b6b]">{m.caption}</figcaption>}
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {project.outcome && (
        <>
          <div className="mt-[clamp(4rem,8vw,7rem)]" />
          <Block label="Result">
            <p className="t-h2 max-w-[32ch]">{project.outcome}</p>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn mt-10">
                Visit the live site ↗
              </a>
            )}
          </Block>
        </>
      )}

      <section className="wrap rule mt-[clamp(4rem,8vw,7rem)] pb-[clamp(5rem,10vw,9rem)] pt-10">
        <p className="label">Next project</p>
        <Link href={`/work/${next.slug}`} className="group mt-8 grid items-end gap-8 md:grid-cols-12">
          <span className="t-display md:col-span-6">
            {shortTitle(next)} <span className="inline-block transition-transform duration-500 group-hover:translate-x-3">→</span>
          </span>
          <span className="frame zoom block md:col-span-6" style={{ aspectRatio: '16 / 10' }}>
            {nextCover.kind === 'image' ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={nextCover.src} alt={`${shortTitle(next)} project`} loading="lazy" />
            ) : (
              <video src={nextCover.src} poster={nextCover.poster} muted loop autoPlay playsInline />
            )}
          </span>
        </Link>
      </section>
    </article>
  );
}
