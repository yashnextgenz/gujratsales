"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/machinery", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Only the home page has a full-bleed dark hero to sit on top of.
  const overHero = pathname === "/";

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Hide while scrolling down, reveal on scroll up.
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const transparent = overHero && !scrolled && !open;

  return (
    <>
      <header
        className={`header-enter fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,translate] duration-500 ease-out ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${
          transparent
            ? "bg-transparent"
            : "bg-paper/90 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(16,48,27,.18)]"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-6 transition-[height] duration-300 ${
            scrolled ? "h-16" : "h-[72px]"
          }`}
        >
          {/* Left: brand */}
          <div className="justify-self-start fade-down" style={{ animationDelay: "150ms" }}>
            <Logo light={transparent} />
          </div>

          {/* Centre: primary navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[15px]">
              {navLinks.map((l, i) => {
                const active = pathname.startsWith(l.href);
                return (
                  <li key={l.href} className="fade-down" style={{ animationDelay: `${250 + i * 80}ms` }}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={`group relative block px-4 py-2 transition-colors ${
                        transparent
                          ? `text-white [text-shadow:0_1px_12px_rgba(0,0,0,.55)] ${active ? "font-semibold" : "font-medium hover:text-lime"}`
                          : active ? "text-brand-900 font-semibold" : "text-muted hover:text-brand-900"
                      }`}
                    >
                      {l.label}
                      <span
                        aria-hidden
                        className={`absolute left-4 right-4 bottom-1 h-[2px] rounded-full origin-left transition-transform duration-300 ${
                          transparent ? "bg-lime" : "bg-brand-600"
                        } ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: actions */}
          <div className="justify-self-end flex items-center gap-5 fade-down" style={{ animationDelay: "700ms" }}>
            <a
              href="tel:+919876543210"
              className="phone-pulse hidden lg:inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 shadow-sm ring-1 ring-black/5 transition-colors hover:bg-lime"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
              </svg>
              +91 98765 43210
            </a>
            <button
              className={`lg:hidden -mr-2 p-2 ${transparent ? "text-white" : "text-brand-900"}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 9h16M4 15h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav aria-label="Mobile" className="menu-drop lg:hidden bg-paper px-4 pb-6 max-h-[calc(100svh-64px)] overflow-y-auto">
            {navLinks.map((l, i) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ animationDelay: `${i * 60}ms` }} className="fade-up flex items-baseline gap-4 py-4 border-b border-line">
                <span className="font-display text-sm text-clay">0{i + 1}</span>
                <span className="font-display text-2xl text-brand-900">{l.label}</span>
              </Link>
            ))}
            <a href="tel:+919876543210" className="mt-5 block rounded-full bg-white px-4 py-3 text-center font-semibold text-brand-900 ring-1 ring-black/5">
              +91 98765 43210
            </a>
          </nav>
        )}
      </header>

      {/* Spacer so inner pages don't slide under the fixed bar; home hero sits beneath it on purpose. */}
      {!overHero && <div aria-hidden className="h-[72px]" />}
    </>
  );
}
