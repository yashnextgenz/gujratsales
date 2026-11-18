import Link from "next/link";
import Icon from "@/components/Icon";
import { IMG, Container, CtaBand, SectionTitle, Button } from "@/components/ui";

const pillars = [
  { n: "01", title: "Agriculture", sub: "Napier grass & biomass", href: "/agriculture" },
  { n: "02", title: "Food Processing", sub: "Dehydration & freeze drying", href: "/food-processing" },
  { n: "03", title: "Industrial B2B", sub: "Machinery & project support", href: "/machinery" },
];

const chain = [
  { icon: "sprout", title: "Cultivation", sub: "Napier & organic farming" },
  { icon: "gear", title: "Processing", sub: "Dehydration & freeze drying" },
  { icon: "box", title: "Products", sub: "Powders, snacks, ingredients" },
  { icon: "handshake", title: "Markets", sub: "Distributors, brands, exporters" },
];

const offerings = [
  { img: IMG.grass, tag: "Agriculture", title: "Napier & organic farming", text: "High-yield Bajwa-6 Napier, farm development and organic soil solutions.", href: "/agriculture" },
  { img: IMG.spices, tag: "Food processing", title: "Food dehydration", text: "Heat-pump and freeze-drying for fruits, vegetables, spices and herbs.", href: "/food-processing" },
  { img: IMG.factory, tag: "Industrial", title: "Machinery & plants", text: "Dehydrators, freeze-dryers and complete plant setup with project support.", href: "/machinery" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white min-h-[100svh] flex">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG.farm})` }} />
        {/* Readability scrims: dark on the text side and at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2414]/95 via-[#0b2414]/75 to-[#0b2414]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2414] via-transparent to-[#0b2414]/40" />
        <div className="absolute inset-0 grain" />
        <Container className="relative w-full flex flex-col pt-28 md:pt-32 pb-6 [text-shadow:0_2px_24px_rgba(0,0,0,.35)]">
          <div className="my-auto max-w-3xl">
            <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[5.2rem] text-white">
              From farms to <em className="text-lime font-normal">finished</em> products.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/90">
              One partner across the value chain: we grow the raw material, process it with modern technology, and
              connect the output to the right buyers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 [text-shadow:none]">
              <Button href="/services" variant="lime">Explore solutions</Button>
              <Button href="/contact" variant="ghost-light">Get a quote</Button>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 border-t border-white/25">
            {pillars.map((p, i) => (
              <Link
                key={p.title}
                href={p.href}
                className={`group flex items-center justify-between gap-4 py-5 ${i > 0 ? "border-t md:border-t-0 md:border-l border-white/25 md:pl-8" : ""} ${i < pillars.length - 1 ? "md:pr-8" : ""}`}
              >
                <span>
                  <span className="font-display text-sm text-lime">{p.n}</span>
                  <span className="mt-1 block font-display text-xl md:text-2xl">{p.title}</span>
                  <span className="block text-sm text-white/75">{p.sub}</span>
                </span>
                <Icon name="arrow" className="w-5 h-5 text-white/50 transition group-hover:text-lime group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Value chain */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionTitle eyebrow="How we work" title="Four links in one chain, handled by one team." />
            </div>
            <p className="lg:col-span-5 text-lg text-muted">
              Most businesses juggle a separate farmer, processor, machine supplier and trader. We bring them under one
              roof, so quality and accountability stay in one place.
            </p>
          </div>

          <ol className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {chain.map((c, i) => (
              <li key={c.title} className="bg-paper p-8 flex flex-col min-h-64">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl text-brand-100" style={{ WebkitTextStroke: "1px var(--color-brand-600)" }}>
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-auto pt-10 font-display text-3xl text-brand-900">{c.title}</h3>
                <p className="mt-1 text-muted">{c.sub}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Offerings */}
      <section className="bg-paper-2 py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionTitle eyebrow="Key offerings" title="What we do for your business" />
            <Link href="/services" className="link-underline font-semibold text-brand-800 shrink-0">All 7 services →</Link>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {offerings.map((o) => (
              <Link key={o.title} href={o.href} className="group block">
                <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-brand-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url(${o.img})` }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-brand-900">{o.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-brand-900 flex items-center justify-between gap-3">
                  {o.title}
                  <Icon name="arrow" className="w-5 h-5 text-clay transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-muted">{o.text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Statement + numbers */}
      <section className="py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-12">
          <blockquote className="lg:col-span-7 font-display text-3xl md:text-[2.6rem] leading-[1.15] text-brand-900">
            “We plan every project for real-world yield, capacity and returns, not brochures.”
            <footer className="mt-6 font-sans text-sm text-muted">Gujarat Sales team</footer>
          </blockquote>
          <dl className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-0 lg:divide-y lg:divide-line lg:border-y lg:border-line">
            {[
              ["7", "business verticals"],
              ["100+", "partners served"],
              ["24h", "enquiry response"],
            ].map(([n, l]) => (
              <div key={l} className="lg:flex lg:items-baseline lg:justify-between lg:py-5">
                <dt className="font-display text-4xl md:text-5xl text-brand-800">{n}</dt>
                <dd className="mt-1 text-sm text-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
