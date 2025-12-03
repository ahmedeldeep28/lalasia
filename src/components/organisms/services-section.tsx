import { SectionHeader } from "../templates/section-header";
import ServiceCard from "../molecules/service-card";
import { SERVICES } from "@/data";

export default function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          name="our services"
          title="Explore Our Premium Furniture Services"
          description="We provide a full range of furniture services, from design consultations to delivery and assembly, ensuring quality, care, and your complete satisfaction."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            return <ServiceCard key={service.id} service={service} />;
          })}
        </div>
      </div>
    </section>
  );
}
