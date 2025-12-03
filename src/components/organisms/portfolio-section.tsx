import { WorkCard } from "@/components/molecules/work-card";
import { SectionHeader } from "@/components/templates/section-header";

export default function PortfolioSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          name="Portfolio"
          title="Amazing Project We’ve Done Before"
          description="Explore a selection of home projects featuring our furniture. From modern minimalism to classic styles, see how our pieces bring comfort and elegance to any space."
        />
        <div className="grid grid-cols-12 grid-rows-3 lg:grid-rows-2 gap-4 min-h-[85vh] lg:min-h-[70vh]">
          <WorkCard
            title="Siska Kohl’s Bedroom"
            description="We start renovating her bedroom with minimalist"
            image="/projects/project (1).png"
            className="col-span-12 lg:col-span-4 lg:row-span-full"
          />
          <WorkCard
            title="Siska Kohl’s Bedroom"
            description="We start renovating her bedroom with minimalist"
            image="/projects/project (2).png"
            className="col-span-12 lg:col-span-8"
          />
          <WorkCard
            title="Siska Kohl’s Bedroom"
            description="We start renovating her bedroom with minimalist"
            image="/projects/project (3).png"
            className="col-span-12 lg:col-span-8"
          />
        </div>
      </div>
    </section>
  );
}
