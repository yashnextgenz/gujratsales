import Link from "next/link";
import Icon from "./Icon";

// Placeholder photography — swap for your own images in /public when ready.
export const IMG = {
  field: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=70",
  farm: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=70",
  crops: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=70",
  factory: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=70",
  spices: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=70",
  grass: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1800&q=70",
};

export const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-8 ${className}`}>{children}</div>
);

/** Inner-page header: big serif title on paper, photo as a framed panel on the right. */
export function PageHero({ title, subtitle, image, kicker }: { title: string; subtitle: string; image: string; kicker?: string }) {
  return (
    <section className="border-b border-line">
      <Container className="grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          <p className="label text-brand-600">{kicker ?? "Gujarat Sales"}</p>
          <h1 className="font-display mt-5 text-[2.6rem] leading-[1.02] md:text-7xl text-brand-900">{title}</h1>
          <p className="mt-6 max-w-md text-lg text-muted">{subtitle}</p>
        </div>
        <div className="lg:col-span-6">
          <div
            className="relative grain aspect-[16/10] overflow-hidden rounded-sm bg-brand-100 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={title}
          />
        </div>
      </Container>
    </section>
  );
}

/** Numbered index row instead of floating icon cards. */
export function FeatureTiles({ items }: { items: { icon: string; label: string; href?: string }[] }) {
  return (
    <Container>
      <ul className={`grid grid-cols-2 border-b border-line ${items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
        {items.map((it, i) => {
          const inner = (
            <>
              <span className="font-display text-sm text-clay">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-6 flex items-end justify-between gap-3">
                <span className="font-semibold text-ink">{it.label}</span>
                <Icon name={it.icon} className="w-5 h-5 text-brand-600 shrink-0" />
              </span>
            </>
          );
          const cls = `flex flex-col py-6 pr-6 ${i % 2 === 1 ? "pl-6 border-l border-line" : ""} ${i > 0 ? "md:pl-6 md:border-l md:border-line" : ""} ${i > 1 ? "border-t md:border-t-0 border-line" : ""}`;
          return (
            <li key={it.label}>
              {it.href ? (
                <Link href={it.href} className={`${cls} hover:bg-paper-2 transition-colors`}>{inner}</Link>
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export function SectionTitle({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className={`label ${light ? "text-lime" : "text-brand-600"}`}>{eyebrow}</p>}
      <h2 className={`font-display mt-4 text-3xl md:text-5xl leading-[1.05] ${light ? "text-white" : "text-brand-900"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg ${light ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((t) => (
        <li key={t} className="flex items-baseline gap-4 py-3.5 text-ink">
          <span className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-clay" /> {t}
        </li>
      ))}
    </ul>
  );
}

export function Button({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "lime" | "ghost" | "ghost-light" }) {
  const styles = {
    solid: "bg-brand-800 text-white hover:bg-brand-900",
    lime: "bg-lime text-brand-900 hover:bg-white",
    ghost: "border border-brand-900/25 text-brand-900 hover:border-brand-900",
    "ghost-light": "border border-white/35 text-white hover:border-white",
  }[variant];
  return (
    <Link href={href} className={`group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles}`}>
      {children}
      <Icon name="arrow" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function CtaBand({
  title = "Have a project or bulk requirement?",
  text = "Talk to our team for sourcing, processing or plant setup. We reply within 24 hours.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-brand-900 text-white relative grain overflow-hidden">
      <Container className="relative py-20 md:py-28 grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="label text-lime">Start a conversation</p>
          <h3 className="font-display mt-5 text-4xl md:text-6xl leading-[1.02]">{title}</h3>
          <p className="mt-5 max-w-xl text-white/70 text-lg">{text}</p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
          <Button href="/contact" variant="lime">Send an enquiry</Button>
          <a href="tel:+919876543210" className="text-white/70 hover:text-white text-sm">or call +91 98765 43210</a>
        </div>
      </Container>
    </section>
  );
}

export function ServiceDetail({
  cards,
  audience,
}: {
  cards: { icon: string; title: string; text: string }[];
  audience: string[];
}) {
  return (
    <Container className="py-20 md:py-28 grid gap-14 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <p className="label text-brand-600">What we offer</p>
        <ol className="mt-6 border-t border-line">
          {cards.map((c, i) => (
            <li key={c.title} className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_1.2fr] gap-x-6 gap-y-2 border-b border-line py-7">
              <span className="font-display text-2xl text-clay">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl text-brand-900 leading-tight">{c.title}</h3>
              <p className="col-start-2 md:col-start-3 text-muted">{c.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <aside className="lg:col-span-4 h-fit lg:sticky lg:top-24 rounded-sm bg-paper-2 p-8">
        <p className="label text-brand-600">Who it&apos;s for</p>
        <ul className="mt-5 space-y-3">
          {audience.map((a) => (
            <li key={a} className="font-display text-xl text-brand-900">{a}</li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/contact">Request consultation</Button>
        </div>
      </aside>
    </Container>
  );
}
