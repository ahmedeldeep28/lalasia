import { ProductFilter } from "@/components/molecules/product-filter";
import { ProductGrid } from "@/components/organisms/product-grid";
import { HeroSection } from "@/components/organisms/hero-section";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Metadata } from "next";
import { getProducts } from "@/services/product-services";
import { FilterProductParams } from "@/types";

export const metadata:Metadata = {
  title: "products"
}



export default async function ProductsPage({searchParams}: {
  searchParams: Promise<FilterProductParams>;
}) {
  const filters = await searchParams
  const {data,meta} =  await getProducts(filters)
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
              Showing {meta.pagination.total} results
            </Text>
          </div>

          <ProductGrid products={data} />
        </div>
      </div>
    </>
  );
}
