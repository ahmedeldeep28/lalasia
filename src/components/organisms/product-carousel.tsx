"use client";

import { ProductCard } from "@/components/molecules/product-card";
import { Product } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full pb-6"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={"default"}
        className="left-0 top-full size-10 text-xl hover:bg-foreground/80 bg-foreground text-background"
      />
      <CarouselNext
        variant={"default"}
        className="right-0 top-full size-10 text-xl hover:bg-foreground/80 bg-foreground text-background"
      />
    </Carousel>
  );
};
