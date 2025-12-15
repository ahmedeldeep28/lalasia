import { ProductCardSkeleton } from "@/components/molecules/product-card-skeleton";

export const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
      {Array.from({ length: 9 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
