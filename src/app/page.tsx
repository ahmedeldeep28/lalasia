import { HeroSection } from "@/components/organisms/hero-section";
import { SearchBar } from "@/components/molecules/search-bar";
import { BenefitsSection } from "@/components/organisms/benefits-section";
import { ReviewsSection } from "@/components/organisms/reviews-section";
import PopularProducts from "@/components/organisms/popular-products";

export default async function Home() {
  return (
    <>
      <HeroSection
        title="Discover Furniture With High Quality Wood"
        text="We bring you furniture crafted with modern design and long-lasting quality. Discover our latest collections and explore pieces that bring comfort, style, and warmth into every room of your home."
        image="/home-hero.png"
      >
        <SearchBar />
      </HeroSection>

      <BenefitsSection />

      <PopularProducts />
      <ReviewsSection />
    </>
  );
}
