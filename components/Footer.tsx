import Link from "next/link";
import Logo from "./Logo";
import Reveal, { BackToTop } from "./Reveal";

const cols = [
  { h: "Company", links: [["/about", "About"], ["/services", "Services"], ["/products", "Products"], ["/contact", "Contact"]] },
  { h: "Solutions", links: [["/agriculture", "Napier & Organic Farming"], ["/food-processing", "Food Dehydration"], ["/machinery", "Machinery & Plants"]] },
];

export default function Footer() {
  return (
    <footer className="bg-paper-2 border-t border-line overflow-hidden">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-8 pt-16 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="reveal-item" style={{ transitionDelay: "350ms" }}>
            <Logo />
            <p className="mt-4 text-sm text-muted max-w-xs">B2B solutions in agriculture, food processing and industrial technology. Ahmedabad, Gujarat.</p>
          </div>
          {cols.map((c, i) => (
            <div key={c.h} className="reveal-item" style={{ transitionDelay: `${450 + i * 100}ms` }}>
              <p className="label text-muted">{c.h}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map(([href, label]) => (
                  <li key={href}><Link href={href} className="link-underline text-ink">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="reveal-item" style={{ transitionDelay: "650ms" }}>
            <p className="label text-muted">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="tel:+919876543210" className="link-underline">+91 98765 43210</a></li>
              <li><a href="mailto:info@gujaratsales.com" className="link-underline">info@gujaratsales.com</a></li>
              <li className="text-muted">Ahmedabad, Gujarat</li>
            </ul>
          </div>
        </div>
        <div className="reveal-item mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-muted" style={{ transitionDelay: "750ms" }}>
          <span>© 2026 Gujarat Sales</span>
        </div>
      </Reveal>
      <BackToTop />
    </footer>
  );
}
