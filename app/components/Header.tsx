'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo } from '../data/projects';

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
];

// Minimal header. It uses a "difference" blend, so it stays readable on cream, ink and orange.
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
        style={{
          color: open ? '#ffffff' : 'var(--head-fg, #0e0e0e)',
          backgroundColor: scrolled && !open ? 'color-mix(in srgb, var(--head-bg, #ffffff) 90%, transparent)' : 'transparent',
          backdropFilter: scrolled && !open ? 'blur(10px)' : 'none',
        }}
      >
        <div className={`flex items-center justify-between px-5 transition-[padding] duration-300 sm:px-8 ${scrolled ? 'py-3' : 'py-5'}`}>
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            Kazi Sakin
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={`hover:opacity-60 ${pathname.startsWith(l.href) ? 'underline underline-offset-4' : ''}`}>
                {l.label}
              </Link>
            ))}
            <a href={personalInfo.devPortfolio} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
              Dev portfolio ↗
            </a>
            <a href={`mailto:${personalInfo.email}`} className="rounded-full border-2 border-current px-4 py-1.5 transition-colors hover:bg-[var(--head-fg)] hover:text-[var(--head-bg)]">
              Contact
            </a>
          </nav>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`block h-[2px] w-6 bg-current transition-transform ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-6 bg-current transition-transform ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 text-cream transition-opacity duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-3">
          {[{ href: '/', label: 'Home' }, ...navLinks].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-5xl font-semibold ${pathname === l.href ? 'text-accent' : ''}`}
              style={{ transform: open ? 'none' : 'translateY(20px)', opacity: open ? 1 : 0, transition: `all .4s ease ${0.08 + i * 0.06}s` }}
            >
              {l.label}
            </Link>
          ))}
          <a href={personalInfo.devPortfolio} target="_blank" rel="noopener noreferrer" className="mt-4 text-xl font-semibold opacity-70">
            Dev portfolio ↗
          </a>
          <a href={`mailto:${personalInfo.email}`} className="mt-6 inline-flex w-fit rounded-full bg-accent px-7 py-3.5 font-semibold text-ink">
            Get in touch
          </a>
        </nav>
      </div>
    </>
  );
}
