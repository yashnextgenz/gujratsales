import type { Metadata } from "next";
import { IMG, PageHero, FeatureTiles, ServiceDetail, CtaBand } from "@/components/ui";

export const metadata: Metadata = { title: "Napier & Organic Farming" };

export default function AgriculturePage() {
  return (
    <>
      <PageHero
        title="Napier & Organic Farming"
        subtitle="High-yield Napier cultivation, farm development and organic soil solutions."
        image={IMG.grass}
      />
      <FeatureTiles
        items={[
          { icon: "sprout", label: "Planting Material" },
          { icon: "book", label: "Farm Guidance" },
          { icon: "drop", label: "Organic Inputs" },
          { icon: "box", label: "Farm Packages" },
        ]}
      />
      <ServiceDetail
        cards={[
          { icon: "sprout", title: "Napier (Bajwa-6) Planting Material", text: "Quality-assured stem cuttings of high-yield Napier for fodder and biomass." },
          { icon: "book", title: "Cultivation Support", text: "Land preparation, irrigation planning and harvest scheduling guidance." },
          { icon: "drop", title: "Organic Compost & Bio-Solutions", text: "Organic inputs to improve soil health and long-term productivity." },
          { icon: "box", title: "Farm Development Packages", text: "Turnkey packages for new farms, including buy-back linkages." },
        ]}
        audience={["Farmers", "FPOs (Farmer Producer Organisations)", "Landholders", "Dairy & biomass projects"]}
      />
      <CtaBand />
    </>
  );
}
