import Image from "next/image";
import { Text } from "../ui/text";
import { Heading } from "../ui/heading";
import { cn } from "@/lib/utils";

type WorkCardProps = {
  title: string;
  description: string;
  image: string;
  className?: string;
};

export function WorkCard({
  title,
  description,
  image,
  className,
}: WorkCardProps) {
  return (
    <div className={cn("relative overflow-hidden group", className)}>
      <Image
        src={image}
        fill
        className="object-cover transition-transform group-hover:scale-105"
        alt="project"
      />
      <div className="absolute inset-0 bg-foreground/50"></div>
      <div className="absolute  bottom-6 left-6 space-y-1">
        <Heading variant="h3" color="background">
          {title}
        </Heading>
        <Text variant="sm" color="background">
          {description}
        </Text>
      </div>
    </div>
  );
}
