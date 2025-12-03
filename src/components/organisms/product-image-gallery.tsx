"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselThumb,
} from "../ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type ProductImageGalleryProps = {
  photos: string[];
};

export function ProductImageGallery({ photos }: ProductImageGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      emblaThumbsApi?.scrollTo(api.selectedScrollSnap());
    });
  }, [api, emblaThumbsApi]);

  return (
    <Carousel setApi={setApi} className="w-full  space-y-2">
      <CarouselContent>
        {photos.map((image, idx) => (
          <CarouselItem key={idx}>
            <div className="relative aspect-12/9 overflow-hidden">
              <Image
                src={image}
                className="size-full object-cover"
                alt="image"
                fill
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex gap-2 py-2">
          {photos.map((image, index) => (
            <CarouselThumb
              className="size-8 md:size-10"
              key={index}
              index={index}
            >
              <Image
                src={image}
                className="size-full object-cover"
                alt="image"
                fill
              />
            </CarouselThumb>
          ))}
        </div>
      </div>
    </Carousel>
  );
}
