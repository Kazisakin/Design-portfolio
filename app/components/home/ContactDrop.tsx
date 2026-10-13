'use client';
import { useMemo, useRef } from 'react';
import { personalInfo } from '../../data/projects';
import { useScrollScene, clamp, easeOut } from './useScrollScene';

const LINES = ["Let's", 'collaborate.'];

// Contact: the letters fall into place as you scroll. The two round buttons lean toward the cursor.
export default function ContactDrop() {
  const section = useRef<HTMLElement>(null);
  const letters = useRef<(HTMLSpanElement | null)[]>([]);
  const cta = useRef<HTMLDivElement>(null);
  // fixed "random" spin and delay per letter, so server and browser render the same thing
  const motion = useMemo(
    () => LINES.join('').split('').map((_, i) => ({ spin: ((i * 37) % 90) - 45, delay: ((i * 53) % 35) / 100 })),
    []
  );

  useScrollScene(section, (p) => {
    letters.current.forEach((s, i) => {
      if (!s) return;
      const m = motion[i];
      const e = easeOut(clamp((p - m.delay * 0.8) / 0.45));
      s.style.transform = `translateY(${(1 - e) * -110}vh) rotate(${(1 - e) * m.spin}deg)`;
    });
    if (cta.current) {
      const c = clamp((p - 0.5) / 0.2);
      cta.current.style.opacity = String(c);
      cta.current.style.transform = `translateY(${(1 - c) * 24}px)`;
    }
  });

  const magnet = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const b = e.currentTarget;
    const r = b.getBoundingClientRect();
    b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.35}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
  };
  const release = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = '';
  };

  let k = 0;
  return (
    <section ref={section} className="dp-tall h-[210vh] bg-accent" data-morph="" data-bg="#d4f760" data-fg="#0e0e0e">
      <div className="dp-stage flex flex-col items-center justify-center px-5 text-center">
        <h2 className="dp-drop" aria-label="Let's collaborate.">
          {LINES.map((line) => (
            <span key={line} className="block" aria-hidden="true">
              {line.split('').map((ch) => {
                const idx = k++;
                return (
                  <span
                    key={idx}
                    className="ch"
                    ref={(n) => {
                      letters.current[idx] = n;
                    }}
                  >
                    {ch}
                  </span>
                );
              })}
            </span>
          ))}
        </h2>
        <div ref={cta} className="mt-[6vh] flex flex-col items-center gap-6 opacity-0">
          <p className="max-w-md text-base font-medium">
            Available for freelance work and collaborations. Tell me a little about your project and what you have in mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${personalInfo.email}`} className="dp-mag" onMouseMove={magnet} onMouseLeave={release}>
              Get in touch
            </a>
            <a
              href={personalInfo.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="dp-mag is-outline"
              onMouseMove={magnet}
              onMouseLeave={release}
            >
              Behance ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
