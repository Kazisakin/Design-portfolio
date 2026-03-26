'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ExternalLink } from 'lucide-react';
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
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-accent transition-colors">
            Kazi Sakin
          </span>
          <span className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
            Designer
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? 'text-accent'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={personalInfo.devPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-accent transition-colors"
          >
            Dev Portfolio
            <ExternalLink size={13} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-5 py-2 text-sm font-semibold bg-accent hover:bg-accent-dark text-white rounded-full transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0d0d0d]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href ? 'text-accent' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={personalInfo.devPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 text-base font-medium text-white/40 hover:text-accent transition-colors"
            >
              Dev Portfolio <ExternalLink size={14} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 text-sm font-semibold bg-accent hover:bg-accent-dark text-white rounded-full transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
