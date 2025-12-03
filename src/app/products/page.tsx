import { ProductFilter } from "@/components/molecules/product-filter";
import { ProductGrid } from "@/components/organisms/product-grid";
import { HeroSection } from "@/components/organisms/hero-section";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { PRODUCTS } from "@/data";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "products"
}

interface SearchParams {
  term?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  page?: string;
}

export default async function ProductsPage(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const term = searchParams.term || "";
  const category = searchParams.category || "";
  const allProducts = PRODUCTS;

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = category === "" || product.category === category;

    return matchesCategory;
  });

  return (
    <>
      <HeroSection
        title="Discover Our Latest Furniture Collections"
        text="We display products based on the newest items in our catalog. If you're looking for older collections or specific items, simply search for the product name and explore our full range with ease."
        image="/products-hero.png"
      />

      <div className="container pb-10">
        <ProductFilter />

        <div className="mt-12">
          <div className="mb-6">
            <Heading as="h2" variant="h2" className="mb-2">
              Total Product
            </Heading>
            <Text variant="sm" color="muted">
              Showing {filteredProducts.length} results
            </Text>
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </>
  );
}
