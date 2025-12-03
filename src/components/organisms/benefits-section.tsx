import { BenefitCard } from "@/components/molecules/benefit-card";
import { BENEFITS } from "@/data";
import { SectionHeader } from "../templates/section-header";

export const BenefitsSection = () => {
  return (
    <section className="benefits py-16">
      <div className="container">
        <SectionHeader
          name="Benefits"
          title="Why Our Furniture Makes Your Home Better"
          description="Discover our most loved pieces, from elegant sofas to practical storage solutions. Furniture that looks beautiful and enhances everyday living."
        />

        <div className="grid grid-cols-12 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
