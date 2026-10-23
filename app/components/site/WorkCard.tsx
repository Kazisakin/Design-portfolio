import Link from 'next/link';
import type { Project } from '../../data/projects';
import { coverFor, labelFor, shortTitle } from '../../data/covers';

// One project tile: the image, then a single line of text underneath. Nothing on top of the work.
export default function WorkCard({ p, ratio = '4 / 3', large = false }: { p: Project; ratio?: string; large?: boolean }) {
  const c = coverFor(p);
  return (
    <Link href={`/work/${p.slug}`} className="group block">
      <div className="frame zoom" style={{ aspectRatio: ratio }}>
        {c.kind === 'image' ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={c.src} alt={`${shortTitle(p)} project`} loading="lazy" style={{ objectPosition: c.focus }} />
        ) : (
          <video src={c.src} poster={c.poster} muted loop autoPlay playsInline preload="metadata" aria-label={`${shortTitle(p)} project`} />
        )}
      </div>
      <div className={`flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 ${large ? 'mt-6' : 'mt-5'}`}>
        <div>
          <h3 className={large ? 't-h2' : 't-h3'}>{shortTitle(p)}</h3>
          <p className="mt-1.5 text-[15px] text-[#6b6b6b]">{p.tagline}</p>
        </div>
        <span className="order-first shrink-0 text-[14px] text-[#6b6b6b] sm:order-none sm:text-[15px]">
          {labelFor(p)} · {p.year}
        </span>
      </div>
    </Link>
  );
}
