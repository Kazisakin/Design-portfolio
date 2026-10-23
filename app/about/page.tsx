import React from 'react';
import { personalInfo, designTools } from '../data/projects';
import Reveal from '../components/ui/Reveal';

export const metadata = {
  title: 'About — Kazi Sakin Design',
  description: 'Kazi Mostofa Sakin is a designer and Computer Science student at the University of New Brunswick.',
};

const services = [
  { title: 'Brand identity', desc: 'Logos, colour palettes, typography and guidelines that give a brand a clear, consistent look.' },
  { title: 'UI/UX and websites', desc: 'Wireframes, prototypes and interfaces in Figma, built with Next.js and Tailwind CSS.' },
  { title: 'Social media design', desc: 'Posts, stories and campaign templates for Instagram, Facebook and LinkedIn.' },
  { title: 'Motion graphics', desc: 'Animated logos, kinetic type and short promotional videos in After Effects and Premiere Pro.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="wrap pb-[clamp(4rem,9vw,8rem)] pt-[clamp(9rem,18vh,12rem)]">
        <Reveal>
          <p className="label">About</p>
          <h1 className="t-display mt-7 max-w-[18ch]">A designer who also writes the code.</h1>
        </Reveal>
      </section>

      <section className="wrap rule">
        <div className="grid gap-12 py-[clamp(4rem,8vw,7rem)] lg:grid-cols-12">
          <p className="label lg:col-span-4">Background</p>
          <Reveal className="t-body space-y-6 lg:col-span-7">
            <p className="t-lead text-ink">
              I&apos;m Kazi Mostofa Sakin, a fourth-year Computer Science student at the University of New Brunswick. I started
              designing before I started coding, and the two have grown together ever since.
            </p>
            <p>
              Over the past five years I have worked on brand identities, social media campaigns, motion graphics and websites
              for skincare brands, restaurants, student organisations and education programs in Bangladesh and Canada.
            </p>
            <p>
              Because I also build software, I design with the final product in mind: layouts that are practical to develop,
              assets that are ready to hand off, and interfaces that work on every screen.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href={`mailto:${personalInfo.email}`} className="btn">
                Email me
              </a>
              <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                Behance ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="wrap rule">
        <div className="grid gap-12 py-[clamp(4rem,8vw,7rem)] lg:grid-cols-12">
          <p className="label lg:col-span-4">Services</p>
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08}>
                <p className="text-[15px] text-[#6b6b6b]">0{i + 1}</p>
                <h3 className="t-h3 mt-3">{s.title}</h3>
                <p className="t-body mt-3">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap rule">
        <div className="grid gap-12 py-[clamp(4rem,8vw,7rem)] lg:grid-cols-12">
          <p className="label lg:col-span-4">Tools</p>
          <ul className="lg:col-span-8">
            {designTools.map((t) => (
              <li key={t.name} className="flex items-baseline justify-between border-b border-[#e7e7e4] py-5 first:border-t">
                <span className="t-h3">{t.name}</span>
                <span className="text-[15px] text-[#6b6b6b]">{t.category}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap rule">
        <div className="grid gap-12 py-[clamp(4rem,8vw,7rem)] lg:grid-cols-12">
          <p className="label lg:col-span-4">Development</p>
          <div className="lg:col-span-8">
            <p className="t-h2 max-w-[24ch]">I also build full-stack web applications, test software and work on machine learning.</p>
            <a href={personalInfo.devPortfolio} target="_blank" rel="noopener noreferrer" className="link mt-10">
              See my development portfolio ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
