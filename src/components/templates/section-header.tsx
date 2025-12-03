import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  name: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  name,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) => {
  if (centered) {
    return (
      <div
        className={cn("w-full lg:w-1/2 text-center mx-auto mb-12", className)}
      >
        <Text variant="lg" color="secondary" className="mb-3">
          {name}
        </Text>
        <Heading as="h2" variant="h2" className="capitalize mb-3">
          {title}
        </Heading>
        {description && (
          <Text variant="lg" color="muted">
            {description}
          </Text>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row justify-between items-center mb-12",
        className
      )}
    >
      <div className="w-full lg:max-w-lg">
        <Text variant="lg" color="secondary" className="mb-3">
          {name}
        </Text>
        <Heading as="h2" variant="h2" className="capitalize">
          {title}
        </Heading>
      </div>
      {description && (
        <div className="w-full lg:max-w-lg">
          <Text variant="lg" color="muted">
            {description}
          </Text>
        </div>
      )}
    </div>
  );
};
