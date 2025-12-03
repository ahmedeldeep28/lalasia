import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { Text } from "../ui/text";
import { Heading } from "../ui/heading";
import { Article } from "@/types";

type BlogCardProps = {
  article: Article;
};
export function BlogCard({ article }: BlogCardProps) {
  const { title, image, category, description, createAt } = article;
  return (
    <Card className="border-0 gap-y-0 shadow-none py-0 group">
      <CardHeader className="relative w-full aspect-12/9 overflow-hidden">
        <Image
          fill
          src={image}
          alt="blog card"
          className="object-cover transition-transform group-hover:scale-105"
        />
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex justify-between my-2.5">
          <Text color="muted">{category}</Text>
          <Text color="muted">{createAt}</Text>
        </div>
        <Link href={`#`}>
          <Heading
            variant="h4"
            className="transition hover:text-primary line-clamp-2"
          >
            {title}
          </Heading>
        </Link>

        <Text variant="sm" color="muted" className="line-clamp-3 mt-2">
          {description}
        </Text>
      </CardContent>
    </Card>
  );
}
