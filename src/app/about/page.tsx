import { HeroSection } from "@/components/organisms/hero-section";
import OurMissionSection from "@/components/organisms/our-mission-section";
import ServicesSection from "@/components/organisms/services-section";
import TeamSection from "@/components/organisms/team-section";
import PortfolioSection from "@/components/organisms/portfolio-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
};
export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="A Story of Craftsmanship and Modern Living"
        text="We believe that great furniture transforms spaces and enriches daily life. Our journey began with a passion for quality materials, thoughtful design, and creating pieces that fit beautifully into every home."
        image="/about-hero.png"
      />
      <ServicesSection />
      <OurMissionSection />
      <PortfolioSection />
      <TeamSection />
    </>
  );
}
