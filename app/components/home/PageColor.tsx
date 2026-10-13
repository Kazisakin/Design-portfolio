'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Sections set their colours with data-bg / data-fg.
// - The page background follows the section in the middle of the screen (used on the home page).
// - The header text follows the section right under the header, so it is readable everywhere.
export default function PageColor() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body.style;
    let raf = 0;
    let bgKey = '';
    let headKey = '';
    const at = (y: number) => {
      // the innermost section wins (nested sections come later in document order)
      let hit: HTMLElement | null = null;
      document.querySelectorAll<HTMLElement>('[data-bg]').forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) hit = s;
      });
      return hit as HTMLElement | null;
    };
    const update = () => {
      raf = 0;
      const mid = at(window.innerHeight * 0.5);
      if (mid && mid.closest('[data-morph]')) {
        const key = `${mid.dataset.bg}|${mid.dataset.fg}`;
        if (key !== bgKey) {
          bgKey = key;
          body.setProperty('--page-bg', mid.dataset.bg ?? '');
          body.setProperty('--page-fg', mid.dataset.fg ?? '');
        }
      } else if (bgKey) {
        bgKey = '';
        body.removeProperty('--page-bg');
        body.removeProperty('--page-fg');
      }
      const top = at(36);
      const fg = top?.dataset.fg ?? '#0e0e0e';
      const bg = top?.dataset.bg ?? '#ffffff';
      if (fg + bg !== headKey) {
        headKey = fg + bg;
        body.setProperty('--head-fg', fg);
        body.setProperty('--head-bg', bg);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    const late = setTimeout(update, 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(late);
      body.removeProperty('--page-bg');
      body.removeProperty('--page-fg');
    };
  }, [pathname]);
  return null;
}
