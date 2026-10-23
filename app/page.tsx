import React from 'react';
import Link from 'next/link';
import { projects } from './data/projects';
import WorkCard from './components/site/WorkCard';
import Reveal from './components/ui/Reveal';

const FEATURED = ['krishivet', 'roboflight-brand'];
const MORE = ['miyabi', 'smak-skin-care', 'simplyfresh', 'bss-event-visuals', 'the-feyre', 'acc-it-club'];
const pick = (slugs: string[]) => slugs.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);

const SERVICES = [
  { title: 'Brand identity', text: 'Logos, colour and type systems, and simple guidelines that keep a brand consistent everywhere it appears.' },
  { title: 'Websites', text: 'Sites designed around the questions customers ask, then built and launched with modern web tools.' },
  { title: 'Social media and print', text: 'Campaign posts, posters and templates that stay on brand from the first announcement to the last.' },
  { title: 'Motion', text: 'Short videos and animated posts that explain an idea quickly and hold attention.' },
];

export default function HomePage() {
  return (
    <>
      {/* intro */}
      <section className="wrap pb-[clamp(4rem,9vw,8rem)] pt-[clamp(9rem,20vh,14rem)]">
        <Reveal>
          <p className="label">Kazi Sakin, designer</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="t-display mt-7 max-w-[20ch]">
            I design brand identities and websites for businesses that want to look as good as their work.
          </h1>
        </Reveal>
        <Reveal delay={0.16} className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="t-body max-w-[46ch]">
            Five years of design for clients in Canada and Bangladesh, from skincare brands and restaurants to a farm
            nutrition company and a robotics school. I also write the code, so what you approve is what ships.
          </p>
          <div className="flex gap-3">
            <a href="#work" className="btn">
              View work
            </a>
            <Link href="/about" className="btn btn-line">
              About
            </Link>
          </div>
        </Reveal>
      </section>

      {/* selected work */}
      <section id="work" className="wrap scroll-mt-24">
        <div className="rule flex items-baseline justify-between pt-8">
          <p className="label">Selected case studies</p>
          <Link href="/work" className="link text-[15px]">
            All work
          </Link>
        </div>
        <div className="mt-12 space-y-[clamp(5rem,9vw,8rem)]">
          {pick(FEATURED).map((p) => (
            <Reveal key={p.slug}>
              <WorkCard p={p} ratio="16 / 10" large />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="rule flex items-baseline justify-between pt-8">
          <p className="label">More work</p>
          <Link href="/work" className="link text-[15px]">
            All work
          </Link>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-20 md:grid-cols-2">
          {pick(MORE).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <WorkCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* services */}
      <section className="wrap section rule">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Services</p>
            <h2 className="t-h2 mt-6 max-w-[14ch]">What I can help with</h2>
          </div>
          <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:col-span-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08}>
                <p className="text-[15px] text-[#6b6b6b]">0{i + 1}</p>
                <h3 className="t-h3 mt-3">{s.title}</h3>
                <p className="t-body mt-3">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section className="wrap section rule">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">About</p>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="t-h2 max-w-[26ch]">
                I&apos;m a designer and Computer Science student at the University of New Brunswick, based in Fredericton.
              </p>
            </Reveal>
            <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
              {[
                ['5+', 'Years designing'],
                ['12', 'Published projects'],
                ['2', 'Countries served'],
                ['4', 'Disciplines'],
              ].map(([v, l]) => (
                <div key={l} className="rule pt-5">
                  <dt className="t-h2">{v}</dt>
                  <dd className="mt-2 text-[15px] text-[#6b6b6b]">{l}</dd>
                </div>
              ))}
            </dl>
            <Link href="/about" className="link mt-14">
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
