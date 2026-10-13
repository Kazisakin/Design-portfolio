'use client';
import { useEffect, useRef } from 'react';

const KEY = 'dp-intro-seen';
// Marks the loader as seen before React runs, so it never flashes on a return visit.
const SKIP = `try{if(sessionStorage.getItem('${KEY}'))document.currentScript.previousElementSibling.setAttribute('data-seen','')}catch(e){}`;

// Opening screen: a 0–100 count, then five colour swatches lift away one after another.
// Plays once per visit; a click skips it.
export default function Loader() {
  const box = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el || el.hasAttribute('data-seen')) return;
    let done = false;
    let raf = 0;
    const t0 = performance.now();
    const finish = () => {
      if (done) return;
      done = true;
      if (count.current) count.current.textContent = '100';
      el.classList.add('is-out');
      try {
        sessionStorage.setItem(KEY, '1');
      } catch {}
      setTimeout(() => el.setAttribute('data-seen', ''), 1300);
    };
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / 1500);
      if (count.current) count.current.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1 && !done) raf = requestAnimationFrame(step);
      else setTimeout(finish, 200);
    };
    raf = requestAnimationFrame(step);
    el.addEventListener('click', finish);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('click', finish);
    };
  }, []);

  return (
    <>
      <div ref={box} className="dp-loader" aria-hidden="true" suppressHydrationWarning>
        <i />
        <i />
        <i />
        <i />
        <i />
        <div ref={count} className="dp-loader-count">
          0
        </div>
        <div className="dp-loader-name">
          Kazi Sakin
          <br />
          Design portfolio
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: SKIP }} />
    </>
  );
}
