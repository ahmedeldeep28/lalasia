import { ServiceItem } from "@/types";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
};

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const { id, title, description } = service;
  return (
    <div className={cn("space-y-1.5",className)}>
      <Heading variant="h2" color="primary">
        {id}
      </Heading>
      <Heading variant="h3">{title}</Heading>
      <Text variant="sm" color="muted">
        {description}
      </Text>
    </div>
  );
}
