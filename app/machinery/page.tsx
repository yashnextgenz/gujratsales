import type { Metadata } from "next";
import { IMG, PageHero, FeatureTiles, ServiceDetail, CtaBand } from "@/components/ui";

export const metadata: Metadata = { title: "Machinery & Plant Solutions" };

export default function MachineryPage() {
  return (
    <>
      <PageHero
        title="Machinery & Plant Solutions"
        subtitle="Dehydrators, freeze-dryers and complete project support."
        image={IMG.factory}
      />
      <FeatureTiles
        items={[
          { icon: "factory", label: "Machinery Supply" },
          { icon: "chart", label: "Capacity Selection" },
          { icon: "tools", label: "Technical Consultation" },
          { icon: "handshake", label: "Project Coordination" },
        ]}
      />
      <ServiceDetail
        cards={[
          { icon: "factory", title: "Equipment & Plant Solutions", text: "Dehydrators, freeze-dryers, pulverisers, pellet mills and allied equipment." },
          { icon: "chart", title: "Capacity & Application Guidance", text: "Right-sized machines based on raw material, volume and target product." },
          { icon: "tools", title: "Technical Consultation", text: "Layout, utilities, installation and operator training." },
          { icon: "handshake", title: "Project Integration", text: "End-to-end coordination from DPR to commissioning and market linkage." },
        ]}
        audience={["Factories", "Investors & new entrepreneurs", "Food processing units", "Biomass & bioenergy projects"]}
      />
      <CtaBand />
    </>
  );
}
