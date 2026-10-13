'use client';
import { motion } from 'framer-motion';
import { EASE, Heading } from './shared';

const SERVICES = [
  {
    name: 'Brand identity',
    text: 'Logos, colour and type systems, and guidelines that keep a brand consistent everywhere it appears.',
    tools: 'Illustrator · Photoshop',
  },
  {
    name: 'UI/UX and websites',
    text: 'Interfaces designed around real questions people ask, then built and shipped with modern web tools.',
    tools: 'Figma · Next.js · Tailwind CSS',
  },
  {
    name: 'Motion',
    text: 'Short videos, titles and animated posts that explain an idea quickly and hold attention.',
    tools: 'After Effects · Premiere Pro',
  },
  {
    name: 'Social media and print',
    text: 'Campaigns, posters and post templates that stay on brand from the first announcement to the last.',
    tools: 'Photoshop · Illustrator',
  },
];

// Each row flips up from a flat plane as it enters, and fills with lime on hover.
export default function Services() {
  return (
    <section className="bg-ink py-24 text-cream md:py-32" data-bg="#0e0e0e" data-fg="#ffffff">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow text-cream/60">What I do</p>
            <Heading a="One designer," b="the whole picture." mark={false} className="mt-5 [&_span_span]:text-accent" />
          </div>
          <p className="max-w-md leading-relaxed text-cream/65 md:justify-self-end">
            Because I design and build, the identity, the interface and the code stay in agreement. Nothing is lost
            between hand-offs.
          </p>
        </div>
        <ol className="mt-16 border-t border-cream/15" style={{ perspective: '1200px' }}>
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.name}
              className="sv-row"
              initial={{ rotateX: -75, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
              style={{ transformOrigin: '50% 0%' }}
            >
              <span className="sv-n">0{i + 1}</span>
              <h3 className="sv-name">{s.name}</h3>
              <p className="sv-text">{s.text}</p>
              <p className="sv-tools">{s.tools}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
