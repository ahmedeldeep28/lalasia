import { notFound } from "next/navigation";
import { ProductInfo } from "@/components/organisms/product-info";
import { RelatedProducts } from "@/components/organisms/related-products";
import { getProductBySlug } from "@/services/product-services";
import { getStrapiMedia } from "@/lib/utils";
import { ProductImageGallery } from "@/components/organisms/product-image-gallery";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }
  const productMedia = product.media.map((img) => getStrapiMedia(img.url))

  return (
    <div className="container py-10 md:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProductImageGallery photos={[getStrapiMedia(product.cover.url),...productMedia]} />
   
        <ProductInfo product={product} />
      </div>
      <RelatedProducts
        currentProductId={product.id}
        category={product.category.title}
      />
    </div>
  );
}
