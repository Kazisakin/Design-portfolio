'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo } from '../data/projects';

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
];

// Quiet header: name on the left, a few links on the right. A hairline appears once the page scrolls.
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md transition-[box-shadow] duration-300 ${scrolled ? 'shadow-[0_1px_0_#e7e7e4]' : ''}`}
      >
        <div className="wrap flex h-[72px] items-center justify-between">
          <Link href="/" className="text-[17px] font-semibold tracking-[-0.01em]">
            Kazi Sakin
          </Link>
          <nav className="hidden items-center gap-9 text-[15px] md:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={`transition-opacity hover:opacity-50 ${pathname.startsWith(l.href) ? 'font-semibold' : ''}`}>
                {l.label}
              </Link>
            ))}
            <a href={personalInfo.devPortfolio} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50">
              Dev portfolio ↗
            </a>
            <a href={`mailto:${personalInfo.email}`} className="link">
              Get in touch
            </a>
          </nav>
          <button
            type="button"
            className="-mr-2 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`block h-[1.5px] w-6 bg-ink transition-transform ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] w-6 bg-ink transition-transform ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white pt-[72px] transition-opacity duration-300 md:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <nav className="wrap flex flex-col pt-10">
          {[{ href: '/', label: 'Home' }, ...navLinks].map((l) => (
            <Link key={l.href} href={l.href} className="border-b border-[#e7e7e4] py-5 text-3xl font-medium tracking-[-0.02em]">
              {l.label}
            </Link>
          ))}
          <a href={personalInfo.devPortfolio} target="_blank" rel="noopener noreferrer" className="border-b border-[#e7e7e4] py-5 text-3xl font-medium tracking-[-0.02em]">
            Dev portfolio ↗
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn mt-10 w-fit">
            Get in touch
          </a>
        </nav>
      </div>
    </>
  );
}
