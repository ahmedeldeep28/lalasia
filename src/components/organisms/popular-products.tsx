import { SectionHeader } from "../templates/section-header";
import { ProductCarousel } from "./product-carousel";
import { getProducts } from "@/services/product-services";

export default async function PopularProducts() {
  const {data} = await getProducts();
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          name="Product"
          title="Our popular products"
          description="Discover our most loved pieces, from elegant sofas to practical storage solutions. Furniture that looks beautiful and enhances everyday living."
          centered
        />

        <ProductCarousel products={data} />
      </div>
    </section>
  );
}
