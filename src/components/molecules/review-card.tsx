import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { ReviewItem } from "@/types";

type ReviewCardProps = {
  review: ReviewItem;
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const { name, rating, comment } = review;
  return (
    <Card className="p-5 shadow h-full">
      <Image width={40} height={40} src="/icons/quote-up.png" alt="quote" />

      <Text variant="md">{comment}</Text>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            width={50}
            height={50}
            src="/team.png"
            alt="team"
          />
          <Heading as="h4" variant="h5">
            {name}
          </Heading>
        </div>

        <div className="flex items-center gap-1">
          <Image width={24} height={24} src="/icons/star.png" alt="star" />
          <Heading as="h4" variant="h5">
            {rating}
          </Heading>
        </div>
      </div>
    </Card>
  );
};
