import React from 'react';
import type { Brand } from '../data/projects';

// Brand identity sheet: logo, colour palette, typography, interface elements and headline system.
// Every value here is taken from the live website, so the page shows the brand as it is actually used.

function Swatch({ name, hex, role, dark }: { name: string; hex: string; role: string; dark: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <div className="flex h-28 items-end p-4 sm:h-36" style={{ background: hex, color: dark ? '#fff' : '#0e0e0e' }}>
        <span className="font-mono text-sm font-semibold">{hex.toUpperCase()}</span>
      </div>
      <div className="p-4">
        <p className="font-semibold">{name}</p>
        <p className="mt-0.5 text-sm text-ink/60">{role}</p>
      </div>
    </div>
  );
}

const isDark = (hex: string) => {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 150;
};

export default function BrandIdentity({ brand }: { brand: Brand }) {
  const font = { fontFamily: `'${brand.font.name}', sans-serif` };
  return (
    <section className="border-t border-ink/10 bg-white" data-bg="#ffffff" data-fg="#0e0e0e">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="reveal eyebrow text-ink/50">Brand identity</p>
        <h2 className="reveal mt-3 font-display text-[clamp(40px,6vw,80px)] font-semibold leading-none tracking-[-0.03em]">
          The <span className="mark">system</span>
        </h2>
        <p className="reveal mt-5 max-w-2xl text-lg text-ink/70">{brand.summary}</p>

        {/* logo */}
        <div className="reveal mt-16 grid gap-5 md:grid-cols-[1.4fr_1fr]">
          <div className="grid min-h-[300px] place-items-center rounded-3xl p-10" style={{ background: brand.logoCards[0] }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-40 w-auto max-w-[80%] object-contain" />
          </div>
          <div className="grid min-h-[300px] place-items-center rounded-3xl p-10" style={{ background: brand.logoCards[1] }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={brand.logo} alt={`${brand.name} logo on a brand colour`} className="max-h-32 w-auto max-w-[80%] object-contain" />
          </div>
        </div>
        <p className="mt-3 text-sm text-ink/50">The logo on two of the brand&apos;s own colours.</p>

        {/* colours */}
        <h3 className="reveal mt-24 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Colour palette</h3>
        <div className="reveal mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brand.colors.map((c) => (
            <Swatch key={c.hex + c.name} {...c} dark={isDark(c.hex)} />
          ))}
        </div>

        {/* typography */}
        <h3 className="reveal mt-24 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Typography</h3>
        <div className="reveal mt-6 grid gap-5 lg:grid-cols-[1fr_1.6fr]">
          <div className="rounded-3xl bg-mist p-8" style={font}>
            <p className="text-[120px] font-semibold leading-none tracking-tight">Aa</p>
            <p className="mt-6 text-2xl font-semibold">{brand.font.name}</p>
            <p className="mt-1 text-ink/60">{brand.font.note}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-lg">
              {brand.font.weights.map((w) => (
                <span key={w} style={{ fontWeight: w }}>
                  {w}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-3xl p-8 sm:p-12" style={{ background: brand.logoBg, ...font }}>
            <p className="text-[clamp(34px,4.6vw,64px)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
              {brand.font.sample[0]}
              <br />
              <span style={{ color: brand.font.sampleAccent }}>{brand.font.sample[1]}</span>
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">{brand.font.body}</p>
          </div>
        </div>

        {/* interface elements */}
        <h3 className="reveal mt-24 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Interface elements</h3>
        <div className="reveal mt-6 grid gap-5 md:grid-cols-2">
          <div className="flex flex-wrap items-center gap-4 rounded-3xl bg-mist p-8" style={font}>
            {brand.buttons.filter((b) => !b.onDark).map((b) => (
              <span key={b.label} className="rounded-full px-6 py-3 text-[15px] font-semibold" style={{ background: b.bg, color: b.fg, border: b.border ? `1.5px solid ${b.border}` : undefined }}>
                {b.label} →
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-3xl p-8" style={{ background: brand.logoBg, ...font }}>
            {brand.buttons.filter((b) => b.onDark).map((b) => (
              <span key={b.label} className="rounded-full px-6 py-3 text-[15px] font-semibold" style={{ background: b.bg, color: b.fg, border: b.border ? `1.5px solid ${b.border}` : undefined }}>
                {b.label} →
              </span>
            ))}
          </div>
        </div>

        {/* headline system */}
        <h3 className="reveal mt-24 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Headline system</h3>
        <p className="reveal mt-3 max-w-2xl text-ink/70">{brand.headlineNote}</p>
        <ul className="reveal mt-6" style={font}>
          {brand.headlines.map(([a, b]) => (
            <li key={a} className="border-t border-ink/10 py-5 text-[clamp(22px,3vw,40px)] font-semibold leading-tight tracking-[-0.02em] last:border-b">
              {a} <span style={{ color: brand.headlineAccent }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
