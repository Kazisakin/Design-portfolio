'use client';
import { useRef } from 'react';
import { useScrollScene, ease } from './useScrollScene';

// The sentence starts blurred and comes into focus word by word, like a lens.
// Beside it, a badge of tools turns with the scroll.
const SENTENCE: [string, boolean][] = [
  ['Five', false], ['years', false], ['of', false], ['brand', true], ['identities,', true],
  ['interfaces', true], ['and', false], ['motion', true], ['for', false], ['clients', false],
  ['in', false], ['Bangladesh', false], ['and', false], ['Canada.', false],
];

export default function IntroFocus() {
  const section = useRef<HTMLElement>(null);
  const words = useRef<(HTMLSpanElement | null)[]>([]);
  const ring = useRef<SVGSVGElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useScrollScene(section, (p) => {
    const q = Math.min(1, p / 0.75) * (SENTENCE.length + 2);
    words.current.forEach((w, i) => {
      if (!w) return;
      const k = Math.min(1, Math.max(0, (q - i) / 2.2));
      w.style.filter = k >= 1 ? 'none' : `blur(${(1 - k) * 9}px)`;
      w.style.opacity = String(0.12 + k * 0.88);
    });
    if (ring.current) ring.current.style.transform = `rotate(${p * 300}deg)`;
    if (dot.current) dot.current.style.transform = `scale(${1 + ease(p) * 2.2})`;
  });

  return (
    <section ref={section} className="dp-tall h-[210vh]" data-morph="" data-bg="#ffffff" data-fg="#0e0e0e">
      <div className="dp-stage grid place-items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-[6vh] px-5 sm:px-6 md:grid-cols-[1.4fr_1fr] md:gap-[6vw]">
          <p className="dp-focus">
            {SENTENCE.map(([w, hl], i) => (
              <span key={i}>
                <span
                  ref={(n) => {
                    words.current[i] = n;
                  }}
                  className={hl ? 'w hl' : 'w'}
                >
                  {w}
                </span>{' '}
              </span>
            ))}
          </p>
          <div className="dp-badge" aria-label="Tools: Figma, After Effects, Premiere Pro, Photoshop, Illustrator, Adobe XD">
            <div ref={dot} className="dp-badge-dot" />
            <svg ref={ring} viewBox="0 0 300 300" aria-hidden="true">
              <defs>
                <path id="dp-circle" d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" />
              </defs>
              <text>
                <textPath href="#dp-circle" textLength="738" lengthAdjust="spacingAndGlyphs">
                  FIGMA · AFTER EFFECTS · PREMIERE PRO · PHOTOSHOP · ILLUSTRATOR · ADOBE XD ·
                </textPath>
              </text>
            </svg>
            <div className="dp-badge-mid">
              <div>
                <b>5+</b>
                <small>years</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
