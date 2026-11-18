import type { Metadata } from "next";
import Link from "next/link";
import { IMG, PageHero, Container, CtaBand } from "@/components/ui";

export const metadata: Metadata = { title: "Products" };

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

const categories = [
  {
    name: "Dehydrated & value-added",
    items: [
      { name: "Fruit & Vegetable Powders", desc: "Tomato, beetroot, onion, mango and more, for food brands & HoReCa.", img: u("photo-1596040033229-a9821ebd058d"), color: "#e4782c" },
      { name: "Dried Snacks & Ingredients", desc: "Crispy dehydrated fruit chips and ready-to-use ingredients.", img: u("photo-1599599810769-bcde5a160d32"), color: "#d9a441" },
    ],
  },
  {
    name: "Feed & biomass",
    items: [
      { name: "Biomass Pellets", desc: "High-calorific pellets for boilers and bioenergy applications.", img: u("photo-1611270629569-8b357cb88da9"), color: "#6b4226" },
      { name: "Animal Feed Pellets", desc: "Napier-based nutritious feed for dairy and livestock.", img: u("photo-1574323347407-f5e1ad6d020b"), color: "#4c8c2b" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Products"
        title="Made from what we grow."
        subtitle="Dehydrated ingredients, feed solutions and biomass products for B2B markets."
        image={IMG.spices}
      />
      <Container className="py-16 md:py-24 space-y-20">
        {categories.map((c, ci) => (
          <section key={c.name} className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-display text-clay">0{ci + 1}</p>
              <h2 className="font-display mt-2 text-3xl text-brand-900">{c.name}</h2>
            </div>
            <div className="lg:col-span-9 grid gap-10 sm:grid-cols-2">
              {c.items.map((p) => (
                <article key={p.name}>
                  <div className="aspect-[4/3] rounded-sm bg-cover bg-center" style={{ backgroundColor: p.color, backgroundImage: `url(${p.img})` }} />
                  <h3 className="mt-5 font-display text-2xl text-brand-900">{p.name}</h3>
                  <p className="mt-2 text-muted">{p.desc}</p>
                  <Link href="/contact" className="mt-4 inline-block link-underline font-semibold text-brand-800">
                    Bulk enquiry →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </Container>
      <CtaBand title="Looking for bulk orders?" text="Get pricing, specifications and samples for B2B and export orders." />
    </>
  );
}
