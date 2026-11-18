import type { Metadata } from "next";
import { IMG, PageHero, Container, SectionTitle, CheckList, CtaBand } from "@/components/ui";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Bridging agriculture, technology and markets."
        subtitle="An Ahmedabad-based B2B partner, rooted in the field and built for growth."
        image={IMG.field}
      />

      <Container className="py-24 md:py-32 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle eyebrow="Our story" title="Rooted in Gujarat, built for B2B growth." />
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted">
          <p className="first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-brand-800">
            Gujarat Sales started by helping farmers adopt high-yield Napier cultivation, and grew into an end-to-end
            partner, from raw material and processing technology to finished value-added products and market linkages.
          </p>
          <p>
            Today we work with farmers, FPOs, food processors, agri-entrepreneurs, factories and investors to build
            profitable, sustainable value chains.
          </p>
        </div>
      </Container>

      <section className="bg-paper-2 py-24 md:py-32">
        <Container>
          <dl className="grid gap-px bg-line border border-line sm:grid-cols-2">
            {[
              { t: "Mission", d: "Make modern agri-processing technology accessible and profitable for every partner." },
              { t: "Vision", d: "A connected value chain where Gujarat's farm output reaches national and export markets." },
              { t: "Our role", d: "Advisor, supplier and integrator across cultivation, processing and markets." },
              { t: "Industry focus", d: "Agriculture, food dehydration, biomass & bioenergy, and industrial machinery." },
            ].map((c) => (
              <div key={c.t} className="bg-paper-2 p-8 md:p-10">
                <dt className="label text-clay">{c.t}</dt>
                <dd className="mt-4 font-display text-2xl md:text-3xl leading-snug text-brand-900">{c.d}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container className="py-24 md:py-32 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle eyebrow="Why partners choose us" title="Field experience, technical know-how." />
          <dl className="mt-10 grid grid-cols-3 gap-6">
            {[["7", "verticals"], ["100+", "partners"], ["24h", "response"]].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-4xl text-brand-800">{n}</dt>
                <dd className="text-sm text-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-7 lg:pt-8">
          <CheckList
            items={[
              "One partner across the full value chain",
              "Proven technology for dehydration & freeze-drying",
              "Hands-on support from planning to commissioning",
              "Strong network of buyers and distributors",
            ]}
          />
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
