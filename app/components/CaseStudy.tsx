import React from 'react';
import Link from 'next/link';
import type { CaseStudy as Case } from '../data/cases';
import { cases } from '../data/cases';
import Reveal from './ui/Reveal';
import ParallaxImage from './ui/ParallaxImage';

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

function Chapter({ n, title, text }: { n: string; title: string; text?: string }) {
  return (
    <div className="wrap rule">
      <div className="grid gap-6 pb-12 pt-[clamp(4rem,8vw,7rem)] lg:grid-cols-12">
        <p className="label lg:col-span-4">{n}</p>
        <div className="lg:col-span-8">
          <h2 className="t-h1">{title}</h2>
          {text && <p className="t-body mt-6 max-w-[56ch]">{text}</p>}
        </div>
      </div>
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-[15px] text-[#6b6b6b]">{children}</p>;
}

export default function CaseStudy({ slug }: { slug: string }) {
  const c: Case = cases[slug];
  const keys = Object.keys(cases);
  const next = cases[keys[(keys.indexOf(slug) + 1) % keys.length]];

  return (
    <article>
      {/* title */}
      <header className="wrap pb-[clamp(3rem,6vw,5rem)] pt-[clamp(8rem,16vh,11rem)]">
        <Reveal>
          <Link href="/work" className="text-[15px] text-[#6b6b6b] hover:text-ink">
            ← Work
          </Link>
          <p className="label mt-12">{c.kind}</p>
          <h1 className="t-display mt-6">{c.name}</h1>
          <p className="t-lead mt-6 max-w-[40ch] text-[#3a3a3a]">{c.intro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[#e7e7e4] pt-8 lg:grid-cols-4">
            <div>
              <dt className="label">Client</dt>
              <dd className="mt-2">{c.client}</dd>
            </div>
            <div>
              <dt className="label">Role</dt>
              <dd className="mt-2">{c.role}</dd>
            </div>
            <div>
              <dt className="label">Year</dt>
              <dd className="mt-2">{c.year}</dd>
            </div>
            <div>
              <dt className="label">Live site</dt>
              <dd className="mt-2">
                <a href={c.liveUrl} target="_blank" rel="noopener noreferrer" className="link">
                  {c.liveLabel} ↗
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </header>

      <div className="wrap">
        <ParallaxImage src={c.hero} alt={`${c.name} website on a laptop`} ratio="3 / 2" priority />
      </div>

      {/* story */}
      <div className="mt-[clamp(4rem,8vw,7rem)]" />
      <Block label="The challenge">
        <Reveal>
          <p className="t-h2 max-w-[30ch]">{c.challenge}</p>
        </Reveal>
      </Block>
      <Block label="The idea">
        <Reveal>
          <p className="t-lead max-w-[48ch]">{c.idea}</p>
        </Reveal>
      </Block>
      <Block label="Approach">
        <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {c.approach.map((a, i) => (
            <Reveal as="li" key={i} delay={(i % 2) * 0.08}>
              <p className="text-[15px] text-[#6b6b6b]">0{i + 1}</p>
              <p className="t-body mt-3 text-ink">{a}</p>
            </Reveal>
          ))}
        </ol>
        <ul className="mt-14 flex flex-wrap gap-2">
          {c.services.map((s) => (
            <li key={s} className="rounded-full border border-[#e7e7e4] px-4 py-1.5 text-[14px] text-[#3a3a3a]">
              {s}
            </li>
          ))}
        </ul>
      </Block>

      {/* identity */}
      <Chapter n="01" title="Identity" text={c.logo.note} />
      <div className="wrap grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="frame grid place-items-center" style={{ aspectRatio: '4 / 3', background: c.logo.lightBg }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.logo.src}
              alt={`${c.name} logo on a light background`}
              style={{ width: '46%', height: 'auto', objectFit: 'contain', filter: c.logo.darkenOnLight ? 'brightness(0)' : undefined }}
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="frame grid place-items-center" style={{ aspectRatio: '4 / 3', background: c.logo.darkBg }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.logo.src}
              alt={`${c.name} logo on a dark background`}
              style={{ width: '46%', height: 'auto', objectFit: 'contain', filter: c.logo.invertOnDark ? 'brightness(0) invert(1)' : undefined }}
            />
          </div>
        </Reveal>
      </div>

      {/* colour */}
      <div className="wrap mt-[clamp(4rem,8vw,7rem)]">
        <div className="grid gap-6 pb-10 lg:grid-cols-12">
          <p className="label lg:col-span-4">Colour</p>
          <p className="t-body max-w-[52ch] lg:col-span-8">{c.paletteNote}</p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {c.palette.map((p, i) => (
            <Reveal key={p.hex} delay={i * 0.05}>
              <div className="rounded-md" style={{ background: p.hex, aspectRatio: '3 / 4', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }} />
              <p className="mt-4 font-medium">{p.name}</p>
              <p className="text-[14px] uppercase text-[#6b6b6b]">{p.hex}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* typography */}
      <div className="wrap mt-[clamp(4rem,8vw,7rem)]">
        <div className="grid gap-6 pb-10 lg:grid-cols-12">
          <p className="label lg:col-span-4">Typography</p>
          <p className="t-body max-w-[52ch] lg:col-span-8">{c.type.note}</p>
        </div>
        <Reveal>
          <div className="grid gap-12 rounded-md p-[clamp(2rem,6vw,5rem)] md:grid-cols-12" style={{ background: c.tint }}>
            <div className="md:col-span-4">
              <p className="text-[clamp(6rem,14vw,11rem)] font-medium leading-[0.8] tracking-[-0.05em]">Aa</p>
              <p className="mt-8 t-h3">{c.type.family}</p>
              <p className="mt-2 text-[15px] text-[#6b6b6b]">Regular, Medium, Semibold, Bold</p>
            </div>
            <div className="flex flex-col justify-end md:col-span-8">
              <p className="text-[clamp(2rem,4.4vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                {c.type.sample[0]}
                <br />
                <span style={{ color: c.type.accent }}>{c.type.sample[1]}</span>
              </p>
              <p className="mt-8 max-w-[44ch] text-[15px] leading-relaxed text-[#3a3a3a]">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* brand-specific chapters */}
      {c.chapters.map((ch, ci) => (
        <React.Fragment key={ch.title}>
          <Chapter n={`0${ci + 2}`} title={ch.title} text={ch.text} />
          <div className="wrap space-y-6">
            {ch.rows.map((row, ri) => (
              <div key={ri} className={row.length > 1 ? 'grid gap-6 md:grid-cols-2' : ''}>
                {row.map((shot, si) => (
                  <Reveal key={shot.src} delay={si * 0.08}>
                    <ParallaxImage src={shot.src} alt={shot.alt} ratio={shot.ratio} />
                    <Caption>{shot.caption}</Caption>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}

      {/* website */}
      <Chapter n={`0${c.chapters.length + 2}`} title="Website" text="Designed in Figma and built with Next.js and Tailwind CSS. Every page works from phone to desktop." />
      <div className="wrap">
        <Reveal>
          <ParallaxImage ratio="3 / 2" src={c.laptop} alt={`${c.name} website on a laptop`} />
        </Reveal>
        <div className="mt-[clamp(4rem,8vw,7rem)] grid gap-x-8 gap-y-16 md:grid-cols-2">
          {c.screens.map((s, i) => (
            <Reveal key={s.src} delay={(i % 2) * 0.08}>
              <div className="browser">
                <div className="browser-bar">
                  <i />
                  <i />
                  <i />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={`${c.name} ${s.title}`} loading="lazy" />
              </div>
              <h3 className="t-h3 mt-6">{s.title}</h3>
              <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-[#6b6b6b]">{s.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-[clamp(4rem,8vw,7rem)] grid gap-6 md:grid-cols-2">
          {c.devices.map((d, i) => (
            <Reveal key={d.src} delay={i * 0.08}>
              <ParallaxImage src={d.src} alt={d.alt} ratio={d.ratio} />
              <Caption>{d.caption}</Caption>
            </Reveal>
          ))}
        </div>
      </div>

      {/* results */}
      <div className="mt-[clamp(4rem,8vw,7rem)]" />
      <Block label="Results">
        <dl className="grid grid-cols-3 gap-8">
          {c.stats.map((s) => (
            <div key={s.label}>
              <dt className="t-h1">{s.value}</dt>
              <dd className="mt-3 text-[15px] text-[#6b6b6b]">{s.label}</dd>
            </div>
          ))}
        </dl>
        <p className="t-body mt-14 max-w-[56ch]">{c.outcome}</p>
        <p className="mt-4 text-[14px] text-[#6b6b6b]">Mockup photography from Unsplash.</p>
        <a href={c.liveUrl} target="_blank" rel="noopener noreferrer" className="btn mt-10">
          Visit {c.liveLabel} ↗
        </a>
      </Block>

      {/* next */}
      <section className="wrap rule pb-[clamp(5rem,10vw,9rem)] pt-10">
        <p className="label">Next case study</p>
        <Link href={`/work/${next.slug}`} className="group mt-8 grid items-end gap-8 md:grid-cols-12">
          <span className="t-display md:col-span-6">
            {next.name} <span className="inline-block transition-transform duration-500 group-hover:translate-x-3">→</span>
          </span>
          <span className="frame zoom block md:col-span-6" style={{ aspectRatio: '16 / 10' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={next.hero} alt={`${next.name} case study`} loading="lazy" />
          </span>
        </Link>
      </section>
    </article>
  );
}
