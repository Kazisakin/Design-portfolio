'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/projects';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── Floating pill nav ─────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">

        <div
          className={`pointer-events-auto w-full max-w-3xl flex items-center justify-between px-4 sm:px-5 py-3 rounded-2xl border transition-all duration-500 ${
            scrolled
              ? 'bg-[#0d0d0d]/85 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
              : 'bg-[#0d0d0d]/60 backdrop-blur-md border-white/5'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group flex-shrink-0">
            <span className="font-display text-sm font-bold text-white group-hover:text-accent transition-colors">
              Kazi Sakin
            </span>
            <span className="text-[9px] tracking-[0.18em] text-white/35 uppercase">Designer</span>
          </Link>

          {/* Desktop links — centered pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/4 rounded-xl px-1 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-accent text-white shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                    : 'text-white/55 hover:text-white hover:bg-white/6'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={personalInfo.devPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-1.5 rounded-lg text-sm font-medium text-white/35 hover:text-white/70 hover:bg-white/6 transition-all duration-200"
            >
              Dev
              <ExternalLink size={11} className="opacity-60" />
            </a>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold bg-accent hover:bg-accent/80 text-white rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_16px_rgba(139,92,246,0.25)]"
            >
              Hire Me
            </a>

            {/* Hamburger — creative animated lines */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] group"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${open ? 'w-5 rotate-45 translate-y-[6.5px]' : 'w-5'}`} />
              <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-3.5 group-hover:w-5'}`} />
              <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${open ? 'w-5 -rotate-45 -translate-y-[6.5px]' : 'w-5'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen mobile overlay ─────────────────── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(20px)' }}
      >
        {/* Glow accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

        <nav className="flex flex-col justify-center items-center gap-2 flex-1 px-8">
          {[...navLinks, { href: personalInfo.devPortfolio, label: 'Dev Portfolio', external: true }].map((link, i) => (
            'external' in link ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-3xl font-display font-bold text-white/30 hover:text-white/60 transition-all py-3"
                style={{
                  transform: open ? 'translateY(0)' : 'translateY(20px)',
                  opacity: open ? 1 : 0,
                  transition: `transform 0.4s ease ${i * 0.07 + 0.1}s, opacity 0.4s ease ${i * 0.07 + 0.1}s`,
                }}
              >
                {link.label}
                <ExternalLink size={18} />
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-5xl font-display font-extrabold py-3 transition-all ${
                  pathname === link.href ? 'text-accent' : 'text-white hover:text-accent'
                }`}
                style={{
                  transform: open ? 'translateY(0)' : 'translateY(20px)',
                  opacity: open ? 1 : 0,
                  transition: `transform 0.4s ease ${i * 0.07 + 0.1}s, opacity 0.4s ease ${i * 0.07 + 0.1}s`,
                }}
              >
                {link.label}
              </Link>
            )
          ))}

          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => setOpen(false)}
            className="mt-6 px-8 py-4 bg-accent text-white font-semibold rounded-2xl text-base hover:bg-accent/80 transition-all hover:scale-105"
            style={{
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              opacity: open ? 1 : 0,
              transition: 'transform 0.4s ease 0.38s, opacity 0.4s ease 0.38s',
            }}
          >
            Hire Me
          </a>
        </nav>

        {/* Bottom socials */}
        <div
          className="pb-10 flex justify-center gap-6 text-white/25 text-xs tracking-widest uppercase"
          style={{
            opacity: open ? 1 : 0,
            transition: 'opacity 0.4s ease 0.45s',
          }}
        >
          <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Behance</a>
          <span>·</span>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white/60 transition-colors">Email</a>
        </div>
      </div>
    </>
  );
}
