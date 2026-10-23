'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Category } from '../data/projects';
import WorkCard from './site/WorkCard';

type Filter = 'All' | Category;
const FILTERS: { key: Filter; label: string }[] = [
  { key: 'All', label: 'All' },
  { key: 'UI/UX', label: 'Identity and web' },
  { key: 'Branding', label: 'Branding' },
  { key: 'Social Media', label: 'Social media' },
  { key: 'Motion', label: 'Motion' },
];
const ORDER = ['krishivet', 'roboflight-brand', 'miyabi', 'smak-skin-care', 'simplyfresh', 'acc-eco-amica-club', 'bss-event-visuals', 'the-feyre', 'the-feyre-serum', 'sm-care', 'acc-it-club'];
const LIST = ORDER.map((s) => projects.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => !!p && !p.hidden);

export default function ProjectGrid() {
  const [active, setActive] = useState<Filter>('All');
  const shown = LIST.filter((p) => active === 'All' || p.category === active);
  return (
    <div>
      <div className="rule flex flex-wrap items-center gap-x-8 gap-y-3 pt-6" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
            className={`text-[15px] transition-colors ${active === f.key ? 'font-semibold text-ink' : 'text-[#6b6b6b] hover:text-ink'}`}
          >
            {f.label}
          </button>
        ))}
        <span className="text-[15px] text-[#6b6b6b] sm:ml-auto">{shown.length} projects</span>
      </div>
      <motion.ul layout className="mt-14 grid gap-x-8 gap-y-20 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <WorkCard p={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
