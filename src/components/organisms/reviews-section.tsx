import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ReviewCard } from "@/components/molecules/review-card";
import { SectionHeader } from "../templates/section-header";
import { REVIEWS } from "@/data/reviews";

export const ReviewsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          name="Testimonials"
          title="What our customer say"
          description="Our customers are at the heart of everything we do. Read real stories from people who transformed their homes with our furniture, reflecting our quality and reliability."
          centered
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full pb-6"
        >
          <CarouselContent>
            {REVIEWS.map((review) => {
              return (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/3"
                  key={review.name}
                >
                  <ReviewCard review={review} />
                </CarouselItem>
              );
            })}
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
      </div>
    </section>
  );
};
