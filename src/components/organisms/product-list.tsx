import { ProductGrid } from "@/components/organisms/product-grid";
import { getProducts } from "@/services/product-services";
import { FilterProductParams } from "@/types";
import { FeedbackState } from "@/components/molecules/feedback-state";

export async function ProductList({
  filters,
}: {
  filters: FilterProductParams;
}) {
  const { data } = await getProducts(filters);

  if (!data?.length) {
    return (
      <FeedbackState
        state="empty"
        title="No products found"
        message="We couldn't find any products matching your filters."
      />
    );
  }

  return <ProductGrid products={data} />;
}
