import { notFound } from "next/navigation";
import { ProductInfo } from "@/components/organisms/product-info";
import { RelatedProducts } from "@/components/organisms/related-products";
import Image from "next/image";
import { getProductBySlug } from "@/services/product-services";
import { getStrapiMedia } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="container py-10 md:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative aspect-12/9 overflow-hidden">
          <Image
            src={getStrapiMedia(product.cover.url)}
            className="size-full object-cover"
            alt="image"
            fill
          />
        </div>
        <ProductInfo product={product} />
      </div>
      <RelatedProducts
        currentProductId={product.id}
        category={product.category.title}
      />
    </div>
  );
}
