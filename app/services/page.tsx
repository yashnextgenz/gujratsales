import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { IMG, PageHero, Container, CtaBand } from "@/components/ui";

export const metadata: Metadata = { title: "Services & Solutions" };

const services = [
  { title: "Napier & Organic Farming", text: "Planting material, farm guidance and organic inputs for high-yield cultivation.", target: "Farmers, FPOs, landholders", href: "/agriculture" },
  { title: "Animal Feed & Fodder", text: "Nutritious Napier-based green fodder and feed pellets for dairies and livestock.", target: "Dairies, gaushalas, feed traders", href: "/products" },
  { title: "Biomass & Bioenergy", text: "Biomass pellets and feedstock supply for boilers and bioenergy projects.", target: "Industries, CBG & energy plants", href: "/products" },
  { title: "Food Dehydration", text: "Heat-pump and freeze-drying for fruits, vegetables, spices and herbs.", target: "Food processors, agri entrepreneurs", href: "/food-processing" },
  { title: "Machinery & Plant Solutions", text: "Dehydrators, freeze-dryers and complete processing plant setup.", target: "Factories & investors", href: "/machinery" },
  { title: "Project & Market Linkages", text: "Project coordination and buyer connections with brands, distributors and exporters.", target: "Producers & brands", href: "/contact" },
  { title: "Value-Added Products", text: "Fruit & vegetable powders, dried snacks and food ingredients for B2B supply.", target: "Food brands, HoReCa, exporters", href: "/products" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services & solutions"
        title="Seven verticals, one partner."
        subtitle="End-to-end support from cultivation to market development."
        image={IMG.crops}
      />
      <Container className="py-16 md:py-24">
        <ol className="border-t border-ink/80">
          {services.map((s, i) => (
            <li key={s.title}>
              <Link
                href={s.href}
                className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[5rem_1.1fr_1.2fr_14rem_2rem] items-baseline gap-x-6 gap-y-2 border-b border-line py-8 hover:bg-paper-2 transition-colors md:px-2"
              >
                <span className="font-display text-xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-2xl md:text-3xl text-brand-900">{s.title}</h2>
                <Icon name="arrow" className="w-5 h-5 text-brand-700 md:hidden transition-transform group-hover:translate-x-1" />
                <p className="col-start-2 col-span-2 md:col-span-1 md:col-start-3 text-muted">{s.text}</p>
                <p className="col-start-2 col-span-2 md:col-span-1 md:col-start-4 text-sm text-ink/70"><span className="label text-[0.65rem] text-brand-600 block">For</span>{s.target}</p>
                <Icon name="arrow" className="hidden md:block w-5 h-5 text-brand-700 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ol>
      </Container>
      <CtaBand title="Not sure where to start?" text="Tell us your requirement and we will recommend the right mix of services." />
    </>
  );
}
