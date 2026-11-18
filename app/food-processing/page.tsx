import type { Metadata } from "next";
import { IMG, PageHero, FeatureTiles, ServiceDetail, CtaBand } from "@/components/ui";

export const metadata: Metadata = { title: "Food Dehydration Services" };

export default function FoodProcessingPage() {
  return (
    <>
      <PageHero
        title="Food Dehydration Services"
        subtitle="Advanced drying technologies for fruits, vegetables, spices and herbs."
        image={IMG.spices}
      />
      <FeatureTiles
        items={[
          { icon: "sun", label: "Heat-Pump Dehydration" },
          { icon: "snow", label: "Freeze Drying" },
          { icon: "gear", label: "Processing Support" },
          { icon: "tools", label: "Customized Solutions" },
        ]}
      />
      <ServiceDetail
        cards={[
          { icon: "sun", title: "Heat-Pump Dehydration", text: "Energy-efficient, low-temperature drying that preserves colour, aroma and nutrients." },
          { icon: "snow", title: "Freeze Drying", text: "Premium-quality output with long shelf life for high-value fruits and ingredients." },
          { icon: "gear", title: "Fruits, Vegetables, Spices & Herbs", text: "Process recipes and SOPs tailored to each raw material." },
          { icon: "chart", title: "Technology Benefits", text: "Lower wastage, higher realisation and year-round supply of value-added products." },
        ]}
        audience={["Food processors", "Agri entrepreneurs", "FPOs & cooperatives", "Food brands & exporters"]}
      />
      <CtaBand />
    </>
  );
}
