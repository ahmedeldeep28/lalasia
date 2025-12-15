import { ProductDetailSkeleton } from "@/components/templates/product-detail-skeleton";

export default function Loading() {
  return (
    <div className="container py-10 md:py-20">
      <ProductDetailSkeleton />
    </div>
  );
}
