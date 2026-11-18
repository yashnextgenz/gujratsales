import Link from "next/link";
import Logo from "./Logo";

const cols = [
  { h: "Company", links: [["/about", "About"], ["/services", "Services"], ["/products", "Products"], ["/contact", "Contact"]] },
  { h: "Solutions", links: [["/agriculture", "Napier & Organic Farming"], ["/food-processing", "Food Dehydration"], ["/machinery", "Machinery & Plants"]] },
];

export default function Footer() {
  return (
    <footer className="bg-paper-2 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pt-16 pb-10">
        <p className="font-display text-4xl md:text-6xl leading-[1.02] text-brand-900 max-w-3xl">
          From farms to <em className="text-brand-600">finished products.</em>
        </p>
        <div className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted max-w-xs">B2B solutions in agriculture, food processing and industrial technology. Ahmedabad, Gujarat.</p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="label text-muted">{c.h}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map(([href, label]) => (
                  <li key={href}><Link href={href} className="link-underline text-ink">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="label text-muted">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="tel:+919876543210" className="link-underline">+91 98765 43210</a></li>
              <li><a href="mailto:info@gujaratsales.com" className="link-underline">info@gujaratsales.com</a></li>
              <li className="text-muted">Ahmedabad, Gujarat</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted">
          <span>© 2026 Gujarat Sales</span>
          <span>Cultivation · Processing · Markets</span>
        </div>
      </div>
    </footer>
  );
}
