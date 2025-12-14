import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatPrice, getStrapiMedia } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { title, slug, price, cover, material, category } = product;
  return (
    <Card className="group overflow-hidden gap-3 py-0 border-0 shadow-none">
      <CardHeader className="relative w-full aspect-12/9 overflow-hidden">
        <Image
          fill
          src={getStrapiMedia(cover.url)}
          alt={title}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex justify-between items-center">
          <Text color="muted" className="capitalize">
            {category.title}
          </Text>
        </div>

        <Link href={`/products/${slug}`}>
          <Heading
            as="h3"
            variant="h3"
            className="transition-colors hover:text-primary mb-0.5"
          >
            {title}
          </Heading>
        </Link>

        <Text color="muted" className="mb-2">
          {material}
        </Text>

        <Heading as="h4" variant="h4">
          {formatPrice(price)}
        </Heading>
      </CardContent>
    </Card>
  );
};
